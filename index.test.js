const formulas = require("./index")

test('reverse the string', () => {
    expect(formulas.reverse('joy')).toBe('yoj')
})


test('capitalize the first letter', () => {
    expect(formulas.capitalize('joy')).toBe('Joy')
})

test("add 2 and 2 to get 4", () => {
    expect(formulas.calculator.add(2, 2)).toBe(4)
})

test("subtract 3 and 2 to get 1", () => {
    expect(formulas.calculator.subtract(3, 2)).toBe(1)
})

test("multiply 2 and 2 to get 4", () => {
    expect(formulas.calculator.multiply(2, 2)).toBe(4)
})

test("divide 4 and 2 to get 2", () => {
    expect(formulas.calculator.divide(4, 2)).toBe(2)
})

test('cipher joy to kpz using shift 2', () => {
    expect(formulas.ceaserCipher('joy', 1)).toBe('kpz')
})

test('cipher joy to kpz using shift 2', () => {
    expect(formulas.ceaserCipher('Hello', 3)).toBe('Khoor')
})

test('cipher joy to kpz using shift 2', () => {
    expect(formulas.ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('get the average', () => {
    expect(formulas.analyzeArray([1, 2, 4, 3])).toEqual({
        average: 2.5,
        length: 4,
        max: 4,
        min: 1
    })
})

