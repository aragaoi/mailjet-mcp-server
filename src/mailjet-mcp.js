import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync } from "node:fs";
import process from "node:process";

const packageInfo = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf-8")
);

export const server = new McpServer({
  name: "mailjet",
  version: packageInfo.version,
});

/**
 * DEPRECATED: This MCP server has been split into specialized servers.
 *
 * This tool provides guidance on the new modular structure and helps you
 * choose the appropriate specialized MCP server for your needs.
 */
server.tool(
  "get_migration_guide",
  "🚨 DEPRECATED: Get guidance on migrating to the new modular MCP structure",
  {
    type: "object",
    properties: {},
    additionalProperties: false,
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: `# 🚨 Mailjet MCP Migration Guide

## This MCP server is deprecated!

The original monolithic Mailjet MCP server has been **split into 11 specialized servers** for better organization and focused functionality.

## 📋 Available Specialized MCP Servers

### Core Email Marketing
- **Campaigns MCP** - \`src/campaigns-mcp.js\` - 11 tools for campaign management
- **Templates MCP** - \`src/templates-mcp.js\` - 6 tools for template management  
- **Contacts MCP** - \`src/contacts-mcp.js\` - 8 tools for contact management
- **Senders MCP** - \`src/senders-mcp.js\` - 5 tools for sender management

### Analytics & Monitoring
- **Statistics MCP** - \`src/statistics-mcp.js\` - 21 tools for performance analytics
- **Messages MCP** - \`src/messages-mcp.js\` - 6 tools for message tracking

### Configuration & Integration
- **Settings MCP** - \`src/settings-mcp.js\` - 12 tools for account settings
- **Domains MCP** - \`src/domains-mcp.js\` - 2 tools for domain management
- **Webhooks MCP** - \`src/webhooks-mcp.js\` - 2 tools for event notifications
- **Segmentation MCP** - \`src/segmentation-mcp.js\` - 2 tools for contact segmentation
- **Send Email MCP** - \`src/send-email-mcp.js\` - Transactional messaging

## 🚀 How to Use the New Structure

### Option 1: Run Individual Servers
\`\`\`bash
# For campaign management
node src/campaigns-mcp.js

# For analytics
node src/statistics-mcp.js

# For contact management
node src/contacts-mcp.js
\`\`\`

### Option 2: Configure All in Claude Desktop
Update your \`claude_desktop_config.json\` to include the specialized servers:

\`\`\`json
{
  "mcpServers": {
    "mailjet-campaigns": {
      "command": "node",
      "args": ["/path/to/mailjet-mcp-server/src/campaigns-mcp.js"],
      "env": {
        "MAILJET_API_KEY": "your_api_key:your_secret_key"
      }
    },
    "mailjet-statistics": {
      "command": "node", 
      "args": ["/path/to/mailjet-mcp-server/src/statistics-mcp.js"],
      "env": {
        "MAILJET_API_KEY": "your_api_key:your_secret_key"
      }
    }
    // ... add other servers as needed
  }
}
\`\`\`

## 📚 Documentation

See the updated README.md for complete documentation of all specialized MCP servers.

## ⚠️ Migration Steps

1. **Stop using this deprecated server**
2. **Choose the specialized servers you need** based on your use case
3. **Update your Claude Desktop configuration** to use the new servers
4. **Test the new setup** with your specific workflows

## 🆘 Need Help?

- Check the README.md for detailed server documentation
- Each specialized server has focused tools for specific Mailjet functionality
- You can run multiple servers simultaneously for comprehensive coverage

---
*This migration provides better organization, focused functionality, and easier maintenance.*`,
        },
      ],
    };
  }
);

/**
 * Main function to initialize and start the deprecated MCP server
 */
async function main() {
  try {
    // Connect to the transport
    const transport = new StdioServerTransport();
    await server.connect(transport);

    // This is an STDIO server and log msgs are sent to stdio by default
    // So send to console.error to avoid errors on server startup
    console.error(
      `⚠️  DEPRECATED: Mailjet MCP Server ${packageInfo.version} - Use specialized servers instead`
    );
    console.error(
      `📖 Run 'get_migration_guide' tool for migration instructions`
    );
  } catch (error) {
    console.error("Fatal error in main():", error);
    if (process.env.NODE_ENV !== "test") {
      process.exit(1);
    }
  }
}

// Start the deprecated server
main().catch(console.error);
