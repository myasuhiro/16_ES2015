new Set([1,1,2,2,3,4]);
//{1, 2, 3, 4}

[...new Set("referee")].join("");
//"ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//0: {Array(3) => true}, 1: {Array(3) => false}

// function hasDuplicate(arr) {
//   let valuesAlreadySeen = [];
//   for(let val of arr) {
//     if(valuesAlreadySeen.indexOf(val) !== -1) {
//       return true;
//     }
//     valuesAlreadySeen.push(val);
//   }
//   return false;
// }

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// function vowelCount(str) {
//   const vowel = 'aeiou';
//   let result = {};
//   let lowerCaseStr = str.toLowerCase();
//   for (let char of lowerCaseStr) {
//     if (vowel.includes(char)) {
//       if(!result[char]) {
//         result[char] = 1;
//       } else {
//       result[char] += 1;
//       }
//     }
//   }
//   return result;
// }

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if('aeiou'.includes(lowerCaseChar)) {
      if(vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar)+1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}