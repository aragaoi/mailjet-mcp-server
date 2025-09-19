# Mailjet MCP Servers
[![MCP](https://img.shields.io/badge/MCP-Server-blue.svg)](https://github.com/modelcontextprotocol)

## Overview

This project provides multiple Model Context Protocol (MCP) servers for the [Mailjet API](https://www.mailjet.com), enabling compatible AI agents (e.g. Claude Desktop) to interact with specific Mailjet API contexts through focused, specialized tool interfaces.

The project includes **11 specialized MCP servers**, each focused on a specific aspect of email marketing:

- **Campaigns MCP** - `src/campaigns-mcp.js` - Manage email campaigns, drafts, and campaign statistics  
- **Templates MCP** - `src/templates-mcp.js` - Manage email templates and newsletter templates
- **Contacts MCP** - `src/contacts-mcp.js` - Manage contacts, contact lists, and contact data
- **Senders MCP** - `src/senders-mcp.js` - Manage senders and sender statistics
- **Statistics MCP** - `src/statistics-mcp.js` - Comprehensive analytics and performance metrics
- **Messages MCP** - `src/messages-mcp.js` - Individual email message management and tracking
- **Settings MCP** - `src/settings-mcp.js` - API key and user account management
- **Domains MCP** - `src/domains-mcp.js` - Domain management and validation for email sending
- **Webhooks MCP** - `src/webhooks-mcp.js` - Event notification and webhook configuration
- **Segmentation MCP** - `src/segmentation-mcp.js` - Contact segmentation and filtering for targeted campaigns
- **Send Email MCP** - `src/send-email-mcp.js` - Transactional email sending through Mailjet's Send API

## Quick Start

### Manual Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mailgun/mailjet-mcp-server.git
   cd mailjet-mcp-server
   ```

2. Install dependencies and build:
   ```bash
   pnpm install
   ```

3. Configure Claude Desktop:

   Create or modify the config file:
   - MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%/Claude/claude_desktop_config.json`


Then start any of the MCP servers:

```sh
# Core Email Marketing MCPs
node src/campaigns-mcp.js    # Campaign management
node src/templates-mcp.js    # Template management  
node src/contacts-mcp.js     # Contact management
node src/senders-mcp.js      # Sender management

# Analytics & Monitoring MCPs
node src/statistics-mcp.js   # Performance analytics
node src/messages-mcp.js     # Message tracking

# Configuration & Integration MCPs  
node src/settings-mcp.js     # Account settings
node src/domains-mcp.js      # Domain management
node src/webhooks-mcp.js     # Event notifications
node src/segmentation-mcp.js # Contact segmentation
node src/send-email-mcp.js   # Transactional sending
```

   Add the following configuration to use all MCP servers:
   ```json
   {
       "mcpServers": {
           "mailjet-campaigns": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/campaigns-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-templates": {
               "command": "node", 
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/templates-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-contacts": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/contacts-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-senders": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/senders-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-statistics": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/statistics-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-messages": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/messages-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-settings": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/settings-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-domains": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/domains-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-webhooks": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/webhooks-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-segmentation": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/segmentation-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           },
           "mailjet-send-email": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailjet-mcp-server/src/send-email-mcp.js"],
               "env": {
                   "MAILJET_API_KEY": "YOUR_api_key:YOUR_secret_key"
               }
           }
       }
   }
   ```

### Supported environment variables

The following environment variables are currently supported by the server:

```sh
MAILJET_API_KEY="your_api_key:your_secret_key" # REQUIRED, used for authenticating your account
MAILJET_API_REGION="eu" # OPTIONAL, used to change to the EU servers, if desired
```

## MCP Servers

### Campaigns MCP (`src/campaigns-mcp.js`)
**Purpose**: Manage email campaigns, campaign drafts, and campaign statistics

**Tools Available**: 11 tools
- `get_v3_campaign` - List campaigns
- `get_v3_campaign_id` - Get specific campaign
- `get_v3_campaigndraft` - List campaign drafts
- `post_v3_campaigndraft` - Create campaign draft
- `put_v3_campaigndraft` - Update campaign draft
- `get_v3_campaignstatistics` - Get campaign statistics
- `get_v3_campaignoverview` - Get campaign overview
- `get_v3_campaigngraphstatistics` - Get campaign graph statistics
- `get_v3_campaignaggregate` - Get campaign aggregates

### Templates MCP (`src/templates-mcp.js`)
**Purpose**: Manage email templates and newsletter templates

**Tools Available**: 6 tools
- `get_v3_template` - List templates
- `post_v3_template` - Create template
- `put_v3_template` - Update template
- `get_v3_template_id` - Get specific template
- `delete_v3_template` - Delete template
- `get_v3_newslettertemplate` - List newsletter templates
- `get_v3_newslettertemplatecategory` - List newsletter template categories

### Contacts MCP (`src/contacts-mcp.js`)
**Purpose**: Manage contacts, contact lists, and contact data

**Tools Available**: 8 tools
- `get_v3_contact` - List contacts
- `post_v3_contact` - Create contact
- `put_v3_contact` - Update contact
- `get_v3_contact_id` - Get specific contact
- `get_v3_contactslist` - List contact lists
- `post_v3_contactslist` - Create contact list
- `put_v3_contactslist` - Update contact list
- `get_v3_contactdata` - Get contact data
- `get_v3_contactmetadata` - Get contact metadata

### Senders MCP (`src/senders-mcp.js`)
**Purpose**: Manage senders and sender statistics

**Tools Available**: 5 tools
- `get_v3_sender` - List senders
- `post_v3_sender` - Create sender
- `put_v3_sender` - Update sender
- `get_v3_sender_id` - Get specific sender
- `delete_v3_sender` - Delete sender
- `get_v3_senderstatistics` - Get sender statistics
- `get_v3_metasender` - List meta senders

### Statistics MCP (`src/statistics-mcp.js`)
**Purpose**: Comprehensive analytics and performance metrics

**Tools Available**: 21 tools
- `get_v3_activitycounters` - Time-series metrics for activities and events
- `get_v3_aggregategraphstatistics` - Combined metrics for multiple campaigns
- `get_v3_bouncestatistics` - Email delivery failure statistics
- `get_v3_clickstatistics` - Data on recipient link clicks
- `get_v3_contactstatistics` - Email engagement metrics by individual contact
- `get_v3_domainstatistics` - Performance metrics aggregated by email domain
- `get_v3_geostatistics` - Email engagement metrics by geographic location
- `get_v3_graphstatistics` - Time-series statistics for visual representation
- `get_v3_listrecipientstatistics` - Engagement metrics for list subscribers
- `get_v3_liststatistics` - Performance metrics for contact lists
- `get_v3_messageinformation` - Message details associated with campaigns
- `get_v3_messagesentstatistics` - Performance metrics for individual sent emails
- `get_v3_senderstatistics` - Performance metrics by sender address

### Messages MCP (`src/messages-mcp.js`)
**Purpose**: Individual email message management and tracking

**Tools Available**: 6 tools
- `get_v3_message` - List individual email messages
- `get_v3_message_id` - Get specific message details
- `get_v3_messagehistory` - Timeline of email delivery events
- `get_v3_messageinformation` - Message details associated with campaigns
- `get_v3_messagesentstatistics` - Performance metrics for individual sent emails
- `get_v3_messagestate` - Status codes for email processing stages

### Settings MCP (`src/settings-mcp.js`)
**Purpose**: API key and user account management

**Tools Available**: 12 tools
- `get_v3_apikey` - Manage credentials for API and SMTP access
- `get_v3_apikeyaccess` - API key access permissions for users
- `get_v3_apikeyaccessgrantor` - API key access management between users and subaccounts
- `get_v3_apikeytotals` - Lifetime statistics for API key usage
- `get_v3_apitoken` - Access token for API, used with IFrame API
- `get_v3_apppreferences` - Key-value settings storage for API configurations

### Domains MCP (`src/domains-mcp.js`)
**Purpose**: Domain management and validation for email sending

**Tools Available**: 2 tools
- `get_v3_dns` - Domain configuration for email sending
- `get_v3_dns_id` - Get specific DNS configuration by ID

### Webhooks MCP (`src/webhooks-mcp.js`)
**Purpose**: Event notification and webhook configuration

**Tools Available**: 2 tools
- `get_v3_eventcallbackurl` - Webhook configuration for event notifications
- `get_v3_eventcallbackurl_id` - Get specific webhook configuration by ID

### Segmentation MCP (`src/segmentation-mcp.js`)
**Purpose**: Contact segmentation and filtering for targeted campaigns

**Tools Available**: 2 tools
- `get_v3_contactfilter` - Segmentation rules for targeting specific contacts
- `get_v3_contactfilter_id` - Get specific contact filter by ID

### Send Email MCP (`src/send-email-mcp.js`)
**Purpose**: Transactional email sending through Mailjet's Send API

**Tools Available**: Variable (depends on Send API endpoints)
- Transactional email sending functionality
- Individual email message delivery
- Send API v3 and v3.1 support



## Testing

Run the local test suite with:

```bash
NODE_ENV=test pnpm test
```


### Sample Prompts with Claude

#### Find contacts information

```
Which of my contacts lists has the most subscribers?
```

#### Fetch and Visualize Sending Statistics

```
Would you be able to make a chart with email delivery statistics for the past week?
```

## Debugging

The MCP server communicates over stdio, please refer to [Debugging](https://modelcontextprotocol.io/docs/tools/debugging) section of the Model Context Protocol.

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.
