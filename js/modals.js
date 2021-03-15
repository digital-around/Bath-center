$(document).ready(function () {

    //вызов модалки "Заказать звонок"
    $('.header__callback, .footer__callback, .mobile-menu__callback').on('click', function () {
        $.fancybox.open({
            src: '#callback-modal',
        });
    });

    //вызов модалки "Ваша заявка принята!"
    $('.modal__submit').on('click', function () {
        $.fancybox.open({
            src: '#callback-modal-ok',
        });
    });

    //вызов модалки "Товар добавлен"
    $('.product-card__cart, .product__btn').on('click', function () {
        $.fancybox.open({
            src: '#cart-modal',
        });
    });

    //вызов модалки "Ваш заказ оформлен"
    $('.cart-total__btn').on('click', function () {
        $.fancybox.open({
            src: '#order-modal',
        });
    });

});