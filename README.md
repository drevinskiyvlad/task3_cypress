# Automated Tests for RealWorld.io Using Cypress

## Overview

This repository contains automated tests for the RealWorld.io site, implemented using the Cypress testing framework. These tests are designed to ensure the functionality and performance of the RealWorld.io application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Contributing](#contributing)

## Prerequisites

Before running the tests, ensure that you have the following prerequisites installed on your system:

- Node.js
- npm (Node Package Manager)
- Cypress

## Installation

1. Clone this repository to your local machine:
2. Navigate to the project directory:
3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running Tests

To execute the automated tests, follow these steps:

1. Open a terminal and navigate to the project directory:
2. Run Cypress test runner:

   ```bash
   npm run cypress:open
   ```

3. Cypress will open its test runner, and you can select the test spec file you want to run from the Cypress interface.

4. Click on the test spec you want to run, and Cypress will open a browser window and execute the tests.

Or: use command to run tests from terminal:

   ```bash
   npm run cypress:run
   ```

## Steps to Creating the Report
1. Get the record key from cypress dashboard
2. run the command:
   ```bash
   npx cypress run --record --key *KEY*
   ```

## Reporting

Cypress provides detailed test reports and logs in its test runner interface. You can view the results of the test execution there.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and add relevant tests.
4. Ensure all tests pass successfully.
5. Create a pull request with a clear description of your changes.