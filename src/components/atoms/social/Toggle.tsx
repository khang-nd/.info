import { ForwardedRef, forwardRef, useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { MotionButton } from "../Button";
import ReactIcon from "../IconReact";

type ToggleLinksProps = {
  isActive: boolean;
  onClick: () => void;
};

const SocialToggle = ({ isActive, onClick }: ToggleLinksProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { enableAnimation } = useContext(GlobalContext);

  return (
    <MotionButton
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
      whileTap={enableAnimation.val ? { scale: 0.85 } : undefined}
    >
      <ReactIcon iconName={isActive ? "CgClose" : "AiOutlineShareAlt"} size={24} />
    </MotionButton>
  );
};

export default forwardRef(SocialToggle);
