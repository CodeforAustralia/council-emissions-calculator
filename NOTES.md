**Goals**

- update form question 5 according to figma design
- chore 1: move progress bar up
- chore 2: remove Question 5 out of 5
- chore 3: make Question a heading
- chore 4: create BackButton and SubmitButton
- chore 5: make sure the buttons are taking users to the right page
- chore 6: make sure the input is saved even when user is moving back and forth amongst the forms
- chore 7: refactoring codes. ie: SubmitButton component
- chore 8: the input field placeholder font - make the font color lighter in grey
- chore 9: change the submit button text, and place holder text
- chore 10: Styling - check with design theme to standardize styling format

_Styling of the project_
Chakra UI - Styling library, treat each individual styling as component

## Challenges

1. Set up on local machine
   **ERROR MESSAGE**
   Installing template dependencies using yarnpkg...
   yarn add v1.22.4
   [1/4] 🔍 Resolving packages...
   [2/4] 🚚 Fetching packages...
   error jest-diff@27.0.6: The engine "node" is incompatible with this module. Expected version "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0". Got "14.6.0"
   error Found incompatible module.

   - researched how to switch the node version on my local machine
   - resolved it by using node version manager

2. How to move the progress bar?

3. working with GitHub and local git
   ![version control](../council-emissions-calculator-spike/public/images/version-control-git.png)

4. Trying to understand Chakra UI - how they are imported as component and take care of the styling of the pages.

5. A bit confused between the design on Figma, and how the page looks when comparing side by side - start by giving it a go, and will be communicating with the designer to finalized design.

6. Accessibility and responsiveness would be something we will look into in the future

7. Pull request - A little confused with the concept - to be cleared.

_Notes from Matt_

- Chakra UI - Styling library, treat each individual styling as component
  od- Next.js has its own built in running server - listening to incoming web traffic/ http requests and provide https response, it makes rendering different pages so much easier
- SVG/ webpack - it helps importing the progress part as component
- result page: High Chart?
