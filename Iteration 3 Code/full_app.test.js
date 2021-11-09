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
 