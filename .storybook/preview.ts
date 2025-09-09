import type { Preview } from "@storybook/react-webpack5";
import { withTheme } from "./decorators";

import "./storybook.css";

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    layout: "fullscreen",
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "320px", height: "568px" },
          type: "mobile",
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1024px", height: "768px" },
          type: "desktop",
        },
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Color System",
          "Layouts",
          "Layouts/PageLayout",
          "Layouts/ContentContainer",
          "Layouts/SidebarContainer",
          "Layouts/*",
          "Components",
          "Composables",
          "Motion Primitives",
        ],
      },
    },
  },
};

export default preview;
