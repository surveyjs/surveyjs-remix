import { useEffect, useState } from "react";
import { data, json } from "../../data/dashboard_data";

import jsPDF from "jspdf";
// import * as XLSX from "xlsx";
import "jspdf-autotable";

import SurveyTabulator from "survey-analytics/survey.analytics.tabulator.js";
import SurveyCore from "survey-core";

import "survey-analytics/survey.analytics.tabulator.css";
import "tabulator-tables/dist/css/tabulator.min.css";

const { Model } = SurveyCore;
const { Tabulator } = SurveyTabulator;

(window as any)["jsPDF"] = jsPDF;
// (window as any)["XLSX"] = XLSX;

export default function DashboardTabulator() {
  let [table, setTabulator] = useState<Tabulator>();

  if (!table) {
    const survey = new Model(json);
    table = new Tabulator(survey, data);
    setTabulator(table);
  }

  useEffect(() => {
    table?.render("summaryContainer");
  }, [table]);

  return <div style={{ height: "80vh", width: "100%" }} id="summaryContainer"></div>;
}
