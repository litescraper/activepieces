import { createPiece, PieceCategory } from "@activepieces/pieces-framework";
import { serperAuth } from "./lib/auth";
import { search } from "./lib/actions/search";

export const serper = createPiece({
  displayName: "Serper",
  description: "Serper-compatible web search.",
  minimumSupportedRelease: "0.40.0",
  logoUrl: "https://api.iconify.design/lucide/search.svg",
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ["litescraper"],
  auth: serperAuth,
  actions: [search],
  triggers: [],
});
