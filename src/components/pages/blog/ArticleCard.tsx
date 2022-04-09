import { darken } from "@theme-ui/color";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";
import { DevArticle, VibloArticle } from "../../../../services/_type";
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import { format } from "../../../misc/utils";
import ReactIcon from "../../atoms/IconReact";
import Tag from "../../atoms/Tag";

type ArticleCardProps = {
  article: DevArticle | VibloArticle;
  isLast?: boolean;
};

export default function ArticleCard({ article, isLast }: ArticleCardProps) {
  const isMobile = useInBreakpoint(0);
  const isDevArticle = new URL(article.url).origin.includes("dev.to");
  const publishedAt = format(article.published_at as string);
  const tags = isDevArticle
    ? (article as DevArticle).tag_list
    : (article as VibloArticle).tags?.data?.map((tag) => tag?.name);
  const readMinutes = isDevArticle
    ? (article as DevArticle).reading_time_minutes
    : (article as VibloArticle).reading_time;
  const viewCount = isDevArticle ? (article as DevArticle).page_views_count : (article as VibloArticle).views_count;

  const linkStyle: ThemeUICSSObject = {
    p: 3,
    mb: 3,
    color: "text",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    transition: "background 0.4s, box-shadow 0.4s",
    boxShadow: !isLast && "0 0.5px rgba(0, 0, 0, 0.2)",
    h4: { transition: "0.4s" },
    "&:hover": {
      bg: "white",
      boxShadow: "0 0.5px 2px rgba(0, 0, 0, 0.2)",
      h4: { color: darken("secondary", 0.05) },
    },
  };

  return (
    <Link href={article.url as string} passHref>
      <a sx={linkStyle} target="_blank">
        <div sx={{ mb: 6 }}>
          <h4 sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}>{article.title}</h4>
          <span>
            {publishedAt} - <i>{readMinutes} min read</i>
          </span>
        </div>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {tags?.map((name) => (
              <Tag key={name}>{name as string}</Tag>
            ))}
          </div>
          {!isMobile && (
            <div sx={{ display: "flex", alignItems: "center" }}>
              <ReactIcon iconName="BsEye" />
              <span sx={{ ml: 2 }}>{viewCount}</span>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}
