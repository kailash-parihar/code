// let pattern = /[0-9][A-Z][a-z]/g;
let pattern = /[0-9][A-Z][a-z]/g;
let input = "96Divtag";
console.log(pattern.test(input));
// console.log(input.match(pattern));
// console.log(input.match(pattern).length);
console.log(input.search(pattern));