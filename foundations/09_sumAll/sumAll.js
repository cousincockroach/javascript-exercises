function sumAll(first, second){
    if (!Number.isInteger(first) || !Number.isInteger(second)){
        return "ERROR";
    }

    if (first < 0 || second < 0){
        return "ERROR";
    }
    result = 0;
    if (first < second){
        for (let i = first; i < second+1;i++){
            result = result + i; 
        }
    }
    else {
        for (let i = second; i < first+1; i++){
            result = result + i;
        }
    }
    return result;


}
// console.log(sumAll(-10,4))

// Do not edit below this line
module.exports = sumAll;

// (2, 4)
// (123,1)