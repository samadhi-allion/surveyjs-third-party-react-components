import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import Button from './Button'; // Import your button component
import ReactDOM from 'react-dom';

const SurveyComponent = () => {
  const surveyJson = {/* your survey JSON here */};

  const onSurveyComplete = (result:any) => {
    console.log('Survey Result: ', result.valuesHash);
  };

  // Custom widget integration (simplified example)
  Survey.CustomWidgetCollection.Instance.addCustomWidget({
    name: "customButton",
    isFit: (question:any) => question.getType() === "custombutton", // Define a new question type or trigger for your button
    htmlTemplate: "<div id='custom-button'></div>", // Placeholder for your button
    afterRender: (question:any, el:any) => {
      // Render your button component
      ReactDOM.render(<Button label="Click Me" onClick={() => console.log("Button clicked")} />, el);
    },
  });

  return <Survey.Survey model={new Survey.Model(surveyJson)} onComplete={onSurveyComplete} />;
};

export default SurveyComponent;
