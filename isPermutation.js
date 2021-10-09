let permutations = []

function isPermutation(str1='', str2='') {
    if (str1.length !== str2.length) {
        return false
    }

    findPermutations(str1, 0, str1.length-1);
    console.log(permutations)

    for (let i=0; i<permutations.length; i++) {
        if (permutations[i] === str2) {
            permutations = []
            return true
        }
    }

    permutations = []
    return false
}

// Function to print permutations of string
// Params:
//   str: String - The string to find permutations for
//   start: number - Starting index of the string
//   n: number - Ending index of the string.
function findPermutations(str='', start, n) {
    if (start === n) {
        permutations.push(str)
        return;
    }

    for (let i=start; i<=n; i++) {
        str = swap(str, start, i);
        findPermutations(str, start + 1, n);
        str = swap(str, start, i);
    }
}

// Swap two string elements by index
// Params:
//   str: String - The string to carry out swap operation on
//   i: number - Starting index of the string
//   j: number - Ending index of the string.
function swap(str='', i, j) {
    let strArray = str.split("");
    let temp = strArray[i] ;

    strArray[i] = strArray[j];
    strArray[j] = temp;

    return strArray.join("")
}

console.log(isPermutation('am', 'ma'))
console.log(isPermutation('par', 'rap'))
console.log(isPermutation('the', 'thy'))
console.log(isPermutation('rag', 'rage'))
