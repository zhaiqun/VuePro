// import { Toast } from 'mint-ui'
// import axios from 'axios'
export var getImage = function(callBack) {
    if (!window.data) {
        $.get('/publickTest/data.json', function(data) {
            window.data = data;
            console.dir('js文件里得到的' + data)
            return callBack(data)

        })
    }
    return callBack(window.data)

}
export var bannerCarousel = function() {

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


        if (ismove && distance > 0) {
            $('.carousel').carousel('prev');
        } else if (ismove && distance < 0) {

            $('.carousel').carousel('next');
        }


    })
}

export var render = function() {
    return $(window).width() < 768

}