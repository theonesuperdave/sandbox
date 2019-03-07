# sandbox
I play a lot here. Tech research, proof-of-concepts, etc. It's like a playground for nerds.

### RivetsJS
Just a basic web app using rivets

### RivetsJSConDurandalJS
An implementation of DurandalJS using RivetsJS for everything but the compose binding. Several variations of data-binding and AMD modules are in play.

### KarmaWithMocha
This is a simple setup using Karma for the test framework and Mocha as the test runner. Since requireJS is a thing, there is the config and example of that as well. Grunt is also an option for running Mocha here, but it doesn't play well with requireJS, so examples are limited.

### SupertestWithMocha
This one is the same tech stack as `KarmaWithMocha`, only adding `supertest` on top of it for API calls. The result is a light-weight, performant test kit which can be used for various integration/API tests. The output can be piped to a CI/CD server or other dashboard for visibility and monitoring.

### json-config-transform
I needed a simple console app to transform config files written in `JSON`. This one is a basic one written using .Net Core 2.0. The source file contents are iterated over, replacing any matching content present in a target file of the same structure. Values are replaced, and outputted for use in the necessary services.

### jest-the-basics
In this sample, we setup `Jest` to run unit tests against our JavaScript modules. Everything runs under NodeJS and can mock out API calls and other dependencies as well as report code coverage for the tests. Nothing fancy, just a kind of starter kit which shows how to get started testing either client- or server-side code.
