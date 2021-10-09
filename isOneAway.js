function isOneAway(str1='', str2='') {
    const arr1 = str1.split('')
    const arr2 = str2.split('')

    const diff1 = arrDiff(arr1, arr2)
    const diff2 = arrDiff(arr2, arr1)

    if (diff1.length > 1) {
        return false
    }

    if (diff2.length > 1) {
        return false
    }

    return true
}

function arrDiff (arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x))
}

console.log(isOneAway('they', 'them'))   // true
console.log(isOneAway('pale', 'ple'))    // true
console.log(isOneAway('pales', 'pale'))  // true
console.log(isOneAway('pale', 'bale'))   // true
console.log(isOneAway('pale', 'bake'))   // false