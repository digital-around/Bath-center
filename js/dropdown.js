$(document).ready(function () {

    $('.dropdown:not(.dropdown_shops) .dropdown__item').on('click', function () {
        let selectedOptionText = $(this).text();
        let $dropdown = $(this).closest('.dropdown');
        $dropdown.find('.dropdown__input').text(selectedOptionText);
        $dropdown.find('.dropdown__item').removeClass('dropdown__item_active');
        $(this).addClass('dropdown__item_active');
    });

});