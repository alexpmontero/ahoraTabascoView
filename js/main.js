function slide_home() {

	$("#slider_home").lightSlider({
	 	item: 1,
	 	speed: 600,
        mode: "fade",
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 4000,
        pauseOnHover:true,
        keyPress: true,
        adaptiveHeight:true
	}); 

    $("#slider_videos").lightSlider({
            pager:false,
            item: 1,
            speed: 600,
            mode: "fade",
            auto: true,
            loop: true,
            slideEndAnimation: true,
            pause: 3000,
            pauseOnHover:true,
    }); 

    $("#slider_opiniones").lightSlider({
            controls:false,
            item: 5,
            speed: 600,
            mode: "slide",
            auto: true,
            slideEndAnimation: true,
            pause: 3000,
            pauseOnHover:true,
            responsive: [{
                breakpoint: 980,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });   
           
    $("#slide_category").lightSlider({
            item: 3,
            speed: 600,
            mode: "slide",
            auto: true,
            loop: true,
            slideEndAnimation: true,
            pause: 3000,
            pauseOnHover:true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });  

    $("#slide_more_notes").lightSlider({
            controls:false,
            item: 4,
            speed: 600,
            mode: "slide",
            auto: true,
            loop: true,
            slideEndAnimation: true,
            pause: 3000,
            pauseOnHover:true,
            responsive: [{
                breakpoint: 980,
                settings: {
                item: 3,
                slideMove: 1,
                slideMargin: 0,
                }
                
            },{
                breakpoint: 600,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });     
}

function tooltip() {
    $('[data-toggle="tooltip"]').tooltip()
}

function search() {
    $(".btn_search").click(function() {
        $(".nav_search").slideDown(225);
    });

    $(".btn_close_search").click(function() {
        $(".nav_search").slideUp(225);
    });
}

