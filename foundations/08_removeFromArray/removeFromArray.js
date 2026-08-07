function removeFromArray(...args){
    const len = args.length;
    let arr = args[0];
    for (let i = 1; i < len; i++){
        arr= arr.filter(item => item !== args[i]);
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
