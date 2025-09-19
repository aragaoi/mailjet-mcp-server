import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Statistics MCP Server
 *
 * Provides analytics and metrics functionality for Mailjet campaigns, contacts, and overall performance.
 * Includes tools for retrieving time-series metrics, campaign statistics, contact engagement data,
 * geographic statistics, and performance counters.
 */
class StatisticsMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-statistics",
      "Statistics and analytics for Mailjet campaigns and contacts"
    );
  }

  /**
   * Returns the tool ID prefixes for statistics-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_activitycounters",
      "get_v3_aggregategraphstatistics",
      "get_v3_apikeytotals",
      "get_v3_bouncestatistics",
      "get_v3_clickstatistics",
      "get_v3_contactstatistics",
      "get_v3_domainstatistics",
      "get_v3_geostatistics",
      "get_v3_graphstatistics",
      "get_v3_listrecipientstatistics",
      "get_v3_liststatistics",
      "get_v3_messageinformation",
      "get_v3_messagesentstatistics",
      "get_v3_senderstatistics",
    ];
  }
}

// Create and start the MCP server
const statisticsMcp = new StatisticsMcp();
statisticsMcp.main().catch(console.error);
