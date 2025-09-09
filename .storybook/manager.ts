import { addons } from "storybook/internal/manager-api";
import { create } from "storybook/internal/theming";

const logoLight = require("../src/images/logo_horizontal_light@1x.png");
const logoDark = require("../src/images/logo_horizontal_dark@1x.png");

const lightTheme = create({
  base: "light",
  brandTitle: "Passport UI",
  brandUrl: "https://github.com/praveentcom/passport-ui",
  brandImage: logoLight,
  brandTarget: "_self",
});

const darkTheme = create({
  base: "dark",
  brandTitle: "Passport UI",
  brandUrl: "https://github.com/praveentcom/passport-ui",
  brandImage: logoDark,
  brandTarget: "_self",
});

const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

addons.setConfig({
  theme: prefersDarkMode ? darkTheme : lightTheme,
  sidebar: {
    showRoots: false,
  },
});

/**
 * Listen for OS theme changes and apply the theme
 * accordingly without reloading the page.
 */
if (window.matchMedia) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (e) => {
    addons.setConfig({
      theme: e.matches ? darkTheme : lightTheme,
    });
  });
}
