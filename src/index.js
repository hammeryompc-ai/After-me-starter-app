#!/usr/bin/env node
function greet(name = 'world') {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  const name = process.argv[2] || 'world';
  console.log(greet(name));
}

module.exports = { greet };
