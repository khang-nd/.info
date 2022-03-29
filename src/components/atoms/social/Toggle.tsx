import Button from "../Button";
import ReactIcon from "../IconReact";

type ToggleLinksProps = {
  isActive: boolean;
  onClick: () => void;
};

export default function SocialToggle({ isActive, onClick }: ToggleLinksProps) {
  return (
    <Button
      unsetStyle
      aria-label="Connect with me"
      onClick={onClick}
      sx={{
        bg: "primary",
        color: "textReverse",
        borderRadius: "50%",
        size: 56,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      focusStyle={{ borderRadius: "50%" }}
    >
      <ReactIcon iconName={isActive ? "CgClose" : "AiOutlineShareAlt"} size={24} />
    </Button>
  );
}
