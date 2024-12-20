function add20(val) {
    val += 20;
    return val;
}
var count = 20;
var res = add20(count);
console.log(count); //Output: 20 – No Change
console.log(res); //Output: 40

/** 
  उपरोक्त Code में हमने count नाम के Variable में मान 20 Initialize किया है। जब हम इस count Variable को Function में Argument के रूप में Pass करते हैं, तब इस Variable का मान Function के Variable val में Copy हो जाता है, जहां Function के अन्दर Variable Val के मान में 20 जोडने के बाद उसे फिर से Calling Function को Return किया जाता है।
 */