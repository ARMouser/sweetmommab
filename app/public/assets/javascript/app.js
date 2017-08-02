$(document).ready(function() {
    var activeURL = location.pathname;
    $(".header-links").each(function() {
        var href = $(this).attr("href");
        if (href === activeURL) {
            $(this).addClass("is-active-link");
        }
    })

});
$("#show-subrecmodal-btn").click(function() {
    $("#submit-rec-modal").modal("show");
});
$("#cart-submit-btn").click(function() {
    alert("Order Submitted!")
})