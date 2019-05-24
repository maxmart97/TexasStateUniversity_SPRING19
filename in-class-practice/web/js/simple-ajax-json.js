/*// An object with properties
var myCat = {
    "name" : "Kitty",
    "species" : "cat",
    "favFood" : "tuna"
};

// Kitty
console.log(myCat.name);

// An array with strings
var myColors = ["red", "yellow", "blue"];

// Yellow
console.log(myColors[1]);

// An array of objects
var myAnimals = [
    {
        "name" : "Kitty",
        "species" : "cat",
        "favFood" : "tuna"
    },
    {
        "name" : "Kitty2",
        "species" : "cat",
        "favFood" : "tuna2"
    }
];

// cat
console.log(myAnimals[0].species);
*/

function renderHTML(data) {
    var html = "";
    for(var i = 0; i < data.length; i++) {
        html += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }

    var animalContainer = document.getElementById("animal-info");
    animalContainer.insertAdjacentHTML("beforeend", html);
}

var pageCounter = 1;
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
    ourRequest.send();

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData);
        renderHTML(ourData);
    };

    pageCounter++;

    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});