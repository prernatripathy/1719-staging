
$(document).ready(function () {

    //light switch effect - CASE STUDY
    if($('body.casestudy').length > 0){

            var $headerImage = $(".cs_anim_header");
            var $logo = $(".cs_anim_logo");
            var $heading = $(".cs_anim_heading");
            var $restSection = $(".rest_of_the_section");
            var animationClass = "scroll-animation";
            var logoAnimationClass = "scroll-animation-logo";
            var restAnimationClass = "scroll-animation-rest";
            var headingAnimationClass = "scroll-animation-heading";

            
            var scrollPosition = 0;
        $(window).scroll(function(){

            // $heading.removeAttr("style");

                var currentScroll = $(this).scrollTop();
                if (currentScroll > scrollPosition) {
                    // Scrolling down
                    if (!$headerImage.hasClass(animationClass)) {
                        $headerImage.addClass(animationClass);

                    }

                    if (!$logo.hasClass(logoAnimationClass)) {
                        $logo.addClass(logoAnimationClass);
                    }

                    if (!$heading.hasClass(headingAnimationClass)) {
                        $heading.addClass(headingAnimationClass);
                    }

                    if (!$restSection.hasClass(restAnimationClass)) {
                        $restSection.addClass(restAnimationClass);
                    }

                    
                } else {
                    // Scrolling back to the top
                    if ($headerImage.hasClass(animationClass)) {
                        $headerImage.removeClass(animationClass);
                    }

                    if ($logo.hasClass(logoAnimationClass)) {
                        $logo.removeClass(logoAnimationClass);
                    }

                    if ($heading.hasClass(headingAnimationClass)) {
                        $heading.removeClass(headingAnimationClass);
                    }

                    if ($restSection.hasClass(restAnimationClass)) {
                        $restSection.removeClass(restAnimationClass);
                    }
    
                }


            
                scrollPosition = currentScroll;
            });
            




    }
})

    