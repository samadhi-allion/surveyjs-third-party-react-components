import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
// import 'survey-react/survey.css';
import Button from './Button';

Survey.StylesManager.applyTheme("default");

const CustomButtonWidget2: React.FC = () => {
  useEffect(() => {
    // Custom widget logic here, if needed
  }, []);

  const surveyJson = {
    elements: [
      {
        type: "html",
        name: "customHtml",
        html: "<div id='cbc'>FF</div>" /*"<div id='custom-button-container'></div>"*/
      }
    ],
    // Other survey configurations...
  };

  const survey = new Survey.Model(surveyJson);

  survey.onAfterRenderQuestion.add((survey:any, options:any) => {
    if (options.question.name === "customHtml") {
      const container = document.getElementById("cbc");
      if (container) {
      //   container.innerHTML = `<button
      //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      //   onClick={onClick}
      // >
      //   Click Me !
      // </button>`;
        // Or use ReactDOM to render a React component into the container
        ReactDOM.render(<Button label="Click Me 2" onClick={() => alert('Button clicked')} />, container);
      }
    }
  });

  return <Survey.Survey model={survey} />;
};

export default CustomButtonWidget2;