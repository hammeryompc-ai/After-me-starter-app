const assert = require('assert');
const { greet } = require('../src/index.js');

assert.strictEqual(greet('Alice'), 'Hello, Alice!');
assert.strictEqual(greet(), 'Hello, world!');

console.log('All tests passed.');
