/**
 *
 * frontend.js / Some usefull tools
 *
 */

(function ($) {
    
    window.Frontend = {
        
        // Defined in head.phtml
        skin_url: null,
        logged_in: null, 
        
        getSkinUrl: function () {
            return this.skin_url;
        },
        
        isLoggedIn: function () {
            return this.logged_in;
        },
                
        getMessage: function (context) {
            if (typeof context === 'undefined') {
                context = document;
            }
            
            var $message = $('ul.messages', context);
            
            if ($message.length > 0) {
                var error = $message.find('li.error-msg li').text(),
                    success = $message.find('li.success-msg li').text(),
                    notice = $message.find('li.success-msg li').text(),
                    note = $message.find('li.success-msg li').text()
                ;
                return {
                    error: (error = '') ? false : error,
                    success: (error = '') ? false : success,
                    notice: (error = '') ? false : notice,
                    note: (error = '') ? false : note
                };
            } else {
                return {
                    error: false,
                    success: false,
                    notice: false,
                    note: false
                };
            }
        }
        
    };

}(jQuery));
