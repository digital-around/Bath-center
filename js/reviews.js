$(document).ready(function () {

    $('.reviews__carousel').flickity({
        prevNextButtons: true,
        pageDots: true,
    });

    $('.reviews__portraits').flickity({
        prevNextButtons: false,
        pageDots: false,
        asNavFor: '.reviews__carousel',
        draggable: false,
    });

});