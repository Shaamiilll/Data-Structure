function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString("hyyyyy"));

function isPalindrome(str){
    const newString = str
    return newString === newString.split('').reverse().join('')
}

console.log(isPalindrome('hyyy')); //false
console.log(isPalindrome('hyyh')); //true


function areAngrams(str1,str2){
    const str = str1.split('').sort().join('')
    const str8 = str2.split('').sort().join('')

    if(str === str8){
        return true
    }else{
        return false
    }
}

console.log(areAngrams('hyy', 'yhyhhh'));