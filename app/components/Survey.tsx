import SurveyCore from 'survey-core'
import SurveyReactUi from 'survey-react-ui'
import 'survey-core/defaultV2.css'
import { json } from '../../data/survey_json.js'

const { Model } = SurveyCore;
const { Survey } = SurveyReactUi;

export default function SurveyComponent() {
  const model = new Model(json);
  return (
    <Survey model={model}/>
  );
}
