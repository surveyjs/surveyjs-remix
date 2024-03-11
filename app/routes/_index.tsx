import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1 className="mb-12 text-3xl font-bold tracking-tight md:text-xl xl:text-2xl">SurveyJS + Remix Quickstart Template</h1>
        <div className="text-lg text-neutral-500 dark:text-neutral-300">
          <p>
            SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses the following SurveyJS components:
          </p>
          <ul>
            <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Library?id=LibraryOverview" rel="noreferrer" target="_blank">SurveyJS Library / Runner</a></li>
            <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview" rel="noreferrer"target="_blank">Survey Creator / Form Builder</a></li>
            <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview" rel="noreferrer" target="_blank">PDF Export</a></li>
            <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview" rel="noreferrer" target="_blank">Survey Analytics</a></li>
          </ul>
        </div>
      </div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
