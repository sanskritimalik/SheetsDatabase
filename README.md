# Google Sheets Database Application

This is a simple web application that allows users to enter their name and mobile number through a web form. The submitted data is then recorded in a Google Sheets document acting as a database.

## Getting Started

To use this application, follow the steps below:

1. **Front-End (HTML Form):**

   - Open the url: https://userdetails.w3spaces.com/ or Open the `index.html` file in a web browser. This form allows users to input their name and mobile number.
   - It validates if the mobile number is valid using the logic in `validation.js` and further creates entry in sheets
   - Fill in the required information and click the "Submit" button.
   - The data you submit will be sent to the Google Apps Script back-end.

2. **Back-End (Google Apps Script):**

   - The back-end code is hosted on Google Apps Script and is responsible for recording data in a Google Sheets document.
   - The `doPost()` function in the script receives the form data and appends it to the specified Google Sheets document.
   - The script's URL is used as the form action in the `index.html` file.

3. **Deployment:**

   - Open the Google Sheets document that you want to use as the database.
   - In the Google Apps Script editor, add the implementation of `doPost()` function in `script.gs`.
   - Deploy the script as a web app with the settings "Anyone, even anonymous" can access.
   - Use the provided web app URL in the `index.html` form action.

4. **Google Sheets Link:** 
   - https://docs.google.com/spreadsheets/d/1KC8v23vuXhUFRqEl2Fyv_zBKC3wFuP5dFbwxq4kmO14/edit?usp=sharing

5. **Hosted Link of Webpage:**
   - https://userdetails.w3spaces.com/ 
