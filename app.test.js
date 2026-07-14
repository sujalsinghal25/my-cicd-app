const http = require('http');
const assert = require('assert');

let server;

before(() => {
  const app = require('./app');
  server = app;
});

after(() => {
  if (server) server.close();
});

// Test 1: Basic assertion
assert.strictEqual(1 + 1, 2);
console.log('Test 1 passed: Basic assertion');

// Test 2: Check app.js exists
const fs = require('fs');
assert.ok(fs.existsSync('./app.js'));
console.log('Test 2 passed: app.js exists');

// Test 3: Check package.json exists
assert.ok(fs.existsSync('./package.json'));
console.log('Test 3 passed: package.json exists');

// Test 4: Check Dockerfile exists
assert.ok(fs.existsSync('./Dockerfile'));
console.log('Test 4 passed: Dockerfile exists');

// Test 5: Check Jenkinsfile exists
assert.ok(fs.existsSync('./Jenkinsfile'));
console.log('Test 5 passed: Jenkinsfile exists');

console.log('All tests passed!');