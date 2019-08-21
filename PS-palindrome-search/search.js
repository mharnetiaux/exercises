const str1 = "Mydadisaracecar athlete";
const str2 = "Mom and brother.";
const str3 = "";

function palindrome(str) {
    const obj = {};
    let arr = [];
    let arrLength;
    let max;
    let secondMax;
    str = str.replace(/ /g,'').toLowerCase();
    for(let i = 0; i < str.length; i++) {
        let beginning = str[i];
        let occurrence;
        for(let j = i + 1; j < str.length; j++) {
            if(beginning === str[j]) {
                occurrence = j;
                const string = str.slice(i, occurrence + 1);
                const stringReverse = string.split('').reverse().join('');
                if(string === stringReverse) {
                    obj[string.length] = string;
                    arr.push(string.length);
                }
            }
        }
    }
    arrLength = arr.length;
    arr = [...new Set(arr)].sort();
    if(arrLength === 0){
        return "No Palindrome exists"
    }else if(arrLength === 1) {
        return "No Second Palindrome exists"
    }
    console.log(arr);
    max = Math.max(...arr);
    arr.splice(arr.indexOf(max), 1);
    secondMax = Math.max(...arr);
    return `Found Palindrome: ${obj[secondMax]};`
}

console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));
