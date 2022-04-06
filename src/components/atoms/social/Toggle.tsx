import { ForwardedRef, forwardRef } from "react";
import Button from "../Button";
import ReactIcon from "../IconReact";

type ToggleLinksProps = {
  isActive: boolean;
  onClick: () => void;
};

const SocialToggle = ({ isActive, onClick }: ToggleLinksProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <Button
      ref={ref}
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
};

export default forwardRef(SocialToggle);
