import { AnimatePresence } from "framer-motion";
import { DevArticle, VibloArticle } from "../../../../services/graphql/generated";
import { BlogPlatform } from "../../../misc/types";
import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";
import { fade } from "../../../animations/fade";

type Articles = {
  "Dev.to": DevArticle[];
  Viblo: VibloArticle[];
};

type ContentPaneProps = {
  articles: Articles;
  activePlatform: BlogPlatform;
};

export default function ContentPane({ articles, activePlatform }: ContentPaneProps) {
  const articleList = articles[activePlatform];
  return (
    <div
      sx={{
        bg: "background",
        px: 5,
        py: 4,
        flex: 1,
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: ["1fr ", null, null, "1fr 1fr"],
        gap: 3,
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {articleList.map((article) => (
          <motion.div key={article.id} {...fade} transition={{ staggerChildren: 1 }}>
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
