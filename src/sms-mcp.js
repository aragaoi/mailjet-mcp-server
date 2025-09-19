import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * SMS MCP Server
 *
 * Provides SMS messaging functionality through Mailjet's SMS API.
 * Includes tools for sending SMS messages, managing SMS campaigns,
 * and handling SMS-related operations.
 */
class SmsMcp extends MailjetMcpBase {
  constructor() {
    super("mailjet-sms", "SMS messaging through Mailjet SMS API");
  }

  /**
   * Returns the tool ID prefixes for SMS operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      // Note: SMS API endpoints typically use different paths like /v4/sms
      // These may need to be identified from the OpenAPI spec
      "post_v4_sms",
      "get_v4_sms",
    ];
  }
}

// Create and start the MCP server
const smsMcp = new SmsMcp();
smsMcp.main().catch(console.error);
