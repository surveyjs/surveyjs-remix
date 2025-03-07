/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/*.css"],
  serverDependenciesToBundle: [
    /^survey-core.*/,
    /^survey-react-ui.*/,
    /^survey-creator-core.*/,
    /^survey-creator-react.*/,
    /^survey-analytics.*/,
    /^survey-pdf.*/
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
