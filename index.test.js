const formulas = require("./index")

test('reverse the string', () => {
    expect(formulas.reverse('joy')).toBe('yoj')
})


test('capitalize the first letter', () => {
    expect(formulas.capitalize('joy')).toBe('Joy')
})