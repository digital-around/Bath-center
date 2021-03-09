$(document).ready(function () {

    let sliderIsRunning = false;
    let $slider;

    function manageSlider() {

        if ($(window).width() < 768 && !sliderIsRunning) {

            sliderIsRunning = true;
            $slider = $('.installation-partners__grid').flickity({
                pageDots: false,
                cellAlign: 'left',
            });

        } else if ($(window).width() >= 768 && sliderIsRunning) {

            sliderIsRunning = false;
            $slider.flickity('destroy');

        }

    }

    manageSlider();

    $(window).resize(function () {
        manageSlider();
    });

});