import { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import SurveyCreatorComponent from "../components/SurveyCreator";
// https://stackblitz.com/edit/remix-run-remix-dbe16z?file=app%2Froutes%2F_index.tsx

export const meta: MetaFunction = () => {
  return [
    { title: "Survey Creator | SurveyJS + NextJS Quickstart Template" },
    { name: "description", content: "Survey Creator by SurveyJS" },
  ];
};

export default function Survey() {
  return (
      <ClientOnly fallback={null}>
        {() =>
          <div className="flex min-h-screen flex-col items-center p-8">
            <SurveyCreatorComponent />
          </div>
        }
      </ClientOnly>
  );
}
