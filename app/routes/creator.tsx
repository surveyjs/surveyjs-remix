import { MetaFunction } from "@remix-run/node";
import SurveyCreatorComponent from "../components/SurveyCreator.client";
// https://stackblitz.com/edit/remix-run-remix-dbe16z?file=app%2Froutes%2F_index.tsx

export const meta: MetaFunction = () => {
  return [
    { title: "Survey Creator | SurveyJS + NextJS Quickstart Template" },
    { name: "description", content: "Survey Creator by SurveyJS" },
  ];
};

export default function Survey() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <SurveyCreatorComponent />
    </div>
  );
}
