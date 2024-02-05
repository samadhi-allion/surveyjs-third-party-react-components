# React + TypeScript + Vite

This project explores the integration of third-party components with SurveyJS in a React application, focusing on incorporating custom button components within SurveyJS surveys. We aim to demonstrate the use of these components in various contexts, including as standalone React components, as widgets within SurveyJS, and as elements registered and rendered directly by SurveyJS.

## Project Structure

src/App.js 
```jsx
// Import statements...

function App() {
  // State and handler definitions...

  return (
    <div>
      {/* Original button rendered directly in React */}
      <Button label={`Click ${count} times`} onClick={handleClick} />

      {/* Custom button rendered as a widget inside SurveyJS */}
      <CustomButtonWidget />

      {/* Custom button rendered as a registered element inside SurveyJS */}
      <CustomButtonElement />
    </div>
  );
}
```
### CustomButtonElement.  

This is working example in the project.    

### why tailwind styles are overwrite by survey.js lib.   

Because survey.js use tag selector to apply styles to any component that include html elements.    

### Handling Style Conflicts

Issue: The SurveyJS library uses tag selectors to apply styles, which can inadvertently override the styles of included custom components, such as Tailwind CSS classes applied to our custom buttons.

But this is not a recomended way to do it. bacause here we can't use servey.js auto generated features.   

```jsx
// Avoid importing the default SurveyJS styles
// import 'survey-react/survey.css';

```

However, removing the SurveyJS stylesheet is not recommended because it also removes the library's built-in styling for surveys, which could affect the appearance and functionality of auto-generated survey elements.

### Further Tasks

To fully integrate third-party components within SurveyJS, it may be necessary to dynamically re-apply component props and manage re-rendering within the context of a SurveyJS survey. This ensures that custom components remain interactive and stylistically consistent when used as part of a survey.
