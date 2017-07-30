$(document).ready(function() {
    var activeURL = location.pathname;
    $(".header-links").each(function() {
        var href = $(this).attr("href");
        if (href === activeURL) {
            $(this).addClass("is-active-link");
        }
    })

});