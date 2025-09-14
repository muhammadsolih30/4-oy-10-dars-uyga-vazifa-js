// // 1-masala

// function getOddDividersSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 === 1) sum += i;
//   }
//   return sum;
// }
// // 2-masala

// function search(arr, str) {
//   const lower = str.toLowerCase();
//   return arr.filter(item => item.toLowerCase().includes(lower));
// }
// // 3-masala

// function getDividersSum(arr, n) {
//   return arr.filter(x => x % n === 0).reduce((a, b) => a + b, 0);
// }
// // 4-masala

// function checkSentence(str) {
//   return /^[A-Z].*\.$/.test(str);
// }
// // 5-masala

// function getNumberOfCases(str) {
//   let upper = 0, lower = 0;
//   for (let ch of str) {
//     if (/[A-Z]/.test(ch)) upper++;
//     else if (/[a-z]/.test(ch)) lower++;
//   }
//   return { upperCases: upper, lowerCases: lower };
// }
// // 6-masala

// function changeObjToString(obj) {
//   const keys = Object.keys(obj).join('');
//   const vals = Object.values(obj).join('');
//   return keys + vals;
// }
// // 7-masala

// function getProductsSum(...ids) {
//   return products
//     .filter(p => ids.includes(p.id))
//     .reduce((sum, p) => sum + p.price, 0);
// }
// // 8-masala

// function getTopProducts(products, n) {
//   return [...products]
//     .sort((a, b) => b.price - a.price)
//     .slice(0, n)
//     .map(p => p.name);
// }
// // 9-masala

// String.prototype.count = function (char) {
//   let c = 0;
//   for (let ch of this) if (ch === char) c++;
//   return c;
// };
// // 10-masala

// function Product(name, company, price, discount) {
//   this.name = name;
//   this.company = company;
//   this.price = price;
//   this.discount = discount;
// }
// Product.prototype.getInfo = function () {
//   if (this.discount && isFinite(this.discount)) {
//     const newPrice = this.price - (this.price * this.discount) / 100;
//     return `${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiyadagi narxi esa ${newPrice}$.`;
//   } else {
//     return `${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiya mavjud emas!`;
//   }
// };

