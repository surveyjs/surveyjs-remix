# SurveyJS + Remix Quickstart Template 

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses [Remix](https://remix.run/) and the following SurveyJS components:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs-nextjs.git
cd surveyjs-remix
npm i
npm run dev
```

Open http://localhost:3000/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [data/survey_json.js](data/survey_json.js)
  - [app/components/Survey.tsx](app/components/Survey.tsx)
- Add Survey Creator to a page
  - [app/components/SurveyCreator.tsx](app/components/SurveyCreator.tsx)
- Export a survey to a PDF document
  - [app/routes/pdf-export.tsx](app/routes/pdf-export.tsx)
- Visualize survey results
  - As charts
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [app/components/Dashboard.client.tsx](app/components/Dashboard.client.tsx)
  - As a table (modern browsers)
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [app/components/DashboardTabulator.client.tsx](app/components/DashboardTabulator.client.tsx)
  - As a table (old browsers)
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [app/components/DashboardDatatables.client.tsx](app/components/DashboardDatatables.client.tsx)
