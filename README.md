ClearTheme - Magento Community Edition Starting Theme
==============================

* Just local.xml updates.
* Scope definitions in local.xml.
* Use of normalize.css.
* Better css/js organization.
* Loads css files per module.
* Loads javascript files per module.
* Use of LessCSS.
* Doctype for html5.
* Cleaned, optimized and improved css code.
* jQuery loaded by default.
* Based on Blank theme.

Other features:

* Login popout.
* Top cart.
* Use of tooltips.
* Newsletter subscribe on footer.
* Product image on Review Step (last step) of One Page Checkout.
* Useful My Account css improvements.
* CloudZoom by default.
* Facebook Open Graph meta tags for products.
* window.Frontend object with some useful methods.

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
------------------------------


**Contact:** mateuemiliano at gmail dot com