import { darken } from "@theme-ui/color";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";
import { DevArticle, VibloArticle } from "../../../../services/_type";
import { format } from "../../../misc/utils";
import Tag from "../../atoms/Tag";

type ArticleCardProps = {
  article: DevArticle | VibloArticle;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const isDevArticle = new URL(article.url).origin.includes("dev.to");
  const publishedAt = format(article.published_at as string);
  const tags = isDevArticle
    ? (article as DevArticle).tag_list
    : (article as VibloArticle).tags?.data?.map((tag) => tag?.name);
  const readMinutes = isDevArticle
    ? (article as DevArticle).reading_time_minutes
    : (article as VibloArticle).reading_time;

  const linkStyle: ThemeUICSSObject = {
    p: 3,
    mb: 3,
    color: "text",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    transition: "0.4s",
    h4: { transition: "0.4s" },
    "&:hover": {
      bg: "white",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
      h4: { color: darken("secondary", 0.05) },
    },
  };

  return (
    <Link href={article.url as string} passHref>
      <a sx={linkStyle} target="_blank">
        <div>
          <h4 sx={{ fontWeight: 600, fontSize: 18, mb: 3 }}>{article.title}</h4>
          <span>
            {publishedAt} - <i>{readMinutes} min read</i>
          </span>
        </div>
        <div>
          {tags?.map((name) => (
            <Tag key={name}>{name as string}</Tag>
          ))}
        </div>
      </a>
    </Link>
  );
}
