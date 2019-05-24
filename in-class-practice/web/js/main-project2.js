//document.write("Hello World!");

//alert("Welcome to my first JavaScript page.");

var firstName;
var lastName = "Johnson";

var quant = 50;
var present = true;

//var familyName = prompt("Enter your family name:");
//document.write(familyName);

var cars = ['bmw', 'audi', 'volkswagen'];

//document.write(cars);
//document.write("<br/>");
//document.write(cars[0]);

var hotel = {
    name: 'Bobcat',
    rooms: 40,
    booked: 11,

    checkAvailability : function() {
        return this.rooms-this.booked;
    }

};

//document.write(hotel.name);
//document.write(hotel.checkAvailability());

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function() {
        return this.rooms-this.booked;
    }
}

var parkHotel = new Hotel('Park', 22, 15);
parkHotel.checkAvailability();

//document.writeln(parkHotel.name + " " + parkHotel.rooms + " " + parkHotel.booked);

var student1 = {
    firstName: 'John',
    lastName: 'Smith'
};

var student2 = {
    firstName: 'Anna',
    lastName: 'Johnson'
};


//THIS IS JSON
var studentsJSONFormat = [
    {
        firstName: 'John',
        lastName: 'Smith'
    },

    {
        firstName: 'Anna',
        lastName: 'Johnson'
    }
];

var students = [student1, student2];

var cis3325 = [];
cis3325.push(student1);
cis3325.push(student2);

//document.writeln(cis3325[0].firstName + " " + cis3325[0].lastName);

function anyArea(height, width) {
    return (height * width);
}

//document.writeln("The area is: " + anyArea(4,5));

var volume = function(height, width, depth) {
    return (height * width * depth);
};

//document.writeln("The volume is: " + volume(2, 3, 4));

document.getElementById("demo").innerHTML = cars[0];