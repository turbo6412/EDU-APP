/* 
    jest-enviroment
*/
const math_temp = require("./main.js")

test('checks for acorn 1', () => {
    expect(math_temp.check_acorn_1()).toBe(null)
});

test('checks for acorn 2', () => {
    expect(math_temp.check_acorn_2()).toBe(null)
});

test('checks for bee 1', () => {
    expect(math_temp.check_bee_1()).toBe(null)
});

test('checks for bee 2', () => {
    expect(math_temp.check_bee_2()).toBe(null)
});

test('checks for bee 3', () => {
    expect(math_temp.check_bee_3()).toBe(null)
});