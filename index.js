const reverse = (string) => {
    if (string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0]
}

const capitalize = (word) => {
    const firstLetter = word.charAt(0).toUpperCase()
    const otherLetters = word.slice(1)
    return firstLetter + otherLetters
}



module.exports = {
    reverse: reverse,
    capitalize: capitalize
}