
//Click event way number 1
var count = 0;
function doSomething() {
    count++;
    document.getElementById("testing").innerHTML = "You clicked me " + count + " times.";
}

//Click event way number 2
document.getElementById("demo").onclick = function() {
    myFunction();
};
function myFunction() {
    document.getElementById("demo").innerHTML = "You also clicked me.";
}

//Click event way number 3 with eventhandler
document.getElementById("otherdemo").addEventListener("click", otherFunction);
function otherFunction() {
    document.getElementById("otherdemo").innerHTML = "You clicked the other demo!";
}

//Click event with button
function showAlert() {
    alert("This is an alert.");
}

//$ as var name = to a function to get element by id easier
var $ = function(id) {
    return document.getElementById(id);
};

var p_testing = $("testing").innerHTML;
document.write("Do not " + p_testing.toLowerCase());

document.getElementById("demo").onclick = function() {
    document.getElementById("demo").innerHTML = "You also clicked me.";
};

alert("Hello");
confirm("Did right clicking on a .html file and clicking run actually work?");

var $$ = function(id) {
    return document.getElementsByClassName(id)
};

function changeParagraphColor() {
    var paragraphList = $$("beautiful");

    for(var i = 0; i < paragraphList.length; i++)
        paragraphList[i].style.color = "blue";
}

function changeBgColor() {
    var paragraphList = document.getElementsByTagName("p");

    for (var i = 0; i < paragraphList.length; i++)
        paragraphList[i].style.backgroundColor = "purple";
}