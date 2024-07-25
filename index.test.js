const formulas = require("./index")

test('reverse the string', () => {
    expect(formulas.reverse('joy')).toBe('yoj')
})