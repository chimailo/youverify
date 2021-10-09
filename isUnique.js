function isUnique(str='') {
    const strArray = str.split('')
    const n = strArray.length

    for (let i=0; i<n-1; i++) {
        for (let j=i+1; j<n; j++) {
            if (strArray[i] === strArray[j]) {
                return false;
            }
        }
    }

    return true
}

console.log(isUnique('onomatopoeia'))
console.log(isUnique('sword'))
console.log(isUnique('vmodmvpemocs'))
console.log(isUnique('number'))