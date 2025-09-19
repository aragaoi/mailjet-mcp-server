import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Messages MCP Server
 *
 * Provides message management functionality for individual email messages sent through Mailjet.
 * Includes tools for retrieving message details, delivery status, message history,
 * and message-related statistics.
 */
class MessagesMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-messages",
      "Message management for individual email messages"
    );
  }

  /**
   * Returns the tool ID prefixes for message-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_message",
      "get_v3_message_id",
      "get_v3_messagehistory",
      "get_v3_messageinformation",
      "get_v3_messagesentstatistics",
      "get_v3_messagestate",
    ];
  }
}

// Create and start the MCP server
const messagesMcp = new MessagesMcp();
messagesMcp.main().catch(console.error);
