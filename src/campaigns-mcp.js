import { MailjetMcpBase } from "./shared/mcp-base.js";
import process from "node:process";

/**
 * Mailjet Campaigns MCP Server
 * Provides tools for managing email campaigns, campaign drafts, and campaign statistics
 */
class CampaignsMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-campaigns",
      "Mailjet Campaigns MCP Server - Manage email campaigns, drafts, and statistics"
    );
  }

  /**
   * Returns the tool ID prefixes for campaign-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_campaign",
      "post_v3_campaign", 
      "put_v3_campaign",
      "delete_v3_campaign",
      "get_v3_campaigndraft",
      "post_v3_campaigndraft",
      "put_v3_campaigndraft",
      "delete_v3_campaigndraft",
      "get_v3_campaignstatistics",
      "get_v3_campaignoverview",
      "get_v3_campaigngraphstatistics",
      "get_v3_campaignaggregate"
    ];
  }
}

// Create and start the campaigns MCP server
const campaignsMcp = new CampaignsMcp();

// Only auto-execute when not in test environment
if (process.env.NODE_ENV !== "test") {
  campaignsMcp.main();
}

export { CampaignsMcp };
export default campaignsMcp;
