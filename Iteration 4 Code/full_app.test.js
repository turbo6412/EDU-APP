/**
 * @jest-environment jsdom
 */
 const full_app_template = require('./full_app.js')
 displayMath = full_app_template.displayMathComponents()
 displayEnglish = full_app_template.displayEnglishComponents()
 displayHomepage = full_app_template.displayHomepageComponents()

 test('properly calls displayMathComponents function', () => {
     expect(
        displayMath()
     ).toBe(null)
 })
 test('properly calls displayEnglishComponents function', () => {
     expect(
        displayEnglish()
     ).toBe(null)
 }) 
 test('properly calls displayHomepageComponents function', () => {
     expect(
        displayHomepage()
     ).toBe(null)
 })
 /* 
    jest-enviroment
*/
const math_temp = require("./main.js")

test('checks for volcano 1', () => {
    expect(math_temp.show_volcano()).toBe(null)
});

test('checks for volcano 2', () => {
    expect(math_temp.volcano_check2('s')).toBe(null)
});

test('checks for volcano 3', () => {
    expect(math_temp.volcano_check3('c')).toBe(null)
});/* 
    jest-enviroment
*/
const math_temp = require("./main.js")

test('checks for volcano 1', () => {
    expect(math_temp.show_volcano()).toBe(null)
});

test('checks for volcano 2', () => {
    expect(math_temp.volcano_check2('s')).toBe(null)
});

test('checks for volcano 3', () => {
    expect(math_temp.volcano_check3('c')).toBe(null)
});