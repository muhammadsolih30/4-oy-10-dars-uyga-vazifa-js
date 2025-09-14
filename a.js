/*
===========================
// 1-masala — String uchun custom metodlar
===========================

String.prototype.trm = function() {
  return String(this).trim();
};

String.prototype.upperCase = function() {
  return String(this).toUpperCase();
};

String.prototype.has = function(substring, fromIndex = 0) {
  return String(this).includes(substring, fromIndex);
};

String.prototype.cut = function(start, end) {
  return String(this).slice(start, end);
};

String.prototype.rpt = function(times) {
  return String(this).repeat(times);
};

console.log('// 1-masala misollar:');
console.log("'  hello  '.trm() =>", '  hello  '.trm());
console.log("'abc'.upperCase() =>", 'abc'.upperCase());
console.log("'hello world'.has('world') =>", 'hello world'.has('world'));
console.log("'abcdef'.cut(1,4) =>", 'abcdef'.cut(1,4));
console.log("'ha'.rpt(3) =>", 'ha'.rpt(3));
console.log('');



===========================
// 2-masala — Number uchun custom metodlar
===========================

Number.prototype.fixed = function(decimals = 0) {
  return Number(this).toFixed(decimals);
};

Number.prototype.round = function() {
  return Math.round(Number(this));
};

Number.prototype.isSquare = function() {
  const n = Number(this);
  if (!isFinite(n) || n < 0) return false;
  const root = Math.sqrt(n);
  return Number.isInteger(root);
};

Number.prototype.count = function() {
  let n = Math.abs(Math.trunc(Number(this)));
  if (!isFinite(n)) return NaN;
  if (n === 0) return 1;
  return Math.floor(Math.log10(n)) + 1;
};

Number.prototype.sum = function() {
  let n = Math.abs(Math.trunc(Number(this)));
  if (!isFinite(n)) return NaN;
  let s = 0;
  if (n === 0) return 0;
  while (n > 0) {
    s += n % 10;
    n = Math.floor(n / 10);
  }
  return s;
};

console.log('// 2-masala misollar:');
console.log('(3.14159).fixed(2) =>', (3.14159).fixed(2));
console.log('(4.567).round() =>', (4.567).round());
console.log('(10.102).round() =>', (10.102).round());
console.log('(16).isSquare() =>', (16).isSquare());
console.log('(10).isSquare() =>', (10).isSquare());
console.log('(12345).count() =>', (12345).count());
console.log('(0).count() =>', (0).count());
console.log('(12345).sum() =>', (12345).sum());
console.log('');



===========================
// 3-masala — Array uchun custom metodlar
===========================

Array.prototype.customMap = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  const arr = Object(this);
  const len = arr.length >>> 0;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return result;
};

Array.prototype.customEvery = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      if (!callback.call(thisArg, arr[i], i, arr)) return false;
    }
  }
  return true;
};

Array.prototype.customReduce = function(callback /*, initialValue */) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  const arr = Object(this);
  const len = arr.length >>> 0;
  let k = 0;
  let accumulator;

  if (arguments.length > 1) {
    accumulator = arguments[1];
  } else {
    while (k < len && !(k in arr)) k++;
    if (k >= len) throw new TypeError('Reduce of empty array with no initial value');
    accumulator = arr[k++];
  }

  for (; k < len; k++) {
    if (k in arr) {
      accumulator = callback(accumulator, arr[k], k, arr);
    }
  }
  return accumulator;
};

Array.prototype.customFindIndex = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) return i;
    }
  }
  return -1;
};

Array.prototype.customSplice = function(start, deleteCount /*, ...items */) {
  const arr = this;
  const len = arr.length >>> 0;
  let relativeStart = start >> 0;
  let actualStart = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

  let actualDeleteCount;
  if (arguments.length === 1) {
    actualDeleteCount = len - actualStart;
  } else {
    actualDeleteCount = Math.min(Math.max(deleteCount >> 0, 0), len - actualStart);
  }

  const items = Array.prototype.slice.call(arguments, 2);
  const removed = [];

  for (let i = 0; i < actualDeleteCount; i++) {
    if (actualStart + i in arr) removed.push(arr[actualStart + i]);
  }

  const tail = [];
  for (let i = actualStart + actualDeleteCount; i < len; i++) {
    tail.push(arr[i]);
  }

  arr.length = actualStart;

  for (let i = 0; i < items.length; i++) {
    arr[arr.length] = items[i];
  }

  for (let i = 0; i < tail.length; i++) {
    arr[arr.length] = tail[i];
  }

  return removed;
};

console.log('// 3-masala misollar:');
const a = [1,2,3,4];
console.log('a.customMap(x => x*2) =>', a.customMap(x => x * 2));
console.log('a.customEvery(x => x>0) =>', a.customEvery(x => x > 0));
console.log('[1,2,3].customReduce((acc, v) => acc + v, 0) =>', [1,2,3].customReduce((acc, v) => acc + v, 0));
console.log('[1,2,3].customFindIndex(x => x===2) =>', [1,2,3].customFindIndex(x => x === 2));
const b = [0,1,2,3,4,5];
console.log('b before customSplice =>', b.slice());
const removed = b.customSplice(2, 2, 'a','b');
console.log('removed =>', removed);
console.log('b after customSplice =>', b);
console.log('');



===========================
// 4-masala — Constructorlar yaratish va prototip metodlari
===========================

function Animal(name, speed, limitAge) {
  this.name = name;
  this.speed = speed;
  this.limitAge = limitAge;
}

Animal.prototype.info = function() {
  return `Animal: name=${this.name}, speed=${this.speed}, limitAge=${this.limitAge}`;
};

function Student(name, course, years, university) {
  this.name = name;
  this.course = course;
  this.years = years;
  this.university = university;
}

Student.prototype.leftYears = function(totalCourseYears = 4) {
  const left = totalCourseYears - this.years;
  return left >= 0 ? left : 0;
};

function Person(name, age, currentYear) {
  this.name = name;
  this.age = age;
  this.currentYear = currentYear;
}

Person.prototype.getBirthYear = function() {
  if (typeof this.currentYear !== 'number' || typeof this.age !== 'number') return NaN;
  return this.currentYear - this.age;
};

function Employee(name, salary, workName) {
  this.name = name;
  this.salary = salary;
  this.workName = workName;
}

Employee.prototype.increaseSalary = function(percent) {
  const p = Number(percent);
  if (!isFinite(p)) return NaN;
  const newSalary = this.salary * (1 + p / 100);
  return newSalary;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

Rectangle.prototype.getPerimetr = function() {
  return 2 * (this.width + this.height);
};

console.log('// 4-masala misollar:');
const rabbit = new Animal('Rabbit', 40, 8);
console.log('rabbit.info() =>', rabbit.info());

const st = new Student('Ali', 2, 2, 'TUIT');
console.log('st.leftYears(4) =>', st.leftYears(4));

const p = new Person('Oybek', 25, 2025);
console.log('p.getBirthYear() =>', p.getBirthYear());

const emp = new Employee('Sara', 1000, 'Developer');
console.log('emp.increaseSalary(10) =>', emp.increaseSalary(10));

const rect = new Rectangle(5, 3);
console.log('rect.getArea() =>', rect.getArea());
console.log('rect.getPerimetr() =>', rect.getPerimetr());

===========================
// Tugadi.
===========================
*/
