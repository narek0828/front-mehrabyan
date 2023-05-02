jQuery(document).ready(function(){
    /*Hamburger*/
    jQuery(".hamburger").click(function(){
        jQuery(".bottom_header").addClass("opened");
        jQuery("body").addClass("open_menu");
    });
    jQuery(".close-hamburger, .white_overlay").click(function(){
        jQuery(".bottom_header").removeClass("opened");
        jQuery("body").removeClass("open_menu");
    });

    /*Search*/
    jQuery(".search-button").click(function(){
        jQuery(".search").toggleClass("opened");
    });

    /*Sub menus*/
    openSubMenu();
});

let lastScroll = 0;
jQuery(document).scroll(function() {
    let currentScroll  = jQuery(document).scrollTop();
    if (currentScroll - lastScroll > 0 && currentScroll > 200) {
        jQuery(".header").addClass("hide");
    } else {
        jQuery(".header").removeClass("hide");
    }
    lastScroll = currentScroll;
});

jQuery(window).resize(function() {
    /*Sub menus*/
    openSubMenu();
});

function openSubMenu() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        jQuery(".header li.has-child").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            if (jQuery(this).hasClass("opened")) {
                jQuery(this).find(" > .sub-menu").hide();
                jQuery(this).removeClass("opened");
            } else {
                jQuery(this).find(" > .sub-menu").show();
                jQuery(this).addClass("opened");
            }
        });
    }
}
