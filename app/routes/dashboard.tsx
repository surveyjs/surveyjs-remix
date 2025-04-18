import { MetaFunction } from "@remix-run/node";
import Dashboard from "../components/Dashboard.client";
// https://stackblitz.com/edit/remix-run-remix-dbe16z?file=app%2Froutes%2F_index.tsx

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard | SurveyJS + NextJS Quickstart Template" },
    { name: "description", content: "SurveyJS Dashboard" },
  ];
};

export default function Survey() {
  return (
    <div className="flex min-h-screen flex-col">
      <Dashboard />
    </div>
  );
}
