## Description

This is a currency converter, using open source apis for the data.

## Getting Started

First, install the dependencies...

```bash
npm install  
```

Then we'll need to start our dev server...

```bash
npm start     
```

We can run our integration level tests with...

```bash
npm test     
```

And run our end to end tests with...

```bash
npm run e2e-test     
```
This will spin up and wait for the dev server before running the end to end tests, you also need to stop your local server for this command to work, the server start will start on the next available port (3001) so Cypress won't be able to navigate to it.

To open the Cypress test viewer for development purposes run...

```bash
npm run cy-open
```
You'll need to have the dev server running for this to work.

## How to use

Open [http://localhost:3000](http://localhost:3000) with your browser to see the currency converter and have a play around with it.

## Packages used

ReactJS, NextJS, MUI5 for good visual base, Cypress for component/e2e testing, Formik for the form handling and Yup for validation.

## Endpoints

Rates API: https://api.exchangerate-api.com/v4/latest/GBP

Countries API: https://openexchangerates.org/api/currencies.json

Flag API: https://flagpedia.net/download/api
