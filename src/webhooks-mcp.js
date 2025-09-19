import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Webhooks MCP Server
 *
 * Provides webhook configuration for email event notifications.
 * Includes tools for managing webhook URLs, event callbacks, and notification settings
 * to track email delivery and engagement events.
 */
class WebhooksMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-webhooks",
      "Webhook configuration for email event notifications"
    );
  }

  /**
   * Returns the tool ID prefixes for webhook-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return ["get_v3_eventcallbackurl", "get_v3_eventcallbackurl_id"];
  }
}

// Create and start the MCP server
const webhooksMcp = new WebhooksMcp();
webhooksMcp.main().catch(console.error);
