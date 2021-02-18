let $catalogMenu;
let catalogMenuInit = false;
let $categoryItem;
let activeSubcategory;

$(document).ready(function () {

    $catalogMenu = $('.catalog-menu');
    let $categoryLink = $('.catalog-menu__category');
    $categoryItem = $('.catalog-menu__right');
    activeSubcategory = $categoryLink.first().attr('data-subcategory');
    let timer;

    $categoryLink.mouseenter(function() {
        activeSubcategory = $(this).attr('data-subcategory');
        clearTimeout(timer);
        timer = setTimeout(showSubcategory, 500, activeSubcategory);
    });

    $('.menu-category').on('click', function (e) {
        if ($(window).width() < 992)
            e.preventDefault();
    });

});

function toggleCatalogMenu() {
    $catalogMenu.toggleClass('catalog-menu_active');
    if (!catalogMenuInit) {
        showSubcategory(activeSubcategory);
        catalogMenuInit = true;
    }
}

function showSubcategory(id) {

    $categoryItem.removeClass('catalog-menu__right_active');
    $('.catalog-menu__right[data-subcategory="'+id+'"]').addClass('catalog-menu__right_active');

    $('.catalog-menu__right_active .manufacturers-small__carousel').flickity({
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        contain: true,
    });

}