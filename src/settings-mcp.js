import { MailjetMcpBase } from "./shared/mcp-base.js";

/**
 * Settings MCP Server
 *
 * Provides API key and user management functionality for Mailjet accounts.
 * Includes tools for managing API keys, user access permissions, tokens,
 * and application preferences.
 */
class SettingsMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-settings",
      "API keys and user management for Mailjet accounts"
    );
  }

  /**
   * Returns the tool ID prefixes for settings-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_apikey",
      "get_v3_apikey_id",
      "get_v3_apikeyaccess",
      "get_v3_apikeyaccess_id",
      "get_v3_apikeyaccessgrantor",
      "get_v3_apikeyaccessgrantor_id",
      "get_v3_apikeytotals",
      "get_v3_apikeytotals_id",
      "get_v3_apitoken",
      "get_v3_apitoken_id",
      "get_v3_apppreferences",
      "get_v3_apppreferences_id",
    ];
  }
}

// Create and start the MCP server
const settingsMcp = new SettingsMcp();
settingsMcp.main().catch(console.error);
