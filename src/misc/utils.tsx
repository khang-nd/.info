import StyledLink from "../components/atoms/styled/Link";

type Links = Record<string, string[]>;

export const parseLinks = (data: string, links?: Links) => {
  if (!links) return data;

  return data.split(/(\$\d+)/g).map((s, i) => {
    const link = links[s];

    if (!link) return s;

    const [text, href] = link;
    return (
      <StyledLink key={i} href={href}>
        {text}
      </StyledLink>
    );
  });
};

export const translate = (val: string | number) => ({ x: val, y: val });

export const format = (datetimeString: string) => {
  const datetime = new Date(datetimeString);
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(datetime);
};
