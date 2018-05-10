$(document)
    .ready(function () {
        $("nav")
            .find("li")
            .on("click", "a", function () {
                $('.navbar-collapse').collapse('hide');
            });
    });