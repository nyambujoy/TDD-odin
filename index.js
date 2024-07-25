const reverse = (string) => {
    if (string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0]
}

const capitalize = (word) => {
    const firstLetter = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetter + otherLetters
}

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b;
    }
}


module.exports = {
    reverse: reverse,
    capitalize: capitalize,
    calculator: calculator,
}