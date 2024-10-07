import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://js-logs-formatter-docs.vercel.app/img/logo.webp"
        alt="js-logs-formatter logo"
        style={{ height: 35, width: 35, marginRight: 5, borderRadius: 50 }}
      />
      <p style={{ fontWeight: 700 }}>JS Logs Formatter</p>
    </div>
  ),
  project: {
    link: "https://github.com/Elue-dev/js-logs-formatter",
  },
  docsRepositoryBase: "https://github.com/Elue-dev/js-logs-formatter",
  //   footer: {
  //     text: "JS Logs Formatter",
  //   },
};

export default config;
