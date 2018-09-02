var burger = $(".burger");
        var header = $("header nav");
        
        burger.on("click", function() {
            burger.toggleClass("burger_active");
            header.toggleClass("visible");
        });