import { createPiece, PieceCategory } from "@activepieces/pieces-framework";
import { litescrapeAuth } from "./lib/auth";
import { search } from "./lib/actions/search";

export const litescrape = createPiece({
  displayName: "Litescrape",
  description: "Serper-compatible web search.",
  minimumSupportedRelease: "0.40.0",
  logoUrl: "https://api.iconify.design/lucide/search.svg",
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ["litescraper"],
  auth: litescrapeAuth,
  actions: [search],
  triggers: [],
});
