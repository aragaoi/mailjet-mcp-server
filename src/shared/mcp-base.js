import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync as readJsonFile, readFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";
import { 
  loadOpenApiSpec, 
  extractEndpoints, 
  getOperationDetails, 
  buildParamsSchema, 
  sanitizeToolId, 
  registerTool,
  OPENAPI_SPEC 
} from "./mailjet-utils.js";
import { MailjetApiSchema } from "../mailjet-openapi-schema.js";

const packageInfo = JSON.parse(readJsonFile(new URL("../../package.json", import.meta.url), "utf-8"));

/**
 * Base class for Mailjet MCP servers
 */
export class MailjetMcpBase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.server = new McpServer({
      name: this.name,
      version: packageInfo.version,
    });
  }


  /**
   * Generates MCP tools from the OpenAPI specification
   * @param {z.infer<typeof MailjetApiSchema>} openApiSpec - Parsed OpenAPI specification
   * @param {string[]} toolPrefixes - Array of tool ID prefixes to filter by
   */
  generateToolsFromOpenApi(openApiSpec, toolPrefixes = []) {
    const endpoints = extractEndpoints(openApiSpec);

    for (const path of endpoints.GET) {
      const method = "GET";
      try {
        const operationDetails = getOperationDetails(openApiSpec, method, path);

        if (!operationDetails) {
          console.warn(`Could not match endpoint: ${method} ${path} in OpenAPI spec`);
          continue;
        }

        const { operation, operationId } = operationDetails;
        const paramsSchema = buildParamsSchema(operation, openApiSpec);
        const toolId = sanitizeToolId(operationId);
        
        // Check if tool matches any of the required prefixes
        if (toolPrefixes.length > 0 && !toolPrefixes.some(prefix => toolId.startsWith(prefix))) {
          continue;
        }
        
        const toolDescription = operation?.summary || `${method.toUpperCase()} ${path}`;

        registerTool(this.server, toolId, toolDescription, paramsSchema, method, path, operation);
      } catch (/** @type {any} */ error) {
        console.error(`Failed to process endpoint ${method} ${path}: ${error.message}`);
      }
    }

    return;
  }

  /**
   * Main function to initialize and start the MCP server
   */
  async main() {
    try {
      // Load and parse OpenAPI spec
      const openApiSpec = await loadOpenApiSpec(OPENAPI_SPEC);

      try {
        const parsedOpenApiSpec = MailjetApiSchema.parse(openApiSpec);

        // Generate tools from the spec with prefix filtering
        this.generateToolsFromOpenApi(parsedOpenApiSpec, this.getToolPrefixes());
      } catch (/** @type { any } */ error) {
        throw Error(error);
      }

      // Connect to the transport
      const transport = new StdioServerTransport();
      await this.server.connect(transport);
      // This is an STDIO server and log msgs are sent to stdio by default
      // So send to console.error to avoid errors on server startup
      console.error(`${this.name} MCP Server ${packageInfo.version} running on stdio`);
    } catch (error) {
      console.error(`Fatal error in ${this.name} main():`, error);
      if (process.env.NODE_ENV !== "test") {
        process.exit(1);
      }
    }
  }

  /**
   * Abstract method to be implemented by subclasses
   * @returns {string[]} Array of tool ID prefixes to filter by
   */
  getToolPrefixes() {
    throw new Error("getToolPrefixes must be implemented by subclass");
  }
}