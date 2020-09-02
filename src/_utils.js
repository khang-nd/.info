import React from "react";
import TabLink from "./components/TabLink";

export function parseLinks(data, links) {
  return !links
    ? data
    : data.split(/(\$\d+)/g).map((s, i) => {
        const link = links[s];
        return !link ? (
          s
        ) : (
          <TabLink key={i} href={link[1]}>
            {link[0]}
          </TabLink>
        );
      });
}
