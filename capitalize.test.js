const capitalize = require('./capitalize');

test('Capitalize first letter', () => {
  expect(capitalize("emile")).toBe("Emile");
});

test('Keeps a word capitalized', () => {
  expect(capitalize("Emile")).toBe("Emile");
});