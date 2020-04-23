const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#138750",
      "@font-family": `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
      "@btn-font-size-lg": "14px",
      "@input-placeholder-color": "#637381",
      "@input-color": "#212B36",
      "@input-icon-color": "#637381",
      "@link-color": "#0070E0",
      "@table-row-hover-bg": "rgba(223,227,232,0.3)",
    },
  })
);
