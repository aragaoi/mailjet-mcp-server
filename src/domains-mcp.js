import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Domains MCP Server
 *
 * Provides domain management and validation functionality for email sending.
 * Includes tools for managing sender domains, DNS configuration, and domain validation.
 */
class DomainsMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-domains",
      "Domain management and validation for email sending"
    );
  }

  /**
   * Returns the tool ID prefixes for domain-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return ["get_v3_dns", "get_v3_dns_id"];
  }
}

// Create and start the MCP server
const domainsMcp = new DomainsMcp();
domainsMcp.main().catch(console.error);
