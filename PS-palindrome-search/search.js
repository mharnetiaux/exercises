const str1 = "My dad is a racecar athlete";
const str2 = "Mom and brother.";
const str3 = "";

function palindrome(str) {
  const obj = {};
  const arr = [];
  let max;
  let secondMax;
  str = str.replace(/ /g,'').toLowerCase();
  for(let i = 0; i < str.length; i++) {
    let beginning = str[i];
    let occurance;
    for(let j = i + 1; j < str.length; j++) {
      if(beginning === str[j]) {
        occurance = j;
        let string = str.slice(i, occurance + 1);
        let stringReverse = string.split('').reverse().join('');
        if(string === stringReverse) {
          obj[string.length] = string;
          arr.push(string.length);
        }
      }
    }
  }
  if(arr.length === 0){
    return "No Palindrome exists"
  }else if(arr.length === 1) {
    return "No Second Palindrome exists"
  }
  max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  secondMax = Math.max(...arr);
  return `Found Palindrome: ${obj[secondMax]};`
}

console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));
