import { createAction, Property } from "@activepieces/pieces-framework";
import { httpClient, HttpMethod } from "@activepieces/pieces-common";
import { serperAuth } from "../auth";

export const search = createAction({
  auth: serperAuth,
  name: "search",
  classification: "SEARCH",
  displayName: "Search the Web",
  description: "Search the web with Serper or a Serper-compatible endpoint.",
  audience: "both",
  aiMetadata: {
    description:
      "Search public web pages for a query and return matching search results.",
    idempotent: true,
  },
  props: {
    query: Property.ShortText({ displayName: "Query", required: true }),
    maxResults: Property.Number({
      displayName: "Maximum Results",
      defaultValue: 10,
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    const baseUrl = auth.props.baseUrl || "https://google.serper.dev";
    const response = await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: `${baseUrl.replace(/\/+$/, "")}/search`,
      headers: {
        "X-API-KEY": auth.props.apiKey,
        "Content-Type": "application/json",
      },
      body: { q: propsValue.query, num: propsValue.maxResults ?? 10 },
      timeout: 30000,
    });
    return response.body;
  },
});
