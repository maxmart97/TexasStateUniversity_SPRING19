$(document).ready(function() {
    $("#faqs h2").click(function() {
        $(this).toggleClass("minus");

        /* No animations
            if ($(this).attr("class") != "minus") {
                $(this).next().hide();
            } else {
                $(this).next().show();
            }
        */

        /* Animations fade and slide
            if ($(this).attr("class") != "minus") {
                $(this).next().finish().fadeToggle(250, "linear");
            } else {
                $(this).next().finish().slideToggle(250, "linear");
            }
        */

        // Animations with font size increase.
        if ($(this).attr("class") != "minus") {
            $(this).next().finish().hide();
        } else {
            $(this).next().finish().animate({display: "block", fontSize: "+=275%"}, 500).animate(
                {fontSize: "-=275%"}, 500).show();
        }
    });
});