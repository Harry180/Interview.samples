# Interview.samples

I've created this repository to start resolving riddles from interviews on which I'll be in the future. I'll try to resolve those in TDD developmnet process.

# Description of the riddles
1. When array got 2 or less element method/function should return 0. In other cases it should return second smallest value from the array.
Result can be seen here: https://github.com/Harry180/Interview.samples/blob/master/getValue.sample.js

# Steps to run tests:
1. Install node
2. Run commands:
    npm install mocha -g
    npm install chai
2. After installing needed packages you are good to go with run tests with command:
mocha ./tests/name-of-test-file-spec.js
or
mocha --reporter=nyan ./tests/name-of-test-file-spec.js for funnier looking results.
