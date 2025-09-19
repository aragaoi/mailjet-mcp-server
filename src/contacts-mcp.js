import { MailjetMcpBase } from "./shared/mcp-base.js";
import process from "node:process";

/**
 * Mailjet Contacts MCP Server
 * Provides tools for managing contacts, contact lists, and contact properties
 */
class ContactsMcp extends MailjetMcpBase {
  constructor() {
    super(
      "mailjet-contacts",
      "Mailjet Contacts MCP Server - Manage contacts, contact lists, and contact properties"
    );
  }

  /**
   * Returns the tool ID prefixes for contact-related operations
   * @returns {string[]} Array of tool ID prefixes
   */
  getToolPrefixes() {
    return [
      "get_v3_contact",
      "post_v3_contact",
      "put_v3_contact",
      "delete_v3_contact",
      "get_v3_contactslist",
      "post_v3_contactslist",
      "put_v3_contactslist",
      "delete_v3_contactslist",
      "get_v3_contactslistsignup",
      "get_v3_contactdata",
      "post_v3_contactdata",
      "put_v3_contactdata",
      "delete_v3_contactdata",
      "get_v3_contactmetadata",
      "post_v3_contactmetadata",
      "put_v3_contactmetadata",
      "delete_v3_contactmetadata"
    ];
  }
}

// Create and start the contacts MCP server
const contactsMcp = new ContactsMcp();

// Only auto-execute when not in test environment
if (process.env.NODE_ENV !== "test") {
  contactsMcp.main();
}

export { ContactsMcp };
export default contactsMcp;
