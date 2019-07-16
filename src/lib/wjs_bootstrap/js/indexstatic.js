$(function() {
    $('[data-toggle="tooltip"]').tooltip();


    bannerCarousel();

    // document.onscroll = function() {



    //     var scrollDisatance = document.documentElement.scrollTop || document.body.scrollTop;
    //     console.log(scrollDisatance);
    //     var totalheight = $('.wjs_topbar').height() + $('.wjs_navbar').height();
    //     if (scrollDisatance >= totalheight) {
    //         $('.wjs_navbar').css('position', 'fixed');
    //         $('.wjs_navbar').css('z-index', '100');
    //         $('.wjs_navbar').css('background-color', '#fff');
    //         // $('.wjs_navbar').css('margin', 'absolute');

    //     } else {

    //         $('.wjs_navbar').css('position', 'static');
    //     }
    // }

})


function bannerCarousel() {

    var ismove = false;
    var bannerWidth = $('.carousel-inner');
    var startx = 0;
    var distance = 0
    $('.carousel-inner').on('touchstart', function(e) {

            startx = e.originalEvent.touches[0].clientX;


        }).on('touchmove', function(e) {

            var endx = e.originalEvent.touches[0].clientX;


            distance = endx - startx;

            ismove = true;


        }).on('touchend', function(e) {
            // }).on('touchend', function(e) {

            console.log(1);

            if (ismove && distance > 0) {
                $('.carousel').carousel('prev');
            } else if (ismove && distance < 0) {

                $('.carousel').carousel('next');
            }


        })
        // var isMove = false;
        // var bannerWidth = $('.carousel-inner');
        // var startX = 0;
        // var distanceX = 0
        // $('.carousel-inner').on('touchstart', function(e) {
        //     startX = e.originalEvent.touches[0].clientX;
        // }).on('touchmove', function(e) {
        //     var moveX = e.originalEvent.touches[0].clientX;
        //     distanceX = moveX - startX;
        //     isMove = true;
        // }).on('touchend', function(e) {
        //     /*距离足够 50px 一定要滑动过*/
        //     if (isMove && Math.abs(distanceX) > 50) {
        //         /*手势*/
        //         /*左滑手势*/
        //         if (distanceX < 0) {
        //             //console.log('next');
        //             $('.carousel').carousel('next');
        //         }
        //         /*右滑手势*/
        //         else {
        //             //console.log('prev');
        //             $('.carousel').carousel('prev');
        //         }
        //     }
        //     startX = 0;
        //     distanceX = 0;
        //     isMove = false;
        // });
}