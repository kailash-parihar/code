function setName(obj) {
  obj.name = "Kuldeep";
  obj = new Object();
  obj.name = "Mishra";
}
var person = new Object();
setName(person);
console.log(person.name); //Output: Kuldeep
/**
 सामान्यतः हमें ऐसा लग सकता है कि Function में Create किया गया नया Object Argument के रूप में आने वाले Object के Reference को Override कर देगा और obj में अब “Kuldeep” के स्थान पर “Mishra" String होगा।

लेकिन ऐसा नहीं होता। क्योंकि Function के अन्दर Create होने वाला Object एक Local Object है, इसलिए जैसे ही Function Terminate होता है, ये Object भी Destroy हो जाता है।
 */
