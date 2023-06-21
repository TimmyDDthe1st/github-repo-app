## Description

This is a Github repository app, that consumes the Github REST API to display a list of repositories for a given user.

## Getting Started

First, install the dependencies...

```bash
yarn
```

Then we'll need to start our dev server...

```bash
yarn start
```

Note that the first start will take a while, after the first start it becomes quicker, I assume this is due to it building everything for the first time, then switching to module refreshing.

We can run our integration level tests with...

```bash
yarn test
```

And run our end to end tests with...

```bash
yarn e2e-test
```

This will spin up and wait for the dev server before running the end to end tests, you also need to stop your local server for this command to work, the server start will start on the next available port (3001) so Cypress won't be able to navigate to it.

To open the Cypress test viewer for development purposes run...

```bash
yarn cy-open
```

You'll need to have the dev server running for this to work.

## How to use

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Packages used

ReactJS, NextJS, MUI5 for good visual base, Cypress for component/e2e testing.

## If I had more time

- I would have written component tests and e2e tests using Cypress.
- Gotten the readme's per repository working.
- Sorted out a time delay when the user finishes typing to perform the request to find the users repo's.
- Made a nice filter function to filter by the stats.
