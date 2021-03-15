$(document).ready(function () {

    let $mobileMenu = $('.mobile-menu');

    let menuOpened = false;
    let catalogOpened = false;
    let categoryOpened = false;
    let $menuToggle = $('.header__burger');

    $menuToggle.on('click', function () {

        if (!menuOpened) {

            $menuToggle.find('.icon-burger').addClass('d-none');
            $menuToggle.find('.icon-close').removeClass('d-none');
            $mobileMenu.addClass('mobile-menu_active');
            menuOpened = true;

        } else if (!categoryOpened && !catalogOpened) {

            $menuToggle.find('.icon-burger').removeClass('d-none');
            $menuToggle.find('.icon-close').addClass('d-none');
            $mobileMenu.removeClass('mobile-menu_active');
            menuOpened = false;

        } else if (categoryOpened) {

            categoryOpened = false;

            $menuCatalog.addClass('mobile-menu__catalog_active');
            $menuSubcategories.removeClass('mobile-menu__subcategories_active');
            $('.mobile-menu__subcategory').removeClass('mobile-menu__subcategory_active');

            $mobileMenu.scrollTop(0);

        } else if (catalogOpened) {

            catalogOpened = false;
            $menuToggle.find('.icon-close').removeClass('d-none');
            $menuToggle.find('.icon-back').addClass('d-none');

            $menuRoot.addClass('mobile-menu__root_active');
            $menuCatalog.removeClass('mobile-menu__catalog_active');

            $mobileMenu.scrollTop(0);

        }

    });

    let $menuRoot = $('.mobile-menu__root');
    let $menuCatalog = $('.mobile-menu__catalog');
    let $menuSubcategories = $('.mobile-menu__subcategories');

    $('.mobile-menu__item_catalog').on('click', function () {

        catalogOpened = true;
        $menuToggle.find('.icon-close').addClass('d-none');
        $menuToggle.find('.icon-back').removeClass('d-none');

        $menuRoot.removeClass('mobile-menu__root_active');
        $menuCatalog.addClass('mobile-menu__catalog_active');

        $mobileMenu.scrollTop(0);

    });

    $('.mobile-menu__category').on('click', function () {

        categoryOpened = true;

        $menuCatalog.removeClass('mobile-menu__catalog_active');
        $menuSubcategories.addClass('mobile-menu__subcategories_active');
        $('.mobile-menu__subcategory[data-subcategory="'+$(this).attr('data-subcategory')+'"]')
            .addClass('mobile-menu__subcategory_active');

        $('.mobile-menu__subcategory_active .manufacturers-small__carousel').flickity({
            prevNextButtons: true,
            pageDots: false,
            cellAlign: 'left',
            contain: true,
        });

        $mobileMenu.scrollTop(0);

    });

});