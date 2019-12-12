var $ = function(id) {
    return document.getElementById(id);
};

var processEntries = function () {
    //Elements of form
    var fnElement = $("fn");
    var lnElement = $("ln");
    var dobElement = $("dob");
    var emailElement = $("email");
    var pwElement = $("pw");
    var rtpwElement = $("retype-pw");

    //Element values (whitespace trimmed)
    var fnValue = fnElement.value.trim();
    var lnValue = lnElement.value.trim();
    var dobValue = dobElement.value.trim();
    var emailValue = emailElement.value.trim();
    var pwValue = pwElement.value.trim();
    var rtpwValue = rtpwElement.value.trim();

    //Other variables
    var age;
    var whiteSpaceRegEx = /^\s+$/; //Regular expression to determine if user only typed in whitespace

    //Form input validation
    if (fnValue != "" && !whiteSpaceRegEx.test(fnValue)) {
        if (lnValue != "" && !whiteSpaceRegEx.test(lnValue)) {
            if (isDobValid(dobValue)) {
                if (isEmailValid(emailValue)) {
                    if (pwValue != "" && !whiteSpaceRegEx.test(pwValue)) {
                        if (pwValue == rtpwValue) {
                            age = computeAge(parseInt(dobValue.substr(0,2)),
                                parseInt(dobValue.substr(3,2)),
                                parseInt(dobValue.substr(6,4)));
                            $("results").innerText = formatResults(fnValue,
                                lnValue, age, emailValue);
                        } else {
                            alert("Passwords do not match.");
                            pwElement.value = "";
                            rtpwElement.value = "";
                            pwElement.focus();
                        }
                    } else {
                        alert("Password is invalid.");
                        pwElement.value = "";
                        rtpwElement.value = "";
                        pwElement.focus();
                    }
                } else {
                    alert("Email is invalid.");
                    emailElement.focus();
                }
            } else {
                alert("Date of birth is invalid. Format: 'mm/dd/yyyy'.");
                dobElement.focus();
            }
        } else {
            alert("Last name is invalid.");
            lnElement.focus();
        }
    } else {
        alert("First name is invalid.");
        fnElement.focus();
    }
};

var isDobValid = function(dob) {
    // A regular expression to validate date of birth string (mm/dd/yyyy)
    var dobRegEx = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/[0-9]{4}$/;

    var today = new Date();

    if (dobRegEx.test(dob)) {
        var month = parseInt(dob.substr(0, 2));
        var day = parseInt(dob.substr(3, 2));
        var year = parseInt(dob.substr(6, 4));

        if (day == 31 && (month == 9 || month == 4 || month == 6 || month == 11)) {
            return false;
        } else if (day >= 30 && month == 2) {
            return false;
        } else if (day == 29 && month == 2 && !isLeapYear(year)) {
            return false;
        } else if (year > today.getFullYear()) {
            return false;
        } else if (year == today.getFullYear() &&
            day > today.getDate() && (month == today.getMonth() + 1)) {
            return false;
        } else if (year == today.getFullYear() && (month > today.getMonth() + 1)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

var isLeapYear = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if ( year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

var isEmailValid = function(email) {
    var emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (email.length <= 254 && emailRegEx.test(email));
};

var computeAge = function(month, day, year) {
    var today = new Date();

    if (isBeforeBirthday(month, day, today)) {
        return (today.getFullYear() - year) - 1;
    } else {
        return today.getFullYear() - year;
    }
};

var isBeforeBirthday = function (month, day, today) {
    var todayMonth = today.getMonth() + 1;
    var todayDay = today.getDate();

    if (todayMonth < month) {
        return true;
    } else if (todayMonth > month) {
        return false;
    } else if (todayMonth == month) {
        if (todayDay < day) {
            return true;
        } else if (todayDay > day) {
            return false;
        } else if (todayDay == day) {
            return false;
        }
    }
};

var formatResults = function (firstName, lastName, age, email) {
    var finalFn = firstName;
    var finalLn = lastName;
    var finalEmail = email;

    if (firstName.length > 20)
        finalFn = firstName.substr(0, 20) + "...";
    if (lastName.length > 20 )
        finalLn = lastName.substr(0, 20) + "...";
    if (email.length > 50)
        finalEmail = email.substr(0, 50) + "...";

    return finalFn + " " + finalLn + ", your age is " + age + " and your email address is " + finalEmail;
};

var clearResults = function() {
    var fn = $("fn");

    fn.value = "";
    $("ln").value = "";
    $("dob").value = "";
    $("email").value = "";
    $("pw").value = "";
    $("retype-pw").value = "";
    $("results").innerText = "";
    fn.focus();
};

window.onload = function() {
    $("btn-submit").onclick = processEntries;
    $("btn-clear").onclick = clearResults;
    $("fn").focus();
};

