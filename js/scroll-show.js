$(function () {
    $(window).scroll(function () {

        var ws = $(this).scrollTop();

        // welcome
        if (ws > 100) {
            $('#welcome').css("transform", "translateY(0px)").css("opacity", "1");
        }
        
    });
});