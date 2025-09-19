import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Send Email MCP Server
 *
 * Provides transactional email sending functionality through Mailjet's Send API.
 * Includes tools for sending individual emails, managing email content,
 * and handling transactional messaging workflows.
 */
class SendEmailMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-send-email",
      "Transactional email sending through Mailjet Send API"
    );
  }

  /**
   * Returns the tool ID prefixes for send email operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      // Note: Send API endpoints typically use different paths like /v3/send or /v3.1/send
      // These may need to be identified from the OpenAPI spec
      "post_v3_send",
      "post_v3_1_send",
    ];
  }
}

// Create and start the MCP server
const sendEmailMcp = new SendEmailMcp();
sendEmailMcp.main().catch(console.error);
