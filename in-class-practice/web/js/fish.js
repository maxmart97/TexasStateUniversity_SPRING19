$(document).ready(function() {

    // Preload all images
    $("#image-list a").each(function() {
        var imageToSwap = new Image();
        imageToSwap.src = $(this).attr("href");
    });

    // Click event for each image
    $("#image-list a").click(function(event) {
        event.preventDefault();
        var imageHref = $(this).attr("href");

        $(this).children().animate({ width: "+=500px", height: "+=500px" }, 250).animate(
            { width: "-=500px", height: "-=500px" }, 250);

        $("#main-image").attr("src", imageHref);
        $("#caption").text($(this).attr("title"));
    });

    $("li:first-child a").focus();
});