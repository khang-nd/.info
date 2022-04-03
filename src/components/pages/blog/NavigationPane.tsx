import { BlogPlatform } from "../../../misc/types";
import { List } from "../../atoms/Container";
import NavigationPaneItem from "../../atoms/NavigationPaneItem";
import { H3 } from "../../atoms/Typography";

type NavigationPaneProps = {
  activePlatform?: BlogPlatform;
  onNavigate: (platform: BlogPlatform) => void;
};

export default function NavigationPane({ activePlatform, onNavigate }: NavigationPaneProps) {
  const platforms = Object.values(BlogPlatform);

  return (
    <div sx={{ minWidth: 180 }}>
      <H3>Platform</H3>
      <List sx={{ mb: 5, display: ["grid", null, "block"], gridTemplateColumns: "1fr 1fr 1fr" }}>
        {platforms.map((platform) => (
          <NavigationPaneItem
            key={platform}
            icon="RiBook2Fill"
            text={platform}
            isActive={activePlatform === platform}
            onClick={() => onNavigate(platform)}
          />
        ))}
      </List>
    </div>
  );
}
