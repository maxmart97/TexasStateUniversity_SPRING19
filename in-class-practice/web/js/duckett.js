var classVar;
var tagVar;

var single = "single";
var double = "double";

var $ = function (id) {
    return document.getElementById(id);
};

var $$ = function (className) {
    return document.getElementsByClassName(className);
};

var $$$ = function(tagName) {
    return document.getElementsByTagName(tagName);
};

$("results").addEventListener("click", function() {
    myFunction(single);
});

$("results").addEventListener("dblclick", function() {
    myFunction(double);
});

function myFunction(clickType) {
   //$("results").textContent = "Hello World!";

    if (clickType == "single") {
        //$("results").textContent = $("header").textContent;

        classVar = $$("hot");
        //$("results").textContent = classVar.length;

        $("results").textContent = "";

        for (var i = 0; i < classVar.length; i++) {
            $("results").textContent += classVar[i].textContent + ", "

            if (i == classVar.length - 1) {
                //$("results").textContent = $("results").textContent.substr(0, $("results").textContent.length - 2);
                $("results").textContent = $("results").textContent.slice(0, -2);
            }
        }
    } else if (clickType == "double"){
        tagVar = $$$("li");

        $("results").textContent = "";

        for (var i=0; i <tagVar.length; i++) {
            $("results").textContent += tagVar[i].textContent + ", "

            if (i == tagVar.length - 1) {
                //$("results").textContent = $("results").textContent.substr(0, $("results").textContent.length - 2);
                $("results").textContent = $("results").textContent.slice(0, -2);
            }
        }
    }
}