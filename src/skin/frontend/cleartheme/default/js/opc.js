/**
 *
 * opc.js
 *
 */

(function ($) {
    $(function () {
        
        // Sorry for this. But I prefer it than editing phtml just for that. You may do it.
        fixRememberMeTooltip();
        fixPaymentTooltip();
        
    });
    
    var fixRememberMeTooltip = function () {
        $('#remember-me-tooltip').insertAfter('#checkoutSteps');
    };
    var fixPaymentTooltip = function () {
        var $payment_tooltip = $('#payment-tooltip');
        $payment_tooltip.html($payment_tooltip.find('div.tool-tip-content').html());
        $payment_tooltip.addClass('tooltip payment-tooltip').removeClass('tool-tip')
        $payment_tooltip.insertAfter('#checkoutSteps');
    };
    
    // Overrides opcheckout.js method to use improved tooltips.
    window.Payment.prototype.initWhatIsCvvListeners = function () {
        $('a.cvv-what-is-this').on('click', function (e) {
            e.preventDefault(); // This is because the <a> has href="#". Breaks usability.
        }).tooltip({
            tip: '#payment-tooltip',
            position: 'top right'
        });
    };
    
}(jQuery));