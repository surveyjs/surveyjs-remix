import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { json } from '../../data/survey_json.js'

export default function SurveyComponent() {
  const model = new Model(json);
  return (
    <Survey model={model}/>
  );
}
