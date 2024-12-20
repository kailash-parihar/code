//Advanced String Operations 
let input = "Kailash! Parih! arpw";
// console.log(input.length);
// console.log(typeof input);
// console.log(input.charAt(2));
// console.log(input.charAt(-4));
// console.log(input.at(8));
// console.log(input[-4]); //undefined
// console.log(input[3]); 
// console.log(input[input.length -2]);
// console.log(input.slice(0, 10));
// console.log(input);
// console.log(input.substring(-5, -1));
// console.log(input.slice(1, -8));
// console.log(typeof input.slice(1, -8));
// console.log(input.includes("ari"));
// console.log(input.includes("Kail"));
// console.log(input.includes("ilas",2));
// console.log(input.includes("rihar",-2));
// console.log(input.startsWith("K"));
// console.log(input.endsWith("Khar"));
// console.log(input.trim());
// console.log(input.indexOf("har"));
// console.log(input.indexOf(" "));
// console.log(input);
// console.log(input.trimStart());
// console.log(input.trimEnd());
// console.log(input.lastIndexOf("p"));
// console.log(input.split(" "));console.log(input.split("s"));
// console.log(input.(" "));
// console.log(input.match(/[aeiu]/));

let str = "Kailash parihar!";
let vowels = "";
for (let char of str) 
    {
  if ("aeiouAEIOU".includes(char)) 
    {
    vowels += char;
  }
}
console.log(vowels);
