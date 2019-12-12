var books = [];

var $ = function(id) {
    return document.getElementById(id);
};

function Book(name, author, price, quantity, publishDate) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPrice = price;
    this.bookQuantity = quantity;
    this.bookPublishDate = publishDate;
}

var addBook = function() {

    var name = $("name").value;
    var author = $("author").value;
    var price = $("price").value;
    var quantity = $("quantity").value;
    var datePublished = $("datePublished").value;

    if (validateBookName(name)) {
        alert("Book already exists!")
    } else {
        var myBook = new Book(name, author, price, quantity, datePublished);
        books.push(myBook);
        alert("Book saved.");
        $("invCount").textContent = "Inventory Count: " + books.length;
    }
};

var showBooksCount = function() {
    var count = 0;

    count = books.length;

    return count;
};

var viewInventory = function() {
    for (var i=0; i < books.length; i++) {
        var formatString = "Name: " + books[i].bookName + " | Author: " + books[i].bookAuthor + " | Price: " + books[i].bookPrice
        + " | Quantity: " + books[i].bookQuantity + " | Date: " + books[i].bookPublishDate;

        alert(formatString);
    }
};

var clearForm = function()  {
    $("name").value = "";
    $("author").value = "";
    $("price").value = "";
    $("quantity").value = "";
    $("datePublished").value = "";

    books = [];

    $("invCount").textContent = "Inventory Count: " + books.length;
};

var validateBookName = function(bookName) {

    var found = false;

    for (var i=0; i< books.length; i++) {
        if (books[i].bookName == bookName) {
            found = true;
        }
    }

    if (found == true) {
        return true;
    } else {
        return false;
    }
};

window.onload = function() {
    $("viewInv").onclick = viewInventory;
    $("add").onclick = addBook;
    $("clear").onclick = clearForm;
};
