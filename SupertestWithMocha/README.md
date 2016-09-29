# Instructions and Setup
1. Install NodeJS (and npm)
* Run `npm install`
* To run the tests simply run this from anything that can run cmds: `npm run integration`

# A Brief History of Everything
1. [NodeJS] (https://nodejs.org/dist/latest-v4.x/docs/api/) - provides the core plumbing for managing web requests and responses.
* [Supertest] (https://github.com/visionmedia/supertest) - a framework which sits on top of NodeJS for managing web requests and responses. Additionally, it provides the core assertions against the responses received from the API.
* [Mocha] (https://mochajs.org/) - a test framework--_similar to MSpec_--which gives some structure to how we write the tests.
* [Should] (http://shouldjs.github.io/) - an assertion framework which helps us assert against errors.
* [Express] (https://expressjs.com/en/4x/api.html) - a simple web server host for NodeJS.

# What's in this project
* A simple web server hosted in ExpressJS. We use this as the target for our tests
* Mocha drives the process and executes our tests
* Supertest is used on top of the NodeJS plumbing for sending web requests to our server
* `integration` in the `package.json` file is a script which provides and alias to kick off our test suite
