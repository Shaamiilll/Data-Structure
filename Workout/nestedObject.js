const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5,
        }
    },
    h: 10
}


function sumOfObjValue(obj){
    return Object.values(obj).reduce((total, value) => {
        if(typeof value === 'object'){
            return total += sumOfObjValue(value);
        }
        return total += value;

        
    }, 0);
}

console.log(sumOfObjValue(obj));
