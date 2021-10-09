// Method to replace all spaces in a string with %20
// params:
//   str: String - string to carry out operation on
//   target: String - what to replace
//   replaceWith: String - what to replace target with
function urlify(str='', target=' ', replaceWith='20%') {
    for (i=0; i<str.length; i++) {
        str = str.replace(target, replaceWith);
    }
    return str;
    // return str.replace(/ /g, replaceWith)
}


console.log(urlify('Mr John Smith'))
console.log(urlify('A rather pleasant opportunity'))
console.log(urlify(`That's just the way it is`))