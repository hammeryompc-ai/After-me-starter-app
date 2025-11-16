const { greet } = require('../src/index');

test('greet returns Hello, <name>!', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});

test('greet defaults to world', () => {
  expect(greet()).toBe('Hello, world!');
});
