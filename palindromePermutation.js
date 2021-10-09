let permutations = []

function PalindromePermutation(str) {
    findPermutations(str, 0, str.length-1);
    console.log(permutations)

    for (let i=0; i<permutations.length; i++) {
        if (isPalindrome(permutations[i])) {
            permutations = []
            return true
        }
    }

    permutations = []
    return false
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    var n = str.length;

    for (var i=0; i<n/2; i++) {
      if (str[i] !== str[n - 1 - i]) {
          return false;
      }
    }
    
    return true;
}

// Function to print permutations of string
// Params:
//   str: String - The string to find permutations for
//   start: number - Starting index of the string
//   n: number - Ending index of the string.
function findPermutations(str, start, n) {
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
function swap(str, i, j) {
    let strArray = str.split("");
    let temp = strArray[i] ;

    strArray[i] = strArray[j];
    strArray[j] = temp;

    return strArray.join("")
}

console.log(PalindromePermutation("cocoa"))
console.log(PalindromePermutation("tweet"))
console.log(PalindromePermutation('Tact coa'))
console.log(PalindromePermutation('leaflet'))
