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


const ceaserCipher = (word, shift) => {
    let result = ''
    for (let i = 0; i < word.length; i++) {
        let charCode = word[i].charCodeAt()
        if (charCode > 97 && charCode < 122 || charCode > 65 && charCode < 90) {
            charCode += shift
        }
        if (charCode > 90 && word[i] === 'Z' || charCode > 122) {
            charCode = -26
        }

        result += String.fromCharCode(charCode);
    }
    return result
}

console.log(ceaserCipher('joy', 2))


module.exports = {
    reverse: reverse,
    capitalize: capitalize,
    calculator: calculator,
    ceaserCipher: ceaserCipher,
}