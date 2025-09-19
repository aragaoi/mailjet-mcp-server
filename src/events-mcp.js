import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Events MCP Server
 *
 * Provides event tracking functionality for email delivery and engagement events.
 * Includes tools for retrieving opens, clicks, bounces, spam reports, and other
 * message events for analytics and automation purposes.
 */
class EventsMcp extends MailjetMcpBase {
  constructor() {
    super("mailjet-events", "Event tracking for email delivery and engagement");
  }

  /**
   * Returns the tool ID prefixes for event-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return ["get_v3_eventcallbackurl", "get_v3_eventcallbackurl_id"];
  }
}

// Create and start the MCP server
const eventsMcp = new EventsMcp();
eventsMcp.main().catch(console.error);
