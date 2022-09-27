const {add, substract, divide, multiply} = require('./calculator');

// ----------------------------------------------------
// Testing the add() function
test('Add integers', () => {
  expect(add(1,2)).toBe(3);
});

test('Add negative numbers', () => {
  expect(add(-1,2)).toBe(1);
});

test('Handles strings', () => {
  expect(add("-1","2")).toBe(1);
});

test('Handles decimals', () => {
  expect(add(-1, 2.22)).toBe(1.22);
});

// ----------------------------------------------------
// Testing the substract() function
test('Substract integers', () => {
  expect(substract(1,2)).toBe(-1);
});

test('Substract negative numbers', () => {
  expect(substract(-1,2)).toBe(-3);
});

test('Substract strings', () => {
  expect(substract("-1","2")).toBe(-3);
});

test('Substract decimals', () => {
  expect(substract(-1, 2.22)).toBe(-3.22);
});

// ----------------------------------------------------
// Testing the divide() function
test('Divide integers', () => {
  expect(divide(1,2)).toBe(0.5);
});

test('Divide negative numbers', () => {
  expect(divide(-1,2)).toBe(-0.5);
});

test('Divide strings', () => {
  expect(divide("-1","2")).toBe(-0.5);
});

test('Divide decimals', () => {
  expect(divide(-1, 2.5)).toBe(-0.4);
});

// ----------------------------------------------------
// Testing the multiply() function
test('Multiply integers', () => {
  expect(multiply(1,2)).toBe(2);
});

test('Divide negative numbers', () => {
  expect(multiply(-1,2)).toBe(-2);
});

test('Divide strings', () => {
  expect(multiply("-1","2")).toBe(-2);
});

test('Divide decimals', () => {
  expect(multiply(-1, 2.5)).toBe(-2.5);
});