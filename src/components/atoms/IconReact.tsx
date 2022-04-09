import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons";

type ReactIconProps = IconBaseProps & {
  /** Search for icon name at https://react-icons.github.io/react-icons. */
  iconName: string;
};

export default function ReactIcon({ iconName, ...props }: ReactIconProps) {
  const prefix = iconName.toLowerCase().slice(0, 2);
  const ReactIcon = loadable(() => import(`react-icons/${prefix}/index.js`), {
    resolveComponent: (Component) => Component[iconName],
  });

  return (
    <span sx={{ display: "inline-block", size: props.size || 16 }}>
      <ReactIcon {...props} />
    </span>
  );
}
