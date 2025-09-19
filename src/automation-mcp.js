import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Automation MCP Server
 *
 * Provides automated email workflow functionality for Mailjet.
 * Includes tools for creating and managing automated email sequences,
 * triggers, and customer journey workflows.
 */
class AutomationMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-automation",
      "Automated email workflows and customer journeys"
    );
  }

  /**
   * Returns the tool ID prefixes for automation operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      // Note: Automation endpoints may have specific prefixes
      // These need to be identified from the OpenAPI spec
      "get_v3_workflow",
      "post_v3_workflow",
      "get_v3_automation",
    ];
  }
}

// Create and start the MCP server
const automationMcp = new AutomationMcp();
automationMcp.main().catch(console.error);
