$(document).ready(function () {

     $('.delivery-table__name_collapse').on('click', function () {

         $(this).toggleClass('delivery-table__name_active');
         $(this).parent().find('.delivery-table__collapse').toggleClass('delivery-table__collapse_active');

     });

});