$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banner__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:0,
        nav:false,
        dots:false
    });
    $('.gallery__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:10,
        nav:true,
        dots:false,
        navText:["<img src='img/arrow-slider1.png' alt='slider arrow'><img src='img/arrow-slider2.png' alt='slider arrow'>","<img src='img/arrow-slider1.png' alt='slider arrow'><img src='img/arrow-slider2.png' alt='slider arrow'>"],
        responsive : {
            0 : {
                items : 2,
            },
            576 : {
                items : 3,
            },
            993 : {
                items : 4,
            }
        }
    });
    $('.brands__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:30,
        nav:false,
        dots:false,
        responsive : {
            0 : {
                items : 1,
            },
            576 : {
                items : 2,
            },
            993 : {
                items : 3,
            },
            1200 : {
                items : 4,
            },
            1500 : {
                items : 5,
            }
        }
    });
});