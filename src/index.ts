import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
 
// サーバーインスタンスの作成
export const server = new McpServer({
  name: "RandomNumberServer",
  version: "0.1.0",
});

server.tool(
    "RandomNumberTool", // ツールの名前
    "get a random number", // ツールの説明
    // ツールの引数を定義するスキーマ
    { max: z.number().min(1).max(100).describe("Maximum number of random numbers") },
  // ツールが呼び出されたときに実行される関数
    async ({ max }) => {
      const random = Math.floor(Math.random() * max) + 1;
      
      return {
        content: [
          {
            type: "text",
            text: random.toString(),
          },
        ],
      };
    }
  );

  async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server running on stdio");
  }
   
  main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
  });