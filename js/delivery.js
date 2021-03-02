$(document).ready(function () {

    $('input[name="delivery"]').on('change', function () {
        $('.delivery__details').removeClass('delivery__details_active');
        $('.delivery__details[data-service="'+$(this).val()+'"]').addClass('delivery__details_active');
    });

});