import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Segmentation MCP Server
 *
 * Provides contact segmentation functionality for targeted campaigns.
 * Includes tools for creating and managing contact filters and segments
 * based on contact properties and engagement behavior.
 */
class SegmentationMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-segmentation",
      "Contact segmentation for targeted campaigns"
    );
  }

  /**
   * Returns the tool ID prefixes for segmentation-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return ["get_v3_contactfilter", "get_v3_contactfilter_id"];
  }
}

// Create and start the MCP server
const segmentationMcp = new SegmentationMcp();
segmentationMcp.main().catch(console.error);
