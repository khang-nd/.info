import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Desktop({ children }: Props): ReactElement {
  return <section>{children}</section>;
}
