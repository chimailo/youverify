function stringCompression(str='') {
    let compressedStr = '';
    let count = 1;

    for (let i = 0; i < str.length; i++){
        let currentStr = str[i];
        let nextStr = str[i + 1];
        
        if (currentStr === nextStr){
            count++;
        } else {
            compressedStr += `${currentStr}${count}`;
            count = 1;
        };
    }

    if (compressedStr.length < str.length) {
        return compressedStr
    }

    return str
}

console.log(stringCompression('aabccccaaa'));
console.log(stringCompression('accommodate'));