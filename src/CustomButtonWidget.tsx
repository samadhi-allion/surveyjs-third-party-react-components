import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as Survey from 'survey-react';
// import 'survey-react/survey.css';
import Button from './Button'; // Assuming this is correctly typed

Survey.StylesManager.applyTheme("default");

interface CustomWidget {
  name: string;
  title?: string;
  iconName?: string;
  widgetIsLoaded?: () => boolean;
  isFit: (question: Survey.Question) => boolean;
  htmlTemplate: string;
  afterRender: (question: Survey.Question, el: HTMLElement) => void;
}

const CustomButtonWidget: React.FC = () => {
  useEffect(() => {
    const widget: CustomWidget = {
      name: "customButton",
      title: "Custom Button",
      iconName: "icon-default",
      widgetIsLoaded: function() {
        return true;
      },
      isFit: function(question: Survey.Question): boolean {
        return question.getType() === "custombutton";
      },
      htmlTemplate: "<button id='custom-button'>Click Me</button>",
      afterRender: function(question: Survey.Question, el: HTMLElement) {
        const button = el.querySelector("#custom-button");
        if (button instanceof HTMLElement) {
          button.onclick = function() {
            console.log("Custom button clicked");
            question.value = "clicked"; // Optionally set the question value
          };
        }

        // Here you're using ReactDOM.render to mount a React component inside the element.
        ReactDOM.render(<Button label="Click Me" onClick={() => console.log("Button clicked")} />, el);
      }
    };

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget as any, "custom-type");
  }, []);

  const surveyJson = {
    questions: [
      {
        type: "custombutton",
        name: "custombutton"
      }
    ]
  };

  return (
    <Survey.Survey model={new Survey.Model(surveyJson)} />
  );
};

export default CustomButtonWidget;
