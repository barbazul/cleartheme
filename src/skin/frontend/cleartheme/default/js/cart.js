/**
 *
 * cart.js
 *
 */

(function ($) {
    $(function () {
        
        // Sorry for this. But I prefer it than editing phtml just for that. You may do it.
        changeButtonsSetClass();
        
    });
    
    var changeButtonsSetClass = function () {
        var _selector =
            '#discount-coupon-form div.buttons-set'
         +', #shipping-zip-form div.buttons-set'
         +', #co-shipping-method-form div.buttons-set'
         ;
        
        $(_selector).removeClass('buttons-set').addClass('buttons-set-box');
    };
    
}(jQuery));