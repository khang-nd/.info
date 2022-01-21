import NextLink from "next/link";
import React, { ReactElement } from "react";

interface LinkProps {
  href: string;
  text: string;
  icon?: string;
}

export default function Link({ href, icon, text }: LinkProps): ReactElement {
  return (
    <NextLink href={href}>
      <a>
        <span>{icon}</span>
        <span>{text}</span>
      </a>
    </NextLink>
  );
}
