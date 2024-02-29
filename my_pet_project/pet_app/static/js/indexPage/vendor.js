/*!
 * modernizr.min.js
 */
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-flexbox-placeholder-svg-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
 function initialize() {
    var t, e = $("#map_canvas").attr("data-latitude"),
        i = $("#map_canvas").attr("data-longitude"),
        n = $("#map_canvas").attr("data-marker"),
        o = new google.maps.LatLng(e, i),
        s = [{
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                saturation: -100
            }, {
                lightness: -8
            }, {
                gamma: 1.18
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                saturation: -100
            }, {
                gamma: 1
            }, {
                lightness: -24
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "administrative",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "transit",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "road",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "administrative",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "landscape",
            stylers: [{
                saturation: -100
            }]
        }, {
            featureType: "poi",
            stylers: [{
                saturation: -100
            }]
        }, {}],
        r = {
            center: o,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            backgroundColor: "#000",
            zoom: 15,
            panControl: !1,
            zoomControl: !0,
            mapTypeControl: !1,
            scaleControl: !1,
            streetViewControl: !1,
            overviewMapControl: !1,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE
            }
        };
    t = new google.maps.Map(document.getElementById("map_canvas"), r);
    var a = new google.maps.StyledMapType(s, {
        name: "Grayscale"
    });
    t.mapTypes.set("grey", a), t.setMapTypeId("grey");
    var l = n,
        c = new google.maps.MarkerImage(l, null, null, null, new google.maps.Size(37, 66));
    marker = new google.maps.Marker({
        position: o,
        map: t,
        icon: c,
        title: "Elite Shop"
    })
}! function(t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function o() {
        var t, e, i, o, s, r, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (t = [], e = b[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (o = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) r = t[s], a = r.split("."), 1 === a.length ? w[a[0]] = o : (!w[a[0]] || w[a[0]] instanceof Boolean || (w[a[0]] = new Boolean(w[a[0]])), w[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function s(t) {
        var e = C.className,
            i = w._config.classPrefix || "";
        if (T && (e = e.baseVal), w._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        w._config.enableClasses && (e += " " + i + t.join(" " + i), T ? C.className.baseVal = e : C.className = e)
    }

    function r() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : T ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function l(t) {
        return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function c() {
        var t = e.body;
        return t || (t = r(T ? "svg" : "body"), t.fake = !0), t
    }

    function d(t, i, n, o) {
        var s, a, l, d, u = "modernizr",
            h = r("div"),
            p = c();
        if (parseInt(n, 10))
            for (; n--;) l = r("div"), l.id = o ? o[n] : u + (n + 1), h.appendChild(l);
        return s = r("style"), s.type = "text/css", s.id = "s" + u, (p.fake ? p : h).appendChild(s), p.appendChild(h), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)), h.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), a = i(h, t), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = d, C.offsetHeight) : h.parentNode.removeChild(h), !!a
    }

    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function h(t, e, i) {
        var o;
        for (var s in t)
            if (t[s] in e) return i === !1 ? t[s] : (o = e[t[s]], n(o, "function") ? u(o, i || e) : o);
        return !1
    }

    function p(t) {
        return t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; o--;)
                if (t.CSS.supports(p(e[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var s = []; o--;) s.push("(" + p(e[o]) + ":" + n + ")");
            return s = s.join(" or "), d("@supports (" + s + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return i
    }

    function m(t, e, o, s) {
        function c() {
            u && (delete N.style, delete N.modElem)
        }
        if (s = !n(s, "undefined") && s, !n(o, "undefined")) {
            var d = f(t, o);
            if (!n(d, "undefined")) return d
        }
        for (var u, h, p, m, v, g = ["modernizr", "tspan", "samp"]; !N.style && g.length;) u = !0, N.modElem = r(g.shift()), N.style = N.modElem.style;
        for (p = t.length, h = 0; p > h; h++)
            if (m = t[h], v = N.style[m], a(m, "-") && (m = l(m)), N.style[m] !== i) {
                if (s || n(o, "undefined")) return c(), "pfx" != e || m;
                try {
                    N.style[m] = o
                } catch (t) {}
                if (N.style[m] != v) return c(), "pfx" != e || m
            }
        return c(), !1
    }

    function v(t, e, i, o, s) {
        var r = t.charAt(0).toUpperCase() + t.slice(1),
            a = (t + " " + I.join(r + " ") + r).split(" ");
        return n(e, "string") || n(e, "undefined") ? m(a, e, o, s) : (a = (t + " " + x.join(r + " ") + r).split(" "), h(a, e, i))
    }

    function g(t, e, n) {
        return v(t, i, i, e, n)
    }
    var y = [],
        b = [],
        _ = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                var i = this;
                setTimeout(function() {
                    e(i[t])
                }, 0)
            },
            addTest: function(t, e, i) {
                b.push({
                    name: t,
                    fn: e,
                    options: i
                })
            },
            addAsyncTest: function(t) {
                b.push({
                    name: null,
                    fn: t
                })
            }
        },
        w = function() {};
    w.prototype = _, w = new w, w.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var k = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    _._prefixes = k;
    var C = e.documentElement,
        T = "svg" === C.nodeName.toLowerCase(),
        E = "Moz O ms Webkit",
        x = _._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    _._domPrefixes = x;
    var S = "CSS" in t && "supports" in t.CSS,
        A = "supportsCSS" in t;
    w.addTest("supports", S || A), w.addTest("placeholder", "placeholder" in r("input") && "placeholder" in r("textarea"));
    var I = _._config.usePrefixes ? E.split(" ") : [];
    _._cssomPrefixes = I;
    var D = _.testStyles = d;
    w.addTest("touchevents", function() {
        var i;
        if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
        else {
            var n = ["@media (", k.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            D(n, function(t) {
                i = 9 === t.offsetTop
            })
        }
        return i
    });
    var O = {
        elem: r("modernizr")
    };
    w._q.push(function() {
        delete O.elem
    });
    var N = {
        style: O.elem.style
    };
    w._q.unshift(function() {
        delete N.style
    }), _.testProp = function(t, e, n) {
        return m([t], i, e, n)
    }, _.testAllProps = v, _.testAllProps = g, w.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0)
    }), w.addTest("csstransforms3d", function() {
        var t = !!g("perspective", "1px", !0),
            e = w._config.usePrefixes;
        if (t && (!e || "webkitPerspective" in C.style)) {
            var i, n = "#modernizr{width:0;height:0}";
            w.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")), i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", D(n + i, function(e) {
                t = 7 === e.offsetWidth && 18 === e.offsetHeight
            })
        }
        return t
    }), w.addTest("flexbox", g("flexBasis", "1px", !0)), o(), s(y), delete _.addTest, delete _.addAsyncTest;
    for (var P = 0; P < w._q.length; P++) w._q[P]();
    t.Modernizr = w
}(window, document),
/*!
 * bootstrap.min.js
 */
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
    "use strict";

    function t(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function e(t, e) {
        if (1 !== t.nodeType) return [];
        var i = getComputedStyle(t, null);
        return e ? i[e] : i
    }

    function i(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function n(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var o = e(t),
            s = o.overflow,
            r = o.overflowX,
            a = o.overflowY;
        return /(auto|scroll|overlay)/.test(s + a + r) ? t : n(i(t))
    }

    function o(t) {
        return 11 === t ? st : 10 === t ? rt : st || rt
    }

    function s(t) {
        if (!t) return document.documentElement;
        for (var i = o(10) ? document.body : null, n = t.offsetParent; n === i && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === e(n, "position") ? s(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function r(t) {
        var e = t.nodeName;
        return "BODY" !== e && ("HTML" === e || s(t.firstElementChild) === t)
    }

    function a(t) {
        return null === t.parentNode ? t : a(t.parentNode)
    }

    function l(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? t : e,
            o = i ? e : t,
            c = document.createRange();
        c.setStart(n, 0), c.setEnd(o, 0);
        var d = c.commonAncestorContainer;
        if (t !== d && e !== d || n.contains(o)) return r(d) ? d : s(d);
        var u = a(t);
        return u.host ? l(u.host, e) : l(t, a(e).host)
    }

    function c(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            i = "top" === e ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var o = t.ownerDocument.documentElement,
                s = t.ownerDocument.scrollingElement || o;
            return s[i]
        }
        return t[i]
    }

    function d(t, e) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = c(e, "top"),
            o = c(e, "left"),
            s = i ? -1 : 1;
        return t.top += n * s, t.bottom += n * s, t.left += o * s, t.right += o * s, t
    }

    function u(t, e) {
        var i = "x" === e ? "Left" : "Top",
            n = "Left" == i ? "Right" : "Bottom";
        return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
    }

    function h(t, e, i, n) {
        return J(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], o(10) ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function p() {
        var t = document.body,
            e = document.documentElement,
            i = o(10) && getComputedStyle(e);
        return {
            height: h("Height", t, e, i),
            width: h("Width", t, e, i)
        }
    }

    function f(t) {
        return dt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function m(t) {
        var i = {};
        try {
            if (o(10)) {
                i = t.getBoundingClientRect();
                var n = c(t, "top"),
                    s = c(t, "left");
                i.top += n, i.left += s, i.bottom += n, i.right += s
            } else i = t.getBoundingClientRect()
        } catch (t) {}
        var r = {
                left: i.left,
                top: i.top,
                width: i.right - i.left,
                height: i.bottom - i.top
            },
            a = "HTML" === t.nodeName ? p() : {},
            l = a.width || t.clientWidth || r.right - r.left,
            d = a.height || t.clientHeight || r.bottom - r.top,
            h = t.offsetWidth - l,
            m = t.offsetHeight - d;
        if (h || m) {
            var v = e(t);
            h -= u(v, "x"), m -= u(v, "y"), r.width -= h, r.height -= m
        }
        return f(r)
    }

    function v(t, i) {
        var s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = o(10),
            a = "HTML" === i.nodeName,
            l = m(t),
            c = m(i),
            u = n(t),
            h = e(i),
            p = parseFloat(h.borderTopWidth, 10),
            v = parseFloat(h.borderLeftWidth, 10);
        s && "HTML" === i.nodeName && (c.top = J(c.top, 0), c.left = J(c.left, 0));
        var g = f({
            top: l.top - c.top - p,
            left: l.left - c.left - v,
            width: l.width,
            height: l.height
        });
        if (g.marginTop = 0, g.marginLeft = 0, !r && a) {
            var y = parseFloat(h.marginTop, 10),
                b = parseFloat(h.marginLeft, 10);
            g.top -= p - y, g.bottom -= p - y, g.left -= v - b, g.right -= v - b, g.marginTop = y, g.marginLeft = b
        }
        return (r && !s ? i.contains(u) : i === u && "BODY" !== u.nodeName) && (g = d(g, i)), g
    }

    function g(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            i = t.ownerDocument.documentElement,
            n = v(t, i),
            o = J(i.clientWidth, window.innerWidth || 0),
            s = J(i.clientHeight, window.innerHeight || 0),
            r = e ? 0 : c(i),
            a = e ? 0 : c(i, "left"),
            l = {
                top: r - n.top + n.marginTop,
                left: a - n.left + n.marginLeft,
                width: o,
                height: s
            };
        return f(l)
    }

    function y(t) {
        var n = t.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === e(t, "position") || y(i(t)))
    }

    function b(t) {
        if (!t || !t.parentElement || o()) return document.documentElement;
        for (var i = t.parentElement; i && "none" === e(i, "transform");) i = i.parentElement;
        return i || document.documentElement
    }

    function _(t, e, o, s) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            a = {
                top: 0,
                left: 0
            },
            c = r ? b(t) : l(t, e);
        if ("viewport" === s) a = g(c, r);
        else {
            var d;
            "scrollParent" === s ? (d = n(i(e)), "BODY" === d.nodeName && (d = t.ownerDocument.documentElement)) : d = "window" === s ? t.ownerDocument.documentElement : s;
            var u = v(d, c, r);
            if ("HTML" !== d.nodeName || y(c)) a = u;
            else {
                var h = p(),
                    f = h.height,
                    m = h.width;
                a.top += u.top - u.marginTop, a.bottom = f + u.top, a.left += u.left - u.marginLeft, a.right = m + u.left
            }
        }
        return a.left += o, a.top += o, a.right -= o, a.bottom -= o, a
    }

    function w(t) {
        var e = t.width,
            i = t.height;
        return e * i
    }

    function k(t, e, i, n, o) {
        var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var r = _(i, n, s, o),
            a = {
                top: {
                    width: r.width,
                    height: e.top - r.top
                },
                right: {
                    width: r.right - e.right,
                    height: r.height
                },
                bottom: {
                    width: r.width,
                    height: r.bottom - e.bottom
                },
                left: {
                    width: e.left - r.left,
                    height: r.height
                }
            },
            l = Object.keys(a).map(function(t) {
                return dt({
                    key: t
                }, a[t], {
                    area: w(a[t])
                })
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            c = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            d = 0 < c.length ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return d + (u ? "-" + u : "")
    }

    function C(t, e, i) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            o = n ? b(e) : l(e, i);
        return v(i, o, n)
    }

    function T(t) {
        var e = getComputedStyle(t),
            i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            n = parseFloat(e.marginLeft) + parseFloat(e.marginRight),
            o = {
                width: t.offsetWidth + n,
                height: t.offsetHeight + i
            };
        return o
    }

    function E(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function x(t, e, i) {
        i = i.split("-")[0];
        var n = T(t),
            o = {
                width: n.width,
                height: n.height
            },
            s = -1 !== ["right", "left"].indexOf(i),
            r = s ? "top" : "left",
            a = s ? "left" : "top",
            l = s ? "height" : "width",
            c = s ? "width" : "height";
        return o[r] = e[r] + e[l] / 2 - n[l] / 2, o[a] = i === a ? e[a] - n[c] : e[E(a)], o
    }

    function S(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function A(t, e, i) {
        if (Array.prototype.findIndex) return t.findIndex(function(t) {
            return t[e] === i
        });
        var n = S(t, function(t) {
            return t[e] === i
        });
        return t.indexOf(n)
    }

    function I(e, i, n) {
        var o = void 0 === n ? e : e.slice(0, A(e, "name", n));
        return o.forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && t(n) && (i.offsets.popper = f(i.offsets.popper), i.offsets.reference = f(i.offsets.reference), i = n(i, e))
        }), i
    }

    function D() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = k(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = x(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = I(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function O(t, e) {
        return t.some(function(t) {
            var i = t.name,
                n = t.enabled;
            return n && i === e
        })
    }

    function N(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
            var o = e[n],
                s = o ? "" + o + i : t;
            if ("undefined" != typeof document.body.style[s]) return s
        }
        return null
    }

    function P() {
        return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function j(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function L(t, e, i, o) {
        var s = "BODY" === t.nodeName,
            r = s ? t.ownerDocument.defaultView : t;
        r.addEventListener(e, i, {
            passive: !0
        }), s || L(n(r.parentNode), e, i, o), o.push(r)
    }

    function M(t, e, i, o) {
        i.updateBound = o, j(t).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var s = n(t);
        return L(s, "scroll", i.updateBound, i.scrollParents), i.scrollElement = s, i.eventsEnabled = !0, i
    }

    function $() {
        this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function H(t, e) {
        return j(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e
    }

    function z() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = H(this.reference, this.state))
    }

    function U(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function R(t, e) {
        Object.keys(e).forEach(function(i) {
            var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && U(e[i]) && (n = "px"), t.style[i] = e[i] + n
        })
    }

    function B(t, e) {
        Object.keys(e).forEach(function(i) {
            var n = e[i];
            !1 === n ? t.removeAttribute(i) : t.setAttribute(i, e[i])
        })
    }

    function F(t, e, i) {
        var n = S(t, function(t) {
                var i = t.name;
                return i === e
            }),
            o = !!n && t.some(function(t) {
                return t.name === i && t.enabled && t.order < n.order
            });
        if (!o) {
            var s = "`" + e + "`";
            console.warn("`" + i + "` modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return o
    }

    function W(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t
    }

    function V(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            i = ht.indexOf(t),
            n = ht.slice(i + 1).concat(ht.slice(0, i));
        return e ? n.reverse() : n
    }

    function q(t, e, i, n) {
        var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            s = +o[1],
            r = o[2];
        if (!s) return t;
        if (0 === r.indexOf("%")) {
            var a;
            switch (r) {
                case "%p":
                    a = i;
                    break;
                case "%":
                case "%r":
                default:
                    a = n
            }
            var l = f(a);
            return l[e] / 100 * s
        }
        if ("vh" === r || "vw" === r) {
            var c;
            return c = "vh" === r ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * s
        }
        return s
    }

    function Q(t, e, i, n) {
        var o = [0, 0],
            s = -1 !== ["right", "left"].indexOf(n),
            r = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            }),
            a = r.indexOf(S(r, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
        r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === a ? [r] : [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))];
        return c = c.map(function(t, n) {
            var o = (1 === n ? !s : s) ? "height" : "width",
                r = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, r = !0, t) : r ? (t[t.length - 1] += e, r = !1, t) : t.concat(e)
            }, []).map(function(t) {
                return q(t, o, e, i)
            })
        }), c.forEach(function(t, e) {
            t.forEach(function(i, n) {
                U(i) && (o[e] += i * ("-" === t[n - 1] ? -1 : 1))
            })
        }), o
    }

    function K(t, e) {
        var i, n = e.offset,
            o = t.placement,
            s = t.offsets,
            r = s.popper,
            a = s.reference,
            l = o.split("-")[0];
        return i = U(+n) ? [+n, 0] : Q(n, r, a, l), "left" === l ? (r.top += i[0], r.left -= i[1]) : "right" === l ? (r.top += i[0], r.left += i[1]) : "top" === l ? (r.left += i[0], r.top -= i[1]) : "bottom" === l && (r.left += i[0], r.top += i[1]), t.popper = r, t
    }
    for (var Y = Math.min, G = Math.round, X = Math.floor, J = Math.max, Z = "undefined" != typeof window && "undefined" != typeof document, tt = ["Edge", "Trident", "Firefox"], et = 0, it = 0; it < tt.length; it += 1)
        if (Z && 0 <= navigator.userAgent.indexOf(tt[it])) {
            et = 1;
            break
        }
    var nt = Z && window.Promise,
        ot = nt ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0, window.Promise.resolve().then(function() {
                    e = !1, t()
                }))
            }
        } : function(t) {
            var e = !1;
            return function() {
                e || (e = !0, setTimeout(function() {
                    e = !1, t()
                }, et))
            }
        },
        st = Z && !(!window.MSInputMethodContext || !document.documentMode),
        rt = Z && /MSIE 10/.test(navigator.userAgent),
        at = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        lt = function() {
            function t(t, e) {
                for (var i, n = 0; n < e.length; n++) i = e[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        ct = function(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        },
        dt = Object.assign || function(t) {
            for (var e, i = 1; i < arguments.length; i++)
                for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        },
        ut = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ht = ut.slice(3),
        pt = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        ft = function() {
            function e(i, n) {
                var o = this,
                    s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                at(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(o.update)
                }, this.update = ot(this.update.bind(this)), this.options = dt({}, e.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = i && i.jquery ? i[0] : i, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(dt({}, e.Defaults.modifiers, s.modifiers)).forEach(function(t) {
                    o.options.modifiers[t] = dt({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return dt({
                        name: t
                    }, o.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && t(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return lt(e, [{
                key: "update",
                value: function() {
                    return D.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return P.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return $.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return z.call(this)
                }
            }]), e
        }();
    return ft.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ft.placements = ut, ft.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        n = e.split("-")[1];
                    if (n) {
                        var o = t.offsets,
                            s = o.reference,
                            r = o.popper,
                            a = -1 !== ["bottom", "top"].indexOf(i),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            d = {
                                start: ct({}, l, s[l]),
                                end: ct({}, l, s[l] + s[c] - r[c])
                            };
                        t.offsets.popper = dt({}, r, d[n])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: K,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.boundariesElement || s(t.instance.popper);
                    t.instance.reference === i && (i = s(i));
                    var n = N("transform"),
                        o = t.instance.popper.style,
                        r = o.top,
                        a = o.left,
                        l = o[n];
                    o.top = "", o.left = "", o[n] = "";
                    var c = _(t.instance.popper, t.instance.reference, e.padding, i, t.positionFixed);
                    o.top = r, o.left = a, o[n] = l, e.boundaries = c;
                    var d = e.priority,
                        u = t.offsets.popper,
                        h = {
                            primary: function(t) {
                                var i = u[t];
                                return u[t] < c[t] && !e.escapeWithReference && (i = J(u[t], c[t])), ct({}, t, i)
                            },
                            secondary: function(t) {
                                var i = "right" === t ? "left" : "top",
                                    n = u[i];
                                return u[t] > c[t] && !e.escapeWithReference && (n = Y(u[i], c[t] - ("right" === t ? u.width : u.height))), ct({}, i, n)
                            }
                        };
                    return d.forEach(function(t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        u = dt({}, u, h[e](t))
                    }), t.offsets.popper = u, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets,
                        i = e.popper,
                        n = e.reference,
                        o = t.placement.split("-")[0],
                        s = X,
                        r = -1 !== ["top", "bottom"].indexOf(o),
                        a = r ? "right" : "bottom",
                        l = r ? "left" : "top",
                        c = r ? "width" : "height";
                    return i[a] < s(n[l]) && (t.offsets.popper[l] = s(n[l]) - i[c]), i[l] > s(n[a]) && (t.offsets.popper[l] = s(n[a])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, i) {
                    var n;
                    if (!F(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var o = i.element;
                    if ("string" == typeof o) {
                        if (o = t.instance.popper.querySelector(o), !o) return t
                    } else if (!t.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var s = t.placement.split("-")[0],
                        r = t.offsets,
                        a = r.popper,
                        l = r.reference,
                        c = -1 !== ["left", "right"].indexOf(s),
                        d = c ? "height" : "width",
                        u = c ? "Top" : "Left",
                        h = u.toLowerCase(),
                        p = c ? "left" : "top",
                        m = c ? "bottom" : "right",
                        v = T(o)[d];
                    l[m] - v < a[h] && (t.offsets.popper[h] -= a[h] - (l[m] - v)), l[h] + v > a[m] && (t.offsets.popper[h] += l[h] + v - a[m]), t.offsets.popper = f(t.offsets.popper);
                    var g = l[h] + l[d] / 2 - v / 2,
                        y = e(t.instance.popper),
                        b = parseFloat(y["margin" + u], 10),
                        _ = parseFloat(y["border" + u + "Width"], 10),
                        w = g - t.offsets.popper[h] - b - _;
                    return w = J(Y(a[d] - v, w), 0), t.arrowElement = o, t.offsets.arrow = (n = {}, ct(n, h, G(w)), ct(n, p, ""), n), t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (O(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var i = _(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                        n = t.placement.split("-")[0],
                        o = E(n),
                        s = t.placement.split("-")[1] || "",
                        r = [];
                    switch (e.behavior) {
                        case pt.FLIP:
                            r = [n, o];
                            break;
                        case pt.CLOCKWISE:
                            r = V(n);
                            break;
                        case pt.COUNTERCLOCKWISE:
                            r = V(n, !0);
                            break;
                        default:
                            r = e.behavior
                    }
                    return r.forEach(function(a, l) {
                        if (n !== a || r.length === l + 1) return t;
                        n = t.placement.split("-")[0], o = E(n);
                        var c = t.offsets.popper,
                            d = t.offsets.reference,
                            u = X,
                            h = "left" === n && u(c.right) > u(d.left) || "right" === n && u(c.left) < u(d.right) || "top" === n && u(c.bottom) > u(d.top) || "bottom" === n && u(c.top) < u(d.bottom),
                            p = u(c.left) < u(i.left),
                            f = u(c.right) > u(i.right),
                            m = u(c.top) < u(i.top),
                            v = u(c.bottom) > u(i.bottom),
                            g = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && v,
                            y = -1 !== ["top", "bottom"].indexOf(n),
                            b = !!e.flipVariations && (y && "start" === s && p || y && "end" === s && f || !y && "start" === s && m || !y && "end" === s && v);
                        (h || g || b) && (t.flipped = !0, (h || g) && (n = r[l + 1]), b && (s = W(s)), t.placement = n + (s ? "-" + s : ""), t.offsets.popper = dt({}, t.offsets.popper, x(t.instance.popper, t.offsets.reference, t.placement)), t = I(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        n = t.offsets,
                        o = n.popper,
                        s = n.reference,
                        r = -1 !== ["left", "right"].indexOf(i),
                        a = -1 === ["top", "left"].indexOf(i);
                    return o[r ? "left" : "top"] = s[i] - (a ? o[r ? "width" : "height"] : 0), t.placement = E(e), t.offsets.popper = f(o), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!F(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        i = S(t.instance.modifiers, function(t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                    if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.x,
                        n = e.y,
                        o = t.offsets.popper,
                        r = S(t.instance.modifiers, function(t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === r ? e.gpuAcceleration : r,
                        d = s(t.instance.popper),
                        u = m(d),
                        h = {
                            position: o.position
                        },
                        p = {
                            left: X(o.left),
                            top: G(o.top),
                            bottom: G(o.bottom),
                            right: X(o.right)
                        },
                        f = "bottom" === i ? "top" : "bottom",
                        v = "right" === n ? "left" : "right",
                        g = N("transform");
                    if (l = "bottom" == f ? -u.height + p.bottom : p.top, a = "right" == v ? -u.width + p.right : p.left, c && g) h[g] = "translate3d(" + a + "px, " + l + "px, 0)", h[f] = 0, h[v] = 0, h.willChange = "transform";
                    else {
                        var y = "bottom" == f ? -1 : 1,
                            b = "right" == v ? -1 : 1;
                        h[f] = l * y, h[v] = a * b, h.willChange = f + ", " + v
                    }
                    var _ = {
                        "x-placement": t.placement
                    };
                    return t.attributes = dt({}, _, t.attributes), t.styles = dt({}, h, t.styles), t.arrowStyles = dt({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    return R(t.instance.popper, t.styles), B(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && R(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function(t, e, i, n, o) {
                    var s = C(o, e, t, i.positionFixed),
                        r = k(i.placement, s, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return e.setAttribute("x-placement", r), R(e, {
                        position: i.positionFixed ? "fixed" : "absolute"
                    }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, ft
}),
/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, i) {
    "use strict";

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), n.forEach(function(e) {
                var n, o, s;
                n = t, s = i[o = e], o in n ? Object.defineProperty(n, o, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = s
            })
        }
        return t
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, i = i && i.hasOwnProperty("default") ? i.default : i;
    var r, a, l, c, d, u, h, p, f, m, v, g, y, b, _, w, k, C, T, E, x, S, A, I, D, O, N, P, j, L, M, $, H, z, U, R, B, F, W, V, q, Q, K, Y, G, X, J, Z, tt, et, it, nt, ot, st, rt, at, lt, ct, dt, ut, ht, pt, ft, mt, vt, gt, yt, bt, _t, wt, kt, Ct, Tt, Et, xt, St, At, It, Dt, Ot, Nt, Pt, jt, Lt, Mt, $t, Ht, zt, Ut, Rt, Bt, Ft, Wt, Vt, qt, Qt, Kt, Yt, Gt, Xt, Jt, Zt, te, ee, ie, ne, oe, se, re, ae, le, ce, de, ue, he, pe, fe, me, ve, ge, ye, be, _e, we, ke, Ce, Te, Ee, xe, Se, Ae, Ie, De, Oe, Ne, Pe, je, Le, Me, $e, He, ze, Ue, Re, Be, Fe, We, Ve, qe, Qe, Ke, Ye, Ge, Xe, Je, Ze, ti, ei, ii, ni, oi, si, ri, ai, li, ci, di, ui, hi, pi, fi, mi, vi, gi, yi, bi, _i, wi = function(t) {
            function e(e) {
                var i = this,
                    o = !1;
                return t(this).one(n.TRANSITION_END, function() {
                    o = !0
                }), setTimeout(function() {
                    o || n.triggerTransitionEnd(i)
                }, e), this
            }
            var i = "transitionend",
                n = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                        return t
                    },
                    getSelectorFromElement: function(e) {
                        var i = e.getAttribute("data-target");
                        i && "#" !== i || (i = e.getAttribute("href") || "");
                        try {
                            return 0 < t(document).find(i).length ? i : null
                        } catch (t) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(e) {
                        if (!e) return 0;
                        var i = t(e).css("transition-duration");
                        return parseFloat(i) ? (i = i.split(",")[0], 1e3 * parseFloat(i)) : 0
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(i)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(i)
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType
                    },
                    typeCheckConfig: function(t, e, i) {
                        for (var o in i)
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                var s = i[o],
                                    r = e[o],
                                    a = r && n.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(s).test(a)) throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + s + '".')
                            }
                        var l
                    }
                };
            return t.fn.emulateTransitionEnd = e, t.event.special[n.TRANSITION_END] = {
                bindType: i,
                delegateType: i,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, n
        }(e),
        ki = (a = "alert", c = "." + (l = "bs.alert"), d = (r = e).fn[a], u = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        }, h = "alert", p = "fade", f = "show", m = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() {
                r.removeData(this._element, l), this._element = null
            }, e._getRootElement = function(t) {
                var e = wi.getSelectorFromElement(t),
                    i = !1;
                return e && (i = r(e)[0]), i || (i = r(t).closest("." + h)[0]), i
            }, e._triggerCloseEvent = function(t) {
                var e = r.Event(u.CLOSE);
                return r(t).trigger(e), e
            }, e._removeElement = function(t) {
                var e = this;
                if (r(t).removeClass(f), r(t).hasClass(p)) {
                    var i = wi.getTransitionDurationFromElement(t);
                    r(t).one(wi.TRANSITION_END, function(i) {
                        return e._destroyElement(t, i)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(t)
            }, e._destroyElement = function(t) {
                r(t).detach().trigger(u.CLOSED).remove()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = r(this),
                        n = i.data(l);
                    n || (n = new t(this), i.data(l, n)), "close" === e && n[e](this)
                })
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }]), t
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
            return r.fn[a] = d, m._jQueryInterface
        }, m),
        Ci = (g = "button", b = "." + (y = "bs.button"), _ = ".data-api", w = (v = e).fn[g], k = "active", C = "btn", E = '[data-toggle^="button"]', x = '[data-toggle="buttons"]', S = "input", A = ".active", I = ".btn", D = {
            CLICK_DATA_API: "click" + b + _,
            FOCUS_BLUR_DATA_API: (T = "focus") + b + _ + " blur" + b + _
        }, O = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    i = v(this._element).closest(x)[0];
                if (i) {
                    var n = v(this._element).find(S)[0];
                    if (n) {
                        if ("radio" === n.type)
                            if (n.checked && v(this._element).hasClass(k)) t = !1;
                            else {
                                var o = v(i).find(A)[0];
                                o && v(o).removeClass(k)
                            }
                        if (t) {
                            if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            n.checked = !v(this._element).hasClass(k), v(n).trigger("change")
                        }
                        n.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !v(this._element).hasClass(k)), t && v(this._element).toggleClass(k)
            }, e.dispose = function() {
                v.removeData(this._element, y), this._element = null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = v(this).data(y);
                    i || (i = new t(this), v(this).data(y, i)), "toggle" === e && i[e]()
                })
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }]), t
        }(), v(document).on(D.CLICK_DATA_API, E, function(t) {
            t.preventDefault();
            var e = t.target;
            v(e).hasClass(C) || (e = v(e).closest(I)), O._jQueryInterface.call(v(e), "toggle")
        }).on(D.FOCUS_BLUR_DATA_API, E, function(t) {
            var e = v(t.target).closest(I)[0];
            v(e).toggleClass(T, /^focus(in)?$/.test(t.type))
        }), v.fn[g] = O._jQueryInterface, v.fn[g].Constructor = O, v.fn[g].noConflict = function() {
            return v.fn[g] = w, O._jQueryInterface
        }, O),
        Ti = (P = "carousel", L = "." + (j = "bs.carousel"), M = ".data-api", $ = (N = e).fn[P], H = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, z = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, U = "next", R = "prev", B = "left", F = "right", W = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + M,
            CLICK_DATA_API: "click" + L + M
        }, V = "carousel", q = "active", Q = "slide", K = "carousel-item-right", Y = "carousel-item-left", G = "carousel-item-next", X = "carousel-item-prev", J = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, Z = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = N(t)[0], this._indicatorsElement = N(this._element).find(J.INDICATORS)[0], this._addEventListeners()
            }
            var e = t.prototype;
            return e.next = function() {
                this._isSliding || this._slide(U)
            }, e.nextWhenVisible = function() {
                !document.hidden && N(this._element).is(":visible") && "hidden" !== N(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(R)
            }, e.pause = function(t) {
                t || (this._isPaused = !0), N(this._element).find(J.NEXT_PREV)[0] && (wi.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(t) {
                var e = this;
                this._activeElement = N(this._element).find(J.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) N(this._element).one(W.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (i === t) return this.pause(), void this.cycle();
                        var n = i < t ? U : R;
                        this._slide(n, this._items[t])
                    }
            }, e.dispose = function() {
                N(this._element).off(L), N.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(t) {
                return t = s({}, H, t), wi.typeCheckConfig(P, t, z), t
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && N(this._element).on(W.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (N(this._element).on(W.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(W.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && N(this._element).on(W.TOUCHEND, function() {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, e._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(t) {
                return this._items = N.makeArray(N(t).parent().find(J.ITEM)), this._items.indexOf(t)
            }, e._getItemByDirection = function(t, e) {
                var i = t === U,
                    n = t === R,
                    o = this._getItemIndex(e),
                    s = this._items.length - 1;
                if ((n && 0 === o || i && o === s) && !this._config.wrap) return e;
                var r = (o + (t === R ? -1 : 1)) % this._items.length;
                return -1 === r ? this._items[this._items.length - 1] : this._items[r]
            }, e._triggerSlideEvent = function(t, e) {
                var i = this._getItemIndex(t),
                    n = this._getItemIndex(N(this._element).find(J.ACTIVE_ITEM)[0]),
                    o = N.Event(W.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: n,
                        to: i
                    });
                return N(this._element).trigger(o), o
            }, e._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    N(this._indicatorsElement).find(J.ACTIVE).removeClass(q);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && N(e).addClass(q)
                }
            }, e._slide = function(t, e) {
                var i, n, o, s = this,
                    r = N(this._element).find(J.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(r),
                    l = e || r && this._getItemByDirection(t, r),
                    c = this._getItemIndex(l),
                    d = Boolean(this._interval);
                if (t === U ? (i = Y, n = G, o = B) : (i = K, n = X, o = F), l && N(l).hasClass(q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && r && l) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(l);
                    var u = N.Event(W.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (N(this._element).hasClass(Q)) {
                        N(l).addClass(n), wi.reflow(l), N(r).addClass(i), N(l).addClass(i);
                        var h = wi.getTransitionDurationFromElement(r);
                        N(r).one(wi.TRANSITION_END, function() {
                            N(l).removeClass(i + " " + n).addClass(q), N(r).removeClass(q + " " + n + " " + i), s._isSliding = !1, setTimeout(function() {
                                return N(s._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else N(r).removeClass(q), N(l).addClass(q), this._isSliding = !1, N(this._element).trigger(u);
                    d && this.cycle()
                }
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = N(this).data(j),
                        n = s({}, H, N(this).data());
                    "object" == typeof e && (n = s({}, n, e));
                    var o = "string" == typeof e ? e : n.slide;
                    if (i || (i = new t(this, n), N(this).data(j, i)), "number" == typeof e) i.to(e);
                    else if ("string" == typeof o) {
                        if ("undefined" == typeof i[o]) throw new TypeError('No method named "' + o + '"');
                        i[o]()
                    } else n.interval && (i.pause(), i.cycle())
                })
            }, t._dataApiClickHandler = function(e) {
                var i = wi.getSelectorFromElement(this);
                if (i) {
                    var n = N(i)[0];
                    if (n && N(n).hasClass(V)) {
                        var o = s({}, N(n).data(), N(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (o.interval = !1), t._jQueryInterface.call(N(n), o), r && N(n).data(j).to(r), e.preventDefault()
                    }
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return H
                }
            }]), t
        }(), N(document).on(W.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), N(window).on(W.LOAD_DATA_API, function() {
            N(J.DATA_RIDE).each(function() {
                var t = N(this);
                Z._jQueryInterface.call(t, t.data())
            })
        }), N.fn[P] = Z._jQueryInterface, N.fn[P].Constructor = Z, N.fn[P].noConflict = function() {
            return N.fn[P] = $, Z._jQueryInterface
        }, Z),
        Ei = (et = "collapse", nt = "." + (it = "bs.collapse"), ot = (tt = e).fn[et], st = {
            toggle: !0,
            parent: ""
        }, rt = {
            toggle: "boolean",
            parent: "(string|element)"
        }, at = {
            SHOW: "show" + nt,
            SHOWN: "shown" + nt,
            HIDE: "hide" + nt,
            HIDDEN: "hidden" + nt,
            CLICK_DATA_API: "click" + nt + ".data-api"
        }, lt = "show", ct = "collapse", dt = "collapsing", ut = "collapsed", ht = "width", pt = "height", ft = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, mt = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = tt(ft.DATA_TOGGLE), n = 0; n < i.length; n++) {
                    var o = i[n],
                        s = wi.getSelectorFromElement(o);
                    null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = t.prototype;
            return e.toggle = function() {
                tt(this._element).hasClass(lt) ? this.hide() : this.show()
            }, e.show = function() {
                var e, i, n = this;
                if (!(this._isTransitioning || tt(this._element).hasClass(lt) || (this._parent && 0 === (e = tt.makeArray(tt(this._parent).find(ft.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (i = tt(e).not(this._selector).data(it)) && i._isTransitioning))) {
                    var o = tt.Event(at.SHOW);
                    if (tt(this._element).trigger(o), !o.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(tt(e).not(this._selector), "hide"), i || tt(e).data(it, null));
                        var s = this._getDimension();
                        tt(this._element).removeClass(ct).addClass(dt), (this._element.style[s] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            a = wi.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(wi.TRANSITION_END, function() {
                            tt(n._element).removeClass(dt).addClass(ct).addClass(lt), n._element.style[s] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN)
                        }).emulateTransitionEnd(a), this._element.style[s] = this._element[r] + "px"
                    }
                }
            }, e.hide = function() {
                var t = this;
                if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                    var e = tt.Event(at.HIDE);
                    if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", wi.reflow(this._element), tt(this._element).addClass(dt).removeClass(ct).removeClass(lt), 0 < this._triggerArray.length)
                            for (var n = 0; n < this._triggerArray.length; n++) {
                                var o = this._triggerArray[n],
                                    s = wi.getSelectorFromElement(o);
                                null !== s && (tt(s).hasClass(lt) || tt(o).addClass(ut).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var r = wi.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(wi.TRANSITION_END, function() {
                            t.setTransitioning(!1), tt(t._element).removeClass(dt).addClass(ct).trigger(at.HIDDEN)
                        }).emulateTransitionEnd(r)
                    }
                }
            }, e.setTransitioning = function(t) {
                this._isTransitioning = t
            }, e.dispose = function() {
                tt.removeData(this._element, it), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(t) {
                return (t = s({}, st, t)).toggle = Boolean(t.toggle), wi.typeCheckConfig(et, t, rt), t
            }, e._getDimension = function() {
                return tt(this._element).hasClass(ht) ? ht : pt
            }, e._getParent = function() {
                var e = this,
                    i = null;
                wi.isElement(this._config.parent) ? (i = this._config.parent, "undefined" != typeof this._config.parent.jquery && (i = this._config.parent[0])) : i = tt(this._config.parent)[0];
                var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return tt(i).find(n).each(function(i, n) {
                    e._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                }), i
            }, e._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var i = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(ut, !i).attr("aria-expanded", i)
                }
            }, t._getTargetFromElement = function(t) {
                var e = wi.getSelectorFromElement(t);
                return e ? tt(e)[0] : null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = tt(this),
                        n = i.data(it),
                        o = s({}, st, i.data(), "object" == typeof e && e ? e : {});
                    if (!n && o.toggle && /show|hide/.test(e) && (o.toggle = !1), n || (n = new t(this, o), i.data(it, n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return st
                }
            }]), t
        }(), tt(document).on(at.CLICK_DATA_API, ft.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var e = tt(this),
                i = wi.getSelectorFromElement(this);
            tt(i).each(function() {
                var t = tt(this),
                    i = t.data(it) ? "toggle" : e.data();
                mt._jQueryInterface.call(t, i)
            })
        }), tt.fn[et] = mt._jQueryInterface, tt.fn[et].Constructor = mt, tt.fn[et].noConflict = function() {
            return tt.fn[et] = ot, mt._jQueryInterface
        }, mt),
        xi = (gt = "dropdown", bt = "." + (yt = "bs.dropdown"), _t = ".data-api", wt = (vt = e).fn[gt], kt = new RegExp("38|40|27"), Ct = {
            HIDE: "hide" + bt,
            HIDDEN: "hidden" + bt,
            SHOW: "show" + bt,
            SHOWN: "shown" + bt,
            CLICK: "click" + bt,
            CLICK_DATA_API: "click" + bt + _t,
            KEYDOWN_DATA_API: "keydown" + bt + _t,
            KEYUP_DATA_API: "keyup" + bt + _t
        }, Tt = "disabled", Et = "show", xt = "dropup", St = "dropright", At = "dropleft", It = "dropdown-menu-right", Dt = "position-static", Ot = '[data-toggle="dropdown"]', Nt = ".dropdown form", Pt = ".dropdown-menu", jt = ".navbar-nav", Lt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", $t = "top-end", Ht = "bottom-start", zt = "bottom-end", Ut = "right-start", Rt = "left-start", Bt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Ft = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Wt = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = t.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !vt(this._element).hasClass(Tt)) {
                    var e = t._getParentFromElement(this._element),
                        n = vt(this._menu).hasClass(Et);
                    if (t._clearMenus(), !n) {
                        var o = {
                                relatedTarget: this._element
                            },
                            s = vt.Event(Ct.SHOW, o);
                        if (vt(e).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : wi.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && vt(e).addClass(Dt), this._popper = new i(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === vt(e).closest(jt).length && vt(document.body).children().on("mouseover", null, vt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), vt(this._menu).toggleClass(Et), vt(e).toggleClass(Et).trigger(vt.Event(Ct.SHOWN, o))
                        }
                    }
                }
            }, e.dispose = function() {
                vt.removeData(this._element, yt), vt(this._element).off(bt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                vt(this._element).on(Ct.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(t) {
                return t = s({}, this.constructor.Default, vt(this._element).data(), t), wi.typeCheckConfig(gt, t, this.constructor.DefaultType), t
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    this._menu = vt(e).find(Pt)[0]
                }
                return this._menu
            }, e._getPlacement = function() {
                var t = vt(this._element).parent(),
                    e = Ht;
                return t.hasClass(xt) ? (e = Mt, vt(this._menu).hasClass(It) && (e = $t)) : t.hasClass(St) ? e = Ut : t.hasClass(At) ? e = Rt : vt(this._menu).hasClass(It) && (e = zt), e
            }, e._detectNavbar = function() {
                return 0 < vt(this._element).closest(".navbar").length
            }, e._getPopperConfig = function() {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var i = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (i.modifiers.applyStyle = {
                    enabled: !1
                }), i
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = vt(this).data(yt);
                    if (i || (i = new t(this, "object" == typeof e ? e : null), vt(this).data(yt, i)), "string" == typeof e) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var i = vt.makeArray(vt(Ot)), n = 0; n < i.length; n++) {
                        var o = t._getParentFromElement(i[n]),
                            s = vt(i[n]).data(yt),
                            r = {
                                relatedTarget: i[n]
                            };
                        if (s) {
                            var a = s._menu;
                            if (vt(o).hasClass(Et) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && vt.contains(o, e.target))) {
                                var l = vt.Event(Ct.HIDE, r);
                                vt(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && vt(document.body).children().off("mouseover", null, vt.noop), i[n].setAttribute("aria-expanded", "false"), vt(a).removeClass(Et), vt(o).removeClass(Et).trigger(vt.Event(Ct.HIDDEN, r)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, i = wi.getSelectorFromElement(t);
                return i && (e = vt(i)[0]), e || t.parentNode
            }, t._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || vt(e.target).closest(Pt).length)) : kt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !vt(this).hasClass(Tt))) {
                    var i = t._getParentFromElement(this),
                        n = vt(i).hasClass(Et);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var o = vt(i).find(Lt).get();
                        if (0 !== o.length) {
                            var s = o.indexOf(e.target);
                            38 === e.which && 0 < s && s--, 40 === e.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var r = vt(i).find(Ot)[0];
                            vt(r).trigger("focus")
                        }
                        vt(this).trigger("click")
                    }
                }
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Bt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ft
                }
            }]), t
        }(), vt(document).on(Ct.KEYDOWN_DATA_API, Ot, Wt._dataApiKeydownHandler).on(Ct.KEYDOWN_DATA_API, Pt, Wt._dataApiKeydownHandler).on(Ct.CLICK_DATA_API + " " + Ct.KEYUP_DATA_API, Wt._clearMenus).on(Ct.CLICK_DATA_API, Ot, function(t) {
            t.preventDefault(), t.stopPropagation(), Wt._jQueryInterface.call(vt(this), "toggle")
        }).on(Ct.CLICK_DATA_API, Nt, function(t) {
            t.stopPropagation()
        }), vt.fn[gt] = Wt._jQueryInterface, vt.fn[gt].Constructor = Wt, vt.fn[gt].noConflict = function() {
            return vt.fn[gt] = wt, Wt._jQueryInterface
        }, Wt),
        Si = (qt = "modal", Kt = "." + (Qt = "bs.modal"), Yt = (Vt = e).fn[qt], Gt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Xt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Jt = {
            HIDE: "hide" + Kt,
            HIDDEN: "hidden" + Kt,
            SHOW: "show" + Kt,
            SHOWN: "shown" + Kt,
            FOCUSIN: "focusin" + Kt,
            RESIZE: "resize" + Kt,
            CLICK_DISMISS: "click.dismiss" + Kt,
            KEYDOWN_DISMISS: "keydown.dismiss" + Kt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Kt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Kt,
            CLICK_DATA_API: "click" + Kt + ".data-api"
        }, Zt = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ie = "fade", ne = "show", oe = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, se = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = Vt(t).find(oe.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var e = t.prototype;
            return e.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, e.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Vt(this._element).hasClass(ie) && (this._isTransitioning = !0);
                    var i = Vt.Event(Jt.SHOW, {
                        relatedTarget: t
                    });
                    Vt(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Vt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Vt(this._element).on(Jt.CLICK_DISMISS, oe.DATA_DISMISS, function(t) {
                        return e.hide(t)
                    }), Vt(this._dialog).on(Jt.MOUSEDOWN_DISMISS, function() {
                        Vt(e._element).one(Jt.MOUSEUP_DISMISS, function(t) {
                            Vt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, e.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = Vt.Event(Jt.HIDE);
                    if (Vt(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var n = Vt(this._element).hasClass(ie);
                        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Vt(document).off(Jt.FOCUSIN), Vt(this._element).removeClass(ne), Vt(this._element).off(Jt.CLICK_DISMISS), Vt(this._dialog).off(Jt.MOUSEDOWN_DISMISS), n) {
                            var o = wi.getTransitionDurationFromElement(this._element);
                            Vt(this._element).one(wi.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                Vt.removeData(this._element, Qt), Vt(window, document, this._element, this._backdrop).off(Kt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(t) {
                return t = s({}, Gt, t), wi.typeCheckConfig(qt, t, Xt), t
            }, e._showElement = function(t) {
                var e = this,
                    i = Vt(this._element).hasClass(ie);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && wi.reflow(this._element), Vt(this._element).addClass(ne), this._config.focus && this._enforceFocus();
                var n = Vt.Event(Jt.SHOWN, {
                        relatedTarget: t
                    }),
                    o = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, Vt(e._element).trigger(n)
                    };
                if (i) {
                    var s = wi.getTransitionDurationFromElement(this._element);
                    Vt(this._dialog).one(wi.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, e._enforceFocus = function() {
                var t = this;
                Vt(document).off(Jt.FOCUSIN).on(Jt.FOCUSIN, function(e) {
                    document !== e.target && t._element !== e.target && 0 === Vt(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? Vt(this._element).on(Jt.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || Vt(this._element).off(Jt.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? Vt(window).on(Jt.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : Vt(window).off(Jt.RESIZE)
            }, e._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    Vt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Vt(t._element).trigger(Jt.HIDDEN)
                })
            }, e._removeBackdrop = function() {
                this._backdrop && (Vt(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(t) {
                var e = this,
                    i = Vt(this._element).hasClass(ie) ? ie : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = te, i && Vt(this._backdrop).addClass(i), Vt(this._backdrop).appendTo(document.body), Vt(this._element).on(Jt.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), i && wi.reflow(this._backdrop), Vt(this._backdrop).addClass(ne), !t) return;
                    if (!i) return void t();
                    var n = wi.getTransitionDurationFromElement(this._backdrop);
                    Vt(this._backdrop).one(wi.TRANSITION_END, t).emulateTransitionEnd(n)
                } else if (!this._isShown && this._backdrop) {
                    Vt(this._backdrop).removeClass(ne);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (Vt(this._element).hasClass(ie)) {
                        var s = wi.getTransitionDurationFromElement(this._backdrop);
                        Vt(this._backdrop).one(wi.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                } else t && t()
            }, e._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    Vt(oe.FIXED_CONTENT).each(function(e, i) {
                        var n = Vt(i)[0].style.paddingRight,
                            o = Vt(i).css("padding-right");
                        Vt(i).data("padding-right", n).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                    }), Vt(oe.STICKY_CONTENT).each(function(e, i) {
                        var n = Vt(i)[0].style.marginRight,
                            o = Vt(i).css("margin-right");
                        Vt(i).data("margin-right", n).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                    }), Vt(oe.NAVBAR_TOGGLER).each(function(e, i) {
                        var n = Vt(i)[0].style.marginRight,
                            o = Vt(i).css("margin-right");
                        Vt(i).data("margin-right", n).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                    });
                    var e = document.body.style.paddingRight,
                        i = Vt(document.body).css("padding-right");
                    Vt(document.body).data("padding-right", e).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function() {
                Vt(oe.FIXED_CONTENT).each(function(t, e) {
                    var i = Vt(e).data("padding-right");
                    "undefined" != typeof i && Vt(e).css("padding-right", i).removeData("padding-right")
                }), Vt(oe.STICKY_CONTENT + ", " + oe.NAVBAR_TOGGLER).each(function(t, e) {
                    var i = Vt(e).data("margin-right");
                    "undefined" != typeof i && Vt(e).css("margin-right", i).removeData("margin-right")
                });
                var t = Vt(document.body).data("padding-right");
                "undefined" != typeof t && Vt(document.body).css("padding-right", t).removeData("padding-right")
            }, e._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = Zt, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(e, i) {
                return this.each(function() {
                    var n = Vt(this).data(Qt),
                        o = s({}, Gt, Vt(this).data(), "object" == typeof e && e ? e : {});
                    if (n || (n = new t(this, o), Vt(this).data(Qt, n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e](i)
                    } else o.show && n.show(i)
                })
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Gt
                }
            }]), t
        }(), Vt(document).on(Jt.CLICK_DATA_API, oe.DATA_TOGGLE, function(t) {
            var e, i = this,
                n = wi.getSelectorFromElement(this);
            n && (e = Vt(n)[0]);
            var o = Vt(e).data(Qt) ? "toggle" : s({}, Vt(e).data(), Vt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var r = Vt(e).one(Jt.SHOW, function(t) {
                t.isDefaultPrevented() || r.one(Jt.HIDDEN, function() {
                    Vt(i).is(":visible") && i.focus()
                })
            });
            se._jQueryInterface.call(Vt(e), o, this)
        }), Vt.fn[qt] = se._jQueryInterface, Vt.fn[qt].Constructor = se, Vt.fn[qt].noConflict = function() {
            return Vt.fn[qt] = Yt, se._jQueryInterface
        }, se),
        Ai = (ae = "tooltip", ce = "." + (le = "bs.tooltip"), de = (re = e).fn[ae], ue = "bs-tooltip", he = new RegExp("(^|\\s)" + ue + "\\S+", "g"), me = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(fe = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(pe = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, ge = "out", ye = {
            HIDE: "hide" + ce,
            HIDDEN: "hidden" + ce,
            SHOW: (ve = "show") + ce,
            SHOWN: "shown" + ce,
            INSERTED: "inserted" + ce,
            CLICK: "click" + ce,
            FOCUSIN: "focusin" + ce,
            FOCUSOUT: "focusout" + ce,
            MOUSEENTER: "mouseenter" + ce,
            MOUSELEAVE: "mouseleave" + ce
        }, be = "fade", _e = "show", we = ".tooltip-inner", ke = ".arrow", Ce = "hover", Te = "focus", Ee = "click", xe = "manual", Se = function() {
            function t(t, e) {
                if ("undefined" == typeof i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var e = t.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            i = re(t.currentTarget).data(e);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), re(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (re(this.getTipElement()).hasClass(_e)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), re.removeData(this.element, this.constructor.DATA_KEY), re(this.element).off(this.constructor.EVENT_KEY), re(this.element).closest(".modal").off("hide.bs.modal"), this.tip && re(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === re(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = re.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    re(this.element).trigger(e);
                    var n = re.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) return;
                    var o = this.getTipElement(),
                        s = wi.getUID(this.constructor.NAME);
                    o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && re(o).addClass(be);
                    var r = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(r);
                    this.addAttachmentClass(a);
                    var l = !1 === this.config.container ? document.body : re(this.config.container);
                    re(o).data(this.constructor.DATA_KEY, this), re.contains(this.element.ownerDocument.documentElement, this.tip) || re(o).appendTo(l), re(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, o, {
                        placement: a,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ke
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), re(o).addClass(_e), "ontouchstart" in document.documentElement && re(document.body).children().on("mouseover", null, re.noop);
                    var c = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, re(t.element).trigger(t.constructor.Event.SHOWN), e === ge && t._leave(null, t)
                    };
                    if (re(this.tip).hasClass(be)) {
                        var d = wi.getTransitionDurationFromElement(this.tip);
                        re(this.tip).one(wi.TRANSITION_END, c).emulateTransitionEnd(d)
                    } else c()
                }
            }, e.hide = function(t) {
                var e = this,
                    i = this.getTipElement(),
                    n = re.Event(this.constructor.Event.HIDE),
                    o = function() {
                        e._hoverState !== ve && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), re(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (re(this.element).trigger(n), !n.isDefaultPrevented()) {
                    if (re(i).removeClass(_e), "ontouchstart" in document.documentElement && re(document.body).children().off("mouseover", null, re.noop), this._activeTrigger[Ee] = !1, this._activeTrigger[Te] = !1, this._activeTrigger[Ce] = !1, re(this.tip).hasClass(be)) {
                        var s = wi.getTransitionDurationFromElement(i);
                        re(i).one(wi.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(t) {
                re(this.getTipElement()).addClass(ue + "-" + t)
            }, e.getTipElement = function() {
                return this.tip = this.tip || re(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var t = re(this.getTipElement());
                this.setElementContent(t.find(we), this.getTitle()), t.removeClass(be + " " + _e)
            }, e.setElementContent = function(t, e) {
                var i = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? i ? re(e).parent().is(t) || t.empty().append(e) : t.text(re(e).text()) : t[i ? "html" : "text"](e)
            }, e.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, e._getAttachment = function(t) {
                return fe[t.toUpperCase()]
            }, e._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) re(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                        return t.toggle(e)
                    });
                    else if (e !== xe) {
                        var i = e === Ce ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            n = e === Ce ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        re(t.element).on(i, t.config.selector, function(e) {
                            return t._enter(e)
                        }).on(n, t.config.selector, function(e) {
                            return t._leave(e)
                        })
                    }
                    re(t.element).closest(".modal").on("hide.bs.modal", function() {
                        return t.hide()
                    })
                }), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || re(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), re(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? Te : Ce] = !0), re(e.getTipElement()).hasClass(_e) || e._hoverState === ve ? e._hoverState = ve : (clearTimeout(e._timeout), e._hoverState = ve, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === ve && e.show()
                }, e.config.delay.show) : e.show())
            }, e._leave = function(t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || re(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), re(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? Te : Ce] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = ge, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === ge && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, e._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, e._getConfig = function(t) {
                return "number" == typeof(t = s({}, this.constructor.Default, re(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), wi.typeCheckConfig(ae, t, this.constructor.DefaultType), t
            }, e._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, e._cleanTipClass = function() {
                var t = re(this.getTipElement()),
                    e = t.attr("class").match(he);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, e._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, e._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (re(t).removeClass(be), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = re(this).data(le),
                        n = "object" == typeof e && e;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this, n), re(this).data(le, i)), "string" == typeof e)) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return me
                }
            }, {
                key: "NAME",
                get: function() {
                    return ae
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return le
                }
            }, {
                key: "Event",
                get: function() {
                    return ye
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ce
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return pe
                }
            }]), t
        }(), re.fn[ae] = Se._jQueryInterface, re.fn[ae].Constructor = Se, re.fn[ae].noConflict = function() {
            return re.fn[ae] = de, Se._jQueryInterface
        }, Se),
        Ii = (Ie = "popover", Oe = "." + (De = "bs.popover"), Ne = (Ae = e).fn[Ie], Pe = "bs-popover", je = new RegExp("(^|\\s)" + Pe + "\\S+", "g"), Le = s({}, Ai.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Me = s({}, Ai.DefaultType, {
            content: "(string|element|function)"
        }), $e = "fade", ze = ".popover-header", Ue = ".popover-body", Re = {
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            SHOW: (He = "show") + Oe,
            SHOWN: "shown" + Oe,
            INSERTED: "inserted" + Oe,
            CLICK: "click" + Oe,
            FOCUSIN: "focusin" + Oe,
            FOCUSOUT: "focusout" + Oe,
            MOUSEENTER: "mouseenter" + Oe,
            MOUSELEAVE: "mouseleave" + Oe
        }, Be = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            var i, n;
            n = t, (i = e).prototype = Object.create(n.prototype), (i.prototype.constructor = i).__proto__ = n;
            var s = e.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(t) {
                Ae(this.getTipElement()).addClass(Pe + "-" + t)
            }, s.getTipElement = function() {
                return this.tip = this.tip || Ae(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var t = Ae(this.getTipElement());
                this.setElementContent(t.find(ze), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass($e + " " + He)
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var t = Ae(this.getTipElement()),
                    e = t.attr("class").match(je);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = Ae(this).data(De),
                        n = "object" == typeof t ? t : null;
                    if ((i || !/destroy|hide/.test(t)) && (i || (i = new e(this, n), Ae(this).data(De, i)), "string" == typeof t)) {
                        if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Le
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ie
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return De
                }
            }, {
                key: "Event",
                get: function() {
                    return Re
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Oe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Me
                }
            }]), e
        }(Ai), Ae.fn[Ie] = Be._jQueryInterface, Ae.fn[Ie].Constructor = Be, Ae.fn[Ie].noConflict = function() {
            return Ae.fn[Ie] = Ne, Be._jQueryInterface
        }, Be),
        Di = (We = "scrollspy", qe = "." + (Ve = "bs.scrollspy"), Qe = (Fe = e).fn[We], Ke = {
            offset: 10,
            method: "auto",
            target: ""
        }, Ye = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Ge = {
            ACTIVATE: "activate" + qe,
            SCROLL: "scroll" + qe,
            LOAD_DATA_API: "load" + qe + ".data-api"
        }, Xe = "dropdown-item", Je = "active", Ze = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, ti = "offset", ei = "position", ii = function() {
            function t(t, e) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Ze.NAV_LINKS + "," + this._config.target + " " + Ze.LIST_ITEMS + "," + this._config.target + " " + Ze.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Fe(this._scrollElement).on(Ge.SCROLL, function(t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }
            var e = t.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? ti : ei,
                    i = "auto" === this._config.method ? e : this._config.method,
                    n = i === ei ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Fe.makeArray(Fe(this._selector)).map(function(t) {
                    var e, o = wi.getSelectorFromElement(t);
                    if (o && (e = Fe(o)[0]), e) {
                        var s = e.getBoundingClientRect();
                        if (s.width || s.height) return [Fe(e)[i]().top + n, o]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                Fe.removeData(this._element, Ve), Fe(this._scrollElement).off(qe), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(t) {
                if ("string" != typeof(t = s({}, Ke, "object" == typeof t && t ? t : {})).target) {
                    var e = Fe(t.target).attr("id");
                    e || (e = wi.getUID(We), Fe(t.target).attr("id", e)), t.target = "#" + e
                }
                return wi.typeCheckConfig(We, t, Ye), t
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), i <= t) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var i = Fe(e.join(","));
                i.hasClass(Xe) ? (i.closest(Ze.DROPDOWN).find(Ze.DROPDOWN_TOGGLE).addClass(Je), i.addClass(Je)) : (i.addClass(Je), i.parents(Ze.NAV_LIST_GROUP).prev(Ze.NAV_LINKS + ", " + Ze.LIST_ITEMS).addClass(Je), i.parents(Ze.NAV_LIST_GROUP).prev(Ze.NAV_ITEMS).children(Ze.NAV_LINKS).addClass(Je)), Fe(this._scrollElement).trigger(Ge.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                Fe(this._selector).filter(Ze.ACTIVE).removeClass(Je)
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = Fe(this).data(Ve);
                    if (i || (i = new t(this, "object" == typeof e && e), Fe(this).data(Ve, i)), "string" == typeof e) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ke
                }
            }]), t
        }(), Fe(window).on(Ge.LOAD_DATA_API, function() {
            for (var t = Fe.makeArray(Fe(Ze.DATA_SPY)), e = t.length; e--;) {
                var i = Fe(t[e]);
                ii._jQueryInterface.call(i, i.data())
            }
        }), Fe.fn[We] = ii._jQueryInterface, Fe.fn[We].Constructor = ii, Fe.fn[We].noConflict = function() {
            return Fe.fn[We] = Qe, ii._jQueryInterface
        }, ii),
        Oi = (si = "." + (oi = "bs.tab"), ri = (ni = e).fn.tab, ai = {
            HIDE: "hide" + si,
            HIDDEN: "hidden" + si,
            SHOW: "show" + si,
            SHOWN: "shown" + si,
            CLICK_DATA_API: "click" + si + ".data-api"
        }, li = "dropdown-menu", ci = "active", di = "disabled", ui = "fade", hi = "show", pi = ".dropdown", fi = ".nav, .list-group", mi = ".active", vi = "> li > .active", gi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', yi = ".dropdown-toggle", bi = "> .dropdown-menu .active", _i = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ni(this._element).hasClass(ci) || ni(this._element).hasClass(di))) {
                    var e, i, n = ni(this._element).closest(fi)[0],
                        o = wi.getSelectorFromElement(this._element);
                    if (n) {
                        var s = "UL" === n.nodeName ? vi : mi;
                        i = (i = ni.makeArray(ni(n).find(s)))[i.length - 1]
                    }
                    var r = ni.Event(ai.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = ni.Event(ai.SHOW, {
                            relatedTarget: i
                        });
                    if (i && ni(i).trigger(r), ni(this._element).trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                        o && (e = ni(o)[0]), this._activate(this._element, n);
                        var l = function() {
                            var e = ni.Event(ai.HIDDEN, {
                                    relatedTarget: t._element
                                }),
                                n = ni.Event(ai.SHOWN, {
                                    relatedTarget: i
                                });
                            ni(i).trigger(e), ni(t._element).trigger(n)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                ni.removeData(this._element, oi), this._element = null
            }, e._activate = function(t, e, i) {
                var n = this,
                    o = ("UL" === e.nodeName ? ni(e).find(vi) : ni(e).children(mi))[0],
                    s = i && o && ni(o).hasClass(ui),
                    r = function() {
                        return n._transitionComplete(t, o, i)
                    };
                if (o && s) {
                    var a = wi.getTransitionDurationFromElement(o);
                    ni(o).one(wi.TRANSITION_END, r).emulateTransitionEnd(a)
                } else r()
            }, e._transitionComplete = function(t, e, i) {
                if (e) {
                    ni(e).removeClass(hi + " " + ci);
                    var n = ni(e.parentNode).find(bi)[0];
                    n && ni(n).removeClass(ci), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (ni(t).addClass(ci), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), wi.reflow(t), ni(t).addClass(hi), t.parentNode && ni(t.parentNode).hasClass(li)) {
                    var o = ni(t).closest(pi)[0];
                    o && ni(o).find(yi).addClass(ci), t.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = ni(this),
                        n = i.data(oi);
                    if (n || (n = new t(this), i.data(oi, n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }]), t
        }(), ni(document).on(ai.CLICK_DATA_API, gi, function(t) {
            t.preventDefault(), _i._jQueryInterface.call(ni(this), "show")
        }), ni.fn.tab = _i._jQueryInterface, ni.fn.tab.Constructor = _i, ni.fn.tab.noConflict = function() {
            return ni.fn.tab = ri, _i._jQueryInterface
        }, _i);
    ! function(t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = wi, t.Alert = ki, t.Button = Ci, t.Carousel = Ti, t.Collapse = Ei, t.Dropdown = xi, t.Modal = Si, t.Popover = Ii, t.Scrollspy = Di, t.Tab = Oi, t.Tooltip = Ai, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
/*!
 * Riverts Cart Js
 */
// license: MIT
function() {
    function t(t, i, n, o) {
        return new e(t, i, n, o)
    }

    function e(t, e, n, o) {
        this.options = o || {}, this.options.adapters = this.options.adapters || {}, this.obj = t, this.keypath = e, this.callback = n, this.objectPath = [], this.parse(), i(this.target = this.realize()) && this.set(!0, this.key, this.target, this.callback)
    }

    function i(t) {
        return "object" == typeof t && null !== t
    }

    function n(t) {
        throw new Error("[sightglass] " + t)
    }
    t.adapters = {}, e.tokenize = function(t, e, i) {
        var n, o, s = [],
            r = {
                i: i,
                path: ""
            };
        for (n = 0; n < t.length; n++) o = t.charAt(n), ~e.indexOf(o) ? (s.push(r), r = {
            i: o,
            path: ""
        }) : r.path += o;
        return s.push(r), s
    }, e.prototype.parse = function() {
        var i, o, s = this.interfaces();
        s.length || n("Must define at least one adapter interface."), ~s.indexOf(this.keypath[0]) ? (i = this.keypath[0], o = this.keypath.substr(1)) : ("undefined" == typeof(i = this.options.root || t.root) && n("Must define a default root adapter."), o = this.keypath), this.tokens = e.tokenize(o, s, i), this.key = this.tokens.pop()
    }, e.prototype.realize = function() {
        var t, e = this.obj,
            n = !1;
        return this.tokens.forEach(function(o, s) {
            i(e) ? ("undefined" != typeof this.objectPath[s] ? e !== (t = this.objectPath[s]) && (this.set(!1, o, t, this.update.bind(this)), this.set(!0, o, e, this.update.bind(this)), this.objectPath[s] = e) : (this.set(!0, o, e, this.update.bind(this)), this.objectPath[s] = e), e = this.get(o, e)) : (n === !1 && (n = s), (t = this.objectPath[s]) && this.set(!1, o, t, this.update.bind(this)))
        }, this), n !== !1 && this.objectPath.splice(n), e
    }, e.prototype.update = function() {
        var t, e;
        (t = this.realize()) !== this.target && (i(this.target) && this.set(!1, this.key, this.target, this.callback), i(t) && this.set(!0, this.key, t, this.callback), e = this.value(), this.target = t, this.value() !== e && this.callback())
    }, e.prototype.value = function() {
        return i(this.target) ? this.get(this.key, this.target) : void 0
    }, e.prototype.setValue = function(t) {
        i(this.target) && this.adapter(this.key).set(this.target, this.key.path, t)
    }, e.prototype.get = function(t, e) {
        return this.adapter(t).get(e, t.path)
    }, e.prototype.set = function(t, e, i, n) {
        var o = t ? "observe" : "unobserve";
        this.adapter(e)[o](i, e.path, n)
    }, e.prototype.interfaces = function() {
        var e = Object.keys(this.options.adapters);
        return Object.keys(t.adapters).forEach(function(t) {
            ~e.indexOf(t) || e.push(t)
        }), e
    }, e.prototype.adapter = function(e) {
        return this.options.adapters[e.i] || t.adapters[e.i]
    }, e.prototype.unobserve = function() {
        var t;
        this.tokens.forEach(function(e, i) {
            (t = this.objectPath[i]) && this.set(!1, e, t, this.update.bind(this))
        }, this), i(this.target) && this.set(!1, this.key, this.target, this.callback)
    }, "undefined" != typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd ? define([], function() {
        return this.sightglass = t
    }) : this.sightglass = t
}.call(this),
    function() {
        var t, e, i, n, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = [].slice,
            r = {}.hasOwnProperty,
            a = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) r.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            l = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        t = {
            options: ["prefix", "templateDelimiters", "rootInterface", "preloadData", "handler"],
            extensions: ["binders", "formatters", "components", "adapters"],
            public: {
                binders: {},
                components: {},
                formatters: {},
                adapters: {},
                prefix: "rv",
                templateDelimiters: ["{", "}"],
                rootInterface: ".",
                preloadData: !0,
                handler: function(t, e, i) {
                    return this.call(t, e, i.view.models)
                },
                configure: function(e) {
                    var i, n, o, s;
                    null == e && (e = {});
                    for (o in e)
                        if (s = e[o], "binders" === o || "components" === o || "formatters" === o || "adapters" === o)
                            for (n in s) i = s[n], t[o][n] = i;
                        else t.public[o] = s
                },
                bind: function(e, i, n) {
                    var o;
                    return null == i && (i = {}), null == n && (n = {}), o = new t.View(e, i, n), o.bind(), o
                },
                init: function(e, i, n) {
                    var o, s;
                    return null == n && (n = {}), null == i && (i = document.createElement("div")), e = t.public.components[e], i.innerHTML = e.template.call(this, i), o = e.initialize.call(this, i, n), s = new t.View(i, o), s.bind(), s
                }
            }
        }, window.jQuery || window.$ ? (n = "on" in jQuery.prototype ? ["on", "off"] : ["bind", "unbind"], e = n[0], i = n[1], t.Util = {
            bindEvent: function(t, i, n) {
                return jQuery(t)[e](i, n)
            },
            unbindEvent: function(t, e, n) {
                return jQuery(t)[i](e, n)
            },
            getInputValue: function(t) {
                var e;
                return e = jQuery(t), "checkbox" === e.attr("type") ? e.is(":checked") : e.val()
            }
        }) : t.Util = {
            bindEvent: function() {
                return "addEventListener" in window ? function(t, e, i) {
                    return t.addEventListener(e, i, !1)
                } : function(t, e, i) {
                    return t.attachEvent("on" + e, i)
                }
            }(),
            unbindEvent: function() {
                return "removeEventListener" in window ? function(t, e, i) {
                    return t.removeEventListener(e, i, !1)
                } : function(t, e, i) {
                    return t.detachEvent("on" + e, i)
                }
            }(),
            getInputValue: function(t) {
                var e, i, n, o;
                if ("checkbox" === t.type) return t.checked;
                if ("select-multiple" === t.type) {
                    for (o = [], i = 0, n = t.length; n > i; i++) e = t[i], e.selected && o.push(e.value);
                    return o
                }
                return t.value
            }
        }, t.TypeParser = function() {
            function t() {}
            return t.types = {
                primitive: 0,
                keypath: 1
            }, t.parse = function(t) {
                return /^'.*'$|^".*"$/.test(t) ? {
                    type: this.types.primitive,
                    value: t.slice(1, -1)
                } : "true" === t ? {
                    type: this.types.primitive,
                    value: !0
                } : "false" === t ? {
                    type: this.types.primitive,
                    value: !1
                } : "null" === t ? {
                    type: this.types.primitive,
                    value: null
                } : "undefined" === t ? {
                    type: this.types.primitive,
                    value: void 0
                } : isNaN(Number(t)) === !1 ? {
                    type: this.types.primitive,
                    value: Number(t)
                } : {
                    type: this.types.keypath,
                    value: t
                }
            }, t
        }(), t.TextTemplateParser = function() {
            function t() {}
            return t.types = {
                text: 0,
                binding: 1
            }, t.parse = function(t, e) {
                var i, n, o, s, r, a, l;
                for (a = [], s = t.length, i = 0, n = 0; s > n;) {
                    if (i = t.indexOf(e[0], n), 0 > i) {
                        a.push({
                            type: this.types.text,
                            value: t.slice(n)
                        });
                        break
                    }
                    if (i > 0 && i > n && a.push({
                            type: this.types.text,
                            value: t.slice(n, i)
                        }), n = i + e[0].length, i = t.indexOf(e[1], n), 0 > i) {
                        r = t.slice(n - e[1].length), o = a[a.length - 1], (null != o ? o.type : void 0) === this.types.text ? o.value += r : a.push({
                            type: this.types.text,
                            value: r
                        });
                        break
                    }
                    l = t.slice(n, i).trim(), a.push({
                        type: this.types.binding,
                        value: l
                    }), n = i + e[1].length
                }
                return a
            }, t
        }(), t.View = function() {
            function e(e, i, n) {
                var s, r, a, l, c, d, u, h, p, f, m, v, g;
                for (this.els = e, this.models = i, null == n && (n = {}), this.update = o(this.update, this), this.publish = o(this.publish, this), this.sync = o(this.sync, this), this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.select = o(this.select, this), this.traverse = o(this.traverse, this), this.build = o(this.build, this), this.buildBinding = o(this.buildBinding, this), this.bindingRegExp = o(this.bindingRegExp, this), this.options = o(this.options, this), this.els.jquery || this.els instanceof Array || (this.els = [this.els]), p = t.extensions, c = 0, u = p.length; u > c; c++) {
                    if (r = p[c], this[r] = {}, n[r]) {
                        f = n[r];
                        for (s in f) a = f[s], this[r][s] = a
                    }
                    m = t.public[r];
                    for (s in m) a = m[s], null == (l = this[r])[s] && (l[s] = a)
                }
                for (v = t.options, d = 0, h = v.length; h > d; d++) r = v[d], this[r] = null != (g = n[r]) ? g : t.public[r];
                this.build()
            }
            return e.prototype.options = function() {
                var e, i, n, o, s;
                for (i = {}, s = t.extensions.concat(t.options), n = 0, o = s.length; o > n; n++) e = s[n], i[e] = this[e];
                return i
            }, e.prototype.bindingRegExp = function() {
                return new RegExp("^" + this.prefix + "-")
            }, e.prototype.buildBinding = function(e, i, n, o) {
                var s, r, a, l, c, d, u;
                return c = {}, u = function() {
                    var t, e, i, n;
                    for (i = o.split("|"), n = [], t = 0, e = i.length; e > t; t++) d = i[t], n.push(d.trim());
                    return n
                }(), s = function() {
                    var t, e, i, n;
                    for (i = u.shift().split("<"), n = [], t = 0, e = i.length; e > t; t++) r = i[t], n.push(r.trim());
                    return n
                }(), l = s.shift(), c.formatters = u, (a = s.shift()) && (c.dependencies = a.split(/\s+/)), this.bindings.push(new t[e](this, i, n, l, c))
            }, e.prototype.build = function() {
                var e, i, n, o, s;
                for (this.bindings = [], i = function(e) {
                        return function(n) {
                            var o, s, r, a, l, c, d, u, h, p, f, m, v, g;
                            if (3 === n.nodeType) {
                                if (l = t.TextTemplateParser, (r = e.templateDelimiters) && (u = l.parse(n.data, r)).length && (1 !== u.length || u[0].type !== l.types.text)) {
                                    for (h = 0, f = u.length; f > h; h++) d = u[h], c = document.createTextNode(d.value), n.parentNode.insertBefore(c, n), 1 === d.type && e.buildBinding("TextBinding", c, null, d.value);
                                    n.parentNode.removeChild(n)
                                }
                            } else 1 === n.nodeType && (o = e.traverse(n));
                            if (!o) {
                                for (v = function() {
                                        var t, e, i, o;
                                        for (i = n.childNodes, o = [], t = 0, e = i.length; e > t; t++) a = i[t], o.push(a);
                                        return o
                                    }(), g = [], p = 0, m = v.length; m > p; p++) s = v[p], g.push(i(s));
                                return g
                            }
                        }
                    }(this), s = this.els, n = 0, o = s.length; o > n; n++) e = s[n], i(e);
                this.bindings.sort(function(t, e) {
                    var i, n;
                    return ((null != (i = e.binder) ? i.priority : void 0) || 0) - ((null != (n = t.binder) ? n.priority : void 0) || 0)
                })
            }, e.prototype.traverse = function(e) {
                var i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g;
                for (s = this.bindingRegExp(), r = "SCRIPT" === e.nodeName || "STYLE" === e.nodeName, m = e.attributes, u = 0, p = m.length; p > u; u++)
                    if (i = m[u], s.test(i.name)) {
                        if (c = i.name.replace(s, ""), !(o = this.binders[c])) {
                            v = this.binders;
                            for (a in v) d = v[a], "*" !== a && -1 !== a.indexOf("*") && (l = new RegExp("^" + a.replace(/\*/g, ".+") + "$"), l.test(c) && (o = d))
                        }
                        o || (o = this.binders["*"]), o.block && (r = !0, n = [i])
                    }
                for (g = n || e.attributes, h = 0, f = g.length; f > h; h++) i = g[h], s.test(i.name) && (c = i.name.replace(s, ""), this.buildBinding("Binding", e, c, i.value));
                return r || (c = e.nodeName.toLowerCase(), this.components[c] && !e._bound && (this.bindings.push(new t.ComponentBinding(this, e, c)), r = !0)), r
            }, e.prototype.select = function(t) {
                var e, i, n, o, s;
                for (o = this.bindings, s = [], i = 0, n = o.length; n > i; i++) e = o[i], t(e) && s.push(e);
                return s
            }, e.prototype.bind = function() {
                var t, e, i, n, o;
                for (n = this.bindings, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.bind());
                return o
            }, e.prototype.unbind = function() {
                var t, e, i, n, o;
                for (n = this.bindings, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.unbind());
                return o
            }, e.prototype.sync = function() {
                var t, e, i, n, o;
                for (n = this.bindings, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push("function" == typeof t.sync ? t.sync() : void 0);
                return o
            }, e.prototype.publish = function() {
                var t, e, i, n, o;
                for (n = this.select(function(t) {
                        var e;
                        return null != (e = t.binder) ? e.publishes : void 0
                    }), o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.publish());
                return o
            }, e.prototype.update = function(t) {
                var e, i, n, o, s, r, a;
                null == t && (t = {});
                for (i in t) n = t[i], this.models[i] = n;
                for (r = this.bindings, a = [], o = 0, s = r.length; s > o; o++) e = r[o], a.push("function" == typeof e.update ? e.update(t) : void 0);
                return a
            }, e
        }(), t.Binding = function() {
            function e(t, e, i, n, s) {
                this.view = t, this.el = e, this.type = i, this.keypath = n, this.options = null != s ? s : {}, this.getValue = o(this.getValue, this), this.update = o(this.update, this), this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.publish = o(this.publish, this), this.sync = o(this.sync, this), this.set = o(this.set, this), this.eventHandler = o(this.eventHandler, this), this.formattedValue = o(this.formattedValue, this), this.parseTarget = o(this.parseTarget, this), this.observe = o(this.observe, this), this.setBinder = o(this.setBinder, this), this.formatters = this.options.formatters || [], this.dependencies = [], this.formatterObservers = {}, this.model = void 0, this.setBinder()
            }
            return e.prototype.setBinder = function() {
                var t, e, i, n;
                if (!(this.binder = this.view.binders[this.type])) {
                    n = this.view.binders;
                    for (t in n) i = n[t], "*" !== t && -1 !== t.indexOf("*") && (e = new RegExp("^" + t.replace(/\*/g, ".+") + "$"), e.test(this.type) && (this.binder = i, this.args = new RegExp("^" + t.replace(/\*/g, "(.+)") + "$").exec(this.type), this.args.shift()))
                }
                return this.binder || (this.binder = this.view.binders["*"]), this.binder instanceof Function ? this.binder = {
                    routine: this.binder
                } : void 0
            }, e.prototype.observe = function(e, i, n) {
                return t.sightglass(e, i, n, {
                    root: this.view.rootInterface,
                    adapters: this.view.adapters
                })
            }, e.prototype.parseTarget = function() {
                var e;
                return e = t.TypeParser.parse(this.keypath), 0 === e.type ? this.value = e.value : (this.observer = this.observe(this.view.models, this.keypath, this.sync), this.model = this.observer.target)
            }, e.prototype.formattedValue = function(e) {
                var i, n, o, r, a, l, c, d, u, h, p, f, m, v;
                for (v = this.formatters, r = h = 0, f = v.length; f > h; r = ++h) {
                    for (a = v[r], o = a.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g), l = o.shift(), a = this.view.formatters[l], o = function() {
                            var e, i, s;
                            for (s = [], e = 0, i = o.length; i > e; e++) n = o[e], s.push(t.TypeParser.parse(n));
                            return s
                        }(), d = [], i = p = 0, m = o.length; m > p; i = ++p) n = o[i], d.push(0 === n.type ? n.value : ((u = this.formatterObservers)[r] || (u[r] = {}), (c = this.formatterObservers[r][i]) ? void 0 : (c = this.observe(this.view.models, n.value, this.sync), this.formatterObservers[r][i] = c), c.value()));
                    (null != a ? a.read : void 0) instanceof Function ? e = a.read.apply(a, [e].concat(s.call(d))) : a instanceof Function && (e = a.apply(null, [e].concat(s.call(d))))
                }
                return e
            }, e.prototype.eventHandler = function(t) {
                var e, i;
                return i = (e = this).view.handler,
                    function(n) {
                        return i.call(t, this, n, e)
                    }
            }, e.prototype.set = function(t) {
                var e;
                return t = this.formattedValue(t instanceof Function && !this.binder.function ? t.call(this.model) : t), null != (e = this.binder.routine) ? e.call(this, this.el, t) : void 0
            }, e.prototype.sync = function() {
                var t, e;
                return this.set(function() {
                    var i, n, o, s, r, a, l;
                    if (this.observer) {
                        if (this.model !== this.observer.target) {
                            for (r = this.dependencies, i = 0, o = r.length; o > i; i++) e = r[i], e.unobserve();
                            if (this.dependencies = [], null != (this.model = this.observer.target) && (null != (a = this.options.dependencies) ? a.length : void 0))
                                for (l = this.options.dependencies, n = 0, s = l.length; s > n; n++) t = l[n], e = this.observe(this.model, t, this.sync), this.dependencies.push(e)
                        }
                        return this.observer.value()
                    }
                    return this.value
                }.call(this))
            }, e.prototype.publish = function() {
                var t, e, i, n, o, r, a, l, c;
                if (this.observer) {
                    for (n = this.getValue(this.el), a = this.formatters.slice(0).reverse(), o = 0, r = a.length; r > o; o++) e = a[o], t = e.split(/\s+/), i = t.shift(), (null != (l = this.view.formatters[i]) ? l.publish : void 0) && (n = (c = this.view.formatters[i]).publish.apply(c, [n].concat(s.call(t))));
                    return this.observer.setValue(n)
                }
            }, e.prototype.bind = function() {
                var t, e, i, n, o, s, r;
                if (this.parseTarget(), null != (o = this.binder.bind) && o.call(this, this.el), null != this.model && (null != (s = this.options.dependencies) ? s.length : void 0))
                    for (r = this.options.dependencies, i = 0, n = r.length; n > i; i++) t = r[i], e = this.observe(this.model, t, this.sync), this.dependencies.push(e);
                return this.view.preloadData ? this.sync() : void 0
            }, e.prototype.unbind = function() {
                var t, e, i, n, o, s, r, a, l, c;
                for (null != (r = this.binder.unbind) && r.call(this, this.el), null != (a = this.observer) && a.unobserve(), l = this.dependencies, o = 0, s = l.length; s > o; o++) n = l[o], n.unobserve();
                this.dependencies = [], c = this.formatterObservers;
                for (i in c) {
                    e = c[i];
                    for (t in e) n = e[t], n.unobserve()
                }
                return this.formatterObservers = {}
            }, e.prototype.update = function(t) {
                var e, i;
                return null == t && (t = {}), this.model = null != (e = this.observer) ? e.target : void 0, null != (i = this.binder.update) ? i.call(this, t) : void 0
            }, e.prototype.getValue = function(e) {
                return this.binder && null != this.binder.getValue ? this.binder.getValue.call(this, e) : t.Util.getInputValue(e)
            }, e
        }(), t.ComponentBinding = function(e) {
            function i(t, e, i) {
                var n, s, r, a, c, d, u;
                for (this.view = t, this.el = e, this.type = i, this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.locals = o(this.locals, this), this.component = this.view.components[this.type], this.static = {}, this.observers = {}, this.upstreamObservers = {}, s = t.bindingRegExp(), d = this.el.attributes || [], a = 0, c = d.length; c > a; a++) n = d[a], s.test(n.name) || (r = this.camelCase(n.name), l.call(null != (u = this.component.static) ? u : [], r) >= 0 ? this.static[r] = n.value : this.observers[r] = n.value)
            }
            return a(i, e), i.prototype.sync = function() {}, i.prototype.update = function() {}, i.prototype.publish = function() {}, i.prototype.locals = function() {
                var t, e, i, n, o, s;
                i = {}, o = this.static;
                for (t in o) n = o[t], i[t] = n;
                s = this.observers;
                for (t in s) e = s[t], i[t] = e.value();
                return i
            }, i.prototype.camelCase = function(t) {
                return t.replace(/-([a-z])/g, function(t) {
                    return t[1].toUpperCase()
                })
            }, i.prototype.bind = function() {
                var e, i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, b, _, w;
                if (!this.bound) {
                    f = this.observers;
                    for (i in f) n = f[i], this.observers[i] = this.observe(this.view.models, n, function(t) {
                        return function(e) {
                            return function() {
                                return t.componentView.models[e] = t.observers[e].value()
                            }
                        }
                    }(this).call(this, i));
                    this.bound = !0
                }
                if (null != this.componentView) return this.componentView.bind();
                for (this.el.innerHTML = this.component.template.call(this), a = this.component.initialize.call(this, this.el, this.locals()), this.el._bound = !0, r = {}, m = t.extensions, d = 0, h = m.length; h > d; d++) {
                    if (s = m[d], r[s] = {}, this.component[s]) {
                        v = this.component[s];
                        for (e in v) l = v[e], r[s][e] = l
                    }
                    g = this.view[s];
                    for (e in g) l = g[e], null == (c = r[s])[e] && (c[e] = l)
                }
                for (y = t.options, u = 0, p = y.length; p > u; u++) s = y[u], r[s] = null != (b = this.component[s]) ? b : this.view[s];
                this.componentView = new t.View(this.el, a, r), this.componentView.bind(), _ = this.observers, w = [];
                for (i in _) o = _[i], w.push(this.upstreamObservers[i] = this.observe(this.componentView.models, i, function(t) {
                    return function(e, i) {
                        return function() {
                            return i.setValue(t.componentView.models[e])
                        }
                    }
                }(this).call(this, i, o)));
                return w
            }, i.prototype.unbind = function() {
                var t, e, i, n, o;
                i = this.upstreamObservers;
                for (t in i) e = i[t], e.unobserve();
                n = this.observers;
                for (t in n) e = n[t], e.unobserve();
                return null != (o = this.componentView) ? o.unbind.call(this) : void 0
            }, i
        }(t.Binding), t.TextBinding = function(t) {
            function e(t, e, i, n, s) {
                this.view = t, this.el = e, this.type = i, this.keypath = n, this.options = null != s ? s : {}, this.sync = o(this.sync, this), this.formatters = this.options.formatters || [], this.dependencies = [], this.formatterObservers = {}
            }
            return a(e, t), e.prototype.binder = {
                routine: function(t, e) {
                    return t.data = null != e ? e : ""
                }
            }, e.prototype.sync = function() {
                return e.__super__.sync.apply(this, arguments)
            }, e
        }(t.Binding), t.public.binders.text = function(t, e) {
            return null != t.textContent ? t.textContent = null != e ? e : "" : t.innerText = null != e ? e : ""
        }, t.public.binders.html = function(t, e) {
            return t.innerHTML = null != e ? e : ""
        }, t.public.binders.show = function(t, e) {
            return t.style.display = e ? "" : "none"
        }, t.public.binders.hide = function(t, e) {
            return t.style.display = e ? "none" : ""
        }, t.public.binders.enabled = function(t, e) {
            return t.disabled = !e
        }, t.public.binders.disabled = function(t, e) {
            return t.disabled = !!e
        }, t.public.binders.checked = {
            publishes: !0,
            priority: 2e3,
            bind: function(e) {
                return t.Util.bindEvent(e, "change", this.publish)
            },
            unbind: function(e) {
                return t.Util.unbindEvent(e, "change", this.publish)
            },
            routine: function(t, e) {
                var i;
                return t.checked = "radio" === t.type ? (null != (i = t.value) ? i.toString() : void 0) === (null != e ? e.toString() : void 0) : !!e
            }
        }, t.public.binders.unchecked = {
            publishes: !0,
            priority: 2e3,
            bind: function(e) {
                return t.Util.bindEvent(e, "change", this.publish)
            },
            unbind: function(e) {
                return t.Util.unbindEvent(e, "change", this.publish)
            },
            routine: function(t, e) {
                var i;
                return t.checked = "radio" === t.type ? (null != (i = t.value) ? i.toString() : void 0) !== (null != e ? e.toString() : void 0) : !e
            }
        }, t.public.binders.value = {
            publishes: !0,
            priority: 3e3,
            bind: function(e) {
                return "INPUT" !== e.tagName || "radio" !== e.type ? (this.event = "SELECT" === e.tagName ? "change" : "input", t.Util.bindEvent(e, this.event, this.publish)) : void 0
            },
            unbind: function(e) {
                return "INPUT" !== e.tagName || "radio" !== e.type ? t.Util.unbindEvent(e, this.event, this.publish) : void 0
            },
            routine: function(t, e) {
                var i, n, o, s, r, a, c;
                if ("INPUT" === t.tagName && "radio" === t.type) return t.setAttribute("value", e);
                if (null != window.jQuery) {
                    if (t = jQuery(t), (null != e ? e.toString() : void 0) !== (null != (s = t.val()) ? s.toString() : void 0)) return t.val(null != e ? e : "")
                } else if ("select-multiple" === t.type) {
                    if (null != e) {
                        for (c = [], n = 0, o = t.length; o > n; n++) i = t[n], c.push(i.selected = (r = i.value, l.call(e, r) >= 0));
                        return c
                    }
                } else if ((null != e ? e.toString() : void 0) !== (null != (a = t.value) ? a.toString() : void 0)) return t.value = null != e ? e : ""
            }
        }, t.public.binders.if = {
            block: !0,
            priority: 4e3,
            bind: function(t) {
                var e, i;
                return null == this.marker ? (e = [this.view.prefix, this.type].join("-").replace("--", "-"), i = t.getAttribute(e), this.marker = document.createComment(" rivets: " + this.type + " " + i + " "), this.bound = !1, t.removeAttribute(e), t.parentNode.insertBefore(this.marker, t), t.parentNode.removeChild(t)) : void 0
            },
            unbind: function() {
                var t;
                return null != (t = this.nested) ? t.unbind() : void 0
            },
            routine: function(e, i) {
                var n, o, s, r;
                if (!!i == !this.bound) {
                    if (i) {
                        s = {}, r = this.view.models;
                        for (n in r) o = r[n], s[n] = o;
                        return (this.nested || (this.nested = new t.View(e, s, this.view.options()))).bind(), this.marker.parentNode.insertBefore(e, this.marker.nextSibling), this.bound = !0
                    }
                    return e.parentNode.removeChild(e), this.nested.unbind(), this.bound = !1
                }
            },
            update: function(t) {
                var e;
                return null != (e = this.nested) ? e.update(t) : void 0
            }
        }, t.public.binders.unless = {
            block: !0,
            priority: 4e3,
            bind: function(e) {
                return t.public.binders.if.bind.call(this, e)
            },
            unbind: function() {
                return t.public.binders.if.unbind.call(this)
            },
            routine: function(e, i) {
                return t.public.binders.if.routine.call(this, e, !i)
            },
            update: function(e) {
                return t.public.binders.if.update.call(this, e)
            }
        }, t.public.binders["on-*"] = {
            function: !0,
            priority: 1e3,
            unbind: function(e) {
                return this.handler ? t.Util.unbindEvent(e, this.args[0], this.handler) : void 0
            },
            routine: function(e, i) {
                return this.handler && t.Util.unbindEvent(e, this.args[0], this.handler), t.Util.bindEvent(e, this.args[0], this.handler = this.eventHandler(i))
            }
        }, t.public.binders["each-*"] = {
            block: !0,
            priority: 4e3,
            bind: function(t) {
                var e, i, n, o, s;
                if (null == this.marker) e = [this.view.prefix, this.type].join("-").replace("--", "-"), this.marker = document.createComment(" rivets: " + this.type + " "), this.iterated = [], t.removeAttribute(e), t.parentNode.insertBefore(this.marker, t), t.parentNode.removeChild(t);
                else
                    for (s = this.iterated, n = 0, o = s.length; o > n; n++) i = s[n], i.bind()
            },
            unbind: function() {
                var t, e, i, n, o;
                if (null != this.iterated) {
                    for (n = this.iterated, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.unbind());
                    return o
                }
            },
            routine: function(e, i) {
                var n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, b, _, w, k, C;
                if (c = this.args[0], i = i || [], this.iterated.length > i.length)
                    for (_ = Array(this.iterated.length - i.length), f = 0, g = _.length; g > f; f++) s = _[f], p = this.iterated.pop(), p.unbind(), this.marker.parentNode.removeChild(p.els[0]);
                for (r = m = 0, y = i.length; y > m; r = ++m)
                    if (l = i[r], o = {
                            index: r
                        }, o[c] = l, null == this.iterated[r]) {
                        w = this.view.models;
                        for (a in w) l = w[a], null == o[a] && (o[a] = l);
                        u = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker, d = this.view.options(), d.preloadData = !0, h = e.cloneNode(!0), p = new t.View(h, o, d), p.bind(), this.iterated.push(p), this.marker.parentNode.insertBefore(h, u.nextSibling)
                    } else this.iterated[r].models[c] !== l && this.iterated[r].update(o);
                if ("OPTION" === e.nodeName) {
                    for (k = this.view.bindings, C = [], v = 0, b = k.length; b > v; v++) n = k[v], C.push(n.el === this.marker.parentNode && "value" === n.type ? n.sync() : void 0);
                    return C
                }
            },
            update: function(t) {
                var e, i, n, o, s, r, a, l;
                e = {};
                for (i in t) n = t[i], i !== this.args[0] && (e[i] = n);
                for (a = this.iterated, l = [], s = 0, r = a.length; r > s; s++) o = a[s], l.push(o.update(e));
                return l
            }
        }, t.public.binders["class-*"] = function(t, e) {
            var i;
            return i = " " + t.className + " ", !e == (-1 !== i.indexOf(" " + this.args[0] + " ")) ? t.className = e ? "" + t.className + " " + this.args[0] : i.replace(" " + this.args[0] + " ", " ").trim() : void 0
        }, t.public.binders["*"] = function(t, e) {
            return null != e ? t.setAttribute(this.type, e) : t.removeAttribute(this.type)
        }, t.public.adapters["."] = {
            id: "_rv",
            counter: 0,
            weakmap: {},
            weakReference: function(t) {
                var e, i, n;
                return t.hasOwnProperty(this.id) || (e = this.counter++, Object.defineProperty(t, this.id, {
                    value: e
                })), (i = this.weakmap)[n = t[this.id]] || (i[n] = {
                    callbacks: {}
                })
            },
            cleanupWeakReference: function(t, e) {
                return Object.keys(t.callbacks).length || t.pointers && Object.keys(t.pointers).length ? void 0 : delete this.weakmap[e]
            },
            stubFunction: function(t, e) {
                var i, n, o;
                return n = t[e], i = this.weakReference(t), o = this.weakmap, t[e] = function() {
                    var e, s, r, a, l, c, d, u, h, p;
                    a = n.apply(t, arguments), d = i.pointers;
                    for (r in d)
                        for (s = d[r], p = null != (u = null != (h = o[r]) ? h.callbacks[s] : void 0) ? u : [], l = 0, c = p.length; c > l; l++)(e = p[l])();
                    return a
                }
            },
            observeMutations: function(t, e, i) {
                var n, o, s, r, a, c;
                if (Array.isArray(t)) {
                    if (s = this.weakReference(t), null == s.pointers)
                        for (s.pointers = {}, o = ["push", "pop", "shift", "unshift", "sort", "reverse", "splice"], a = 0, c = o.length; c > a; a++) n = o[a], this.stubFunction(t, n);
                    if (null == (r = s.pointers)[e] && (r[e] = []), l.call(s.pointers[e], i) < 0) return s.pointers[e].push(i)
                }
            },
            unobserveMutations: function(t, e, i) {
                var n, o, s;
                return Array.isArray(t) && null != t[this.id] && (o = this.weakmap[t[this.id]]) && (s = o.pointers[e]) ? ((n = s.indexOf(i)) >= 0 && s.splice(n, 1), s.length || delete o.pointers[e], this.cleanupWeakReference(o, t[this.id])) : void 0
            },
            observe: function(t, e, i) {
                var n, o, s;
                return n = this.weakReference(t).callbacks, null == n[e] && (n[e] = [], o = Object.getOwnPropertyDescriptor(t, e), (null != o ? o.get : void 0) || (null != o ? o.set : void 0) || (s = t[e], Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(o) {
                        return function(r) {
                            var a, c, d, u;
                            if (r !== s && (o.unobserveMutations(s, t[o.id], e), s = r, a = o.weakmap[t[o.id]])) {
                                if (n = a.callbacks, n[e])
                                    for (u = n[e].slice(), c = 0, d = u.length; d > c; c++) i = u[c], l.call(n[e], i) >= 0 && i();
                                return o.observeMutations(r, t[o.id], e)
                            }
                        }
                    }(this)
                }))), l.call(n[e], i) < 0 && n[e].push(i), this.observeMutations(t[e], t[this.id], e)
            },
            unobserve: function(t, e, i) {
                var n, o, s;
                return (s = this.weakmap[t[this.id]]) && (n = s.callbacks[e]) ? ((o = n.indexOf(i)) >= 0 && (n.splice(o, 1), n.length || delete s.callbacks[e]), this.unobserveMutations(t[e], t[this.id], e), this.cleanupWeakReference(s, t[this.id])) : void 0
            },
            get: function(t, e) {
                return t[e]
            },
            set: function(t, e, i) {
                return t[e] = i
            }
        }, t.factory = function(e) {
            return t.sightglass = e, t.public._ = t, t.public
        }, "object" == typeof("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = t.factory(require("sightglass")) : "function" == typeof define && define.amd ? define(["sightglass"], function(e) {
            return this.rivets = t.factory(e)
        }) : this.rivets = t.factory(sightglass)
    }.call(this),
    function() {
        var t, e, i, n, o, s, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        e = function() {
            function t() {
                this.update = r(this.update, this)
            }
            return t.prototype.update = function(t) {
                var e, i, o;
                for (i in t) o = t[i], "items" !== i && (this[i] = o);
                return this.items = function() {
                    var i, o, s, r;
                    for (s = t.items, r = [], i = 0, o = s.length; o > i; i++) e = s[i], r.push(new n(e));
                    return r
                }()
            }, t
        }(), n = function() {
            function t(t) {
                this.propertyArray = r(this.propertyArray, this), this.update = r(this.update, this), this.update(t)
            }
            return t.prototype.update = function(t) {
                var e, n;
                for (e in t) n = t[e], "properties" !== e && (this[e] = n);
                return this.properties = i.Utils.extend({}, t.properties)
            }, t.prototype.propertyArray = function() {
                var t, e, i, n;
                i = this.properties, n = [];
                for (t in i) e = i[t], n.push({
                    name: t,
                    value: e
                });
                return n
            }, t
        }(), i = {
            settings: {
                debug: !1,
                dataAPI: !0,
                requestBodyClass: null,
                rivetsModels: {},
                currency: null,
                moneyFormat: null,
                moneyWithCurrencyFormat: null,
                weightUnit: "g",
                weightPrecision: 0
            },
            cart: new e
        }, i.init = function(t, e) {
            return null == e && (e = {}), i.configure(e), i.Utils.log("Initialising CartJS."), i.cart.update(t), i.settings.dataAPI && (i.Utils.log('"dataAPI" setting is true, initialising Data API.'), i.Data.init()), i.settings.requestBodyClass && (i.Utils.log('"requestBodyClass" set, adding event listeners.'), jQuery(document).on("cart.requestStarted", function() {
                return jQuery("body").addClass(i.settings.requestBodyClass)
            }), jQuery(document).on("cart.requestComplete", function() {
                return jQuery("body").removeClass(i.settings.requestBodyClass)
            })), i.Rivets.init(), jQuery(document).trigger("cart.ready", [i.cart])
        }, i.configure = function(t) {
            return null == t && (t = {}), i.Utils.extend(i.settings, t)
        }, null == window.console && (window.console = {}, window.console.log = function() {}), i.Utils = {
            log: function() {
                return i.Utils.console(console.log, arguments)
            },
            error: function() {
                return i.Utils.console(console.error, arguments)
            },
            console: function(t, e) {
                return i.settings.debug && "undefined" != typeof console && null !== console ? (e = Array.prototype.slice.call(e), e.unshift("[CartJS]:"), t.apply(console, e)) : void 0
            },
            wrapKeys: function(t, e, i) {
                var n, o, s;
                null == e && (e = "properties"), s = {};
                for (n in t) o = t[n], s["" + e + "[" + n + "]"] = null != i ? i : o;
                return s
            },
            unwrapKeys: function(t, e, i) {
                var n, o, s, r;
                null == e && (e = "properties"), o = {};
                for (n in t) r = t[n], s = n.replace("" + e + "[", "").replace("]", ""), o[s] = null != i ? i : r;
                return o
            },
            extend: function(t, e) {
                var i, n;
                for (i in e) n = e[i], t[i] = n;
                return t
            },
            clone: function(t) {
                var e, i;
                if (null == t || "object" != typeof t) return t;
                i = new t.constructor;
                for (e in t) i[e] = clone(t[e]);
                return i
            },
            isArray: Array.isArray || function(t) {
                return "[object Array]" === {}.toString.call(t)
            },
            ensureArray: function(t) {
                return i.Utils.isArray(t) ? t : null != t ? [t] : []
            },
            formatMoney: function(t, e, n, o) {
                var s, r;
                return null == o && (o = ""), o || (o = i.settings.currency), null != window.Currency && o !== i.settings.currency && (t = Currency.convert(t, i.settings.currency, o), null != (null != (s = window.Currency) ? s.moneyFormats : void 0) && o in window.Currency.moneyFormats && (e = window.Currency.moneyFormats[o][n])), null != (null != (r = window.Shopify) ? r.formatMoney : void 0) ? Shopify.formatMoney(t, e) : t
            },
            getSizedImageUrl: function(t, e) {
                var i, n;
                return null != (null != (i = window.Shopify) && null != (n = i.Image) ? n.getSizedImageUrl : void 0) ? t ? Shopify.Image.getSizedImageUrl(t, e) : Shopify.Image.getSizedImageUrl("https://cdn.shopify.com/s/images/admin/no-image-.gif", e).replace("-_", "-") : t ? t : "https://cdn.shopify.com/s/images/admin/no-image-large.gif"
            }
        }, s = [], o = !1, i.Queue = {
            add: function(t, e, n) {
                var r;
                return null == n && (n = {}), r = {
                    url: t,
                    data: e,
                    type: n.type || "POST",
                    dataType: n.dataType || "json",
                    success: i.Utils.ensureArray(n.success),
                    error: i.Utils.ensureArray(n.error),
                    complete: i.Utils.ensureArray(n.complete)
                }, n.updateCart && r.success.push(i.cart.update), s.push(r), o ? void 0 : (jQuery(document).trigger("cart.requestStarted", [i.cart]), i.Queue.process())
            },
            process: function() {
                var t;
                return s.length ? (o = !0, t = s.shift(), t.complete = i.Queue.process, jQuery.ajax(t)) : (o = !1, void jQuery(document).trigger("cart.requestComplete", [i.cart]))
            }
        }, i.Core = {
            getCart: function(t) {
                return null == t && (t = {}), t.type = "GET", t.updateCart = !0, i.Queue.add("/cart.js", {}, t)
            },
            addItem: function(t, e, n, o) {
                var s;
                return null == e && (e = 1), null == n && (n = {}), null == o && (o = {}), s = i.Utils.wrapKeys(n), s.id = t, s.quantity = e, i.Queue.add("/cart/add.js", s, o), i.Core.getCart()
            },
            updateItem: function(t, e, n, o) {
                var s;
                return null == n && (n = {}), null == o && (o = {}), s = i.Utils.wrapKeys(n), s.line = t, null != e && (s.quantity = e), o.updateCart = !0, i.Queue.add("/cart/change.js", s, o)
            },
            removeItem: function(t, e) {
                return null == e && (e = {}), i.Core.updateItem(t, 0, {}, e)
            },
            updateItemById: function(t, e, n, o) {
                var s;
                return null == n && (n = {}), null == o && (o = {}), s = i.Utils.wrapKeys(n), s.id = t, null != e && (s.quantity = e), o.updateCart = !0, i.Queue.add("/cart/change.js", s, o)
            },
            updateItemQuantitiesById: function(t, e) {
                return null == t && (t = {}), null == e && (e = {}), e.updateCart = !0, i.Queue.add("/cart/update.js", {
                    updates: t
                }, e)
            },
            removeItemById: function(t, e) {
                var n;
                return null == e && (e = {}), n = {
                    id: t,
                    quantity: 0
                }, e.updateCart = !0, i.Queue.add("/cart/change.js", n, e)
            },
            clear: function(t) {
                return null == t && (t = {}), t.updateCart = !0, i.Queue.add("/cart/clear.js", {}, t)
            },
            getAttribute: function(t, e) {
                return t in i.cart.attributes ? i.cart.attributes[t] : e
            },
            setAttribute: function(t, e, n) {
                var o;
                return null == n && (n = {}), o = {}, o[t] = e, i.Core.setAttributes(o, n)
            },
            getAttributes: function() {
                return i.cart.attributes
            },
            setAttributes: function(t, e) {
                return null == t && (t = {}), null == e && (e = {}), e.updateCart = !0, i.Queue.add("/cart/update.js", i.Utils.wrapKeys(t, "attributes"), e)
            },
            clearAttributes: function(t) {
                return null == t && (t = {}), t.updateCart = !0, i.Queue.add("/cart/update.js", i.Utils.wrapKeys(i.Core.getAttributes(), "attributes", ""), t)
            },
            getNote: function() {
                return i.cart.note
            },
            setNote: function(t, e) {
                return null == e && (e = {}), e.updateCart = !0, i.Queue.add("/cart/update.js", {
                    note: t
                }, e)
            }
        }, t = null, i.Data = {
            init: function() {
                return t = jQuery(document), i.Data.setEventListeners("on"), i.Data.render(null, i.cart)
            },
            destroy: function() {
                return i.Data.setEventListeners("off")
            },
            setEventListeners: function(e) {
                return t[e]("click", "[data-cart-add]", i.Data.add), t[e]("click", "[data-cart-remove]", i.Data.remove), t[e]("click", "[data-cart-remove-id]", i.Data.removeById), t[e]("click", "[data-cart-update]", i.Data.update), t[e]("click", "[data-cart-update-id]", i.Data.updateById), t[e]("click", "[data-cart-clear]", i.Data.clear), t[e]("change", "[data-cart-toggle]", i.Data.toggle), t[e]("change", "[data-cart-toggle-attribute]", i.Data.toggleAttribute), t[e]("submit", "[data-cart-submit]", i.Data.submit), t[e]("cart.requestComplete", i.Data.render)
            },
            add: function(t) {
                var e;
                return t.preventDefault(), e = jQuery(this), i.Core.addItem(e.attr("data-cart-add"), e.attr("data-cart-quantity"))
            },
            remove: function(t) {
                var e;
                return t.preventDefault(), e = jQuery(this), i.Core.removeItem(e.attr("data-cart-remove"))
            },
            removeById: function(t) {
                var e;
                return t.preventDefault(), e = jQuery(this), i.Core.removeItemById(e.attr("data-cart-remove-id"))
            },
            update: function(t) {
                var e;
                return t.preventDefault(), e = jQuery(this), i.Core.updateItem(e.attr("data-cart-update"), e.attr("data-cart-quantity"))
            },
            updateById: function(t) {
                var e;
                return t.preventDefault(), e = jQuery(this), i.Core.updateItemById(e.attr("data-cart-update-id"), e.attr("data-cart-quantity"))
            },
            clear: function(t) {
                return t.preventDefault(), i.Core.clear()
            },
            toggle: function() {
                var t, e;
                return t = jQuery(this), e = t.attr("data-cart-toggle"), t.is(":checked") ? i.Core.addItem(e) : i.Core.removeItemById(e)
            },
            toggleAttribute: function() {
                var t, e;
                return t = jQuery(this), e = t.attr("data-cart-toggle-attribute"),
                    i.Core.setAttribute(e, t.is(":checked") ? "Yes" : "")
            },
            submit: function(t) {
                var e, n, o, s;
                return t.preventDefault(), e = jQuery(this).serializeArray(), n = void 0, s = void 0, o = {}, jQuery.each(e, function(t, e) {
                    return "id" === e.name ? n = e.value : "quantity" === e.name ? s = e.value : e.name.match(/^properties\[\w+\]$/) ? o[e.name] = e.value : void 0
                }), i.Core.addItem(n, s, i.Utils.unwrapKeys(o))
            },
            render: function(t, e) {
                var n;
                return n = {
                    item_count: e.item_count,
                    total_price: e.total_price,
                    total_price_money: i.Utils.formatMoney(e.total_price, i.settings.moneyFormat, "money_format", null != ("undefined" != typeof Currency && null !== Currency ? Currency.currentCurrency : void 0) ? Currency.currentCurrency : void 0),
                    total_price_money_with_currency: i.Utils.formatMoney(e.total_price, i.settings.moneyWithCurrencyFormat, "money_with_currency_format", null != ("undefined" != typeof Currency && null !== Currency ? Currency.currentCurrency : void 0) ? Currency.currentCurrency : void 0)
                }, jQuery("[data-cart-render]").each(function() {
                    var t;
                    return t = jQuery(this), t.html(n[t.attr("data-cart-render")])
                })
            }
        }, "rivets" in window ? (i.Rivets = {
            model: null,
            boundViews: [],
            init: function() {
                return i.Rivets.bindViews()
            },
            destroy: function() {
                return i.Rivets.unbindViews()
            },
            bindViews: function() {
                return i.Utils.log("Rivets.js is present, binding views."), i.Rivets.unbindViews(), i.Rivets.model = i.Utils.extend({
                    cart: i.cart
                }, i.settings.rivetsModels), null != window.Currency && (i.Rivets.model.Currency = window.Currency), jQuery("[data-cart-view]").each(function() {
                    var t;
                    return t = rivets.bind(jQuery(this), i.Rivets.model), i.Rivets.boundViews.push(t)
                })
            },
            unbindViews: function() {
                var t, e, n, o;
                for (o = i.Rivets.boundViews, e = 0, n = o.length; n > e; e++) t = o[e], t.unbind();
                return i.Rivets.boundViews = []
            }
        }, rivets.formatters.eq = function(t, e) {
            return t === e
        }, rivets.formatters.includes = function(t, e) {
            return t.indexOf(e) >= 0
        }, rivets.formatters.match = function(t, e, i) {
            return t.match(new RegExp(e, i))
        }, rivets.formatters.lt = function(t, e) {
            return e > t
        }, rivets.formatters.gt = function(t, e) {
            return t > e
        }, rivets.formatters.not = function(t) {
            return !t
        }, rivets.formatters.empty = function(t) {
            return !t.length
        }, rivets.formatters.plus = function(t, e) {
            return parseInt(t) + parseInt(e)
        }, rivets.formatters.minus = function(t, e) {
            return parseInt(t) - parseInt(e)
        }, rivets.formatters.times = function(t, e) {
            return t * e
        }, rivets.formatters.divided_by = function(t, e) {
            return t / e
        }, rivets.formatters.modulo = function(t, e) {
            return t % e
        }, rivets.formatters.prepend = function(t, e) {
            return e + t
        }, rivets.formatters.append = function(t, e) {
            return t + e
        }, rivets.formatters.slice = function(t, e, i) {
            return t.slice(e, i)
        }, rivets.formatters.pluralize = function(t, e, n) {
            return null == n && (n = e + "s"), i.Utils.isArray(t) && (t = t.length), 1 === t ? e : n
        }, rivets.formatters.array_element = function(t, e) {
            return t[e]
        }, rivets.formatters.array_first = function(t) {
            return t[0]
        }, rivets.formatters.array_last = function(t) {
            return t[t.length - 1]
        }, rivets.formatters.money = function(t, e) {
            return i.Utils.formatMoney(t, i.settings.moneyFormat, "money_format", e)
        }, rivets.formatters.money_with_currency = function(t, e) {
            return i.Utils.formatMoney(t, i.settings.moneyWithCurrencyFormat, "money_with_currency_format", e)
        }, rivets.formatters.weight = function(t) {
            switch (i.settings.weightUnit) {
                case "kg":
                    return (t / 1e3).toFixed(i.settings.weightPrecision);
                case "oz":
                    return (.035274 * t).toFixed(i.settings.weightPrecision);
                case "lb":
                    return (.00220462 * t).toFixed(i.settings.weightPrecision);
                default:
                    return t.toFixed(i.settings.weightPrecision)
            }
        }, rivets.formatters.weight_with_unit = function(t) {
            return rivets.formatters.weight(t) + i.settings.weightUnit
        }, rivets.formatters.product_image_size = function(t, e) {
            return i.Utils.getSizedImageUrl(t, e)
        }, rivets.formatters.moneyWithCurrency = rivets.formatters.money_with_currency, rivets.formatters.weightWithUnit = rivets.formatters.weight_with_unit, rivets.formatters.productImageSize = rivets.formatters.product_image_size) : i.Rivets = {
            init: function() {},
            destroy: function() {}
        }, i.factory = function(t) {
            return t.init = i.init, t.configure = i.configure, t.cart = i.cart, t.settings = i.settings, t.getCart = i.Core.getCart, t.addItem = i.Core.addItem, t.updateItem = i.Core.updateItem, t.updateItemById = i.Core.updateItemById, t.updateItemQuantitiesById = i.Core.updateItemQuantitiesById, t.removeItem = i.Core.removeItem, t.removeItemById = i.Core.removeItemById, t.clear = i.Core.clear, t.getAttribute = i.Core.getAttribute, t.setAttribute = i.Core.setAttribute, t.getAttributes = i.Core.getAttributes, t.setAttributes = i.Core.setAttributes, t.clearAttributes = i.Core.clearAttributes, t.getNote = i.Core.getNote, t.setNote = i.Core.setNote, t.render = i.Data.render
        }, "object" == typeof exports ? i.factory(exports) : "function" == typeof define && define.amd ? define(["exports"], function(t) {
            return i.factory(this.CartJS = t), t
        }) : i.factory(this.CartJS = {})
    }.call(this),
    /*!
     * slick.min.js
     */
    ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(i, n) {
                var o, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(i),
                    appendDots: t(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(i).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (!0 === n.options.dots) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = t * r + (e * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, o, s, r = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i;
            if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                if (t.slideCount <= t.options.slidesToShow) ++n;
                else
                    for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, o, s = this,
                r = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                o = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
                if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft) return e = s, !1
            }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this,
                i = Math.ceil(e.slideCount / e.options.slidesToShow),
                n = e.getNavigableIndexes().filter(function(t) {
                    return t >= 0 && t < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                var o = n.indexOf(i);
                t(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + i,
                    tabindex: -1
                }), -1 !== o && t(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + o
                })
            }), e.$dots.attr("role", "tablist").find("li").each(function(o) {
                var s = n[o];
                t(this).attr({
                    role: "presentation"
                }), t(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + o,
                    "aria-controls": "slick-slide" + e.instanceUid + s,
                    "aria-label": o + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++) e.$slides.eq(o).attr("tabindex", 0);
            e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = t(this).attr("data-srcset"),
                        o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, i])
                        })
                    }, r.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                    }, r.src = i
                })
            }
            var i, n, o, s = this;
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad)
                for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
            e(i), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, o, s, r, a = this,
                l = t("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
            }, r.onerror = function() {
                e < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
            }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
        }, e.prototype.refresh = function(e) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), e || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === t.type(s) && s.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in s)
                    if (n = o.breakpoints.length - 1, s.hasOwnProperty(e)) {
                        for (i = s[e].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
                    }
                o.breakpoints.sort(function(t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit(), void 0)
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                o = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, o) {
                e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, o, s, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
            else if ("multiple" === s) t.each(n, function(t, e) {
                r.options[t] = e
            });
            else if ("responsive" === s)
                for (i in o)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(o[i])
                    }
            a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform",
                t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, o, s = this;
            if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode) {
                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")
            } else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, o, s, r, a, l = null,
                c = this;
            if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
                if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, e.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
            if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, o, s, r, a = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0, void 0)
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                o = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (t = 0; t < r; t++)
                if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), void 0 !== i) return i;
            return n
        }
    }), ! function(t) {
        t.fn.slickAnimation = function() {
            function e(t, e, i, n, o) {
                o = "undefined" != typeof o && o, 1 == e.opacity ? (t.addClass(i), t.addClass(n)) : (t.removeClass(i), t.removeClass(n)), o && t.css(e)
            }

            function i(t, e) {
                return t ? 1e3 * t + 1e3 : e ? 1e3 * e : t || e ? 1e3 * t + 1e3 * e : 1e3
            }

            function n(t, e, i) {
                var n = ["animation-" + e, "-webkit-animation-" + e, "-moz-animation-" + e, "-o-animation-" + e, "-ms-animation-" + e],
                    o = {};
                n.forEach(function(t) {
                    o[t] = i + "s"
                }), t.css(o)
            }
            var o = t(this),
                s = o.find(".slick-list .slick-track > div"),
                r = o.find('[data-slick-index="0"]'),
                a = "animated",
                l = {
                    opacity: "1"
                },
                c = {
                    opacity: "0"
                };
            return s.each(function() {
                var s = t(this);
                s.find("[data-animation-in]").each(function() {
                    var d = t(this);
                    d.css(c);
                    var u = d.attr("data-animation-in"),
                        h = d.attr("data-animation-out"),
                        p = d.attr("data-delay-in"),
                        f = d.attr("data-duration-in"),
                        m = d.attr("data-delay-out"),
                        v = d.attr("data-duration-out");
                    h ? (r.length > 0 && s.hasClass("slick-current") && (e(d, l, u, a, !0), p && n(d, "delay", p), f && n(d, "duration", f), setTimeout(function() {
                        e(d, c, u, a), e(d, l, h, a), m && n(d, "delay", m), v && n(d, "duration", v)
                    }, i(p, f))), o.on("afterChange", function(t, o, r) {
                        s.hasClass("slick-current") && (e(d, l, u, a, !0), p && n(d, "delay", p), f && n(d, "duration", f), setTimeout(function() {
                            e(d, c, u, a), e(d, l, h, a), m && n(d, "delay", m), v && n(d, "duration", v)
                        }, i(p, f)))
                    }), o.on("beforeChange", function(t, i, n) {
                        e(d, c, h, a, !0)
                    })) : (r.length > 0 && s.hasClass("slick-current") && (e(d, l, u, a, !0), p && n(d, "delay", p), f && n(d, "duration", f)), o.on("afterChange", function(t, i, o) {
                        s.hasClass("slick-current") && (e(d, l, u, a, !0), p && n(d, "delay", p), f && n(d, "duration", f))
                    }), o.on("beforeChange", function(t, i, n) {
                        e(d, c, u, a, !0)
                    }))
                })
            }), this
        }
    }(jQuery),
    /*!
     * veno.min.js
     */
    /*
     * VenoBox - jQuery Plugin
     * version: 1.8.3
     * @requires jQuery >= 1.7.0
     *
     * Examples at http://veno.es/venobox/
     * License: MIT License
     * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
     * Copyright 2013-2017 Nicola Franchini - @nicolafranchini
     *
     */
    ! function(t) {
        "use strict";
        var e, i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, b, _, w, k, C, T, E, x, S, A, I, D, O, N, P, j, L, M, $, H, z, U, R;
        t.fn.extend({
            venobox: function(B) {
                var F = this,
                    W = t.extend({
                        arrowsColor: "#B6B6B6",
                        autoplay: !1,
                        bgcolor: "#fff",
                        border: "0",
                        closeBackground: "#161617",
                        closeColor: "#d2d2d2",
                        framewidth: "",
                        frameheight: "",
                        gallItems: !1,
                        infinigall: !1,
                        htmlClose: "&times;",
                        htmlNext: "<span>Next</span>",
                        htmlPrev: "<span>Prev</span>",
                        numeratio: !1,
                        numerationBackground: "#161617",
                        numerationColor: "#d2d2d2",
                        numerationPosition: "top",
                        overlayClose: !0,
                        overlayColor: "rgba(23,23,23,0.85)",
                        spinner: "double-bounce",
                        spinColor: "#d2d2d2",
                        titleattr: "title",
                        titleBackground: "#161617",
                        titleColor: "#d2d2d2",
                        titlePosition: "top",
                        cb_pre_open: function() {
                            return !0
                        },
                        cb_post_open: function() {},
                        cb_pre_close: function() {
                            return !0
                        },
                        cb_post_close: function() {},
                        cb_post_resize: function() {},
                        cb_after_nav: function() {},
                        cb_init: function() {}
                    }, B);
                return W.cb_init(F), this.each(function() {
                    function B() {
                        w = I.data("gall"), g = I.data("numeratio"), h = I.data("gallItems"), p = I.data("infinigall"), f = h || t('.vbox-item[data-gall="' + w + '"]'), k = f.eq(f.index(I) + 1), C = f.eq(f.index(I) - 1), k.length || !0 !== p || (k = f.eq(0)), f.length > 1 ? (D = f.index(I) + 1, n.html(D + " / " + f.length)) : D = 1, !0 === g ? n.show() : n.hide(), "" !== _ ? o.show() : o.hide(), k.length || !0 === p ? (t(".vbox-next").css("display", "block"), T = !0) : (t(".vbox-next").css("display", "none"), T = !1), f.index(I) > 0 || !0 === p ? (t(".vbox-prev").css("display", "block"), E = !0) : (t(".vbox-prev").css("display", "none"), E = !1), !0 !== E && !0 !== T || (a.on(st.DOWN, K), a.on(st.MOVE, Y), a.on(st.UP, G))
                    }

                    function V(t) {
                        return !(t.length < 1) && !m && (m = !0, y = t.data("overlay") || t.data("overlaycolor"), d = t.data("framewidth"), u = t.data("frameheight"), s = t.data("border"), i = t.data("bgcolor"), l = t.data("href") || t.attr("href"), e = t.data("autoplay"), _ = t.attr(t.data("titleattr")) || "", t === C && a.addClass("animated").addClass("swipe-right"), t === k && a.addClass("animated").addClass("swipe-left"), S.show(), void a.animate({
                            opacity: 0
                        }, 500, function() {
                            b.css("background", y), a.removeClass("animated").removeClass("swipe-left").removeClass("swipe-right").css({
                                "margin-left": 0,
                                "margin-right": 0
                            }), "iframe" == t.data("vbtype") ? J() : "inline" == t.data("vbtype") ? tt() : "ajax" == t.data("vbtype") ? X() : "video" == t.data("vbtype") ? Z(e) : (a.html('<img src="' + l + '">'), et()), I = t, B(), m = !1, W.cb_after_nav(I, D, k, C)
                        }))
                    }

                    function q(t) {
                        27 === t.keyCode && Q(), 37 == t.keyCode && !0 === E && V(C), 39 == t.keyCode && !0 === T && V(k)
                    }

                    function Q() {
                        return !1 !== W.cb_pre_close(I, D, k, C) && (t("body").off("keydown", q).removeClass("vbox-open"), I.focus(), b.animate({
                            opacity: 0
                        }, 500, function() {
                            b.remove(), m = !1, W.cb_post_close()
                        }), void 0)
                    }

                    function K(t) {
                        a.addClass("animated"), j = M = t.pageY, L = $ = t.pageX, O = !0
                    }

                    function Y(t) {
                        if (!0 === O) {
                            $ = t.pageX, M = t.pageY, z = $ - L, U = M - j;
                            var e = Math.abs(z);
                            e > Math.abs(U) && e <= 100 && (t.preventDefault(), a.css("margin-left", z))
                        }
                    }

                    function G(t) {
                        if (!0 === O) {
                            O = !1;
                            var e = I,
                                i = !1;
                            (H = $ - L) < 0 && !0 === T && (e = k, i = !0), H > 0 && !0 === E && (e = C, i = !0), Math.abs(H) >= R && !0 === i ? V(e) : a.css({
                                "margin-left": 0,
                                "margin-right": 0
                            })
                        }
                    }

                    function X() {
                        t.ajax({
                            url: l,
                            cache: !1
                        }).done(function(t) {
                            a.html('<div class="vbox-inline">' + t + "</div>"), et()
                        }).fail(function() {
                            a.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), it()
                        })
                    }

                    function J() {
                        a.html('<iframe class="venoframe" src="' + l + '"></iframe>'), it()
                    }

                    function Z(t) {
                        var e, i = function(t) {
                                var e;
                                return t.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), RegExp.$3.indexOf("youtu") > -1 ? e = "youtube" : RegExp.$3.indexOf("vimeo") > -1 && (e = "vimeo"), {
                                    type: e,
                                    id: RegExp.$6
                                }
                            }(l),
                            n = (t ? "?rel=0&autoplay=1" : "?rel=0") + function(t) {
                                var e = "",
                                    i = decodeURIComponent(t).split("?");
                                if (void 0 !== i[1]) {
                                    var n, o, s = i[1].split("&");
                                    for (o = 0; o < s.length; o++) n = s[o].split("="), e = e + "&" + n[0] + "=" + n[1]
                                }
                                return encodeURI(e)
                            }(l);
                        "vimeo" == i.type ? e = "https://player.vimeo.com/video/" : "youtube" == i.type && (e = "https://www.youtube.com/embed/"), a.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="' + e + i.id + n + '"></iframe>'), it()
                    }

                    function tt() {
                        a.html('<div class="vbox-inline">' + t(l).html() + "</div>"), it()
                    }

                    function et() {
                        (P = a.find("img")).length ? P.each(function() {
                            t(this).one("load", function() {
                                it()
                            })
                        }) : it()
                    }

                    function it() {
                        o.html(_), a.find(">:first-child").addClass("figlio").css({
                            width: d,
                            height: u,
                            padding: s,
                            background: i
                        }), t("img.figlio").on("dragstart", function(t) {
                            t.preventDefault()
                        }), nt(), a.animate({
                            opacity: "1"
                        }, "slow", function() {
                            S.hide()
                        })
                    }

                    function nt() {
                        var e = a.outerHeight(),
                            i = t(window).height();
                        v = e + 60 < i ? (i - e) / 2 : "30px", a.css("margin-top", v), a.css("margin-bottom", v), W.cb_post_resize()
                    }
                    if ((I = t(this)).data("venobox")) return !0;
                    F.VBclose = function() {
                        Q()
                    }, I.addClass("vbox-item"), I.data("framewidth", W.framewidth), I.data("frameheight", W.frameheight), I.data("border", W.border), I.data("bgcolor", W.bgcolor), I.data("numeratio", W.numeratio), I.data("gallItems", W.gallItems), I.data("infinigall", W.infinigall), I.data("overlaycolor", W.overlayColor), I.data("titleattr", W.titleattr), I.data("venobox", !0), I.on("click", function(h) {
                        if (h.preventDefault(), I = t(this), !1 === W.cb_pre_open(I)) return !1;
                        switch (F.VBnext = function() {
                            V(k)
                        }, F.VBprev = function() {
                            V(C)
                        }, y = I.data("overlay") || I.data("overlaycolor"), d = I.data("framewidth"), u = I.data("frameheight"), e = I.data("autoplay") || W.autoplay, s = I.data("border"), i = I.data("bgcolor"), T = !1, E = !1, m = !1, l = I.data("href") || I.attr("href"), c = I.data("css") || "", _ = I.attr(I.data("titleattr")) || "", x = '<div class="vbox-preloader">', W.spinner) {
                            case "rotating-plane":
                                x += '<div class="sk-rotating-plane"></div>';
                                break;
                            case "double-bounce":
                                x += '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                                break;
                            case "wave":
                                x += '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                                break;
                            case "wandering-cubes":
                                x += '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                                break;
                            case "spinner-pulse":
                                x += '<div class="sk-spinner sk-spinner-pulse"></div>';
                                break;
                            case "chasing-dots":
                                x += '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
                                break;
                            case "three-bounce":
                                x += '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                                break;
                            case "circle":
                                x += '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
                                break;
                            case "cube-grid":
                                x += '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
                                break;
                            case "fading-circle":
                                x += '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
                                break;
                            case "folding-cube":
                                x += '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
                        }
                        return x += "</div>", A = '<a class="vbox-next">' + W.htmlNext + '</a><a class="vbox-prev">' + W.htmlPrev + "</a>", N = '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' + W.htmlClose + "</div>", r = '<div class="vbox-overlay ' + c + '" style="background:' + y + '">' + x + '<div class="vbox-container"><div class="vbox-content"></div></div>' + N + A + "</div>", t("body").append(r).addClass("vbox-open"), t(".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color", W.spinColor), b = t(".vbox-overlay"), t(".vbox-container"), a = t(".vbox-content"), n = t(".vbox-num"), o = t(".vbox-title"), (S = t(".vbox-preloader")).show(), o.css(W.titlePosition, "-1px"), o.css({
                            color: W.titleColor,
                            "background-color": W.titleBackground
                        }), t(".vbox-close").css({
                            color: W.closeColor,
                            "background-color": W.closeBackground
                        }), t(".vbox-num").css(W.numerationPosition, "-1px"), t(".vbox-num").css({
                            color: W.numerationColor,
                            "background-color": W.numerationBackground
                        }), t(".vbox-next span, .vbox-prev span").css({
                            "border-top-color": W.arrowsColor,
                            "border-right-color": W.arrowsColor
                        }), a.html(""), a.css("opacity", "0"), b.css("opacity", "0"), B(), b.animate({
                            opacity: 1
                        }, 250, function() {
                            "iframe" == I.data("vbtype") ? J() : "inline" == I.data("vbtype") ? tt() : "ajax" == I.data("vbtype") ? X() : "video" == I.data("vbtype") ? Z(e) : (a.html('<img src="' + l + '">'), et()), W.cb_post_open(I, D, k, C)
                        }), t("body").keydown(q), t(".vbox-prev").on("click", function() {
                            V(C)
                        }), t(".vbox-next").on("click", function() {
                            V(k)
                        }), !1
                    });
                    var ot = ".vbox-overlay";
                    W.overlayClose || (ot = ".vbox-close"), t("body").on("click", ot, function(e) {
                        (t(e.target).is(".vbox-overlay") || t(e.target).is(".vbox-content") || t(e.target).is(".vbox-close") || t(e.target).is(".vbox-preloader")) && Q()
                    }), L = 0, $ = 0, H = 0, R = 50, O = !1;
                    var st = {
                            DOWN: "touchmousedown",
                            UP: "touchmouseup",
                            MOVE: "touchmousemove"
                        },
                        rt = function(e) {
                            var i;
                            switch (e.type) {
                                case "mousedown":
                                    i = st.DOWN;
                                    break;
                                case "mouseup":
                                case "mouseout":
                                    i = st.UP;
                                    break;
                                case "mousemove":
                                    i = st.MOVE;
                                    break;
                                default:
                                    return
                            }
                            var n = lt(i, e, e.pageX, e.pageY);
                            t(e.target).trigger(n)
                        },
                        at = function(e) {
                            var i;
                            switch (e.type) {
                                case "touchstart":
                                    i = st.DOWN;
                                    break;
                                case "touchend":
                                    i = st.UP;
                                    break;
                                case "touchmove":
                                    i = st.MOVE;
                                    break;
                                default:
                                    return
                            }
                            var n, o = e.originalEvent.touches[0];
                            n = i == st.UP ? lt(i, e, null, null) : lt(i, e, o.pageX, o.pageY), t(e.target).trigger(n)
                        },
                        lt = function(e, i, n, o) {
                            return t.Event(e, {
                                pageX: n,
                                pageY: o,
                                originalEvent: i
                            })
                        };
                    "ontouchstart" in window ? (t(document).on("touchstart", at), t(document).on("touchmove", at), t(document).on("touchend", at)) : (t(document).on("mousedown", rt), t(document).on("mouseup", rt), t(document).on("mouseout", rt), t(document).on("mousemove", rt)), t(window).resize(function() {
                        t(".vbox-content").length && setTimeout(nt(), 800)
                    })
                })
            }
        })
    }(jQuery),
    /*!
     * aos.js
     */
    ! function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var o = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "dist/", e(0)
        }([function(t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                },
                s = i(1),
                r = (n(s), i(6)),
                a = n(r),
                l = i(7),
                c = n(l),
                d = i(8),
                u = n(d),
                h = i(9),
                p = n(h),
                f = i(10),
                m = n(f),
                v = i(11),
                g = n(v),
                y = i(14),
                b = n(y),
                _ = [],
                w = !1,
                k = document.all && !window.atob,
                C = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                T = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (t && (w = !0), w) return _ = (0, g.default)(_, C), (0, m.default)(_, C.once), _
                },
                E = function() {
                    _ = (0, b.default)(), T()
                },
                x = function() {
                    _.forEach(function(t, e) {
                        t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                    })
                },
                S = function(t) {
                    return t === !0 || "mobile" === t && p.default.mobile() || "phone" === t && p.default.phone() || "tablet" === t && p.default.tablet() || "function" == typeof t && t() === !0
                },
                A = function(t) {
                    return C = o(C, t), _ = (0, b.default)(), S(C.disable) || k ? x() : (document.querySelector("body").setAttribute("data-aos-easing", C.easing), document.querySelector("body").setAttribute("data-aos-duration", C.duration), document.querySelector("body").setAttribute("data-aos-delay", C.delay), "DOMContentLoaded" === C.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? T(!0) : "load" === C.startEvent ? window.addEventListener(C.startEvent, function() {
                        T(!0)
                    }) : document.addEventListener(C.startEvent, function() {
                        T(!0)
                    }), window.addEventListener("resize", (0, c.default)(T, C.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(T, C.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
                        (0, m.default)(_, C.once)
                    }, C.throttleDelay)), C.disableMutationObserver || (0, u.default)("[data-aos]", E), _)
                };
            t.exports = {
                init: A,
                refresh: T,
                refreshHard: E
            }
        }, function(t, e) {}, , , , , function(t, e) {
            (function(e) {
                "use strict";

                function i(t, e, i) {
                    function n(e) {
                        var i = m,
                            n = v;
                        return m = v = void 0, w = e, y = t.apply(n, i)
                    }

                    function s(t) {
                        return w = t, b = setTimeout(d, e), E ? n(t) : y
                    }

                    function r(t) {
                        var i = t - _,
                            n = t - w,
                            o = e - i;
                        return x ? C(o, g - n) : o
                    }

                    function l(t) {
                        var i = t - _,
                            n = t - w;
                        return void 0 === _ || i >= e || i < 0 || x && n >= g
                    }

                    function d() {
                        var t = T();
                        return l(t) ? u(t) : void(b = setTimeout(d, r(t)))
                    }

                    function u(t) {
                        return b = void 0, S && m ? n(t) : (m = v = void 0, y)
                    }

                    function h() {
                        void 0 !== b && clearTimeout(b), w = 0, m = _ = v = b = void 0
                    }

                    function p() {
                        return void 0 === b ? y : u(T())
                    }

                    function f() {
                        var t = T(),
                            i = l(t);
                        if (m = arguments, v = this, _ = t, i) {
                            if (void 0 === b) return s(_);
                            if (x) return b = setTimeout(d, e), n(_)
                        }
                        return void 0 === b && (b = setTimeout(d, e)), y
                    }
                    var m, v, g, y, b, _, w = 0,
                        E = !1,
                        x = !1,
                        S = !0;
                    if ("function" != typeof t) throw new TypeError(c);
                    return e = a(e) || 0, o(i) && (E = !!i.leading, x = "maxWait" in i, g = x ? k(a(i.maxWait) || 0, e) : g, S = "trailing" in i ? !!i.trailing : S), f.cancel = h, f.flush = p, f
                }

                function n(t, e, n) {
                    var s = !0,
                        r = !0;
                    if ("function" != typeof t) throw new TypeError(c);
                    return o(n) && (s = "leading" in n ? !!n.leading : s, r = "trailing" in n ? !!n.trailing : r), i(t, e, {
                        leading: s,
                        maxWait: e,
                        trailing: r
                    })
                }

                function o(t) {
                    var e = "undefined" == typeof t ? "undefined" : l(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function s(t) {
                    return !!t && "object" == ("undefined" == typeof t ? "undefined" : l(t))
                }

                function r(t) {
                    return "symbol" == ("undefined" == typeof t ? "undefined" : l(t)) || s(t) && w.call(t) == u
                }

                function a(t) {
                    if ("number" == typeof t) return t;
                    if (r(t)) return d;
                    if (o(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = o(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(h, "");
                    var i = f.test(t);
                    return i || m.test(t) ? v(t.slice(2), i ? 2 : 8) : p.test(t) ? d : +t
                }
                var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    c = "Expected a function",
                    d = NaN,
                    u = "[object Symbol]",
                    h = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    f = /^0b[01]+$/i,
                    m = /^0o[0-7]+$/i,
                    v = parseInt,
                    g = "object" == ("undefined" == typeof e ? "undefined" : l(e)) && e && e.Object === Object && e,
                    y = "object" == ("undefined" == typeof self ? "undefined" : l(self)) && self && self.Object === Object && self,
                    b = g || y || Function("return this")(),
                    _ = Object.prototype,
                    w = _.toString,
                    k = Math.max,
                    C = Math.min,
                    T = function() {
                        return b.Date.now()
                    };
                t.exports = n
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            (function(e) {
                "use strict";

                function i(t, e, i) {
                    function o(e) {
                        var i = m,
                            n = v;
                        return m = v = void 0, T = e, y = t.apply(n, i)
                    }

                    function s(t) {
                        return T = t, b = setTimeout(d, e), E ? o(t) : y
                    }

                    function a(t) {
                        var i = t - _,
                            n = t - T,
                            o = e - i;
                        return x ? k(o, g - n) : o
                    }

                    function c(t) {
                        var i = t - _,
                            n = t - T;
                        return void 0 === _ || i >= e || i < 0 || x && n >= g
                    }

                    function d() {
                        var t = C();
                        return c(t) ? u(t) : void(b = setTimeout(d, a(t)))
                    }

                    function u(t) {
                        return b = void 0, S && m ? o(t) : (m = v = void 0, y)
                    }

                    function h() {
                        void 0 !== b && clearTimeout(b), T = 0, m = _ = v = b = void 0
                    }

                    function p() {
                        return void 0 === b ? y : u(C())
                    }

                    function f() {
                        var t = C(),
                            i = c(t);
                        if (m = arguments, v = this, _ = t, i) {
                            if (void 0 === b) return s(_);
                            if (x) return b = setTimeout(d, e), o(_)
                        }
                        return void 0 === b && (b = setTimeout(d, e)), y
                    }
                    var m, v, g, y, b, _, T = 0,
                        E = !1,
                        x = !1,
                        S = !0;
                    if ("function" != typeof t) throw new TypeError(l);
                    return e = r(e) || 0, n(i) && (E = !!i.leading, x = "maxWait" in i, g = x ? w(r(i.maxWait) || 0, e) : g, S = "trailing" in i ? !!i.trailing : S), f.cancel = h, f.flush = p, f
                }

                function n(t) {
                    var e = "undefined" == typeof t ? "undefined" : a(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function o(t) {
                    return !!t && "object" == ("undefined" == typeof t ? "undefined" : a(t))
                }

                function s(t) {
                    return "symbol" == ("undefined" == typeof t ? "undefined" : a(t)) || o(t) && _.call(t) == d
                }

                function r(t) {
                    if ("number" == typeof t) return t;
                    if (s(t)) return c;
                    if (n(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = n(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(u, "");
                    var i = p.test(t);
                    return i || f.test(t) ? m(t.slice(2), i ? 2 : 8) : h.test(t) ? c : +t
                }
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    l = "Expected a function",
                    c = NaN,
                    d = "[object Symbol]",
                    u = /^\s+|\s+$/g,
                    h = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    f = /^0o[0-7]+$/i,
                    m = parseInt,
                    v = "object" == ("undefined" == typeof e ? "undefined" : a(e)) && e && e.Object === Object && e,
                    g = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                    y = v || g || Function("return this")(),
                    b = Object.prototype,
                    _ = b.toString,
                    w = Math.max,
                    k = Math.min,
                    C = function() {
                        return y.Date.now()
                    };
                t.exports = i
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            "use strict";

            function i(t, e) {
                var i = new s(n);
                r = e, i.observe(o.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function n(t) {
                t && t.forEach(function(t) {
                    var e = Array.prototype.slice.call(t.addedNodes),
                        i = Array.prototype.slice.call(t.removedNodes),
                        n = e.concat(i).filter(function(t) {
                            return t.hasAttribute && t.hasAttribute("data-aos")
                        }).length;
                    n && r()
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = window.document,
                s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                r = function() {};
            e.default = i
        }, function(t, e) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function n() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                l = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                c = function() {
                    function t() {
                        i(this, t)
                    }
                    return o(t, [{
                        key: "phone",
                        value: function() {
                            var t = n();
                            return !(!s.test(t) && !r.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var t = n();
                            return !(!a.test(t) && !l.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new c
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t, e, i) {
                    var n = t.node.getAttribute("data-aos-once");
                    e > t.position ? t.node.classList.add("aos-animate") : "undefined" != typeof n && ("false" === n || !i && "true" !== n) && t.node.classList.remove("aos-animate")
                },
                n = function(t, e) {
                    var n = window.pageYOffset,
                        o = window.innerHeight;
                    t.forEach(function(t, s) {
                        i(t, o + n, e)
                    })
                };
            e.default = n
        }, function(t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(12),
                s = n(o),
                r = function(t, e) {
                    return t.forEach(function(t, i) {
                        t.node.classList.add("aos-init"), t.position = (0, s.default)(t.node, e.offset)
                    }), t
                };
            e.default = r
        }, function(t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(13),
                s = n(o),
                r = function(t, e) {
                    var i = 0,
                        n = 0,
                        o = window.innerHeight,
                        r = {
                            offset: t.getAttribute("data-aos-offset"),
                            anchor: t.getAttribute("data-aos-anchor"),
                            anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                        };
                    switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (t = document.querySelectorAll(r.anchor)[0]), i = (0, s.default)(t).top, r.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            i += t.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            i += t.offsetHeight;
                            break;
                        case "top-center":
                            i += o / 2;
                            break;
                        case "bottom-center":
                            i += o / 2 + t.offsetHeight;
                            break;
                        case "center-center":
                            i += o / 2 + t.offsetHeight / 2;
                            break;
                        case "top-top":
                            i += o;
                            break;
                        case "bottom-top":
                            i += t.offsetHeight + o;
                            break;
                        case "center-top":
                            i += t.offsetHeight / 2 + o
                    }
                    return r.anchorPlacement || r.offset || isNaN(e) || (n = e), i + n
                };
            e.default = r
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: i,
                    left: e
                }
            };
            e.default = i
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t) {
                return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function(t) {
                    return {
                        node: t
                    }
                })
            };
            e.default = i
        }])
    }),
    /*!
     * jquery.syotimer.js
     */
    ! function(t) {
        var e = "day",
            i = "hour",
            n = "minute",
            o = "second",
            s = 86400,
            r = 3600,
            a = 60,
            l = {
                d: e,
                h: i,
                m: n,
                s: o
            },
            c = {
                list: [o, n, i, e],
                next: function(t) {
                    var e = this.list.indexOf(t);
                    return e < this.list.length && this.list[e + 1]
                },
                prev: function(t) {
                    var e = this.list.indexOf(t);
                    return e > 0 && this.list[e - 1]
                }
            },
            d = {
                year: 2014,
                month: 7,
                day: 31,
                hour: 0,
                minute: 0,
                second: 0,
                timeZone: "local",
                ignoreTransferTime: !1,
                layout: "dhms",
                periodic: !1,
                periodInterval: 7,
                periodUnit: "d",
                doubleNumbers: !0,
                effectType: "none",
                lang: "eng",
                headTitle: "",
                footTitle: "",
                afterDeadline: function(t) {
                    t.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>')
                }
            },
            u = {
                second: !1,
                minute: !1,
                hour: !1,
                day: !1
            },
            h = {
                init: function(e) {
                    var i = t.extend({}, d, e || {});
                    i.itemTypes = p.getItemTypesByLayout(i.layout), i._itemsHas = t.extend({}, u);
                    for (var n = 0; n < i.itemTypes.length; n++) i._itemsHas[i.itemTypes[n]] = !0;
                    return this.each(function() {
                        var e = t(this);
                        e.data("syotimer-options", i), h._render.apply(this, []), h._perSecondHandler.apply(this, [])
                    })
                },
                _render: function() {
                    for (var e = t(this), i = e.data("syotimer-options"), n = p.getTimerItem(), o = t("<div/>", {
                            class: "syotimer__head"
                        }).html(i.headTitle), s = t("<div/>", {
                            class: "syotimer__body"
                        }), r = t("<div/>", {
                            class: "syotimer__footer"
                        }).html(i.footTitle), a = {}, l = 0; l < i.itemTypes.length; l++) {
                        var c = n.clone();
                        c.addClass("syotimer-cell_type_" + i.itemTypes[l]), s.append(c), a[i.itemTypes[l]] = c
                    }
                    var d = {
                        headBlock: o,
                        bodyBlock: s,
                        footBlock: r
                    };
                    e.data("syotimer-blocks", d).data("syotimer-items", a).addClass("syotimer").append(o).append(s).append(r)
                },
                _perSecondHandler: function() {
                    var e = t(this),
                        i = e.data("syotimer-options");
                    t(".syotimer-cell > .syotimer-cell__value", e).css("opacity", 1);
                    var n = new Date,
                        o = new Date(i.year, i.month - 1, i.day, i.hour, i.minute, i.second),
                        s = p.getDifferenceWithTimezone(n, o, i),
                        r = p.getSecondsToDeadLine(s, i);
                    r >= 0 ? (h._refreshUnitsDom.apply(this, [r]), h._applyEffectSwitch.apply(this, [i.effectType])) : (e = t.extend(e, e.data("syotimer-blocks")), i.afterDeadline(e))
                },
                _refreshUnitsDom: function(i) {
                    var n = t(this),
                        o = n.data("syotimer-options"),
                        s = n.data("syotimer-items"),
                        r = o.itemTypes,
                        a = p.getUnitsToDeadLine(i);
                    o._itemsHas.day || (a.hour += 24 * a.day), o._itemsHas.hour || (a.minute += 60 * a.hour), o._itemsHas.minute || (a.second += 60 * a.minute);
                    for (var l = 0; l < r.length; l++) {
                        var c = r[l],
                            d = a[c],
                            u = s[c];
                        u.data("syotimer-unit-value", d), t(".syotimer-cell__value", u).html(p.format2(d, c !== e && o.doubleNumbers)), t(".syotimer-cell__unit", u).html(t.syotimerLang.getNumeral(d, o.lang, c))
                    }
                },
                _applyEffectSwitch: function(e, i) {
                    i = i || o;
                    var n = this,
                        s = t(n);
                    if ("none" === e) setTimeout(function() {
                        h._perSecondHandler.apply(n, [])
                    }, 1e3);
                    else if ("opacity" === e) {
                        var r = s.data("syotimer-items"),
                            a = r[i];
                        if (a) {
                            var l = c.next(i),
                                d = a.data("syotimer-unit-value");
                            t(".syotimer-cell__value", a).animate({
                                opacity: .1
                            }, 1e3, "linear", function() {
                                h._perSecondHandler.apply(n, [])
                            }), l && 0 === d && h._applyEffectSwitch.apply(n, [e, l])
                        }
                    }
                }
            },
            p = {
                getTimerItem: function() {
                    var e = t("<div/>", {
                            class: "syotimer-cell__value",
                            text: "0"
                        }),
                        i = t("<div/>", {
                            class: "syotimer-cell__unit"
                        }),
                        n = t("<div/>", {
                            class: "syotimer-cell"
                        });
                    return n.append(e).append(i), n
                },
                getItemTypesByLayout: function(t) {
                    for (var e = [], i = 0; i < t.length; i++) e.push(l[t[i]]);
                    return e
                },
                getSecondsToDeadLine: function(t, e) {
                    var i, n = t / 1e3;
                    if (n = Math.floor(n), e.periodic) {
                        var o, s, r = p.getPeriodUnit(e.periodUnit),
                            a = t / (1e3 * r);
                        a = Math.ceil(a), a = Math.abs(a), n >= 0 ? (s = a % e.periodInterval, s = 0 === s ? e.periodInterval : s, s -= 1) : s = e.periodInterval - a % e.periodInterval, o = n % r, 0 === o && n < 0 && s--, i = Math.abs(s * r + o)
                    } else i = n;
                    return i
                },
                getUnitsToDeadLine: function(t) {
                    var i = e,
                        n = {};
                    do {
                        var o = p.getPeriodUnit(i);
                        n[i] = Math.floor(t / o), t %= o
                    } while (i = c.prev(i));
                    return n
                },
                getPeriodUnit: function(t) {
                    switch (t) {
                        case "d":
                        case e:
                            return s;
                        case "h":
                        case i:
                            return r;
                        case "m":
                        case n:
                            return a;
                        case "s":
                        case o:
                            return 1
                    }
                },
                getDifferenceWithTimezone: function(t, e, o) {
                    var s, r = e.getTime() - t.getTime(),
                        a = 0,
                        l = 0;
                    if ("local" !== o.timeZone) {
                        var c = parseFloat(o.timeZone) * p.getPeriodUnit(i),
                            d = -t.getTimezoneOffset() * p.getPeriodUnit(n);
                        a = 1e3 * (c - d)
                    }
                    if (o.ignoreTransferTime) {
                        var u = -t.getTimezoneOffset() * p.getPeriodUnit(n),
                            h = -e.getTimezoneOffset() * p.getPeriodUnit(n);
                        l = 1e3 * (u - h)
                    }
                    return s = a + l, r - s
                },
                format2: function(t, e) {
                    return e = e !== !1, t <= 9 && e ? "0" + t : "" + t
                }
            },
            f = {
                setOption: function(e, i) {
                    var n = t(this),
                        o = n.data("syotimer-options");
                    o.hasOwnProperty(e) && (o[e] = i, n.data("syotimer-options", o))
                }
            };
        t.fn.syotimer = function(e) {
            if ("string" == typeof e && "setOption" === e) {
                var i = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    f[e].apply(this, i)
                })
            }
            return null === e || "object" == typeof e ? h.init.apply(this, [e]) : void t.error("SyoTimer. Error in call methods: methods is not exist")
        }, t.syotimerLang = {
            rus: {
                second: ["секунда", "секунды", "секунд"],
                minute: ["минута", "минуты", "минут"],
                hour: ["час", "часа", "часов"],
                day: ["день", "дня", "дней"],
                handler: "rusNumeral"
            },
            eng: {
                second: ["second", "seconds"],
                minute: ["minute", "minutes"],
                hour: ["hour", "hours"],
                day: ["day", "days"]
            },
            por: {
                second: ["segundo", "segundos"],
                minute: ["minuto", "minutos"],
                hour: ["hora", "horas"],
                day: ["dia", "dias"]
            },
            spa: {
                second: ["segundo", "segundos"],
                minute: ["minuto", "minutos"],
                hour: ["hora", "horas"],
                day: ["día", "días"]
            },
            heb: {
                second: ["שניה", "שניות"],
                minute: ["דקה", "דקות"],
                hour: ["שעה", "שעות"],
                day: ["יום", "ימים"]
            },
            universal: function(t) {
                return 1 === t ? 0 : 1
            },
            rusNumeral: function(t) {
                var e, i = [2, 0, 1, 1, 1, 2];
                return e = t % 100 > 4 && t % 100 < 20 ? 2 : i[t % 10 < 5 ? t % 10 : 5]
            },
            getNumeral: function(e, i, n) {
                var o = t.syotimerLang[i].handler || "universal",
                    s = this[o](e);
                return t.syotimerLang[i][n][s]
            }
        }
    }(jQuery),
    /*!
     * instafeed.min.js
     */
    function() {
        var t;
        t = function() {
                function t(t, e) {
                    var i, n;
                    if (this.options = {
                            target: "instafeed",
                            get: "popular",
                            resolution: "thumbnail",
                            sortBy: "none",
                            links: !0,
                            mock: !1,
                            useHttp: !1
                        }, "object" == typeof t)
                        for (i in t) n = t[i], this.options[i] = n;
                    this.context = null != e ? e : this, this.unique = this._genKey()
                }
                return t.prototype.hasNext = function() {
                    return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
                }, t.prototype.next = function() {
                    return !!this.hasNext() && this.run(this.context.nextUrl)
                }, t.prototype.run = function(e) {
                    var i, n, o;
                    if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                    if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                    return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (o = document.createElement("script"), o.id = "instafeed-fetcher", o.src = e || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(o), n = "instafeedCache" + this.unique, window[n] = new t(this.options, this), window[n].unique = this.unique), !0
                }, t.prototype.parse = function(t) {
                    var e, i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, b, _, w, k, C, T, E, x, S, A, I, D, O, N, P;
                    if ("object" != typeof t) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                        throw new Error("Invalid JSON response")
                    }
                    if (200 !== t.meta.code) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
                        throw new Error("Error from Instagram: " + t.meta.error_message)
                    }
                    if (0 === t.data.length) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                        throw new Error("No images were returned from Instagram")
                    }
                    if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (O = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), D = "least" === O[0], O[1]) {
                        case "random":
                            t.data.sort(function() {
                                return .5 - Math.random()
                            });
                            break;
                        case "recent":
                            t.data = this._sortBy(t.data, "created_time", D);
                            break;
                        case "liked":
                            t.data = this._sortBy(t.data, "likes.count", D);
                            break;
                        case "commented":
                            t.data = this._sortBy(t.data, "comments.count", D);
                            break;
                        default:
                            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                    }
                    if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                        if (v = t.data, I = parseInt(this.options.limit, 10), null != this.options.limit && v.length > I && (v = v.slice(0, I)), a = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (v = this._filter(v, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                            for (c = "", f = "", _ = "", P = document.createElement("div"), u = 0, E = v.length; u < E; u++) {
                                if (h = v[u], p = h.images[this.options.resolution], "object" != typeof p) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
                                w = p.width, y = p.height, b = "square", w > y && (b = "landscape"), w < y && (b = "portrait"), m = p.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), f = this._makeTemplate(this.options.template, {
                                    model: h,
                                    id: h.id,
                                    link: h.link,
                                    type: h.type,
                                    image: m,
                                    width: w,
                                    height: y,
                                    orientation: b,
                                    caption: this._getObjectProperty(h, "caption.text"),
                                    likes: h.likes.count,
                                    comments: h.comments.count,
                                    location: this._getObjectProperty(h, "location.name")
                                }), c += f
                            }
                            for (P.innerHTML = c, o = [], n = 0, i = P.childNodes.length; n < i;) o.push(P.childNodes[n]), n += 1;
                            for (C = 0, x = o.length; C < x; C++) A = o[C], a.appendChild(A)
                        } else
                            for (T = 0, S = v.length; T < S; T++) {
                                if (h = v[T], g = document.createElement("img"), p = h.images[this.options.resolution], "object" != typeof p) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
                                m = p.url, d = window.location.protocol.indexOf("http") >= 0, d && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), g.src = m, this.options.links === !0 ? (e = document.createElement("a"), e.href = h.link, e.appendChild(g), a.appendChild(e)) : a.appendChild(g)
                            }
                        if (N = this.options.target, "string" == typeof N && (N = document.getElementById(N)), null == N) throw r = 'No element with id="' + this.options.target + '" on page.', new Error(r);
                        N.appendChild(a), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), k = "instafeedCache" + this.unique, window[k] = void 0;
                        try {
                            delete window[k]
                        } catch (t) {
                            s = t
                        }
                    }
                    return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
                }, t.prototype._buildUrl = function() {
                    var t, e, i;
                    switch (t = "https://api.instagram.com/v1", this.options.get) {
                        case "popular":
                            e = "media/popular";
                            break;
                        case "tagged":
                            if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                            e = "tags/" + this.options.tagName + "/media/recent";
                            break;
                        case "location":
                            if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                            e = "locations/" + this.options.locationId + "/media/recent";
                            break;
                        case "user":
                            if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                            e = "users/" + this.options.userId + "/media/recent";
                            break;
                        default:
                            throw new Error("Invalid option for get: '" + this.options.get + "'.")
                    }
                    return i = t + "/" + e, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
                }, t.prototype._genKey = function() {
                    var t;
                    return t = function() {
                        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                    }, "" + t() + t() + t() + t()
                }, t.prototype._makeTemplate = function(t, e) {
                    var i, n, o, s, r;
                    for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i);) s = i.match(n)[1], r = null != (o = this._getObjectProperty(e, s)) ? o : "", i = i.replace(n, function() {
                        return "" + r
                    });
                    return i
                }, t.prototype._getObjectProperty = function(t, e) {
                    var i, n;
                    for (e = e.replace(/\[(\w+)\]/g, ".$1"), n = e.split("."); n.length;) {
                        if (i = n.shift(), !(null != t && i in t)) return null;
                        t = t[i]
                    }
                    return t
                }, t.prototype._sortBy = function(t, e, i) {
                    var n;
                    return n = function(t, n) {
                        var o, s;
                        return o = this._getObjectProperty(t, e), s = this._getObjectProperty(n, e), i ? o > s ? 1 : -1 : o < s ? 1 : -1
                    }, t.sort(n.bind(this)), t
                }, t.prototype._filter = function(t, e) {
                    var i, n, o, s, r;
                    for (i = [], n = function(t) {
                            if (e(t)) return i.push(t)
                        }, o = 0, r = t.length; o < r; o++) s = t[o], n(s);
                    return i
                }, t
            }(),
            function(t, e) {
                return "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Instafeed = e()
            }(this, function() {
                return t
            })
    }.call(this),
    /*!
     * jquery.zoom.min.js
     */
    /*!
    	Zoom 1.7.21
    	license: MIT
    	http://www.jacklmoore.com/zoom
    */
    function(t) {
        var e = {
            url: !1,
            callback: !1,
            target: !1,
            duration: 120,
            on: "mouseover",
            touch: !0,
            onZoomIn: !1,
            onZoomOut: !1,
            magnify: 1
        };
        t.zoom = function(e, i, n, o) {
            var s, r, a, l, c, d, u, h = t(e),
                p = h.css("position"),
                f = t(i);
            return e.style.position = /(absolute|fixed)/.test(p) ? p : "relative", e.style.overflow = "hidden", n.style.width = n.style.height = "", t(n).addClass("zoomImg").css({
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                width: n.width * o,
                height: n.height * o,
                border: "none",
                maxWidth: "none",
                maxHeight: "none"
            }).appendTo(e), {
                init: function() {
                    r = h.outerWidth(), s = h.outerHeight(), i === e ? (l = r, a = s) : (l = f.outerWidth(), a = f.outerHeight()), c = (n.width - r) / l, d = (n.height - s) / a, u = f.offset()
                },
                move: function(t) {
                    var e = t.pageX - u.left,
                        i = t.pageY - u.top;
                    i = Math.max(Math.min(i, a), 0), e = Math.max(Math.min(e, l), 0), n.style.left = e * -c + "px", n.style.top = i * -d + "px"
                }
            }
        }, t.fn.zoom = function(i) {
            return this.each(function() {
                var n = t.extend({}, e, i || {}),
                    o = n.target && t(n.target)[0] || this,
                    s = this,
                    r = t(s),
                    a = document.createElement("img"),
                    l = t(a),
                    c = "mousemove.zoom",
                    d = !1,
                    u = !1;
                if (!n.url) {
                    var h = s.querySelector("img");
                    if (h && (n.url = h.getAttribute("data-src") || h.currentSrc || h.src), !n.url) return
                }
                r.one("zoom.destroy", function(t, e) {
                    r.off(".zoom"), o.style.position = t, o.style.overflow = e, a.onload = null, l.remove()
                }.bind(this, o.style.position, o.style.overflow)), a.onload = function() {
                    function e(e) {
                        h.init(), h.move(e), l.stop().fadeTo(t.support.opacity ? n.duration : 0, 1, !!t.isFunction(n.onZoomIn) && n.onZoomIn.call(a))
                    }

                    function i() {
                        l.stop().fadeTo(n.duration, 0, !!t.isFunction(n.onZoomOut) && n.onZoomOut.call(a))
                    }
                    var h = t.zoom(o, s, a, n.magnify);
                    "grab" === n.on ? r.on("mousedown.zoom", function(n) {
                        1 === n.which && (t(document).one("mouseup.zoom", function() {
                            i(), t(document).off(c, h.move)
                        }), e(n), t(document).on(c, h.move), n.preventDefault())
                    }) : "click" === n.on ? r.on("click.zoom", function(n) {
                        return d ? void 0 : (d = !0, e(n), t(document).on(c, h.move), t(document).one("click.zoom", function() {
                            i(), d = !1, t(document).off(c, h.move)
                        }), !1)
                    }) : "toggle" === n.on ? r.on("click.zoom", function(t) {
                        d ? i() : e(t), d = !d
                    }) : "mouseover" === n.on && (h.init(), r.on("mouseenter.zoom", e).on("mouseleave.zoom", i).on(c, h.move)), n.touch && r.on("touchstart.zoom", function(t) {
                        t.preventDefault(), u ? (u = !1, i()) : (u = !0, e(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]))
                    }).on("touchmove.zoom", function(t) {
                        t.preventDefault(), h.move(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
                    }).on("touchend.zoom", function(t) {
                        t.preventDefault(), u && (u = !1, i())
                    }), t.isFunction(n.callback) && n.callback.call(a)
                }, a.setAttribute("role", "presentation"), a.alt = "", a.src = n.url
            })
        }, t.fn.zoom.defaults = e
    }(window.jQuery),
    /*!
     * jquery.bootstrap-touchspin.min.js
     */
    /*
     *  Bootstrap TouchSpin - v4.2.5
     *  A mobile and touch friendly input spinner component for Bootstrap 3 & 4.
     *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
     *
     *  Made by István Ujj-Mészáros
     *  Under Apache License v2.0 License
     */
    ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, i) {
            return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
        } : t(jQuery)
    }(function(t) {
        "use strict";
        var e = 0;
        t.fn.TouchSpin = function(i) {
            var n = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalup: "+",
                    verticaldown: "-",
                    verticalupclass: "",
                    verticaldownclass: "",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                    buttondown_txt: "-",
                    buttonup_txt: "+",
                    callback_before_calculation: function(t) {
                        return t
                    },
                    callback_after_calculation: function(t) {
                        return t
                    }
                },
                o = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function() {
                function s() {
                    "" === p.prefix && (f = g.prefix.detach()), "" === p.postfix && (m = g.postfix.detach())
                }

                function r() {
                    var t, e, i;
                    "" !== (t = p.callback_before_calculation(C.val())) ? 0 < p.decimals && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== p.replacementval ? p.replacementval : 0), (i = e).toString() !== t && (i = e), null !== p.min && e < p.min && (i = p.min), null !== p.max && e > p.max && (i = p.max), i = function(t) {
                        switch (p.forcestepdivisibility) {
                            case "round":
                                return (Math.round(t / p.step) * p.step).toFixed(p.decimals);
                            case "floor":
                                return (Math.floor(t / p.step) * p.step).toFixed(p.decimals);
                            case "ceil":
                                return (Math.ceil(t / p.step) * p.step).toFixed(p.decimals);
                            default:
                                return t
                        }
                    }(i), Number(t).toString() !== i.toString() && (C.val(i), C.trigger("change"))): "" !== p.replacementval && (C.val(p.replacementval), C.trigger("change"))
                }

                function a() {
                    if (p.booster) {
                        var t = Math.pow(2, Math.floor(E / p.boostat)) * p.step;
                        return p.maxboostedstep && t > p.maxboostedstep && (t = p.maxboostedstep, y = Math.round(y / t) * t), Math.max(p.step, t)
                    }
                    return p.step
                }

                function l() {
                    r(), y = parseFloat(p.callback_before_calculation(g.input.val())), isNaN(y) && (y = 0);
                    var t = y,
                        e = a();
                    y += e, null !== p.max && y > p.max && (y = p.max, C.trigger("touchspin.on.max"), h()), g.input.val(p.callback_after_calculation(Number(y).toFixed(p.decimals))), t !== y && C.trigger("change")
                }

                function c() {
                    r(), y = parseFloat(p.callback_before_calculation(g.input.val())), isNaN(y) && (y = 0);
                    var t = y,
                        e = a();
                    y -= e, null !== p.min && y < p.min && (y = p.min, C.trigger("touchspin.on.min"), h()), g.input.val(p.callback_after_calculation(Number(y).toFixed(p.decimals))), t !== y && C.trigger("change")
                }

                function d() {
                    h(), E = 0, x = "down", C.trigger("touchspin.on.startspin"), C.trigger("touchspin.on.startdownspin"), w = setTimeout(function() {
                        b = setInterval(function() {
                            E++, c()
                        }, p.stepinterval)
                    }, p.stepintervaldelay)
                }

                function u() {
                    h(), E = 0, x = "up", C.trigger("touchspin.on.startspin"), C.trigger("touchspin.on.startupspin"), k = setTimeout(function() {
                        _ = setInterval(function() {
                            E++, l()
                        }, p.stepinterval)
                    }, p.stepintervaldelay)
                }

                function h() {
                    switch (clearTimeout(w), clearTimeout(k), clearInterval(b), clearInterval(_), x) {
                        case "up":
                            C.trigger("touchspin.on.stopupspin"), C.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            C.trigger("touchspin.on.stopdownspin"), C.trigger("touchspin.on.stopspin")
                    }
                    E = 0, x = !1
                }
                var p, f, m, v, g, y, b, _, w, k, C = t(this),
                    T = C.data(),
                    E = 0,
                    x = !1;
                ! function() {
                    if (!C.data("alreadyinitialized")) {
                        if (C.data("alreadyinitialized", !0), e += 1, C.data("spinnerid", e), !C.is("input")) return console.log("Must be an input.");
                        p = t.extend({}, n, T, (a = {}, t.each(o, function(t, e) {
                                var i = "bts-" + e;
                                C.is("[data-" + i + "]") && (a[t] = C.data(i))
                            }), a), i), "" !== p.initval && "" === C.val() && C.val(p.initval), r(),
                            function() {
                                var e = C.val(),
                                    i = C.parent();
                                "" !== e && (e = p.callback_after_calculation(Number(e).toFixed(p.decimals))), C.data("initvalue", e).val(e), C.addClass("form-control"), i.hasClass("input-group") ? function(e) {
                                    e.addClass("bootstrap-touchspin");
                                    var i, n, o = C.prev(),
                                        s = C.next(),
                                        r = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + p.prefix + "</span></span>",
                                        a = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + p.postfix + "</span></span>";
                                    o.hasClass("input-group-btn") || o.hasClass("input-group-prepend") ? (i = '<button class="' + p.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + p.buttondown_txt + "</button>", o.append(i)) : (i = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + p.buttondown_class + ' bootstrap-touchspin-down" type="button">' + p.buttondown_txt + "</button></span>", t(i).insertBefore(C)), s.hasClass("input-group-btn") || s.hasClass("input-group-append") ? (n = '<button class="' + p.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + p.buttonup_txt + "</button>", s.prepend(n)) : (n = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + p.buttonup_class + ' bootstrap-touchspin-up" type="button">' + p.buttonup_txt + "</button></span>", t(n).insertAfter(C)), t(r).insertBefore(C), t(a).insertAfter(C), v = e
                                }(i) : function() {
                                    var e, i = "";
                                    C.hasClass("input-sm") && (i = "input-group-sm"), C.hasClass("input-lg") && (i = "input-group-lg"), e = p.verticalbuttons ? '<div class="input-group ' + i + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + p.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + p.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + p.buttondown_class + " bootstrap-touchspin-up " + p.verticalupclass + '" type="button">' + p.verticalup + '</button><button class="' + p.buttonup_class + " bootstrap-touchspin-down " + p.verticaldownclass + '" type="button">' + p.verticaldown + "</button></span></div>" : '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + p.buttondown_class + ' bootstrap-touchspin-down" type="button">' + p.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + p.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + p.postfix + '</span></span><span class="input-group-btn input-group-append"><button class="' + p.buttonup_class + ' bootstrap-touchspin-up" type="button">' + p.buttonup_txt + "</button></span></div>", v = t(e).insertBefore(C), t(".bootstrap-touchspin-prefix", v).after(C), C.hasClass("input-sm") ? v.addClass("input-group-sm") : C.hasClass("input-lg") && v.addClass("input-group-lg")
                                }()
                            }(), g = {
                                down: t(".bootstrap-touchspin-down", v),
                                up: t(".bootstrap-touchspin-up", v),
                                input: t("input", v),
                                prefix: t(".bootstrap-touchspin-prefix", v).addClass(p.prefix_extraclass),
                                postfix: t(".bootstrap-touchspin-postfix", v).addClass(p.postfix_extraclass)
                            }, s(), C.on("keydown.touchspin", function(t) {
                                var e = t.keyCode || t.which;
                                38 === e ? ("up" !== x && (l(), u()), t.preventDefault()) : 40 === e && ("down" !== x && (c(), d()), t.preventDefault())
                            }), C.on("keyup.touchspin", function(t) {
                                var e = t.keyCode || t.which;
                                38 === e ? h() : 40 === e && h()
                            }), C.on("blur.touchspin", function() {
                                r(), C.val(p.callback_after_calculation(C.val()))
                            }), g.down.on("keydown", function(t) {
                                var e = t.keyCode || t.which;
                                32 !== e && 13 !== e || ("down" !== x && (c(), d()), t.preventDefault())
                            }), g.down.on("keyup.touchspin", function(t) {
                                var e = t.keyCode || t.which;
                                32 !== e && 13 !== e || h()
                            }), g.up.on("keydown.touchspin", function(t) {
                                var e = t.keyCode || t.which;
                                32 !== e && 13 !== e || ("up" !== x && (l(), u()), t.preventDefault())
                            }), g.up.on("keyup.touchspin", function(t) {
                                var e = t.keyCode || t.which;
                                32 !== e && 13 !== e || h()
                            }), g.down.on("mousedown.touchspin", function(t) {
                                g.down.off("touchstart.touchspin"), C.is(":disabled") || (c(), d(), t.preventDefault(), t.stopPropagation())
                            }), g.down.on("touchstart.touchspin", function(t) {
                                g.down.off("mousedown.touchspin"), C.is(":disabled") || (c(), d(), t.preventDefault(), t.stopPropagation())
                            }), g.up.on("mousedown.touchspin", function(t) {
                                g.up.off("touchstart.touchspin"), C.is(":disabled") || (l(), u(), t.preventDefault(), t.stopPropagation())
                            }), g.up.on("touchstart.touchspin", function(t) {
                                g.up.off("mousedown.touchspin"), C.is(":disabled") || (l(), u(), t.preventDefault(), t.stopPropagation())
                            }), g.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function(t) {
                                x && (t.stopPropagation(), h())
                            }), g.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function(t) {
                                x && (t.stopPropagation(), h())
                            }), g.down.on("mousemove.touchspin touchmove.touchspin", function(t) {
                                x && (t.stopPropagation(), t.preventDefault())
                            }), g.up.on("mousemove.touchspin touchmove.touchspin", function(t) {
                                x && (t.stopPropagation(), t.preventDefault())
                            }), C.on("mousewheel.touchspin DOMMouseScroll.touchspin", function(t) {
                                if (p.mousewheel && C.is(":focus")) {
                                    var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                                    t.stopPropagation(), t.preventDefault(), e < 0 ? c() : l()
                                }
                            }), C.on("touchspin.destroy", function() {
                                var e;
                                e = C.parent(), h(), C.off(".touchspin"), e.hasClass("bootstrap-touchspin-injected") ? (C.siblings().remove(), C.unwrap()) : (t(".bootstrap-touchspin-injected", e).remove(), e.removeClass("bootstrap-touchspin")), C.data("alreadyinitialized", !1)
                            }), C.on("touchspin.uponce", function() {
                                h(), l()
                            }), C.on("touchspin.downonce", function() {
                                h(), c()
                            }), C.on("touchspin.startupspin", function() {
                                u()
                            }), C.on("touchspin.startdownspin", function() {
                                d()
                            }), C.on("touchspin.stopspin", function() {
                                h()
                            }), C.on("touchspin.updatesettings", function(e, i) {
                                ! function(e) {
                                    ! function(e) {
                                        if (p = t.extend({}, p, e), e.postfix) {
                                            var i = C.parent().find(".bootstrap-touchspin-postfix");
                                            0 === i.length && m.insertAfter(C), C.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix)
                                        }
                                        if (e.prefix) {
                                            var n = C.parent().find(".bootstrap-touchspin-prefix");
                                            0 === n.length && f.insertBefore(C), C.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix)
                                        }
                                        s()
                                    }(e), r();
                                    var i = g.input.val();
                                    "" !== i && (i = Number(p.callback_before_calculation(g.input.val())), g.input.val(p.callback_after_calculation(Number(i).toFixed(p.decimals))))
                                }(i)
                            });
                        var a
                    }
                }()
            })
        }
    }),
    /*!
     * jquery.nice-select.min.js
     */
    ! function(t) {
        t.fn.niceSelect = function(e) {
            function i(e) {
                e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                var i = e.next(),
                    n = e.find("option"),
                    o = e.find("option:selected");
                i.find(".current").html(o.data("display") || o.text()), n.each(function(e) {
                    var n = t(this),
                        o = n.data("display");
                    i.find("ul").append(t("<li></li>").attr("data-value", n.val()).attr("data-display", o || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
                })
            }
            if ("string" == typeof e) return "update" == e ? this.each(function() {
                var e = t(this),
                    n = t(this).next(".nice-select"),
                    o = n.hasClass("open");
                n.length && (n.remove(), i(e), o && e.next().trigger("click"))
            }) : "destroy" == e ? (this.each(function() {
                var e = t(this),
                    i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""))
            }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
            this.hide(), this.each(function() {
                var e = t(this);
                e.next().hasClass("nice-select") || i(e)
            }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function(e) {
                var i = t(this);
                t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
            }), t(document).on("click.nice_select", function(e) {
                0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
            }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(e) {
                var i = t(this),
                    n = i.closest(".nice-select");
                n.find(".selected").removeClass("selected"), i.addClass("selected");
                var o = i.data("display") || i.text();
                n.find(".current").text(o), n.prev("select").val(i.data("value")).trigger("change")
            }), t(document).on("keydown.nice_select", ".nice-select", function(e) {
                var i = t(this),
                    n = t(i.find(".focus") || i.find(".list .option.selected"));
                if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
                if (40 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var o = n.nextAll(".option:not(.disabled)").first();
                        o.length > 0 && (i.find(".focus").removeClass("focus"), o.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (38 == e.keyCode) {
                    if (i.hasClass("open")) {
                        var s = n.prevAll(".option:not(.disabled)").first();
                        s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
                else if (9 == e.keyCode && i.hasClass("open")) return !1
            });
            var n = document.createElement("a").style;
            return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"), this
        }
    }(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));
! function(t) {
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
        var e;
        try {
            e = require("jquery")
        } catch (t) {
            e = null
        }
        module.exports = t(e)
    } else window && (window.Slider = t(window.jQuery))
}(function(t) {
    var e = "slider",
        i = "bootstrapSlider";
    windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function() {}), windowIsDefined && !window.console.warn && (window.console.warn = function() {});
    var n;
    return function(t) {
            function e() {}

            function i(t) {
                function i(e) {
                    e.prototype.option || (e.prototype.option = function(e) {
                        t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                    })
                }

                function o(e, i) {
                    t.fn[e] = function(o) {
                        if ("string" == typeof o) {
                            for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                                var c = this[a],
                                    d = t.data(c, e);
                                if (d)
                                    if (t.isFunction(d[o]) && "_" !== o.charAt(0)) {
                                        var u = d[o].apply(d, r);
                                        if (void 0 !== u && u !== d) return u
                                    } else s("no such method '" + o + "' for " + e + " instance");
                                else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                            }
                            return this
                        }
                        var h = this.map(function() {
                            var n = t.data(this, e);
                            return n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n)), t(this)
                        });
                        return !h || h.length > 1 ? h : h[0]
                    }
                }
                if (t) {
                    var s = "undefined" == typeof console ? e : function(t) {
                        console.error(t)
                    };
                    return t.bridget = function(t, e) {
                        i(e), o(t, e)
                    }, t.bridget
                }
            }
            var n = Array.prototype.slice;
            i(t)
        }(t),
        function(t) {
            function o(e, i) {
                function n(t, e) {
                    var i = "data-slider-" + e.replace(/_/g, "-"),
                        n = t.getAttribute(i);
                    try {
                        return JSON.parse(n)
                    } catch (t) {
                        return n
                    }
                }
                this._state = {
                    value: null,
                    enabled: null,
                    offset: null,
                    size: null,
                    percentage: null,
                    inDrag: !1,
                    over: !1
                }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, "string" == typeof e ? this.element = document.querySelector(e) : e instanceof HTMLElement && (this.element = e), i = i ? i : {};
                for (var o = Object.keys(this.defaultOptions), s = 0; s < o.length; s++) {
                    var a = o[s],
                        l = i[a];
                    l = "undefined" != typeof l ? l : n(this.element, a), l = null !== l ? l : this.defaultOptions[a], this.options || (this.options = {}), this.options[a] = l
                }
                "auto" === this.options.rtl && (this.options.rtl = "rtl" === window.getComputedStyle(this.element).direction), "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right";
                var c, d, u, h, p, f = this.element.style.width,
                    m = !1,
                    v = this.element.parentNode;
                if (this.sliderElem) m = !0;
                else {
                    this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                    var g = document.createElement("div");
                    g.className = "slider-track", d = document.createElement("div"), d.className = "slider-track-low", c = document.createElement("div"), c.className = "slider-selection", u = document.createElement("div"), u.className = "slider-track-high", h = document.createElement("div"), h.className = "slider-handle min-slider-handle", h.setAttribute("role", "slider"), h.setAttribute("aria-valuemin", this.options.min), h.setAttribute("aria-valuemax", this.options.max), p = document.createElement("div"), p.className = "slider-handle max-slider-handle", p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", this.options.min), p.setAttribute("aria-valuemax", this.options.max), g.appendChild(d), g.appendChild(c), g.appendChild(u), this.rangeHighlightElements = [];
                    var y = this.options.rangeHighlights;
                    if (Array.isArray(y) && y.length > 0)
                        for (var b = 0; b < y.length; b++) {
                            var _ = document.createElement("div"),
                                w = y[b].class || "";
                            _.className = "slider-rangeHighlight slider-selection " + w, this.rangeHighlightElements.push(_), g.appendChild(_)
                        }
                    var k = Array.isArray(this.options.labelledby);
                    if (k && this.options.labelledby[0] && h.setAttribute("aria-labelledby", this.options.labelledby[0]), k && this.options.labelledby[1] && p.setAttribute("aria-labelledby", this.options.labelledby[1]), !k && this.options.labelledby && (h.setAttribute("aria-labelledby", this.options.labelledby), p.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                        for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", s = 0; s < this.options.ticks.length; s++) {
                            var C = document.createElement("div");
                            if (C.className = "slider-tick", this.options.ticks_tooltip) {
                                var T = this._addTickListener(),
                                    E = T.addMouseEnter(this, C, s),
                                    x = T.addMouseLeave(this, C);
                                this.ticksCallbackMap[s] = {
                                    mouseEnter: E,
                                    mouseLeave: x
                                }
                            }
                            this.ticks.push(C), this.ticksContainer.appendChild(C)
                        }
                        c.className += " tick-slider-selection"
                    }
                    if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
                        for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", s = 0; s < this.options.ticks_labels.length; s++) {
                            var S = document.createElement("div"),
                                A = 0 === this.options.ticks_positions.length,
                                I = this.options.reversed && A ? this.options.ticks_labels.length - (s + 1) : s;
                            S.className = "slider-tick-label", S.innerHTML = this.options.ticks_labels[I], this.tickLabels.push(S), this.tickLabelContainer.appendChild(S)
                        }
                    var D = function(t) {
                            var e = document.createElement("div");
                            e.className = "tooltip-arrow";
                            var i = document.createElement("div");
                            i.className = "tooltip-inner", t.appendChild(e), t.appendChild(i)
                        },
                        O = document.createElement("div");
                    O.className = "tooltip tooltip-main", O.setAttribute("role", "presentation"), D(O);
                    var N = document.createElement("div");
                    N.className = "tooltip tooltip-min", N.setAttribute("role", "presentation"), D(N);
                    var P = document.createElement("div");
                    P.className = "tooltip tooltip-max", P.setAttribute("role", "presentation"), D(P), this.sliderElem.appendChild(g), this.sliderElem.appendChild(O), this.sliderElem.appendChild(N), this.sliderElem.appendChild(P), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(h), this.sliderElem.appendChild(p), v.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
                }
                if (t && (this.$element = t(this.element), this.$sliderElem = t(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), r[this.options.scale] && (this.options.scale = r[this.options.scale]), m === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(t) {
                        this._removeProperty(this.trackLow, t), this._removeProperty(this.trackSelection, t), this._removeProperty(this.trackHigh, t)
                    }, this), [this.handle1, this.handle2].forEach(function(t) {
                        this._removeProperty(t, "left"), this._removeProperty(t, "right"), this._removeProperty(t, "top")
                    }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(t) {
                        this._removeProperty(t, "left"), this._removeProperty(t, "right"), this._removeProperty(t, "top"), this._removeProperty(t, "margin-left"), this._removeProperty(t, "margin-right"), this._removeProperty(t, "margin-top"), this._removeClass(t, "right"), this._removeClass(t, "left"), this._removeClass(t, "top")
                    }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = f, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = d || this.trackLow, this.trackSelection = c || this.trackSelection, this.trackHigh = u || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = h || this.handle1, this.handle2 = p || this.handle2, m === !0)
                    for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), s = 0; s < this.ticks.length; s++) this._removeClass(this.ticks[s], "round triangle hide");
                var j = ["round", "triangle", "custom"],
                    L = -1 !== j.indexOf(this.options.handle);
                if (L)
                    for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), s = 0; s < this.ticks.length; s++) this._addClass(this.ticks[s], this.options.handle);
                if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable) {
                    var M = !1;
                    try {
                        var $ = Object.defineProperty({}, "passive", {
                            get: function() {
                                M = !0
                            }
                        });
                        window.addEventListener("test", null, $)
                    } catch (t) {}
                    var H = !!M && {
                        passive: !0
                    };
                    this.sliderElem.addEventListener("touchstart", this.touchstart, H), this.sliderElem.addEventListener("touchmove", this.touchmove, H)
                }
                if (this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
                else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0;
                else {
                    if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
                        var z = this._addTickListener(),
                            U = z.addMouseEnter(this, this.handle1),
                            R = z.addMouseLeave(this, this.handle1);
                        this.handleCallbackMap.handle1 = {
                            mouseEnter: U,
                            mouseLeave: R
                        }, U = z.addMouseEnter(this, this.handle2), R = z.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
                            mouseEnter: U,
                            mouseLeave: R
                        }
                    } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1);
                    this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)
                }
                this.options.enabled ? this.enable() : this.disable()
            }
            var s = {
                    formatInvalidInputErrorMsg: function(t) {
                        return "Invalid input value '" + t + "' passed in"
                    },
                    callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
                },
                r = {
                    linear: {
                        toValue: function(t) {
                            var e = t / 100 * (this.options.max - this.options.min),
                                i = !0;
                            if (this.options.ticks_positions.length > 0) {
                                for (var n, o, s, r = 0, a = 1; a < this.options.ticks_positions.length; a++)
                                    if (t <= this.options.ticks_positions[a]) {
                                        n = this.options.ticks[a - 1], s = this.options.ticks_positions[a - 1], o = this.options.ticks[a], r = this.options.ticks_positions[a];
                                        break
                                    }
                                var l = (t - s) / (r - s);
                                e = n + l * (o - n), i = !1
                            }
                            var c = i ? this.options.min : 0,
                                d = c + Math.round(e / this.options.step) * this.options.step;
                            return d < this.options.min ? this.options.min : d > this.options.max ? this.options.max : d
                        },
                        toPercentage: function(t) {
                            if (this.options.max === this.options.min) return 0;
                            if (this.options.ticks_positions.length > 0) {
                                for (var e, i, n, o = 0, s = 0; s < this.options.ticks.length; s++)
                                    if (t <= this.options.ticks[s]) {
                                        e = s > 0 ? this.options.ticks[s - 1] : 0, n = s > 0 ? this.options.ticks_positions[s - 1] : 0, i = this.options.ticks[s], o = this.options.ticks_positions[s];
                                        break
                                    }
                                if (s > 0) {
                                    var r = (t - e) / (i - e);
                                    return n + r * (o - n)
                                }
                            }
                            return 100 * (t - this.options.min) / (this.options.max - this.options.min)
                        }
                    },
                    logarithmic: {
                        toValue: function(t) {
                            var e = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                i = Math.log(this.options.max),
                                n = Math.exp(e + (i - e) * t / 100);
                            return Math.round(n) === this.options.max ? this.options.max : (n = this.options.min + Math.round((n - this.options.min) / this.options.step) * this.options.step, n < this.options.min ? this.options.min : n > this.options.max ? this.options.max : n)
                        },
                        toPercentage: function(t) {
                            if (this.options.max === this.options.min) return 0;
                            var e = Math.log(this.options.max),
                                i = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                n = 0 === t ? 0 : Math.log(t);
                            return 100 * (n - i) / (e - i)
                        }
                    }
                };
            if (n = function(t, e) {
                    return o.call(this, t, e), this
                }, n.prototype = {
                    _init: function() {},
                    constructor: n,
                    defaultOptions: {
                        id: "",
                        min: 0,
                        max: 10,
                        step: 1,
                        precision: 0,
                        orientation: "horizontal",
                        value: 5,
                        range: !1,
                        selection: "before",
                        tooltip: "show",
                        tooltip_split: !1,
                        handle: "round",
                        reversed: !1,
                        rtl: "auto",
                        enabled: !0,
                        formatter: function(t) {
                            return Array.isArray(t) ? t[0] + " : " + t[1] : t
                        },
                        natural_arrow_keys: !1,
                        ticks: [],
                        ticks_positions: [],
                        ticks_labels: [],
                        ticks_snap_bounds: 0,
                        ticks_tooltip: !1,
                        scale: "linear",
                        focus: !1,
                        tooltip_position: null,
                        labelledby: null,
                        rangeHighlights: []
                    },
                    getElement: function() {
                        return this.sliderElem
                    },
                    getValue: function() {
                        return this.options.range ? this._state.value : this._state.value[0]
                    },
                    setValue: function(t, e, i) {
                        t || (t = 0);
                        var n = this.getValue();
                        this._state.value = this._validateInputValue(t);
                        var o = this._applyPrecision.bind(this);
                        this.options.range ? (this._state.value[0] = o(this._state.value[0]), this._state.value[1] = o(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = o(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
                        var s = this.options.range ? this._state.value : this._state.value[0];
                        return this._setDataVal(s), e === !0 && this._trigger("slide", s), n !== s && i === !0 && this._trigger("change", {
                            oldValue: n,
                            newValue: s
                        }), this
                    },
                    destroy: function() {
                        this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), t && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
                    },
                    disable: function() {
                        return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                    },
                    enable: function() {
                        return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                    },
                    toggle: function() {
                        return this._state.enabled ? this.disable() : this.enable(), this
                    },
                    isEnabled: function() {
                        return this._state.enabled
                    },
                    on: function(t, e) {
                        return this._bindNonQueryEventHandler(t, e), this
                    },
                    off: function(e, i) {
                        t ? (this.$element.off(e, i), this.$sliderElem.off(e, i)) : this._unbindNonQueryEventHandler(e, i)
                    },
                    getAttribute: function(t) {
                        return t ? this.options[t] : this.options
                    },
                    setAttribute: function(t, e) {
                        return this.options[t] = e, this
                    },
                    refresh: function() {
                        return this._removeSliderEventHandlers(), o.call(this, this.element, this.options), t && t.data(this.element, "slider", this), this
                    },
                    relayout: function() {
                        return this._resize(), this._layout(), this
                    },
                    _removeSliderEventHandlers: function() {
                        if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
                            for (var t = this.ticksContainer.getElementsByClassName("slider-tick"), e = 0; e < t.length; e++) t[e].removeEventListener("mouseenter", this.ticksCallbackMap[e].mouseEnter, !1), t[e].removeEventListener("mouseleave", this.ticksCallbackMap[e].mouseLeave, !1);
                            this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1)
                        }
                        this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1)), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), window.removeEventListener("resize", this.resize, !1)
                    },
                    _bindNonQueryEventHandler: function(t, e) {
                        void 0 === this.eventToCallbackMap[t] && (this.eventToCallbackMap[t] = []), this.eventToCallbackMap[t].push(e)
                    },
                    _unbindNonQueryEventHandler: function(t, e) {
                        var i = this.eventToCallbackMap[t];
                        if (void 0 !== i)
                            for (var n = 0; n < i.length; n++)
                                if (i[n] === e) {
                                    i.splice(n, 1);
                                    break
                                }
                    },
                    _cleanUpEventCallbacksMap: function() {
                        for (var t = Object.keys(this.eventToCallbackMap), e = 0; e < t.length; e++) {
                            var i = t[e];
                            delete this.eventToCallbackMap[i]
                        }
                    },
                    _showTooltip: function() {
                        this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0
                    },
                    _hideTooltip: function() {
                        this._state.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1
                    },
                    _setToolTipOnMouseOver: function(t) {
                        function e(t, e) {
                            return e ? [100 - t.percentage[0], this.options.range ? 100 - t.percentage[1] : t.percentage[1]] : [t.percentage[0], t.percentage[1]]
                        }
                        var i = this.options.formatter(t ? t.value[0] : this._state.value[0]),
                            n = t ? e(t, this.options.reversed) : e(this._state, this.options.reversed);
                        this._setText(this.tooltipInner, i), this.tooltip.style[this.stylePos] = n[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetWidth / 2 + "px")
                    },
                    _addTickListener: function() {
                        return {
                            addMouseEnter: function(t, e, i) {
                                var n = function() {
                                    var e = t._state,
                                        n = i >= 0 ? i : this.attributes["aria-valuenow"].value,
                                        o = parseInt(n, 10);
                                    e.value[0] = o, e.percentage[0] = t.options.ticks_positions[o], t._setToolTipOnMouseOver(e), t._showTooltip()
                                };
                                return e.addEventListener("mouseenter", n, !1), n
                            },
                            addMouseLeave: function(t, e) {
                                var i = function() {
                                    t._hideTooltip()
                                };
                                return e.addEventListener("mouseleave", i, !1), i
                            }
                        }
                    },
                    _layout: function() {
                        var t;
                        if (t = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = t[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), isNaN(this.options.formatter(this._state.value[0])) && this.handle1.setAttribute("aria-valuetext", this.options.formatter(this._state.value[0])), this.handle2.style[this.stylePos] = t[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), isNaN(this.options.formatter(this._state.value[1])) && this.handle2.setAttribute("aria-valuetext", this.options.formatter(this._state.value[1])), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
                            for (var e = 0; e < this.options.rangeHighlights.length; e++) {
                                var i = this._toPercentage(this.options.rangeHighlights[e].start),
                                    n = this._toPercentage(this.options.rangeHighlights[e].end);
                                if (this.options.reversed) {
                                    var o = 100 - n;
                                    n = 100 - i, i = o
                                }
                                var s = this._createHighlightRange(i, n);
                                s ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[e].style.top = s.start + "%", this.rangeHighlightElements[e].style.height = s.size + "%") : (this.options.rtl ? this.rangeHighlightElements[e].style.right = s.start + "%" : this.rangeHighlightElements[e].style.left = s.start + "%", this.rangeHighlightElements[e].style.width = s.size + "%") : this.rangeHighlightElements[e].style.display = "none"
                            }
                        if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                            var r, a = "vertical" === this.options.orientation ? "height" : "width";
                            r = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft";
                            var l = this._state.size / (this.options.ticks.length - 1);
                            if (this.tickLabelContainer) {
                                var c = 0;
                                if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[r] = -l / 2 + "px"), c = this.tickLabelContainer.offsetHeight;
                                else
                                    for (d = 0; d < this.tickLabelContainer.childNodes.length; d++) this.tickLabelContainer.childNodes[d].offsetHeight > c && (c = this.tickLabelContainer.childNodes[d].offsetHeight);
                                "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = c + "px")
                            }
                            for (var d = 0; d < this.options.ticks.length; d++) {
                                var u = this.options.ticks_positions[d] || this._toPercentage(this.options.ticks[d]);
                                this.options.reversed && (u = 100 - u), this.ticks[d].style[this.stylePos] = u + "%", this._removeClass(this.ticks[d], "in-selection"), this.options.range ? u >= t[0] && u <= t[1] && this._addClass(this.ticks[d], "in-selection") : "after" === this.options.selection && u >= t[0] ? this._addClass(this.ticks[d], "in-selection") : "before" === this.options.selection && u <= t[0] && this._addClass(this.ticks[d], "in-selection"), this.tickLabels[d] && (this.tickLabels[d].style[a] = l + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[d] ? (this.tickLabels[d].style.position = "absolute", this.tickLabels[d].style[this.stylePos] = u + "%", this.tickLabels[d].style[r] = -l / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[d].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[d].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[r] = this.sliderElem.offsetWidth / 2 * -1 + "px"))
                            }
                        }
                        var h;
                        if (this.options.range) {
                            h = this.options.formatter(this._state.value), this._setText(this.tooltipInner, h), this.tooltip.style[this.stylePos] = (t[1] + t[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetWidth / 2 + "px");
                            var p = this.options.formatter(this._state.value[0]);
                            this._setText(this.tooltipInner_min, p);
                            var f = this.options.formatter(this._state.value[1]);
                            this._setText(this.tooltipInner_max, f), this.tooltip_min.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-" + this.stylePos, -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-" + this.stylePos, -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = t[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-" + this.stylePos, -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-" + this.stylePos, -this.tooltip_max.offsetWidth / 2 + "px")
                        } else h = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, h), this.tooltip.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetWidth / 2 + "px");
                        if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(t[0], t[1]) + "%", this.trackSelection.style.top = Math.min(t[0], t[1]) + "%", this.trackSelection.style.height = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                        else {
                            "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(t[0], t[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(t[0], t[1]) + "%" : this.trackSelection.style.left = Math.min(t[0], t[1]) + "%", this.trackSelection.style.width = Math.abs(t[0] - t[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                            var m = this.tooltip_min.getBoundingClientRect(),
                                v = this.tooltip_max.getBoundingClientRect();
                            "bottom" === this.options.tooltip_position ? m.right > v.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : m.right > v.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
                        }
                    },
                    _createHighlightRange: function(t, e) {
                        return this._isHighlightRange(t, e) ? t > e ? {
                            start: e,
                            size: t - e
                        } : {
                            start: t,
                            size: e - t
                        } : null
                    },
                    _isHighlightRange: function(t, e) {
                        return t >= 0 && 100 >= t && e >= 0 && 100 >= e
                    },
                    _resize: function(t) {
                        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout()
                    },
                    _removeProperty: function(t, e) {
                        t.style.removeProperty ? t.style.removeProperty(e) : t.style.removeAttribute(e)
                    },
                    _mousedown: function(t) {
                        if (!this._state.enabled) return !1;
                        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
                        var e = this._getPercentage(t);
                        if (this.options.range) {
                            var i = Math.abs(this._state.percentage[0] - e),
                                n = Math.abs(this._state.percentage[1] - e);
                            this._state.dragged = n > i ? 0 : 1, this._adjustPercentageForRangeSliders(e)
                        } else this._state.dragged = 0;
                        this._state.percentage[this._state.dragged] = e, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
                        var o = this._calculateValue();
                        return this._trigger("slideStart", o), this._setDataVal(o), this.setValue(o, !1, !0), t.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0
                    },
                    _touchstart: function(t) {
                        if (void 0 === t.changedTouches) return void this._mousedown(t);
                        var e = t.changedTouches[0];
                        this.touchX = e.pageX, this.touchY = e.pageY
                    },
                    _triggerFocusOnHandle: function(t) {
                        0 === t && this.handle1.focus(), 1 === t && this.handle2.focus()
                    },
                    _keydown: function(t, e) {
                        if (!this._state.enabled) return !1;
                        var i;
                        switch (e.keyCode) {
                            case 37:
                            case 40:
                                i = -1;
                                break;
                            case 39:
                            case 38:
                                i = 1
                        }
                        if (i) {
                            if (this.options.natural_arrow_keys) {
                                var n = "vertical" === this.options.orientation && !this.options.reversed,
                                    o = "horizontal" === this.options.orientation && this.options.reversed;
                                (n || o) && (i = -i)
                            }
                            var s = this._state.value[t] + i * this.options.step,
                                r = s / this.options.max * 100;
                            if (this._state.keyCtrl = t, this.options.range) {
                                this._adjustPercentageForRangeSliders(r);
                                var a = this._state.keyCtrl ? this._state.value[0] : s,
                                    l = this._state.keyCtrl ? s : this._state.value[1];
                                s = [a, l]
                            }
                            return this._trigger("slideStart", s), this._setDataVal(s), this.setValue(s, !0, !0), this._setDataVal(s), this._trigger("slideStop", s), this._layout(), this._pauseEvent(e), delete this._state.keyCtrl, !1
                        }
                    },
                    _pauseEvent: function(t) {
                        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
                    },
                    _mousemove: function(t) {
                        if (!this._state.enabled) return !1;
                        var e = this._getPercentage(t);
                        this._adjustPercentageForRangeSliders(e), this._state.percentage[this._state.dragged] = e, this._layout();
                        var i = this._calculateValue(!0);
                        return this.setValue(i, !0, !0), !1
                    },
                    _touchmove: function(t) {
                        if (void 0 !== t.changedTouches) {
                            var e = t.changedTouches[0],
                                i = e.pageX - this.touchX,
                                n = e.pageY - this.touchY;
                            this._state.inDrag || ("vertical" === this.options.orientation && 5 >= i && i >= -5 && (n >= 15 || -15 >= n) ? this._mousedown(t) : 5 >= n && n >= -5 && (i >= 15 || -15 >= i) && this._mousedown(t))
                        }
                    },
                    _adjustPercentageForRangeSliders: function(t) {
                        if (this.options.range) {
                            var e = this._getNumDigitsAfterDecimalPlace(t);
                            e = e ? e - 1 : 0;
                            var i = this._applyToFixedAndParseFloat(t, e);
                            0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], e) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], e) > i ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._state.value[1] / this.options.max * 100 < t ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._state.value[0] / this.options.max * 100 > t && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus())
                        }
                    },
                    _mouseup: function() {
                        if (!this._state.enabled) return !1;
                        this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
                        var t = this._calculateValue(!0);
                        return this._layout(), this._setDataVal(t), this._trigger("slideStop", t), !1
                    },
                    _calculateValue: function(t) {
                        var e;
                        if (this.options.range ? (e = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (e[0] = this._toValue(this._state.percentage[0]), e[0] = this._applyPrecision(e[0])), 100 !== this._state.percentage[1] && (e[1] = this._toValue(this._state.percentage[1]), e[1] = this._applyPrecision(e[1]))) : (e = this._toValue(this._state.percentage[0]), e = parseFloat(e), e = this._applyPrecision(e)), t) {
                            for (var i = [e, 1 / 0], n = 0; n < this.options.ticks.length; n++) {
                                var o = Math.abs(this.options.ticks[n] - e);
                                o <= i[1] && (i = [this.options.ticks[n], o])
                            }
                            if (i[1] <= this.options.ticks_snap_bounds) return i[0]
                        }
                        return e
                    },
                    _applyPrecision: function(t) {
                        var e = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                        return this._applyToFixedAndParseFloat(t, e)
                    },
                    _getNumDigitsAfterDecimalPlace: function(t) {
                        var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                        return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
                    },
                    _applyToFixedAndParseFloat: function(t, e) {
                        var i = t.toFixed(e);
                        return parseFloat(i)
                    },
                    _getPercentage: function(t) {
                        !this.touchCapable || "touchstart" !== t.type && "touchmove" !== t.type || (t = t.touches[0]);
                        var e = t[this.mousePos],
                            i = this._state.offset[this.stylePos],
                            n = e - i;
                        "right" === this.stylePos && (n = -n);
                        var o = n / this._state.size * 100;
                        return o = Math.round(o / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (o = 100 - o), Math.max(0, Math.min(100, o))
                    },
                    _validateInputValue: function(t) {
                        if (isNaN(+t)) {
                            if (Array.isArray(t)) return this._validateArray(t), t;
                            throw new Error(s.formatInvalidInputErrorMsg(t))
                        }
                        return +t
                    },
                    _validateArray: function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            if ("number" != typeof i) throw new Error(s.formatInvalidInputErrorMsg(i))
                        }
                    },
                    _setDataVal: function(t) {
                        this.element.setAttribute("data-value", t), this.element.setAttribute("value", t), this.element.value = t
                    },
                    _trigger: function(e, i) {
                        i = i || 0 === i ? i : void 0;
                        var n = this.eventToCallbackMap[e];
                        if (n && n.length)
                            for (var o = 0; o < n.length; o++) {
                                var s = n[o];
                                s(i)
                            }
                        t && this._triggerJQueryEvent(e, i)
                    },
                    _triggerJQueryEvent: function(t, e) {
                        var i = {
                            type: t,
                            value: e
                        };
                        this.$element.trigger(i), this.$sliderElem.trigger(i)
                    },
                    _unbindJQueryEventHandlers: function() {
                        this.$element.off(), this.$sliderElem.off()
                    },
                    _setText: function(t, e) {
                        "undefined" != typeof t.textContent ? t.textContent = e : "undefined" != typeof t.innerText && (t.innerText = e)
                    },
                    _removeClass: function(t, e) {
                        for (var i = e.split(" "), n = t.className, o = 0; o < i.length; o++) {
                            var s = i[o],
                                r = new RegExp("(?:\\s|^)" + s + "(?:\\s|$)");
                            n = n.replace(r, " ")
                        }
                        t.className = n.trim()
                    },
                    _addClass: function(t, e) {
                        for (var i = e.split(" "), n = t.className, o = 0; o < i.length; o++) {
                            var s = i[o],
                                r = new RegExp("(?:\\s|^)" + s + "(?:\\s|$)"),
                                a = r.test(n);
                            a || (n += " " + s)
                        }
                        t.className = n.trim()
                    },
                    _offsetLeft: function(t) {
                        return t.getBoundingClientRect().left
                    },
                    _offsetRight: function(t) {
                        return t.getBoundingClientRect().right
                    },
                    _offsetTop: function(t) {
                        for (var e = t.offsetTop;
                            (t = t.offsetParent) && !isNaN(t.offsetTop);) e += t.offsetTop, "BODY" !== t.tagName && (e -= t.scrollTop);
                        return e
                    },
                    _offset: function(t) {
                        return {
                            left: this._offsetLeft(t),
                            right: this._offsetRight(t),
                            top: this._offsetTop(t)
                        }
                    },
                    _css: function(e, i, n) {
                        if (t) t.style(e, i, n);
                        else {
                            var o = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                                return e.toUpperCase()
                            });
                            e.style[o] = n
                        }
                    },
                    _toValue: function(t) {
                        return this.options.scale.toValue.apply(this, [t])
                    },
                    _toPercentage: function(t) {
                        return this.options.scale.toPercentage.apply(this, [t])
                    },
                    _setTooltipPosition: function() {
                        var t = [this.tooltip, this.tooltip_min, this.tooltip_max];
                        if ("vertical" === this.options.orientation) {
                            var e;
                            e = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right";
                            var i = "left" === e ? "right" : "left";
                            t.forEach(function(t) {
                                this._addClass(t, e), t.style[i] = "100%"
                            }.bind(this))
                        } else "bottom" === this.options.tooltip_position ? t.forEach(function(t) {
                            this._addClass(t, "bottom"), t.style.top = "22px"
                        }.bind(this)) : t.forEach(function(t) {
                            this._addClass(t, "top"), t.style.top = -this.tooltip.outerHeight - 14 + "px"
                        }.bind(this))
                    }
                }, t && t.fn) {
                var a = void 0;
                t.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), a = i) : (t.bridget(e, n), a = e), t.bridget(i, n), t(function() {
                    t("input[data-provide=slider]")[a]()
                })
            }
        }(t), n
}),
/*!
 * ajaxchimp.js
 */
/*!
 Mailchimp Ajax Submit
 jQuery Plugin
 Author: Siddharth Doshi
 Use:
 ===
 $('#form_id').ajaxchimp(options);
 - Form should have one <input> element with attribute 'type=email'
 - Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
 - All options are optional.
 Options:
 =======
 options = {
 language: 'en',
 callback: callbackFunction,
 url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
 }
 Notes:
 =====
 To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
 For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
 */
function(t) {
    "use strict";
    t.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(e, i) {
            t(e).ajaxChimp(i)
        }
    }, t.fn.ajaxChimp = function(e) {
        return t(this).each(function(i, n) {
            var o = t(n),
                s = o.find("input[type=email]"),
                r = o.find("label[for=" + s.attr("id") + "]"),
                a = t.extend({
                    url: o.attr("action"),
                    language: "en"
                }, e),
                l = a.url.replace("/post?", "/post-json?").concat("&c=?");
            o.attr("novalidate", "true"), s.attr("name", "EMAIL"), o.submit(function() {
                function e(e) {
                    if ("success" === e.result) i = "We have sent you a confirmation email", r.removeClass("error").addClass("valid"), s.removeClass("error").addClass("valid");
                    else {
                        s.removeClass("valid").addClass("error"), r.removeClass("valid").addClass("error");
                        var n = -1;
                        try {
                            var o = e.msg.split(" - ", 2);
                            if (void 0 === o[1]) i = e.msg;
                            else {
                                var l = parseInt(o[0], 10);
                                l.toString() === o[0] ? (n = o[0], i = o[1]) : (n = -1, i = e.msg)
                            }
                        } catch (t) {
                            n = -1, i = e.msg
                        }
                    }
                    "en" !== a.language && void 0 !== t.ajaxChimp.responses[i] && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[i]] && (i = t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[i]]), r.html(i), r.show(2e3), a.callback && a.callback(e)
                }
                var i, n = {},
                    c = o.serializeArray();
                t.each(c, function(t, e) {
                    n[e.name] = e.value
                }), t.ajax({
                    url: l,
                    data: n,
                    success: e,
                    dataType: "jsonp",
                    error: function(t, e) {
                        console.log("mailchimp ajax submit error: " + e)
                    }
                });
                var d = "Submitting...";
                return "en" !== a.language && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language].submit && (d = t.ajaxChimp.translations[a.language].submit), r.html(d).show(2e3), !1
            })
        }), this
    }
}(jQuery),
/*!
 * gmap.js
 */
window.marker = null;
var map = document.getElementById("map_canvas");
null != map && google.maps.event.addDomListener(window, "load", initialize);