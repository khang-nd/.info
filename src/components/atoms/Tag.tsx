import { alpha } from "@theme-ui/color";

type TagProps = {
  children: string;
};

export default function Tag({ children }: TagProps) {
  return (
    <span
      sx={{
        px: "4px",
        py: "2px",
        mr: 2,
        borderRadius: 3,
        display: "inline-block",
        bg: alpha("muted", 0.1),
        fontSize: 14,
      }}
    >
      {children}
    </span>
  );
}
