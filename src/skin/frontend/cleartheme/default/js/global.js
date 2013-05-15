/**
 *
 * global.js
 *
 */

(function ($) {
    $(function () {
        
        loginOverlayInit();
        showOverlayLogin();
        topCartTooltip();
        
    });
    
    var showOverlayLogin = function () {
        $('#quick-access ul.customer-account-links a').on('click', function (e) {
            var url = $(this).attr('href');
            if (!window.Frontend.isLoggedIn() && url.match(/login/)) {
                $('#mini-login-box').data('overlay').load();
                $('#mini-login').focus();
                e.preventDefault();
            }
        });
    };
    
    var loginOverlayInit = function () {
        $('#mini-login-box').overlay({
            target: '#mini-login-box',
            mask: {
                color: '#000',
                loadSpeed: 200,
                opacity: 0.3
            }
        });
    };
    
    var topCartTooltip = function () {
        if ($('#persistent-cart-items').length > 0) {
            $('#persistent-cart').tooltip({
                tip: '#persistent-cart-items',
                relative: true,
                position: 'bottom center'
            });   
        }
    };
    
}(jQuery));