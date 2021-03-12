$(document).ready(function () {

    let $mobileMenu = $('.mobile-menu');
    let $menuRoot = $('.mobile-menu__root');
    let $menuCatalog = $('.mobile-menu__catalog');
    let $menuSubcategories = $('.mobile-menu__subcategories');

    $('.mobile-menu__item_catalog').on('click', function () {
        $menuRoot.removeClass('mobile-menu__root_active');
        $menuCatalog.addClass('mobile-menu__catalog_active');
        $mobileMenu.scrollTop(0);
    });

    $('.mobile-menu__category').on('click', function () {
        $menuCatalog.removeClass('mobile-menu__catalog_active');
        $menuSubcategories.addClass('mobile-menu__subcategories_active');
        $('.mobile-menu__subcategory[data-subcategory="'+$(this).attr('data-subcategory')+'"]')
            .addClass('mobile-menu__subcategory_active');
        $mobileMenu.scrollTop(0);
    });

});