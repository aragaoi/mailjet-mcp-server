import { MailjetMcpBase } from "./shared/mcp-base.js";
import process from "node:process";

/**
 * Mailjet Templates MCP Server
 * Provides tools for managing email templates and newsletter templates
 */
class TemplatesMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-templates",
      "Mailjet Templates MCP Server - Manage email templates and newsletter templates"
    );
  }

  /**
   * Returns the tool ID prefixes for template-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_template",
      "post_v3_template",
      "put_v3_template", 
      "delete_v3_template",
      "get_v3_newslettertemplate",
      "post_v3_newslettertemplate",
      "put_v3_newslettertemplate",
      "get_v3_newslettertemplatecategory"
    ];
  }
}

// Create and start the templates MCP server
const templatesMcp = new TemplatesMcp();

// Only auto-execute when not in test environment
if (process.env.NODE_ENV !== "test") {
  templatesMcp.main();
}

export { TemplatesMcp };
export default templatesMcp;
