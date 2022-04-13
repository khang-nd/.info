import { darken, lighten } from "@theme-ui/color";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";
import { DevArticle, VibloArticle } from "../../../../services/_type";
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { format } from "../../../misc/utils";
import { ThemeMode } from "../../../themes";
import ReactIcon from "../../atoms/IconReact";
import Tag from "../../atoms/Tag";
import { H3 } from "../../atoms/Typography";

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

  const hoverStyle = (color: any): ThemeUICSSObject => ({
    "&:hover": { h3: { color }, ".views": { color } },
  });

  const linkStyle: ThemeUICSSObject = {
    p: 3,
    color: "text",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    h3: { transition: "0.4s" },
    ".views": { transition: "0.4s" },
    ...(useMatchTheme(ThemeMode.Flat) && hoverStyle(darken("secondary", 0.05))),
    ...(useMatchTheme(ThemeMode.Soft) && hoverStyle(darken("highlight", 0.1))),
    ...(useMatchTheme(ThemeMode.Tron) && hoverStyle(lighten("red", 0.1))),
    ...(useMatchTheme(ThemeMode.Classic) && hoverStyle(darken("highlight", 0.1))),
  };

  const lineStyle: ThemeUICSSObject = {
    mx: 3,
    border: 0,
    borderBottom: "1px solid",
    borderColor: useMatchTheme(ThemeMode.Tron) ? "shadow" : "rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <Link href={article.url as string} passHref>
        <a sx={linkStyle} target="_blank">
          <div sx={{ mb: 6 }}>
            <H3 style={{ fontVariant: "initial", fontWeight: 600, fontSize: 18, mb: 2 }}>{article.title}</H3>
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
              <div className="views" sx={{ display: "flex", alignItems: "center" }}>
                <ReactIcon iconName="BsEye" />
                <span sx={{ ml: 2 }}>{viewCount}</span>
              </div>
            )}
          </div>
        </a>
      </Link>
      {!isLast && <hr sx={lineStyle} />}
    </>
  );
}
