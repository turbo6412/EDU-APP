/**
 * @jest-environment jsdom
 */
const math_template = require('./math__template_anthony.js')
squareMsg = math_template.squareErrorMessage
// const shapeReact = require('./setShapePic')
// const centMsg = require('./checkCents')

test('properly calls squareErrorMessage function', () => {
    expect(
        squareMsg()
    ).toBe(null)
})
test('properly calls setShapePic function', () => {
    expect(
        shapeReact()
    ).toBe(false)
})
test('properly calls checkCents', () => {
    expect(
        centMsg('CENT-VALIDATE1', 'quarter', 25)
    ).toBe(null)
})
test('properly calls checkCents', () => {
    expect(
        centMsg('CENT-VALIDATE2', 'dime', 10)
    ).toBe(null)
})
test('properly calls checkCents', () => {
    expect(
        centMsg('CENT-VALIDATE3', 'nickel', 5)
    ).toBe(null)
})
test('properly calls checkCents', () => {
    expect(
        centMsg('CENT-VALIDATE4','penny', 1)
    ).toBe(null)
})

