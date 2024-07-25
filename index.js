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




const analyzeArray = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const average = arr.reduce((sum, value) => sum + value, 0) / arr.length
    const length = arr.length
    return {
        average,
        min,
        max,
        length

    }
}

analyzeArray([1, 8, 3, 4, 2, 6])


module.exports = {
    reverse: reverse,
    capitalize: capitalize,
    calculator: calculator,
    ceaserCipher: ceaserCipher,
    analyzeArray: analyzeArray
}