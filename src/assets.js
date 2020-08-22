const r = require.context("./assets");
const assets = r.keys().map(r);

// preload assets
const div = document.createElement("div");
div.id = "preload";
div.hidden = true;
document.body.prepend(div);
assets.forEach((img) => {
  const elem = document.createElement("img");
  elem.src = img;
  div.append(elem);
});

export const Icon = (key, type = "flat") => {
  let _type = type.toLowerCase();
  _type = _type !== "flat" && _type !== "neumorphism" ? _type : "flat";
  return assets
    .filter((icon) => icon.includes(_type))
    .find((icon) => icon.includes(key));
};

export const Social = {
  Github: [
    require("./assets/social-github.png"),
    require("./assets/social-github-active.png"),
  ],
  Fandom: [
    require("./assets/social-fandom.png"),
    require("./assets/social-fandom-active.png"),
  ],
};

export const themes = {
  Flat: require("./assets/theme-flat.png"),
  Classic: require("./assets/theme-classic.png"),
  Neumorphism: require("./assets/theme-neumorph.png"),
};
