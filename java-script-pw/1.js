let xhr = new XMLHttpRequest();
console.log("Ready State", xhr.readyState);
xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
console.log("Ready State", xhr.readyState);
xhr.onprogress = function () {
    console.log("Loading...");
};
xhr.send();
xhr.onload = function () {
    if (xhr.readyState == 4) {
let response =JSON.parse(xhr.response);
document.getElementById("Image").src=response.

    }
}