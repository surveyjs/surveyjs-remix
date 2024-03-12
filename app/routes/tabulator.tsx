import { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import DashboardTabulator from "../components/DashboardTabulator.client";
// https://stackblitz.com/edit/remix-run-remix-dbe16z?file=app%2Froutes%2F_index.tsx

export const meta: MetaFunction = () => {
  return [
    { title: "Tabulator | SurveyJS + NextJS Quickstart Template" },
    { name: "description", content: "SurveyJS Tabulator" },
  ];
};

export default function Survey() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <ClientOnly fallback={null}>
        {() =>
          <DashboardTabulator />
        }
      </ClientOnly>
    </div>
  );
}
