"use strict";

$(document).ready(function() {
    // Elements
    var $items = $("#items-ul");
    var $id = $("#id-txt");
    var $name = $("#name-txt");
    var $salary = $("#salary-txt");
    var $age = $("#age-txt");

    // POST
    $("#post-btn").click(function() {
        var employee = {
            name: $name.val(),
            salary: $salary.val(),
            age: $age.val()
        };

        $.ajax( {
            type: "POST",
            url: "http://dummy.restapiexample.com/api/v1/create",
            dataType: "json",
            data: JSON.stringify(employee),
            success: function() {
                alert("Item added");
            },
            error: function() {
                alert("Error adding item");
            }
        });
    });

    // GET
    $("#get-btn").click(function() {
        $.ajax( {
            type: "GET",
            url: "http://dummy.restapiexample.com/api/v1/employees",
            dataType: "json",
            success: function(data) {
                $items.text("");
                $.each(data, function(i, item) {
                    $items.append("<li>Id: " + item.id + ", employee_name: " + item.employee_name + ", employee_salary: " +
                        item.employee_salary + ", employee_age: " + item.employee_age + ", profile_image: " + item.profile_image +
                    "</li>");
                });
            },
            error: function() {
                alert("Error getting items");
            }
        });
    });

    // PUT
    $("#put-btn").click(function() {
        var employee = {
            name: $name.val(),
            salary: $salary.val(),
            age: $age.val()
        };

        $.ajax( {
            type: "PUT",
            url: "http://dummy.restapiexample.com/api/v1/update/" + $id.val(),
            data: JSON.stringify(employee),
            success: function() {
                alert("Item updated");
            },
            error: function() {
                alert("Error updating item");
            }
        });
    });

    // DELETE
    $("#delete-btn").click(function() {
        $.ajax( {
            type: "DELETE",
            url: "http://dummy.restapiexample.com/api/v1/delete/" + $id.val(),
            success: function() {
                alert("Item deleted");
            },
            error: function() {
                alert("Error deleting item");
            }
        });
    });
});