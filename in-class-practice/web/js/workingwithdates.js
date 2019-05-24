var today = new Date();

alert("Full Year: " + today.getFullYear()); //year YYYY
alert("Month: " + today.getMonth()); //month MM-1
alert("Day: " + today.getDate()); //day DD
alert("Get Day: " + today.getDay()); //dayOfTheWeek 0-Sun, 1-Mon, 2-Tues, ...
alert("To date string: " + today.toDateString()); // DayOfWeek Mon Day Year - Tue Feb 05 2019

document.getElementById("demo").innerHTML = today.toDateString();