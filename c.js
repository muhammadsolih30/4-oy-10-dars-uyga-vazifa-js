// // 1-masala
// function getSum(n) {
//   let oddProd = 1;
//   let evenProd = 1;
//   for (let i = 1; i <= n; i++) {
//     oddProd *= 2 * i - 1;
//     evenProd *= 2 * i;
//   }
//   return oddProd + evenProd;
// }

// // 2-masala
// function getHighestNumberOfDigits(arr) {
//   return arr.reduce((max, num) => {
//     return String(num).length > String(max).length ? num : max;
//   });
// }

// // 3-masala
// function getStringArr(arr) {
//   return arr.filter(item => typeof item === 'string');
// }

// // 4-masala
// function getPunctuationNumber(str) {
//   const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
//   let count = 0;
//   for (let ch of str) {
//     if (punctuationSigns.includes(ch)) count++;
//   }
//   return count;
// }

// // 5-masala
// function switchLetters(str) {
//   let res = '';
//   for (let ch of str) {
//     if (ch >= 'A' && ch <= 'Z') res += ch.toLowerCase();
//     else if (ch >= 'a' && ch <= 'z') res += ch.toUpperCase();
//     else res += ch;
//   }
//   return res;
// }
