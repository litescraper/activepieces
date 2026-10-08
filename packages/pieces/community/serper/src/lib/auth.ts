import { PieceAuth, Property } from "@activepieces/pieces-framework";

export const serperAuth = PieceAuth.CustomAuth({
  displayName: "Serper API Connection",
  required: true,
  props: {
    apiKey: PieceAuth.SecretText({ displayName: "API Key", required: true }),
    baseUrl: Property.ShortText({
      displayName: "API Base URL",
      description: "The compatible provider base URL, without /search.",
      defaultValue: "https://google.serper.dev",
      required: false,
    }),
  },
});
