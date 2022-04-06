/*! grapesjs-lory-slider - 0.1.5 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("grapesjs")))
        : "function" == typeof define && define.amd
        ? define(["grapesjs"], t)
        : "object" == typeof exports
        ? (exports["grapesjs-lory-slider"] = t(require("grapesjs")))
        : (e["grapesjs-lory-slider"] = t(e.grapesjs));
})(this, function (e) {
    return (function (e) {
        function t(s) {
            if (l[s]) return l[s].exports;
            var a = (l[s] = { i: s, l: !1, exports: {} });
            return e[s].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
        }
        var l = {};
        return (
            (t.m = e),
            (t.c = l),
            (t.d = function (e, l, s) {
                t.o(e, l) || Object.defineProperty(e, l, { configurable: !1, enumerable: !0, get: s });
            }),
            (t.n = function (e) {
                var l =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(l, "a", l), l;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 2))
        );
    })([
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = {
                sliderName: "lory-slider",
                slideName: "lory-slide",
                slidesName: "lory-slides",
                prevName: "lory-prev",
                nextName: "lory-next",
                frameName: "lory-frame",
                sliderSelector: "[data-lory-slider]",
                slidesSelector: "[data-lory-slides]",
                slideSelector: "[data-lory-slide]",
                prevSelector: "[data-lory-prev]",
                nextSelector: "[data-lory-next]",
                frameSelector: "[data-lory-frame]",
                sliderId: "data-lory-slider",
                slideId: "data-lory-slide",
                slidesId: "data-lory-slides",
                prevId: "data-lory-prev",
                nextId: "data-lory-next",
                frameId: "data-lory-frame",
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function (e, t) {
                var l = e.className;
                if ((l = l && l.toString()) && l.split(" ").indexOf(t) >= 0) return 1;
            };
            t.elHasClass = s;
        },
        function (e, t, l) {
            "use strict";
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                r = l(3),
                n = s(r),
                d = l(4),
                i = s(d),
                o = l(11),
                u = s(o);
            t.default = n.default.plugins.add("grapesjs-lory-slider", function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = a(
                        {
                            sliderBlock: {},
                            sliderProps: {},
                            frameProps: {},
                            slidesProps: {},
                            slideProps: {},
                            prevProps: {},
                            nextProps: {},
                            slideEls: '\n      <div class="gjs-lory-slide"></div>\n      <div class="gjs-lory-slide"></div>\n      <div class="gjs-lory-slide"></div>\n    ',
                            prevEl:
                                '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">\n        <g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g>\n      </svg>',
                            nextEl:
                                '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">\n        <g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g>\n      </svg>',
                            classFrame: "gjs-lory-frame",
                            classSlides: "gjs-lory-slides",
                            classSlide: "gjs-lory-slide",
                            classPrev: "gjs-lory-prev",
                            classNext: "gjs-lory-next",
                            script: "https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js",
                        },
                        t
                    );
                (0, i.default)(e, l), (0, u.default)(e, l);
            });
        },
        function (t, l) {
            t.exports = e;
        },
        function (e, t, l) {
            "use strict";
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = l(0),
                r = s(a),
                n = l(5),
                d = s(n),
                i = l(6),
                o = s(i),
                u = l(7),
                p = s(u),
                c = l(8),
                f = s(c),
                v = l(9),
                m = s(v),
                y = l(10),
                g = s(y);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.DomComponents,
                    s = l.getType("default");
                s.model, s.view, r.default.sliderName, r.default.slideName, r.default.sliderId, r.default.slideId;
                (0, d.default)(l, t), (0, o.default)(l, t), (0, p.default)(l, t), (0, f.default)(l, t), (0, m.default)(l, t), (0, g.default)(l, t);
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.getType("default"),
                    a = l.model,
                    n = l.view,
                    d = r.default.frameName,
                    i = r.default.prevSelector,
                    o = r.default.nextSelector,
                    u = r.default.sliderName,
                    p = r.default.slidesName,
                    c = r.default.prevName,
                    f = r.default.nextName,
                    v = r.default.sliderId;
                r.default.prevId, r.default.nextId, r.default.frameId, r.default.slidesId, r.default.slideId;
                e.addType(u, {
                    model: a.extend(
                        {
                            defaults: s(
                                {},
                                a.prototype.defaults,
                                {
                                    name: "Slider",
                                    "slides-to-scroll": 1,
                                    "enable-mouse-events": !1,
                                    "slide-speed": 300,
                                    "rewind-speed": 600,
                                    "snap-back-speed": 200,
                                    infinite: !1,
                                    rewind: !1,
                                    ease: "ease",
                                    droppable: i + ", " + o,
                                    style: { position: "relative", width: "100vw", margin: "0 auto" },
                                    traits: [
                                        { type: "checkbox", label: "Infinito", name: "infinite", changeProp: 1 },
                                        { type: "checkbox", label: "Retroceder", name: "rewind", changeProp: 1 },
                                        { type: "number", label: "Velocidade do slide (Milissegundos)", name: "slide-speed", changeProp: 1 },
                                        { type: "number", label: "Velocidade de retroceder (Milissegundo)", name: "rewind-speed", changeProp: 1 },
                                        { type: "number", label: "Slides para rolar", name: "slides-to-scroll", changeProp: 1 },
                                        { type: "select", label: "Tempo", name: "ease", changeProp: 1, options: ["ease", "linear", "ease-in", "ease-out", "ease-in-out"] },
                                    ],
                                    "script-deps": t.script,
                                    "class-frame": t.classFrame,
                                    "class-slides": t.classSlides,
                                    "class-prev": t.classPrev,
                                    "class-next": t.classNext,
                                    script: function () {
                                        var e = this,
                                            t = "{[ script-deps ]}",
                                            l = ["0", "false"],
                                            s = "{[ infinite ]}";
                                        s = "true" == s ? 1 : parseInt(s, 10);
                                        var a = {
                                                slidesToScroll: parseInt("{[ slides-to-scroll ]}", 10),
                                                enableMouseEvents: l.indexOf("{[ enable-mouse-events ]}") >= 0 ? 0 : 1,
                                                infinite: !isNaN(s) && s,
                                                rewind: !(l.indexOf("{[ rewind ]}") >= 0),
                                                slideSpeed: parseInt("{[ slide-speed ]}", 10),
                                                rewindSpeed: parseInt("{[ rewind-speed ]}", 10),
                                                snapBackSpeed: parseInt("{[ snap-back-speed ]}", 10),
                                                ease: "{[ ease ]}",
                                                classNameFrame: "{[ class-frame ]}",
                                                classNameSlideContainer: "{[ class-slides ]}",
                                                classNamePrevCtrl: "{[ class-prev ]}",
                                                classNameNextCtrl: "{[ class-next ]}",
                                            },
                                            r = function () {
                                                window.sliderLory = lory(e, a);
                                            };
                                        if ("undefined" == typeof lory) {
                                            var n = document.createElement("script");
                                            (n.src = t), (n.onload = r), document.head.appendChild(n);
                                        } else r();
                                    },
                                },
                                t.sliderProps
                            ),
                        },
                        {
                            isComponent: function (e) {
                                if (e.hasAttribute && e.hasAttribute(v)) return { type: u };
                            },
                        }
                    ),
                    view: n.extend({
                        init: function () {
                            var e = ["slides-to-scroll", "enable-mouse-events", "slide-speed", "rewind-speed", "snap-back-speed", "infinite", "rewind", "ease"],
                                l = e
                                    .map(function (e) {
                                        return "change:" + e;
                                    })
                                    .join(" ");
                            this.listenTo(this.model, l, this.render);
                            var s = this.model.components();
                            s.length ||
                                s.add(
                                    '<div data-gjs-type="' +
                                        d +
                                        '">\n              <div data-gjs-type="' +
                                        p +
                                        '">' +
                                        t.slideEls +
                                        '</div>\n          </div>\n          <span data-gjs-type="' +
                                        c +
                                        '">' +
                                        t.prevEl +
                                        '</span>\n          <span data-gjs-type="' +
                                        f +
                                        '">' +
                                        t.nextEl +
                                        "</span>"
                                );
                        },
                    }),
                });
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a),
                n = l(1);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.getType("default"),
                    a = l.model,
                    d = r.default.slidesName,
                    i = (r.default.slidesId, r.default.slideSelector),
                    o = r.default.frameSelector;
                e.addType(d, {
                    model: a.extend(
                        {
                            defaults: s({}, a.prototype.defaults, { name: "Slides", droppable: i, draggable: o, style: { display: "inline-block", "transition-delay": "1ms" } }, t.slidesProps),
                            init: function () {
                                var e = t.classSlides;
                                this.get("classes").pluck("name").indexOf(e) < 0 && this.addClass(e);
                            },
                        },
                        {
                            isComponent: function (e) {
                                if ((0, n.elHasClass)(e, t.classSlides)) return { type: d };
                            },
                        }
                    ),
                    view: l.view.extend({
                        init: function () {
                            this.listenTo(this.model.components(), "add remove", this.renderSlider);
                        },
                        renderSlider: function () {
                            var e = this.model.parent().parent();
                            e && e.view.render();
                        },
                    }),
                });
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a),
                n = l(1);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.getType("default"),
                    a = l.model,
                    d = l.view,
                    i = r.default.slideName,
                    o = (r.default.slideId, r.default.slidesSelector);
                e.addType(i, {
                    model: a.extend(
                        {
                            defaults: s(
                                {},
                                a.prototype.defaults,
                                {
                                    name: "Slide",
                                    draggable: o,
                                    style: {
                                        display: "inline-block",
                                        position: "relative",
                                        color: "#fff",
                                        width: "80vw",
                                        "margin-right": "10px",
                                        "vertical-align": "top",
                                        "min-height": "130px",
                                        "white-space": "normal",
                                        "background-color": "rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                t.slideProps
                            ),
                        },
                        {
                            isComponent: function (e) {
                                if ((0, n.elHasClass)(e, t.classSlide)) return { type: i };
                            },
                        }
                    ),
                    view: d,
                });
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a),
                n = l(1);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.getType("default"),
                    a = l.model,
                    d = r.default.prevName,
                    i = (r.default.prevId, r.default.sliderSelector),
                    o = t.classPrev,
                    u = d;
                e.addType(u, {
                    model: a.extend(
                        {
                            defaults: s(
                                {},
                                a.prototype.defaults,
                                { name: "Nav Previous", copyable: 0, draggable: i, style: { position: "absolute", display: "block", cursor: "pointer", top: "50%", left: 0, "margin-top": "-25px" } },
                                t.prevProps
                            ),
                            init: function () {
                                this.get("classes").pluck("name").indexOf(o) < 0 && this.addClass(o);
                            },
                        },
                        {
                            isComponent: function (e) {
                                if ((0, n.elHasClass)(e, o)) return { type: u };
                            },
                        }
                    ),
                    view: l.view,
                });
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a),
                n = l(1);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.getType("default"),
                    a = l.model,
                    d = r.default.nextName,
                    i = (r.default.nextId, r.default.sliderSelector),
                    o = t.classNext,
                    u = d;
                e.addType(u, {
                    model: a.extend(
                        {
                            defaults: s(
                                {},
                                a.prototype.defaults,
                                { name: "Nav Next", copyable: 0, draggable: i, style: { position: "absolute", display: "block", cursor: "pointer", top: "50%", right: 0, "margin-top": "-25px" } },
                                t.nextProps
                            ),
                            init: function () {
                                this.get("classes").pluck("name").indexOf(o) < 0 && this.addClass(o);
                            },
                        },
                        {
                            isComponent: function (e) {
                                if ((0, n.elHasClass)(e, o)) return { type: u };
                            },
                        }
                    ),
                    view: l.view,
                });
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a),
                n = l(1);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.getType("default"),
                    a = l.model,
                    d = l.view,
                    i = r.default.frameName,
                    o = (r.default.frameId, r.default.slidesSelector);
                e.addType(i, {
                    model: a.extend(
                        {
                            defaults: s({}, a.prototype.defaults, { name: "Slider Frame", droppable: o, style: { width: "80vw", margin: "0 auto", position: "relative", overflow: "hidden", "white-space": "nowrap" } }, t.frameProps),
                            init: function () {
                                var e = t.classFrame;
                                this.get("classes").pluck("name").indexOf(e) < 0 && this.addClass(e);
                            },
                        },
                        {
                            isComponent: function (e) {
                                if ((0, n.elHasClass)(e, t.classFrame)) return { type: i };
                            },
                        }
                    ),
                    view: d,
                });
            };
        },
        function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = arguments[t];
                            for (var s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
                        }
                        return e;
                    },
                a = l(0),
                r = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(a);
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = e.BlockManager,
                    a = t.sliderBlock,
                    n = r.default.sliderName;
                a &&
                    l.add(
                        n,
                        s(
                            {
                                label:
                                    '\n      <svg width="50px" class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>\n      </svg>\n      <div class="gjs-block-label">Slider</div>\n    ',
                                category: "BÃ¡sicos",
                                content: { type: n },
                            },
                            a
                        )
                    );
            };
        },
    ]);
});