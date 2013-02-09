ClearTheme - Magento Community Edition Starting Theme
==============================

* Just local.xml updates.
* Scopes definitions in local.xml
* Loads css files per module.
* Loads javascript files per module.
* jQuery loaded by default.
* Use lesscss php compiler (lessphp leafo.net/lessphp) by soczed (http://www.magentocommerce.com/magento-connect/lesscss-5369.html).
* Eric Meyer reset
* Based on Magento blank theme.
* And more...

------------------------------

ChangeLog
==============================

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
