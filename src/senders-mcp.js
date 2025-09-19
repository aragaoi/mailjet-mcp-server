import { MailjetMcpBase } from "./shared/mcp-base.js";
import process from "node:process";

/**
 * Mailjet Senders MCP Server
 * Provides tools for managing senders and sender statistics
 */
class SendersMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-senders",
      "Mailjet Senders MCP Server - Manage senders and sender statistics"
    );
  }

  /**
   * Returns the tool ID prefixes for sender-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_sender",
      "post_v3_sender",
      "put_v3_sender",
      "delete_v3_sender",
      "get_v3_senderstatistics",
      "get_v3_metasender",
      "post_v3_metasender",
      "put_v3_metasender",
      "delete_v3_metasender"
    ];
  }
}

// Create and start the senders MCP server
const sendersMcp = new SendersMcp();

// Only auto-execute when not in test environment
if (process.env.NODE_ENV !== "test") {
  sendersMcp.main();
}

export { SendersMcp };
export default sendersMcp;
