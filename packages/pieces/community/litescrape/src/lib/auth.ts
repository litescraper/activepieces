import { PieceAuth, Property } from "@activepieces/pieces-framework";

export const litescrapeAuth = PieceAuth.CustomAuth({
  displayName: "Litescrape API Connection",
  required: true,
  props: {
    apiKey: PieceAuth.SecretText({ displayName: "API Key", required: true }),
    baseUrl: Property.ShortText({
      displayName: "API Base URL",
      description: "The compatible provider base URL, without /search.",
      defaultValue: "https://api.litescrape.com",
      required: false,
    }),
  },
});
