$(document).ready(function () {

    $('.product__carousel').flickity({
        prevNextButtons: false,
        pageDots: false,
    });

    $('.product__carousel-nav').flickity({
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        asNavFor: '.product__carousel',
    });

});