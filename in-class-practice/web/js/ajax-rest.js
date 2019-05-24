$(function() {
    var $myOrders = $("#orders");
    var $name = $("#name");
    var $drink1 = $("#drink1");
    var $drink2 = $("#drink2");
    var $drinkColor = $("#select-color");

    $("#get-order").click(function() {
        $.ajax({
            type: "get",
            url: "http://rest.learncode.academy/api/mtestcis3360/ajax-practice",
            success: function(orderList) {
                alert("Order has been successfully retrieved.");
                $.each(orderList, function(i, item) {
                    $myOrders.append(
                        "<li>Name: " + item.name +
                        " | Drink1: " + item.drink.drink1 +
                        " | Drink2: " + item.drink.drink2 +
                        " | Drink Color: " + item.drinkColor +
                        " | ID: " + item.id + "</li>");
                });
            },
            error: function() {
                alert("Error retrieving order."); }
        });
    });

    $("#add-order").click(function() {
        var order = {
            name: $name.val(),
            drink: {
                drink1: $drink1.val(),
                drink2: $drink2.val()
            },
            drinkColor: $drinkColor.val()
        };

        $.ajax({
            type: "post",
            url: "http://rest.learncode.academy/api/mtestcis3360/ajax-practice",
            data: order,
            success: function() {
                alert("Order has been successfully added."); },
            error: function() {
                alert("Error adding order."); }
        });
    });

    $("#put-order").click(function() {
        $.ajax({
            type: "put",
            url: "http://rest.learncode.academy/api/mtestcis3360/ajax-practice/" + $("#idul").val(),
            dataType: "json",
            contentType: "application/json",
            data: {
                "name": $name.val(),
                "drink": {
                    "drink1": $drink1.val(),
                    "drink2": $drink2.val()
                },
                "drinkColor": $drinkColor.val()
            },
            success: function() {
                alert("Order has been updated.");
            },
            error: function(status, error, jqXHR) {
                alert("Error: " + status + " | " + error + " | " + jqXHR);
            }
        })
    });

    $("#get-dog").click(function() {
        $.ajax( {
            type: "get",
            url: "https://dog.ceo/api/breeds/image/random",
            dataType: "json",
            success: function(data) {
                $("#dog-image").attr("src", data.message); },
            error: function() {
                alert("Error getting dog."); }
        });

    });
});