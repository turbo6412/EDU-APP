/**
 * @jest-environment jsdom
 */
 const math_template = require('./MathFractionsJS.js')

 test('checks for question 1', () => {
     expect(MathFractionsJS.checkButton1()).toBe(null)
 });
 
 test('checks for question 2', () => {
     expect(MathFractionsJS.checkButton2()).toBe(null)
  });
 
  test('checks for question 3', () => {
     expect(MathFractionsJS.checkButton3()).toBe(null)
  });