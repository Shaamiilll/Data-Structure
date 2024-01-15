function sum(value){
    if(value === 0){
        return 0
    }

    return value + sum(value-1)
}
console.log(sum(3));