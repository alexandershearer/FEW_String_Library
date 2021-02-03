function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function capitalizeWords(str) {
    return str.toUpperCase()
}

function capitalizeHeadline(str) {
    const strArray = str.split(' ')
    let charArray = []
    for (let x = 0; x < strArray.length; x++) {
        charArray.push(strArray[x].charAt(0).toUpperCase() + strArray[x].slice(1));
    }
    return charArray.join(" ");
}

function removeExtraSpaces(str) {
    newStr = string.trim(str)
    const strArray = newStr.split(' ')
    return strArray.join(" ")
}

function kabobCase(str) {
    const strArray = str.split(' ')
    let newStr = ""
    for (let x = 0; x < strArray.length; x++) {
        if (x === strArray.length - 1) {
            newStr += strArray[x]
        } else {
            newStr += strArray[x] + '-'
        }
    }
    return newStr
}

function snakeCase(str) {
    const strList = str.split(' ')
    let newStr = ""
    for (let x = 0; x < strList.length; x++) {
        if (x === strList.length - 1) {
            newStr += strList[x]
        } else {
            newStr += strList[x] + '_'
        }
    }
    return newStr
}

function camelCase(str) {
    const newString = str.split(' ')
    let newStr = ""
    for (let x = 0; x < newString.length; x++) {
        if (x == 0) {
            newStr += newString[x]
        } else {
            newStr += capitalizeHeadline(newString[x])
        }
    }
    return newStr
}

function shift(str) {
    let letterArray = str.split('')
    let firstLetter = letterArray[0]
    let newArray = letterArray.slice(1)
    newArray.push(firstLetter)
    newArray = newArray.join('')
    return newArray
}

function makeHashTag(str) {
    const capitol = capitalizeWords(str).split(' ')

    const result = capitol.join('')

    return '#' + result;
}



function isEmpty(str) {
    let trimmedStr = str.trim()
    let isEmpty = true
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ' || str[i] == '\n' || str[i] == '\r' || str[i] == '\t') {

        } else {
            isEmpty = false
        }
    }
    return isEmpty
}

module.exports = {
    capitalize,
    capitalizeWords,
    capitalizeHeadline,
    isEmpty,
    removeExtraSpaces,
    kabobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag
}