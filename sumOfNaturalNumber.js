function Sum(number){
    let sum=0;
    for(let i=1;i<=number;i++){
       sum+=i
    }
    return sum
}
const result = Sum(3)
console.log(result);





function Sum(n){
    return (n*(n+1))/2
}
console.log(Sum(3));