import { useEffect, useState } from "react";
import { data, json } from "../../data/dashboard_data";

import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
// import * as XLSX from "xlsx";

import { Tabulator } from "survey-analytics/survey.analytics.tabulator";
import { Model } from "survey-core";
import "survey-analytics/survey.analytics.tabulator.css";
import "tabulator-tables/dist/css/tabulator.min.css";

export default function DashboardTabulator() {
  let [table, setTabulator] = useState<Tabulator>();

  if (!table) {
    const survey = new Model(json);
    table = new Tabulator(survey, data, {
      jspdf: jsPDF,
      // xlsx: XLSX
    });
    setTabulator(table);
  }

  useEffect(() => {
    table?.render("summaryContainer");
  }, [table]);

  return <div style={{ height: "80vh", width: "100%" }} id="summaryContainer"></div>;
}
