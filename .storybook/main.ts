import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    const webpack = require("webpack");

    /**
     * Config Resolutions
     */
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname, "../src"),
      "next/link": require("path").resolve(__dirname, "./mocks.tsx"),
      "next/navigation": require("path").resolve(__dirname, "./mocks.tsx"),
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve("process/browser"),
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    };

    /**
     * Config Plugins
     */
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    );

    /**
     * Config Module Rules
     */
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules = config.module.rules.filter((rule) => {
      if (typeof rule === "object" && rule && rule.test) {
        return !rule.test.toString().includes("css");
      }
      return true;
    });
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: ["@tailwindcss/postcss"],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });

    return config;
  },
};
export default config;
