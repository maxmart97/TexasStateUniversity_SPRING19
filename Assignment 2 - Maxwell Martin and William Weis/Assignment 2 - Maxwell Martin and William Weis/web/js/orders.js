$(function() { // START of $(document).ready()

    alert("BEFORE YOU START USING THE PROGRAM, PLEASE READ:\n\nThe API we are required to use deletes data from its server quickly! " +
        "If a functionality does not work as expected, please attempt it again. It is likely that the API deleted the data before a " +
        "specific functionality of this program was attempted.");

    // HTML elements for easier access and use.
    var $orders = $("#orders");
    var $name = $("#name");
    var $drink1 = $("#drink1");
    var $drink2 = $("#drink2");
    var $drinkColor = $("#drink-color");
    var $id = $("#id");


    // -------------------------------------------------------------------------------------


    // AJAX: POST
    $("#add-order").click(function() {
        if (validateInput()) {
            var order = {
                name: $name.val(),
                drink: {
                    drink1: $drink1.val(),
                    drink2: $drink2.val()
                },
                drinkColor: $drinkColor.val()
            };

            $.ajax({
                type: "POST",
                url: "http://rest.learncode.academy/api/1234567890cis33600987654321mm/assignment2-ajax",
                //dataType: "json",
                data: order,
                success: function() {
                    alert("Order added successfully.");
                    resetTable();
                    $name.focus();
                },
                error: function() {
                    alert("Error adding order.");
                }
            });
        }
    });


    // AJAX: GET
    $("#get-order").click(function() {
        $.ajax({
            type: "GET",
            url: "http://rest.learncode.academy/api/1234567890cis33600987654321mm/assignment2-ajax",
            dataType: "json",
            success: function(orderList) {
                if (orderList.length === 0) {
                    alert("No orders found. Please add an order first. " +
                        "The API deletes data fast, so ADD an order quickly and then GET an order quickly.");
                    $orders.html("");
                } else {
                    $orders.html("");
                    $.each(orderList, function(i, item) {
                        $orders.append(
                            "<li>Name: " + item.name +
                            " | Drink1: " + item.drink.drink1 +
                            " | Drink2: " + item.drink.drink2 +
                            " | Drink Color: " + item.drinkColor +
                            " | ID: " + item.id + "</li>");
                    });
                }
            },
            error: function() {
                alert("Error retrieving order. Please reload page and/or contact developer of program.");
            }
        });
    });


    // AJAX: PUT
    $("#put-order").click(function() {
        if (validateInput()) {
            var order = {
                name: $name.val(),
                drink: {
                    drink1: $drink1.val(),
                    drink2: $drink2.val()
                },
                drinkColor: $drinkColor.val()
            };

            var orderID = $id.val().trim();

            if (orderID === "") {
                alert("Please enter an ID to update an order.");
                $id.focus();
            } else {
                updateOrderList();

                if ($orders.children("li").length > 0) {
                    $.ajax({
                        type: "PUT",
                        url: "http://rest.learncode.academy/api/1234567890cis33600987654321mm/assignment2-ajax/" + orderID,
                        data: order,
                        success: function() {
                            updateOrderList();
                            resetTable();
                        },
                        error: function() {
                            alert("Update unsuccessful.");
                        }
                    });
                } else {
                    alert("No data in the API with ID (" + $id.val() + ") to update. Please add an order and then try to update again.");
                }
            }
        }
    });


    // AJAX: DELETE
    $("#delete-order").click(function() {
        var orderID = $id.val().trim();

        if (orderID === "") {
            alert("Please enter an ID to delete an order.");
            $id.focus();
        } else {
            $.ajax({
                type: "DELETE",
                url: "http://rest.learncode.academy/api/1234567890cis33600987654321mm/assignment2-ajax/" + orderID,
                success: function() {
                    alert("Deletion successful.");
                    updateOrderList();
                    resetTable();
                },
                error: function(jqXHR, status, error) {
                    alert("Deletion unsuccessful. Please make sure data exists and the ID is correct.\n" +
                        "Error: " + jqXHR.status + " - " + error);
                }
            });
        }
    });


    // -------------------------------------------------------------------------------------


    // Clears the textboxes on the form and resets the color selectbox.
    function resetTable() {
        $name.val("");
        $drink1.val("");
        $drink2.val("");
        $drinkColor.val("red");
        $id.val("");
    }


    // Updates the UL element to display the current data.
    function updateOrderList() {
        $.ajax({
            type: "GET",
            url: "http://rest.learncode.academy/api/1234567890cis33600987654321mm/assignment2-ajax",
            success: function(orderList) {
                if (orderList.length === 0) {
                    $orders.html("");
                } else {
                    $orders.html("");
                    $.each(orderList, function (i, item) {
                        $orders.append(
                            "<li>Name: " + item.name +
                            " | Drink1: " + item.drink.drink1 +
                            " | Drink2: " + item.drink.drink2 +
                            " | Drink Color: " + item.drinkColor +
                            " | ID: " + item.id + "</li>");
                    });
                }
            }
        });
    }


    function validateInput() {
        if ($name.val() === "") {
            alert("Please enter a name.");
            $name.focus();
            return false;
        } else if ($drink1.val() === "") {
            alert("Please enter a drink for Drink1.");
            $drink1.focus();
            return false;
        } else if ($drink2.val() === "") {
            alert("Please enter a drink for Drink2.");
            $drink2.focus();
            return false;
        }
        return true;
    }


}); // END of $(document).ready()

