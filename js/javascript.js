$(document).ready(function () {
    
    $(".fancybox").fancybox({

        'hideOnContentClick': true

    });
    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $(".product-btn-info").click(function (e) {

        e.preventDefault();

        $(this).closest(".product").children(".product-extended").css("display", "block");
        
        $('.product-extended--carousel').owlCarousel({
            center: true,
            items:3,
            loop:true,
            margin:20,
            nav:true,
            dots:false,
            navText: ["<img src='img/pagination1.png'>", "<img src='img/pagination2.png'>"],
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:3
                },
            }
        });

    });

    $(".porduct-extended--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".product-extended").css("display", "none");
        
    });

});