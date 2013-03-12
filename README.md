ClearTheme - Magento Community Edition Starting Theme
==============================

* Just local.xml updates.
* Scopes definitions in local.xml.
* Loads css files per module.
* Loads javascript files per module.
* jQuery loaded by default.
* Use lesscss php compiler (lessphp leafo.net/lessphp) by soczed (http://www.magentocommerce.com/magento-connect/lesscss-5369.html).
* Eric Meyer reset.
* Css code formatted.
* Based on Magento blank theme.
* And more...

------------------------------

Demo: http://cleartheme.com.ar
==============================

------------------------------

Installation & Troubleshooting
==============================

To install ClearTheme you must have Magento 1.7+ working. 
* After that merge ClearTheme files in your Magento directory.
* Once you merged ClearTheme files, **make sure that all directories under /path/to/magento/skin/frontend/cleartheme/css/ have write permission** (that's because lesscss compiler will generate css files in same directory of .less file).
* Then go to **System -> Configuration -> Design (left tab)** and set **Current Package Name** to **cleartheme**.
* Finally go to **System -> Configuration -> Less Files (left tab)** and set **Enabled** to **Yes**.

**Note:** You can rename cleartheme with your own theme name (it's the idea), just rename:
* app/design/frontend/cleartheme --> app/design/frontend/your_theme_name
* skin/frontend/cleartheme --> skin/frontend/your_theme_name

*Then make sure to setup your_theme_name in Current Package Name under System -> Configuration -> Design (left tab).*

## Dependencies
ClearTheme needs a lesscss php compiler to work. I chose this one: (Soczed_Less) http://www.magentocommerce.com/magento-connect/lesscss-5369.html and it's allready included in the repo (may be it shouldn't but I don't care right now). If you want to use another lessphp implementation I think it should work anyway.
Please check Soczed_Less module options going to:
* System -> Less Files
* System -> Configuration -> Less Files (left tab)

Also Cleartheme_Customer module is included in the repo. This module just add a method that is necessary to remove customer links trought xml method. It is used in local.xml like this:

    <reference name="customer_account_navigation">
        <action method="removeLinkByName"><name>billing_agreements</name></action>
        <action method="removeLinkByName"><name>OAuth Customer Tokens</name></action>
        <action method="removeLinkByName"><name>recurring_profiles</name></action>
    </reference>


------------------------------

ChangeLog
==============================

## 12/03/2013

    Footer css improvements.
    Header css improvements.
    Nav css improvements.
    Minor fixes.


## 11/03/2013

    Invoice print page css improvements.
    local.xml minor fix.
    Added product image in My Account Review Details Page.
    account.less minor fix.

    Local.xml
            Loads by default: js/lib/frontend.js
            Loads by default: js/lib/jquery-tools/overlay.js
            Loads by default: js/lib/jquery-tools/toolbox.expose.js
            Loads template/customer/form/mini.login.phtml before body end

    Minor improvements in head.phtml.
    Overlay css definition in css/page.less.
    Login overlay in global.js.
    Minor fix in js/lib/cloud-zoom.js.


## 10/03/2013

    OPC css cleanup and general improvements.
    
    Local.xml: Added opc.js through phtml (before body end) to be able to override opcheckout.js
    One Page Checkout cleanup and generales css improvements.
    remember_me_tooltip.phtml usability fix (used in opc too).
    Unified tooltips experience also in OPC.
    Added product image and product sku to One Page Checkout Review Step.
    Checkout Success/Failure css definitions.
    Defined cart-empty section on Cart page.


## 05/03/2013

    CSS cleanup and improvements on Cart page.
    Minor css adjustments in page/form.less.
    Cleaned/moved lot of css from page/page.less.
    Created catalog/general.less to handle common catalog styles.
    Created checkout/general.less to handle common checkout styles.

    Local.xml
    - Added css/catalog/general.less in following handlers:
    --- <catalog_product_view>
    --- <review_product_list>
    --- <review_product_view>
    --- <catalog_product_compare_index>
    --- <catalog_category_default>
    --- <catalog_category_layered>
    --- <catalogsearch_result_index>
    --- <catalogsearch_advanced_result>
    --- <tag_product_list>
    --- <checkout_cart_index>
    --- <checkout_onepage_index>
    --- <customer_account>

    Added css/checkout/general.less in following handlers:
    --- <checkout_cart_index>
    --- <checkout_onepage_index>


## 02/03/2013
    Moved forms styles from page.less to separate form.less file.
    Removed "Remember Me Popup" styles from page.less (just used in persistent login) and replaced with a tooltip. Overriden: persistent/remember_me_tooltip.phtml.
    Minor css adjustments and cleanup in page.less.
    Minor css fix in login.less.
    Defined .heading1() in global.less.


## 01/03/2013

    CSS cleanup and improvements on Product View page.
    Overridden media.phtml to replaced Magento Zoom and More Views popup with CloudZoom.

    Changed to HTML5 doctype. Overridden: 
    - 1column.phtml, 
    - 2columns-left.phtml
    - 2columns-right.phtml
    - 1column.phtml
    - empty.phtml
    - popup.phtml

    Overridden head.phtml to do following changes:
    - Removed <!--[if lt IE 7]> stuff.
    - Added window.SKIN_URL javascript var (so it can be used by external js files)
    - Added <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" /> so telephone numbers are not parsed by Skype
    - Added Facebook Open Graph meta tags (og:title, og:type, og:url, og:image, og:site_name, og:description) on product page.
    - Added meta viewport
    - Added meta X-UA-Compatible

    CSS improvements on page/page.less.
    Added some variables in less/global.less and moved .transition() mixin to less/tool.less
    Created less/tool.less with some lesscss mixins.
    Local.xml, <tag_product_list>, added js and css assets.
    Minor CSS improvements on page/pager.less.
    Minor CSS improvements on catalog/product-list.less.
    Minor fix on customer/account.less.
    Updated jQuery to version 1.9.1.


## 28/02/2013
    CSS cleanup on following My Account pages:
     - Review Details
     - Customer tag view
     - My Wishlist

    Minor page.less adjustments.

    CSS cleanup on product list/grid.
    Improved Toolbar styles.

    CSS cleanup and definitions for all blocks (page/block.less).

    Local.xml:
    - Removed left.permanent.callout on col-left
    - Removed right.permanent.callout on col-right
    - Removed paypal.partner.right.logo on col-right
    - <catalog_product_view>, <review_product_list>: added css/page/block.less

    Modified some icons: i_asc_arrow.gif, i_desc_arrow.gif, pager_arrow_left.gif, pager_arrow_right.gif, i_toolbar-view-mode.png.


## 19/02/2013
    My Account minor css adjustments.    
    CSS cleanup and lesscss implementation on following My Account pages:
        - View Order Page (Order Info, Invoices, Shipments, Refound).
        - Address Book.
        - Newsletter Subscription.
    Minor page.less adjustments.


## 13/02/2013
    New Lesscss definitions.
    Lesscss implementation in page/page.less.
    CSS improvements in Account Dashboard, Address Book and My Tags (My Account).


## 09/02/2013

    CSS improvements in following pages:
    - Login
    - Register
    - Forgot Password
    - Search Terms
    - Contact
    - 404 Not found
    - Advanced Search
    - Site Map
    - RSS
    - Returns

    CSS improvments in page/page.less

    Added <cms_index_index> handler with home.less file loaded by default.
    Added <cms_index_noroute> handler with no-route.less file loaded by default.


## 08/02/2013

    Soczed_Less module - Lesscss php compiler (lessphp leafo.net/lessphp) - http://www.magentocommerce.com/magento-connect/lesscss-5369.html
    Changed all .css files to .less


## 23/01/2013

    <default>,<print>:
    - Added css/page/local.css
    - Loads js/lib/jquery.js by default.
    - Loads js/global.js by default.
    - Commented snippet to load external resources (google fonts for example).
    
    <catalog_product_view>:
    - Loads js/product-view.js by default.
    
    <review_product_list>:
    - Loads js/product-list.js by default.
    
    Added <review_product_view> handler with some defaults loading assets.
    Added <catalog_product_compare_index> handler with some defaults loading assets.
    
    <catalog_category_default>:
    - Loads js/product-list.js by default.
    
    <catalog_category_layered>:
    - Loads js/product-list.js by default.
    
    <catalogsearch_result_index>:
    - Loads js/product-list.js by default.
    
    <catalogsearch_advanced_result>:
    - Default 1 column layout
    - Loads js/product-list.js by default.
    
    <catalogsearch_advanced_index>:
    - Default 1 column layout.
    
    Added <catalogsearch_term_popular> handler with some defaults loading assets.
    
    <checkout_cart_index>:
    - Loads js/cart.js by default.
    
    <checkout_onepage_success>:
    - Default 1 column layout.
    
    Added <checkout_onepage_failure> handler with some defaults loading assets and 1 column layout.
    Added <customer_account_resetpassword> handler with some defaults loading assets.
    
    <contacts_index_index>
    - Default 1 column layout.
    
    <rss_index_index>
    - Default 1 column layout.

    Cleartheme_Customer Module
    - Adds the possibility to remove custom links through xml.
    - In fact This module was added for remove links like Billing Agreements and Recurring Profiles through local.xml

    Removed Billing Agreements, Recurring Profiles and My Applications links from My Account Navigation.


## 25/11/2012

    Initial cleartheme package import based on default/blank package.
    e47a7990e7
    
    Git ignore.
    9d9532c589
    
    skin/css filesystem and local.xml css files handling.
    b471e8419a
    
    Unused files.
    2d03b2a519
    
    Sample skin images. Can be deleted later.
    bd27ff1a34
    
    Project description.
    9a9f3214c8
    
    General styles.css code to particular css files. Adjustments on local.xml
    4ca53862f7
    
    Minor fixes.
    3a3b08a087
