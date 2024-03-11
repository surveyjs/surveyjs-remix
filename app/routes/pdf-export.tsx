import { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
// https://stackblitz.com/edit/remix-run-remix-dbe16z?file=app%2Froutes%2F_index.tsx
import { json } from "../../data/survey_json.js";
import SurveyCore from "survey-core";
import SurveyPdf from "survey-pdf";

const { Model } = SurveyCore;
const { SurveyPDF } = SurveyPdf;

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Export to PDF" },
  ];
};

function savePDF(model: Model) {
  const surveyPDF = new SurveyPDF(json);
  surveyPDF.data = model.data;
  surveyPDF.save();
};

export default function Survey() {
  const model = new Model(json);
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-12 text-3xl font-bold tracking-tight md:text-xl xl:text-2xl">SurveyJS PDF Export</h1>
      <div className="text-lg text-neutral-500 dark:text-neutral-300">
        <p>SurveyJS PDF Export is a client-side extension over the SurveyJS Library that enables users to save surveys as PDF documents.</p>
        <p>NOTE: Dynamic elements and characteristics (visibility, validation, navigation buttons) are not supported.</p>
        <p>Click the button below to export survey to a PDF document.</p>
        <div className="flex items-center p-4">
          <button onClick={() => savePDF(model)} className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Save as PDF</button>
        </div>
      </div>
    </div>
  );
}
