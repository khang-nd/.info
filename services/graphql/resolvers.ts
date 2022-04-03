import { getArticles as getDevtoArticles } from "../devto";
import { getArticles as getVibloArticles } from "../viblo";
import { Resolvers } from "./generated";

/* Adding a GraphQL layer on top of the existing devto/viblo REST APIs. */
/* No performance improved due to the fact that this still calls
  the underlying REST APIs (performance may potentially be reduced
  instead due to additional processings from GQL side) */
const resolvers: Resolvers = {
  Query: {
    devtoArticles() {
      return getDevtoArticles();
    },
    vibloArticles() {
      return getVibloArticles();
    },
  },
  VibloArticle: {
    slug(obj) {
      return obj.transliterated + "-" + obj.slug;
    },
  },
};

export default resolvers;
