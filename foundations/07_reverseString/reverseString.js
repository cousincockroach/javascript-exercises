function reverseString(str){
    reverse = "";
    for (let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str.charAt(i);
    }
    return reverse;
}

// Do not edit below this line
module.exports = reverseString;
