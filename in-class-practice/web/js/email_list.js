"use strict";

/* OLD - IN CLASS

var $ = function(id) {
    return document.getElementById(id);
};

var go = function() {
    var ea1 = $("ea1").value;
    var ea2 = $("ea2").value;
    var fn = $("fn").value;

    if (ea1 != "" && (ea1 == ea2) && fn != "") {
        $("form").submit();
    } else {
        alert("Please make sure all textboxes are complete.");
    }
};

window.onload = function() {
    $("join_list").onclick = go;
}; */

/* From book - JavaScript ONLY

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    // validate the entries
    if (emailAddress1 == "") {
        $("email_address1").nextElementSibling.firstChild.nodeValue
            = "First email address required.";
        isValid = false;
    }
    else {
        $("email_address1").nextElementSibling.firstChild.nodeValue = "";
    }
    if (emailAddress2 == "") {
        $("email_address2").nextElementSibling.firstChild.nodeValue =
            "Second email address required.";
        isValid = false;
    }
    else if (emailAddress2 != emailAddress1) {
        $("email_address2").nextElementSibling.firstChild.nodeValue =
            "Email addresses must match.";
        isValid = false;
    }
    else {
        $("email_address2").nextElementSibling.firstChild.nodeValue = "";
    }
    if (firstName == "") {
        $("first_name").nextElementSibling.firstChild.nodeValue =
            "First name is required.";
        isValid = false;
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (isValid) {
        $("email_form").submit();
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};*/

// From book - jQuery
$(document).ready(function() {
    $("#email_address1").focus();

    $("#join_list").click(function() {
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var firstName = $("#first_name").val();
        var isValid = true;

        // validate the entries
        if (emailAddress1 == "") {
            $("#email_address1").next().text("First email address required.");
            isValid = false;
        } else {
            $("#email_address1").next().text("");
        }

        if (emailAddress2 == "") {
            $("#email_address2").next().text("Second email address required.");
            isValid = false;
        } else if (emailAddress2 != emailAddress1) {
            $("#email_address2").next().text("Email addresses must match.");
            isValid = false;
        } else {
            $("#email_address2").next().text("");
        }

        if (firstName == "") {
            $("#first_name").next().text("First name is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }

        // submit the form if all entries are valid
        // otherwise, display an error message
        if (isValid) {
            $("#email_form").submit();
        }
    });
});