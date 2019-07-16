export var search = function() {
    console.log('调用search')
    var banner = document.querySelector('.banner');
    var height = banner.offsetHeight;
    var header = document.querySelector('.jd_search_box');
    var opacity = 0;
    window.onscroll = function() {
        var distance = document.body.scrollTop;
        if (distance < height) {
            opacity = distance / height * 0.85
        } else {

            opacity = 0.85;
        }
        header.style.background = 'rgba(201,21,35,' + 0.85 + ')';

    }

}


export var banner = function() {

    var banner = document.querySelector('.banner');
    var imagebox = banner.querySelector('ul:first-child');
    var points = banner.querySelector('ul:last-child');
    var pointsLi = points.querySelectorAll('li');
    var bannerWidth = banner.offsetWidth;
    var index = 1;
    var timer = setInterval(() => {
        index++;


        bannerTransform(-index * bannerWidth);





    }, 2000);
    var bannerTransform = function(distance) {
        bannerAddTransition();
        imagebox.style.transform = 'translateX(' + (distance) + 'px)';
        if (index == 9) {
            index = 1;
            bannerRemoveTransition();
            bannerTransform(-index * bannerWidth);
        }

        if (index == 0) {
            bannerRemoveTransition();
            bannerTransform(-index * bannerWidth);
        }
        changePoint(index);

    }
    var bannerAddTransition = function() {
        imagebox.style.transition = 'all 0.5s';

    }
    var bannerRemoveTransition = function() {
        imagebox.style.transition = 'none';

    }

    var changePoint = function(index) {

        points.querySelector('li:nth-child(' + (index) + ')').classList.add('active');

        for (let i = 1; i <= pointsLi.length; i++) {

            if (i != index) {
                points.querySelector('li:nth-child(' + i + ')').classList.remove('active');
            }

        }
    }



    var startX = 0;
    var endX = 0;
    var isMove = false;
    imagebox.addEventListener('touchstart', function(e) {
        clearInterval(timer);

        startX = e.touches[0].clientX;

    }, { 'passive': false });
    imagebox.addEventListener('touchmove', function(e) {
        isMove = true;
        endX = e.touches[0].clientX;
        var distance = endX - startX;
        bannerTransform(-index * bannerWidth + distance);

        bannerRemoveTransition();


    }, { 'passive': true });
    imagebox.addEventListener('touchend', function(e) {

        if (isMove) {
            bannerRemoveTransition();
            if (Math.abs(endX - startX) < bannerWidth / 3) {


            } else if (endX - startX > 0) { /*右边滑动 */
                index--;

            } else { /*左边滑动 */
                index++;

            }
            bannerTransform(-index * bannerWidth);
        }
        startX = 0;
        endX = 0;
        isMove = false;
        timer = setInterval(() => {
            index++;
            bannerTransform(-index * bannerWidth);

        }, 2000);


    }, { 'passive': true })
}