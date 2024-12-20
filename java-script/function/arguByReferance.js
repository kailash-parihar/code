function setName(obj) {
    obj.name = "Kuldeep";
}
var person = new Object();
setName(person);
console.log(person.name);   //Output: Kuldeep 
/**
 जब Arguments के रूप में हम किसी Object के Reference को Pass करते हैं, तब Argument Variable व Actual Variables दोनों दो अलग Variables होते हुए भी समान Object को ही Refer करते हैं।

इसलिए यदि Function के अन्दर Reference Hold करने वाले Argument Variable द्वारा Object के मान को Change किया जाए, तो Object का Actual मान Change होता है। फलस्वरूप Function के बाहर के Variable पर भी Change का Effect Reflect होता है। इसे समझने के लिए हम निम्न उदाहरण देख सकते हैं:
 */
function modifyObject(obj) {
    obj.age = 25; // Object की property बदली गई
}

let user = { name: "Kailash" }; // Object बनाया गया
modifyObject(user); // user का reference pass किया गया
console.log(user.age); // Output: 25 (Object के अंदर बदलाव हुआ)
