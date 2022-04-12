import { AnimatePresence, motion } from "framer-motion";
import { BlogPlatform, DevArticle, VibloArticle } from "../../../../services/_type";
import { fade } from "../../../animations/fade";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
import ArticleCard from "./ArticleCard";

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
    <div sx={{ bg: useMatchTheme(ThemeMode.Tron) ? "transparent" : "background", p: 4, flex: 1 }}>
      <AnimatePresence exitBeforeEnter>
        {articleList.map((article, i) => (
          <motion.div key={article.id} {...fade} transition={{ staggerChildren: 1 }}>
            <ArticleCard article={article} isLast={i === articleList.length - 1} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
