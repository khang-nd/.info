import { BlogPlatform } from "../../../../services/_type";
import { List } from "../../atoms/Container";
import NavigationPaneItem from "../../atoms/NavigationPaneItem";
import { H3 } from "../../atoms/Typography";

type NavigationPaneProps = {
  activePlatform?: BlogPlatform;
  lastUpdated?: string;
  onNavigate: (platform: BlogPlatform) => void;
};

export default function NavigationPane({ activePlatform, lastUpdated, onNavigate }: NavigationPaneProps) {
  const platforms = Object.values(BlogPlatform);

  return (
    <div sx={{ minWidth: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div sx={{ position: "sticky", top: 0 }}>
        <H3 as="h2">Platform</H3>
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
      <div sx={{ position: "sticky", bottom: 0, fontSize: "85%" }}>Last updated: {lastUpdated}</div>
    </div>
  );
}
