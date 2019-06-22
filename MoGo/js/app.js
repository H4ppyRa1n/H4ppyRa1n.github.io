$(function(){
    var header=$("#header"),
        introH=$("#intro").innerHeight(),
        scrollOffset=$(window).scrollTop();
        /*fixedheader*/
        checkScroll(scrollOffset);
    $(window).on("scroll",function(){
        scrollOffset=$(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }
    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var blockID=$(this).data("scroll"),
            blockOffset=$(blockID).offset().top,
            $this=$(this);
            $("#nav a").removeClass("active");
            $this.addClass("active");
        $("html, body").animate({
            scrollTop:blockOffset
        }, 500);
    })
    /*menu nav toggle*/
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })
    /*Collaps*/
    $("[data-collaps]").on("click", function(event){
        event.preventDefault();
        var blockID=$(this).data("collaps"),
            $this=$(this);
            $this.toggleClass("active");
    })
    /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false
    });
});