import { motion } from "framer-motion";
import React from "react";
import { Flex } from "theme-ui";
import { DevArticle, VibloArticle } from "../../../../services/_type";
import { fade } from "../../../animations/fade";
import work from "../../../data/work";
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import Button from "../../atoms/Button";
import { List } from "../../atoms/Container";
import ReactIcon from "../../atoms/IconReact";
import { H3 } from "../../atoms/Typography";

type NavigationPaneProps = {
  articles: {
    devto?: DevArticle[];
    viblo?: VibloArticle[];
  };
  activeArticle?: string;
  onNavigate: (articleSlug: string) => void;
};

export default function NavigationPane({ articles, activeArticle, onNavigate }: NavigationPaneProps) {
  const isMobile = useInBreakpoint(0);

  return (
    <div>
      <H3>Dev.to</H3>
      <List sx={{ mb: 5, display: ["grid", null, "block"], gridTemplateColumns: "1fr 1fr 1fr" }}>
        {articles.devto?.map((article, i) => {
          const isActive = activeArticle === article.slug;
          return (
            <li key={i}>
              <Button unsetStyle sx={{ py: 1, px: 1, pr: 4 }} onClick={() => onNavigate(article.slug)}>
                <span sx={{ zIndex: 1, flex: 1, fontSize: [14, null, "initial"] }}>{article.title}</span>
                {isActive && (
                  <motion.span
                    layoutId="navigation-indicator"
                    {...fade}
                    sx={{
                      bg: "background",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      zIndex: 0,
                    }}
                  />
                )}
              </Button>
            </li>
          );
        })}
      </List>
      <H3>Viblo</H3>
      <List sx={{ mb: 5, display: ["grid", null, "block"], gridTemplateColumns: "1fr 1fr 1fr" }}>
        {articles.viblo?.map((article, i) => {
          const isActive = activeArticle === article.slug;
          return (
            <li key={i}>
              <Button unsetStyle sx={{ py: 1, px: 1, pr: 4 }} onClick={() => onNavigate(article.slug)}>
                <span sx={{ zIndex: 1, flex: 1, fontSize: [14, null, "initial"] }}>{article.title}</span>
                {isActive && (
                  <motion.span
                    layoutId="navigation-indicator"
                    {...fade}
                    sx={{
                      bg: "background",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      zIndex: 0,
                    }}
                  />
                )}
              </Button>
            </li>
          );
        })}
      </List>
    </div>
  );
}
