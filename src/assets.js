const r = require.context("./assets");
const assets = r.keys().map(r);
export const Avatar =
  "https://gravatar.com/avatar/7a054fbf58c9fe4f7dadb07091fe4cff?s=230";

export const Icon = (key, type = "flat") => {
  let _type = type.toLowerCase();
  _type = _type !== "flat" && _type !== "neumorphism" ? _type : "flat";
  return assets
    .filter((icon) => icon.includes(_type))
    .find((icon) => icon.includes(key));
};

export const Social = {
  Github: [
    require("./assets/social-github.webp"),
    require("./assets/social-github-active.webp"),
  ],
  Linkedin: [
    require("./assets/social-linkedin.webp"),
    require("./assets/social-linkedin-active.webp"),
  ],
  Fandom: [
    require("./assets/social-fandom.webp"),
    require("./assets/social-fandom-active.webp"),
  ],
};

export const Logo = {
  Bosch: require("./assets/logo-bosch.webp"),
  Cathay: require("./assets/logo-cathay.webp"),
  Fandom: require("./assets/logo-fandom.webp"),
  FandomDev: require("./assets/logo-fandom-dev.webp"),
  Win7: require("./assets/logo-win7.webp"),
};

export const themes = {
  Flat: require("./assets/theme-flat.webp"),
  Neumorphism: require("./assets/theme-neumorph.webp"),
  Classic: require("./assets/theme-classic.webp"),
};
