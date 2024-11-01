!
function e(t, n, r) {
        function s(o, u) {
                if (!n[o]) {
                        if (!t[o]) {
                                var a = "function" == typeof require && require;
                                if (!u && a) return a(o, !0);
                                if (i) return i(o, !0);
                                throw new Error("Cannot find module '" + o + "'")
                        }
                        var f = n[o] = {
                                exports: {}
                        };
                        t[o][0].call(f.exports, function (e) {
                                var n = t[o][1][e];
                                return s(n || e)
                        }, f, f.exports, e, t, n, r)
                }
                return n[o].exports
        }
        for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
        return s
}({
        1: [function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                        value: !0
                }),
                exports.
        default = function () {
}
        },
        {}],
        2: [function (require, module, exports) {
                "use strict";
                require("./jquery.counter.js");
                var obj, _isTouchDevice = require("cadmiumUI/src/utils/isTouchDevice");
                (obj = _isTouchDevice) && obj.__esModule;
                $(function () {
                        var $featuresSlider = $(".js-features-slider").slick({
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                arrows: !1,
                                dots: !1,
                                fade: !0,
                                autoplay: !0,
                                autoplaySpeed: 3e3,
                                pauseOnHover: !0,
                                lazyLoad: "ondemand"
                        });
                        $(".js-feedback-slider").slick({
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                arrows: !1,
                                dots: !0,
                                variableWidth: !0,
                                lazyLoad: "ondemand",
                                responsive: [{
                                        breakpoint: 767,
                                        settings: {
                                                adaptiveHeight: !0
                                        }
                                }]
                        }),
                        $(document).on("click", ".js-features-slide", function (e) {
                                $featuresSlider.slick("slickNext")
                        }),
                        $(document).on("input", ".js-subscribe", function (e) {
                                var $this = $(this);
                                $this.find("input").val().length ? $this.addClass("mp-subscribe__input--not-empty") : $this.removeClass("mp-subscribe__input--not-empty")
                        }),
                        $(document).on("click", ".js-tab", function (e) {
                                e.preventDefault();
                                var $this = $(this),
                                        index = $this.closest("li").index(),
                                        $content = $(".js-tab-content");
                                $this.parent().addClass("lg-tabs__controls-item--active").siblings().removeClass("lg-tabs__controls-item--active"),
                                $content.eq(index).slideDown().siblings().slideUp()
                        }),
                        $.getJSON(url + region).done(function (data) {
                                var sitesAmount = data || 2010;
                                $(".js-sites-counter").counter({
                                        parts: [{
                                                start: sitesAmount - 200,
                                                interval: 40,
                                                step: 2
                                        },
                                        {
                                                start: sitesAmount - 25,
                                                interval: 75,
                                                step: 2
                                        },
                                        {
                                                start: sitesAmount - 5,
                                                interval: 100,
                                                step: 1
                                        },
                                        {
                                                start: sitesAmount - 1,
                                                interval: 1500,
                                                step: 1
                                        }],
                                        end: sitesAmount
                                })
                        }),
                        $(document).on("input", ".js-search", function (e) {
                                var $this = $(this),
                                        $input = $this.find("input"),
                                        $btn = $this.find("button");
                                $input.val().length ? $btn.prop("disabled", !1) : $btn.prop("disabled", !0)
                        })
                })
        },
        {
                "./jquery.counter.js": 3,
                "cadmiumUI/src/utils/isTouchDevice": 1
        }],
        3: [function (require, module, exports) {
                "use strict";
                var $;
                ($ = jQuery).async = {
                        each: function (values, callback, index) {
                                callback(index = index || 0, values[index], function () {
                                        ++index < values.length && $.async.each(values, callback, index)
                                })
                        }
                },
                $.fn.counter = function (options) {
                        return this.each(function () {
                                var $this = $(this),
                                        val = options.parts[0].start;
                                $.async.each(options.parts, function (index, part, next) {
                                        var end = index == options.parts.length - 1 ? options.end : options.parts[index + 1].start,
                                                id = setInterval(function () {
                                                        var str = (val += part.step).toString();
                                                        str.length < 6 && (str = "0" + str),
                                                        $this.html(str.replace(/(\d)/g, "<ins>$1</ins>")),
                                                        val >= end && (clearInterval(id), next())
                                                }, part.interval)
                                })
                        })
                }
        },
        {}]
}, {}, [2]);
$(".js-hslider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: !1,
        dots: !0,
        fade: !0,
        autoplay: !0,
        autoplaySpeed: 5e3
});
