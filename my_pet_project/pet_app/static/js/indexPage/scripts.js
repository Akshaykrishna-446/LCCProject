(function() {
    var __sections__ = {};
    (function() {
        for (var i = 0, s = document.getElementById("sections-script").getAttribute("data-sections").split(","); i < s.length; i++) __sections__[s[i]] = !0
    })(),
    function() {
        if (!(!__sections__.slideshow && !window.DesignMode)) try {
            var heroSliderInit2 = function() {
                    $(".hero-slider").slick({
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        infinite: !0,
                        arrows: !0,
                        prevArrow: "<button type='button' class='prevArrow'></button>",
                        nextArrow: "<button type='button' class='nextArrow'></button>",
                        dots: !1,
                        responsive: [{
                            breakpoint: 576,
                            settings: {
                                arrows: !1
                            }
                        }]
                    }), $(".hero-slider").slickAnimation()
                },
                destroySlider2 = function() {
                    $(".hero-slider").hasClass("slick-initialized") && $(".hero-slider").slick("destroy")
                },
                onBlockChange2 = function(evt) {
                    var slide = 0,
                        block = $(".slide--" + evt.detail.blockId);
                    slide = parseInt(block.attr("data-slick-index")), console.log(slide), $(".hero-slider").slick("slickGoTo", slide).slick("slickPause")
                },
                onSectionChange2 = function(evt) {
                    destroySlider2(), heroSliderInit2()
                },
                heroSliderInit = heroSliderInit2,
                destroySlider = destroySlider2,
                onBlockChange = onBlockChange2,
                onSectionChange = onSectionChange2;
            $(document).ready(function() {
                heroSliderInit2()
            }), $(document).on("shopify:block:select", onBlockChange2), $(document).on("shopify:section:select", onSectionChange2), $(document).on("shopify:section:reorder", onSectionChange2)
        } catch (e) {
            console.error(e)
        }
    }()
})();
//# sourceMappingURL=/cdn/shop/t/3/compiled_assets/scripts.js.map?3473=