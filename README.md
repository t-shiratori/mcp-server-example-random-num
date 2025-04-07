# Mcp Server And Claude for Desktop  Example

## 0. SetUp Claude for Desktop 

[Download - Claude](https://claude.ai/download)

## 1.  Packages Installation

```bash
pnpm install
```

## 2. Build

```bash
pnpm build
```

## 3. Configure Claude for Desktop

Open the config file in VSCode.

```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

/Users/[user]/Library/Application Support/Claude/claude_desktop_config.json
```json
{
  "mcpServers": {
    "RandomNumber": {
      "command": "node",
      "args": [
        "/ABSOLUTE/PATH/TO/PARENT/FOLDER/build/index.js"
      ]
    }
  }
}
```

If you use [mise](https://mise.jdx.dev/).

```bash
$ mise which node
/Users/[user]/.local/share/mise/installs/node/22.14.0/bin/node
```

/Users/[user]/Library/Application Support/Claude/claude_desktop_config.json
```json
{
  "mcpServers": {
    "RandomNumber": {
      "command": "/Users/[user]/.local/share/mise/installs/node/22.14.0/bin/node",
      "args": [
        "/ABSOLUTE/PATH/TO/PARENT/FOLDER/build/index.js"
      ]
    }
  }
}
```

reference: https://github.com/modelcontextprotocol/servers/issues/64#issuecomment-2503152420





## Resources

- [Example Servers - Model Context Protocol](https://modelcontextprotocol.io/examples)
- [modelcontextprotocol/typescript-sdk: The official Typescript SDK for Model Context Protocol servers and clients](https://github.com/modelcontextprotocol/typescript-sdk/tree/main)