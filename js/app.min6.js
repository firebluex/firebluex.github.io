! function(e) {
    "use strict";
    var t = {};
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = t), exports.me = t), e.me = t
}(this), "undefined" == typeof console && (console = {
        log: function() {},
        info: function() {},
        error: function() {
            alert(Array.prototype.slice.call(arguments).join(", "))
        }
    }),
    function() {
        var e, r = 0,
            t = ["ms", "moz", "webkit", "o"],
            i = window.requestAnimationFrame,
            n = window.cancelAnimationFrame;
        for (e = 0; e < t.length && !i; ++e) i = window[t[e] + "RequestAnimationFrame"];
        for (e = 0; e < t.length && !n; ++e) n = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
        i && n || (i = function(e) {
            var t = window.performance.now(),
                i = Math.max(0, 1e3 / 60 - (t - r)),
                n = window.setTimeout(function() {
                    e(t + i)
                }, i);
            return r = t + i, n
        }, n = function(e) {
            window.clearTimeout(e)
        }, window.requestAnimationFrame = i, window.cancelAnimationFrame = n)
    }(),
    function() {
        function n(e, t, i) {
            return e.prototype[t].apply(this, i)
        }
        var e = function() {
            Object.apply(this, arguments)
        };
        (e.prototype = Object.create(Object.prototype)).constructor = e, Object.defineProperty(e, "extend", {
            value: function e() {
                for (var r = {}, t = new Array(arguments.length), i = 0; i < arguments.length; i++) t.push(arguments[i]);

                function s() {
                    return this.init.apply(this, arguments), this
                }
                if (s.prototype = Object.create(this.prototype), t.forEach(function(e) {
                        var t, i, n;
                        t = s, i = r, n = e.__methods__ || e, Object.keys(n).forEach(function(e) {
                            if (i[e] = n[e], "function" != typeof n[e]) throw new TypeError("extend: Method `" + e + "` is not a function");
                            Object.defineProperty(t.prototype, e, {
                                configurable: !0,
                                value: n[e]
                            })
                        })
                    }), !("init" in s.prototype)) throw new TypeError("extend: Class is missing a constructor named `init`");
                return Object.defineProperty(s.prototype, "_super", {
                    value: n
                }), Object.defineProperty(s, "__methods__", {
                    value: r
                }), s.extend = e, s
            }
        }), "undefined" != typeof window ? window.Jay = e : module.exports = e
    }(), me.Object = window.Jay, me.Error = me.Object.extend.bind(Error)({
        init: function(e) {
            this.name = "me.Error", this.message = e
        }
    }),
    function() {
        var e, t, s = function(e) {
            return e.substring(0, 1).toUpperCase() + e.substring(1, e.length)
        };
        me.agent = (t = ["ms", "MS", "moz", "webkit", "o"], (e = {}).prefixed = function(e, i) {
            if (e in (i = i || window)) return i[e];
            var n, r = s(e);
            return t.some(function(e) {
                var t = e + r;
                return n = t in i ? i[t] : void 0
            }), n
        }, e.setPrefixed = function(e, i, n) {
            if (e in (n = n || window)) n[e] = i;
            else {
                var r = s(e);
                t.some(function(e) {
                    var t = e + r;
                    return t in n && (n[t] = i, !0)
                })
            }
        }, e)
    }(), me.device = function() {
        var n = {},
            r = !1,
            e = !1,
            t = !0,
            i = function(e) {
                return e.preventDefault(), "function" == typeof window.scroll && window.scroll(0, 0), !1
            },
            s = !1,
            o = !1,
            a = [];

        function h(e) {
            e.reading ? (n.accelerationX = e.reading.accelerationX, n.accelerationY = e.reading.accelerationY, n.accelerationZ = e.reading.accelerationZ) : (n.accelerationX = e.accelerationIncludingGravity.x, n.accelerationY = e.accelerationIncludingGravity.y, n.accelerationZ = e.accelerationIncludingGravity.z)
        }

        function l(e) {
            n.gamma = e.gamma, n.beta = e.beta, n.alpha = e.alpha
        }
        return n._domReady = function(e) {
            if (!o) {
                if (!document.body) return setTimeout(me.device._domReady, 13);
                for (document.removeEventListener && document.removeEventListener("DOMContentLoaded", me.device._domReady, !1), window.removeEventListener("load", me.device._domReady, !1); a.length;) a.shift().call(window, []);
                o = !0
            }
        }, n._check = function() {
            if (me.device._detectDevice(), me.device.isMobile && !me.device.cocoon && n.enableSwipe(!1), me.device.TouchEvent = !!("ontouchstart" in window), me.device.PointerEvent = !!window.PointerEvent, window.gesture = me.agent.prefixed("gesture"), me.device.touch = me.device.cocoon || me.device.TouchEvent || me.device.PointerEvent, me.device.maxTouchPoints = me.device.touch ? me.device.PointerEvent ? navigator.maxTouchPoints || 1 : 10 : 1, me.device.wheel = "onwheel" in document.createElement("div"), me.device.hasAccelerometer = void 0 !== window.DeviceMotionEvent || void 0 !== window.Windows && "function" == typeof Windows.Devices.Sensors.Accelerometer, this.hasPointerLockSupport = me.agent.prefixed("pointerLockElement", document), this.hasPointerLockSupport && (document.exitPointerLock = me.agent.prefixed("exitPointerLock", document)), window.DeviceOrientationEvent && (me.device.hasDeviceOrientation = !0), void 0 !== window.screen) {
                var e = window.screen;
                e.orientation = me.agent.prefixed("orientation", e), e.lockOrientation = me.agent.prefixed("lockOrientation", e), e.unlockOrientation = me.agent.prefixed("unlockOrientation", e)
            }
            this.hasFullscreenSupport = me.agent.prefixed("fullscreenEnabled", document) || document.mozFullScreenEnabled, document.exitFullscreen = me.agent.prefixed("cancelFullScreen", document) || me.agent.prefixed("exitFullscreen", document), navigator.vibrate = me.agent.prefixed("vibrate", navigator), this.hasWebAudio = !(!window.AudioContext && !window.webkitAudioContext);
            try {
                n.localStorage = !!window.localStorage
            } catch (e) {
                n.localStorage = !1
            }
            var t, i;
            window.addEventListener("blur", function() {
                me.sys.stopOnBlur && me.state.stop(!0), me.sys.pauseOnBlur && me.state.pause(!0)
            }, !1), window.addEventListener("focus", function() {
                me.sys.stopOnBlur && me.state.restart(!0), me.sys.resumeOnFocus && me.state.resume(!0)
            }, !1), void 0 !== document.hidden ? (t = "hidden", i = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden", i = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", i = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", i = "webkitvisibilitychange"), "string" == typeof i && document.addEventListener(i, function() {
                document[t] ? (me.sys.stopOnBlur && me.state.stop(!0), me.sys.pauseOnBlur && me.state.pause(!0)) : (me.sys.stopOnBlur && me.state.restart(!0), me.sys.resumeOnFocus && me.state.resume(!0))
            }, !1)
        }, n._detectDevice = function() {
            me.device.iOS = /iPhone|iPad|iPod/i.test(me.device.ua), me.device.android = /Android/i.test(me.device.ua), me.device.android2 = /Android 2/i.test(me.device.ua), me.device.linux = /Linux/i.test(me.device.ua), me.device.chromeOS = /CrOS/.test(me.device.ua), me.device.wp = /Windows Phone/i.test(me.device.ua), me.device.BlackBerry = /BlackBerry/i.test(me.device.ua), me.device.Kindle = /Kindle|Silk.*Mobile Safari/i.test(me.device.ua), me.device.isMobile = /Mobi/i.test(me.device.ua) || me.device.iOS || me.device.android || me.device.wp || me.device.BlackBerry || me.device.Kindle || !1, me.device.ejecta = void 0 !== window.ejecta, me.device.isWeixin = /MicroMessenger/i.test(me.device.ua), me.device.cocoon = navigator.isCocoonJS || void 0 !== window.Cocoon
        }, n.ua = navigator.userAgent, n.localStorage = !1, n.hasAccelerometer = !1, n.hasDeviceOrientation = !1, n.hasFullscreenSupport = !1, n.hasPointerLockSupport = !1, n.hasWebAudio = !1, n.nativeBase64 = "function" == typeof window.atob, n.maxTouchPoints = 1, n.touch = !1, n.wheel = !1, n.isMobile = !1, n.iOS = !1, n.android = !1, n.android2 = !1, n.linux = !1, n.ejecta = !1, n.isWeixin = !1, n.cocoon = !1, n.chromeOS = !1, n.wp = !1, n.BlackBerry = !1, n.Kindle = !1, n.accelerationX = 0, n.accelerationY = 0, n.accelerationZ = 0, n.gamma = 0, n.beta = 0, n.alpha = 0, n.language = navigator.language || navigator.browserLanguage || navigator.userLanguage || "en", n.onReady = function(e) {
            o ? e.call(window, []) : (a.push(e), s || ("complete" === document.readyState ? window.setTimeout(me.device._domReady, 0) : (document.addEventListener && document.addEventListener("DOMContentLoaded", me.device._domReady, !1), window.addEventListener("load", me.device._domReady, !1)), s = !0))
        }, n.enableSwipe = function(e) {
            !1 !== e ? !1 === t && (window.document.removeEventListener("touchmove", i, !1), t = !0) : !0 === t && (window.document.addEventListener("touchmove", i, !1), t = !1)
        }, n.requestFullscreen = function(e) {
            this.hasFullscreenSupport && ((e = e || me.video.getWrapper()).requestFullscreen = me.agent.prefixed("requestFullscreen", e) || e.mozRequestFullScreen, e.requestFullscreen())
        }, n.exitFullscreen = function() {
            this.hasFullscreenSupport && document.exitFullscreen()
        }, n.getScreenOrientation = function() {
            var e = "portrait",
                t = "landscape",
                i = window.screen;
            if (void 0 !== i) {
                var n = i.orientation;
                if (void 0 !== n && (n.type, 1)) return n.type;
                if ("string" == typeof n) return n
            }
            return "number" == typeof window.orientation ? 90 === Math.abs(window.orientation) ? t : e : window.outerWidth > window.outerHeight ? t : e
        }, n.lockOrientation = function(e) {
            return void 0 !== window.screen && void 0 !== screen.lockOrientation && screen.lockOrientation(e)
        }, n.unlockOrientation = function(e) {
            return void 0 !== window.screen && void 0 !== screen.unlockOrientation && screen.unlockOrientation(e)
        }, n.isPortrait = function() {
            return me.device.getScreenOrientation().includes("portrait")
        }, n.isLandscape = function() {
            return me.device.getScreenOrientation().includes("landscape")
        }, n.getStorage = function(e) {
            switch (e = e || "local") {
                case "local":
                    return me.save;
                default:
                    throw new me.Error("storage type " + e + " not supported")
            }
        }, n.turnOnPointerLock = function() {
            if (this.hasPointerLockSupport) {
                var e = me.video.getWrapper();
                if (me.device.ua.match(/Firefox/i)) {
                    var t = function() {
                        (me.agent.prefixed("fullscreenElement", document) || document.mozFullScreenElement) === e && (document.removeEventListener("fullscreenchange", t), document.removeEventListener("mozfullscreenchange", t), e.requestPointerLock = me.agent.prefixed("requestPointerLock", e), e.requestPointerLock())
                    };
                    document.addEventListener("fullscreenchange", t, !1), document.addEventListener("mozfullscreenchange", t, !1), me.device.requestFullscreen()
                } else e.requestPointerLock()
            }
        }, n.turnOffPointerLock = function() {
            this.hasPointerLockSupport && document.exitPointerLock()
        }, n.watchAccelerometer = function() {
            if (me.device.hasAccelerometer) {
                if (!r) {
                    if ("undefined" == typeof Windows) window.addEventListener("devicemotion", h, !1);
                    else {
                        var e = Windows.Devices.Sensors.Accelerometer.getDefault();
                        if (e) {
                            var t = e.minimumReportInterval,
                                i = 16 <= t ? t : 25;
                            e.reportInterval = i, e.addEventListener("readingchanged", h, !1)
                        }
                    }
                    r = !0
                }
                return !0
            }
            return !1
        }, n.unwatchAccelerometer = function() {
            r && ("undefined" == typeof Windows ? window.removeEventListener("devicemotion", h, !1) : Windows.Device.Sensors.Accelerometer.getDefault().removeEventListener("readingchanged", h, !1), r = !1)
        }, n.watchDeviceOrientation = function() {
            return me.device.hasDeviceOrientation && !e && (window.addEventListener("deviceorientation", l, !1), e = !0), !1
        }, n.unwatchDeviceOrientation = function() {
            e && (window.removeEventListener("deviceorientation", l, !1), e = !1)
        }, n.vibrate = function(e) {
            navigator.vibrate && navigator.vibrate(e)
        }, n
    }(), Object.defineProperty(me.device, "devicePixelRatio", {
        get: function() {
            return window.devicePixelRatio || 1
        }
    }), Object.defineProperty(me.device, "isFullscreen", {
        get: function() {
            return !(!me.device.hasFullscreenSupport || !me.agent.prefixed("fullscreenElement", document) && !document.mozFullScreenElement)
        }
    }), Object.defineProperty(me.device, "sound", {
        get: function() {
            return !Howler.noAudio
        }
    }),
    function() {
        var n, i, r, s, t, o, a, h, l, d, c, u, f, m;
        me.game = (s = !(r = !(i = !(n = {}))), o = 1, d = 1e3 / 60, f = c = l = h = a = t = 0, m = u = null, n.viewport = null, n.world = null, n.mergeGroup = !0, n.sortOn = "z", n.onLevelLoaded = function() {}, n.HASH = null, n.init = function(e, t) {
            i || (e = e || me.video.renderer.getWidth(), t = t || me.video.renderer.getHeight(), n.viewport = new me.Camera2d(0, 0, e, t), n.world = new me.Container(0, 0, e, t), n.world.name = "rootContainer", n.world._root = !0, n.world.anchorPoint.set(0, 0), me.collision.init(), m = me.video.renderer, me.event.publish(me.event.GAME_INIT), me.input._translatePointerEvents(), i = r = !0)
        }, n.reset = function() {
            me.collision.quadTree.clear(), n.world.destroy(), n.world.anchorPoint.set(0, 0), me.event.publish(me.event.GAME_RESET), n.updateFrameRate()
        }, n.updateFrameRate = function() {
            t = 0, o = ~~(.5 + 60 / me.sys.fps), d = 1e3 / me.sys.updatesPerSecond, a = 0, h = 10 * d, s = me.sys.fps > me.sys.updatesPerSecond
        }, n.getParentContainer = function(e) {
            return e.ancestor
        }, n.repaint = function() {
            r = !0
        }, n.update = function(e) {
            if (++t % o == 0)
                for (t = 0, me.timer.update(e), me.input._updateGamepads(), a += me.timer.getDelta(), a = Math.min(a, h), c = me.sys.interpolation ? me.timer.getDelta() : d, l = me.sys.interpolation ? c : Math.max(c, f); l <= a || me.sys.interpolation;)
                    if (u = window.performance.now(), me.collision.quadTree.clear(), me.collision.quadTree.insertContainer(n.world), r = n.world.update(c) || r, r = n.viewport.update(c) || r, me.timer.lastUpdate = window.performance.now(), f = me.timer.lastUpdate - u, a -= l, me.sys.interpolation) {
                        a = 0;
                        break
                    }
        }, n.draw = function(e) {
            if (r || s) {
                var t = (e = e || n.viewport).pos.x + e.offset.x,
                    i = e.pos.y + e.offset.y;
                n.world.currentTransform.translate(-t, -i), m.clear(), e.preDraw(m), n.world.preDraw(m), n.world.draw(m, e), e.draw(m), n.world.postDraw(m), e.postDraw(m), n.world.currentTransform.translate(t, i)
            }
            r = !1, m.flush()
        }, n)
    }(),
    function() {
        me.mod = "melonJS", me.version = "6.1.0";
        var e = !(me.sys = {
            fps: 60,
            updatesPerSecond: 60,
            interpolation: !1,
            scale: null,
            gravity: void 0,
            stopOnAudioError: !0,
            pauseOnBlur: !0,
            resumeOnFocus: !0,
            autoFocus: !0,
            stopOnBlur: !1,
            preRender: !1,
            checkVersion: function(e, t) {
                t = t || me.version;
                for (var i = e.split("."), n = t.split("."), r = Math.min(i.length, n.length), s = 0, o = 0; o < r && !(s = +i[o] - +n[o]); o++);
                return s || i.length - n.length
            }
        });
        Object.defineProperty(me, "initialized", {
            get: function() {
                return e
            }
        }), me.skipAutoInit = !1, !(me.boot = function() {
            var r;
            e || (me.device._check(), me.save._init(), me.game.HASH = (r = {}, document.location.hash && document.location.hash.substr(1).split("&").filter(function(e) {
                return "" !== e
            }).forEach(function(e) {
                var t = e.split("="),
                    i = t.shift(),
                    n = t.join("=");
                r[i] = n || !0
            }), r), me.loader.setNocache(me.game.HASH.nocache || !1), me.timer.init(), me.state.init(), me.pool.init(), !1 === me.device.isMobile && me.input._enableKeyboardEvent(), me.levelDirector.reset(), e = !0)
        }) === me.skipAutoInit ? me.device.onReady(function() {
            me.boot()
        }) : me.init = function() {
            me.boot(), me.device._domReady()
        }
    }(),
    function() {
        var t, e, i, n, r, s, o, a, h, l, d;
        me.timer = (t = {}, s = r = n = i = e = 0, o = Math.ceil(1e3 / me.sys.fps), a = 1e3 / me.sys.fps * 1.25, h = [], l = 0, d = function(e) {
            for (var t = 0, i = h.length; t < i; t++)
                if (h[t].timerId === e) {
                    h.splice(t, 1);
                    break
                }
        }, t.tick = 1, t.fps = 0, t.lastUpdate = window.performance.now(), t.init = function() {
            t.reset(), r = n = 0
        }, t.reset = function() {
            n = r = window.performance.now(), e = i = s = 0
        }, t.setTimeout = function(e, t, i) {
            return h.push({
                fn: e,
                delay: t,
                elapsed: 0,
                repeat: !1,
                timerId: ++l,
                pauseable: !0 === i || !0
            }), l
        }, t.setInterval = function(e, t, i) {
            return h.push({
                fn: e,
                delay: t,
                elapsed: 0,
                repeat: !0,
                timerId: ++l,
                pauseable: !0 === i || !0
            }), l
        }, t.clearTimeout = function(e) {
            me.utils.function.defer(d, this, e)
        }, t.clearInterval = function(e) {
            me.utils.function.defer(d, this, e)
        }, t.getTime = function() {
            return r
        }, t.getDelta = function() {
            return s
        }, t.countFPS = function() {
            i += s, ++e % 10 == 0 && (this.fps = me.Math.clamp(~~(1e3 * e / i), 0, me.sys.fps), e = i = 0)
        }, t.update = function(e) {
            return n = r, (s = (r = e) - n) < 0 && (s = 0), t.tick = a < s && me.sys.interpolation ? s / o : 1,
                function(e) {
                    for (var t = 0, i = h.length; t < i; t++) {
                        var n = h[t];
                        n.pauseable && me.state.isPaused() || (n.elapsed += e), n.elapsed >= n.delay && (n.fn.apply(this), !0 === n.repeat ? n.elapsed -= n.delay : me.timer.clearTimeout(n.timerId))
                    }
                }(s), s
        }, t)
    }(),
    function() {
        var e, a;
        me.pool = (a = {}, (e = {}).init = function() {
            e.register("me.Entity", me.Entity), e.register("me.CollectableEntity", me.CollectableEntity), e.register("me.LevelEntity", me.LevelEntity), e.register("me.Tween", me.Tween, !0), e.register("me.Color", me.Color, !0), e.register("me.Particle", me.Particle, !0), e.register("me.Sprite", me.Sprite), e.register("me.Vector2d", me.Vector2d, !0), e.register("me.Glyph", me.Glyph, !0), e.register("me.Matrix2d", me.Matrix2d, !0)
        }, e.register = function(e, t, i) {
            if (void 0 === t) throw new me.Error("Cannot register object '" + e + "', invalid class");
            a[e] = {
                class: t,
                pool: i ? [] : void 0
            }
        }, e.pull = function(e) {
            for (var t = new Array(arguments.length), i = 0; i < arguments.length; i++) t[i] = arguments[i];
            var n = a[e];
            if (n) {
                var r, s = n.class,
                    o = n.pool;
                return o && (r = o.pop()) ? (t.shift(), "function" == typeof r.onResetEvent ? r.onResetEvent.apply(r, t) : r.init.apply(r, t)) : (r = new((t[0] = s).bind.apply(s, t)), o && (r.className = e)), r
            }
            throw new me.Error("Cannot instantiate entity of type '" + e + "'")
        }, e.purge = function() {
            for (var e in a) a[e] && (a[e].pool = [])
        }, e.push = function(e) {
            var t = e.className;
            void 0 !== t && a[t] && a[t].pool.push(e)
        }, e.exists = function(e) {
            return e in a
        }, e)
    }(),
    function() {
        var e, t, i;
        me.Math = (e = {}, t = Math.PI / 180, i = 180 / Math.PI, e.isPowerOfTwo = function(e) {
            return 0 == (e & e - 1)
        }, e.nextPowerOfTwo = function(e) {
            return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e
        }, e.degToRad = function(e) {
            return e * t
        }, e.radToDeg = function(e) {
            return e * i
        }, e.clamp = function(e, t, i) {
            return e < t ? t : i < e ? i : +e
        }, e.random = function(e, t) {
            return ~~(Math.random() * (t - e)) + e
        }, e.randomFloat = function(e, t) {
            return Math.random() * (t - e) + e
        }, e.weightedRandom = function(e, t) {
            return ~~(Math.pow(Math.random(), 2) * (t - e)) + e
        }, e.round = function(e, t) {
            var i = Math.pow(10, t || 0);
            return ~~(.5 + e * i) / i
        }, e)
    }(), me.Vector2d = me.Object.extend({
        init: function(e, t) {
            return this.set(e || 0, t || 0)
        },
        _set: function(e, t) {
            return this.x = e, this.y = t, this
        },
        set: function(e, t) {
            if (e !== +e || t !== +t) throw new me.Vector2d.Error("invalid x,y parameters (not a number)");
            return this._set(e, t)
        },
        setZero: function() {
            return this.set(0, 0)
        },
        setV: function(e) {
            return this._set(e.x, e.y)
        },
        add: function(e) {
            return this._set(this.x + e.x, this.y + e.y)
        },
        sub: function(e) {
            return this._set(this.x - e.x, this.y - e.y)
        },
        scale: function(e, t) {
            return this._set(this.x * e, this.y * (void 0 !== t ? t : e))
        },
        toIso: function() {
            return this._set(this.x - this.y, .5 * (this.x + this.y))
        },
        to2d: function() {
            return this._set(this.y + this.x / 2, this.y - this.x / 2)
        },
        scaleV: function(e) {
            return this._set(this.x * e.x, this.y * e.y)
        },
        div: function(e) {
            return this._set(this.x / e, this.y / e)
        },
        abs: function() {
            return this._set(this.x < 0 ? -this.x : this.x, this.y < 0 ? -this.y : this.y)
        },
        clamp: function(e, t) {
            return new me.Vector2d(me.Math.clamp(this.x, e, t), me.Math.clamp(this.y, e, t))
        },
        clampSelf: function(e, t) {
            return this._set(me.Math.clamp(this.x, e, t), me.Math.clamp(this.y, e, t))
        },
        minV: function(e) {
            return this._set(this.x < e.x ? this.x : e.x, this.y < e.y ? this.y : e.y)
        },
        maxV: function(e) {
            return this._set(this.x > e.x ? this.x : e.x, this.y > e.y ? this.y : e.y)
        },
        floor: function() {
            return new me.Vector2d(Math.floor(this.x), Math.floor(this.y))
        },
        floorSelf: function() {
            return this._set(Math.floor(this.x), Math.floor(this.y))
        },
        ceil: function() {
            return new me.Vector2d(Math.ceil(this.x), Math.ceil(this.y))
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this.x), Math.ceil(this.y))
        },
        negate: function() {
            return new me.Vector2d(-this.x, -this.y)
        },
        negateSelf: function() {
            return this._set(-this.x, -this.y)
        },
        copy: function(e) {
            return this._set(e.x, e.y)
        },
        equals: function(e) {
            return this.x === e.x && this.y === e.y
        },
        normalize: function() {
            var e = this.length();
            return 0 < e ? this._set(this.x / e, this.y / e) : this
        },
        perp: function() {
            return this._set(this.y, -this.x)
        },
        rotate: function(e) {
            var t = this.x,
                i = this.y;
            return this._set(t * Math.cos(e) - i * Math.sin(e), t * Math.sin(e) + i * Math.cos(e))
        },
        dotProduct: function(e) {
            return this.x * e.x + this.y * e.y
        },
        length2: function() {
            return this.dotProduct(this)
        },
        length: function() {
            return Math.sqrt(this.length2())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        },
        distance: function(e) {
            var t = this.x - e.x,
                i = this.y - e.y;
            return Math.sqrt(t * t + i * i)
        },
        angle: function(e) {
            return Math.acos(me.Math.clamp(this.dotProduct(e) / (this.length() * e.length()), -1, 1))
        },
        project: function(e) {
            return this.scale(this.dotProduct(e) / e.length2())
        },
        projectN: function(e) {
            return this.scale(this.dotProduct(e))
        },
        clone: function() {
            return new me.Vector2d(this.x, this.y)
        },
        toString: function() {
            return "x:" + this.x + ",y:" + this.y
        }
    }), me.Vector2d.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.Vector2d.Error"
        }
    }), me.Vector3d = me.Object.extend({
        init: function(e, t, i) {
            return this.set(e || 0, t || 0, i || 0)
        },
        _set: function(e, t, i) {
            return this.x = e, this.y = t, this.z = i, this
        },
        set: function(e, t, i) {
            if (e !== +e || t !== +t || i !== +i) throw new me.Vector3d.Error("invalid x, y, z parameters (not a number)");
            return this._set(e, t, i)
        },
        setZero: function() {
            return this.set(0, 0, 0)
        },
        setV: function(e) {
            return this._set(e.x, e.y, void 0 !== e.z ? e.z : this.z)
        },
        add: function(e) {
            return this._set(this.x + e.x, this.y + e.y, this.z + (e.z || 0))
        },
        sub: function(e) {
            return this._set(this.x - e.x, this.y - e.y, this.z - (e.z || 0))
        },
        scale: function(e, t, i) {
            return t = void 0 !== t ? t : e, i = void 0 !== i ? i : e, this._set(this.x * e, this.y * t, this.z * i)
        },
        scaleV: function(e) {
            return this._set(this.x * e.x, this.y * e.y, this.z * (e.z || 1))
        },
        toIso: function() {
            return this._set(this.x - this.y, .5 * (this.x + this.y), this.z)
        },
        to2d: function() {
            return this._set(this.y + this.x / 2, this.y - this.x / 2, this.z)
        },
        div: function(e) {
            return this._set(this.x / e, this.y / e, this.z / e)
        },
        abs: function() {
            return this._set(this.x < 0 ? -this.x : this.x, this.y < 0 ? -this.y : this.y, this.z < 0 ? -this.z : this.z)
        },
        clamp: function(e, t) {
            return new me.Vector3d(me.Math.clamp(this.x, e, t), me.Math.clamp(this.y, e, t), me.Math.clamp(this.z, e, t))
        },
        clampSelf: function(e, t) {
            return this._set(me.Math.clamp(this.x, e, t), me.Math.clamp(this.y, e, t), me.Math.clamp(this.z, e, t))
        },
        minV: function(e) {
            var t = e.z || 0;
            return this._set(this.x < e.x ? this.x : e.x, this.y < e.y ? this.y : e.y, this.z < t ? this.z : t)
        },
        maxV: function(e) {
            var t = e.z || 0;
            return this._set(this.x > e.x ? this.x : e.x, this.y > e.y ? this.y : e.y, this.z > t ? this.z : t)
        },
        floor: function() {
            return new me.Vector3d(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
        },
        floorSelf: function() {
            return this._set(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
        },
        ceil: function() {
            return new me.Vector3d(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z))
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z))
        },
        negate: function() {
            return new me.Vector3d(-this.x, -this.y, -this.z)
        },
        negateSelf: function() {
            return this._set(-this.x, -this.y, -this.z)
        },
        copy: function(e) {
            return this._set(e.x, e.y, void 0 !== e.z ? e.z : this.z)
        },
        equals: function(e) {
            return this.x === e.x && this.y === e.y && this.z === (e.z || this.z)
        },
        normalize: function() {
            var e = this.length();
            return 0 < e ? this._set(this.x / e, this.y / e, this.z / e) : this
        },
        perp: function() {
            return this._set(this.y, -this.x, this.z)
        },
        rotate: function(e) {
            var t = this.x,
                i = this.y;
            return this._set(t * Math.cos(e) - i * Math.sin(e), t * Math.sin(e) + i * Math.cos(e), this.z)
        },
        dotProduct: function(e) {
            return this.x * e.x + this.y * e.y + this.z * (e.z || 1)
        },
        length2: function() {
            return this.dotProduct(this)
        },
        length: function() {
            return Math.sqrt(this.length2())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        },
        distance: function(e) {
            var t = this.x - e.x,
                i = this.y - e.y,
                n = this.z - (e.z || 0);
            return Math.sqrt(t * t + i * i + n * n)
        },
        angle: function(e) {
            return Math.acos(me.Math.clamp(this.dotProduct(e) / (this.length() * e.length()), -1, 1))
        },
        project: function(e) {
            return this.scale(this.dotProduct(e) / e.length2())
        },
        projectN: function(e) {
            return this.scale(this.dotProduct(e))
        },
        clone: function() {
            return new me.Vector3d(this.x, this.y, this.z)
        },
        toString: function() {
            return "x:" + this.x + ",y:" + this.y + ",z:" + this.z
        }
    }), me.Vector3d.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.Vector3d.Error"
        }
    }), me.ObservableVector2d = me.Vector2d.extend({
        init: function(e, t, i) {
            if (Object.defineProperty(this, "x", {
                    get: function() {
                        return this._x
                    },
                    set: function(e) {
                        var t = this.onUpdate(e, this._y, this._x, this._y);
                        this._x = t && "x" in t ? t.x : e
                    }
                }), Object.defineProperty(this, "y", {
                    get: function() {
                        return this._y
                    },
                    set: function(e) {
                        var t = this.onUpdate(this._x, e, this._x, this._y);
                        this._y = t && "y" in t ? t.y : e
                    }
                }), void 0 === i) throw new me.ObservableVector2d.Error("undefined `onUpdate` callback");
            this.setCallback(i.onUpdate), this._x = e || 0, this._y = t || 0
        },
        _set: function(e, t) {
            var i = this.onUpdate(e, t, this._x, this._y);
            return this._y = i && "x" in i && "y" in i ? (this._x = i.x, i.y) : (this._x = e, t), this
        },
        setMuted: function(e, t) {
            return this._x = e, this._y = t, this
        },
        setCallback: function(e) {
            if ("function" != typeof e) throw new me.ObservableVector2d.Error("invalid `onUpdate` callback");
            return this.onUpdate = e, this
        },
        add: function(e) {
            return this._set(this._x + e.x, this._y + e.y)
        },
        sub: function(e) {
            return this._set(this._x - e.x, this._y - e.y)
        },
        scale: function(e, t) {
            return this._set(this._x * e, this._y * (void 0 !== t ? t : e))
        },
        scaleV: function(e) {
            return this._set(this._x * e.x, this._y * e.y)
        },
        div: function(e) {
            return this._set(this._x / e, this._y / e)
        },
        abs: function() {
            return this._set(this._x < 0 ? -this._x : this._x, this._y < 0 ? -this._y : this._y)
        },
        clamp: function(e, t) {
            return new me.ObservableVector2d(me.Math.clamp(this.x, e, t), me.Math.clamp(this.y, e, t), {
                onUpdate: this.onUpdate
            })
        },
        clampSelf: function(e, t) {
            return this._set(me.Math.clamp(this._x, e, t), me.Math.clamp(this._y, e, t))
        },
        minV: function(e) {
            return this._set(this._x < e.x ? this._x : e.x, this._y < e.y ? this._y : e.y)
        },
        maxV: function(e) {
            return this._set(this._x > e.x ? this._x : e.x, this._y > e.y ? this._y : e.y)
        },
        floor: function() {
            return new me.ObservableVector2d(Math.floor(this._x), Math.floor(this._y), {
                onUpdate: this.onUpdate
            })
        },
        floorSelf: function() {
            return this._set(Math.floor(this._x), Math.floor(this._y))
        },
        ceil: function() {
            return new me.ObservableVector2d(Math.ceil(this._x), Math.ceil(this._y), {
                onUpdate: this.onUpdate
            })
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this._x), Math.ceil(this._y))
        },
        negate: function() {
            return new me.ObservableVector2d(-this._x, -this._y, {
                onUpdate: this.onUpdate
            })
        },
        negateSelf: function() {
            return this._set(-this._x, -this._y)
        },
        copy: function(e) {
            return this._set(e.x, e.y)
        },
        equals: function(e) {
            return this._x === e.x && this._y === e.y
        },
        normalize: function() {
            var e = this.length();
            return 0 < e ? this._set(this._x / e, this._y / e) : this
        },
        perp: function() {
            return this._set(this._y, -this._x)
        },
        rotate: function(e) {
            var t = this._x,
                i = this._y;
            return this._set(t * Math.cos(e) - i * Math.sin(e), t * Math.sin(e) + i * Math.cos(e))
        },
        dotProduct: function(e) {
            return this._x * e.x + this._y * e.y
        },
        lerp: function(e, t) {
            return this._x += (e.x - this._x) * t, this._y += (e.y - this._y) * t, this
        },
        distance: function(e) {
            return Math.sqrt((this._x - e.x) * (this._x - e.x) + (this._y - e.y) * (this._y - e.y))
        },
        clone: function() {
            return new me.ObservableVector2d(this._x, this._y, {
                onUpdate: this.onUpdate
            })
        },
        toVector2d: function() {
            return new me.Vector2d(this._x, this._y)
        },
        toString: function() {
            return "x:" + this._x + ",y:" + this._y
        }
    }), me.ObservableVector2d.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.ObservableVector2d.Error"
        }
    }), me.ObservableVector3d = me.Vector3d.extend({
        init: function(e, t, i, n) {
            if (Object.defineProperty(this, "x", {
                    get: function() {
                        return this._x
                    },
                    set: function(e) {
                        var t = this.onUpdate(e, this._y, this._z, this._x, this._y, this._z);
                        this._x = t && "x" in t ? t.x : e
                    }
                }), Object.defineProperty(this, "y", {
                    get: function() {
                        return this._y
                    },
                    set: function(e) {
                        var t = this.onUpdate(this._x, e, this._z, this._x, this._y, this._z);
                        this._y = t && "y" in t ? t.y : e
                    }
                }), Object.defineProperty(this, "z", {
                    get: function() {
                        return this._z
                    },
                    set: function(e) {
                        var t = this.onUpdate(this._x, this._y, e, this._x, this._y, this._z);
                        this._z = t && "z" in t ? t.z : e
                    }
                }), void 0 === n) throw new me.ObservableVector3d.Error("undefined `onUpdate` callback");
            this.setCallback(n.onUpdate), this._x = e || 0, this._y = t || 0, this._z = i || 0
        },
        _set: function(e, t, i) {
            var n = this.onUpdate(e, t, i, this._x, this._y, this._z);
            return this._z = n && "x" in n && "y" in n && "z" in n ? (this._x = n.x, this._y = n.y, n.z) : (this._x = e, this._y = t, i), this
        },
        setMuted: function(e, t, i) {
            return this._x = e, this._y = t, this._z = i, this
        },
        setCallback: function(e) {
            if ("function" != typeof e) throw new me.ObservableVector3d.Error("invalid `onUpdate` callback");
            return this.onUpdate = e, this
        },
        add: function(e) {
            return this._set(this._x + e.x, this._y + e.y, this._z + (e.z || 0))
        },
        sub: function(e) {
            return this._set(this._x - e.x, this._y - e.y, this._z - (e.z || 0))
        },
        scale: function(e, t, i) {
            return t = void 0 !== t ? t : e, i = void 0 !== i ? i : e, this._set(this._x * e, this._y * t, this._z * i)
        },
        scaleV: function(e) {
            return this._set(this._x * e.x, this._y * e.y, this._z * (e.z || 1))
        },
        div: function(e) {
            return this._set(this._x / e, this._y / e, this._z / e)
        },
        abs: function() {
            return this._set(this._x < 0 ? -this._x : this._x, this._y < 0 ? -this._y : this._y, this._Z < 0 ? -this._z : this._z)
        },
        clamp: function(e, t) {
            return new me.ObservableVector3d(me.Math.clamp(this._x, e, t), me.Math.clamp(this._y, e, t), me.Math.clamp(this._z, e, t), {
                onUpdate: this.onUpdate
            })
        },
        clampSelf: function(e, t) {
            return this._set(me.Math.clamp(this._x, e, t), me.Math.clamp(this._y, e, t), me.Math.clamp(this._z, e, t))
        },
        minV: function(e) {
            var t = e.z || 0;
            return this._set(this._x < e.x ? this._x : e.x, this._y < e.y ? this._y : e.y, this._z < t ? this._z : t)
        },
        maxV: function(e) {
            var t = e.z || 0;
            return this._set(this._x > e.x ? this._x : e.x, this._y > e.y ? this._y : e.y, this._z > t ? this._z : t)
        },
        floor: function() {
            return new me.ObservableVector3d(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), {
                onUpdate: this.onUpdate
            })
        },
        floorSelf: function() {
            return this._set(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
        },
        ceil: function() {
            return new me.ObservableVector3d(Math.ceil(this._x), Math.ceil(this._y), Math.ceil(this._z), {
                onUpdate: this.onUpdate
            })
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this._x), Math.ceil(this._y), Math.ceil(this._z))
        },
        negate: function() {
            return new me.ObservableVector3d(-this._x, -this._y, -this._z, {
                onUpdate: this.onUpdate
            })
        },
        negateSelf: function() {
            return this._set(-this._x, -this._y, -this._z)
        },
        copy: function(e) {
            return this._set(e.x, e.y, void 0 !== e.z ? e.z : this._z)
        },
        equals: function(e) {
            return this._x === e.x && this._y === e.y && this._z === (e.z || this._z)
        },
        normalize: function() {
            var e = this.length();
            return 0 < e ? this._set(this._x / e, this._y / e, this._z / e) : this
        },
        perp: function() {
            return this._set(this._y, -this._x, this._z)
        },
        rotate: function(e) {
            var t = this._x,
                i = this._y;
            return this._set(t * Math.cos(e) - i * Math.sin(e), t * Math.sin(e) + i * Math.cos(e), this._z)
        },
        dotProduct: function(e) {
            return this._x * e.x + this._y * e.y + this._z * (e.z || 1)
        },
        lerp: function(e, t) {
            return this._x += (e.x - this._x) * t, this._y += (e.y - this._y) * t, this._z += (e.z - this._z) * t, this
        },
        distance: function(e) {
            var t = this._x - e.x,
                i = this._y - e.y,
                n = this._z - (e.z || 0);
            return Math.sqrt(t * t + i * i + n * n)
        },
        clone: function() {
            return new me.ObservableVector3d(this._x, this._y, this._z, {
                onUpdate: this.onUpdate
            })
        },
        toVector3d: function() {
            return new me.Vector3d(this._x, this._y, this._z)
        },
        toString: function() {
            return "x:" + this._x + ",y:" + this._y + ",z:" + this._z
        }
    }), me.ObservableVector3d.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.ObservableVector3d.Error"
        }
    }), me.Matrix2d = me.Object.extend({
        init: function() {
            void 0 === this.val && (this.val = new Float32Array(9)), arguments.length && arguments[0] instanceof me.Matrix2d ? this.copy(arguments[0]) : 6 <= arguments.length ? this.setTransform.apply(this, arguments) : this.identity()
        },
        identity: function() {
            return this.setTransform(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        setTransform: function() {
            var e = this.val;
            return 9 === arguments.length ? (e[0] = arguments[0], e[1] = arguments[1], e[2] = arguments[2], e[3] = arguments[3], e[4] = arguments[4], e[5] = arguments[5], e[6] = arguments[6], e[7] = arguments[7], e[8] = arguments[8]) : 6 === arguments.length && (e[0] = arguments[0], e[1] = arguments[2], e[2] = arguments[4], e[3] = arguments[1], e[4] = arguments[3], e[5] = arguments[5], e[6] = 0, e[7] = 0, e[8] = 1), this
        },
        copy: function(e) {
            return this.val.set(e.val), this
        },
        multiply: function(e) {
            e = e.val;
            var t = this.val,
                i = t[0],
                n = t[1],
                r = t[3],
                s = t[4],
                o = e[0],
                a = e[1],
                h = e[3],
                l = e[4],
                d = e[6],
                c = e[7];
            return t[0] = i * o + r * a, t[1] = n * o + s * a, t[3] = i * h + r * l, t[4] = n * h + s * l, t[6] += i * d + r * c, t[7] += n * d + s * c, this
        },
        transpose: function() {
            var e, t = this.val;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        invert: function() {
            var e = this.val,
                t = e[0],
                i = e[1],
                n = e[2],
                r = e[3],
                s = e[4],
                o = e[5],
                a = e[6],
                h = e[7],
                l = e[8],
                d = l * s - o * h,
                c = o * a - l * r,
                u = h * r - s * a,
                f = t * d + i * c + n * u;
            return e[0] = d / f, e[1] = (n * h - l * i) / f, e[2] = (o * i - n * s) / f, e[3] = c / f, e[4] = (l * t - n * a) / f, e[5] = (n * r - o * t) / f, e[6] = u / f, e[7] = (i * a - h * t) / f, e[8] = (s * t - i * r) / f, this
        },
        multiplyVector: function(e) {
            var t = this.val,
                i = e.x,
                n = e.y;
            return e.x = i * t[0] + n * t[3] + t[6], e.y = i * t[1] + n * t[4] + t[7], e
        },
        multiplyVectorInverse: function(e) {
            var t = this.val,
                i = e.x,
                n = e.y,
                r = 1 / (t[0] * t[4] + t[3] * -t[1]);
            return e.x = t[4] * r * i + -t[3] * r * n + (t[7] * t[3] - t[6] * t[4]) * r, e.y = t[0] * r * n + -t[1] * r * i + (-t[7] * t[0] + t[6] * t[1]) * r, e
        },
        scale: function(e, t) {
            var i = this.val,
                n = e,
                r = void 0 === t ? n : t;
            return i[0] *= n, i[1] *= n, i[3] *= r, i[4] *= r, this
        },
        scaleV: function(e) {
            return this.scale(e.x, e.y)
        },
        scaleX: function(e) {
            return this.scale(e, 1)
        },
        scaleY: function(e) {
            return this.scale(1, e)
        },
        rotate: function(e) {
            if (0 !== e) {
                var t = this.val,
                    i = t[0],
                    n = t[1],
                    r = t[3],
                    s = t[4],
                    o = Math.sin(e),
                    a = Math.cos(e);
                t[0] = i * a + r * o, t[1] = n * a + s * o, t[3] = i * -o + r * a, t[4] = n * -o + s * a
            }
            return this
        },
        translate: function(e, t) {
            var i = this.val;
            return i[6] += i[0] * e + i[3] * t, i[7] += i[1] * e + i[4] * t, this
        },
        translateV: function(e) {
            return this.translate(e.x, e.y)
        },
        isIdentity: function() {
            var e = this.val;
            return 1 === e[0] && 0 === e[1] && 0 === e[2] && 0 === e[3] && 1 === e[4] && 0 === e[5] && 0 === e[6] && 0 === e[7] && 1 === e[8]
        },
        clone: function() {
            return me.pool.pull("me.Matrix2d", this)
        },
        toString: function() {
            var e = this.val;
            return "me.Matrix2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")"
        }
    }), Object.defineProperty(me.Matrix2d.prototype, "tx", {
        get: function() {
            return this.val[6]
        },
        configurable: !0
    }), Object.defineProperty(me.Matrix2d.prototype, "ty", {
        get: function() {
            return this.val[7]
        },
        configurable: !0
    }), me.Ellipse = me.Object.extend({
        init: function(e, t, i, n) {
            this.pos = new me.Vector2d, this._bounds = void 0, this.radius = NaN, this.radiusV = new me.Vector2d, this.radiusSq = new me.Vector2d, this.ratio = new me.Vector2d, this.shapeType = "Ellipse", this.setShape(e, t, i, n)
        },
        setShape: function(e, t, i, n) {
            var r = i / 2,
                s = n / 2;
            this.pos.set(e, t), this.radius = Math.max(r, s), this.ratio.set(r / this.radius, s / this.radius), this.radiusV.set(this.radius, this.radius).scaleV(this.ratio);
            var o = this.radius * this.radius;
            return this.radiusSq.set(o, o).scaleV(this.ratio), this.updateBounds(), this
        },
        rotate: function() {
            return this
        },
        scale: function(e, t) {
            return t = void 0 !== t ? t : e, this.setShape(this.pos.x, this.pos.y, 2 * this.radiusV.x * e, 2 * this.radiusV.y * t)
        },
        scaleV: function(e) {
            return this.scale(e.x, e.y)
        },
        transform: function() {
            return this
        },
        translate: function(e, t) {
            return this.pos.x += e, this.pos.y += t, this._bounds.translate(e, t), this
        },
        translateV: function(e) {
            return this.pos.add(e), this._bounds.translateV(e), this
        },
        containsPointV: function(e) {
            return this.containsPoint(e.x, e.y)
        },
        containsPoint: function(e, t) {
            return e -= this.pos.x, t -= this.pos.y, e * e / this.radiusSq.x + t * t / this.radiusSq.y <= 1
        },
        getBounds: function() {
            return this._bounds
        },
        updateBounds: function() {
            var e = this.radiusV.x,
                t = this.radiusV.y,
                i = this.pos.x - e,
                n = this.pos.y - t,
                r = 2 * e,
                s = 2 * t;
            return this._bounds ? this._bounds.setShape(i, n, r, s) : this._bounds = new me.Rect(i, n, r, s), this._bounds
        },
        clone: function() {
            return new me.Ellipse(this.pos.x, this.pos.y, 2 * this.radiusV.x, 2 * this.radiusV.y)
        }
    }), me.Polygon = me.Object.extend({
        init: function(e, t, i) {
            this.pos = new me.Vector2d, this._bounds = void 0, this.points = null, this.edges = [], this.normals = [], this.shapeType = "Polygon", this.setShape(e, t, i)
        },
        setShape: function(e, t, i) {
            if (this.pos.set(e, t), !Array.isArray(i)) return this;
            if (i[0] instanceof me.Vector2d) this.points = i;
            else {
                var n = this.points = [];
                i.forEach(function(e) {
                    n.push(new me.Vector2d(e.x, e.y))
                })
            }
            return this.recalc(), this.updateBounds(), this
        },
        transform: function(e) {
            for (var t = this.points, i = t.length, n = 0; n < i; n++) e.multiplyVector(t[n]);
            return this.recalc(), this.updateBounds(), this
        },
        toIso: function() {
            return this.rotate(Math.PI / 4).scale(Math.SQRT2, Math.SQRT1_2)
        },
        to2d: function() {
            return this.scale(Math.SQRT1_2, Math.SQRT2).rotate(-Math.PI / 4)
        },
        rotate: function(e) {
            if (0 !== e) {
                for (var t = this.points, i = t.length, n = 0; n < i; n++) t[n].rotate(e);
                this.recalc(), this.updateBounds()
            }
            return this
        },
        scale: function(e, t) {
            t = void 0 !== t ? t : e;
            for (var i = this.points, n = i.length, r = 0; r < n; r++) i[r].scale(e, t);
            return this.recalc(), this.updateBounds(), this
        },
        scaleV: function(e) {
            return this.scale(e.x, e.y)
        },
        recalc: function() {
            var e, t = this.edges,
                i = this.normals,
                n = this.points,
                r = n.length;
            if (r < 3) throw new me.Polygon.Error("Requires at least 3 points");
            for (e = 0; e < r; e++) void 0 === t[e] && (t[e] = new me.Vector2d), t[e].copy(n[(e + 1) % r]).sub(n[e]), void 0 === i[e] && (i[e] = new me.Vector2d), i[e].copy(t[e]).perp().normalize();
            return t.length = r, i.length = r, this
        },
        translate: function(e, t) {
            return this.pos.x += e, this.pos.y += t, this._bounds.translate(e, t), this
        },
        translateV: function(e) {
            return this.pos.add(e), this._bounds.translateV(e), this
        },
        containsPointV: function(e) {
            return this.containsPoint(e.x, e.y)
        },
        containsPoint: function(e, t) {
            for (var i = !1, n = this.pos.x, r = this.pos.y, s = this.points, o = s.length, a = 0, h = o - 1; a < o; h = a++) {
                var l = s[a].y + r,
                    d = s[a].x + n,
                    c = s[h].y + r,
                    u = s[h].x + n;
                t < l != t < c && e < (u - d) * (t - l) / (c - l) + d && (i = !i)
            }
            return i
        },
        getBounds: function() {
            return this._bounds
        },
        updateBounds: function() {
            return this._bounds || (this._bounds = new me.Rect(0, 0, 0, 0)), this._bounds.setPoints(this.points), this._bounds.translateV(this.pos), this._bounds
        },
        clone: function() {
            var t = [];
            return this.points.forEach(function(e) {
                t.push(e.clone())
            }), new me.Polygon(this.pos.x, this.pos.y, t)
        }
    }), me.Polygon.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.Polygon.Error"
        }
    }), me.Rect = me.Polygon.extend({
        init: function(e, t, i, n) {
            me.Polygon.prototype.init.apply(this, [e, t, [new me.Vector2d(0, 0), new me.Vector2d(i, 0), new me.Vector2d(i, n), new me.Vector2d(0, n)]]), this.shapeType = "Rectangle"
        },
        setShape: function(e, t, i, n) {
            var r = i;
            return 4 === arguments.length && ((r = this.points)[0].set(0, 0), r[1].set(i, 0), r[2].set(i, n), r[3].set(0, n)), me.Polygon.prototype.setShape.apply(this, [e, t, r]), this._width = this.points[2].x, this._height = this.points[2].y, this
        },
        resize: function(e, t) {
            return this.width = e, this.height = t, this
        },
        getBounds: function() {
            return this
        },
        setPoints: function(e) {
            var t = 1 / 0,
                i = 1 / 0,
                n = -1 / 0,
                r = -1 / 0;
            return e.forEach(function(e) {
                t = Math.min(t, e.x), i = Math.min(i, e.y), n = Math.max(n, e.x), r = Math.max(r, e.y)
            }), this.setShape(t, i, n - t, r - i), this
        },
        recalc: function() {
            return me.Polygon.prototype.recalc.apply(this), this._width = this.points[2].x, this._height = this.points[2].y, this
        },
        updateBounds: function() {
            return this
        },
        clone: function() {
            return new me.Rect(this.pos.x, this.pos.y, this._width, this._height)
        },
        copy: function(e) {
            return this.setShape(e.pos.x, e.pos.y, e._width, e._height)
        },
        translate: function(e, t) {
            return this.pos.x += e, this.pos.y += t, this
        },
        translateV: function(e) {
            return this.translate(e.x, e.y)
        },
        union: function(e) {
            var t = Math.min(this.left, e.left),
                i = Math.min(this.top, e.top);
            return this.resize(Math.max(this.right, e.right) - t, Math.max(this.bottom, e.bottom) - i), this.pos.set(t, i), this
        },
        overlaps: function(e) {
            return this.left < e.right && e.left < this.right && this.top < e.bottom && e.top < this.bottom
        },
        contains: function(e) {
            return e.left >= this.left && e.right <= this.right && e.top >= this.top && e.bottom <= this.bottom
        },
        containsPoint: function(e, t) {
            return e >= this.left && e <= this.right && t >= this.top && t <= this.bottom
        },
        equals: function(e) {
            return e.left === this.left && e.right === this.right && e.top === this.top && e.bottom === this.bottom
        },
        isFinite: function() {
            return isFinite(this.pos.x) && isFinite(this.pos.y) && isFinite(this._width) && isFinite(this._height)
        },
        toPolygon: function() {
            return new me.Polygon(this.pos.x, this.pos.y, this.points)
        }
    }), Object.defineProperty(me.Rect.prototype, "left", {
        get: function() {
            return this.pos.x
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "right", {
        get: function() {
            var e = this._width;
            return this.pos.x + e || e
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "top", {
        get: function() {
            return this.pos.y
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "bottom", {
        get: function() {
            var e = this._height;
            return this.pos.y + e || e
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(e) {
            this.points[1].x = this.points[2].x = e, this.recalc()
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(e) {
            this.points[2].y = this.points[3].y = e, this.recalc()
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "centerX", {
        get: function() {
            return this.pos.x + this._width / 2
        },
        set: function(e) {
            this.pos.x = e - this._width / 2
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "centerY", {
        get: function() {
            return this.pos.y + this._height / 2
        },
        set: function(e) {
            this.pos.y = e - this._height / 2
        },
        configurable: !0
    }), me.Line = me.Polygon.extend({
        containsPointV: function(e) {
            return this.containsPoint(e.x, e.y)
        },
        containsPoint: function(e, t) {
            e -= this.pos.x, t -= this.pos.y;
            var i = this.points[0],
                n = this.points[1];
            return (t - i.y) * (n.x - i.x) == (n.y - i.y) * (e - i.x)
        },
        recalc: function() {
            var e = this.edges,
                t = this.normals,
                i = this.points;
            if (2 !== i.length) throw new me.Line.Error("Requires exactly 2 points");
            return void 0 === e[0] && (e[0] = new me.Vector2d), e[0].copy(i[1]).sub(i[0]), void 0 === t[0] && (t[0] = new me.Vector2d), t[0].copy(e[0]).perp().normalize(), this
        },
        clone: function() {
            var t = [];
            return this.points.forEach(function(e) {
                t.push(e.clone())
            }), new me.Line(this.pos.x, this.pos.y, t)
        }
    }), me.Line.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.Line.Error"
        }
    }), me.Body = me.Rect.extend({
        init: function(e, t, i) {
            if (this.ancestor = e, void 0 === this.shapes && (this.shapes = []), this.collisionMask = me.collision.types.ALL_OBJECT, this.collisionType = me.collision.types.ENEMY_OBJECT, void 0 === this.vel && (this.vel = new me.Vector2d), this.vel.set(0, 0), void 0 === this.accel && (this.accel = new me.Vector2d), this.accel.set(0, 0), void 0 === this.force && (this.force = new me.Vector2d), this.force.set(0, 0), void 0 === this.friction && (this.friction = new me.Vector2d), this.friction.set(0, 0), this.bounce = 0, this.mass = 1, void 0 === this.maxVel && (this.maxVel = new me.Vector2d), this.maxVel.set(490, 490), void 0 === this.gravity && (this.gravity = new me.Vector2d), this.gravity.set(0, "number" == typeof me.sys.gravity ? me.sys.gravity : .98), this.falling = !1, this.jumping = !1, me.Rect.prototype.init.apply(this, [0, 0, this.ancestor.width, this.ancestor.height]), "function" == typeof i && (this.onBodyUpdate = i), Array.isArray(t)) {
                for (var n = 0; n < t.length; n++) this.addShape(t[n], !0);
                this.updateBounds()
            }
        },
        addShape: function(e, t) {
            return e instanceof me.Rect ? this.shapes.push(e.toPolygon()) : this.shapes.push(e), !0 !== t && this.updateBounds(), this.shapes.length
        },
        addShapesFromJSON: function(e, t, i) {
            var n;
            if (i = i || 1, void 0 === e.rigidBodies) {
                if (void 0 === (n = e[t])) throw new me.Body.Error("Identifier (" + t + ") undefined for the given PhysicsEditor JSON object)");
                if (n.length) {
                    for (var r = 0; r < n.length; r++) {
                        for (var s = [], o = 0; o < n[r].shape.length; o += 2) s.push(new me.Vector2d(n[r].shape[o], n[r].shape[o + 1]));
                        this.addShape(new me.Polygon(0, 0, s), !0)
                    }
                    this.mass = n[0].density || 0, this.friction.set(n[0].friction || 0, n[0].friction || 0), this.bounce = n[0].bounce || 0
                }
            } else {
                if (e.rigidBodies.forEach(function(e) {
                        e.name === t && (n = e)
                    }), void 0 === n) throw new me.Body.Error("Identifier (" + t + ") undefined for the given PhysicsEditor JSON object)");
                this.pos.set(n.origin.x, 1 - n.origin.y).scale(i);
                var a = this;
                n.polygons.forEach(function(e) {
                    var t = [];
                    e.forEach(function(e) {
                        t.push(new me.Vector2d(e.x, 1 - e.y).scale(i))
                    }), a.addShape(new me.Polygon(0, 0, t), !0)
                }), n.circles.forEach(function(e) {
                    a.addShape(new me.Ellipse(e.cx * i, (1 - e.cy) * i, 2 * e.r * i, 2 * e.r * i), !0)
                })
            }
            return this.updateBounds(), this.shapes.length
        },
        getShape: function(e) {
            return this.shapes[e || 0]
        },
        removeShape: function(e) {
            return me.utils.array.remove(this.shapes, e), this.updateBounds(), this.shapes.length
        },
        removeShapeAt: function(e) {
            return this.removeShape(this.getShape(e))
        },
        setCollisionMask: function(e) {
            this.collisionMask = e
        },
        respondToCollision: function(e) {
            var t = e.overlapV;
            if (this.ancestor.pos.sub(t), 0 !== t.x && (this.vel.x = ~~(.5 + this.vel.x - t.x) || 0, 0 < this.bounce && (this.vel.x *= -this.bounce)), 0 !== t.y) {
                this.vel.y = ~~(.5 + this.vel.y - t.y) || 0, 0 < this.bounce && (this.vel.y *= -this.bounce);
                var i = Math.sign(this.gravity.y) || 1;
                this.falling = t.y >= i, this.jumping = t.y <= -i
            }
        },
        updateBounds: function() {
            if (0 < this.shapes.length) {
                var e = this.shapes[0].getBounds();
                this.pos.setV(e.pos), this.resize(e.width, e.height);
                for (var t = 1; t < this.shapes.length; t++) this.union(this.shapes[t].getBounds())
            }
            return "function" == typeof this.onBodyUpdate && this.onBodyUpdate(this), this
        },
        setVelocity: function(e, t) {
            this.accel.x = 0 !== e ? e : this.accel.x, this.accel.y = 0 !== t ? t : this.accel.y, this.setMaxVelocity(e, t)
        },
        setMaxVelocity: function(e, t) {
            this.maxVel.x = e, this.maxVel.y = t
        },
        setFriction: function(e, t) {
            this.friction.x = e || 0, this.friction.y = t || 0
        },
        applyFriction: function(e) {
            var t = this.friction.x * me.timer.tick,
                i = e.x + t,
                n = e.x - t,
                r = this.friction.y * me.timer.tick,
                s = e.y + r,
                o = e.y - r;
            e.x = i < 0 ? i : 0 < n ? n : 0, e.y = s < 0 ? s : 0 < o ? o : 0
        },
        computeVelocity: function(e) {
            this.force.x && (e.x += this.force.x * me.timer.tick), this.force.y && (e.y += this.force.y * me.timer.tick), (this.friction.x || this.friction.y) && this.applyFriction(e), this.gravity.y && (e.x += this.gravity.x * this.mass * me.timer.tick), this.gravity.y && (e.y += this.gravity.y * this.mass * me.timer.tick, this.falling = 0 < e.y * Math.sign(this.gravity.y), this.jumping = !this.falling && this.jumping), 0 !== e.y && (e.y = me.Math.clamp(e.y, -this.maxVel.y, this.maxVel.y)), 0 !== e.x && (e.x = me.Math.clamp(e.x, -this.maxVel.x, this.maxVel.x))
        },
        update: function() {
            return this.computeVelocity(this.vel), this.ancestor.pos.add(this.vel), 0 !== this.vel.x || 0 !== this.vel.y
        },
        destroy: function() {
            this.onBodyUpdate = null, this.ancestor = null, this.shapes.length = 0
        }
    }), me.Body.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.Body.Error"
        }
    }),
    function() {
        var s = [],
            o = function(e, t, i, n) {
                if (0 < s.length) {
                    var r = s.pop();
                    return r.bounds = e, r.max_objects = t || 4, r.max_levels = i || 4, r.level = n || 0, r
                }
                return new me.QuadTree(e, t, i, n)
            },
            u = new me.Vector2d;

        function e(e, t, i, n) {
            this.max_objects = t || 4, this.max_levels = i || 4, this.level = n || 0, this.bounds = e, this.objects = [], this.nodes = []
        }
        e.prototype.split = function() {
            var e = this.level + 1,
                t = ~~(.5 + this.bounds.width / 2),
                i = ~~(.5 + this.bounds.height / 2),
                n = ~~(.5 + this.bounds.pos.x),
                r = ~~(.5 + this.bounds.pos.y);
            this.nodes[0] = o({
                pos: {
                    x: n + t,
                    y: r
                },
                width: t,
                height: i
            }, this.max_objects, this.max_levels, e), this.nodes[1] = o({
                pos: {
                    x: n,
                    y: r
                },
                width: t,
                height: i
            }, this.max_objects, this.max_levels, e), this.nodes[2] = o({
                pos: {
                    x: n,
                    y: r + i
                },
                width: t,
                height: i
            }, this.max_objects, this.max_levels, e), this.nodes[3] = o({
                pos: {
                    x: n + t,
                    y: r + i
                },
                width: t,
                height: i
            }, this.max_objects, this.max_levels, e)
        }, e.prototype.getIndex = function(e) {
            var t = e.getBounds(),
                i = t.pos;
            (e.floating || e.ancestor && e.ancestor.floating) && (i = me.game.viewport.localToWorld(i.x, i.y, u));
            var n = -1,
                r = i.x,
                s = i.y,
                o = t.width,
                a = t.height,
                h = this.bounds.pos.x + this.bounds.width / 2,
                l = this.bounds.pos.y + this.bounds.height / 2,
                d = s < l && s + a < l,
                c = l < s;
            return r < h && r + o < h ? d ? n = 1 : c && (n = 2) : h < r && (d ? n = 0 : c && (n = 3)), n
        }, e.prototype.insertContainer = function(e) {
            for (var t, i = e.children.length; i--, t = e.children[i];) !0 !== t.isKinematic && (t instanceof me.Container ? ("rootContainer" !== t.name && this.insert(t), this.insertContainer(t)) : "function" == typeof t.getBounds && this.insert(t))
        }, e.prototype.insert = function(e) {
            var t = -1;
            if (0 < this.nodes.length && -1 !== (t = this.getIndex(e))) this.nodes[t].insert(e);
            else if (this.objects.push(e), this.objects.length > this.max_objects && this.level < this.max_levels) {
                0 === this.nodes.length && this.split();
                for (var i = 0; i < this.objects.length;) - 1 !== (t = this.getIndex(this.objects[i])) ? this.nodes[t].insert(this.objects.splice(i, 1)[0]) : i += 1
            }
        }, e.prototype.retrieve = function(e, t) {
            var i = this.objects;
            if (0 < this.nodes.length) {
                var n = this.getIndex(e);
                if (-1 !== n) i = i.concat(this.nodes[n].retrieve(e));
                else
                    for (var r = 0; r < this.nodes.length; r += 1) i = i.concat(this.nodes[r].retrieve(e))
            }
            return "function" == typeof t && i.sort(t), i
        }, e.prototype.remove = function(e) {
            var t = !1;
            if (void 0 === e.getBounds) return !1;
            if (0 < this.nodes.length) {
                var i = this.getIndex(e); - 1 !== i && (t = me.utils.array.remove(this.nodes[i], e)) && this.nodes[i].isPrunable() && this.nodes.splice(i, 1)
            }
            return !1 === t && -1 !== this.objects.indexOf(e) && (me.utils.array.remove(this.objects, e), t = !0), t
        }, e.prototype.isPrunable = function() {
            return !(this.hasChildren() || 0 < this.objects.length)
        }, e.prototype.hasChildren = function() {
            for (var e = 0; e < this.nodes.length; e += 1) {
                var t = this.nodes[e];
                if (0 < t.length || 0 < t.objects.length) return !0
            }
            return !1
        }, e.prototype.clear = function(e) {
            for (var t = this.objects.length = 0; t < this.nodes.length; t += 1) this.nodes[t].clear(), i = this.nodes[t], s.push(i);
            var i;
            void(this.nodes.length = 0) !== e && this.bounds.setShape(e.pos.x, e.pos.y, e.width, e.height)
        }, me.QuadTree = e
    }(),
    function() {
        for (var E = -1, r = 0, A = 1, C = [], e = 0; e < 10; e++) C.push(new me.Vector2d);
        for (var g = [], t = 0; t < 5; t++) g.push([]);
        var f, c = {
            pos: new me.Vector2d(0, 0),
            ancestor: {
                _absPos: new me.Vector2d(0, 0)
            }
        };

        function y(e, t, i) {
            for (var n = Number.MAX_VALUE, r = -Number.MAX_VALUE, s = e.length, o = 0; o < s; o++) {
                var a = e[o].dotProduct(t);
                a < n && (n = a), r < a && (r = a)
            }
            i[0] = n, i[1] = r
        }

        function m(e, t, i, n, r, s) {
            var o = g.pop(),
                a = g.pop(),
                h = C.pop().copy(t).sub(e),
                l = h.dotProduct(r);
            if (y(i, r, o), y(n, r, a), a[0] += l, a[1] += l, o[0] > a[1] || a[0] > o[1]) return C.push(h), g.push(o), g.push(a), !0;
            if (s) {
                var d = 0;
                if (o[0] < a[0])
                    if (s.aInB = !1, o[1] < a[1]) d = o[1] - a[0], s.bInA = !1;
                    else {
                        var c = o[1] - a[0],
                            u = a[1] - o[0];
                        d = c < u ? c : -u
                    } else if (s.bInA = !1, o[1] > a[1]) d = o[0] - a[1], s.aInB = !1;
                else {
                    var f = o[1] - a[0],
                        m = a[1] - o[0];
                    d = f < m ? f : -m
                }
                var p = Math.abs(d);
                p < s.overlap && (s.overlap = p, s.overlapN.copy(r), d < 0 && s.overlapN.negateSelf())
            }
            return C.push(h), g.push(o), g.push(a), !1
        }

        function S(e, t) {
            var i = e.length2(),
                n = t.dotProduct(e);
            return n < 0 ? E : i < n ? A : r
        }
        me.collision = ((f = {
            quadTree: null,
            maxDepth: 4,
            maxChildren: 8,
            bounds: null,
            types: {
                NO_OBJECT: 0,
                PLAYER_OBJECT: 1,
                NPC_OBJECT: 2,
                ENEMY_OBJECT: 4,
                COLLECTABLE_OBJECT: 8,
                ACTION_OBJECT: 16,
                PROJECTILE_OBJECT: 32,
                WORLD_SHAPE: 64,
                USER: 128,
                ALL_OBJECT: 4294967295
            },
            init: function() {
                f.bounds = me.game.viewport.clone(), f.quadTree = new me.QuadTree(f.bounds, f.maxChildren, f.maxDepth), me.event.subscribe(me.event.LEVEL_LOADED, function() {
                    f.bounds.copy(me.game.world.getBounds()), f.quadTree.clear(f.bounds)
                })
            },
            ResponseObject: function() {
                this.a = null, this.b = null, this.overlapN = new me.Vector2d, this.overlapV = new me.Vector2d, this.aInB = !0, this.bInA = !0, this.indexShapeA = -1, this.indexShapeB = -1, this.overlap = Number.MAX_VALUE
            }
        }).ResponseObject.prototype.clear = function() {
            return this.aInB = !0, this.bInA = !0, this.overlap = Number.MAX_VALUE, this.indexShapeA = -1, this.indexShapeB = -1, this
        }, f.response = new f.ResponseObject, f.shouldCollide = function(e, t) {
            return !0 !== e.isKinematic && !0 !== t.isKinematic && e.body && t.body && 0 != (e.body.collisionMask & t.body.collisionType) && 0 != (e.body.collisionType & t.body.collisionMask)
        }, f.check = function(e, t) {
            for (var i, n = 0, r = t || f.response, s = f.quadTree.retrieve(e), o = s.length; i = s[--o];)
                if (i !== e && f.shouldCollide(e, i) && e.getBounds().overlaps(i.getBounds())) {
                    var a = e.body.shapes.length,
                        h = i.body.shapes.length;
                    if (0 === a || 0 === h) continue;
                    var l = 0;
                    do {
                        var d = e.body.getShape(l),
                            c = 0;
                        do {
                            var u = i.body.getShape(c);
                            !0 === f["test" + d.shapeType + u.shapeType].call(this, e, d, i, u, r.clear()) && (n++, r.indexShapeA = l, r.indexShapeB = c, e.onCollision && !1 !== e.onCollision(r, i) && e.body.respondToCollision.call(e.body, r), i.onCollision && !1 !== i.onCollision(r, e) && i.body.respondToCollision.call(i.body, r)), c++
                        } while (c < h);
                        l++
                    } while (l < a)
                }
            return 0 < n
        }, f.rayCast = function(e, t) {
            for (var i, n = 0, r = t || [], s = f.quadTree.retrieve(e.getBounds()), o = s.length; i = s[--o];)
                if (i.body && e.getBounds().overlaps(i.getBounds())) {
                    var a = i.body.shapes.length;
                    if (0 === i.body.shapes.length) continue;
                    var h = e,
                        l = 0;
                    do {
                        var d = i.body.getShape(l);
                        f["test" + h.shapeType + d.shapeType].call(this, c, h, i, d) && (r[n] = i, n++), l++
                    } while (l < a)
                }
            return r.length = n, r
        }, f.testPolygonPolygon = function(e, t, i, n, r) {
            var s, o = t.points,
                a = t.normals,
                h = a.length,
                l = n.points,
                d = n.normals,
                c = d.length,
                u = C.pop().copy(e.pos).add(e.ancestor._absPos).add(t.pos),
                f = C.pop().copy(i.pos).add(i.ancestor._absPos).add(n.pos);
            for (s = 0; s < h; s++)
                if (m(u, f, o, l, a[s], r)) return C.push(u), C.push(f), !1;
            for (s = 0; s < c; s++)
                if (m(u, f, o, l, d[s], r)) return C.push(u), C.push(f), !1;
            return r && (r.a = e, r.b = i, r.overlapV.copy(r.overlapN).scale(r.overlap)), C.push(u), C.push(f), !0
        }, f.testEllipseEllipse = function(e, t, i, n, r) {
            var s = C.pop().copy(i.pos).add(i.ancestor._absPos).add(n.pos).sub(e.pos).add(e.ancestor._absPos).sub(t.pos),
                o = t.radius,
                a = n.radius,
                h = o + a,
                l = h * h,
                d = s.length2();
            if (l < d) return C.push(s), !1;
            if (r) {
                var c = Math.sqrt(d);
                r.a = e, r.b = i, r.overlap = h - c, r.overlapN.copy(s.normalize()), r.overlapV.copy(s).scale(r.overlap), r.aInB = o <= a && c <= a - o, r.bInA = a <= o && c <= o - a
            }
            return C.push(s), !0
        }, f.testPolygonEllipse = function(e, t, i, n, r) {
            for (var s = C.pop().copy(i.pos).add(i.ancestor._absPos).add(n.pos).sub(e.pos).add(e.ancestor._absPos).sub(t.pos), o = n.radius, a = o * o, h = t.points, l = t.edges, d = l.length, c = C.pop(), u = C.pop(), f = C.pop(), m = 0, p = 0; p < d; p++) {
                var g = p === d - 1 ? 0 : p + 1,
                    y = 0 === p ? d - 1 : p - 1,
                    v = 0,
                    x = null;
                c.copy(l[p]), f.copy(s).sub(h[p]), r && f.length2() > a && (r.aInB = !1);
                var w = S(c, f),
                    b = !0;
                if (w === E) {
                    var _ = null;
                    if (1 < d && (c.copy(l[y]), (w = S(c, _ = C.pop().copy(s).sub(h[y]))) !== A && (b = !1)), b) {
                        if (o < (m = f.length())) return C.push(s), C.push(c), C.push(u), C.push(f), _ && C.push(_), !1;
                        r && (r.bInA = !1, x = f.normalize(), v = o - m)
                    }
                    _ && C.push(_)
                } else if (w === A) {
                    if (1 < d && (c.copy(l[g]), f.copy(s).sub(h[g]), (w = S(c, f)) !== E && (b = !1)), b) {
                        if (o < (m = f.length())) return C.push(s), C.push(c), C.push(u), C.push(f), !1;
                        r && (r.bInA = !1, x = f.normalize(), v = o - m)
                    }
                } else {
                    u.copy(t.normals[p]), m = f.dotProduct(u);
                    var T = Math.abs(m);
                    if ((1 === d || 0 < m) && o < T) return C.push(s), C.push(c), C.push(u), C.push(f), !1;
                    r && (x = u, v = o - m, (0 <= m || v < 2 * o) && (r.bInA = !1))
                }
                x && r && Math.abs(v) < Math.abs(r.overlap) && (r.overlap = v, r.overlapN.copy(x))
            }
            return r && (r.a = e, r.b = i, r.overlapV.copy(r.overlapN).scale(r.overlap)), C.push(s), C.push(c), C.push(u), C.push(f), !0
        }, f.testEllipsePolygon = function(e, t, i, n, r) {
            var s = f.testPolygonEllipse(i, n, e, t, r);
            if (s && r) {
                var o = r.a,
                    a = r.aInB;
                r.overlapN.negateSelf(), r.overlapV.negateSelf(), r.a = r.b, r.b = o, r.aInB = r.bInA, r.bInA = a
            }
            return s
        }, f)
    }(), me.Renderable = me.Rect.extend({
        init: function(e, t, i, n) {
            this.isRenderable = !0, this.isKinematic = !0, (this.body = void 0) !== this.currentTransform ? this.currentTransform.identity() : this.currentTransform = me.pool.pull("me.Matrix2d"), this.GUID = void 0, this.inViewport = !1, this.alwaysUpdate = !1, this.updateWhenPaused = !1, this.isPersistent = !1, this.floating = !1, this.anchorPoint instanceof me.ObservableVector2d ? this.anchorPoint.setMuted(.5, .5).setCallback(this.onAnchorUpdate.bind(this)) : this.anchorPoint = new me.ObservableVector2d(.5, .5, {
                onUpdate: this.onAnchorUpdate.bind(this)
            }), this.autoTransform = !0, this.alpha = 1, this.ancestor = void 0, this._bounds ? this._bounds.setShape(e, t, i, n) : this._bounds = new me.Rect(e, t, i, n), this._absPos ? this._absPos.set(e, t) : this._absPos = new me.Vector2d(e, t), this.pos instanceof me.ObservableVector3d ? this.pos.setMuted(e, t, 0).setCallback(this.updateBoundsPos.bind(this)) : this.pos = new me.ObservableVector3d(e, t, 0, {
                onUpdate: this.updateBoundsPos.bind(this)
            }), this._width = i, this._height = n, this._flip = {
                x: !1,
                y: !1
            }, this.shapeType = "Rectangle", this.setOpacity(1)
        },
        getBounds: function() {
            return this._bounds
        },
        getOpacity: function() {
            return this.alpha
        },
        setOpacity: function(e) {
            "number" == typeof e && (this.alpha = me.Math.clamp(e, 0, 1), isNaN(this.alpha) && (this.alpha = 1))
        },
        flipX: function(e) {
            return this._flip.x = !!e, this
        },
        flipY: function(e) {
            return this._flip.y = !!e, this
        },
        transform: function(e) {
            var t = this.getBounds();
            return this.currentTransform.multiply(e), t.setPoints(t.transform(e).points), t.pos.setV(this.pos), this
        },
        scale: function(e, t) {
            var i = e,
                n = void 0 === t ? i : t;
            return this.currentTransform.scale(i, n), this.getBounds().resize(this.width * i, this.height * n), this
        },
        scaleV: function(e) {
            return this.scale(e.x, e.y), this
        },
        update: function() {
            return !1
        },
        updateBoundsPos: function(e, t) {
            var i = this.getBounds();
            return i.pos.set(e, t, i.pos.z), this.ancestor && !this.floating && i.pos.add(this.ancestor._absPos), i
        },
        onAnchorUpdate: function() {},
        updateBounds: function() {
            return console.warn("Deprecated: me.Renderable.updateBounds"), me.Rect.prototype.updateBounds.apply(this)
        },
        preDraw: function(e) {
            var t = this.getBounds(),
                i = t.width * this.anchorPoint.x,
                n = t.height * this.anchorPoint.y;
            if (e.save(), e.setGlobalAlpha(e.globalAlpha() * this.getOpacity()), this._flip.x || this._flip.y) {
                var r = this._flip.x ? this.centerX - i : 0,
                    s = this._flip.y ? this.centerY - n : 0;
                e.translate(r, s), e.scale(this._flip.x ? -1 : 1, this._flip.y ? -1 : 1), e.translate(-r, -s)
            }!0 !== this.autoTransform || this.currentTransform.isIdentity() ? e.translate(-i, -n) : (this.currentTransform.translate(-i, -n), e.transform(this.currentTransform), this.currentTransform.translate(i, n))
        },
        draw: function() {},
        postDraw: function(e) {
            e.restore()
        },
        destroy: function() {
            this.currentTransform.identity(), void 0 !== this.body && (this.body.destroy.apply(this.body, arguments), this.body = void 0), this.onDestroyEvent.apply(this, arguments)
        },
        onDestroyEvent: function() {}
    }), Object.defineProperty(me.Renderable.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(e) {
            this.getBounds().width = e, this._width = e
        },
        configurable: !0
    }), Object.defineProperty(me.Renderable.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(e) {
            this.getBounds().height = e, this._height = e
        },
        configurable: !0
    }), me.Renderable.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.Renderable.Error"
        }
    }), me.ColorLayer = me.Renderable.extend({
        init: function(e, t, i) {
            me.Renderable.prototype.init.apply(this, [0, 0, 1 / 0, 1 / 0]), this.name = e, this.pos.z = i, this.floating = !0, t instanceof me.Color ? this.color = t : this.color = me.pool.pull("me.Color").parseCSS(t), this.anchorPoint.set(0, 0)
        },
        draw: function(e, t) {
            var i = e.getColor(),
                n = me.game.viewport.pos;
            e.setColor(this.color), e.fillRect(t.left - n.x, t.top - n.y, t.width, t.height), e.setColor(i)
        }
    }), me.ImageLayer = me.Renderable.extend({
        init: function(e, t, i) {
            if (this.name = i.name || "me.ImageLayer", this.image = "object" == typeof i.image ? i.image : me.loader.getImage(i.image), !this.image) throw new me.Error(("string" == typeof i.image ? "'" + i.image + "'" : "Image") + " file for Image Layer '" + this.name + "' not found!");
            this.imagewidth = this.image.width, this.imageheight = this.image.height, me.Renderable.prototype.init.apply(this, [e, t, 1 / 0, 1 / 0]), this.floating = !0, this.pos.z = i.z || 0, this.offset = new me.Vector2d(e, t), this.ratio = new me.Vector2d(1, 1), void 0 !== i.ratio && ("number" == typeof i.ratio ? this.ratio.set(i.ratio, i.ratio) : this.ratio.setV(i.ratio)), void 0 === i.anchorPoint ? this.anchorPoint.set(0, 0) : "number" == typeof i.anchorPoint ? this.anchorPoint.set(i.anchorPoint, i.anchorPoint) : this.anchorPoint.setV(i.anchorPoint), Object.defineProperty(this, "repeat", {
                get: function() {
                    return this._repeat
                },
                set: function(e) {
                    switch (this._repeat = e, this._repeat) {
                        case "no-repeat":
                            this.repeatX = !1, this.repeatY = !1;
                            break;
                        case "repeat-x":
                            this.repeatX = !0, this.repeatY = !1;
                            break;
                        case "repeat-y":
                            this.repeatX = !1, this.repeatY = !0;
                            break;
                        default:
                            this.repeatX = !0, this.repeatY = !0
                    }
                    this.resize(me.game.viewport.width, me.game.viewport.height), this.createPattern()
                }
            }), this.repeat = i.repeat || "repeat"
        },
        onActivateEvent: function() {
            var e = this.updateLayer.bind(this);
            this.vpChangeHdlr = me.event.subscribe(me.event.VIEWPORT_ONCHANGE, e), this.vpResizeHdlr = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, this.resize.bind(this)), this.vpLoadedHdlr = me.event.subscribe(me.event.LEVEL_LOADED, function() {
                e(me.game.viewport.pos)
            }), !0 !== this.ancestor._root && this.updateLayer(me.game.viewport.pos)
        },
        resize: function(e, t) {
            me.Renderable.prototype.resize.apply(this, [this.repeatX ? 1 / 0 : e, this.repeatY ? 1 / 0 : t])
        },
        createPattern: function() {
            this._pattern = me.video.renderer.createPattern(this.image, this._repeat)
        },
        updateLayer: function(e) {
            var t = this.ratio.x,
                i = this.ratio.y;
            if (t === i !== 0) {
                var n = me.game.viewport,
                    r = this.imagewidth,
                    s = this.imageheight,
                    o = n.bounds.width,
                    a = n.bounds.height,
                    h = this.anchorPoint.x,
                    l = this.anchorPoint.y,
                    d = h * (t - 1) * (o - n.width) + this.offset.x - t * e.x,
                    c = l * (i - 1) * (a - n.height) + this.offset.y - i * e.y;
                this.repeatX ? this.pos.x = d % r : this.pos.x = d, this.repeatY ? this.pos.y = c % s : this.pos.y = c
            }
        },
        preDraw: function(e) {
            e.save(), e.setGlobalAlpha(e.globalAlpha() * this.getOpacity())
        },
        draw: function(e) {
            var t = me.game.viewport,
                i = this.imagewidth,
                n = this.imageheight,
                r = t.bounds.width,
                s = t.bounds.height,
                o = this.anchorPoint.x,
                a = this.anchorPoint.y,
                h = this.pos.x,
                l = this.pos.y;
            this.ratio.x === this.ratio.y === 0 && (h += o * (r - i), l += a * (s - n)), e.translate(h, l), e.drawPattern(this._pattern, 0, 0, 2 * t.width, 2 * t.height)
        },
        onDeactivateEvent: function() {
            me.event.unsubscribe(this.vpChangeHdlr), me.event.unsubscribe(this.vpResizeHdlr), me.event.unsubscribe(this.vpLoadedHdlr)
        }
    }), me.Sprite = me.Renderable.extend({
        init: function(e, t, i) {
            if (this.animationpause = !1, this.animationspeed = 100, this.offset = new me.Vector2d, this.anim = {}, this.resetAnim = void 0, this.current = {
                    offset: new me.Vector2d,
                    width: 0,
                    height: 0,
                    angle: 0
                }, this.dt = 0, this._flicker = {
                    isFlickering: !1,
                    duration: 0,
                    callback: null,
                    state: !1
                }, i.image instanceof me.CanvasRenderer.prototype.Texture) {
                if (this.image = i.image.getTexture(), this.textureAtlas = i.image, void 0 !== i.region) {
                    var n = i.image.getRegion(i.region);
                    if (!n) throw new me.Renderable.Error("Texture - region for " + i.region + " not found");
                    this.setRegion(n), this.current.width = i.framewidth || n.width, this.current.height = i.frameheight || n.height
                }
            } else this.image = "object" == typeof i.image ? i.image : me.loader.getImage(i.image), this.current.width = i.framewidth = i.framewidth || this.image.width, this.current.height = i.frameheight = i.frameheight || this.image.height, this.textureAtlas = me.video.renderer.cache.get(this.image, i).getAtlas();
            void 0 !== i.atlas ? (this.textureAtlas = i.atlas, this.atlasIndices = i.atlasIndices) : this.atlasIndices = null, me.Renderable.prototype.init.apply(this, [e, t, this.current.width, this.current.height]), void 0 !== i.flipX && this.flipX(!!i.flipX), void 0 !== i.flipY && this.flipY(!!i.flipY), void 0 !== i.rotation && this.currentTransform.rotate(i.rotation), i.anchorPoint && this.anchorPoint.set(i.anchorPoint.x, i.anchorPoint.y), 0 !== this.addAnimation("default", null) && this.setCurrentAnimation("default"), this.autoTransform = !0
        },
        isFlickering: function() {
            return this._flicker.isFlickering
        },
        flicker: function(e, t) {
            return this._flicker.duration = e, this._flicker.duration <= 0 ? (this._flicker.isFlickering = !1, this._flicker.callback = null) : this._flicker.isFlickering || (this._flicker.callback = t, this._flicker.isFlickering = !0), this
        },
        addAnimation: function(e, i, t) {
            this.anim[e] = {
                name: e,
                frames: [],
                idx: 0,
                length: 0
            };
            var n = 0;
            if ("object" != typeof this.textureAtlas) return 0;
            null == i && (i = [], Object.keys(this.textureAtlas).forEach(function(e, t) {
                i[t] = t
            }));
            for (var r = 0, s = i.length; r < s; r++) {
                var o, a = i[r],
                    h = (o = "number" == typeof a || "string" == typeof a ? {
                        name: a,
                        delay: t || this.animationspeed
                    } : a).name;
                if ("number" == typeof h) void 0 !== this.textureAtlas[h] && (this.anim[e].frames[r] = Object.assign({}, this.textureAtlas[h], o), n++);
                else {
                    if (null === this.atlasIndices) throw new me.Renderable.Error("string parameters for addAnimation are not allowed for standard spritesheet based Texture");
                    this.anim[e].frames[r] = Object.assign({}, this.textureAtlas[this.atlasIndices[h]], o), n++
                }
            }
            return this.anim[e].length = n
        },
        setCurrentAnimation: function(e, t, i) {
            if (!this.anim[e]) throw new me.Renderable.Error("animation id '" + e + "' not defined");
            return this.current = this.anim[e], this.resetAnim = "string" == typeof t ? this.setCurrentAnimation.bind(this, t, null, !0) : "function" == typeof t ? t : void 0, this.setAnimationFrame(this.current.idx), this.current.name = e, i || (this.dt = 0), this
        },
        reverseAnimation: function(e) {
            return void 0 !== e && void 0 !== this.anim[e] ? this.anim[e].frames.reverse() : this.current.frames.reverse(), this
        },
        isCurrentAnimation: function(e) {
            return this.current.name === e
        },
        setRegion: function(e) {
            return this.current.offset.setV(e.offset), this.current.angle = e.angle, this.current.width = e.width, this.current.height = e.height, this
        },
        setAnimationFrame: function(e) {
            this.current.idx = (e || 0) % this.current.length;
            var t = this.current.name,
                i = this.getAnimationFrameObjectByIndex(this.current.idx);
            return Object.assign(this.current, i), this.current.name = t, this.width = i.width, this.height = i.height, i.anchorPoint && this.anchorPoint.setV(i.anchorPoint), this
        },
        getCurrentAnimationFrame: function() {
            return this.current.idx
        },
        getAnimationFrameObjectByIndex: function(e) {
            return this.current.frames[e]
        },
        update: function(e) {
            var t = !1;
            if (!this.animationpause && this.current && 0 < this.current.length) {
                var i = this.getAnimationFrameObjectByIndex(this.current.idx).delay;
                for (this.dt += e; this.dt >= i;) {
                    t = !0, this.dt -= i;
                    var n = 1 < this.current.length ? this.current.idx + 1 : this.current.idx;
                    if (this.setAnimationFrame(n), 0 === this.current.idx && "function" == typeof this.resetAnim && !1 === this.resetAnim()) {
                        this.setAnimationFrame(this.current.length - 1), this.dt %= i;
                        break
                    }
                    i = this.getAnimationFrameObjectByIndex(this.current.idx).delay
                }
            }
            return this._flicker.isFlickering && (this._flicker.duration -= e, this._flicker.duration < 0 && ("function" == typeof this._flicker.callback && this._flicker.callback(), this.flicker(-1)), t = !0), t
        },
        updateBoundsPos: function(e, t) {
            var i = this.getBounds();
            return i.pos.set(e - this.anchorPoint.x * i.width, t - this.anchorPoint.y * i.height), this.ancestor && !this.floating && i.pos.add(this.ancestor._absPos), i
        },
        onAnchorUpdate: function(e, t) {
            this.anchorPoint.setMuted(e, t), this.updateBoundsPos(this.pos.x, this.pos.y)
        },
        draw: function(e) {
            if (!this._flicker.isFlickering || (this._flicker.state = !this._flicker.state, this._flicker.state)) {
                var t = this.current,
                    i = this.pos.x,
                    n = this.pos.y,
                    r = t.width,
                    s = t.height,
                    o = t.offset,
                    a = this.offset;
                0 !== t.angle && (e.translate(-i, -n), e.rotate(t.angle), i -= s, r = t.height, s = t.width), e.drawImage(this.image, a.x + o.x, a.y + o.y, r, s, i, n, r, s)
            }
        }
    }), me.GUI_Object = me.Sprite.extend({
        init: function(e, t, i) {
            this.isClickable = !0, this.holdThreshold = 250, this.isHoldable = !1, this.hover = !1, this.holdTimeout = null, this.updated = !1, this.released = !0, me.Sprite.prototype.init.apply(this, [e, t, i]), this.floating = !0, this.isKinematic = !1
        },
        update: function(e) {
            var t = me.Sprite.prototype.update.apply(this, [e]);
            return this.updated ? (this.released || (this.updated = !1), !0) : t
        },
        clicked: function(e) {
            if (0 === e.button && this.isClickable) return this.updated = !0, this.released = !1, this.isHoldable && (null !== this.holdTimeout && me.timer.clearTimeout(this.holdTimeout), this.holdTimeout = me.timer.setTimeout(this.hold.bind(this), this.holdThreshold, !1), this.released = !1), this.onClick(e)
        },
        onClick: function() {
            return !1
        },
        enter: function(e) {
            return this.hover = !0, this.onOver(e)
        },
        onOver: function() {},
        leave: function(e) {
            return this.hover = !1, this.release.call(this, e), this.onOut(e)
        },
        onOut: function() {},
        release: function(e) {
            if (!1 === this.released) return this.released = !0, me.timer.clearTimeout(this.holdTimeout), this.onRelease(e)
        },
        onRelease: function() {
            return !1
        },
        hold: function() {
            me.timer.clearTimeout(this.holdTimeout), this.released || this.onHold()
        },
        onHold: function() {},
        onActivateEvent: function() {
            me.input.registerPointerEvent("pointerdown", this, this.clicked.bind(this)), me.input.registerPointerEvent("pointerup", this, this.release.bind(this)), me.input.registerPointerEvent("pointercancel", this, this.release.bind(this)), me.input.registerPointerEvent("pointerenter", this, this.enter.bind(this)), me.input.registerPointerEvent("pointerleave", this, this.leave.bind(this))
        },
        onDeactivateEvent: function() {
            me.input.releasePointerEvent("pointerdown", this), me.input.releasePointerEvent("pointerup", this), me.input.releasePointerEvent("pointercancel", this), me.input.releasePointerEvent("pointerenter", this), me.input.releasePointerEvent("pointerleave", this), me.timer.clearTimeout(this.holdTimeout)
        }
    }),
    function() {
        var i = function(e, t) {
                this.removeChildNow(e, t)
            },
            a = 0;
        me.Container = me.Renderable.extend({
            init: function(e, t, i, n) {
                this.pendingSort = null, this._root = !1, me.Renderable.prototype.init.apply(this, [e || 0, t || 0, i || 1 / 0, n || 1 / 0]), this.children = [], this.sortOn = me.game.sortOn, this.autoSort = !0, this.autoDepth = !0, this.clipping = !1, this.onChildChange = function() {}, this.drawCount = 0, this.childBounds = this.getBounds().clone(), this.autoTransform = !0, this.isKinematic = !1
            },
            addChild: function(e, t) {
                return e.ancestor instanceof me.Container ? e.ancestor.removeChildNow(e) : e.isRenderable && (e.GUID = me.utils.createGUID(e.id)), (e.ancestor = this).children.push(e), void 0 !== e.pos && ("number" == typeof t ? e.pos.z = t : !0 === this.autoDepth && (e.pos.z = this.children.length)), !0 === this.autoSort && this.sort(), "function" == typeof e.onActivateEvent && this.isAttachedToRoot() && e.onActivateEvent(), this.onChildChange.call(this, this.children.length - 1), e
            },
            addChildAt: function(e, t) {
                if (0 <= t && t < this.children.length) return e.ancestor instanceof me.Container ? e.ancestor.removeChildNow(e) : e.isRenderable && (e.GUID = me.utils.createGUID()), (e.ancestor = this).children.splice(t, 0, e), "function" == typeof e.onActivateEvent && this.isAttachedToRoot() && e.onActivateEvent(), this.onChildChange.call(this, t), e;
                throw new me.Container.Error("Index (" + t + ") Out Of Bounds for addChildAt()")
            },
            forEach: function(e, t) {
                var i = this,
                    n = 0,
                    r = this.children.length;
                if ("function" != typeof e) throw new me.Container.Error(e + " is not a function");
                for (1 < arguments.length && (i = t); n < r;) e.call(i, this.children[n], n, this.children), n++
            },
            swapChildren: function(e, t) {
                var i = this.getChildIndex(e),
                    n = this.getChildIndex(t);
                if (-1 === i || -1 === n) throw new me.Container.Error(e + " Both the supplied childs must be a child of the caller " + this);
                var r = e.pos.z;
                e.pos.z = t.pos.z, t.pos.z = r, this.children[i] = t, this.children[n] = e
            },
            getChildAt: function(e) {
                if (0 <= e && e < this.children.length) return this.children[e];
                throw new me.Container.Error("Index (" + e + ") Out Of Bounds for getChildAt()")
            },
            getChildIndex: function(e) {
                return this.children.indexOf(e)
            },
            hasChild: function(e) {
                return this === e.ancestor
            },
            getChildByProp: function(e, t) {
                var i, n, r = [];
                for (var s = this.children.length - 1; 0 <= s; s--) {
                    var o = this.children[s];
                    void 0, n = (i = o)[e], t instanceof RegExp && "string" == typeof n ? t.test(n) && r.push(i) : n === t && r.push(i), o instanceof me.Container && (r = r.concat(o.getChildByProp(e, t)))
                }
                return r
            },
            getChildByType: function(e) {
                for (var t = [], i = this.children.length - 1; 0 <= i; i--) {
                    var n = this.children[i];
                    n instanceof e && t.push(n), n instanceof me.Container && (t = t.concat(n.getChildByType(e)))
                }
                return t
            },
            getChildByName: function(e) {
                return this.getChildByProp("name", e)
            },
            getChildByGUID: function(e) {
                var t = this.getChildByProp("GUID", e);
                return 0 < t.length ? t[0] : null
            },
            updateChildBounds: function() {
                var e;
                this.childBounds.pos.set(1 / 0, 1 / 0), this.childBounds.resize(-1 / 0, -1 / 0);
                for (var t, i = this.children.length; i--, t = this.children[i];) t.isRenderable && null !== (e = t instanceof me.Container ? t.childBounds : t.getBounds()) && this.childBounds.union(e);
                return this.childBounds
            },
            isAttachedToRoot: function() {
                if (this._root) return !0;
                for (var e = this.ancestor; e;) {
                    if (!0 === e._root) return !0;
                    e = e.ancestor
                }
                return !1
            },
            updateBoundsPos: function(e, t) {
                me.Renderable.prototype.updateBoundsPos.apply(this, [e, t]), this._absPos.set(e, t), this.ancestor && !this.floating && this._absPos.add(this.ancestor._absPos);
                for (var i, n = this.children.length; n--, i = this.children[n];) i.isRenderable && i.updateBoundsPos(i.pos.x, i.pos.y);
                return this.getBounds()
            },
            onActivateEvent: function() {
                for (var e, t = this.children.length; t--, e = this.children[t];) "function" == typeof e.onActivateEvent && e.onActivateEvent()
            },
            removeChild: function(e, t) {
                if (!this.hasChild(e)) throw new me.Container.Error("Child is not mine.");
                me.utils.function.defer(i, this, e, t)
            },
            removeChildNow: function(e, t) {
                if (this.hasChild(e) && 0 <= this.getChildIndex(e)) {
                    "function" == typeof e.onDeactivateEvent && e.onDeactivateEvent(), t || ("function" == typeof e.destroy && e.destroy(), me.pool.push(e));
                    var i = this.getChildIndex(e);
                    0 <= i && (this.children.splice(i, 1), e.ancestor = void 0), this.onChildChange.call(this, i)
                }
            },
            setChildsProperty: function(e, t, i) {
                for (var n = this.children.length; 0 <= n; n--) {
                    var r = this.children[n];
                    !0 === i && r instanceof me.Container && r.setChildsProperty(e, t, i), r[e] = t
                }
            },
            moveUp: function(e) {
                var t = this.getChildIndex(e);
                0 <= t - 1 && this.swapChildren(e, this.getChildAt(t - 1))
            },
            moveDown: function(e) {
                var t = this.getChildIndex(e);
                0 <= t && t + 1 < this.children.length && this.swapChildren(e, this.getChildAt(t + 1))
            },
            moveToTop: function(e) {
                var t = this.getChildIndex(e);
                0 < t && (this.children.splice(0, 0, this.children.splice(t, 1)[0]), e.pos.z = this.children[1].pos.z + 1)
            },
            moveToBottom: function(e) {
                var t = this.getChildIndex(e);
                0 <= t && t < this.children.length - 1 && (this.children.splice(this.children.length - 1, 0, this.children.splice(t, 1)[0]), e.pos.z = this.children[this.children.length - 2].pos.z - 1)
            },
            sort: function(e) {
                if (!this.pendingSort) {
                    if (!0 === e)
                        for (var t, i = this.children.length; i--, t = this.children[i];) t instanceof me.Container && t.sort(e);
                    this.pendingSort = me.utils.function.defer(function(e) {
                        e.children.sort(e["_sort" + e.sortOn.toUpperCase()]), e.pendingSort = null, me.game.repaint()
                    }, this, this)
                }
            },
            onDeactivateEvent: function() {
                for (var e, t = this.children.length; t--, e = this.children[t];) "function" == typeof e.onDeactivateEvent && e.onDeactivateEvent()
            },
            _sortZ: function(e, t) {
                return t.pos && e.pos ? t.pos.z - e.pos.z : e.pos ? -1 / 0 : 1 / 0
            },
            _sortReverseZ: function(e, t) {
                return e.pos && t.pos ? e.pos.z - t.pos.z : e.pos ? 1 / 0 : -1 / 0
            },
            _sortX: function(e, t) {
                if (!t.pos || !e.pos) return e.pos ? -1 / 0 : 1 / 0;
                var i = t.pos.z - e.pos.z;
                return i || t.pos.x - e.pos.x
            },
            _sortY: function(e, t) {
                if (!t.pos || !e.pos) return e.pos ? -1 / 0 : 1 / 0;
                var i = t.pos.z - e.pos.z;
                return i || t.pos.y - e.pos.y
            },
            destroy: function() {
                this.pendingSort && (clearTimeout(this.pendingSort), this.pendingSort = null);
                for (var e, t = this.children.length; 0 <= t; e = this.children[--t]) e && !e.isPersistent && this.removeChildNow(e);
                me.Renderable.prototype.destroy.apply(this, arguments)
            },
            update: function(e) {
                me.Renderable.prototype.update.apply(this, [e]);
                var t = !1,
                    i = !1,
                    n = me.state.isPaused(),
                    r = me.game.viewport;
                this._absPos.setV(this.pos), this.ancestor && this._absPos.add(this.ancestor._absPos);
                for (var s, o = this.children.length; o--, s = this.children[o];) n && !s.updateWhenPaused || (s.isRenderable ? ((i = 0 < a || s.floating) && a++, s.inViewport = i || r.isVisible(s.getBounds()), t = (s.inViewport || s.alwaysUpdate) && s.update(e) || t, s._absPos.setV(this._absPos).add(s.pos), 0 < a && a--) : t = s.update(e) || t);
                return t
            },
            draw: function(e, t) {
                var i = !1;
                this.drawCount = 0, e.translate(this.pos.x, this.pos.y), !1 === this._root && !0 === this.clipping && !0 === this.childBounds.isFinite() && e.clipRect(this.childBounds.pos.x, this.childBounds.pos.y, this.childBounds.width, this.childBounds.height);
                for (var n, r = this.children.length; r--, n = this.children[r];) n.isRenderable && (i = !0 === n.floating, (n.inViewport || i) && (i && (e.save(), e.resetTransform()), n.preDraw(e), n.draw(e, t), n.postDraw(e), i && e.restore(), this.drawCount++))
            }
        }), me.Container.Error = me.Renderable.Error.extend({
            init: function(e) {
                me.Renderable.Error.prototype.init.apply(this, [e]), this.name = "me.Container.Error"
            }
        })
    }(),
    function() {
        var i = Math.min,
            n = Math.max,
            e = new me.Vector2d;
        me.Camera2d = me.Renderable.extend({
            init: function(e, t, i, n) {
                me.Renderable.prototype.init.apply(this, [e, t, i - e, n - t]), this.AXIS = {
                    NONE: 0,
                    HORIZONTAL: 1,
                    VERTICAL: 2,
                    BOTH: 3
                }, this.bounds = new me.Rect(-1 / 0, -1 / 0, 1 / 0, 1 / 0), this.smoothFollow = !0, this.damping = 1, this.offset = new me.Vector2d, this.target = null, this.follow_axis = this.AXIS.NONE, this._shake = {
                    intensity: 0,
                    duration: 0,
                    axis: this.AXIS.BOTH,
                    onComplete: null
                }, this._fadeOut = {
                    color: null,
                    tween: null
                }, this._fadeIn = {
                    color: null,
                    tween: null
                }, this.setDeadzone(this.width / 6, this.height / 6), this.anchorPoint.set(0, 0), this.isKinematic = !1;
                var r = this;
                me.event.subscribe(me.event.GAME_RESET, function() {
                    r.reset.bind(r)
                })
            },
            _followH: function(e) {
                var t = this.pos.x;
                return e.x - this.pos.x > this.deadzone.right ? t = i(e.x - this.deadzone.right, this.bounds.width - this.width) : e.x - this.pos.x < this.deadzone.pos.x && (t = n(e.x - this.deadzone.pos.x, this.bounds.pos.x)), t
            },
            _followV: function(e) {
                var t = this.pos.y;
                return e.y - this.pos.y > this.deadzone.bottom ? t = i(e.y - this.deadzone.bottom, this.bounds.height - this.height) : e.y - this.pos.y < this.deadzone.pos.y && (t = n(e.y - this.deadzone.pos.y, this.bounds.pos.y)), t
            },
            reset: function(e, t) {
                this.pos.x = e || 0, this.pos.y = t || 0, this.unfollow(), this.smoothFollow = !0, this.damping = 1, this.currentTransform.identity()
            },
            setDeadzone: function(e, t) {
                void 0 === this.deadzone && (this.deadzone = new me.Rect(0, 0, 0, 0)), this.deadzone.pos.set(~~((this.width - e) / 2), ~~((this.height - t) / 2 - .25 * t)), this.deadzone.resize(e, t), this.smoothFollow = !1, this.updateTarget(), this.smoothFollow = !0
            },
            resize: function(e, t) {
                me.Renderable.prototype.resize.apply(this, [e, t]), this.smoothFollow = !1;
                var i = me.levelDirector.getCurrentLevel();
                return this.setBounds(0, 0, Math.max(e, i ? i.width : 0), Math.max(t, i ? i.height : 0)), this.setDeadzone(e / 6, t / 6), this.update(), this.smoothFollow = !0, me.event.publish(me.event.VIEWPORT_ONRESIZE, [this.width, this.height]), this
            },
            setBounds: function(e, t, i, n) {
                this.smoothFollow = !1, this.bounds.pos.set(e, t), this.bounds.resize(i, n), this.moveTo(this.pos.x, this.pos.y), this.update(), this.smoothFollow = !0
            },
            follow: function(e, t, i) {
                if (e instanceof me.Renderable) this.target = e.pos;
                else {
                    if (!(e instanceof me.Vector2d || e instanceof me.Vector3d)) throw new me.Renderable.Error("invalid target for me.Camera2d.follow");
                    this.target = e
                }
                this.follow_axis = void 0 === t ? this.AXIS.BOTH : t, this.smoothFollow = !1, this.damping = "number" != typeof i ? 1 : me.Math.clamp(i, 0, 1), this.updateTarget(), this.smoothFollow = !0
            },
            unfollow: function() {
                this.target = null, this.follow_axis = this.AXIS.NONE
            },
            move: function(e, t) {
                this.moveTo(this.pos.x + e, this.pos.y + t)
            },
            moveTo: function(e, t) {
                this.pos.x = me.Math.clamp(e, this.bounds.pos.x, this.bounds.width - this.width), this.pos.y = me.Math.clamp(t, this.bounds.pos.y, this.bounds.height - this.height), me.event.publish(me.event.VIEWPORT_ONCHANGE, [this.pos])
            },
            updateTarget: function() {
                if (this.target) {
                    switch (e.setV(this.pos), this.follow_axis) {
                        case this.AXIS.NONE:
                            break;
                        case this.AXIS.HORIZONTAL:
                            e.x = this._followH(this.target);
                            break;
                        case this.AXIS.VERTICAL:
                            e.y = this._followV(this.target);
                            break;
                        case this.AXIS.BOTH:
                            e.x = this._followH(this.target), e.y = this._followV(this.target)
                    }
                    if (!this.pos.equals(e)) return !0 === this.smoothFollow && this.damping < 1 ? this.pos.lerp(e, this.damping) : this.pos.setV(e), !0
                }
                return !1
            },
            update: function(e) {
                var t = this.updateTarget(e);
                return 0 < this._shake.duration && (this._shake.duration -= e, this._shake.duration <= 0 ? (this._shake.duration = 0, this.offset.setZero(), "function" == typeof this._shake.onComplete && this._shake.onComplete()) : (this._shake.axis !== this.AXIS.BOTH && this._shake.axis !== this.AXIS.HORIZONTAL || (this.offset.x = (Math.random() - .5) * this._shake.intensity), this._shake.axis !== this.AXIS.BOTH && this._shake.axis !== this.AXIS.VERTICAL || (this.offset.y = (Math.random() - .5) * this._shake.intensity)), t = !0), !0 === t && me.event.publish(me.event.VIEWPORT_ONCHANGE, [this.pos]), null == this._fadeIn.tween && null == this._fadeOut.tween || (t = !0), t
            },
            shake: function(e, t, i, n, r) {
                0 !== this._shake.duration && !0 !== r || (this._shake.intensity = e, this._shake.duration = t, this._shake.axis = i || this.AXIS.BOTH, this._shake.onComplete = "function" == typeof n ? n : void 0)
            },
            fadeOut: function(e, t, i) {
                this._fadeOut.color = me.pool.pull("me.Color").copy(e), this._fadeOut.tween = me.pool.pull("me.Tween", this._fadeOut.color).to({
                    alpha: 0
                }, t || 1e3).onComplete(i || null), this._fadeOut.tween.isPersistent = !0, this._fadeOut.tween.start()
            },
            fadeIn: function(e, t, i) {
                this._fadeIn.color = me.pool.pull("me.Color").copy(e);
                var n = this._fadeIn.color.alpha;
                this._fadeIn.color.alpha = 0, this._fadeIn.tween = me.pool.pull("me.Tween", this._fadeIn.color).to({
                    alpha: n
                }, t || 1e3).onComplete(i || null), this._fadeIn.tween.isPersistent = !0, this._fadeIn.tween.start()
            },
            getWidth: function() {
                return this.width
            },
            getHeight: function() {
                return this.height
            },
            focusOn: function(e) {
                var t = e.getBounds();
                this.moveTo(e.pos.x + t.pos.x + t.width / 2, e.pos.y + t.pos.y + t.height / 2)
            },
            isVisible: function(e) {
                return e.overlaps(this)
            },
            localToWorld: function(e, t, i) {
                return (i = i || new me.Vector2d).set(e, t).add(this.pos).sub(me.game.world.pos), this.currentTransform.isIdentity() || this.currentTransform.multiplyVectorInverse(i), i
            },
            worldToLocal: function(e, t, i) {
                return (i = i || new me.Vector2d).set(e, t), this.currentTransform.isIdentity() || this.currentTransform.multiplyVector(i), i.sub(this.pos).add(me.game.world.pos)
            },
            draw: function(e) {
                this._fadeIn.tween && (e.clearColor(this._fadeIn.color), 1 === this._fadeIn.color.alpha && (this._fadeIn.tween = null, me.pool.push(this._fadeIn.color), this._fadeIn.color = null)), this._fadeOut.tween && (e.clearColor(this._fadeOut.color), 0 === this._fadeOut.color.alpha && (this._fadeOut.tween = null, me.pool.push(this._fadeOut.color), this._fadeOut.color = null))
            }
        })
    }(), me.Entity = me.Renderable.extend({
        init: function(e, t, i) {
            if (this.children = [], "number" != typeof i.width || "number" != typeof i.height) throw new me.Entity.Error("height and width properties are mandatory when passing settings parameters to an object entity");
            me.Renderable.prototype.init.apply(this, [e, t, i.width, i.height]), i.image && (this.renderable = new me.Sprite(0, 0, i)), i.anchorPoint && this.anchorPoint.set(i.anchorPoint.x, i.anchorPoint.y), this.name = i.name || "", this.type = i.type || "", this.id = i.id || "", this.alive = !0;
            var n = Array.isArray(i.shapes) ? i.shapes : [new me.Polygon(0, 0, [new me.Vector2d(0, 0), new me.Vector2d(this.width, 0), new me.Vector2d(this.width, this.height), new me.Vector2d(0, this.height)])];
            if (void 0 !== this.body ? this.body.init(this, n, this.onBodyUpdate.bind(this)) : this.body = new me.Body(this, n, this.onBodyUpdate.bind(this)), 0 === this.width && 0 === this.height && this.resize(this.body.width, this.body.height), void 0 !== i.collisionMask && this.body.setCollisionMask(i.collisionMask), void 0 !== i.collisionType) {
                if (void 0 === me.collision.types[i.collisionType]) throw new me.Entity.Error("Invalid value for the collisionType property");
                this.body.collisionType = me.collision.types[i.collisionType]
            }
            this.autoTransform = !1, this.isKinematic = !1
        },
        distanceTo: function(e) {
            var t = this.getBounds(),
                i = e.getBounds(),
                n = t.pos.x + t.width / 2 - (i.pos.x + i.width / 2),
                r = t.pos.y + t.height / 2 - (i.pos.y + i.height / 2);
            return Math.sqrt(n * n + r * r)
        },
        distanceToPoint: function(e) {
            var t = this.getBounds(),
                i = t.pos.x + t.width / 2 - e.x,
                n = t.pos.y + t.height / 2 - e.y;
            return Math.sqrt(i * i + n * n)
        },
        angleTo: function(e) {
            var t = this.getBounds(),
                i = e.getBounds(),
                n = i.pos.x + i.width / 2 - (t.pos.x + t.width / 2),
                r = i.pos.y + i.height / 2 - (t.pos.y + t.height / 2);
            return Math.atan2(r, n)
        },
        angleToPoint: function(e) {
            var t = this.getBounds(),
                i = e.x - (t.pos.x + t.width / 2),
                n = e.y - (t.pos.y + t.height / 2);
            return Math.atan2(n, i)
        },
        update: function(e) {
            return this.renderable ? this.renderable.update(e) : me.Renderable.prototype.update.apply(this, [e])
        },
        updateBoundsPos: function(e, t) {
            if (void 0 !== this.body) {
                var i = this.body.pos;
                me.Renderable.prototype.updateBoundsPos.apply(this, [e + i.x, t + i.y])
            } else me.Renderable.prototype.updateBoundsPos.apply(this, [e, t]);
            return this.getBounds()
        },
        onBodyUpdate: function(e) {
            this.getBounds().resize(e.width, e.height), this.updateBoundsPos(this.pos.x, this.pos.y)
        },
        preDraw: function(e) {
            e.save(), e.translate(this.pos.x + this.body.pos.x, this.pos.y + this.body.pos.y), this.renderable instanceof me.Renderable && e.translate(this.anchorPoint.x * this.body.width, this.anchorPoint.y * this.body.height)
        },
        draw: function(e, t) {
            var i = this.renderable;
            i instanceof me.Renderable && (i.preDraw(e), i.draw(e, t), i.postDraw(e))
        },
        destroy: function() {
            this.renderable && (this.renderable.destroy.apply(this.renderable, arguments), this.children.splice(0, 1)), me.Renderable.prototype.destroy.apply(this, arguments)
        },
        onDeactivateEvent: function() {
            this.renderable && this.renderable.onDeactivateEvent && this.renderable.onDeactivateEvent()
        },
        onCollision: function() {
            return !1
        }
    }), Object.defineProperty(me.Entity.prototype, "renderable", {
        get: function() {
            return this.children[0]
        },
        set: function(e) {
            if (!(e instanceof me.Renderable)) throw new me.Entity.Error(e + "should extend me.Renderable");
            this.children[0] = e
        },
        configurable: !0
    }), me.Entity.Error = me.Renderable.Error.extend({
        init: function(e) {
            me.Renderable.Error.prototype.init.apply(this, [e]), this.name = "me.Entity.Error"
        }
    }), me.ScreenObject = me.Object.extend({
        init: function() {},
        reset: function() {
            me.game.reset(), this.onResetEvent.apply(this, arguments)
        },
        destroy: function() {
            this.onDestroyEvent.apply(this, arguments)
        },
        onResetEvent: function() {},
        onDestroyEvent: function() {}
    }), me.state = function() {
        var t = {},
            i = -1,
            n = -1,
            r = !1,
            s = {},
            o = {
                color: "",
                duration: 0
            },
            a = null,
            h = null,
            l = 0;

        function d() {
            -1 === n && -1 !== i && (me.timer.reset(), n = window.requestAnimationFrame(c))
        }

        function c(e) {
            me.game.update(e), me.game.draw(), -1 !== n && (n = window.requestAnimationFrame(c))
        }

        function u() {
            window.cancelAnimationFrame(n), n = -1
        }

        function f(e) {
            u(), s[i] && s[i].screen.destroy(), s[e] && (s[i = e].screen.reset.apply(s[i].screen, h), d(), a && a(), me.game.repaint())
        }
        return t.LOADING = 0, t.MENU = 1, t.READY = 2, t.PLAY = 3, t.GAMEOVER = 4, t.GAME_END = 5, t.SCORE = 6, t.CREDITS = 7, t.SETTINGS = 8, t.USER = 100, t.onPause = null, t.onResume = null, t.onStop = null, t.onRestart = null, t.init = function() {
            t.set(t.LOADING, new me.DefaultLoadingScreen)
        }, t.stop = function(e) {
            i !== t.LOADING && t.isRunning() && (u(), !0 === e && me.audio.pauseTrack(), l = window.performance.now(), me.event.publish(me.event.STATE_STOP), "function" == typeof t.onStop && t.onStop())
        }, t.pause = function(e) {
            i === t.LOADING || t.isPaused() || ((r = !0) === e && me.audio.pauseTrack(), l = window.performance.now(), me.event.publish(me.event.STATE_PAUSE), "function" == typeof t.onPause && t.onPause())
        }, t.restart = function(e) {
            t.isRunning() || (d(), !0 === e && me.audio.resumeTrack(), l = window.performance.now() - l, me.game.repaint(), me.event.publish(me.event.STATE_RESTART, [l]), "function" == typeof t.onRestart && t.onRestart())
        }, t.resume = function(e) {
            t.isPaused() && (r && -1 !== i && (me.timer.reset(), r = !1), !0 === e && me.audio.resumeTrack(), l = window.performance.now() - l, me.event.publish(me.event.STATE_RESUME, [l]), "function" == typeof t.onResume && t.onResume())
        }, t.isRunning = function() {
            return -1 !== n
        }, t.isPaused = function() {
            return r
        }, t.set = function(e, t) {
            if (!(t instanceof me.ScreenObject)) throw new me.Error(t + " is not an instance of me.ScreenObject");
            s[e] = {}, s[e].screen = t, s[e].transition = !0
        }, t.current = function() {
            return s[i].screen
        }, t.transition = function(e, t, i) {
            "fade" === e && (o.color = t, o.duration = i)
        }, t.setTransition = function(e, t) {
            s[e].transition = t
        }, t.change = function(e) {
            if (void 0 === s[e]) throw new me.Error("Undefined ScreenObject for state '" + e + "'");
            t.isCurrent(e) || (h = null, 1 < arguments.length && (h = Array.prototype.slice.call(arguments, 1)), o.duration && s[e].transition ? (a = function() {
                me.game.viewport.fadeOut(o.color, o.duration)
            }, me.game.viewport.fadeIn(o.color, o.duration, function() {
                me.utils.function.defer(f, this, e)
            })) : me.utils.function.defer(f, this, e))
        }, t.isCurrent = function(e) {
            return i === e
        }, t
    }(),
    function() {
        var i = me.Renderable.extend({
                init: function(e, t, i, n) {
                    me.Renderable.prototype.init.apply(this, [e, t, i, n]), this.invalidate = !1, this.progress = 0, this.anchorPoint.set(0, 0)
                },
                onProgressUpdate: function(e) {
                    this.progress = ~~(e * this.width), this.invalidate = !0
                },
                update: function() {
                    return !0 === this.invalidate && !(this.invalidate = !1)
                },
                draw: function(e) {
                    var t = e.getColor(),
                        i = e.getHeight();
                    e.setColor("black"), e.fillRect(this.pos.x, i / 2, this.width, this.height / 2), e.setColor("#55aa00"), e.fillRect(this.pos.x, i / 2, this.progress, this.height / 2), e.setColor(t)
                }
            }),
            n = me.Renderable.extend({
                init: function(e, t) {
                    me.Renderable.prototype.init.apply(this, [e, t, 100, 85]), this.iconCanvas = me.video.createCanvas(me.Math.nextPowerOfTwo(this.width), me.Math.nextPowerOfTwo(this.height), !1);
                    var i = me.video.renderer.getContext2d(this.iconCanvas);
                    i.beginPath(), i.moveTo(.7, 48.9), i.bezierCurveTo(10.8, 68.9, 38.4, 75.8, 62.2, 64.5), i.bezierCurveTo(86.1, 53.1, 97.2, 27.7, 87, 7.7), i.lineTo(87, 7.7), i.bezierCurveTo(89.9, 15.4, 73.9, 30.2, 50.5, 41.4), i.bezierCurveTo(27.1, 52.5, 5.2, 55.8, .7, 48.9), i.lineTo(.7, 48.9), i.closePath(), i.fillStyle = "rgb(255, 255, 255)", i.fill(), i.beginPath(), i.moveTo(84, 7), i.bezierCurveTo(87.6, 14.7, 72.5, 30.2, 50.2, 41.6), i.bezierCurveTo(27.9, 53, 6.9, 55.9, 3.2, 48.2), i.bezierCurveTo(-.5, 40.4, 14.6, 24.9, 36.9, 13.5), i.bezierCurveTo(59.2, 2.2, 80.3, -.8, 84, 7), i.lineTo(84, 7), i.closePath(), i.lineWidth = 5.3, i.strokeStyle = "rgb(255, 255, 255)", i.lineJoin = "miter", i.miterLimit = 4, i.stroke(), this.anchorPoint.set(.5, .5)
                },
                draw: function(e) {
                    e.drawImage(this.iconCanvas, this.pos.x, this.pos.y)
                }
            }),
            r = me.Renderable.extend({
                init: function(e, t) {
                    me.Renderable.prototype.init.apply(this, [0, 0, e, t]), this.fontCanvas = me.video.createCanvas(256, 64), this.drawFont(me.video.renderer.getContext2d(this.fontCanvas)), this.anchorPoint.set(0, 0)
                },
                drawFont: function(e) {
                    var t, i = new me.Font("century gothic", 32, "white", "middle"),
                        n = new me.Font("century gothic", 32, "#55aa00", "middle");
                    n.bold(), i.textBaseline = n.textBaseline = "top", e.font = i.font, e.fillStyle = i.fillStyle.toRGBA(), e.textAlign = i.textAlign, e.textBaseline = i.textBaseline, t = e.measureText("melon").width, this.pos.x = Math.round((this.width - t - e.measureText("JS").width) / 2), this.pos.y = this.height / 2 + 16, i._drawFont(e, "melon", 0, 0), n._drawFont(e, "JS", t, 0)
                },
                draw: function(e) {
                    e.drawImage(this.fontCanvas, this.pos.x, this.pos.y)
                }
            });
        me.DefaultLoadingScreen = me.ScreenObject.extend({
            onResetEvent: function() {
                me.game.world.addChild(new me.ColorLayer("background", "#202020", 0), 0);
                var e = new i(0, me.video.renderer.getHeight() / 2, me.video.renderer.getWidth(), 8);
                this.loaderHdlr = me.event.subscribe(me.event.LOADER_PROGRESS, e.onProgressUpdate.bind(e)), this.resizeHdlr = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, e.resize.bind(e)), me.game.world.addChild(e, 1);
                var t = new n(me.video.renderer.getWidth() / 2, me.video.renderer.getHeight() / 2 - e.height - 35);
                me.game.world.addChild(t, 1), me.game.world.addChild(new r(me.video.renderer.getWidth(), me.video.renderer.getHeight()), 1)
            },
            onDestroyEvent: function() {
                me.event.unsubscribe(this.loaderHdlr), me.event.unsubscribe(this.resizeHdlr), this.loaderHdlr = this.resizeHdlr = null
            }
        })
    }(),
    function() {
        var a, n, h, l, r, s, o, d, c;
        me.loader = (n = {}, h = {}, l = {}, r = {}, s = {}, c = d = o = 0, (a = {}).nocache = "", a.onload = void 0, a.onProgress = void 0, a.crossOrigin = void 0, a.withCredentials = !1, a.Error = me.Error.extend({
            init: function(e) {
                me.Error.prototype.init.apply(this, [e]), this.name = "me.loader.Error"
            }
        }), a.onResourceLoaded = function(e) {
            d++;
            var t = a.getLoadProgress();
            a.onProgress && a.onProgress(t, e), me.event.publish(me.event.LOADER_PROGRESS, [t, e])
        }, a.onLoadingError = function(e) {
            throw new a.Error("Failed loading resource " + e.src)
        }, a.setNocache = function(e) {
            a.nocache = e ? "?" + ~~(1e7 * Math.random()) : ""
        }, a.setBaseURL = function(e, t) {
            "*" !== e ? s[e] = t : (s.audio = t, s.binary = t, s.image = t, s.json = t, s.js = t, s.tmx = t, s.tsx = t)
        }, a.preload = function(e, t, i) {
            for (var n = 0; n < e.length; n++) o += a.load(e[n], a.onResourceLoaded.bind(a, e[n]), a.onLoadingError.bind(a, e[n]));
            void 0 !== t && (a.onload = t), !1 !== i && me.state.change(me.state.LOADING),
                function e(t) {
                    if (d === o)
                        if (t || a.onload) {
                            clearTimeout(c);
                            var i = t || a.onload;
                            setTimeout(function() {
                                i(), me.event.publish(me.event.LOADER_COMPLETE)
                            }, 300)
                        } else console.error("no load callback defined");
                    else c = setTimeout(function() {
                        e(t)
                    }, 100)
                }(t)
        }, a.load = function(e, t, i) {
            switch (void 0 !== s[e.type] && (e.src = s[e.type] + e.src), e.type) {
                case "binary":
                    return function(r, s, e) {
                        var o = new XMLHttpRequest;
                        o.open("GET", r.src + a.nocache, !0), o.withCredentials = me.loader.withCredentials, o.responseType = "arraybuffer", o.onerror = e, o.onload = function() {
                            var e = o.response;
                            if (e) {
                                for (var t = new Uint8Array(e), i = [], n = 0; n < t.byteLength; n++) i[n] = String.fromCharCode(t[n]);
                                l[r.name] = i.join(""), s()
                            }
                        }, o.send()
                    }.call(this, e, t, i), 1;
                case "image":
                    return function(e, t, i) {
                        n[e.name] = new Image, n[e.name].onload = t, n[e.name].onerror = i, "string" == typeof a.crossOrigin && (n[e.name].crossOrigin = a.crossOrigin), n[e.name].src = e.src + a.nocache
                    }.call(this, e, t, i), 1;
                case "json":
                    return function(e, t, i) {
                        var n = new XMLHttpRequest;
                        n.overrideMimeType && n.overrideMimeType("application/json"), n.open("GET", e.src + a.nocache, !0), n.withCredentials = me.loader.withCredentials, n.ontimeout = i, n.onreadystatechange = function() {
                            4 === n.readyState && (200 === n.status || 0 === n.status && n.responseText ? (r[e.name] = JSON.parse(n.responseText), t()) : i())
                        }, n.send()
                    }.call(this, e, t, i), 1;
                case "js":
                    return function(e, t, i) {
                        var n = document.createElement("script");
                        n.src = e.src, n.type = "text/javascript", "string" == typeof a.crossOrigin && (n.crossOrigin = a.crossOrigin), n.defer = !0, n.onload = function() {
                            t()
                        }, n.onerror = function() {
                            i()
                        }, document.getElementsByTagName("body")[0].appendChild(n)
                    }.call(this, e, t, i), 1;
                case "tmx":
                case "tsx":
                    return function(t, i, n) {
                        function r(e) {
                            h[t.name] = e, "tmx" === t.type && me.levelDirector.addTMXLevel(t.name)
                        }
                        if (t.data) return r(t.data), void i();
                        var s = new XMLHttpRequest,
                            o = me.utils.file.getExtension(t.src);
                        s.overrideMimeType && ("json" === o ? s.overrideMimeType("application/json") : s.overrideMimeType("text/xml")), s.open("GET", t.src + a.nocache, !0), s.withCredentials = me.loader.withCredentials, s.ontimeout = n, s.onreadystatechange = function() {
                            if (4 === s.readyState)
                                if (200 === s.status || 0 === s.status && s.responseText) {
                                    var e = null;
                                    switch (o) {
                                        case "xml":
                                        case "tmx":
                                        case "tsx":
                                            if (me.device.ua.match(/msie/i) || !s.responseXML) {
                                                if (!window.DOMParser) throw new a.Error("XML file format loading not supported, use the JSON file format instead");
                                                e = (new DOMParser).parseFromString(s.responseText, "text/xml")
                                            } else e = s.responseXML;
                                            var t = me.TMXUtils.parse(e);
                                            switch (o) {
                                                case "tmx":
                                                    e = t.map;
                                                    break;
                                                case "tsx":
                                                    e = t.tilesets[0]
                                            }
                                            break;
                                        case "json":
                                            e = JSON.parse(s.responseText);
                                            break;
                                        default:
                                            throw new a.Error("TMX file format " + o + "not supported !")
                                    }
                                    r(e), i()
                                } else n()
                        }, s.send()
                    }.call(this, e, t, i), 1;
                case "audio":
                    return me.audio.load(e, !!e.stream, t, i), 1;
                default:
                    throw new a.Error("load : unknown or invalid resource type : " + e.type)
            }
        }, a.unload = function(e) {
            switch (e.type) {
                case "binary":
                    return e.name in l && (delete l[e.name], !0);
                case "image":
                    return e.name in n && ("function" == typeof n[e.name].dispose && n[e.name].dispose(), delete n[e.name], !0);
                case "json":
                    return e.name in r && (delete r[e.name], !0);
                case "js":
                    return !0;
                case "tmx":
                case "tsx":
                    return e.name in h && (delete h[e.name], !0);
                case "audio":
                    return me.audio.unload(e.name);
                default:
                    throw new a.Error("unload : unknown or invalid resource type : " + e.type)
            }
        }, a.unloadAll = function() {
            var e;
            for (e in l) l.hasOwnProperty(e) && a.unload({
                name: e,
                type: "binary"
            });
            for (e in n) n.hasOwnProperty(e) && a.unload({
                name: e,
                type: "image"
            });
            for (e in h) h.hasOwnProperty(e) && a.unload({
                name: e,
                type: "tmx"
            });
            for (e in r) r.hasOwnProperty(e) && a.unload({
                name: e,
                type: "json"
            });
            me.audio.unloadAll()
        }, a.getTMX = function(e) {
            return (e = "" + e) in h ? h[e] : null
        }, a.getBinary = function(e) {
            return (e = "" + e) in l ? l[e] : null
        }, a.getImage = function(e) {
            return (e = me.utils.file.getBasename("" + e)) in n ? n[e] : null
        }, a.getJSON = function(e) {
            return (e = "" + e) in r ? r[e] : null
        }, a.getLoadProgress = function() {
            return d / o
        }, a)
    }(),
    function() {
        var o = ["ex", "em", "pt", "px"],
            a = [12, 24, .75, 1];
        me.Font = me.Renderable.extend({
            init: function(e, t, i, n) {
                this.fontSize = new me.Vector2d, this.fillStyle = (new me.Color).copy(i), this.strokeStyle = new me.Color(0, 0, 0), this.lineWidth = 1, this.textAlign = n || "left", this.textBaseline = "top", this.lineHeight = 1, me.Renderable.prototype.init.apply(this, [0, 0, 0, 0]), this.setFont(e, t, i, n), this.gid || (this.gid = me.utils.createGUID())
            },
            bold: function() {
                this.font = "bold " + this.font
            },
            italic: function() {
                this.font = "italic " + this.font
            },
            setFont: function(e, t, i, n) {
                var r = e.split(",").map(function(e) {
                    return e = e.trim(), /(^".*"$)|(^'.*'$)/.test(e) ? e : '"' + e + '"'
                });
                if ("number" == typeof t) this.fontSize.y = t, t += "px";
                else {
                    var s = t.match(/([-+]?[\d.]*)(.*)/);
                    this.fontSize.y = parseFloat(s[1]), s[2] ? this.fontSize.y *= a[o.indexOf(s[2])] : t += "px"
                }
                this.height = this.fontSize.y, this.font = t + " " + r.join(","), void 0 !== i && this.fillStyle.copy(i), n && (this.textAlign = n)
            },
            measureText: function(e, t) {
                var i = e.getFontContext();
                i.font = this.font, i.fillStyle = this.fillStyle.toRGBA(), i.textAlign = this.textAlign, i.textBaseline = this.textBaseline, this.height = this.width = 0;
                for (var n = ("" + t).split("\n"), r = 0; r < n.length; r++) this.width = Math.max(i.measureText(me.utils.string.trimRight(n[r])).width, this.width), this.height += this.fontSize.y * this.lineHeight;
                return {
                    width: this.width,
                    height: this.height
                }
            },
            draw: function(e, t, i, n) {
                var r = e.globalAlpha();
                e.setGlobalAlpha(r * this.getOpacity()), e.save(), e.drawFont(this._drawFont(e.getFontContext(), t, ~~i, ~~n, !1)), e.restore(), e.setGlobalAlpha(r)
            },
            drawStroke: function(e, t, i, n) {
                var r = e.globalAlpha();
                e.setGlobalAlpha(r * this.getOpacity()), e.drawFont(this._drawFont(e.getFontContext(), t, ~~i, ~~n, !0)), e.setGlobalAlpha(r)
            },
            _drawFont: function(e, t, i, n, r) {
                e.font = this.font, e.fillStyle = this.fillStyle.toRGBA(), r && (e.strokeStyle = this.strokeStyle.toRGBA(), e.lineWidth = this.lineWidth), e.textAlign = this.textAlign, e.textBaseline = this.textBaseline;
                for (var s = ("" + t).split("\n"), o = "", a = 0, h = n, l = this.fontSize.y * this.lineHeight, d = 0; d < s.length; d++) o = me.utils.string.trimRight(s[d]), a = Math.max(a, e.measureText(o).width), e[r ? "strokeText" : "fillText"](o, i, n), n += l;
                var c = "right" === this.textAlign ? i - a : "center" === this.textAlign ? i - ~~(a / 2) : i;
                return h = 0 === this.textBaseline.search(/^(top|hanging)$/) ? h : "middle" === this.textBaseline ? h - ~~(l / 2) : h - l, this.getBounds().setShape(~~c, ~~h, ~~(a + .5), ~~(s.length * l + .5))
            }
        })
    }(),
    function() {
        var y = function(e, t) {
            for (var i = t.split(""), n = 0, r = null, s = 0; s < i.length; s++) {
                var o = i[s].charCodeAt(0),
                    a = e.bitmapFontData.glyphs[o],
                    h = r && r.kerning ? r.getKerning(o) : 0;
                n += (a.xadvance + h) * e.fontScale.x, r = a
            }
            return n
        };
        me.BitmapFont = me.Renderable.extend({
            init: function(e, t, i, n, r) {
                this.sSize = me.pool.pull("me.Vector2d", 0, 0), this.fontImage = t, this.bitmapFontData = new me.BitmapFontData(e), this.fontScale = me.pool.pull("me.Vector2d", 1, 1), this.charCount = 0, me.Renderable.prototype.init.apply(this, [0, 0, 0, 0, 0, 0]), this.textAlign = n || "left", this.textBaseline = r || "top", this.lineHeight = 1, i && this.resize(i)
            },
            set: function(e, t) {
                this.textAlign = e, t && this.resize(t)
            },
            resize: function(e) {
                this.fontScale.set(e, e)
            },
            measureText: function(e) {
                for (var t = ("" + e).split("\n"), i = 0, n = 0, r = this.bitmapFontData.capHeight * this.lineHeight, s = 0; s < t.length; s++) i = Math.max(y(this, t[s]), i), n += r;
                return {
                    width: i,
                    height: n * this.fontScale.y
                }
            },
            draw: function(e, t, i, n) {
                var r = ("" + t).split("\n"),
                    s = i,
                    o = this.bitmapFontData.capHeight * this.lineHeight * this.fontScale.y,
                    a = e.globalAlpha();
                e.setGlobalAlpha(a * this.getOpacity()), this.pos.set(i, n, this.pos.z);
                for (var h = 0; h < r.length; h++) {
                    i = s;
                    var l = me.utils.string.trimRight(r[h]),
                        d = y(this, l);
                    switch (this.textAlign) {
                        case "right":
                            i -= d;
                            break;
                        case "center":
                            i -= .5 * d
                    }
                    switch (this.textBaseline) {
                        case "middle":
                            n -= .5 * o;
                            break;
                        case "ideographic":
                        case "alphabetic":
                        case "bottom":
                            n -= o
                    }
                    for (var c = null, u = 0, f = l.length; u < f; u++) {
                        var m = l.charCodeAt(u),
                            p = this.bitmapFontData.glyphs[m],
                            g = c && c.kerning ? c.getKerning(m) : 0;
                        0 !== p.width && 0 !== p.height && e.drawImage(this.fontImage, p.src.x, p.src.y, p.width, p.height, i + p.offset.x, n + p.offset.y * this.fontScale.y, p.width * this.fontScale.x, p.height * this.fontScale.y), i += (p.xadvance + g) * this.fontScale.x, c = p
                    }
                    n += o
                }
                e.setGlobalAlpha(a)
            }
        })
    }(), me.BitmapFontData = me.Object.extend({
        init: function(e) {
            this.padTop = 0, this.padRight = 0, this.padBottom = 0, this.padLeft = 0, this.lineHeight = 0, this.capHeight = 1, this.descent = 0, this.glyphs = {}, this.xChars = ["x", "e", "a", "o", "n", "s", "r", "c", "u", "m", "v", "w", "z"], this.capChars = ["M", "N", "B", "D", "C", "E", "F", "K", "A", "G", "H", "I", "J", "L", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], this.parse(e)
        },
        _createSpaceGlyph: function() {
            var e = " ".charCodeAt(0),
                t = this.glyphs[e];
            t || ((t = me.pool.pull("me.Glyph")).id = e, t.xadvance = this._getFirstGlyph().xadvance, this.glyphs[e] = t)
        },
        _getFirstGlyph: function() {
            for (var e = Object.keys(this.glyphs), t = 0; t < e.length; t++)
                if (32 < e[t]) return this.glyphs[e[t]];
            return null
        },
        _getValueFromPair: function(e, t) {
            var i = e.match(t);
            if (!i) throw "Could not find pattern " + t + " in string: " + e;
            return i[0].split("=")[1]
        },
        parse: function(e) {
            if (!e) throw "File containing font data was empty, cannot load the bitmap font.";
            var t = e.split(/\r\n|\n/),
                i = e.match(/padding\=\d+,\d+,\d+,\d+/g);
            if (!i) throw "Padding not found in first line";
            var n = i[0].split("=")[1].split(",");
            this.padTop = parseFloat(n[0]), this.padLeft = parseFloat(n[1]), this.padBottom = parseFloat(n[2]), this.padRight = parseFloat(n[3]), this.lineHeight = parseFloat(this._getValueFromPair(t[1], /lineHeight\=\d+/g));
            for (var r = parseFloat(this._getValueFromPair(t[1], /base\=\d+/g)), s = this.padTop + this.padBottom, o = null, a = 4; a < t.length; a++) {
                var h = t[a],
                    l = h.split(/=|\s+/);
                if (h && !/^kernings/.test(h))
                    if (/^kerning\s/.test(h)) {
                        var d = parseFloat(l[2]),
                            c = parseFloat(l[4]),
                            u = parseFloat(l[6]);
                        null != (o = this.glyphs[d]) && o.setKerning(c, u)
                    } else {
                        o = me.pool.pull("me.Glyph");
                        var f = parseFloat(l[2]);
                        o.id = f, o.src.set(parseFloat(l[4]), parseFloat(l[6])), o.width = parseFloat(l[8]), o.height = parseFloat(l[10]);
                        var m = parseFloat(l[14]);
                        o.offset.set(parseFloat(l[12]), m), o.xadvance = parseFloat(l[16]), 0 < o.width && 0 < o.height && (this.descent = Math.min(r + o.yoffset, this.descent)), this.glyphs[f] = o
                    }
            }
            this.descent += this.padBottom, this._createSpaceGlyph();
            var p = null;
            for (a = 0; a < this.xChars.length; a++) {
                var g = this.xChars[a];
                if (p = this.glyphs[g.charCodeAt(0)]) break
            }
            p || (p = this._getFirstGlyph());
            var y = null;
            for (a = 0; a < this.capChars.length; a++) {
                var v = this.capChars[a];
                if (y = this.glyphs[v.charCodeAt(0)]) break
            }
            if (y) this.capHeight = y.height;
            else
                for (var x in this.glyphs)
                    if (this.glyphs.hasOwnProperty(x)) {
                        if (0 === (o = this.glyphs[x]).height || 0 === o.width) continue;
                        this.capHeight = Math.max(this.capHeight, o.height)
                    }
            this.capHeight -= s
        }
    }), me.Glyph = me.Object.extend({
        init: function() {
            this.src = me.pool.pull("me.Vector2d", 0, 0), this.offset = me.pool.pull("me.Vector2d", 0, 0), this.onResetEvent()
        },
        onResetEvent: function() {
            this.id = 0, this.src.set(0, 0), this.width = 0, this.height = 0, this.u = 0, this.v = 0, this.u2 = 0, this.v2 = 0, this.offset.set(0, 0), this.xadvance = 0, this.fixedWidth = !1
        },
        getKerning: function(e) {
            if (this.kerning) {
                var t = this.kerning[e >>> 9];
                if (t) return t[511 & e] || 0
            }
            return 0
        },
        setKerning: function(e, t) {
            this.kerning || (this.kerning = {});
            var i = this.kerning[e >>> 9];
            void 0 === i && (this.kerning[e >>> 9] = {}, i = this.kerning[e >>> 9]), i[511 & e] = t
        }
    }),
    function() {
        var i, o, n, a;
        me.audio = (o = {}, n = null, a = 0, (i = {}).init = function(e) {
            if (!me.initialized) throw new me.audio.Error("me.audio.init() called before engine initialization.");
            return e = "string" == typeof e ? e : "mp3", this.audioFormats = e.split(","), !Howler.noAudio
        }, i.enable = function() {
            this.unmuteAll()
        }, i.disable = function() {
            this.muteAll()
        }, i.load = function(e, t, i, n) {
            var r = [];
            if (void 0 === this.audioFormats || 0 === this.audioFormats.length) throw new me.audio.Error("target audio extension(s) should be set through me.audio.init() before calling the preloader.");
            for (var s = 0; s < this.audioFormats.length; s++) r.push(e.src + e.name + "." + this.audioFormats[s] + me.loader.nocache);
            return o[e.name] = new Howl({
                src: r,
                volume: Howler.volume(),
                html5: !0 === t,
                xhrWithCredentials: me.loader.withCredentials,
                onloaderror: function() {
                    (function(e, t) {
                        if (3 < a++) {
                            var i = "melonJS: failed loading " + e;
                            if (!1 !== me.sys.stopOnAudioError) throw new me.audio.Error(i);
                            me.audio.disable(), t && t(), console.log(i + ", disabling audio")
                        } else o[e].load()
                    }).call(me.audio, e.name, n)
                },
                onload: function() {
                    a = 0, i && i()
                }
            }), 1
        }, i.play = function(e, t, i, n) {
            var r = o[e];
            if (r && void 0 !== r) {
                var s = r.play();
                return "boolean" == typeof t && r.loop(t, s), r.volume("number" == typeof n ? n.clamp(0, 1) : Howler.volume(), s), "function" == typeof i && (!0 === t ? r.on("end", i, s) : r.once("end", i, s)), s
            }
            throw new me.audio.Error("audio clip " + e + " does not exist")
        }, i.fade = function(e, t, i, n, r) {
            var s = o[e];
            if (!s || void 0 === s) throw new me.audio.Error("audio clip " + e + " does not exist");
            s.fade(t, i, n, r)
        }, i.seek = function(e, t, i) {
            var n = o[e];
            if (n && void 0 !== n) return n.seek.apply(n, Array.prototype.slice.call(arguments, 1));
            throw new me.audio.Error("audio clip " + e + " does not exist")
        }, i.rate = function(e, t, i) {
            var n = o[e];
            if (n && void 0 !== n) return n.rate.apply(n, Array.prototype.slice.call(arguments, 1));
            throw new me.audio.Error("audio clip " + e + " does not exist")
        }, i.stop = function(e, t) {
            var i = o[e];
            if (!i || void 0 === i) throw new me.audio.Error("audio clip " + e + " does not exist");
            i.stop(t), i.off("end", void 0, t)
        }, i.pause = function(e, t) {
            var i = o[e];
            if (!i || void 0 === i) throw new me.audio.Error("audio clip " + e + " does not exist");
            i.pause(t)
        }, i.resume = function(e, t) {
            var i = o[e];
            if (!i || void 0 === i) throw new me.audio.Error("audio clip " + e + " does not exist");
            i.play(t)
        }, i.playTrack = function(e, t) {
            return n = e, me.audio.play(n, !0, null, t)
        }, i.stopTrack = function() {
            null !== n && (o[n].stop(), n = null)
        }, i.pauseTrack = function() {
            null !== n && o[n].pause()
        }, i.resumeTrack = function() {
            null !== n && o[n].play()
        }, i.getCurrentTrack = function() {
            return n
        }, i.setVolume = function(e) {
            Howler.volume(e)
        }, i.getVolume = function() {
            return Howler.volume()
        }, i.mute = function(e, t, i) {
            i = void 0 === i || !!i;
            var n = o[e];
            if (!n || void 0 === n) throw new me.audio.Error("audio clip " + e + " does not exist");
            n.mute(i, t)
        }, i.unmute = function(e, t) {
            i.mute(e, t, !1)
        }, i.muteAll = function() {
            Howler.mute(!0)
        }, i.unmuteAll = function() {
            Howler.mute(!1)
        }, i.muted = function() {
            return Howler._muted
        }, i.unload = function(e) {
            return e in o && (o[e].unload(), "function" == typeof o[e].dispose && o[e].dispose(), delete o[e], !0)
        }, i.unloadAll = function() {
            for (var e in o) o.hasOwnProperty(e) && i.unload(e)
        }, i), me.audio.Error = me.Error.extend({
            init: function(e) {
                me.Error.prototype.init.apply(this, [e]), this.name = "me.audio.Error"
            }
        })
    }(),
    function() {
        var c, u, f, m, p, g, y, v;
        me.video = (y = g = (f = 1) / (p = m = u = 0), v = {
            wrapper: void 0,
            renderer: 0,
            doubleBuffering: !(c = {}),
            autoScale: !1,
            scale: 1,
            scaleMethod: "fit",
            transparent: !1,
            blendMode: "normal",
            antiAlias: !1,
            failIfMajorPerformanceCaveat: !0,
            subPixel: !1,
            verbose: !1,
            consoleHeader: !0
        }, c.Error = me.Error.extend({
            init: function(e) {
                me.Error.prototype.init.apply(this, [e]), this.name = "me.video.Error"
            }
        }), c._canvasOffset = null, c.CANVAS = 0, c.WEBGL = 1, c.AUTO = 2, c.init = function(e, t, i) {
            if (!me.initialized) throw new c.Error("me.video.init() called before engine initialization.");
            (v = Object.assign(v, i || {})).doubleBuffering = !!v.doubleBuffering, v.useParentDOMSize = !!v.useParentDOMSize, v.autoScale = "auto" === v.scale || !1, v.transparent = !!v.transparent, v.antiAlias = !!v.antiAlias, v.failIfMajorPerformanceCaveat = !!v.failIfMajorPerformanceCaveat, v.subPixel = !!v.subPixel, v.verbose = !!v.verbose, 0 !== v.scaleMethod.search(/^(fill-(min|max)|fit|flex(-(width|height))?|stretch)$/) && (v.scaleMethod = "fit"), !0 === me.game.HASH.webgl && (v.renderer = c.WEBGL), v.scale = v.autoScale ? 1 : +v.scale || 1, me.sys.scale = new me.Vector2d(v.scale, v.scale), (v.autoScale || 1 !== v.scale) && (v.doubleBuffering = !0), f = e / t, p = t;
            var n, r = (m = e) * me.sys.scale.x,
                s = t * me.sys.scale.y;
            if (v.zoomX = r, v.zoomY = s, window.addEventListener("resize", me.utils.function.throttle(function(e) {
                    me.event.publish(me.event.WINDOW_ONRESIZE, [e])
                }, 100), !1), window.addEventListener("orientationchange", function(e) {
                    me.event.publish(me.event.WINDOW_ONORIENTATION_CHANGE, [e])
                }, !1), window.addEventListener("onmozorientationchange", function(e) {
                    me.event.publish(me.event.WINDOW_ONORIENTATION_CHANGE, [e])
                }, !1), void 0 !== window.screen && (window.screen.onorientationchange = function(e) {
                    me.event.publish(me.event.WINDOW_ONORIENTATION_CHANGE, [e])
                }), window.addEventListener("scroll", me.utils.function.throttle(function(e) {
                    c._canvasOffset = null, me.event.publish(me.event.WINDOW_ONSCROLL, [e])
                }, 100), !1), me.event.subscribe(me.event.WINDOW_ONRESIZE, me.video.onresize.bind(me.video)), me.event.subscribe(me.event.WINDOW_ONORIENTATION_CHANGE, me.video.onresize.bind(me.video)), n = !0 === me.device.ejecta ? document.getElementById("canvas") : void 0 !== window.canvas ? window.canvas : c.createCanvas(r, s, !0), i.wrapper && (v.wrapper = document.getElementById(i.wrapper)), v.wrapper || (v.wrapper = document.body), v.wrapper.appendChild(n), void 0 === n.getContext) return !1;
            switch (v.renderer) {
                case c.AUTO:
                case c.WEBGL:
                    this.renderer = function(t, i, n, r) {
                        try {
                            return new me.WebGLRenderer(t, i, n, r)
                        } catch (e) {
                            return new me.CanvasRenderer(t, i, n, r)
                        }
                    }(n, e, t, v);
                    break;
                default:
                    this.renderer = new me.CanvasRenderer(n, e, t, v)
            }
            var o = me.device.devicePixelRatio;
            if (1 < o && (n.style.width = n.width / o + "px", n.style.height = n.height / o + "px"), window.getComputedStyle) {
                var a = window.getComputedStyle(n, null);
                me.video.setMaxSize(parseInt(a.maxWidth, 10), parseInt(a.maxHeight, 10))
            }
            if (me.game.init(), me.video.onresize(), !1 !== i.consoleHeader) {
                var h = me.video.renderer instanceof me.CanvasRenderer ? "CANVAS" : "WebGL",
                    l = me.device.hasWebAudio ? "Web Audio" : "HTML5 Audio";
                console.log(me.mod + " " + me.version + " | http://melonjs.org"), console.log(h + " | " + l + " | pixel ratio " + me.device.devicePixelRatio + " | " + (me.device.isMobile ? "mobile" : "desktop") + " | " + me.device.getScreenOrientation() + " | " + me.device.language), console.log("resolution: requested " + e + "x" + t + ", got " + me.game.viewport.width + "x" + me.game.viewport.height)
            }
            return !0
        }, c.getPos = function(e) {
            return void 0 === e ? (null === c._canvasOffset && (e = this.renderer.getScreenCanvas(), c._canvasOffset = e && e.getBoundingClientRect ? e.getBoundingClientRect() : {
                left: 0,
                top: 0
            }), c._canvasOffset) : e.getBoundingClientRect ? e.getBoundingClientRect() : {
                left: 0,
                top: 0
            }
        }, c.setMaxSize = function(e, t) {
            g = e || 1 / 0, y = t || 1 / 0, me.utils.function.defer(me.video.onresize, me.video)
        }, c.createCanvas = function(e, t, i) {
            if (0 === e || 0 === t) throw new c.Error("width or height was zero, Canvas could not be initialized !");
            var n = document.createElement("canvas");
            return !0 === i && me.device.cocoon && !0 !== me.device.android2 && (n.screencanvas = !0), n.width = e, n.height = t, n
        }, c.getWrapper = function() {
            return v.wrapper
        }, c.onresize = function() {
            var e = 1,
                t = 1;
            if (c._canvasOffset = null, v.autoScale) {
                var i, n, r = me.video.renderer.getScreenCanvas().parentNode;
                if (void 0 !== r)
                    if (v.useParentDOMSize && "function" == typeof r.getBoundingClientRect) {
                        var s = r.getBoundingClientRect();
                        i = s.width || s.right - s.left, n = s.height || s.bottom - s.top
                    } else i = r.width, n = r.height;
                var o = Math.min(g, i || window.innerWidth),
                    a = Math.min(y, n || window.innerHeight),
                    h = o / a,
                    l = 1 / 0,
                    d = 1 / 0;
                "fill-min" === v.scaleMethod && f < h || "fill-max" === v.scaleMethod && h < f || "flex-width" === v.scaleMethod ? (e = t = o / (l = Math.min(g, p * h)), l = ~~(l + .5), this.renderer.resize(l, p), me.game.viewport.resize(l, p), me.game.world.updateChildBounds()) : "fill-min" === v.scaleMethod && h < f || "fill-max" === v.scaleMethod && f < h || "flex-height" === v.scaleMethod ? (e = t = a / (d = Math.min(y, m * (a / o))), d = ~~(d + .5), this.renderer.resize(m, d), me.game.viewport.resize(m, d), me.game.world.updateChildBounds()) : "flex" === v.scaleMethod ? (this.renderer.resize(o, a), me.game.viewport.resize(o, a), me.game.world.updateChildBounds()) : "stretch" === v.scaleMethod ? (e = o / m, t = a / p) : e = t = h < f ? o / m : a / p, e *= me.device.devicePixelRatio, t *= me.device.devicePixelRatio, u && clearTimeout(u), u = me.utils.function.defer(me.video.updateDisplaySize, this, e, t)
            }
        }, c.updateDisplaySize = function(e, t) {
            c._canvasOffset = null, me.sys.scale.set(e, t), this.renderer.scaleCanvas(e, t), me.game.repaint(), u = 0
        }, c)
    }(), me.Renderer = me.Object.extend({
        init: function(e, t, i, n) {
            return this.settings = n, this.currentScissor = new Int32Array([0, 0, this.width, this.height]), this.currentBlendMode = "normal", this.gameWidthZoom = this.settings.zoomX || t, this.gameHeightZoom = this.settings.zoomY || i, this.canvas = this.backBufferCanvas = e, this.context = null, this.currentColor = new me.Color(255, 255, 255, 1), this.uvOffset = 0, me.event.subscribe(me.event.GAME_RESET, function() {
                me.video.renderer.reset()
            }), this
        },
        clear: function() {},
        reset: function() {
            this.resetTransform(), this.setBlendMode(this.settings.blendMode), this.cache.reset(), this.currentScissor[0] = 0, this.currentScissor[1] = 0, this.currentScissor[2] = this.backBufferCanvas.width, this.currentScissor[3] = this.backBufferCanvas.height
        },
        getCanvas: function() {
            return this.backBufferCanvas
        },
        getScreenCanvas: function() {
            return this.canvas
        },
        getScreenContext: function() {
            return this.context
        },
        getBlendMode: function() {
            return this.currentBlendMode
        },
        getContext2d: function(e, t) {
            if (null == e) throw new me.video.Error("You must pass a canvas element in order to create a 2d context");
            if (void 0 === e.getContext) throw new me.video.Error("Your browser does not support HTML5 canvas.");
            var i;
            return "boolean" != typeof t && (t = !0), (i = me.device.cocoon ? e.getContext("2d", {
                antialias: this.settings.antiAlias,
                alpha: t
            }) : e.getContext("2d", {
                alpha: t
            })).canvas || (i.canvas = e), this.setAntiAlias(i, this.settings.antiAlias), i
        },
        getWidth: function() {
            return this.backBufferCanvas.width
        },
        getHeight: function() {
            return this.backBufferCanvas.height
        },
        getColor: function() {
            return this.currentColor
        },
        globalAlpha: function() {
            return this.currentColor.glArray[3]
        },
        resize: function(e, t) {
            this.backBufferCanvas.width = e, this.backBufferCanvas.height = t, this.currentScissor[0] = 0, this.currentScissor[1] = 0, this.currentScissor[2] = e, this.currentScissor[3] = t
        },
        setAntiAlias: function(e, t) {
            var i = e.canvas;
            me.agent.setPrefixed("imageSmoothingEnabled", !0 === t, e), !0 !== t ? (i.style["image-rendering"] = "pixelated", i.style["image-rendering"] = "crisp-edges", i.style["image-rendering"] = "-moz-crisp-edges", i.style["image-rendering"] = "-o-crisp-edges", i.style["image-rendering"] = "-webkit-optimize-contrast", i.style.msInterpolationMode = "nearest-neighbor") : i.style["image-rendering"] = "auto"
        },
        drawFont: function() {}
    }), me.Renderer.TextureCache = me.Object.extend({
        init: function(e) {
            this.cache = new Map, this.units = new Map, this.max_size = e || 1 / 0, this.reset()
        },
        reset: function() {
            this.cache.clear(), this.units.clear(), this.length = 0
        },
        validate: function() {
            if (this.length >= this.max_size) throw new me.video.Error("Texture cache overflow: " + this.max_size + " texture units available.")
        },
        get: function(e, t) {
            return this.cache.has(e) || (t || (t = me.video.renderer.Texture.prototype.createAtlas.apply(me.video.renderer.Texture.prototype, [e.width, e.height, e.src ? me.utils.file.getBasename(e.src) : void 0])), this.put(e, new me.video.renderer.Texture(t, e, !1))), this.cache.get(e)
        },
        put: function(e, t) {
            var i = e.width,
                n = e.height;
            if (!me.Math.isPowerOfTwo(i) || !me.Math.isPowerOfTwo(n)) {
                var r = void 0 !== e.src ? e.src : e;
                console.warn("[Texture] " + r + " is not a POT texture (" + i + "x" + n + ")")
            }
            this.validate(), this.cache.set(e, t), this.units.set(t, this.length++)
        },
        getUnit: function(e) {
            return this.units.get(e)
        }
    }), me.CanvasRenderer = me.Renderer.extend({
        init: function(e, t, i, n) {
            return me.Renderer.prototype.init.apply(this, [e, t, i, n]), this.context = this.getContext2d(this.canvas, this.settings.transparent), this.settings.doubleBuffering ? (this.backBufferCanvas = me.video.createCanvas(t, i, !1), this.backBufferContext2D = this.getContext2d(this.backBufferCanvas), this.settings.transparent && (this.context.globalCompositeOperation = "copy")) : (this.backBufferCanvas = this.canvas, this.backBufferContext2D = this.context), this.setBlendMode(this.settings.blendMode), this.setColor(this.currentColor), this.cache = new me.Renderer.TextureCache, !1 === this.settings.textureSeamFix || this.settings.antiAlias || (this.uvOffset = 1), this
        },
        reset: function() {
            me.Renderer.prototype.reset.apply(this)
        },
        resetTransform: function() {
            this.backBufferContext2D.setTransform(1, 0, 0, 1, 0, 0)
        },
        setBlendMode: function(e, t) {
            switch (t = t || this.getContext(), this.currentBlendMode = e) {
                case "multiply":
                    t.globalCompositeOperation = "multiply";
                    break;
                default:
                    t.globalCompositeOperation = "source-over", this.currentBlendMode = "normal"
            }
        },
        clear: function() {
            this.settings.transparent && this.clearColor("rgba(0,0,0,0)", !0)
        },
        flush: function() {
            this.settings.doubleBuffering && this.context.drawImage(this.backBufferCanvas, 0, 0, this.backBufferCanvas.width, this.backBufferCanvas.height, 0, 0, this.gameWidthZoom, this.gameHeightZoom)
        },
        clearColor: function(e, t) {
            this.save(), this.resetTransform(), this.backBufferContext2D.globalCompositeOperation = t ? "copy" : "source-over", this.backBufferContext2D.fillStyle = e instanceof me.Color ? e.toRGBA() : e, this.fillRect(0, 0, this.backBufferCanvas.width, this.backBufferCanvas.height), this.restore()
        },
        clearRect: function(e, t, i, n) {
            this.backBufferContext2D.clearRect(e, t, i, n)
        },
        createPattern: function(e, t) {
            return this.backBufferContext2D.createPattern(e, t)
        },
        drawImage: function(e, t, i, n, r, s, o, a, h) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (void 0 === n ? (n = a = e.width, r = h = e.height, s = t, o = i, i = t = 0) : void 0 === s && (s = t, o = i, a = n, h = r, n = e.width, r = e.height, i = t = 0), !1 === this.settings.subPixel && (s = ~~s, o = ~~o), this.backBufferContext2D.drawImage(e, t, i, n, r, s, o, a, h))
        },
        drawPattern: function(e, t, i, n, r) {
            if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
                var s = this.backBufferContext2D.fillStyle;
                this.backBufferContext2D.fillStyle = e, this.backBufferContext2D.fillRect(t, i, n, r), this.backBufferContext2D.fillStyle = s
            }
        },
        fillArc: function(e, t, i, n, r, s) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.translate(e + i, t + i), this.backBufferContext2D.beginPath(), this.backBufferContext2D.arc(0, 0, i, n, r, s || !1), this.backBufferContext2D.fill(), this.backBufferContext2D.closePath(), this.translate(-(e + i), -(t + i)))
        },
        fillRect: function(e, t, i, n) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || this.backBufferContext2D.fillRect(e, t, i, n)
        },
        getContext: function() {
            return this.backBufferContext2D
        },
        getFontContext: function() {
            return this.getContext()
        },
        scaleCanvas: function(e, t) {
            this.canvas.width = this.gameWidthZoom = this.backBufferCanvas.width * e, this.canvas.height = this.gameHeightZoom = this.backBufferCanvas.height * t, 1 < me.device.devicePixelRatio && (this.canvas.style.width = this.canvas.width / me.device.devicePixelRatio + "px", this.canvas.style.height = this.canvas.height / me.device.devicePixelRatio + "px"), this.settings.doubleBuffering && this.settings.transparent ? this.context.globalCompositeOperation = "copy" : this.setBlendMode(this.settings.blendMode, this.context), this.setAntiAlias(this.context, this.settings.antiAlias), this.flush()
        },
        save: function() {
            this.backBufferContext2D.save()
        },
        restore: function() {
            this.backBufferContext2D.restore(), this.currentColor.glArray[3] = this.backBufferContext2D.globalAlpha, this.currentScissor[0] = 0, this.currentScissor[1] = 0, this.currentScissor[2] = this.backBufferCanvas.width, this.currentScissor[3] = this.backBufferCanvas.height
        },
        rotate: function(e) {
            this.backBufferContext2D.rotate(e)
        },
        scale: function(e, t) {
            this.backBufferContext2D.scale(e, t)
        },
        setColor: function(e) {
            this.backBufferContext2D.strokeStyle = this.backBufferContext2D.fillStyle = e instanceof me.Color ? e.toRGBA() : e
        },
        setGlobalAlpha: function(e) {
            this.backBufferContext2D.globalAlpha = this.currentColor.glArray[3] = e
        },
        setLineWidth: function(e) {
            this.backBufferContext2D.lineWidth = e
        },
        strokeArc: function(e, t, i, n, r, s) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.translate(e + i, t + i), this.backBufferContext2D.beginPath(), this.backBufferContext2D.arc(0, 0, i, n, r, s || !1), this.backBufferContext2D.stroke(), this.backBufferContext2D.closePath(), this.translate(-(e + i), -(t + i)))
        },
        strokeEllipse: function(e, t, i, n) {
            if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
                var r = e - i,
                    s = e + i,
                    o = t - n,
                    a = t + n,
                    h = .551784 * i,
                    l = .551784 * n,
                    d = e - h,
                    c = e + h,
                    u = t - l,
                    f = t + l;
                this.backBufferContext2D.beginPath(), this.backBufferContext2D.moveTo(e, o), this.backBufferContext2D.bezierCurveTo(c, o, s, u, s, t), this.backBufferContext2D.bezierCurveTo(s, f, c, a, e, a), this.backBufferContext2D.bezierCurveTo(d, a, r, f, r, t), this.backBufferContext2D.bezierCurveTo(r, u, d, o, e, o), this.backBufferContext2D.stroke()
            }
        },
        strokeLine: function(e, t, i, n) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.backBufferContext2D.beginPath(), this.backBufferContext2D.moveTo(e, t), this.backBufferContext2D.lineTo(i, n), this.backBufferContext2D.stroke())
        },
        strokePolygon: function(e) {
            if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
                var t;
                this.translate(e.pos.x, e.pos.y), this.backBufferContext2D.beginPath(), this.backBufferContext2D.moveTo(e.points[0].x, e.points[0].y);
                for (var i = 1; i < e.points.length; i++) t = e.points[i], this.backBufferContext2D.lineTo(t.x, t.y);
                this.backBufferContext2D.lineTo(e.points[0].x, e.points[0].y), this.backBufferContext2D.stroke(), this.backBufferContext2D.closePath(), this.translate(-e.pos.x, -e.pos.y)
            }
        },
        strokeRect: function(e, t, i, n) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || this.backBufferContext2D.strokeRect(e, t, i, n)
        },
        drawShape: function(e) {
            "Rectangle" === e.shapeType ? this.strokeRect(e.left, e.top, e.width, e.height) : e instanceof me.Line || e instanceof me.Polygon ? this.strokePolygon(e) : e instanceof me.Ellipse && (e.radiusV.x === e.radiusV.y ? this.strokeArc(e.pos.x - e.radius, e.pos.y - e.radius, e.radius, 0, 2 * Math.PI) : this.strokeEllipse(e.pos.x, e.pos.y, e.radiusV.x, e.radiusV.y))
        },
        setTransform: function(e) {
            this.resetTransform(), this.transform(e)
        },
        transform: function(e) {
            var t = e.val,
                i = t[6],
                n = t[7];
            !1 === this.settings.subPixel && (i = ~~i, n = ~~n), this.backBufferContext2D.transform(t[0], t[1], t[3], t[4], i, n)
        },
        translate: function(e, t) {
            !1 === this.settings.subPixel ? this.backBufferContext2D.translate(~~e, ~~t) : this.backBufferContext2D.translate(e, t)
        },
        clipRect: function(e, t, i, n) {
            var r = this.backBufferCanvas;
            if (0 !== e || 0 !== t || i !== r.width || n !== r.height) {
                var s = this.currentScissor;
                if (s[0] !== e || s[1] !== t || s[2] !== i || s[3] !== n) {
                    var o = this.backBufferContext2D;
                    o.beginPath(), o.rect(e, t, i, n), o.clip(), s[0] = e, s[1] = t, s[2] = i, s[3] = n
                }
            }
        }
    }),
    function() {
        var o = -Math.PI / 2;
        me.CanvasRenderer.prototype.Texture = me.Object.extend({
            init: function(e, t, i) {
                if (this.format = null, this.source = t || null, this.atlas = null, void 0 !== e)
                    if (void 0 !== e.meta) {
                        if (e.meta.app.includes("texturepacker")) {
                            if (this.format = "texturepacker", void 0 === t) {
                                var n = e.meta.image;
                                if (this.source = me.loader.getImage(n), !this.source) throw new me.video.renderer.Texture.Error("Atlas texture '" + n + "' not found")
                            }
                            this.repeat = "no-repeat"
                        } else if (e.meta.app.includes("ShoeBox")) {
                            if (!e.meta.exporter || !e.meta.exporter.includes("melonJS")) throw new me.video.renderer.Texture.Error("ShoeBox requires the JSON exporter : https://github.com/melonjs/melonJS/tree/master/media/shoebox_JSON_export.sbx");
                            this.format = "ShoeBox", this.repeat = "no-repeat"
                        } else e.meta.app.includes("melonJS") && (this.format = "melonJS", this.repeat = e.meta.repeat || "no-repeat");
                        this.atlas = this.parse(e)
                    } else void 0 !== e.framewidth && void 0 !== e.frameheight && (this.format = "Spritesheet (fixed cell size)", void 0 !== this.source && (e.image = this.source), this.atlas = this.parseFromSpriteSheet(e), this.repeat = "no-repeat");
                if (!this.atlas) throw new me.video.renderer.Texture.Error("texture atlas format not supported");
                !1 !== i && (i instanceof me.Renderer.TextureCache ? i.put(this.source, this) : me.video.renderer.cache.put(this.source, this))
            },
            createAtlas: function(e, t, i, n) {
                return {
                    meta: {
                        app: "melonJS",
                        size: {
                            w: e,
                            h: t
                        },
                        repeat: n || "no-repeat"
                    },
                    frames: [{
                        filename: i || "default",
                        frame: {
                            x: 0,
                            y: 0,
                            w: e,
                            h: t
                        }
                    }]
                }
            },
            parse: function(e) {
                var s = {};
                return e.frames.forEach(function(e) {
                    if (e.hasOwnProperty("filename")) {
                        var t, i, n = e.frame,
                            r = e.spriteSourceSize && e.sourceSize && e.pivot;
                        r && (t = e.sourceSize.w * e.pivot.x - (e.trimmed ? e.spriteSourceSize.x : 0), i = e.sourceSize.h * e.pivot.y - (e.trimmed ? e.spriteSourceSize.y : 0)), s[e.filename] = {
                            name: e.filename,
                            offset: new me.Vector2d(n.x, n.y),
                            anchorPoint: r ? new me.Vector2d(t / n.w, i / n.h) : null,
                            width: n.w,
                            height: n.h,
                            angle: !0 === e.rotated ? o : 0
                        }
                    }
                }), s
            },
            parseFromSpriteSheet: function(e) {
                var t = {},
                    i = e.image,
                    n = e.spacing || 0,
                    r = e.margin || 0,
                    s = i.width,
                    o = i.height,
                    a = me.pool.pull("me.Vector2d", ~~((s - r + n) / (e.framewidth + n)), ~~((o - r + n) / (e.frameheight + n)));
                s % (e.framewidth + n) == 0 && o % (e.frameheight + n) == 0 || (s = a.x * (e.framewidth + n), o = a.y * (e.frameheight + n), console.warn("Spritesheet Texture for image: " + i.src + " is not divisible by " + (e.framewidth + n) + "x" + (e.frameheight + n) + ", truncating effective size to " + s + "x" + o));
                for (var h = 0, l = a.x * a.y; h < l; h++) t["" + h] = {
                    name: "" + h,
                    offset: new me.Vector2d(r + (n + e.framewidth) * (h % a.x), r + (n + e.frameheight) * ~~(h / a.x)),
                    anchorPoint: e.anchorPoint || null,
                    width: e.framewidth,
                    height: e.frameheight,
                    angle: 0
                };
                return me.pool.push(a), t
            },
            getAtlas: function() {
                return this.atlas
            },
            getTexture: function() {
                return this.source
            },
            getRegion: function(e) {
                return this.atlas[e]
            },
            createSpriteFromName: function(e, t) {
                return me.pool.pull("me.Sprite", 0, 0, Object.assign({
                    image: this,
                    region: e
                }, t || {}))
            },
            createAnimationFromName: function(e, t) {
                for (var i, n = [], r = {}, s = 0, o = 0, a = 0; a < e.length; ++a) {
                    if (null == (i = this.getRegion(e[a]))) throw new me.video.renderer.Texture.Error("Texture - region for " + e[a] + " not found");
                    n[a] = i, r[e[a]] = a, s = Math.max(i.width, s), o = Math.max(i.height, o)
                }
                return new me.Sprite(0, 0, Object.assign({
                    image: this,
                    framewidth: s,
                    frameheight: o,
                    margin: 0,
                    spacing: 0,
                    atlas: n,
                    atlasIndices: r
                }, t || {}))
            }
        }), me.CanvasRenderer.prototype.Texture.Error = me.Error.extend({
            init: function(e) {
                me.Error.prototype.init.apply(this, [e]), this.name = "me.CanvasRenderer.Texture.Error"
            }
        })
    }(), me.video.shader = function() {
        var e = {};

        function u(e, t, i) {
            var n = e.createShader(t);
            if (e.shaderSource(n, i), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) throw new me.video.Error(e.getShaderInfoLog(n));
            return n
        }
        var f = {
            bool: "1i",
            int: "1i",
            float: "1f",
            vec2: "2fv",
            vec3: "3fv",
            vec4: "4fv",
            bvec2: "2iv",
            bvec3: "3iv",
            bvec4: "4iv",
            ivec2: "2iv",
            ivec3: "3iv",
            ivec4: "4iv",
            mat2: "Matrix2fv",
            mat3: "Matrix3fv",
            mat4: "Matrix4fv",
            sampler2D: "1i"
        };
        return e.createShader = function(s, e, t) {
            var i, n = {
                    attributes: {},
                    uniforms: {},
                    handle: null
                },
                o = n.handle = s.createProgram(),
                r = /attribute\s+\w+\s+(\w+)/g,
                a = /uniform\s+(\w+)\s+(\w+)/g,
                h = [],
                l = {},
                d = {},
                c = {};
            if (s.attachShader(o, u(s, s.VERTEX_SHADER, e)), s.attachShader(o, u(s, s.FRAGMENT_SHADER, t)), s.linkProgram(o), !s.getProgramParameter(o, s.LINK_STATUS)) throw new me.video.Error(s.getProgramInfoLog(o));
            for (s.useProgram(o); i = r.exec(e);) h.push(i[1]);
            return [e, t].forEach(function(e) {
                for (; i = a.exec(e);) l[i[2]] = i[1]
            }), h.forEach(function(e) {
                n.attributes[e] = s.getAttribLocation(o, e), s.enableVertexAttribArray(n.attributes[e])
            }), Object.keys(l).forEach(function(e) {
                var i, n, t, r = l[e];
                c[e] = s.getUniformLocation(o, e), d[e] = {
                    get: (t = e, function() {
                        return c[t]
                    }),
                    set: (i = e, n = "uniform" + f[r], 0 === r.indexOf("mat") ? function(e) {
                        s[n](c[i], !1, e)
                    } : function(e) {
                        var t = n;
                        e.length && "v" !== n.substr(-1) && (t += "v"), s[t](c[i], e)
                    })
                }
            }), Object.defineProperties(n.uniforms, d), n
        }, e.createTexture = function(e, t, i, n, r, s, o, a, h) {
            r = r || "no-repeat";
            var l = me.Math.isPowerOfTwo(s || i.width) && me.Math.isPowerOfTwo(o || i.height),
                d = e.createTexture(),
                c = 0 === r.search(/^repeat(-x)?$/) && l ? e.REPEAT : e.CLAMP_TO_EDGE,
                u = 0 === r.search(/^repeat(-y)?$/) && l ? e.REPEAT : e.CLAMP_TO_EDGE;
            return e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, d), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, c), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, u), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, "boolean" != typeof h || h), s || o || a ? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, s, o, a, e.RGBA, e.UNSIGNED_BYTE, i) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i), d
        }, e
    }(), me.WebGLRenderer = me.Renderer.extend({
        init: function(e, t, i, n) {
            me.Renderer.prototype.init.apply(this, [e, t, i, n]), this.context = this.gl = this.getContextGL(e, this.settings.transparent), this._colorStack = [], this._matrixStack = [], this._scissorStack = [], this._linePoints = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d], this.currentTransform = new me.Matrix2d;
            var r = this.settings.compositor || me.WebGLRenderer.Compositor;
            return this.compositor = new r(this), this.gl.disable(this.gl.DEPTH_TEST), this.gl.disable(this.gl.SCISSOR_TEST), this.gl.enable(this.gl.BLEND), this.setBlendMode(this.settings.blendMode), this.cache = new me.Renderer.TextureCache(this.compositor.maxTextures), this.createFillTexture(this.cache), this.scaleCanvas(1, 1), this
        },
        reset: function() {
            me.Renderer.prototype.reset.apply(this), this.compositor.reset(), this.gl.disable(this.gl.SCISSOR_TEST), this.createFillTexture(this.cache)
        },
        resetTransform: function() {
            this.currentTransform.identity()
        },
        createFillTexture: function(e) {
            if (void 0 === this.fillTexture) {
                var t = new Uint8Array([255, 255, 255, 255]);
                this.fillTexture = new this.Texture(this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [1, 1, "fillTexture"]), t, e), this.fillTexture.premultipliedAlpha = !1
            } else e.put(this.fillTexture.source, this.fillTexture);
            this.compositor.uploadTexture(this.fillTexture, 1, 1, 0)
        },
        createFontTexture: function(e) {
            var t = me.video.createCanvas(me.Math.nextPowerOfTwo(this.backBufferCanvas.width), me.Math.nextPowerOfTwo(this.backBufferCanvas.height));
            this.fontContext2D = this.getContext2d(t), this.fontTexture = new this.Texture(this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [this.backBufferCanvas.width, this.backBufferCanvas.height, "fontTexture"]), t, e), this.compositor.uploadTexture(this.fontTexture)
        },
        createPattern: function(e, t) {
            if (!me.Math.isPowerOfTwo(e.width) || !me.Math.isPowerOfTwo(e.height)) {
                var i = void 0 !== e.src ? e.src : e;
                throw new me.video.Error("[WebGL Renderer] " + i + " is not a POT texture (" + e.width + "x" + e.height + ")")
            }
            var n = new this.Texture(this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [e.width, e.height, "pattern", t]), e);
            return this.compositor.uploadTexture(n), n
        },
        flush: function() {
            this.compositor.flush()
        },
        clearColor: function(e, t) {
            this.save(), this.resetTransform(), this.currentColor.copy(e), t ? this.compositor.clear() : this.fillRect(0, 0, this.canvas.width, this.canvas.height), this.restore()
        },
        clearRect: function(e, t, i, n) {
            var r = this.currentColor.clone();
            this.currentColor.copy("#0000"), this.fillRect(e, t, i, n), this.currentColor.copy(r), me.pool.push(r)
        },
        drawFont: function(e) {
            var t = this.getFontContext();
            this.flush(), this.compositor.uploadTexture(this.fontTexture, 0, 0, 0, !0);
            var i = e.pos.x + "," + e.pos.y + "," + e.width + "," + e.height;
            this.compositor.addQuad(this.fontTexture, i, e.pos.x, e.pos.y, e.width, e.height), t.clearRect(0, 0, this.backBufferCanvas.width, this.backBufferCanvas.height)
        },
        drawImage: function(e, t, i, n, r, s, o, a, h) {
            void 0 === n ? (n = a = e.width, r = h = e.height, s = t, o = i, i = t = 0) : void 0 === s && (s = t, o = i, a = n, h = r, n = e.width, r = e.height, i = t = 0), !1 === this.settings.subPixel && (s = ~~s, o = ~~o);
            var l = t + "," + i + "," + n + "," + r;
            this.compositor.addQuad(this.cache.get(e), l, s, o, a, h)
        },
        drawPattern: function(e, t, i, n, r) {
            var s = "0,0," + n + "," + r;
            this.compositor.addQuad(e, s, t, i, n, r)
        },
        fillRect: function(e, t, i, n) {
            this.compositor.addQuad(this.fillTexture, "default", e, t, i, n)
        },
        getScreenContext: function() {
            return this.gl
        },
        getContextGL: function(e, t) {
            if (null == e) throw new me.video.Error("You must pass a canvas element in order to create a GL context");
            "boolean" != typeof t && (t = !0);
            var i = {
                    alpha: t,
                    antialias: this.settings.antiAlias,
                    depth: !1,
                    premultipliedAlpha: t,
                    failIfMajorPerformanceCaveat: this.settings.failIfMajorPerformanceCaveat
                },
                n = e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
            if (!n) throw new me.video.Error("A WebGL context could not be created.");
            return n
        },
        getContext: function() {
            return this.gl
        },
        setBlendMode: function(e, t) {
            switch ((t = t || this.gl).enable(t.BLEND), e) {
                case "multiply":
                    t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA), this.currentBlendMode = e;
                    break;
                default:
                    t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), this.currentBlendMode = "normal"
            }
        },
        getFontContext: function() {
            return void 0 === this.fontContext2D && (console.warn("[WebGL Renderer] WARNING : Using Standard me.Font with WebGL will severly impact performances !"), this.createFontTexture(this.cache)), this.fontContext2D
        },
        scaleCanvas: function(e, t) {
            var i = this.canvas.width * e,
                n = this.canvas.height * t;
            1 < me.device.devicePixelRatio ? (this.canvas.style.width = i / me.device.devicePixelRatio + "px", this.canvas.style.height = n / me.device.devicePixelRatio + "px") : (this.canvas.style.width = i + "px", this.canvas.style.height = n + "px"), this.compositor.setProjection(this.canvas.width, this.canvas.height)
        },
        restore: function() {
            if (0 !== this._matrixStack.length) {
                var e = this._colorStack.pop(),
                    t = this._matrixStack.pop();
                this.currentColor.copy(e), this.currentTransform.copy(t), me.pool.push(e), me.pool.push(t)
            }
            0 !== this._scissorStack.length ? this.currentScissor.set(this._scissorStack.pop()) : (this.gl.disable(this.gl.SCISSOR_TEST), this.currentScissor[0] = 0, this.currentScissor[1] = 0, this.currentScissor[2] = this.backBufferCanvas.width, this.currentScissor[3] = this.backBufferCanvas.height)
        },
        save: function() {
            this._colorStack.push(this.currentColor.clone()), this._matrixStack.push(this.currentTransform.clone()), this.gl.isEnabled(this.gl.SCISSOR_TEST) && this._scissorStack.push(this.currentScissor.slice())
        },
        rotate: function(e) {
            this.currentTransform.rotate(e)
        },
        scale: function(e, t) {
            this.currentTransform.scale(e, t)
        },
        setAntiAlias: function(e, t) {
            me.Renderer.prototype.setAntiAlias.apply(this, [e, t])
        },
        setGlobalAlpha: function(e) {
            this.currentColor.glArray[3] = e
        },
        setColor: function(e) {
            var t = this.currentColor.glArray[3];
            this.currentColor.copy(e), this.currentColor.glArray[3] *= t
        },
        setLineWidth: function(e) {
            this.getScreenContext().lineWidth(e)
        },
        strokeArc: function() {},
        strokeEllipse: function() {},
        strokeLine: function(e, t, i, n) {
            var r = this._linePoints.slice(0, 2);
            r[0].x = e, r[0].y = t, r[1].x = i, r[1].y = n, this.compositor.drawLine(r, !0)
        },
        strokePolygon: function(e) {
            var t, i, n = e.points.length;
            for (i = this._linePoints.length; i < n; i++) this._linePoints.push(new me.Vector2d);
            for (t = this._linePoints.slice(0, n), i = 0; i < n; i++) t[i].x = e.pos.x + e.points[i].x, t[i].y = e.pos.y + e.points[i].y;
            this.compositor.drawLine(t)
        },
        strokeRect: function(e, t, i, n) {
            var r = this._linePoints.slice(0, 4);
            r[0].x = e, r[0].y = t, r[1].x = e + i, r[1].y = t, r[2].x = e + i, r[2].y = t + n, r[3].x = e, r[3].y = t + n, this.compositor.drawLine(r)
        },
        drawShape: function(e) {
            "Rectangle" === e.shapeType ? this.strokeRect(e.left, e.top, e.width, e.height) : e instanceof me.Line || e instanceof me.Polygon ? this.strokePolygon(e) : e instanceof me.Ellipse && (e.radiusV.x === e.radiusV.y ? this.strokeArc(e.pos.x - e.radius, e.pos.y - e.radius, e.radius, 0, 2 * Math.PI) : this.strokeEllipse(e.pos.x, e.pos.y, e.radiusV.x, e.radiusV.y))
        },
        setTransform: function(e) {
            this.resetTransform(), this.transform(e)
        },
        transform: function(e) {
            if (this.currentTransform.multiply(e), !1 === this.settings.subPixel) {
                var t = this.currentTransform.val;
                t[6] = ~~t[6], t[7] = ~~t[7]
            }
        },
        translate: function(e, t) {
            !1 === this.settings.subPixel ? this.currentTransform.translate(~~e, ~~t) : this.currentTransform.translate(e, t)
        },
        clipRect: function(e, t, i, n) {
            var r = this.backBufferCanvas;
            if (0 !== e || 0 !== t || i !== r.width || n !== r.height) {
                var s = this.gl,
                    o = this.currentScissor;
                if (s.isEnabled(s.SCISSOR_TEST) && o[0] === e && o[1] === t && o[2] === i && o[3] === n) return;
                this.flush(), s.enable(this.gl.SCISSOR_TEST), s.scissor(e + this.currentTransform.tx, r.height - n - t - this.currentTransform.ty, i, n), o[0] = e, o[1] = t, o[2] = i, o[3] = n
            } else s.disable(s.SCISSOR_TEST)
        }
    }), me.WebGLRenderer.prototype.Texture = me.CanvasRenderer.prototype.Texture.extend({
        parse: function(e) {
            var t = e.meta.size.w,
                i = e.meta.size.h,
                n = me.CanvasRenderer.prototype.Texture.prototype.parse.apply(this, [e]);
            return this._addStMap(n, t, i)
        },
        parseFromSpriteSheet: function(e) {
            var t = e.image.width,
                i = e.image.height,
                n = me.CanvasRenderer.prototype.Texture.prototype.parseFromSpriteSheet.apply(this, [e]);
            return this._addStMap(n, t, i)
        },
        _addStMap: function(s, o, a) {
            return Object.keys(s).forEach(function(e) {
                var t = s[e].offset,
                    i = s[e].width,
                    n = s[e].height;
                s[e].stMap = new Float32Array([t.x / o, t.y / a, (t.x + i) / o, (t.y + n) / a]);
                var r = t.x + "," + t.y + "," + o + "," + a;
                s[r] = s[e]
            }), s
        },
        _insertRegion: function(e, t, i, n, r) {
            var s = this.source.width,
                o = this.source.height;
            return this.atlas[e] = {
                name: e,
                offset: new me.Vector2d(t, i),
                width: n,
                height: r,
                angle: 0,
                stMap: new Float32Array([t / s, i / o, (t + n) / s, (i + r) / o])
            }, this.atlas[e]
        }
    }), me.WebGLRenderer.prototype.Texture.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.WebGLRenderer.Texture.Error"
        }
    }),
    function() {
        var s = 9 * Float32Array.BYTES_PER_ELEMENT,
            o = 0 * Float32Array.BYTES_PER_ELEMENT,
            a = 2 * Float32Array.BYTES_PER_ELEMENT,
            h = 6 * Float32Array.BYTES_PER_ELEMENT,
            l = 7 * Float32Array.BYTES_PER_ELEMENT;
        me.WebGLRenderer.Compositor = me.Object.extend({
            init: function(e) {
                var t = e.gl;
                this.length = 0, this.units = [], this.maxTextures = Math.min(24, t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)), this.v = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d], this.renderer = e, this.gl = e.gl, this.matrix = e.currentTransform, this.color = e.currentColor, this.uMatrix = new me.Matrix2d;
                var i = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision < 16 ? "mediump" : "highp";
                this.lineShader = me.video.shader.createShader(this.gl, "precision highp float;attribute vec2 aVertex;uniform mat3 uMatrix;void main(void){gl_Position=vec4((uMatrix*vec3(aVertex,1)).xy,0,1);}", "precision " + {
                    precision: i
                }.precision + " float;uniform vec4 uColor;void main(void){gl_FragColor=uColor;}"), this.quadShader = me.video.shader.createShader(this.gl, "precision highp float;attribute vec2 aVertex;attribute vec4 aColor;attribute float aTexture;attribute vec2 aRegion;uniform mat3 uMatrix;varying vec4 vColor;varying float vTexture;varying vec2 vRegion;void main(void){gl_Position=vec4((uMatrix*vec3(aVertex,1)).xy,0,1);vColor=vec4(aColor.rgb*aColor.a,aColor.a);vTexture=aTexture;vRegion=aRegion;}", function(e) {
                    for (var t = "precision " + e.precision + " float;uniform sampler2D uSampler[" + e.maxTextures + "];varying vec4 vColor;varying float vTexture;varying vec2 vRegion;void main(void){int texture=int(vTexture);if(texture==0){gl_FragColor=texture2D(uSampler[0],vRegion)*vColor;}", i = 1; i < e.maxTextures - 1; i++) t += "else if(texture==" + i + "){gl_FragColor=texture2D(uSampler[" + i + "],vRegion)*vColor;}";
                    return t += "else{gl_FragColor=texture2D(uSampler[" + (e.maxTextures - 1) + "],vRegion)*vColor;}}"
                }({
                    precision: i,
                    maxTextures: this.maxTextures
                })), this.shader = this.quadShader.handle, this.sb = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.sb), t.bufferData(t.ARRAY_BUFFER, 16e3 * s * 4, t.STREAM_DRAW), this.sbSize = 256, this.sbIndex = 0, this.stream = new Float32Array(9 * this.sbSize * 4), this.ib = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.ib), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.createIB(), t.STATIC_DRAW), t.vertexAttribPointer(this.quadShader.attributes.aVertex, 2, t.FLOAT, !1, s, o), t.vertexAttribPointer(this.quadShader.attributes.aColor, 4, t.FLOAT, !1, s, a), t.vertexAttribPointer(this.quadShader.attributes.aTexture, 1, t.FLOAT, !1, s, h), t.vertexAttribPointer(this.quadShader.attributes.aRegion, 2, t.FLOAT, !1, s, l), this.reset(), this.setProjection(t.canvas.width, t.canvas.height), t.clearColor(0, 0, 0, 1)
            },
            setProjection: function(e, t) {
                this.flush(), this.gl.viewport(0, 0, e, t), this.uMatrix.setTransform(2 / e, 0, 0, 0, -2 / t, 0, -1, 1, 1), this.quadShader.uniforms.uMatrix = this.uMatrix.val
            },
            uploadTexture: function(e, t, i, n, r) {
                var s = this.renderer.cache.getUnit(e);
                return this.units[s] && !r || (this.units[s] = !0, me.video.shader.createTexture(this.gl, s, e.source, this.renderer.settings.antiAlias ? this.gl.LINEAR : this.gl.NEAREST, e.repeat, t, i, n, e.premultipliedAlpha)), s
            },
            reset: function() {
                this.sbIndex = 0;
                for (var e = [], t = this.length = 0; t < this.maxTextures; t++) this.units[t] = !1, e[t] = t;
                this.quadShader.uniforms.uSampler = e
            },
            createIB: function() {
                for (var e = [0, 1, 2, 2, 1, 3], t = new Array(96e3), i = 0; i < t.length; i++) t[i] = e[i % 6] + 4 * ~~(i / 6);
                return new Uint16Array(t)
            },
            resizeSB: function() {
                this.sbSize <<= 1;
                var e = new Float32Array(9 * this.sbSize * 4);
                e.set(this.stream), this.stream = e
            },
            useShader: function(e) {
                this.shader !== e && (this.flush(), this.shader = e, this.gl.useProgram(this.shader))
            },
            addQuad: function(e, t, i, n, r, s) {
                var o = this.color.toGL();
                if (!(o[3] < 1 / 255)) {
                    this.useShader(this.quadShader.handle), 16e3 <= this.length && this.flush(), this.length >= this.sbSize && this.resizeSB();
                    var a = this.matrix,
                        h = this.v[0].set(i, n),
                        l = this.v[1].set(i + r, n),
                        d = this.v[2].set(i, n + s),
                        c = this.v[3].set(i + r, n + s);
                    a.isIdentity() || (a.multiplyVector(h), a.multiplyVector(l), a.multiplyVector(d), a.multiplyVector(c));
                    var u = this.sbIndex,
                        f = u + 9,
                        m = f + 9,
                        p = m + 9;
                    this.stream[u + 0 + 0] = h.x, this.stream[u + 0 + 1] = h.y, this.stream[f + 0 + 0] = l.x, this.stream[f + 0 + 1] = l.y, this.stream[m + 0 + 0] = d.x, this.stream[m + 0 + 1] = d.y, this.stream[p + 0 + 0] = c.x, this.stream[p + 0 + 1] = c.y, this.stream.set(o, u + 2), this.stream.set(o, f + 2), this.stream.set(o, m + 2), this.stream.set(o, p + 2);
                    var g = this.uploadTexture(e);
                    this.stream[u + 6] = this.stream[f + 6] = this.stream[m + 6] = this.stream[p + 6] = g;
                    var y = e.getRegion(t);
                    if (void 0 === y) {
                        !0 === this.renderer.settings.verbose && console.warn("Adding texture region", t, "for texture", e);
                        var v = t.split(","),
                            x = +v[0],
                            w = +v[1],
                            b = +v[2],
                            _ = +v[3];
                        y = e._insertRegion(t, x, w, b, _)
                    }
                    var T = y.stMap;
                    this.stream[u + 7 + 0] = T[0], this.stream[u + 7 + 1] = T[1], this.stream[f + 7 + 0] = T[2], this.stream[f + 7 + 1] = T[1], this.stream[m + 7 + 0] = T[0], this.stream[m + 7 + 1] = T[3], this.stream[p + 7 + 0] = T[2], this.stream[p + 7 + 1] = T[3], this.sbIndex += 36, this.length++
                }
            },
            flush: function() {
                if (this.length) {
                    var e = this.gl,
                        t = 9 * this.length * 4;
                    e.bufferData(e.ARRAY_BUFFER, this.stream.subarray(0, t), e.STREAM_DRAW), e.drawElements(e.TRIANGLES, 6 * this.length, e.UNSIGNED_SHORT, 0), this.sbIndex = 0, this.length = 0
                }
            },
            drawLine: function(e, t) {
                this.useShader(this.lineShader.handle);
                for (var i = 0, n = 0; n < e.length; n++) this.matrix.isIdentity() || this.matrix.multiplyVector(e[n]), this.stream[i++] = e[n].x, this.stream[i++] = e[n].y;
                var r = this.gl;
                this.lineShader.uniforms.uMatrix = this.uMatrix.val, this.lineShader.uniforms.uColor = this.color.glArray, r.bufferData(r.ARRAY_BUFFER, this.stream.subarray(0, 2 * e.length), r.STREAM_DRAW), r.vertexAttribPointer(this.lineShader.attributes.aVertex, 2, r.FLOAT, !1, 0, 0), r.drawArrays(t ? r.LINE_STRIP : r.LINE_LOOP, 0, e.length), r.vertexAttribPointer(this.quadShader.attributes.aVertex, 2, r.FLOAT, !1, s, o), r.vertexAttribPointer(this.quadShader.attributes.aColor, 4, r.FLOAT, !1, s, a), r.vertexAttribPointer(this.quadShader.attributes.aTexture, 1, r.FLOAT, !1, s, h), r.vertexAttribPointer(this.quadShader.attributes.aRegion, 2, r.FLOAT, !1, s, l)
            },
            clear: function() {
                this.flush(), this.gl.clear(this.gl.COLOR_BUFFER_BIT)
            }
        })
    }(), me.input = {
        _preventDefaultFn: function(e) {
            return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        },
        preventDefault: !0
    },
    function(s) {
        s._KeyBinding = {};
        var o = {},
            r = {},
            a = {},
            h = {},
            l = {},
            e = !1;
        s._enableKeyboardEvent = function() {
            e || (window.addEventListener("keydown", s._keydown, !1), window.addEventListener("keyup", s._keyup, !1), e = !0)
        }, s._keydown = function(e, t, i) {
            t = t || e.keyCode || e.button;
            var n = s._KeyBinding[t];
            if (me.event.publish(me.event.KEYDOWN, [n, t, !n || !a[n]]), n) {
                if (!a[n]) {
                    var r = void 0 !== i ? i : t;
                    h[n][r] || (o[n]++, h[n][r] = !0)
                }
                return !l[t] || s._preventDefaultFn(e)
            }
            return !0
        }, s._keyup = function(e, t, i) {
            t = t || e.keyCode || e.button;
            var n = s._KeyBinding[t];
            if (me.event.publish(me.event.KEYUP, [n, t]), n) {
                var r = void 0 !== i ? i : t;
                return h[n][r] = void 0, 0 < o[n] && o[n]--, a[n] = !1, !l[t] || s._preventDefaultFn(e)
            }
            return !0
        }, s.KEY = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 42,
            INSERT: 45,
            DELETE: 46,
            NUM0: 48,
            NUM1: 49,
            NUM2: 50,
            NUM3: 51,
            NUM4: 52,
            NUM5: 53,
            NUM6: 54,
            NUM7: 55,
            NUM8: 56,
            NUM9: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            WINDOW_KEY: 91,
            NUMPAD0: 96,
            NUMPAD1: 97,
            NUMPAD2: 98,
            NUMPAD3: 99,
            NUMPAD4: 100,
            NUMPAD5: 101,
            NUMPAD6: 102,
            NUMPAD7: 103,
            NUMPAD8: 104,
            NUMPAD9: 105,
            MULTIPLY: 106,
            ADD: 107,
            SUBSTRACT: 109,
            DECIMAL: 110,
            DIVIDE: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            TILDE: 126,
            NUM_LOCK: 144,
            SCROLL_LOCK: 145,
            SEMICOLON: 186,
            PLUS: 187,
            COMMA: 188,
            MINUS: 189,
            PERIOD: 190,
            FORWAND_SLASH: 191,
            GRAVE_ACCENT: 192,
            OPEN_BRACKET: 219,
            BACK_SLASH: 220,
            CLOSE_BRACKET: 221,
            SINGLE_QUOTE: 222
        }, s.isKeyPressed = function(e) {
            return !(!o[e] || a[e]) && (r[e] && (a[e] = !0), !0)
        }, s.keyStatus = function(e) {
            return 0 < o[e]
        }, s.triggerKeyEvent = function(e, t) {
            t ? s._keydown({}, e) : s._keyup({}, e)
        }, s.bindKey = function(e, t, i, n) {
            s._enableKeyboardEvent(), "boolean" != typeof n && (n = s.preventDefault), s._KeyBinding[e] = t, l[e] = n, o[t] = 0, r[t] = i || !1, a[t] = !1, h[t] = {}
        }, s.unlockKey = function(e) {
            a[e] = !1
        }, s.unbindKey = function(e) {
            var t = s._KeyBinding[e];
            o[t] = 0, r[t] = !1, h[t] = {}, s._KeyBinding[e] = null, l[e] = null
        }
    }(me.input),
    function() {
        var o = new me.Vector2d;
        me.Pointer = me.Rect.extend({
            init: function(e, t, i, n) {
                this.event = void 0, this.type = void 0, this.button = 0, this.isPrimary = !1, this.clientX = void 0, this.clientY = void 0, this.gameX = void 0, this.gameY = void 0, this.gameScreenX = void 0, this.gameScreenY = void 0, this.gameWorldX = void 0, this.gameWorldY = void 0, this.gameLocalX = void 0, this.gameLocalY = void 0, this.pointerId = void 0, me.Rect.prototype.init.apply(this, [e || 0, t || 0, i || 1, n || 1])
            },
            setEvent: function(e, t, i, n) {
                var r = 1,
                    s = 1;
                this.event = e, this.clientX = t || 0, this.clientY = i || 0, me.input.globalToLocal(t, i, this.pos), this.isNormalized = !me.device.PointerEvent || me.device.PointerEvent && !(e instanceof window.PointerEvent), "wheel" === e.type && (this.deltaMode = 1, this.deltaX = e.deltaX, this.deltaY = -.025 * e.wheelDelta, e.wheelDeltaX && (this.deltaX = -.025 * e.wheelDeltaX)), this.pointerId = void 0 !== n ? n : 1, this.isPrimary = void 0 === e.isPrimary || e.isPrimary, this.button = e.button || 0, this.type = e.type, this.gameScreenX = this.pos.x, this.gameScreenY = this.pos.y, me.game.viewport.localToWorld(this.gameScreenX, this.gameScreenY, o), this.gameWorldX = o.x, this.gameWorldY = o.y, !1 === this.isNormalized ? (r = e.width, s = e.height) : "number" == typeof e.radiusX && (r = 2 * e.radiusX, s = 2 * e.radiusY), this.resize(r, s)
            }
        })
    }(),
    function(p) {
        var g = [],
            y = new Map,
            v = new me.Rect(0, 0, 1, 1),
            n = !1,
            x = 0,
            w = [],
            e = ["wheel"],
            b = ["pointermove", "mousemove", "touchmove"],
            r = ["pointerdown", "mousedown", "touchstart"],
            _ = ["pointerup", "mouseup", "touchend"],
            T = ["pointercancel", "mousecancel", "touchcancel"],
            E = ["pointerenter", "mouseenter", "touchenter"],
            t = ["pointerover", "mouseover", "touchover"],
            A = ["pointerleave", "mouseleave", "touchleave"],
            o = [e[0], b[0], r[0], _[0], T[0], E[0], t[0], A[0]],
            s = [e[0], b[1], r[1], _[1], T[1], E[1], t[1], A[1]],
            a = [b[2], r[2], _[2], T[2], E[2], t[2], A[2]],
            h = {
                wheel: e,
                pointermove: b,
                pointerdown: r,
                pointerup: _,
                pointercancel: T,
                pointerenter: E,
                pointerover: t,
                pointerleave: A
            },
            l = [];

        function d() {
            if (!n) {
                for (var e = 0; e < me.device.maxTouchPoints; e++) g.push(new me.Pointer);
                var t;
                w = me.device.PointerEvent ? o : s, me.device.touch && !me.device.PointerEvent && (w = w.concat(a)),
                    function(e, t) {
                        for (var i = 0; i < e.length; i++) - 1 === b.indexOf(e[i]) && me.video.renderer.getScreenCanvas().addEventListener(e[i], t, !1)
                    }(w, M), me.device.wheel || window.addEventListener("mousewheel", m, !1), void 0 === p.throttlingInterval && (p.throttlingInterval = ~~(1e3 / me.sys.fps)), me.sys.autoFocus && "function" == typeof window.focus && (window.focus(), me.video.renderer.getScreenCanvas().addEventListener(w[2], function() {
                        return window.focus(), !0
                    }));
                var i = c(w, b);
                if (p.throttlingInterval < 17)
                    for (t = 0; t < i.length; t++) - 1 !== w.indexOf(i[t]) && me.video.renderer.getScreenCanvas().addEventListener(i[t], P, !1);
                else
                    for (t = 0; t < i.length; t++) - 1 !== w.indexOf(i[t]) && me.video.renderer.getScreenCanvas().addEventListener(i[t], me.utils.function.throttle(P, p.throttlingInterval, !1), !1);
                me.input.setTouchAction(me.video.renderer.getScreenCanvas()), n = !0
            }
        }

        function C(e, t) {
            for (var i = 0; i < t.length; i++) {
                if (-1 !== e.indexOf(t[i])) return t[i]
            }
        }

        function c(e, t) {
            for (var i = [], n = 0; n < t.length; n++) {
                -1 !== e.indexOf(t[n]) && i.push(t[n])
            }
            return i
        }

        function S(e, t, i, n) {
            var r;
            if (e.callbacks[t]) {
                e.pointerId = n;
                for (var s = e.callbacks[t].length - 1; 0 <= s && (r = e.callbacks[t][s]); s--)
                    if (!1 === r(i)) return !0
            }
            return !1
        }

        function u(e) {
            for (var t = !1; 0 < e.length;) {
                var i = e.pop();
                if (g.push(i), void 0 !== i.event.timeStamp) {
                    if (i.event.timeStamp < x) continue;
                    x = i.event.timeStamp
                }
                v.setShape(i.gameWorldX, i.gameWorldY, i.width, i.height);
                for (var n, r = me.collision.quadTree.retrieve(v, me.Container.prototype._sortReverseZ), s = (r = r.concat([me.game.viewport])).length; n = r[--s];) {
                    if (y.has(n) && !0 !== n.isKinematic) {
                        var o = y.get(n),
                            a = o.region,
                            h = a.ancestor,
                            l = a.getBounds(),
                            d = !1;
                        if (!0 === a.floating ? (i.gameX = i.gameLocalX = i.gameScreenX, i.gameY = i.gameLocalY = i.gameScreenY) : (i.gameX = i.gameLocalX = i.gameWorldX, i.gameY = i.gameLocalY = i.gameWorldY), void 0 !== h) {
                            var c = h.getBounds().pos;
                            i.gameLocalX = i.gameX - c.x, i.gameLocalY = i.gameY - c.y
                        }
                        if (a instanceof me.Sprite) {
                            var u = i.gameX,
                                f = i.gameY;
                            if (!a.currentTransform.isIdentity()) {
                                var m = a.currentTransform.multiplyVectorInverse(me.pool.pull("me.Vector2d", u, f));
                                u = m.x, f = m.y, me.pool.push(m)
                            }
                            d = l.containsPoint(u, f)
                        } else d = l.containsPoint(i.gameX, i.gameY) && (l === a || a.containsPoint(i.gameLocalX, i.gameLocalY));
                        switch (i.type) {
                            case b[0]:
                            case b[1]:
                            case b[2]:
                            case b[3]:
                                if (o.pointerId !== i.pointerId || d) {
                                    if (null === o.pointerId && d && S(o, C(w, E), i, i.pointerId)) {
                                        t = !0;
                                        break
                                    }
                                } else if (S(o, C(w, A), i, null)) {
                                    t = !0;
                                    break
                                }
                                if (d && S(o, i.type, i, i.pointerId)) {
                                    t = !0;
                                    break
                                }
                                break;
                            case _[0]:
                            case _[1]:
                            case _[2]:
                            case _[3]:
                                if (o.pointerId === i.pointerId && d && S(o, i.type, i, null)) {
                                    t = !0;
                                    break
                                }
                                break;
                            case T[0]:
                            case T[1]:
                            case T[2]:
                            case T[3]:
                                if (o.pointerId === i.pointerId && S(o, i.type, i, null)) {
                                    t = !0;
                                    break
                                }
                                break;
                            default:
                                if (d && S(o, i.type, i, i.pointerId)) {
                                    t = !0, "wheel" === i.type && p._preventDefaultFn(i.event);
                                    break
                                }
                        }
                    }
                    if (!0 === t) break
                }
            }
            return t
        }

        function f(e) {
            var t;
            if (me.device.TouchEvent && e.changedTouches)
                for (var i = 0, n = e.changedTouches.length; i < n; i++) {
                    var r = e.changedTouches[i];
                    (t = g.pop()).setEvent(e, r.clientX, r.clientY, r.identifier), l.push(t)
                } else(t = g.pop()).setEvent(e, e.clientX, e.clientY, e.pointerId), l.push(t);
            return !1 === e.isPrimary || (l[0].isPrimary = !0, Object.assign(p.pointer, l[0])), l
        }

        function m(e) {
            return e.target !== me.video.renderer.getScreenCanvas() || (e.type = "wheel", u(f(e)))
        }

        function P(e) {
            return u(f(e)), !0
        }

        function M(e) {
            var t = !0;
            f(e);
            var i = l[0].button;
            (u(l) || p.preventDefault) && (t = p._preventDefaultFn(e));
            var n = p.pointer.bind[i];
            return n ? -1 !== r.indexOf(e.type) ? p._keydown(e, n, i + 1) : p._keyup(e, n, i + 1) : t
        }
        p.pointer = new me.Pointer(0, 0, 1, 1), p.pointer.bind = [0, 0, 0], p.pointer.LEFT = 0, p.pointer.MIDDLE = 1, p.pointer.RIGHT = 2, p.throttlingInterval = void 0, p.globalToLocal = function(e, t, i) {
            i = i || new me.Vector2d;
            var n = me.video.getPos(),
                r = me.device.devicePixelRatio;
            e -= n.left, t -= n.top;
            var s = me.sys.scale;
            return 1 === s.x && 1 === s.y || (e /= s.x, t /= s.y), i.set(e * r, t * r)
        }, p.setTouchAction = function(e, t) {
            e.style["touch-action"] = t || "none"
        }, p.bindPointer = function() {
            var e = arguments.length < 2 ? p.pointer.LEFT : arguments[0],
                t = arguments.length < 2 ? arguments[0] : arguments[1];
            if (d(), !p._KeyBinding[t]) throw new me.Error("no action defined for keycode " + t);
            p.pointer.bind[e] = t
        }, p.unbindPointer = function(e) {
            p.pointer.bind[void 0 === e ? p.pointer.LEFT : e] = null
        }, p.registerPointerEvent = function(e, t, i) {
            if (d(), -1 === o.indexOf(e)) throw new me.Error("invalid event type : " + e);
            var n = c(w, h[e]);
            y.has(t) || y.set(t, {
                region: t,
                callbacks: {},
                pointerId: null
            });
            for (var r = y.get(t), s = 0; s < n.length; s++) e = n[s], r.callbacks[e] ? r.callbacks[e].push(i) : r.callbacks[e] = [i]
        }, p.releasePointerEvent = function(e, t, i) {
            if (-1 === o.indexOf(e)) throw new me.Error("invalid event type : " + e);
            var n = c(w, h[e]),
                r = y.get(t);
            if (void 0 !== r) {
                for (var s = 0; s < n.length; s++)
                    if (e = n[s], r.callbacks[e]) {
                        if (void 0 !== i) me.utils.array.remove(r.callbacks[e], i);
                        else
                            for (; 0 < r.callbacks[e].length;) r.callbacks[e].pop();
                        0 === r.callbacks[e].length && delete r.callbacks[e]
                    }
                0 === Object.keys(r.callbacks).length && y.delete(t)
            }
        }, p._translatePointerEvents = function() {
            p.registerPointerEvent("pointermove", me.game.viewport, function(e) {
                me.event.publish(me.event.POINTERMOVE, [e])
            })
        }
    }(me.input),
    function(c) {
        var u = .1;

        function r(e) {
            return e
        }

        function e(e, t, i) {
            return e = 0 < e ? i === c.GAMEPAD.BUTTONS.L2 ? Math.max(0, e - 2e4) / 111070 : (e - 1) / 131070 : (65536 + e) / 131070 + .5
        }
        var s = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i,
            o = /^0+/;

        function t(e, t) {
            var i = e.replace(s, function(e, t, i) {
                    return "000".substr(t.length - 1) + t + "-" + "000".substr(i.length - 1) + i + "-"
                }),
                n = e.replace(s, function(e, t, i) {
                    return t.replace(o, "") + "-" + i.replace(o, "") + "-"
                });
            t.analog = t.analog || t.buttons.map(function() {
                return -1
            }), t.normalize_fn = t.normalize_fn || r, m.set(i, t), m.set(n, t)
        }
        var f = {},
            m = new Map;
        [
            ["45e-28e-Xbox 360 Wired Controller", {
                axes: [0, 1, 3, 4],
                buttons: [11, 12, 13, 14, 8, 9, -1, -1, 5, 4, 6, 7, 0, 1, 2, 3, 10],
                analog: [-1, -1, -1, -1, -1, -1, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                normalize_fn: function(e, t, i) {
                    return i === c.GAMEPAD.BUTTONS.L2 || i === c.GAMEPAD.BUTTONS.R2 ? (e + 1) / 2 : e
                }
            }],
            ["54c-268-PLAYSTATION(R)3 Controller", {
                axes: [0, 1, 2, 3],
                buttons: [14, 13, 15, 12, 10, 11, 8, 9, 0, 3, 1, 2, 4, 6, 7, 5, 16]
            }],
            ["54c-5c4-Wireless Controller", {
                axes: [0, 1, 2, 3],
                buttons: [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 12, 13]
            }],
            ["2836-1-OUYA Game Controller", {
                axes: [0, 3, 7, 9],
                buttons: [3, 6, 4, 5, 7, 8, 15, 16, -1, -1, 9, 10, 11, 12, 13, 14, -1],
                analog: [-1, -1, -1, -1, -1, -1, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                normalize_fn: e
            }],
            ["OUYA Game Controller (Vendor: 2836 Product: 0001)", {
                axes: [0, 1, 3, 4],
                buttons: [0, 3, 1, 2, 4, 5, 12, 13, -1, -1, 6, 7, 8, 9, 10, 11, -1],
                analog: [-1, -1, -1, -1, -1, -1, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                normalize_fn: e
            }]
        ].forEach(function(e) {
            t(e[0], e[1])
        }), window.addEventListener("gamepadconnected", function(e) {
            me.event.publish(me.event.GAMEPAD_CONNECTED, [e.gamepad])
        }, !1), window.addEventListener("gamepaddisconnected", function(e) {
            me.event.publish(me.event.GAMEPAD_DISCONNECTED, [e.gamepad])
        }, !1), c._updateGamepads = navigator.getGamepads ? function() {
            var e = navigator.getGamepads(),
                d = {};
            Object.keys(f).forEach(function(o) {
                var a = e[o];
                if (a) {
                    var h = null;
                    "standard" !== a.mapping && (h = m.get(a.id));
                    var l = f[o];
                    Object.keys(l.buttons).forEach(function(e) {
                        var t = l.buttons[e],
                            i = e,
                            n = -1;
                        if (!(h && (i = h.buttons[e], n = h.analog[e], i < 0 && n < 0))) {
                            var r = a.buttons[i] || {};
                            if (h && 0 <= n) {
                                var s = h.normalize_fn(a.axes[n], -1, +e);
                                r = {
                                    value: s,
                                    pressed: r.pressed || Math.abs(s) >= u
                                }
                            }
                            me.event.publish(me.event.GAMEPAD_UPDATE, [o, "buttons", +e, r]), !t.pressed && r.pressed ? c._keydown(d, t.keyCode, i + 256) : t.pressed && !r.pressed && c._keyup(d, t.keyCode, i + 256), t.value = r.value, t.pressed = r.pressed
                        }
                    }), Object.keys(l.axes).forEach(function(e) {
                        var t = l.axes[e],
                            i = e;
                        if (!(h && (i = h.axes[e]) < 0)) {
                            var n = a.axes[i];
                            if (void 0 !== n) {
                                h && (n = h.normalize_fn(n, +e, -1));
                                var r = Math.sign(n) || 1;
                                if (0 !== t[r].keyCode) {
                                    var s = Math.abs(n) >= u + Math.abs(t[r].threshold);
                                    me.event.publish(me.event.GAMEPAD_UPDATE, [o, "axes", +e, n]), !t[r].pressed && s ? (t[-r].pressed && (c._keyup(d, t[-r].keyCode, i + 256), t[-r].value = 0, t[-r].pressed = !1), c._keydown(d, t[r].keyCode, i + 256)) : !t[r].pressed && !t[-r].pressed || s || (r = t[r].pressed ? r : -r, c._keyup(d, t[r].keyCode, i + 256)), t[r].value = n, t[r].pressed = s
                                }
                            }
                        }
                    })
                }
            })
        } : function() {}, c.GAMEPAD = {
            AXES: {
                LX: 0,
                LY: 1,
                RX: 2,
                RY: 3,
                EXTRA_1: 4,
                EXTRA_2: 5,
                EXTRA_3: 6,
                EXTRA_4: 7
            },
            BUTTONS: {
                FACE_1: 0,
                FACE_2: 1,
                FACE_3: 2,
                FACE_4: 3,
                L1: 4,
                R1: 5,
                L2: 6,
                R2: 7,
                SELECT: 8,
                BACK: 8,
                START: 9,
                FORWARD: 9,
                L3: 10,
                R3: 11,
                UP: 12,
                DOWN: 13,
                LEFT: 14,
                RIGHT: 15,
                HOME: 16,
                EXTRA_1: 17,
                EXTRA_2: 18,
                EXTRA_3: 19,
                EXTRA_4: 20
            }
        }, c.bindGamepad = function(e, t, i) {
            if (!c._KeyBinding[i]) throw new me.Error("no action defined for keycode " + i);
            f[e] || (f[e] = {
                axes: {},
                buttons: {}
            });
            var n = {
                    keyCode: i,
                    value: 0,
                    pressed: !1,
                    threshold: t.threshold
                },
                r = f[e][t.type];
            if ("buttons" === t.type) r[t.code] = n;
            else if ("axes" === t.type) {
                var s = Math.sign(t.threshold) || 1;
                r[t.code] || (r[t.code] = {});
                var o = r[t.code];
                o[s] = n, o[-s] || (o[-s] = {
                    keyCode: 0,
                    value: 0,
                    pressed: !1,
                    threshold: -s
                })
            }
        }, c.unbindGamepad = function(e, t) {
            if (!f[e]) throw new me.Error("no bindings for gamepad " + e);
            f[e].buttons[t] = {}
        }, c.setGamepadDeadzone = function(e) {
            u = e
        }, c.setGamepadMapping = t
    }(me.input),
    function() {
        var e, i, n;
        me.utils = (i = "", n = 0, (e = {}).getPixels = function(e) {
            if (e instanceof HTMLImageElement) {
                var t = me.CanvasRenderer.getContext2d(me.video.createCanvas(e.width, e.height));
                return t.drawImage(e, 0, 0), t.getImageData(0, 0, e.width, e.height)
            }
            return e.getContext("2d").getImageData(0, 0, e.width, e.height)
        }, e.resetGUID = function(e, t) {
            i = me.utils.string.toHex(e.toString().toUpperCase()), n = t || 0
        }, e.createGUID = function(e) {
            return n += e || 1, i + "-" + (e || n)
        }, e)
    }(),
    function(e) {
        var t, i, n, r = (i = /^.*(\\|\/|\:)/, n = /\.[^\.]*$/, (t = {}).getBasename = function(e) {
            return e.replace(i, "").replace(n, "")
        }, t.getExtension = function(e) {
            return e.substring(e.lastIndexOf(".") + 1, e.length)
        }, t);
        e.file = r
    }(me.utils),
    function(e) {
        var t = {
            defer: function(e, t) {
                var i = Array.prototype.slice.call(arguments, 1);
                return setTimeout(e.bind.apply(e, i), .01)
            },
            throttle: function(n, r, s) {
                var o, a = window.performance.now();
                return "boolean" != typeof s && (s = !1),
                    function() {
                        var e = window.performance.now(),
                            t = e - a,
                            i = arguments;
                        if (!(t < r)) return a = e, n.apply(null, i);
                        !1 === s && (clearTimeout(o), o = setTimeout(function() {
                            return a = e, n.apply(null, i)
                        }, t))
                    }
            }
        };
        e.function = t
    }(me.utils),
    function(e) {
        var t = {
            remove: function(e, t) {
                var i = Array.prototype.indexOf.call(e, t);
                return -1 !== i && Array.prototype.splice.call(e, i, 1), e
            },
            random: function(e) {
                return e[me.Math.random(0, e.length)]
            },
            weightedRandom: function(e) {
                return e[me.Math.weightedRandom(0, e.length)]
            }
        };
        e.array = t
    }(me.utils),
    function(e) {
        var t = {
            trimLeft: function(e) {
                return e.replace(/^\s+/, "")
            },
            trimRight: function(e) {
                return e.replace(/\s+$/, "")
            },
            isNumeric: function(e) {
                return !isNaN(e) && "" !== e.trim()
            },
            isBoolean: function(e) {
                var t = e.trim();
                return "true" === t || "false" === t
            },
            toHex: function(e) {
                for (var t = "", i = 0; i < e.length;) t += e.charCodeAt(i++).toString(16);
                return t
            }
        };
        e.string = t
    }(me.utils),
    function() {
        var e = function(e) {
                return "0123456789ABCDEF".charAt(e - e % 16 >> 4) + "0123456789ABCDEF".charAt(e % 16)
            },
            i = /^rgba?\((\d+), ?(\d+), ?(\d+)(, ?([\d\.]+))?\)$/,
            n = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
            r = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
            s = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
            o = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
            t = new Map;
        [
            ["black", [0, 0, 0]],
            ["silver", [192, 192, 129]],
            ["gray", [128, 128, 128]],
            ["white", [255, 255, 255]],
            ["maroon", [128, 0, 0]],
            ["red", [255, 0, 0]],
            ["purple", [128, 0, 128]],
            ["fuchsia", [255, 0, 255]],
            ["green", [0, 128, 0]],
            ["lime", [0, 255, 0]],
            ["olive", [128, 128, 0]],
            ["yellow", [255, 255, 0]],
            ["navy", [0, 0, 128]],
            ["blue", [0, 0, 255]],
            ["teal", [0, 128, 128]],
            ["aqua", [0, 255, 255]],
            ["orange", [255, 165, 0]],
            ["aliceblue", [240, 248, 245]],
            ["antiquewhite", [250, 235, 215]],
            ["aquamarine", [127, 255, 212]],
            ["azure", [240, 255, 255]],
            ["beige", [245, 245, 220]],
            ["bisque", [255, 228, 196]],
            ["blanchedalmond", [255, 235, 205]],
            ["blueviolet", [138, 43, 226]],
            ["brown", [165, 42, 42]],
            ["burlywood", [222, 184, 35]],
            ["cadetblue", [95, 158, 160]],
            ["chartreuse", [127, 255, 0]],
            ["chocolate", [210, 105, 30]],
            ["coral", [255, 127, 80]],
            ["cornflowerblue", [100, 149, 237]],
            ["cornsilk", [255, 248, 220]],
            ["crimson", [220, 20, 60]],
            ["darkblue", [0, 0, 139]],
            ["darkcyan", [0, 139, 139]],
            ["darkgoldenrod", [184, 134, 11]],
            ["darkgray[*]", [169, 169, 169]],
            ["darkgreen", [0, 100, 0]],
            ["darkgrey[*]", [169, 169, 169]],
            ["darkkhaki", [189, 183, 107]],
            ["darkmagenta", [139, 0, 139]],
            ["darkolivegreen", [85, 107, 47]],
            ["darkorange", [255, 140, 0]],
            ["darkorchid", [153, 50, 204]],
            ["darkred", [139, 0, 0]],
            ["darksalmon", [233, 150, 122]],
            ["darkseagreen", [143, 188, 143]],
            ["darkslateblue", [72, 61, 139]],
            ["darkslategray", [47, 79, 79]],
            ["darkslategrey", [47, 79, 79]],
            ["darkturquoise", [0, 206, 209]],
            ["darkviolet", [148, 0, 211]],
            ["deeppink", [255, 20, 147]],
            ["deepskyblue", [0, 191, 255]],
            ["dimgray", [105, 105, 105]],
            ["dimgrey", [105, 105, 105]],
            ["dodgerblue", [30, 144, 255]],
            ["firebrick", [178, 34, 34]],
            ["floralwhite", [255, 250, 240]],
            ["forestgreen", [34, 139, 34]],
            ["gainsboro", [220, 220, 220]],
            ["ghostwhite", [248, 248, 255]],
            ["gold", [255, 215, 0]],
            ["goldenrod", [218, 165, 32]],
            ["greenyellow", [173, 255, 47]],
            ["grey", [128, 128, 128]],
            ["honeydew", [240, 255, 240]],
            ["hotpink", [255, 105, 180]],
            ["indianred", [205, 92, 92]],
            ["indigo", [75, 0, 130]],
            ["ivory", [255, 255, 240]],
            ["khaki", [240, 230, 140]],
            ["lavender", [230, 230, 250]],
            ["lavenderblush", [255, 240, 245]],
            ["lawngreen", [124, 252, 0]],
            ["lemonchiffon", [255, 250, 205]],
            ["lightblue", [173, 216, 230]],
            ["lightcoral", [240, 128, 128]],
            ["lightcyan", [224, 255, 255]],
            ["lightgoldenrodyellow", [250, 250, 210]],
            ["lightgray", [211, 211, 211]],
            ["lightgreen", [144, 238, 144]],
            ["lightgrey", [211, 211, 211]],
            ["lightpink", [255, 182, 193]],
            ["lightsalmon", [255, 160, 122]],
            ["lightseagreen", [32, 178, 170]],
            ["lightskyblue", [135, 206, 250]],
            ["lightslategray", [119, 136, 153]],
            ["lightslategrey", [119, 136, 153]],
            ["lightsteelblue", [176, 196, 222]],
            ["lightyellow", [255, 255, 224]],
            ["limegreen", [50, 205, 50]],
            ["linen", [250, 240, 230]],
            ["mediumaquamarine", [102, 205, 170]],
            ["mediumblue", [0, 0, 205]],
            ["mediumorchid", [186, 85, 211]],
            ["mediumpurple", [147, 112, 219]],
            ["mediumseagreen", [60, 179, 113]],
            ["mediumslateblue", [123, 104, 238]],
            ["mediumspringgreen", [0, 250, 154]],
            ["mediumturquoise", [72, 209, 204]],
            ["mediumvioletred", [199, 21, 133]],
            ["midnightblue", [25, 25, 112]],
            ["mintcream", [245, 255, 250]],
            ["mistyrose", [255, 228, 225]],
            ["moccasin", [255, 228, 181]],
            ["navajowhite", [255, 222, 173]],
            ["oldlace", [253, 245, 230]],
            ["olivedrab", [107, 142, 35]],
            ["orangered", [255, 69, 0]],
            ["orchid", [218, 112, 214]],
            ["palegoldenrod", [238, 232, 170]],
            ["palegreen", [152, 251, 152]],
            ["paleturquoise", [175, 238, 238]],
            ["palevioletred", [219, 112, 147]],
            ["papayawhip", [255, 239, 213]],
            ["peachpuff", [255, 218, 185]],
            ["peru", [205, 133, 63]],
            ["pink", [255, 192, 203]],
            ["plum", [221, 160, 221]],
            ["powderblue", [176, 224, 230]],
            ["rosybrown", [188, 143, 143]],
            ["royalblue", [65, 105, 225]],
            ["saddlebrown", [139, 69, 19]],
            ["salmon", [250, 128, 114]],
            ["sandybrown", [244, 164, 96]],
            ["seagreen", [46, 139, 87]],
            ["seashell", [255, 245, 238]],
            ["sienna", [160, 82, 45]],
            ["skyblue", [135, 206, 235]],
            ["slateblue", [106, 90, 205]],
            ["slategray", [112, 128, 144]],
            ["slategrey", [112, 128, 144]],
            ["snow", [255, 250, 250]],
            ["springgreen", [0, 255, 127]],
            ["steelblue", [70, 130, 180]],
            ["tan", [210, 180, 140]],
            ["thistle", [216, 191, 216]],
            ["tomato", [255, 99, 71]],
            ["turquoise", [64, 224, 208]],
            ["violet", [238, 130, 238]],
            ["wheat", [245, 222, 179]],
            ["whitesmoke", [245, 245, 245]],
            ["yellowgreen", [154, 205, 50]]
        ].forEach(function(e) {
            t.set(e[0], e[1])
        }), me.Color = me.Object.extend({
            init: function(e, t, i, n) {
                return void 0 === this.glArray && (this.glArray = new Float32Array([0, 0, 0, 1])), this.setColor(e, t, i, n)
            },
            setColor: function(e, t, i, n) {
                return e instanceof me.Color ? (this.glArray.set(e.glArray), e) : (this.r = e, this.g = t, this.b = i, this.alpha = n, this)
            },
            clone: function() {
                return me.pool.pull("me.Color", this)
            },
            copy: function(e) {
                return e instanceof me.Color ? (this.glArray.set(e.glArray), this) : this.parseCSS(e)
            },
            add: function(e) {
                return this.glArray[0] = me.Math.clamp(this.glArray[0] + e.glArray[0], 0, 1), this.glArray[1] = me.Math.clamp(this.glArray[1] + e.glArray[1], 0, 1), this.glArray[2] = me.Math.clamp(this.glArray[2] + e.glArray[2], 0, 1), this.glArray[3] = (this.glArray[3] + e.glArray[3]) / 2, this
            },
            darken: function(e) {
                return e = me.Math.clamp(e, 0, 1), this.glArray[0] *= e, this.glArray[1] *= e, this.glArray[2] *= e, this
            },
            lighten: function(e) {
                return e = me.Math.clamp(e, 0, 1), this.glArray[0] = me.Math.clamp(this.glArray[0] + (1 - this.glArray[0]) * e, 0, 1), this.glArray[1] = me.Math.clamp(this.glArray[1] + (1 - this.glArray[1]) * e, 0, 1), this.glArray[2] = me.Math.clamp(this.glArray[2] + (1 - this.glArray[2]) * e, 0, 1), this
            },
            random: function() {
                return this.setColor(256 * Math.random(), 256 * Math.random(), 256 * Math.random(), this.alpha)
            },
            equals: function(e) {
                return this.glArray[0] === e.glArray[0] && this.glArray[1] === e.glArray[1] && this.glArray[2] === e.glArray[2] && this.glArray[3] === e.glArray[3]
            },
            parseCSS: function(e) {
                return t.has(e) ? this.setColor.apply(this, t.get(e)) : this.parseRGB(e)
            },
            parseRGB: function(e) {
                var t = i.exec(e);
                return t ? this.setColor(+t[1], +t[2], +t[3], +t[5]) : this.parseHex(e)
            },
            parseHex: function(e) {
                var t;
                if (t = o.exec(e)) return this.setColor(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), (me.Math.clamp(parseInt(t[4], 16), 0, 255) / 255).toFixed(1));
                if (t = s.exec(e)) return this.setColor(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16));
                if (t = r.exec(e)) return this.setColor(parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), (me.Math.clamp(parseInt(t[4] + t[4], 16), 0, 255) / 255).toFixed(1));
                if (t = n.exec(e)) return this.setColor(parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16));
                throw new me.Color.Error("invalid parameter: " + e)
            },
            toGL: function() {
                return this.glArray
            },
            toHex: function() {
                return "#" + e(this.r) + e(this.g) + e(this.b)
            },
            toHex8: function() {
                return "#" + e(this.r) + e(this.g) + e(this.b) + e(255 * this.alpha)
            },
            toRGB: function() {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
            },
            toRGBA: function() {
                return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.alpha + ")"
            }
        }), Object.defineProperty(me.Color.prototype, "r", {
            get: function() {
                return ~~(255 * this.glArray[0])
            },
            set: function(e) {
                this.glArray[0] = me.Math.clamp(~~e || 0, 0, 255) / 255
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(me.Color.prototype, "g", {
            get: function() {
                return ~~(255 * this.glArray[1])
            },
            set: function(e) {
                this.glArray[1] = me.Math.clamp(~~e || 0, 0, 255) / 255
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(me.Color.prototype, "b", {
            get: function() {
                return ~~(255 * this.glArray[2])
            },
            set: function(e) {
                this.glArray[2] = me.Math.clamp(~~e || 0, 0, 255) / 255
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(me.Color.prototype, "alpha", {
            get: function() {
                return this.glArray[3]
            },
            set: function(e) {
                this.glArray[3] = void 0 === e ? 1 : me.Math.clamp(+e, 0, 255)
            },
            enumerable: !0,
            configurable: !0
        }), me.Color.Error = me.Error.extend({
            init: function(e) {
                me.Error.prototype.init.apply(this, [e]), this.name = "me.Color.Error"
            }
        })
    }(), me.save = function() {
        var n = {};

        function r(e) {
            return "add" === e || "remove" === e
        }
        var s = {
            _init: function() {
                if (!0 === me.device.localStorage) {
                    var e = localStorage.getItem("me.save");
                    "string" == typeof e && 0 < e.length && (JSON.parse(e) || []).forEach(function(e) {
                        n[e] = JSON.parse(localStorage.getItem("me.save." + e))
                    })
                }
            },
            add: function(i) {
                Object.keys(i).forEach(function(e) {
                    var t;
                    r(e) || (t = e, Object.defineProperty(s, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return n[t]
                        },
                        set: function(e) {
                            n[t] = e, !0 === me.device.localStorage && localStorage.setItem("me.save." + t, JSON.stringify(e))
                        }
                    }), e in n || (s[e] = i[e]))
                }), !0 === me.device.localStorage && localStorage.setItem("me.save", JSON.stringify(Object.keys(n)))
            },
            remove: function(e) {
                r(e) || void 0 !== n[e] && (delete n[e], !0 === me.device.localStorage && (localStorage.removeItem("me.save." + e), localStorage.setItem("me.save", JSON.stringify(Object.keys(n)))))
            }
        };
        return s
    }(),
    function() {
        me.TMXUtils = function() {
            var api = {};

            function setTMXValue(name, type, value) {
                var match;
                if ("string" != typeof value) return value;
                switch (type) {
                    case "int":
                    case "float":
                        value = Number(value);
                        break;
                    case "bool":
                        value = "true" === value;
                        break;
                    default:
                        if (!value || me.utils.string.isBoolean(value)) value = !value || "true" === value;
                        else if (me.utils.string.isNumeric(value)) value = Number(value);
                        else if (0 === value.search(/^json:/i)) {
                            match = value.split(/^json:/i)[1];
                            try {
                                value = JSON.parse(match)
                            } catch (e) {
                                throw new me.Error("Unable to parse JSON: " + match)
                            }
                        } else if (0 === value.search(/^eval:/i)) {
                            match = value.split(/^eval:/i)[1];
                            try {
                                value = eval(match)
                            } catch (e) {
                                throw new me.Error("Unable to evaluate: " + match)
                            }
                        } else((match = value.match(/^#([\da-fA-F])([\da-fA-F]{3})$/)) || (match = value.match(/^#([\da-fA-F]{2})([\da-fA-F]{6})$/))) && (value = "#" + match[2] + match[1]);
                        0 === name.search(/^(ratio|anchorPoint)$/) && "number" == typeof value && (value = {
                            x: value,
                            y: value
                        })
                }
                return value
            }

            function parseAttributes(e, t) {
                if (t.attributes && 0 < t.attributes.length)
                    for (var i = 0; i < t.attributes.length; i++) {
                        var n = t.attributes.item(i);
                        void 0 !== n.name ? e[n.name] = n.value : e[n.nodeName] = n.nodeValue
                    }
            }
            return api.decompress = function() {
                throw new me.Error("GZIP/ZLIB compressed TMX Tile Map not supported!")
            }, api.decodeCSV = function(e) {
                for (var t = e.replace("\n", "").trim().split(","), i = [], n = 0; n < t.length; n++) i.push(+t[n]);
                return i
            }, api.decodeBase64AsArray = function(e, t) {
                var i, n, r;
                t = t || 1;
                var s = window.atob(e.replace(/[^A-Za-z0-9\+\/\=]/g, "")),
                    o = new Uint32Array(s.length / t);
                for (i = 0, r = s.length / t; i < r; i++)
                    for (o[i] = 0, n = t - 1; 0 <= n; --n) o[i] += s.charCodeAt(i * t + n) << (n << 3);
                return o
            }, api.decode = function(e, t, i) {
                switch (i = i || "none", t = t || "none") {
                    case "csv":
                        return api.decodeCSV(e);
                    case "base64":
                        var n = api.decodeBase64AsArray(e, 4);
                        return "none" === i ? n : api.decompress(n, i);
                    case "none":
                        return e;
                    case "xml":
                        throw new me.Error("XML encoding is deprecated, use base64 instead");
                    default:
                        throw new me.Error("Unknown layer encoding: " + t)
                }
            }, api.normalize = function(e, t) {
                var i = t.nodeName;
                switch (i) {
                    case "data":
                        var n = api.parse(t);
                        n.encoding = n.encoding || "xml", e.data = api.decode(n.text, n.encoding, n.compression), e.encoding = "none";
                        break;
                    case "imagelayer":
                    case "layer":
                    case "objectgroup":
                    case "group":
                        var r = api.parse(t);
                        r.type = "layer" === i ? "tilelayer" : i, r.image && (r.image = r.image.source), e.layers = e.layers || [], e.layers.push(r);
                        break;
                    case "animation":
                        e.animation = api.parse(t).frames;
                        break;
                    case "frame":
                    case "object":
                        var s = i + "s";
                        e[s] = e[s] || [], e[s].push(api.parse(t));
                        break;
                    case "tile":
                        var o = api.parse(t);
                        o.image && (o.imagewidth = o.image.width, o.imageheight = o.image.height, o.image = o.image.source), e.tiles = e.tiles || {}, e.tiles[o.id] = o;
                        break;
                    case "tileset":
                        var a = api.parse(t);
                        a.image && (a.imagewidth = a.image.width, a.imageheight = a.image.height, a.image = a.image.source), e.tilesets = e.tilesets || [], e.tilesets.push(a);
                        break;
                    case "polygon":
                    case "polyline":
                        e[i] = [];
                        for (var h, l = api.parse(t).points.split(" "), d = 0; d < l.length; d++) h = l[d].split(","), e[i].push({
                            x: +h[0],
                            y: +h[1]
                        });
                        break;
                    case "properties":
                        e.properties = api.parse(t);
                        break;
                    case "property":
                        var c = api.parse(t);
                        e[c.name] = setTMXValue(c.name, c.type || "string", c.value);
                        break;
                    default:
                        e[i] = api.parse(t)
                }
            }, api.parse = function(e) {
                var t = {},
                    i = "";
                if (1 === e.nodeType && parseAttributes(t, e), e.hasChildNodes())
                    for (var n = 0; n < e.childNodes.length; n++) {
                        var r = e.childNodes.item(n);
                        switch (r.nodeType) {
                            case 1:
                                api.normalize(t, r);
                                break;
                            case 3:
                                i += r.nodeValue.trim()
                        }
                    }
                return i && (t.text = i), t
            }, api.applyTMXProperties = function(e, t) {
                var i = t.properties,
                    n = t.propertytypes;
                if (void 0 !== i)
                    for (var r in i)
                        if (i.hasOwnProperty(r)) {
                            var s = "string",
                                o = r,
                                a = i[r];
                            void 0 !== i[r].name && (o = i[r].name), void 0 !== n ? s = n[r] : void 0 !== i[r].type && (s = i[r].type), void 0 !== i[r].value && (a = i[r].value), e[o] = setTMXValue(o, s, a)
                        }
            }, api
        }()
    }(), me.TMXGroup = me.Object.extend({
        init: function(i, e, n) {
            this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.z = n, this.objects = [];
            var t = void 0 === e.visible || e.visible;
            this.opacity = !0 === t ? me.Math.clamp(+e.opacity || 1, 0, 1) : 0, me.TMXUtils.applyTMXProperties(this, e);
            var r = this;
            e.objects && e.objects.forEach(function(e) {
                r.objects.push(new me.TMXObject(i, e, n))
            }), e.layers && e.layers.forEach(function(e) {
                var t = new me.TMXLayer(e, i.tilewidth, i.tileheight, i.orientation, i.tilesets, n++);
                t.setRenderer(i.getRenderer(t)), r.width = Math.max(r.width, t.width), r.height = Math.max(r.height, t.height), r.objects.push(t)
            })
        },
        destroy: function() {
            this.objects = null
        },
        getObjectCount: function() {
            return this.objects.length
        },
        getObjectByIndex: function(e) {
            return this.objects[e]
        }
    }), me.TMXObject = me.Object.extend({
        init: function(e, t, i) {
            this.points = void 0, this.name = t.name, this.x = +t.x, this.y = +t.y, this.z = +i, this.width = +t.width || 0, this.height = +t.height || 0, this.gid = +t.gid || null, this.type = t.type, this.rotation = me.Math.degToRad(+t.rotation || 0), this.id = +t.id || void 0, this.orientation = e.orientation, this.shapes = void 0, this.isEllipse = !1, this.isPolygon = !1, this.isPolyLine = !1, "number" == typeof this.gid ? this.setTile(e.tilesets) : void 0 !== t.ellipse ? this.isEllipse = !0 : void 0 !== t.polygon ? (this.points = t.polygon, this.isPolygon = !0) : void 0 !== t.polyline && (this.points = t.polyline, this.isPolyLine = !0), e.isEditor || e.getRenderer().adjustPosition(this), me.TMXUtils.applyTMXProperties(this, t), this.shapes || (this.shapes = this.parseTMXShapes())
        },
        setTile: function(e) {
            var t = e.getTilesetByGid(this.gid);
            !1 === t.isCollection && (this.width = this.framewidth = t.tilewidth, this.height = this.frameheight = t.tileheight), this.tile = new me.Tile(this.x, this.y, this.gid, t)
        },
        parseTMXShapes: function() {
            var e = 0,
                t = [];
            if (!0 === this.isEllipse) t.push(new me.Ellipse(this.width / 2, this.height / 2, this.width, this.height).rotate(this.rotation));
            else if (!0 === this.isPolygon) t.push(new me.Polygon(0, 0, this.points).rotate(this.rotation));
            else if (!0 === this.isPolyLine) {
                var i, n, r = this.points,
                    s = r.length - 1;
                for (e = 0; e < s; e++) i = new me.Vector2d(r[e].x, r[e].y), n = new me.Vector2d(r[e + 1].x, r[e + 1].y), 0 !== this.rotation && (i = i.rotate(this.rotation), n = n.rotate(this.rotation)), t.push(new me.Line(0, 0, [i, n]))
            } else t.push(new me.Polygon(0, 0, [new me.Vector2d, new me.Vector2d(this.width, 0), new me.Vector2d(this.width, this.height), new me.Vector2d(0, this.height)]).rotate(this.rotation));
            if ("isometric" === this.orientation)
                for (e = 0; e < t.length; e++) t[e].toIso();
            return t
        },
        getObjectPropertyByName: function(e) {
            return this[e]
        }
    }),
    function() {
        var a = 536870911;
        me.Tile = me.Rect.extend({
            init: function(e, t, i, n) {
                var r, s;
                if (n.isCollection) {
                    var o = n.getTileImage(i & a);
                    r = o.width, s = o.height
                } else r = n.tilewidth, s = n.tileheight;
                me.Rect.prototype.init.apply(this, [e * r, t * s, r, s]), this.tileset = n, this.currentTransform = null, this.col = e, this.row = t, this.tileId = i, this.flippedX = 0 != (2147483648 & this.tileId), this.flippedY = 0 != (1073741824 & this.tileId), this.flippedAD = 0 != (536870912 & this.tileId), this.flipped = this.flippedX || this.flippedY || this.flippedAD, !0 === this.flipped && this.createTransform(), this.tileId &= a
            },
            createTransform: function() {
                null === this.currentTransform ? this.currentTransform = new me.Matrix2d : this.currentTransform.identity(), this.flippedAD && (this.currentTransform.setTransform(0, 1, 0, 1, 0, 0, 0, 0, 1), this.currentTransform.translate(0, this.height - this.width)), this.flippedX && (this.currentTransform.translate(this.flippedAD ? 0 : this.width, this.flippedAD ? this.height : 0), this.currentTransform.scaleX(-1)), this.flippedY && (this.currentTransform.translate(this.flippedAD ? this.width : 0, this.flippedAD ? 0 : this.height), this.currentTransform.scaleY(-1))
            },
            getRenderable: function(e) {
                var t, i = this.tileset;
                if (i.animations.has(this.tileId)) {
                    var n = [],
                        r = [];
                    i.animations.get(this.tileId).frames.forEach(function(e) {
                        r.push(e.tileid), n.push({
                            name: "" + e.tileid,
                            delay: e.duration
                        })
                    }), (t = i.texture.createAnimationFromName(r, e)).addAnimation(this.tileId - i.firstgid, n), t.setCurrentAnimation(this.tileId - i.firstgid)
                } else if (!0 === i.isCollection) {
                    var s = i.getTileImage(this.tileId);
                    (t = new me.Sprite(0, 0, Object.assign({
                        image: s
                    }))).anchorPoint.set(0, 0), t.scale(e.width / this.width, e.height / this.height), void 0 !== e.rotation && (t.anchorPoint.set(.5, .5), t.currentTransform.rotate(e.rotation), t.currentTransform.translate(e.width / 2, e.height / 2), e.rotation = void 0)
                } else t = i.texture.createSpriteFromName(this.tileId - i.firstgid, e);
                return this.flippedX && t.currentTransform.scaleX(-1), this.flippedY && t.currentTransform.scaleY(-1), t
            }
        })
    }(), me.TMXTileset = me.Object.extend({
        init: function(e) {
            var t = 0;
            if (this.TileProperties = [], this.imageCollection = [], this.firstgid = this.lastgid = +e.firstgid, void 0 !== e.source) {
                var i = e.source,
                    n = me.utils.file.getExtension(i);
                if (("tsx" === n || "json" === n) && !(e = me.loader.getTMX(me.utils.file.getBasename(i)))) throw new me.Error(i + " external TSX/JSON tileset not found")
            }
            this.name = e.name, this.tilewidth = +e.tilewidth, this.tileheight = +e.tileheight, this.spacing = +e.spacing || 0, this.margin = +e.margin || 0, this.tileoffset = new me.Vector2d, this.isAnimated = !1, this.isCollection = !1, this.animations = new Map, this._lastUpdate = 0;
            var r = e.tiles;
            for (t in r)
                if (r.hasOwnProperty(t) && ("animation" in r[t] && (this.isAnimated = !0, this.animations.set(+t + this.firstgid, {
                        dt: 0,
                        idx: 0,
                        frames: r[t].animation,
                        cur: r[t].animation[0]
                    })), "properties" in r[t] && this.setTileProperty(+t + this.firstgid, r[t].properties), "image" in r[t])) {
                    var s = me.loader.getImage(r[t].image);
                    if (!s) throw new me.TMXTileset.Error("melonJS: '" + r[t].image + "' file for tile '" + (+t + this.firstgid) + "' not found!");
                    this.imageCollection[+t + this.firstgid] = s
                }
            this.isCollection = 0 < this.imageCollection.length;
            var o = e.tileoffset;
            o && (this.tileoffset.x = +o.x, this.tileoffset.y = +o.y);
            var a = e.tileproperties;
            if (a)
                for (t in a) a.hasOwnProperty(t) && this.setTileProperty(+t + this.firstgid, a[t]);
            if (!1 === this.isCollection) {
                if (this.image = me.loader.getImage(e.image), !this.image) throw new me.TMXTileset.Error("melonJS: '" + e.image + "' file for tileset '" + this.name + "' not found!");
                this.texture = me.video.renderer.cache.get(this.image, {
                    framewidth: this.tilewidth,
                    frameheight: this.tileheight,
                    margin: this.margin,
                    spacing: this.spacing
                }), this.atlas = this.texture.getAtlas();
                var h = +e.columns || ~~(this.image.width / (this.tilewidth + this.spacing)),
                    l = ~~(this.image.height / (this.tileheight + this.spacing));
                this.lastgid = this.firstgid + (h * l - 1 || 0), e.tilecount && this.lastgid - this.firstgid + 1 != +e.tilecount && console.warn("Computed tilecount (" + (this.lastgid - this.firstgid + 1) + ") does not match expected tilecount (" + e.tilecount + ")")
            }
        },
        getTileImage: function(e) {
            return this.imageCollection[e]
        },
        setTileProperty: function(e, t) {
            this.TileProperties[e] = t
        },
        contains: function(e) {
            return e >= this.firstgid && e <= this.lastgid
        },
        getViewTileId: function(e) {
            return this.animations.has(e) ? e = this.animations.get(e).cur.tileid : e -= this.firstgid, e
        },
        getTileProperties: function(e) {
            return this.TileProperties[e]
        },
        update: function(t) {
            var i = 0,
                e = me.timer.getTime(),
                n = !1;
            return this._lastUpdate !== e && (this._lastUpdate = e, this.animations.forEach(function(e) {
                for (e.dt += t, i = e.cur.duration; e.dt >= i;) e.dt -= i, e.idx = (e.idx + 1) % e.frames.length, e.cur = e.frames[e.idx], i = e.cur.duration, n = !0
            })), n
        },
        drawTile: function(e, t, i, n) {
            if (n.flipped && (e.save(), e.translate(t, i), e.transform(n.currentTransform), t = i = 0), !0 === this.isCollection) e.drawImage(this.imageCollection[n.tileId], 0, 0, n.width, n.height, t, i, n.width, n.height);
            else {
                var r = this.atlas[this.getViewTileId(n.tileId)].offset;
                e.drawImage(this.image, r.x, r.y, this.tilewidth, this.tileheight, t, i, this.tilewidth + e.uvOffset, this.tileheight + e.uvOffset)
            }
            n.flipped && e.restore()
        }
    }), me.TMXTilesetGroup = me.Object.extend({
        init: function() {
            this.tilesets = [], this.length = 0
        },
        add: function(e) {
            this.tilesets.push(e), this.length++
        },
        getTilesetByIndex: function(e) {
            return this.tilesets[e]
        },
        getTilesetByGid: function(e) {
            var t = -1;
            e &= 536870911;
            for (var i = 0, n = this.tilesets.length; i < n; i++) {
                if (this.tilesets[i].contains(e)) return this.tilesets[i];
                this.tilesets[i].firstgid === this.tilesets[i].lastgid && e >= this.tilesets[i].firstgid && (t = i)
            }
            if (-1 !== t) return this.tilesets[t];
            throw new me.Error("no matching tileset found for gid " + e)
        }
    }), me.TMXTileset.Error = me.Error.extend({
        init: function(e) {
            me.Error.prototype.init.apply(this, [e]), this.name = "me.TMXTileset.Error"
        }
    }),
    function() {
        var y = [{
                x: 0,
                y: 0
            }, {
                x: 1,
                y: -1
            }, {
                x: 1,
                y: 0
            }, {
                x: 2,
                y: 0
            }],
            v = [{
                x: 0,
                y: 0
            }, {
                x: -1,
                y: 1
            }, {
                x: 0,
                y: 1
            }, {
                x: 0,
                y: 2
            }];
        me.TMXRenderer = me.Object.extend({
            init: function(e, t, i, n) {
                this.cols = e, this.rows = t, this.tilewidth = i, this.tileheight = n
            },
            canRender: function(e) {
                return this.cols === e.cols && this.rows === e.rows && this.tilewidth === e.tilewidth && this.tileheight === e.tileheight
            },
            pixelToTileCoords: function(e, t, i) {
                return i
            },
            tileToPixelCoords: function(e, t, i) {
                return i
            },
            pixelToTileX: function(e) {},
            pixelToTileY: function(e) {},
            drawTile: function(e, t, i, n) {},
            drawTileLayer: function(e, t, i) {}
        }), me.TMXOrthogonalRenderer = me.TMXRenderer.extend({
            canRender: function(e) {
                return "orthogonal" === e.orientation && me.TMXRenderer.prototype.canRender.apply(this, [e])
            },
            pixelToTileCoords: function(e, t, i) {
                return (i || new me.Vector2d).set(this.pixelToTileX(e), this.pixelToTileY(t))
            },
            pixelToTileX: function(e) {
                return e / this.tilewidth
            },
            pixelToTileY: function(e) {
                return e / this.tileheight
            },
            tileToPixelCoords: function(e, t, i) {
                return (i || new me.Vector2d).set(e * this.tilewidth, t * this.tileheight)
            },
            adjustPosition: function(e) {
                "number" == typeof e.gid && (e.y -= e.height)
            },
            drawTile: function(e, t, i, n) {
                var r = n.tileset;
                r.drawTile(e, r.tileoffset.x + t * this.tilewidth, r.tileoffset.y + (i + 1) * this.tileheight - r.tileheight, n)
            },
            drawTileLayer: function(e, t, i) {
                var n = this.pixelToTileCoords(Math.max(i.pos.x - (t.maxTileSize.width - t.tilewidth), 0), Math.max(i.pos.y - (t.maxTileSize.height - t.tileheight), 0), me.pool.pull("me.Vector2d")).floorSelf(),
                    r = this.pixelToTileCoords(i.pos.x + i.width + this.tilewidth, i.pos.y + i.height + this.tileheight, me.pool.pull("me.Vector2d")).ceilSelf();
                r.x = r.x > this.cols ? this.cols : r.x, r.y = r.y > this.rows ? this.rows : r.y;
                for (var s = n.y; s < r.y; s++)
                    for (var o = n.x; o < r.x; o++) {
                        var a = t.layerData[o][s];
                        a && this.drawTile(e, o, s, a)
                    }
                me.pool.push(n), me.pool.push(r)
            }
        }), me.TMXIsometricRenderer = me.TMXRenderer.extend({
            init: function(e, t, i, n) {
                me.TMXRenderer.prototype.init.apply(this, [e, t, i, n]), this.hTilewidth = i / 2, this.hTileheight = n / 2, this.originX = this.rows * this.hTilewidth
            },
            canRender: function(e) {
                return "isometric" === e.orientation && me.TMXRenderer.prototype.canRender.apply(this, [e])
            },
            pixelToTileCoords: function(e, t, i) {
                return (i || new me.Vector2d).set(this.pixelToTileX(e, t), this.pixelToTileY(t, e))
            },
            pixelToTileX: function(e, t) {
                return t / this.tileheight + (e - this.originX) / this.tilewidth
            },
            pixelToTileY: function(e, t) {
                return e / this.tileheight - (t - this.originX) / this.tilewidth
            },
            tileToPixelCoords: function(e, t, i) {
                return (i || new me.Vector2d).set((e - t) * this.hTilewidth + this.originX, (e + t) * this.hTileheight)
            },
            adjustPosition: function(e) {
                var t = e.x / this.hTilewidth,
                    i = e.y / this.tileheight,
                    n = me.pool.pull("me.Vector2d");
                this.tileToPixelCoords(t, i, n), e.x = n.x, e.y = n.y, me.pool.push(n)
            },
            drawTile: function(e, t, i, n) {
                var r = n.tileset;
                r.drawTile(e, (this.cols - 1) * r.tilewidth + (t - i) * r.tilewidth >> 1, -r.tilewidth + (t + i) * r.tileheight >> 2, n)
            },
            drawTileLayer: function(e, t, i) {
                var n = t.tileset,
                    r = n.tileoffset,
                    s = this.pixelToTileCoords(i.pos.x - n.tilewidth, i.pos.y - n.tileheight, me.pool.pull("me.Vector2d")).floorSelf(),
                    o = this.pixelToTileCoords(i.pos.x + i.width + n.tilewidth, i.pos.y + i.height + n.tileheight, me.pool.pull("me.Vector2d")).ceilSelf(),
                    a = this.tileToPixelCoords(o.x, o.y, me.pool.pull("me.Vector2d")),
                    h = this.tileToPixelCoords(s.x, s.y, me.pool.pull("me.Vector2d"));
                h.x -= this.hTilewidth, h.y += this.tileheight;
                var l = h.y - i.pos.y > this.hTileheight,
                    d = i.pos.x - h.x < this.hTilewidth;
                l && (d ? (s.x--, h.x -= this.hTilewidth) : (s.y--, h.x += this.hTilewidth), h.y -= this.hTileheight);
                for (var c = l ^ d, u = s.clone(), f = 2 * h.y; f - 2 * this.tileheight < 2 * a.y; f += this.tileheight) {
                    u.setV(s);
                    for (var m = h.x; m < a.x; m += this.tilewidth) {
                        if (0 <= u.x && 0 <= u.y && u.x < this.cols && u.y < this.rows) {
                            var p = t.layerData[u.x][u.y];
                            p && (r = (n = p.tileset).tileoffset, n.drawTile(e, r.x + m, r.y + f / 2 - n.tileheight, p))
                        }
                        u.x++, u.y--
                    }
                    c = c ? (s.y++, h.x -= this.hTilewidth, !1) : (s.x++, h.x += this.hTilewidth, !0)
                }
                me.pool.push(s), me.pool.push(o), me.pool.push(a), me.pool.push(h)
            }
        }), me.TMXHexagonalRenderer = me.TMXRenderer.extend({
            init: function(e, t, i, n, r, s, o) {
                me.TMXRenderer.prototype.init.apply(this, [e, t, i, n]), this.hexsidelength = r, this.staggeraxis = s, this.staggerindex = o, this.sidelengthx = 0, this.sidelengthy = 0, "x" === s ? this.sidelengthx = r : this.sidelengthy = r, this.sideoffsetx = (this.tilewidth - this.sidelengthx) / 2, this.sideoffsety = (this.tileheight - this.sidelengthy) / 2, this.columnwidth = this.sideoffsetx + this.sidelengthx, this.rowheight = this.sideoffsety + this.sidelengthy, this.centers = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d]
            },
            canRender: function(e) {
                return "hexagonal" === e.orientation && me.TMXRenderer.prototype.canRender.apply(this, [e])
            },
            pixelToTileCoords: function(e, t, i) {
                var n, r, s = i || new me.Vector2d;
                "x" === this.staggeraxis ? e -= "odd" === this.staggerindex ? this.sideoffsetx : this.tilewidth : t -= "odd" === this.staggerindex ? this.sideoffsety : this.tileheight;
                var o, a, h, l, d = me.pool.pull("me.Vector2d", Math.floor(e / (2 * this.columnwidth)), Math.floor(t / (2 * this.rowheight))),
                    c = me.pool.pull("me.Vector2d", e - d.x * (2 * this.columnwidth), t - d.y * (2 * this.rowheight));
                "x" === this.staggeraxis ? (d.x = 2 * d.x, "even" === this.staggerindex && ++d.x) : (d.y = 2 * d.y, "even" === this.staggerindex && ++d.y), "x" === this.staggeraxis ? (h = (o = this.sidelengthx / 2) + this.columnwidth, l = this.tileheight / 2, this.centers[0].set(o, l), this.centers[1].set(h, l - this.rowheight), this.centers[2].set(h, l + this.rowheight), this.centers[3].set(h + this.columnwidth, l)) : (a = this.sidelengthy / 2, h = this.tilewidth / 2, l = a + this.rowheight, this.centers[0].set(h, a), this.centers[1].set(h - this.columnwidth, l), this.centers[2].set(h + this.columnwidth, l), this.centers[3].set(h, l + this.rowheight));
                for (var u, f = 0, m = Number.MAX_VALUE, p = 0; p < 4; ++p)(u = Math.pow(this.centers[p].x - c.x, 2) + Math.pow(this.centers[p].y - c.y, 2)) < m && (m = u, f = p);
                var g = "x" === this.staggeraxis ? y : v;
                return n = d.x + g[f].x, r = d.y + g[f].y, me.pool.push(d), me.pool.push(c), s.set(n, r)
            },
            pixelToTileX: function(e, t) {
                var i = me.pool.pull("me.Vector2d");
                return this.pixelToTileCoords(e, t, i), me.pool.push(i), i.x
            },
            pixelToTileY: function(e, t) {
                var i = me.pool.pull("me.Vector2d");
                return this.pixelToTileCoords(t, e, i), me.pool.push(i), i.y
            },
            tileToPixelCoords: function(e, t, i) {
                var n, r, s = i || new me.Vector2d;
                return "x" === this.staggeraxis ? (n = e * this.columnwidth, "odd" === this.staggerindex ? (r = t * (this.tileheight + this.sidelengthy), r += this.rowheight * (1 & e)) : (r = t * (this.tileheight + this.sidelengthy), r += this.rowheight * (1 - (1 & e)))) : (r = t * this.rowheight, "odd" === this.staggerindex ? (n = e * (this.tilewidth + this.sidelengthx), n += this.columnwidth * (1 & t)) : (n = e * (this.tilewidth + this.sidelengthx), n += this.columnwidth * (1 - (1 & t)))), s.set(n, r)
            },
            adjustPosition: function(e) {
                "number" == typeof e.gid && (e.y -= e.height)
            },
            drawTile: function(e, t, i, n) {
                var r = n.tileset,
                    s = this.tileToPixelCoords(t, i, me.pool.pull("me.Vector2d"));
                r.drawTile(e, r.tileoffset.x + s.x, r.tileoffset.y + s.y + (this.tileheight - r.tileheight), n), me.pool.push(s)
            },
            drawTileLayer: function(e, t, i) {
                var n = this.pixelToTileCoords(i.pos.x, i.pos.y).floorSelf(),
                    r = this.pixelToTileCoords(i.pos.x + i.width + this.tilewidth, i.pos.y + i.height + this.tileheight).ceilSelf();
                n.x = n.x < 0 ? 0 : n.x, n.y = n.y < 0 ? 0 : n.y, r.x = r.x > this.cols ? this.cols : r.x, r.y = r.y > this.rows ? this.rows : r.y;
                for (var s = n.y; s < r.y; s++)
                    for (var o = n.x; o < r.x; o++) {
                        var a = t.layerData[o][s];
                        a && this.drawTile(e, o, s, a)
                    }
            }
        })
    }(),
    function() {
        function l(e, t) {
            var i = 0;
            ! function(e) {
                e.layerData = new Array(e.cols);
                for (var t = 0; t < e.cols; t++) {
                    e.layerData[t] = new Array(e.rows);
                    for (var i = 0; i < e.rows; i++) e.layerData[t][i] = null
                }
            }(e);
            for (var n = 0; n < e.rows; n++)
                for (var r = 0; r < e.cols; r++) {
                    var s = t[i++];
                    0 !== s && e.setTile(r, n, s)
                }
        }
        me.TMXLayer = me.Renderable.extend({
            init: function(e, t, i, n, r, s) {
                me.Renderable.prototype.init.apply(this, [0, 0, 0, 0]), this.tilewidth = e.tilewidth || t, this.tileheight = e.tileheight || i, this.orientation = n, this.tilesets = r, this.tileset = this.tilesets ? this.tilesets.getTilesetByIndex(0) : null, this.maxTileSize = {
                    width: 0,
                    height: 0
                };
                for (var o = 0; o < this.tilesets.length; o++) {
                    var a = this.tilesets.getTilesetByIndex(o);
                    this.maxTileSize.width = Math.max(this.maxTileSize.width, a.tilewidth), this.maxTileSize.height = Math.max(this.maxTileSize.height, a.tileheight)
                }
                this.animatedTilesets = [], this.isAnimated = !1, this.pos.z = s, this.anchorPoint.set(0, 0), this.name = e.name, this.cols = +e.width, this.rows = +e.height, this.hexsidelength = +e.hexsidelength || void 0, this.staggeraxis = e.staggeraxis, this.staggerindex = e.staggerindex;
                var h = void 0 !== e.visible ? +e.visible : 1;
                this.setOpacity(h ? +e.opacity : 0), "isometric" === this.orientation ? (this.width = (this.cols + this.rows) * (this.tilewidth / 2), this.height = (this.cols + this.rows) * (this.tileheight / 2)) : (this.width = this.cols * this.tilewidth, this.height = this.rows * this.tileheight), me.TMXUtils.applyTMXProperties(this, e), void 0 === this.preRender && (this.preRender = me.sys.preRender), !0 === this.preRender && (this.canvasRenderer = new me.CanvasRenderer(me.video.createCanvas(this.width, this.height), this.width, this.height, {
                    transparent: !0
                })), l(this, me.TMXUtils.decode(e.data, e.encoding, e.compression))
            },
            onActivateEvent: function() {
                if (void 0 === this.animatedTilesets && (this.animatedTilesets = []), this.tilesets)
                    for (var e = this.tilesets.tilesets, t = 0; t < e.length; t++) e[t].isAnimated && this.animatedTilesets.push(e[t]);
                this.isAnimated = 0 < this.animatedTilesets.length, this.isAnimated && (this.preRender = !1), this.getBounds().resize(this.width, this.height)
            },
            onDeactivateEvent: function() {
                this.animatedTilesets = void 0
            },
            setRenderer: function(e) {
                this.renderer = e
            },
            getRenderer: function(e) {
                return this.renderer
            },
            getTileId: function(e, t) {
                var i = this.getTile(e, t);
                return i ? i.tileId : null
            },
            getTile: function(e, t) {
                if (this.containsPoint(e, t)) {
                    var i = this.renderer,
                        n = ~~i.pixelToTileX(e, t),
                        r = ~~i.pixelToTileY(t, e);
                    if (0 <= n && n < i.cols && 0 <= r && r < i.rows) return this.layerData[n][r]
                }
                return null
            },
            setTile: function(e, t, i) {
                this.tileset.contains(i) || (this.tileset = this.tilesets.getTilesetByGid(i));
                var n = this.layerData[e][t] = new me.Tile(e, t, i, this.tileset);
                return this.preRender && this.renderer.drawTile(this.canvasRenderer, e, t, n), n
            },
            clearTile: function(e, t) {
                this.layerData[e][t] = null, this.preRender && this.canvasRenderer.clearRect(e * this.tilewidth, t * this.tileheight, this.tilewidth, this.tileheight)
            },
            update: function(e) {
                if (this.isAnimated) {
                    for (var t = !1, i = 0; i < this.animatedTilesets.length; i++) t = this.animatedTilesets[i].update(e) || t;
                    return t
                }
                return !1
            },
            draw: function(e, t) {
                if (this.preRender) {
                    var i = Math.min(t.width, this.width),
                        n = Math.min(t.height, this.height);
                    e.drawImage(this.canvasRenderer.getCanvas(), t.pos.x, t.pos.y, i, n, t.pos.x, t.pos.y, i, n)
                } else this.renderer.drawTileLayer(e, this, t)
            }
        })
    }(),
    function() {
        function t(e) {
            switch (e.orientation) {
                case "orthogonal":
                    return new me.TMXOrthogonalRenderer(e.cols, e.rows, e.tilewidth, e.tileheight);
                case "isometric":
                    return new me.TMXIsometricRenderer(e.cols, e.rows, e.tilewidth, e.tileheight);
                case "hexagonal":
                    return new me.TMXHexagonalRenderer(e.cols, e.rows, e.tilewidth, e.tileheight, e.hexsidelength, e.staggeraxis, e.staggerindex);
                default:
                    throw new me.Error(e.orientation + " type TMX Tile Map not supported!")
            }
        }

        function a(e, t, i) {
            return new me.TMXGroup(e, t, i)
        }
        me.TMXTileMap = me.Object.extend({
            init: function(e, t) {
                this.name = e, this.data = t, this.cols = +t.width, this.rows = +t.height, this.tilewidth = +t.tilewidth, this.tileheight = +t.tileheight, this.tilesets = null, void 0 === this.layers && (this.layers = []), void 0 === this.objectGroups && (this.objectGroups = []), this.version = t.version, this.isEditor = "melon-editor" === t.editor, this.orientation = t.orientation, "isometric" === this.orientation ? (this.width = (this.cols + this.rows) * (this.tilewidth / 2), this.height = (this.cols + this.rows) * (this.tileheight / 2)) : (this.width = this.cols * this.tilewidth, this.height = this.rows * this.tileheight), this.z = 0, this.nextobjectid = +t.nextobjectid || void 0, this.hexsidelength = +t.hexsidelength || void 0, this.staggeraxis = t.staggeraxis, this.staggerindex = t.staggerindex, this.backgroundcolor = t.backgroundcolor, me.TMXUtils.applyTMXProperties(this, t), this.initialized = !1
            },
            getRenderer: function(e) {
                return void 0 !== this.renderer && this.renderer.canRender(this) || (this.renderer = t(this)), void 0 === e || this.renderer.canRender(e) ? this.renderer : t(e)
            },
            readMapObjects: function(e) {
                if (!0 !== this.initialized) {
                    var s = this.z,
                        o = this;
                    if (this.tilesets || (this.tilesets = new me.TMXTilesetGroup), void 0 !== e.tilesets) e.tilesets.forEach(function(e) {
                        var t;
                        o.tilesets.add((t = e, new me.TMXTileset(t)))
                    });
                    this.backgroundcolor && this.layers.push(new me.ColorLayer("background_color", this.backgroundcolor, s++)), this.background_image && this.layers.push(new me.ImageLayer(0, 0, {
                        name: "background_image",
                        image: this.background_image,
                        z: s++
                    })), e.layers.forEach(function(e) {
                        switch (e.type) {
                            case "imagelayer":
                                o.layers.push(function(e, t, i) {
                                    me.TMXUtils.applyTMXProperties(t.properties, t);
                                    var n = new me.ImageLayer(+t.x || 0, +t.y || 0, Object.assign({
                                            name: t.name,
                                            image: t.image,
                                            z: i
                                        }, t.properties)),
                                        r = void 0 === t.visible || t.visible;
                                    return n.setOpacity(r ? +t.opacity : 0), n
                                }(0, e, s++));
                                break;
                            case "tilelayer":
                                o.layers.push((t = o, i = e, n = s++, (r = new me.TMXLayer(i, t.tilewidth, t.tileheight, t.orientation, t.tilesets, n)).setRenderer(t.getRenderer(r)), r));
                                break;
                            case "objectgroup":
                            case "group":
                                o.objectGroups.push(a(o, e, s++))
                        }
                        var t, i, n, r
                    }), this.initialized = !0
                }
            },
            addTo: function(t, e) {
                var i = t.autoSort,
                    n = t.autoDepth;
                t.autoSort = !1, t.autoDepth = !1, this.getLayers().forEach(function(e) {
                    t.addChild(e)
                }), this.getObjects(e).forEach(function(e) {
                    t.addChild(e)
                }), t.autoSort = i, t.autoDepth = n, t.sort(!0)
            },
            getObjects: function(e) {
                var t, i = [],
                    n = !1;
                this.readMapObjects(this.data);
                for (var r = 0; r < this.objectGroups.length; r++) {
                    var s = this.objectGroups[r];
                    n = s.name.toLowerCase().includes("collision"), !1 === e && ((t = new me.Container(0, 0, this.width, this.height)).anchorPoint.set(0, 0), t.name = s.name, t.pos.z = s.z, t.setOpacity(s.opacity), t.autoSort = !1, t.autoDepth = !1);
                    for (var o = 0; o < s.objects.length; o++) {
                        var a, h = s.objects[o];
                        if (void 0 === h.anchorPoint && (h.anchorPoint = {
                                x: 0,
                                y: 0
                            }), h instanceof me.TMXLayer ? a = h : (a = me.pool.pull(h.name || "me.Entity", h.x, h.y, h)).pos.z = h.z, "object" == typeof h.tile && !a.renderable) switch (a.renderable = h.tile.getRenderable(h), h.rotation) {
                            case Math.PI:
                                a.translate(-a.renderable.width, a.renderable.height);
                                break;
                            case Math.PI / 2:
                                a.translate(0, a.renderable.height);
                                break;
                            case -Math.PI / 2:
                                a.translate(-a.renderable.width, 0)
                        }
                        n && !h.name && (a.body.collisionType = me.collision.types.WORLD_SHAPE), !0 === e ? (!0 === a.isRenderable && (a.setOpacity(a.getOpacity() * s.opacity), a.renderable instanceof me.Renderable && a.renderable.setOpacity(a.renderable.getOpacity() * s.opacity)), i.push(a)) : t.addChild(a)
                    }!1 === e && 0 < t.children.length && (t.autoSort = !0, t.autoDepth = !0, i.push(t))
                }
                return i
            },
            getLayers: function() {
                return this.readMapObjects(this.data), this.layers
            },
            destroy: function() {
                this.tilesets = void 0, this.layers.length = 0, this.objectGroups.length = 0, this.initialized = !1
            }
        })
    }(), me.levelDirector = function() {
        var n = {},
            a = {},
            r = [],
            s = 0,
            h = null;

        function i(e, t, i) {
            t.container.destroy(), me.game.reset(), a[n.getCurrentLevelId()] && a[n.getCurrentLevelId()].destroy(), s = r.indexOf(e),
                function(e, t, i, n) {
                    var r = a[e],
                        s = t.autoSort;

                    function o() {
                        t.pos.set(Math.max(0, ~~((me.game.viewport.width - r.width) / 2)), Math.max(0, ~~((me.game.viewport.height - r.height) / 2)), 0)
                    }
                    t.autoSort = !1, n && me.game.viewport.setBounds(0, 0, Math.max(r.width, me.game.viewport.width), Math.max(r.height, me.game.viewport.height)), me.utils.resetGUID(e, r.nextobjectid), t.anchorPoint.set(0, 0), r.addTo(t, i), t.sort(!0), t.autoSort = s, t.resize(r.width, r.height), n && (o(), h && me.event.unsubscribe(h), h = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, o))
                }(e, t.container, t.flatten, t.setViewportBounds), me.event.publish(me.event.LEVEL_LOADED, [e]), t.onLoaded(e), i && me.state.restart()
        }
        return n.reset = function() {}, n.addLevel = function() {
            throw new me.Error("no level loader defined")
        }, n.addTMXLevel = function(e, t) {
            return null == a[e] && (a[e] = new me.TMXTileMap(e, me.loader.getTMX(e)), r.push(e), t && t(), !0)
        }, n.loadLevel = function(e, t) {
            if (t = Object.assign({
                    container: me.game.world,
                    onLoaded: me.game.onLevelLoaded,
                    flatten: me.game.mergeGroup,
                    setViewportBounds: !0
                }, t || {}), void 0 === a[e]) throw new me.Error("level " + e + " not found");
            if (!(a[e] instanceof me.TMXTileMap)) throw new me.Error("no level loader defined");
            return me.state.isRunning() ? (me.state.stop(), me.utils.function.defer(i, this, e, t, !0)) : i(e, t), !0
        }, n.getCurrentLevelId = function() {
            return r[s]
        }, n.getCurrentLevel = function() {
            return a[n.getCurrentLevelId()]
        }, n.reloadLevel = function(e) {
            return n.loadLevel(n.getCurrentLevelId(), e)
        }, n.nextLevel = function(e) {
            return s + 1 < r.length && n.loadLevel(r[s + 1], e)
        }, n.previousLevel = function(e) {
            return 0 <= s - 1 && n.loadLevel(r[s - 1], e)
        }, n.levelCount = function() {
            return r.length
        }, n
    }(),
    function() {
        var n;
        me.Tween = function(e) {
            var d = null,
                c = null,
                u = null,
                f = null,
                m = null,
                p = null,
                g = null,
                y = null,
                v = null,
                x = null,
                w = null,
                b = null,
                _ = null,
                T = null,
                E = null,
                A = null,
                C = null,
                S = null;
            this.isRenderable = !1, this._resumeCallback = function(e) {
                x && (x += e)
            }, this.setProperties = function(e) {
                for (var t in d = e, c = {}, u = {}, f = {}, y = g = !(m = 1e3), v = p = 0, x = null, w = me.Tween.Easing.Linear.None, b = me.Tween.Interpolation.Linear, E = !(_ = []), C = A = T = null, S = me.timer.lastUpdate, this.isPersistent = !1, this.updateWhenPaused = !1, e) "object" != typeof e && (c[t] = parseFloat(e[t], 10))
            }, this.setProperties(e), this.onResetEvent = function(e) {
                this.setProperties(e)
            }, this.onActivateEvent = function() {
                me.event.subscribe(me.event.STATE_RESUME, this._resumeCallback)
            }, this.onDeactivateEvent = function() {
                me.event.unsubscribe(me.event.STATE_RESUME, this._resumeCallback)
            }, this.to = function(e, t) {
                return void 0 !== t && (m = t), u = e, this
            }, this.start = function(e) {
                for (var t in E = !1, me.game.world.addChild(this), x = (void 0 === e ? me.timer.getTime() : e) + v, u) {
                    if (u[t] instanceof Array) {
                        if (0 === u[t].length) continue;
                        u[t] = [d[t]].concat(u[t])
                    }
                    c[t] = d[t], c[t] instanceof Array == !1 && (c[t] *= 1), f[t] = c[t] || 0
                }
                return this
            }, this.stop = function() {
                return me.game.world.removeChildNow(this), this
            }, this.delay = function(e) {
                return v = e, this
            }, this.repeat = function(e) {
                return p = e, this
            }, this.yoyo = function(e) {
                return g = e, this
            }, this.easing = function(e) {
                if ("function" != typeof e) throw new me.Tween.Error("invalid easing function for me.Tween.easing()");
                return w = e, this
            }, this.interpolation = function(e) {
                return b = e, this
            }, this.chain = function() {
                return _ = arguments, this
            }, this.onStart = function(e) {
                return T = e, this
            }, this.onUpdate = function(e) {
                return A = e, this
            }, this.onComplete = function(e) {
                return C = e, this
            }, this.update = function(e) {
                var t, i = S = me.timer.lastUpdate > S ? me.timer.lastUpdate : S + e;
                if (i < x) return !0;
                !1 === E && (null !== T && T.call(d), E = !0);
                var n = (i - x) / m,
                    r = w(n = 1 < n ? 1 : n);
                for (t in u) {
                    var s = c[t] || 0,
                        o = u[t];
                    o instanceof Array ? d[t] = b(o, r) : ("string" == typeof o && (o = s + parseFloat(o, 10)), "number" == typeof o && (d[t] = s + (o - s) * r))
                }
                if (null !== A && A.call(d, r), 1 !== n) return !0;
                if (0 < p) {
                    for (t in isFinite(p) && p--, f) {
                        if ("string" == typeof u[t] && (f[t] = f[t] + parseFloat(u[t], 10)), g) {
                            var a = f[t];
                            f[t] = u[t], u[t] = a
                        }
                        c[t] = f[t]
                    }
                    return g && (y = !y), x = i + v, !0
                }
                me.game.world.removeChildNow(this), null !== C && C.call(d);
                for (var h = 0, l = _.length; h < l; h++) _[h].start(i);
                return !1
            }
        }, me.Tween.Easing = {
            Linear: {
                None: function(e) {
                    return e
                }
            },
            Quadratic: {
                In: function(e) {
                    return e * e
                },
                Out: function(e) {
                    return e * (2 - e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }
            },
            Cubic: {
                In: function(e) {
                    return e * e * e
                },
                Out: function(e) {
                    return --e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }
            },
            Quartic: {
                In: function(e) {
                    return e * e * e * e
                },
                Out: function(e) {
                    return 1 - --e * e * e * e
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }
            },
            Quintic: {
                In: function(e) {
                    return e * e * e * e * e
                },
                Out: function(e) {
                    return --e * e * e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }
            },
            Sinusoidal: {
                In: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Out: function(e) {
                    return Math.sin(e * Math.PI / 2)
                },
                InOut: function(e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }
            },
            Exponential: {
                In: function(e) {
                    return 0 === e ? 0 : Math.pow(1024, e - 1)
                },
                Out: function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                InOut: function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                }
            },
            Circular: {
                In: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Out: function(e) {
                    return Math.sqrt(1 - --e * e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }
            },
            Elastic: {
                In: function(e) {
                    var t, i = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (t = !i || i < 1 ? (i = 1, .1) : .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4))
                },
                Out: function(e) {
                    var t, i = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (t = !i || i < 1 ? (i = 1, .1) : .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
                },
                InOut: function(e) {
                    var t, i = .1;
                    return 0 === e ? 0 : 1 === e ? 1 : (t = !i || i < 1 ? (i = 1, .1) : .4 * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * .5 + 1)
                }
            },
            Back: {
                In: function(e) {
                    return e * e * (2.70158 * e - 1.70158)
                },
                Out: function(e) {
                    return --e * e * (2.70158 * e + 1.70158) + 1
                },
                InOut: function(e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
            },
            Bounce: {
                In: function(e) {
                    return 1 - me.Tween.Easing.Bounce.Out(1 - e)
                },
                Out: function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                InOut: function(e) {
                    return e < .5 ? .5 * me.Tween.Easing.Bounce.In(2 * e) : .5 * me.Tween.Easing.Bounce.Out(2 * e - 1) + .5
                }
            }
        }, me.Tween.Interpolation = {
            Linear: function(e, t) {
                var i = e.length - 1,
                    n = i * t,
                    r = Math.floor(n),
                    s = me.Tween.Interpolation.Utils.Linear;
                return t < 0 ? s(e[0], e[1], n) : 1 < t ? s(e[i], e[i - 1], i - n) : s(e[r], e[i < r + 1 ? i : r + 1], n - r)
            },
            Bezier: function(e, t) {
                var i, n = 0,
                    r = e.length - 1,
                    s = Math.pow,
                    o = me.Tween.Interpolation.Utils.Bernstein;
                for (i = 0; i <= r; i++) n += s(1 - t, r - i) * s(t, i) * e[i] * o(r, i);
                return n
            },
            CatmullRom: function(e, t) {
                var i = e.length - 1,
                    n = i * t,
                    r = Math.floor(n),
                    s = me.Tween.Interpolation.Utils.CatmullRom;
                return e[0] === e[i] ? (t < 0 && (r = Math.floor(n = i * (1 + t))), s(e[(r - 1 + i) % i], e[r], e[(r + 1) % i], e[(r + 2) % i], n - r)) : t < 0 ? e[0] - (s(e[0], e[0], e[1], e[1], -n) - e[0]) : 1 < t ? e[i] - (s(e[i], e[i], e[i - 1], e[i - 1], n - i) - e[i]) : s(e[r ? r - 1 : 0], e[r], e[i < r + 1 ? i : r + 1], e[i < r + 2 ? i : r + 2], n - r)
            },
            Utils: {
                Linear: function(e, t, i) {
                    return (t - e) * i + e
                },
                Bernstein: function(e, t) {
                    var i = me.Tween.Interpolation.Utils.Factorial;
                    return i(e) / i(t) / i(e - t)
                },
                Factorial: (n = [1], function(e) {
                    var t, i = 1;
                    if (n[e]) return n[e];
                    for (t = e; 1 < t; t--) i *= t;
                    return n[e] = i
                }),
                CatmullRom: function(e, t, i, n, r) {
                    var s = .5 * (i - e),
                        o = .5 * (n - t),
                        a = r * r;
                    return (2 * t - 2 * i + s + o) * (r * a) + (-3 * t + 3 * i - 2 * s - o) * a + s * r + t
                }
            }
        }, me.Tween.Error = me.Error.extend({
            init: function(e) {
                me.Error.prototype.init.apply(this, [e]), this.name = "me.Tween.Error"
            }
        })
    }(),
    function() {
        var e, r;
        me.event = (r = {}, (e = {}).STATE_PAUSE = "me.state.onPause", e.STATE_RESUME = "me.state.onResume", e.STATE_STOP = "me.state.onStop", e.STATE_RESTART = "me.state.onRestart", e.GAME_INIT = "me.game.onInit", e.GAME_RESET = "me.game.onReset", e.LEVEL_LOADED = "me.game.onLevelLoaded", e.LOADER_COMPLETE = "me.loader.onload", e.LOADER_PROGRESS = "me.loader.onProgress", e.KEYDOWN = "me.input.keydown", e.KEYUP = "me.input.keyup", e.GAMEPAD_CONNECTED = "gamepad.connected", e.GAMEPAD_DISCONNECTED = "gamepad.disconnected", e.GAMEPAD_UPDATE = "gamepad.update", e.POINTERMOVE = "me.event.pointermove", e.DRAGSTART = "me.game.dragstart", e.DRAGEND = "me.game.dragend", e.WINDOW_ONRESIZE = "window.onresize", e.VIEWPORT_ONRESIZE = "viewport.onresize", e.WINDOW_ONORIENTATION_CHANGE = "window.orientationchange", e.WINDOW_ONSCROLL = "window.onscroll", e.VIEWPORT_ONCHANGE = "viewport.onchange", e.publish = function(e, t) {
            for (var i = r[e], n = i ? i.length : 0; n--;) i[n].apply(window, t || [])
        }, e.subscribe = function(e, t) {
            return r[e] || (r[e] = []), r[e].push(t), [e, t]
        }, e.unsubscribe = function(e, t) {
            var i = r[t ? e : e[0]],
                n = i ? i.length : 0;
            for (t = t || e[1]; n--;) i[n] === t && i.splice(n, 1)
        }, e)
    }(),
    function() {
        "use strict";
        var e = function() {
            this.init()
        };
        e.prototype = {
            init: function() {
                var e = this || g;
                return e._counter = 1e3, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
            },
            volume: function(e) {
                var t = this || g;
                if (e = parseFloat(e), t.ctx || c(), void 0 !== e && 0 <= e && e <= 1) {
                    if (t._volume = e, t._muted) return t;
                    t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, g.ctx.currentTime);
                    for (var i = 0; i < t._howls.length; i++)
                        if (!t._howls[i]._webAudio)
                            for (var n = t._howls[i]._getSoundIds(), r = 0; r < n.length; r++) {
                                var s = t._howls[i]._soundById(n[r]);
                                s && s._node && (s._node.volume = s._volume * e)
                            }
                        return t
                }
                return t._volume
            },
            mute: function(e) {
                var t = this || g;
                t.ctx || c(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, g.ctx.currentTime);
                for (var i = 0; i < t._howls.length; i++)
                    if (!t._howls[i]._webAudio)
                        for (var n = t._howls[i]._getSoundIds(), r = 0; r < n.length; r++) {
                            var s = t._howls[i]._soundById(n[r]);
                            s && s._node && (s._node.muted = !!e || s._muted)
                        }
                    return t
            },
            unload: function() {
                for (var e = this || g, t = e._howls.length - 1; 0 <= t; t--) e._howls[t].unload();
                return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, c()), e
            },
            codecs: function(e) {
                return (this || g)._codecs[e.replace(/^x-/, "")]
            },
            _setup: function() {
                var t = this || g;
                if (t.state = t.ctx && t.ctx.state || "running", t._autoSuspend(), !t.usingWebAudio)
                    if ("undefined" != typeof Audio) try {
                        void 0 === (new Audio).oncanplaythrough && (t._canPlayEvent = "canplay")
                    } catch (e) {
                        t.noAudio = !0
                    } else t.noAudio = !0;
                try {
                    (new Audio).muted && (t.noAudio = !0)
                } catch (e) {}
                return t.noAudio || t._setupCodecs(), t
            },
            _setupCodecs: function() {
                var t = this || g,
                    e = null;
                try {
                    e = "undefined" != typeof Audio ? new Audio : null
                } catch (e) {
                    return t
                }
                if (!e || "function" != typeof e.canPlayType) return t;
                var i = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    n = t._navigator && t._navigator.userAgent.match(/OPR\/([0-6].)/g),
                    r = n && parseInt(n[0].split("/")[1], 10) < 33;
                return t._codecs = {
                    mp3: !(r || !i && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    mpeg: !!i,
                    opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    webm: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, t
            },
            _enableMobileAudio: function() {
                var i = this || g,
                    e = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(i._navigator && i._navigator.userAgent);
                if (!i._mobileEnabled && i.ctx && e) {
                    i._mobileEnabled = !1, i.mobileAutoEnable = !1, i._mobileUnloaded || 44100 === i.ctx.sampleRate || (i._mobileUnloaded = !0, i.unload()), i._scratchBuffer = i.ctx.createBuffer(1, 1, 22050);
                    var n = function(e) {
                        g._autoResume();
                        var t = i.ctx.createBufferSource();
                        t.buffer = i._scratchBuffer, t.connect(i.ctx.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), "function" == typeof i.ctx.resume && i.ctx.resume(), t.onended = function() {
                            t.disconnect(0), i._mobileEnabled = !0, document.removeEventListener("touchstart", n, !0), document.removeEventListener("touchend", n, !0), document.removeEventListener("click", n, !0);
                            for (var e = 0; e < i._howls.length; e++) i._howls[e]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", n, !0), document.addEventListener("touchend", n, !0), document.addEventListener("click", n, !0), i
                }
            },
            _autoSuspend: function() {
                var e = this;
                if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && g.usingWebAudio) {
                    for (var t = 0; t < e._howls.length; t++)
                        if (e._howls[t]._webAudio)
                            for (var i = 0; i < e._howls[t]._sounds.length; i++)
                                if (!e._howls[t]._sounds[i]._paused) return e;
                    return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                        e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function() {
                            e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                        }))
                    }, 3e4), e
                }
            },
            _autoResume: function() {
                var t = this;
                if (t.ctx && void 0 !== t.ctx.resume && g.usingWebAudio) return "running" === t.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state ? (t.ctx.resume().then(function() {
                    t.state = "running";
                    for (var e = 0; e < t._howls.length; e++) t._howls[e]._emit("resume")
                }), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
            }
        };
        var g = new e,
            t = function(e) {
                e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
            };
        t.prototype = {
            init: function(e) {
                var t = this;
                return g.ctx || c(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
                    fn: e.onend
                }] : [], t._onfade = e.onfade ? [{
                    fn: e.onfade
                }] : [], t._onload = e.onload ? [{
                    fn: e.onload
                }] : [], t._onloaderror = e.onloaderror ? [{
                    fn: e.onloaderror
                }] : [], t._onplayerror = e.onplayerror ? [{
                    fn: e.onplayerror
                }] : [], t._onpause = e.onpause ? [{
                    fn: e.onpause
                }] : [], t._onplay = e.onplay ? [{
                    fn: e.onplay
                }] : [], t._onstop = e.onstop ? [{
                    fn: e.onstop
                }] : [], t._onmute = e.onmute ? [{
                    fn: e.onmute
                }] : [], t._onvolume = e.onvolume ? [{
                    fn: e.onvolume
                }] : [], t._onrate = e.onrate ? [{
                    fn: e.onrate
                }] : [], t._onseek = e.onseek ? [{
                    fn: e.onseek
                }] : [], t._onunlock = e.onunlock ? [{
                    fn: e.onunlock
                }] : [], t._onresume = [], t._webAudio = g.usingWebAudio && !t._html5, void 0 !== g.ctx && g.ctx && g.mobileAutoEnable && g._enableMobileAudio(), g._howls.push(t), t._autoplay && t._queue.push({
                    event: "play",
                    action: function() {
                        t.play()
                    }
                }), t._preload && t.load(), t
            },
            load: function() {
                var e = this,
                    t = null;
                if (g.noAudio) e._emit("loaderror", null, "No audio support.");
                else {
                    "string" == typeof e._src && (e._src = [e._src]);
                    for (var i = 0; i < e._src.length; i++) {
                        var n, r;
                        if (e._format && e._format[i]) n = e._format[i];
                        else {
                            if ("string" != typeof(r = e._src[i])) {
                                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }(n = /^data:audio\/([^;,]+);/i.exec(r)) || (n = /\.([^.]+)$/.exec(r.split("?", 1)[0])), n && (n = n[1].toLowerCase())
                        }
                        if (n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), n && g.codecs(n)) {
                            t = e._src[i];
                            break
                        }
                    }
                    if (t) return e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new s(e), e._webAudio && a(e), e;
                    e._emit("loaderror", null, "No codec support for selected audio sources.")
                }
            },
            play: function(t, i) {
                var n = this,
                    e = null;
                if ("number" == typeof t) e = t, t = null;
                else {
                    if ("string" == typeof t && "loaded" === n._state && !n._sprite[t]) return null;
                    if (void 0 === t) {
                        t = "__default";
                        for (var r = 0, s = 0; s < n._sounds.length; s++) n._sounds[s]._paused && !n._sounds[s]._ended && (r++, e = n._sounds[s]._id);
                        1 === r ? t = null : e = null
                    }
                }
                var o = e ? n._soundById(e) : n._inactiveSound();
                if (!o) return null;
                if (e && !t && (t = o._sprite || "__default"), "loaded" !== n._state) {
                    o._sprite = t, o._ended = !1;
                    var a = o._id;
                    return n._queue.push({
                        event: "play",
                        action: function() {
                            n.play(a)
                        }
                    }), a
                }
                if (e && !o._paused) return i || n._loadQueue("play"), o._id;
                n._webAudio && g._autoResume();
                var h = Math.max(0, 0 < o._seek ? o._seek : n._sprite[t][0] / 1e3),
                    l = Math.max(0, (n._sprite[t][0] + n._sprite[t][1]) / 1e3 - h),
                    d = 1e3 * l / Math.abs(o._rate);
                if (o._paused = !1, o._ended = !1, o._sprite = t, o._seek = h, o._start = n._sprite[t][0] / 1e3, o._stop = (n._sprite[t][0] + n._sprite[t][1]) / 1e3, o._loop = !(!o._loop && !n._sprite[t][2]), !(o._seek >= o._stop)) {
                    var c = o._node;
                    if (n._webAudio) {
                        var u = function() {
                            n._refreshBuffer(o);
                            var e = o._muted || n._muted ? 0 : o._volume;
                            c.gain.setValueAtTime(e, g.ctx.currentTime), o._playStart = g.ctx.currentTime, void 0 === c.bufferSource.start ? o._loop ? c.bufferSource.noteGrainOn(0, h, 86400) : c.bufferSource.noteGrainOn(0, h, l) : o._loop ? c.bufferSource.start(0, h, 86400) : c.bufferSource.start(0, h, l), d !== 1 / 0 && (n._endTimers[o._id] = setTimeout(n._ended.bind(n, o), d)), i || setTimeout(function() {
                                n._emit("play", o._id)
                            }, 0)
                        };
                        "running" === g.state ? u() : (n.once("resume", u), n._clearTimer(o._id))
                    } else {
                        var f = function() {
                                c.currentTime = h, c.muted = o._muted || n._muted || g._muted || c.muted, c.volume = o._volume * g.volume(), c.playbackRate = o._rate;
                                try {
                                    var e = c.play();
                                    if (e && "undefined" != typeof Promise && (e instanceof Promise || "function" == typeof e.then) ? (n._playLock = !0, e.then(function() {
                                            n._playLock = !1, i || n._emit("play", o._id)
                                        }).catch(function() {
                                            n._playLock = !1, n._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.")
                                        })) : i || n._emit("play", o._id), c.playbackRate = o._rate, c.paused) return void n._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                    "__default" !== t || o._loop ? n._endTimers[o._id] = setTimeout(n._ended.bind(n, o), d) : (n._endTimers[o._id] = function() {
                                        n._ended(o), c.removeEventListener("ended", n._endTimers[o._id], !1)
                                    }, c.addEventListener("ended", n._endTimers[o._id], !1))
                                } catch (e) {
                                    n._emit("playerror", o._id, e)
                                }
                            },
                            m = window && window.ejecta || !c.readyState && g._navigator.isCocoonJS;
                        if (3 <= c.readyState || m) f();
                        else {
                            var p = function() {
                                f(), c.removeEventListener(g._canPlayEvent, p, !1)
                            };
                            c.addEventListener(g._canPlayEvent, p, !1), n._clearTimer(o._id)
                        }
                    }
                    return o._id
                }
                n._ended(o)
            },
            pause: function(e) {
                var t = this;
                if ("loaded" !== t._state || t._playLock) return t._queue.push({
                    event: "pause",
                    action: function() {
                        t.pause(e)
                    }
                }), t;
                for (var i = t._getSoundIds(e), n = 0; n < i.length; n++) {
                    t._clearTimer(i[n]);
                    var r = t._soundById(i[n]);
                    if (r && !r._paused && (r._seek = t.seek(i[n]), r._rateSeek = 0, r._paused = !0, t._stopFade(i[n]), r._node))
                        if (t._webAudio) {
                            if (!r._node.bufferSource) continue;
                            void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), t._cleanBuffer(r._node)
                        } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                    arguments[1] || t._emit("pause", r ? r._id : null)
                }
                return t
            },
            stop: function(e, t) {
                var i = this;
                if ("loaded" !== i._state || i._playLock) return i._queue.push({
                    event: "stop",
                    action: function() {
                        i.stop(e)
                    }
                }), i;
                for (var n = i._getSoundIds(e), r = 0; r < n.length; r++) {
                    i._clearTimer(n[r]);
                    var s = i._soundById(n[r]);
                    s && (s._seek = s._start || 0, s._rateSeek = 0, s._paused = !0, s._ended = !0, i._stopFade(n[r]), s._node && (i._webAudio ? s._node.bufferSource && (void 0 === s._node.bufferSource.stop ? s._node.bufferSource.noteOff(0) : s._node.bufferSource.stop(0), i._cleanBuffer(s._node)) : isNaN(s._node.duration) && s._node.duration !== 1 / 0 || (s._node.currentTime = s._start || 0, s._node.pause())), t || i._emit("stop", s._id))
                }
                return i
            },
            mute: function(e, t) {
                var i = this;
                if ("loaded" !== i._state || i._playLock) return i._queue.push({
                    event: "mute",
                    action: function() {
                        i.mute(e, t)
                    }
                }), i;
                if (void 0 === t) {
                    if ("boolean" != typeof e) return i._muted;
                    i._muted = e
                }
                for (var n = i._getSoundIds(t), r = 0; r < n.length; r++) {
                    var s = i._soundById(n[r]);
                    s && (s._muted = e, s._interval && i._stopFade(s._id), i._webAudio && s._node ? s._node.gain.setValueAtTime(e ? 0 : s._volume, g.ctx.currentTime) : s._node && (s._node.muted = !!g._muted || e), i._emit("mute", s._id))
                }
                return i
            },
            volume: function() {
                var e, t, i, n = this,
                    r = arguments;
                if (0 === r.length) return n._volume;
                if (1 === r.length || 2 === r.length && void 0 === r[1] ? 0 <= n._getSoundIds().indexOf(r[0]) ? t = parseInt(r[0], 10) : e = parseFloat(r[0]) : 2 <= r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10)), !(void 0 !== e && 0 <= e && e <= 1)) return (i = t ? n._soundById(t) : n._sounds[0]) ? i._volume : 0;
                if ("loaded" !== n._state || n._playLock) return n._queue.push({
                    event: "volume",
                    action: function() {
                        n.volume.apply(n, r)
                    }
                }), n;
                void 0 === t && (n._volume = e), t = n._getSoundIds(t);
                for (var s = 0; s < t.length; s++)(i = n._soundById(t[s])) && (i._volume = e, r[2] || n._stopFade(t[s]), n._webAudio && i._node && !i._muted ? i._node.gain.setValueAtTime(e, g.ctx.currentTime) : i._node && !i._muted && (i._node.volume = e * g.volume()), n._emit("volume", i._id));
                return n
            },
            fade: function(e, t, i, n) {
                var r = this;
                if ("loaded" !== r._state || r._playLock) return r._queue.push({
                    event: "fade",
                    action: function() {
                        r.fade(e, t, i, n)
                    }
                }), r;
                r.volume(e, n);
                for (var s = r._getSoundIds(n), o = 0; o < s.length; o++) {
                    var a = r._soundById(s[o]);
                    if (a) {
                        if (n || r._stopFade(s[o]), r._webAudio && !a._muted) {
                            var h = g.ctx.currentTime,
                                l = h + i / 1e3;
                            a._volume = e, a._node.gain.setValueAtTime(e, h), a._node.gain.linearRampToValueAtTime(t, l)
                        }
                        r._startFadeInterval(a, e, t, i, s[o], void 0 === n)
                    }
                }
                return r
            },
            _startFadeInterval: function(t, i, n, r, e, s) {
                var o = this,
                    a = i,
                    h = n - i,
                    l = Math.abs(h / .01),
                    d = Math.max(4, 0 < l ? r / l : r),
                    c = Date.now();
                t._fadeTo = n, t._interval = setInterval(function() {
                    var e = (Date.now() - c) / r;
                    c = Date.now(), a += h * e, a = Math.max(0, a), a = Math.min(1, a), a = Math.round(100 * a) / 100, o._webAudio ? t._volume = a : o.volume(a, t._id, !0), s && (o._volume = a), (n < i && a <= n || i < n && n <= a) && (clearInterval(t._interval), t._interval = null, t._fadeTo = null, o.volume(n, t._id), o._emit("fade", t._id))
                }, d)
            },
            _stopFade: function(e) {
                var t = this,
                    i = t._soundById(e);
                return i && i._interval && (t._webAudio && i._node.gain.cancelScheduledValues(g.ctx.currentTime), clearInterval(i._interval), i._interval = null, t.volume(i._fadeTo, e), i._fadeTo = null, t._emit("fade", e)), t
            },
            loop: function() {
                var e, t, i, n = this,
                    r = arguments;
                if (0 === r.length) return n._loop;
                if (1 === r.length) {
                    if ("boolean" != typeof r[0]) return !!(i = n._soundById(parseInt(r[0], 10))) && i._loop;
                    e = r[0], n._loop = e
                } else 2 === r.length && (e = r[0], t = parseInt(r[1], 10));
                for (var s = n._getSoundIds(t), o = 0; o < s.length; o++)(i = n._soundById(s[o])) && (i._loop = e, n._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = e) && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop));
                return n
            },
            rate: function() {
                var e, t, i, n = this,
                    r = arguments;
                if (0 === r.length) t = n._sounds[0]._id;
                else if (1 === r.length) {
                    0 <= n._getSoundIds().indexOf(r[0]) ? t = parseInt(r[0], 10) : e = parseFloat(r[0])
                } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
                if ("number" != typeof e) return (i = n._soundById(t)) ? i._rate : n._rate;
                if ("loaded" !== n._state || n._playLock) return n._queue.push({
                    event: "rate",
                    action: function() {
                        n.rate.apply(n, r)
                    }
                }), n;
                void 0 === t && (n._rate = e), t = n._getSoundIds(t);
                for (var s = 0; s < t.length; s++)
                    if (i = n._soundById(t[s])) {
                        i._rateSeek = n.seek(t[s]), i._playStart = n._webAudio ? g.ctx.currentTime : i._playStart, i._rate = e, n._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, g.ctx.currentTime) : i._node && (i._node.playbackRate = e);
                        var o = n.seek(t[s]),
                            a = 1e3 * ((n._sprite[i._sprite][0] + n._sprite[i._sprite][1]) / 1e3 - o) / Math.abs(i._rate);
                        !n._endTimers[t[s]] && i._paused || (n._clearTimer(t[s]), n._endTimers[t[s]] = setTimeout(n._ended.bind(n, i), a)), n._emit("rate", i._id)
                    }
                return n
            },
            seek: function() {
                var e, t, i = this,
                    n = arguments;
                if (0 === n.length) t = i._sounds[0]._id;
                else if (1 === n.length) {
                    0 <= i._getSoundIds().indexOf(n[0]) ? t = parseInt(n[0], 10) : i._sounds.length && (t = i._sounds[0]._id, e = parseFloat(n[0]))
                } else 2 === n.length && (e = parseFloat(n[0]), t = parseInt(n[1], 10));
                if (void 0 === t) return i;
                if ("loaded" !== i._state || i._playLock) return i._queue.push({
                    event: "seek",
                    action: function() {
                        i.seek.apply(i, n)
                    }
                }), i;
                var r = i._soundById(t);
                if (r) {
                    if (!("number" == typeof e && 0 <= e)) {
                        if (i._webAudio) {
                            var s = i.playing(t) ? g.ctx.currentTime - r._playStart : 0,
                                o = r._rateSeek ? r._rateSeek - r._seek : 0;
                            return r._seek + (o + s * Math.abs(r._rate))
                        }
                        return r._node.currentTime
                    }
                    var a = i.playing(t);
                    a && i.pause(t, !0), r._seek = e, r._ended = !1, i._clearTimer(t), !i._webAudio && r._node && (r._node.currentTime = e);
                    var h = function() {
                        i._emit("seek", t), a && i.play(t, !0)
                    };
                    if (a && !i._webAudio) {
                        var l = function() {
                            i._playLock ? setTimeout(l, 0) : h()
                        };
                        setTimeout(l, 0)
                    } else h()
                }
                return i
            },
            playing: function(e) {
                if ("number" == typeof e) {
                    var t = this._soundById(e);
                    return !!t && !t._paused
                }
                for (var i = 0; i < this._sounds.length; i++)
                    if (!this._sounds[i]._paused) return !0;
                return !1
            },
            duration: function(e) {
                var t = this._duration,
                    i = this._soundById(e);
                return i && (t = this._sprite[i._sprite][1] / 1e3), t
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var e = this, t = e._sounds, i = 0; i < t.length; i++) {
                    if (t[i]._paused || e.stop(t[i]._id), !e._webAudio) /MSIE |Trident\//.test(g._navigator && g._navigator.userAgent) || (t[i]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), t[i]._node.removeEventListener("error", t[i]._errorFn, !1), t[i]._node.removeEventListener(g._canPlayEvent, t[i]._loadFn, !1);
                    delete t[i]._node, e._clearTimer(t[i]._id)
                }
                var n = g._howls.indexOf(e);
                0 <= n && g._howls.splice(n, 1);
                var r = !0;
                for (i = 0; i < g._howls.length; i++)
                    if (g._howls[i]._src === e._src) {
                        r = !1;
                        break
                    }
                return o && r && delete o[e._src], g.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null
            },
            on: function(e, t, i, n) {
                var r = this["_on" + e];
                return "function" == typeof t && r.push(n ? {
                    id: i,
                    fn: t,
                    once: n
                } : {
                    id: i,
                    fn: t
                }), this
            },
            off: function(e, t, i) {
                var n = this,
                    r = n["_on" + e],
                    s = 0;
                if ("number" == typeof t && (i = t, t = null), t || i)
                    for (s = 0; s < r.length; s++) {
                        var o = i === r[s].id;
                        if (t === r[s].fn && o || !t && o) {
                            r.splice(s, 1);
                            break
                        }
                    } else if (e) n["_on" + e] = [];
                    else {
                        var a = Object.keys(n);
                        for (s = 0; s < a.length; s++) 0 === a[s].indexOf("_on") && Array.isArray(n[a[s]]) && (n[a[s]] = [])
                    }
                return n
            },
            once: function(e, t, i) {
                return this.on(e, t, i, 1), this
            },
            _emit: function(e, t, i) {
                for (var n = this, r = n["_on" + e], s = r.length - 1; 0 <= s; s--) r[s].id && r[s].id !== t && "load" !== e || (setTimeout(function(e) {
                    e.call(this, t, i)
                }.bind(n, r[s].fn), 0), r[s].once && n.off(e, r[s].fn, r[s].id));
                return n._loadQueue(e), n
            },
            _loadQueue: function(e) {
                var t = this;
                if (0 < t._queue.length) {
                    var i = t._queue[0];
                    i.event === e && (t._queue.shift(), t._loadQueue()), e || i.action()
                }
                return t
            },
            _ended: function(e) {
                var t = this,
                    i = e._sprite;
                if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
                var n = !(!e._loop && !t._sprite[i][2]);
                if (t._emit("end", e._id), !t._webAudio && n && t.stop(e._id, !0).play(e._id), t._webAudio && n) {
                    t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = g.ctx.currentTime;
                    var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                    t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), r)
                }
                return t._webAudio && !n && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), g._autoSuspend()), t._webAudio || n || t.stop(e._id, !0), t
            },
            _clearTimer: function(e) {
                var t = this;
                if (t._endTimers[e]) {
                    if ("function" != typeof t._endTimers[e]) clearTimeout(t._endTimers[e]);
                    else {
                        var i = t._soundById(e);
                        i && i._node && i._node.removeEventListener("ended", t._endTimers[e], !1)
                    }
                    delete t._endTimers[e]
                }
                return t
            },
            _soundById: function(e) {
                for (var t = 0; t < this._sounds.length; t++)
                    if (e === this._sounds[t]._id) return this._sounds[t];
                return null
            },
            _inactiveSound: function() {
                var e = this;
                e._drain();
                for (var t = 0; t < e._sounds.length; t++)
                    if (e._sounds[t]._ended) return e._sounds[t].reset();
                return new s(e)
            },
            _drain: function() {
                var e = this,
                    t = e._pool,
                    i = 0,
                    n = 0;
                if (!(e._sounds.length < t)) {
                    for (n = 0; n < e._sounds.length; n++) e._sounds[n]._ended && i++;
                    for (n = e._sounds.length - 1; 0 <= n; n--) {
                        if (i <= t) return;
                        e._sounds[n]._ended && (e._webAudio && e._sounds[n]._node && e._sounds[n]._node.disconnect(0), e._sounds.splice(n, 1), i--)
                    }
                }
            },
            _getSoundIds: function(e) {
                if (void 0 !== e) return [e];
                for (var t = [], i = 0; i < this._sounds.length; i++) t.push(this._sounds[i]._id);
                return t
            },
            _refreshBuffer: function(e) {
                return e._node.bufferSource = g.ctx.createBufferSource(), e._node.bufferSource.buffer = o[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, g.ctx.currentTime), this
            },
            _cleanBuffer: function(e) {
                if (g._scratchBuffer && e.bufferSource) {
                    e.bufferSource.onended = null, e.bufferSource.disconnect(0);
                    try {
                        e.bufferSource.buffer = g._scratchBuffer
                    } catch (e) {}
                }
                return e.bufferSource = null, this
            }
        };
        var s = function(e) {
            this._parent = e, this.init()
        };
        s.prototype = {
            init: function() {
                var e = this,
                    t = e._parent;
                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++g._counter, t._sounds.push(e), e.create(), e
            },
            create: function() {
                var e = this,
                    t = e._parent,
                    i = g._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return t._webAudio ? (e._node = void 0 === g.ctx.createGain ? g.ctx.createGainNode() : g.ctx.createGain(), e._node.gain.setValueAtTime(i, g.ctx.currentTime), e._node.paused = !0, e._node.connect(g.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(g._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = i * g.volume(), e._node.load()), e
            },
            reset: function() {
                var e = this,
                    t = e._parent;
                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++g._counter, e
            },
            _errorListener: function() {
                var e = this;
                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
            },
            _loadListener: function() {
                var e = this._parent;
                e._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                    __default: [0, 1e3 * e._duration]
                }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), this._node.removeEventListener(g._canPlayEvent, this._loadFn, !1)
            }
        };
        var o = {},
            a = function(t) {
                var e = t._src;
                if (o[e]) return t._duration = o[e].duration, void d(t);
                if (/^data:[^;]+;base64,/.test(e)) {
                    for (var i = atob(e.split(",")[1]), n = new Uint8Array(i.length), r = 0; r < i.length; ++r) n[r] = i.charCodeAt(r);
                    l(n.buffer, t)
                } else {
                    var s = new XMLHttpRequest;
                    s.open("GET", e, !0), s.withCredentials = t._xhrWithCredentials, s.responseType = "arraybuffer", s.onload = function() {
                        var e = (s.status + "")[0];
                        "0" === e || "2" === e || "3" === e ? l(s.response, t) : t._emit("loaderror", null, "Failed loading audio file with status: " + s.status + ".")
                    }, s.onerror = function() {
                        t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete o[e], t.load())
                    }, h(s)
                }
            },
            h = function(t) {
                try {
                    t.send()
                } catch (e) {
                    t.onerror()
                }
            },
            l = function(e, t) {
                var i = function() {
                        t._emit("loaderror", null, "Decoding audio data failed.")
                    },
                    n = function(e) {
                        e && 0 < t._sounds.length ? (o[t._src] = e, d(t, e)) : i()
                    };
                "undefined" != typeof Promise && 1 === g.ctx.decodeAudioData.length ? g.ctx.decodeAudioData(e).then(n).catch(i) : g.ctx.decodeAudioData(e, n, i)
            },
            d = function(e, t) {
                t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                    __default: [0, 1e3 * e._duration]
                }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
            },
            c = function() {
                try {
                    "undefined" != typeof AudioContext ? g.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? g.ctx = new webkitAudioContext : g.usingWebAudio = !1
                } catch (e) {
                    g.usingWebAudio = !1
                }
                var e = /iP(hone|od|ad)/.test(g._navigator && g._navigator.platform),
                    t = g._navigator && g._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    i = t ? parseInt(t[1], 10) : null;
                if (e && i && i < 9) {
                    var n = /safari/.test(g._navigator && g._navigator.userAgent.toLowerCase());
                    (g._navigator && g._navigator.standalone && !n || g._navigator && !g._navigator.standalone && !n) && (g.usingWebAudio = !1)
                }
                g.usingWebAudio && (g.masterGain = void 0 === g.ctx.createGain ? g.ctx.createGainNode() : g.ctx.createGain(), g.masterGain.gain.setValueAtTime(g._muted ? 0 : 1, g.ctx.currentTime), g.masterGain.connect(g.ctx.destination)), g._setup()
            };
        "function" == typeof define && define.amd && define([], function() {
            return {
                Howler: g,
                Howl: t
            }
        }), "undefined" != typeof exports && (exports.Howler = g, exports.Howl = t), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = g, window.Howl = t, window.Sound = s) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = g, global.Howl = t, global.Sound = s)
    }(),
    function() {
        var e;
        me.plugins = {}, me.plugin = ((e = {}).Base = me.Object.extend({
            init: function() {
                this.version = "6.1.0"
            }
        }), e.patch = function(e, t, i) {
            if (void 0 !== e.prototype && (e = e.prototype), "function" == typeof e[t]) {
                var n = e[t];
                Object.defineProperty(e, t, {
                    configurable: !0,
                    value: (r = i, function() {
                        this._patched = n;
                        var e = r.apply(this, arguments);
                        return this._patched = null, e
                    })
                })
            } else console.error(t + " is not an existing function");
            var r
        }, e.register = function(e, t) {
            me.plugin[t] && console.error("plugin " + t + " already registered");
            var i = [];
            2 < arguments.length && (i = Array.prototype.slice.call(arguments, 1));
            var n = new((i[0] = e).bind.apply(e, i));
            if (!(n && n instanceof me.plugin.Base)) throw new me.Error("Plugin should extend the me.plugin.Base Class !");
            if (0 < me.sys.checkVersion(n.version)) throw new me.Error("Plugin version mismatch, expected: " + n.version + ", got: " + me.version);
            me.plugins[t] = n
        }, e)
    }(), me.DraggableEntity = function(n, r, s, o) {
        "use strict";
        return n.extend({
            init: function(e, t, i) {
                n.prototype.init.apply(this, [e, t, i]), this.dragging = !1, this.dragId = null, this.grabOffset = new o(0, 0), this.onPointerEvent = r.registerPointerEvent, this.removePointerEvent = r.releasePointerEvent, this.initEvents()
            },
            initEvents: function() {
                var i = this;
                this.mouseDown = function(e) {
                    this.translatePointerEvent(e, s.DRAGSTART)
                }, this.mouseUp = function(e) {
                    this.translatePointerEvent(e, s.DRAGEND)
                }, this.onPointerEvent("pointerdown", this, this.mouseDown.bind(this)), this.onPointerEvent("pointerup", this, this.mouseUp.bind(this)), s.subscribe(s.POINTERMOVE, this.dragMove.bind(this)), s.subscribe(s.DRAGSTART, function(e, t) {
                    t === i && i.dragStart(e)
                }), s.subscribe(s.DRAGEND, function(e, t) {
                    t === i && i.dragEnd(e)
                })
            },
            translatePointerEvent: function(e, t) {
                s.publish(t, [e, this])
            },
            dragStart: function(e) {
                if (!1 === this.dragging) return this.dragging = !0, this.grabOffset.set(e.gameX, e.gameY), this.grabOffset.sub(this.pos), !1
            },
            dragMove: function(e) {
                !0 === this.dragging && (this.pos.set(e.gameX, e.gameY, this.pos.z), this.pos.sub(this.grabOffset))
            },
            dragEnd: function() {
                if (!0 === this.dragging) return this.dragging = !1
            },
            destroy: function() {
                s.unsubscribe(s.POINTERMOVE, this.dragMove), s.unsubscribe(s.DRAGSTART, this.dragStart), s.unsubscribe(s.DRAGEND, this.dragEnd), this.removePointerEvent("pointerdown", this), this.removePointerEvent("pointerup", this)
            }
        })
    }(me.Entity, me.input, me.event, me.Vector2d), me.DroptargetEntity = function(n, r) {
        "use strict";
        return n.extend({
            init: function(e, t, i) {
                this.CHECKMETHOD_OVERLAP = "overlaps", this.CHECKMETHOD_CONTAINS = "contains", this.checkMethod = null, n.prototype.init.apply(this, [e, t, i]), r.subscribe(r.DRAGEND, this.checkOnMe.bind(this)), this.checkMethod = this[this.CHECKMETHOD_OVERLAP]
            },
            setCheckMethod: function(e) {
                void 0 !== this[e] && (this.checkMethod = this[e])
            },
            checkOnMe: function(e, t) {
                t && this.checkMethod(t.getBounds()) && this.drop(t)
            },
            drop: function() {},
            destroy: function() {
                r.unsubscribe(r.DRAGEND, this.checkOnMe)
            }
        })
    }(me.Entity, me.event), me.CollectableEntity = me.Entity.extend({
        init: function(e, t, i) {
            me.Entity.prototype.init.apply(this, [e, t, i]), this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT
        }
    }), me.LevelEntity = me.Entity.extend({
        init: function(e, t, i) {
            me.Entity.prototype.init.apply(this, [e, t, i]), this.nextlevel = i.to, this.fade = i.fade, this.duration = i.duration, this.fading = !1, this.name = "levelEntity", this.gotolevel = i.to, this.loadLevelSettings = {}, ["container", "onLoaded", "flatten", "setViewportBounds"].forEach(function(e) {
                void 0 !== i[e] && (this.loadLevelSettings[e] = i[e])
            }.bind(this)), this.body.collisionType = me.collision.types.ACTION_OBJECT
        },
        getlevelSettings: function() {
            return "string" == typeof this.loadLevelSettings.container && (this.loadLevelSettings.container = me.game.world.getChildByName(this.loadLevelSettings.container)[0]), this.loadLevelSettings
        },
        onFadeComplete: function() {
            me.levelDirector.loadLevel(this.gotolevel, this.getlevelSettings()), me.game.viewport.fadeOut(this.fade, this.duration)
        },
        goTo: function(e) {
            this.gotolevel = e || this.nextlevel, this.fade && this.duration ? this.fading || (this.fading = !0, me.game.viewport.fadeIn(this.fade, this.duration, this.onFadeComplete.bind(this))) : me.levelDirector.loadLevel(this.gotolevel, this.getlevelSettings())
        },
        onCollision: function() {
            return "levelEntity" === this.name && this.goTo.apply(this), !1
        }
    }),
    function() {
        var e, t, i = (e = me.video.createCanvas(1, 1), (t = e.getContext("2d")).fillStyle = "#fff", t.fillRect(0, 0, 1, 1), e);
        me.ParticleEmitterSettings = {
            width: 0,
            height: 0,
            image: i,
            totalParticles: 50,
            angle: Math.PI / 2,
            angleVariation: 0,
            minLife: 1e3,
            maxLife: 3e3,
            speed: 2,
            speedVariation: 1,
            minRotation: 0,
            maxRotation: 0,
            minStartScale: 1,
            maxStartScale: 1,
            minEndScale: 0,
            maxEndScale: 0,
            gravity: 0,
            wind: 0,
            followTrajectory: !1,
            textureAdditive: !1,
            onlyInViewport: !0,
            floating: !1,
            maxParticles: 10,
            frequency: 100,
            duration: 1 / 0,
            framesToSkip: 0
        }, me.ParticleEmitter = me.Rect.extend({
            init: function(e, t, i) {
                this._stream = !1, this._frequencyTimer = 0, this._durationTimer = 0, this._enabled = !1, this.isRenderable = !1, me.Rect.prototype.init.apply(this, [e, t, 1 / 0, 1 / 0]), this.autoSort = !1, this.container = new me.ParticleContainer(this), Object.defineProperty(this.pos, "z", {
                    get: function() {
                        return this.container.pos.z
                    }.bind(this),
                    set: function(e) {
                        this.container.pos.z = e
                    }.bind(this),
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(this, "floating", {
                    get: function() {
                        return this.container.floating
                    },
                    set: function(e) {
                        this.container.floating = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), this.reset(i)
            },
            onActivateEvent: function() {
                this.ancestor.addChild(this.container), this.container.pos.z = this.pos.z, this.ancestor.autoSort || this.ancestor.sort()
            },
            onDeactivateEvent: function() {
                this.ancestor.hasChild(this.container) && this.ancestor.removeChildNow(this.container)
            },
            destroy: function() {
                this.reset()
            },
            getRandomPointX: function() {
                return this.pos.x + me.Math.randomFloat(0, this.width)
            },
            getRandomPointY: function() {
                return this.pos.y + me.Math.randomFloat(0, this.height)
            },
            reset: function(e) {
                e = e || {};
                var t = me.ParticleEmitterSettings,
                    i = "number" == typeof e.width ? e.width : t.width,
                    n = "number" == typeof e.height ? e.height : t.height;
                this.resize(i, n), Object.assign(this, t, e), this.container.destroy()
            },
            addParticles: function(e) {
                for (var t = 0; t < ~~e; t++) {
                    var i = me.pool.pull("me.Particle", this);
                    this.container.addChild(i)
                }
            },
            isRunning: function() {
                return this._enabled && this._stream
            },
            streamParticles: function(e) {
                this._enabled = !0, this._stream = !0, this.frequency = Math.max(this.frequency, 1), this._durationTimer = "number" == typeof e ? e : this.duration
            },
            stopStream: function() {
                this._enabled = !1
            },
            burstParticles: function(e) {
                this._enabled = !0, this._stream = !1, this.addParticles("number" == typeof e ? e : this.totalParticles), this._enabled = !1
            },
            update: function(e) {
                if (this._enabled && this._stream) {
                    if (this._durationTimer !== 1 / 0 && (this._durationTimer -= e, this._durationTimer <= 0)) return this.stopStream(), !1;
                    this._frequencyTimer += e;
                    var t = this.container.children.length;
                    t < this.totalParticles && this._frequencyTimer >= this.frequency && (t + this.maxParticles <= this.totalParticles ? this.addParticles(this.maxParticles) : this.addParticles(this.totalParticles - t), this._frequencyTimer = 0)
                }
                return !0
            }
        })
    }(), me.ParticleContainer = me.Container.extend({
        init: function(e) {
            me.Container.prototype.init.apply(this, [me.game.viewport.pos.x, me.game.viewport.pos.y, me.game.viewport.width, me.game.viewport.height]), this.autoSort = !1, this._updateCount = 0, this._dt = 0, this._emitter = e, this.autoTransform = !1, this.anchorPoint.set(0, 0), this.isKinematic = !0
        },
        update: function(e) {
            if (++this._updateCount > this._emitter.framesToSkip && (this._updateCount = 0), 0 < this._updateCount) return this._dt += e, !1;
            e += this._dt, this._dt = 0;
            for (var t = me.game.viewport, i = this.children.length - 1; 0 <= i; --i) {
                var n = this.children[i];
                n.inViewport = this.floating || t.isVisible(n.getBounds()), n.update(e) || this.removeChildNow(n)
            }
            return !0
        },
        draw: function(e, t) {
            if (0 < this.children.length) {
                var i, n = e.getContext();
                this._emitter.textureAdditive && (i = n.globalCompositeOperation, n.globalCompositeOperation = "lighter"), me.Container.prototype.draw.apply(this, [e, t]), this._emitter.textureAdditive && (n.globalCompositeOperation = i)
            }
        }
    }), window, me.Particle = me.Renderable.extend({
        init: function(e) {
            me.Renderable.prototype.init.apply(this, [e.getRandomPointX(), e.getRandomPointY(), e.image.width, e.image.height]), this.alwaysUpdate = !0, this.image = e.image;
            var t = e.angle + (0 < e.angleVariation ? (me.Math.randomFloat(0, 2) - 1) * e.angleVariation : 0),
                i = e.speed + (0 < e.speedVariation ? (me.Math.randomFloat(0, 2) - 1) * e.speedVariation : 0);
            this.vel = new me.Vector2d(i * Math.cos(t), -i * Math.sin(t)), this.life = me.Math.randomFloat(e.minLife, e.maxLife), this.startLife = this.life, this.startScale = me.Math.clamp(me.Math.randomFloat(e.minStartScale, e.maxStartScale), e.minStartScale, e.maxStartScale), this.endScale = me.Math.clamp(me.Math.randomFloat(e.minEndScale, e.maxEndScale), e.minEndScale, e.maxEndScale), this.gravity = e.gravity, this.wind = e.wind, this.followTrajectory = e.followTrajectory, this.onlyInViewport = e.onlyInViewport, this.pos.z = e.z, this._deltaInv = me.sys.fps / 1e3, e.followTrajectory || (this.angle = me.Math.randomFloat(e.minRotation, e.maxRotation))
        },
        update: function(e) {
            var t = e * this._deltaInv;
            this.life = this.life > e ? this.life - e : 0;
            var i = this.life / this.startLife,
                n = this.startScale;
            this.startScale > this.endScale ? n = (n *= i) < this.endScale ? this.endScale : n : this.startScale < this.endScale && (n = (n /= i) > this.endScale ? this.endScale : n), this.alpha = i, this.vel.x += this.wind * t, this.vel.y += this.gravity * t;
            var r = this.followTrajectory ? Math.atan2(this.vel.y, this.vel.x) : this.angle;
            return this.pos.x += this.vel.x * t, this.pos.y += this.vel.y * t, this.currentTransform.setTransform(n, 0, 0, 0, n, 0, this.pos.x, this.pos.y, 1).rotate(r), (this.inViewport || !this.onlyInViewport) && 0 < this.life
        },
        preDraw: function(e) {
            e.save(), e.setGlobalAlpha(e.globalAlpha() * this.alpha), e.transform(this.currentTransform)
        },
        draw: function(e) {
            var t = this.width,
                i = this.height;
            e.drawImage(this.image, 0, 0, t, i, -t / 2, -i / 2, t, i)
        }
    }),
    function() {
        me.debug = me.debug || {};
        var r = me.Object.extend({
                init: function(e) {
                    this.stats = {}, this.reset(e)
                },
                reset: function(e) {
                    var t = this;
                    (e || Object.keys(this.stats)).forEach(function(e) {
                        t.stats[e] = 0
                    })
                },
                inc: function(e, t) {
                    this.stats[e] += t || 1
                },
                get: function(e) {
                    return this.stats[e]
                }
            }),
            s = 'info face="PressStart2P" size=10 bold=0 italic=0 charset= unicode= stretchH=100 smooth=1 aa=1 padding=1,1,1,1 spacing=0,0 outline=0\ncommon lineHeight=10 base=10 scaleW=128 scaleH=128 pages=1 packed=0\npage id=0 file="PressStart2P.png"\nchars count=95\nchar id=32 x=1 y=1 width=0 height=0 xoffset=0 yoffset=10 xadvance=10 page=0 chnl=15\nchar id=33 x=1 y=2 width=5 height=10 xoffset=3 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=34 x=1 y=13 width=8 height=5 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=35 x=7 y=1 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=36 x=1 y=19 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=37 x=1 y=30 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=38 x=1 y=41 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=39 x=10 y=12 width=4 height=5 xoffset=3 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=40 x=1 y=52 width=6 height=10 xoffset=3 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=41 x=1 y=63 width=6 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=42 x=1 y=74 width=10 height=8 xoffset=0 yoffset=1 xadvance=10 page=0 chnl=15\nchar id=43 x=8 y=52 width=9 height=8 xoffset=1 yoffset=1 xadvance=10 page=0 chnl=15\nchar id=44 x=8 y=61 width=5 height=5 xoffset=1 yoffset=6 xadvance=10 page=0 chnl=15\nchar id=45 x=8 y=67 width=9 height=2 xoffset=1 yoffset=4 xadvance=10 page=0 chnl=15\nchar id=46 x=14 y=61 width=4 height=4 xoffset=3 yoffset=6 xadvance=10 page=0 chnl=15\nchar id=47 x=12 y=18 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=48 x=18 y=1 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=49 x=12 y=29 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=50 x=12 y=40 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=51 x=22 y=29 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=52 x=23 y=12 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=53 x=29 y=1 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=54 x=1 y=83 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=55 x=1 y=94 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=56 x=1 y=105 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=57 x=1 y=116 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=58 x=18 y=51 width=4 height=8 xoffset=3 yoffset=1 xadvance=10 page=0 chnl=15\nchar id=59 x=12 y=70 width=5 height=9 xoffset=1 yoffset=1 xadvance=10 page=0 chnl=15\nchar id=60 x=12 y=80 width=8 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=61 x=23 y=23 width=10 height=5 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=62 x=18 y=66 width=8 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=63 x=23 y=40 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=64 x=33 y=29 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=65 x=23 y=51 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=66 x=34 y=12 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=67 x=40 y=1 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=68 x=12 y=91 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=69 x=21 y=77 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=70 x=27 y=62 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=71 x=34 y=40 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=72 x=34 y=51 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=73 x=44 y=23 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=74 x=45 y=12 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=75 x=51 y=1 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=76 x=12 y=102 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=77 x=12 y=113 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=78 x=22 y=102 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=79 x=23 y=88 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=80 x=32 y=73 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=81 x=38 y=62 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=82 x=23 y=113 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=83 x=33 y=99 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=84 x=34 y=84 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=85 x=43 y=73 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=86 x=34 y=110 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=87 x=44 y=84 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=88 x=44 y=95 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=89 x=45 y=106 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=90 x=45 y=117 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=91 x=45 y=34 width=6 height=10 xoffset=3 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=92 x=45 y=45 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=93 x=52 y=34 width=6 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=94 x=34 y=23 width=8 height=4 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=95 x=34 y=121 width=10 height=2 xoffset=0 yoffset=9 xadvance=10 page=0 chnl=15\nchar id=96 x=15 y=12 width=4 height=4 xoffset=4 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=97 x=54 y=23 width=10 height=7 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=98 x=56 y=12 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=99 x=62 y=1 width=10 height=7 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=100 x=49 y=56 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=101 x=56 y=45 width=10 height=8 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=102 x=59 y=31 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=103 x=54 y=67 width=10 height=9 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=104 x=60 y=54 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=105 x=67 y=42 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=106 x=67 y=9 width=8 height=11 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=107 x=69 y=21 width=10 height=10 xoffset=0 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=108 x=76 y=1 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=109 x=76 y=12 width=10 height=8 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=110 x=69 y=32 width=10 height=8 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=111 x=86 y=1 width=10 height=8 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=112 x=97 y=1 width=10 height=9 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=113 x=108 y=1 width=10 height=9 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=114 x=87 y=10 width=9 height=8 xoffset=1 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=115 x=97 y=11 width=10 height=7 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=116 x=108 y=11 width=9 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=117 x=87 y=19 width=10 height=7 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=118 x=98 y=19 width=9 height=8 xoffset=1 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=119 x=80 y=27 width=10 height=7 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=120 x=108 y=22 width=10 height=8 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=121 x=91 y=28 width=10 height=9 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=122 x=80 y=35 width=10 height=7 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=123 x=118 y=11 width=6 height=10 xoffset=3 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=124 x=102 y=28 width=4 height=10 xoffset=4 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=125 x=119 y=22 width=6 height=10 xoffset=1 yoffset=0 xadvance=10 page=0 chnl=15\nchar id=126 x=91 y=38 width=10 height=5 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15\nchar id=32 x=0 y=0 width=0 height=0 xoffset=0 yoffset=3 xadvance=10 page=0 chnl=15',
            o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAdhklEQVR42u1deXMUR5bnG8xH8EfgI+g/h405zCFzI3QLBJYDhgVjQBJICF1ugcVlHCtzXwZx2d6IAYqN9eA/20ji8hh6ltmxHeuI6fEV6zGI3Pxl9at+nZ1ZVdlqYSzqRWSoVZ2dnZWZnfXeL3/vvWnTEkkkTLp37Rz+9JOPBQpe7x18L0v/v/nmmha9Pq7R+yjHjx0Va9asmc7r8DZMJU67prq2vun3YLpuKryubUxQ8L1x6sXpd5zxKLXfVtE7QA3s3Llj+MKF4ayQ8vTpU3Fh+Hz285s31WuI/Fxm25bNrdQOXuPa/fv3BMp3330nHj16JA7u35devbpxDtX7+OMrgoTqUvnyy/tizeqmVt4/ahffi/ZQD3/1PvB2qY2dnfIeZL9xDW0PDPR7+r3pfaB+UF1dcB3voz8oH1+5LPQ6tvYfPfpv9ZlB2e8thn4X1i2+R3u7j4I2BgbeFU4LgDpAN/TBB4fUjV++fCl/fXxcjI8/CcrTp+Pq+sGDB1Tdxsb6lj17BtQkNTXUD62qr6+4dOlCULepsc5rbKybo7crr2fwHi9UT28Xfdi7d08abeOv3gfebmNDXaqpoa61oA+yX42NNWo3unTpYq7uuKivrxmqr6+uQIkzXmgDfaCxwHfodWztD+7Znfb781QcOLDf7/elfL8b6utl3foKlL2D8h7Hc/d44EDsuv19vW4LAAOHD9IN0YDW1axsHUj1Z/zJfyxS/X2ZC8PnxJMnv6p6dbUrvdra6irUvXjxQrBQ8Dn6PD5DE7B//15Pr4t20R4V1K2tWTlUW1v7UlG77PvwF+2jWPqQvnN7VLWJv2izvjo/wcPD54N7XrliWWspj8fxJ37fMSb6e7b2B98b8PA5XJe7gBoP+YsO6tbIflbLfqLs3p1Ko66/8Adj1+3u7nJbAP7AjfsTIBuhiVIdlp3El+E9dP7cR2fEk8f/UvX4jbnc8Ntvb/LwevC93V5fb3ema2eHkFu1OHb0sGr39u0x0dXV4blOFK97e2xE/PB9Vtzwromuzg6vZtmyAj3ko4/OBnWXLFpU0gJ48vhX8fjxL+L8ubNFA25rX/6ggvEYGEipezx//lxQd0z2e3T0CzE68oV4+OAvatx7enZl3nxzbQp1N23a4J08eSJrq4vrnXIsnW4EA6cmWU4sJuStt95M0Xu7dw8ECwDPvrNnTql6+H/JkvyNnTv3Uf6G2XV8hjqGtsL6Yapra9ckvC7aweSMjqSxoMWyZQsLFsC2bVvF9WvX1C/m1KkT4tRJVk6dFKdlWb9unVWZWrp0cRXG4fGv/yfOnj1VNOC29q9d/ZPqH9p/q6VF3ePZs/nFckaO75nTp8Tp0yfV3zNnTotFi94ouO/169d7uM7rXr92VdDCam9vc1sAGDh88PGvvxQM8oYN64ePHTuapQE9evRw9vq1PwU7QGdnR2b16tWq/r59g+Lhw4e0AuV1Xwnr7+9VK35sdFS0tbV61G5K/hL6+/u8hQsXBM97qotBw/th7eIvPi8fMR714ezZM8FAjshfxff//Ifq64OvvhQ93V1p/l20E42MjMi6t8TIrS/8MvKF/7+8jvdtY/bGGwta1WNLto8JMNUJa3/27JnBOJ+Wk0j6wrx580rajXp7uz161GLxOX0Yg4wJQudwY6aOKf0g98yjlYbrfX29apDmzp1b0dW1M011d2xvz8yb93or/uJ/+XpI1pmutzt//use6vG6Lu3yuoUD+XoaA877i++S7c2ZiFks22jB96MtGg/8suke6B5N8uqrr1ZQmTFjxkt0/cSJE4FixxeGi+za1eWRdbZ589vC9aaGcUP6AKEz7W2tvgYuB1X+gjMnjh8TvrY5LubMmunNnv1aVb7+a1W4FiwY/BJvydU+a9bQrFmzKmztBpaFQ7umuif5QMrvxPfw/kK6d+3y4owJsAtgGDqWwb+DW0bUfikTOGPGK61UsDhKWQCvvPJKFbWB104fppvCjeg3sHz58lRnZ6eHgtdNTY0e/W/6Ilyj91E2btzgvfzyy9OLn6FLhzZu/DdBhX8mTrumuqa+8Wt0D3HGZO3aVRXXr19TeIAn/+J/3/qoyfB+64X3h+MrLWubh2hBhQFev4lETeqLJo2NjdNXNTbIxV7vUWlurn3JtR0O8OzZM5C9efPPBUDTagZ4xUUNTcioDYl0qeeEFlKHcM0E9UZtqeWAQ+PA1mHwcJjU1dW0Kr0hpzvcvXtXEEjk0s8ADMrhHQCBCBBCIawjCpVcrSGjajzltTAk0oSgHj1yWEROLt+q+ORekV9Cz72mpgbVoQ+H/l38+c+fCaBQjXV1VuUKMDDgYHSCOs3hWlc41GpGpt4tgkNN8HCUVFevqNo98G468/ArtQju3rktqquXV1B7P//8s8hDwePiu+/+1wjxFmAYVcu86hVLjbsrRw0b6moy9XW1Hi91ddUFyCgQTiCmHIlU12QhpBMCQI/0lH17BxWCarxhTG4AzcrHwb17d1Rn7t+/L1at8j/EsYIVOUBm8eLKip6e7jSu6bZqvsN1c9BZE5SMDnM0MuhDDkq2Qb426e/rCSBqaVIKA+zs0UCZBkzTfSpGpbnmI4ljAv/TZN27dw/wbposo4sXhoUJ4s2DQY9DwSYAXH29PRkyt3184RcGuC0fql2ypAAZ5VYZYSe4d0Jha2pqpu9Bn3J19ueQxBAEbVw1WCVX6tgY3fjt4MYBPFAH31iQNxVJ+zRpr9QJK5Sc66wO4xJsi7Jn90Bah5JtIm39YCB6enYJV9iZy+LFiytgFqPe7bFRwcfqjtwR8IumyQI6akI8YZbSdy+IsO+bm1elBlIpD0hhKleOHzuSVRiK/P4d7e0FKCoWDCGR/3njugCqikK7zKFDB8Vf/5pR/e/tKQT3igSTSyu1csECb+RWWvjgzYiorKxUE7tqVZPX1dWlymuvvRZLUaROYFAIYYwDJQPGRRkbvaUgTtTFDYfehBRAyjQJXTs7hd4u+oCJek+WUyePZ3XYmQvuGzgCTQCHeG+PjYnFixZ5hDYCjTNBvPKvICAozDxsb2vLnj51SqGDUaghCQC7MCSyo2O7uHHDUwsA6K20UOxHxNrkpjZt2qheb9q0yZs5c+b0UhVHDs2ePXtadQTQLEHJH8nFQB0z1UXxvGtFdW2yY0d78MvesWO7cIWoAeIAeEIB4KMWgHx/VP4QODg2OjoqFsyf69GOgsnqY0gcAVM24KcYAqeFEo0auiCRqVRfsEsBNZ1084lMDtLAFcIofz0YQP9mvhDffP0/wQ7A4WEO43I00gQP26DktrZtgurKdoVru3Ih5Pp6S9ySE/DDD9+Lq/JX+M47b3t8svBYmTVrpkeTBeXTh32jIeRyCVBHjkSa6mAh0mNb/jgyWNSxETBXm5FMDk6koF8TLydPHg+26VLhYVvdrVvfEXk8fItwbVfufOL48WOqHDvmF1wzwbkAt/gvnP9PwJcLQ8lmZttMWOwKpFgD7TTNCSGodJ8A/EInEEQQMtfA/MH/KJzNY9b061ukspbRSRcm4dAs39oKINYIyNcFSnaFncsp3ATltvwHHxwMcHsi35jqkumtf15HRmG5hUHEkfV01k2YuaYLNHVo9ibShQvq6AKxukLJrrBzKeBRDPs+GMMD0prRTUYOGlFdmJdUj3++7KKZYFlMJiYVDBxVqquNO0C1NBE//eSKMoNMpIvfq5QCHkURVGwkGVg3xXWXD2FsQTQhPYU+P9HHyjTbufWZUyeznEkDZc03x0aNTJwlSxa2kLa+Y7uZgBAFm0axdE16iAsU64qvm0Epf/cLELgAQKqLPFaOwwqSuogauw1/XO+dOC5NU2lZgOED5fJrOQcPpBnc29uTXrx4cZW+OIE64nGCIhdQVn+sAPr929989DUSSd2w4Y8eTC1MKiYf5prNBAMBA2QQaPVtbVutz5/Dhz9UaCKQs3v37gogjH65qwreI/Nk+/a24fPnzmWx2u/evSN+/PF78dln/6UUNA7U4KagaHJWLtjHdI3/Yom9G8XKjdgRh+gxxxG3KFAqDitIJ2/A1gcbibR7LIL39uwWlVJ5Nj1WCA3k5xb8sQIkFRAwPdYP5q4bJj9vVnV3d6XBoAHzBwwg3VyDKSFt7EyOdDEURoBwEZ8W5aORCxe+kR4BXiAHAd8NyDnALHIQsc7KpWvNbLHguanj6u/292b1gYriFqJw8zUOKBWXddTSslbo2v1IbgeAeVkEG1ctGwYKKUuGw8boo7yWVu+xHRsLlRYUUFWgs0WdjGL+8ImGtj4qO66TPMIRRoZb50AgbHX4PtoBOCmCkxv8YgZRwli50EfkAKZt+DqHbONwC4G4ffPN39UOGcVNnIjgXrl5qb+/f/8+hUQCX8n37RdFfwNyy2FjtavIhQoEFHUePvxKHHr/oDDYizNbgyInFiAIzDW6xicaWryN5FF8rFqX2bRpk/DLRq3415cvXz5U6mCFsXIxUJmMzyXc1dWZ0fF1DtkW70bxuYV0JI5TVK672LyRJir8fMH2WCFcA4JHNxYtFjAe6YSQWgUTiwkOsy2fB5koK1cfKNuOGMUthFIGPaO5uckjrAH2u8nWL1WDb1m7ZtgEG3McxYZEThocHIdp4uLD5qqxT5SVGwbZunALg+NhqV/w42GTrW8zL7FA6LoODOHza5pXCR2J1M8XTEgk6Wv0KANz2IlNY8L3daZJGCNF18KhrdOvQvfTkwOc1TV2ok5xE2YirNyJUORs3MI4x8Nk6xe4dTFwDQukyAWMeWs1NdaLUu4jv5AjEE8+Adw30ITvB0wT5kpm8o3zbWffh45IITY/PdwsJht1A1ub/AQb6oc5GaRcrNwoilpciXM8TLZ+HLcuuWVnyBSlX25dbbUo10K2Ah+YgMaGOmWHw14Mw/eVX17tSi9MCw9MsYaGP9TWrmzhfnrw2+PoIm4Wtj8IIpy0oerK7+F2tytkHEVRM2EILmATdA06y6e+41FjsvVd3Lo4A2tl1XIxqQpVkQOmXJ1R+D5szTAtnNcjdBF18VdHF4NtFG2qLf14Fj59OdvWCzPZXMTKp9O8ku38RDOI5GLrx3Xr8r21Hqsxkwrv5C4A7qwJHDoOvh/FSOH1oggeuFkwc5Yu9bdR7/pVhUSS3a37FZp+oaSIhr0Xl0/n4trtvi03tML66O1F6VblyOEPs0Q8Wb9+XcBjoB1g4cLKyV0ANnyfbEgTGydKC3fx/8PNAsCQ9TwijlABMZMjkbqGTL9OojwTVIxrgZIq67vw6Vw8nV3PO3ZJ64HMRdJhSAGcJS0O0uyVvT/uI6Pz58+d/AWg4/sbNqwbPnBgXxYTwCcrrhbuSvDAApA3WsUoWZ5Nsw8Oa0BRlxoywcAmqBh1UN9l93Jx7T7Cziaw6H766cccM9mfVF2Blmba8IwZr4p8MbuFQdmlPsyZPWtyF4AJ3wdzB88y+X+WT1ZcLbycpA1dsw+2cjkZYRoygTewy112Lxub18T7yzt61LaAKg4fAn44g0dIY03NdPdHRV6Dx6KZ1AVgwvdtTqAuWvhkkTaIxo5JDNOQFfYv6wyfL7RSovh0rmgbOPvQnYoOZ3Ln+mHg2ITctcolJnz/efYX9A9rxilIxZANKsYW7yucZ4ULn84FbYPg8IUfzkCrl9q81H0Kg1LIXVbFWwBySDsdPKugJzU2NrYcOnTQ27x5c+u0511cYNuJOD3alCn/sMZfAJzpW7TN504eYXaVwqeLI+D005kDxwFMkUbI3K2qWpbmuwUwAXktUy5ztyyTatuaosKU2UKakUbOfQNtYeZ4ODiCg7kyRc9oOpjJKaUtupJKJh4mYrLGLYrTzx8X8KhSZf78qsrK+UPqkIkdj8MpB+8988nXJ/Wnn35SrGBovc3NzS/Z6VK+Dx/gWmklZMPCtrmEmePh4HghNJJj3DrlOey9ch50TVTgcEMOOK4eV2WXwvh69WnAsr5b9B2he5RSaDZZUvgbRpfSEUY/pNvK4b6+nmxUXcDNYK+QjyAKUcP0gxm+lYe9F1cACdPuc+TIh2LaVJew+Ho2mjdBvGF0KY4wEsjy/sH9Rn8/E/iCukRMtfnwlVvUwZXc2fhh1JRfACZWsC2+HrFMgA7GpUtxhJFDvFFh5oBGEnTM4WCXwBSuiuj+3Dl+nIOuKSM7d3Zkb9y4EThmEisY8fVgZnEoWA8dB5oUFJ7Lly8GnsQmjZzDu6a6UWHmOBoJuPfzz28WxSB2U1rNBzs+hy4PFYcddE0Z4Rw44PGYICwCTO6O7e1ZjsXrBNK2tm1ZijAmte9UDrotmBT8T3Xydee9pNWJHQ4uoDvngj6EcfRt0TfC2MFxD7qmjOgcOEyQ5sSpJqMICjbAtqZQbAp40ULHmRjFYeHg9HYDToI0n6x0Z023iMsOjkM3m1IShcXzwY+CglEA69qAl7DQcea69nahWA6k+tI40YPCaGqPH+xwdvD29jahyvZ2sbqpacjloGtKio7FR03q8yII5bJf6g9QMEuJCcx95icjCOQLI2GOiK5ZROJk+9BlcHCP8mZyjQnMJ7UcdLPftYQhYFHoWJ6kMV7gy67Du3GyiNgo02GZMKBE7tzZmY4TEzhu6JYXSqKCCq4OAhP6jg8mbZsYLOTLboJ3Y2URYZRpEFT10G92XcZXIl1iAifCJ8oQVBBEB3KyhMZNBAtcQyGyA3Na9KpXrJhjg3fjZBGxhYmj0G9hQkqkLSZwuYI/TEko2GfY5NOyFJlROXCETCgeuAC+eDjWxLOVaFQu3LqoMHE89NtEpFzBH6aUFDBstGAQCFwA/htMKLKhr1+/qk4KEdiQAhcQiRFtEI0qKvSbLTOIrW6kY2MIBEwKZKmRQ6e0aAwb468CkxpNo/K1bNKsdS9bKkAYSwnnRnXjikmBLDVy6JQWH4d/oAaB4/A6WBQWuMCkWWsI4xAxfklbt4VzI9QRUpgKZYuw6zE4xSv8NZNnE1cgS40cOqWFcPiwoIJRgQtMctKSCqVbpTfxwZV3culNXOrqosck1n/VXIEsR3KrKQoHOwQVjCk2YinPQkIIo0tdXfSYxPqvmiuQLpFDXzixkSXLlYhhcnWY8F81KZBxHjW2wBEvrICuTIOD10qbvnQpODhqCAkkabPByxk0wkWBjPOoeeFApLBf84oVy1p6FUHiXwoHILsdUb3IedGWLCLMBjcFgoiT3NnEPo7jhkYKZJxHTdzEUlNGwgIK+pG+xtXkc9pyKanObFlBIusy/z9TBpE4x9nvuObSe5FEDygI8wnwsHqvhEQRUYijDvdSQTAJU13u/4fUJ6ZgjVHH2Yg9mMx0iBDDxuZQOZHHiAlW5nCvKSRtYcKlvP+fCUZOpEyCCdAdKuOGS6HHSFiGLxvcq16HsoQXp4n0YYKR40DBUQpnItN8MqTuUInIkvBnu3171I9EOXorF5FyRCWVogxieaJm8WMkSls3iY2oaso2YpIoJZKHZEtkGgWI2KG0fUSo3rt30Flp4o8Rxam/cL7AscRmg5vEhahqVCJ5SLb6+qF6uUBRkONQD8n2woseUBBY/VwWoTpsa9W3USJqPnjwpfj226/Ff3z6qSAf+ZMOWbJtmj0YxXNmz8xE2esuIdleeIkdUDAn2DrJy1ffRpUXkHxWK+cS+bg4sH+fAHEzzAa3CbfNOaNYmp2pKHvdJSTbCy+uE4Otk36RfBsteIx89SWUwd90gOOGZEvEUeSW2lpdvdJDqcmFVuOPEQxw1GMkLjxsSzDNAyjbHklxQ7IlYhjEMLu+o2OHh+0UFgFe6893l0xcLkmjC+hcLICyKWk0JG5ItkSm5QM7Y3CQfwa57hHyzJS+HMelFNkilUp5pTxGouBhE+Srw8PUhilpNCRuSLYXXhTzt752GM6TPA8NQp4h9BlCnVEK83Xr1g0fOeKnkgE7aOvWLRMypbTYBK1hkK8NHjYljU7EQVwcKE/QVi8nAduoKbewy7FvqcxhDg+bkkYn4iB55m9XhuehgSaPlGVg/yK9OerG2UZdjn3jJI1GRjO9Lg+gbEoanYirybTurWEKeY5Q59jev/n670UOlBN5rkdBvqY4wRwyLoSH8wGUTUmjE3EU7kCJ19Csw9KXQ3jSBe7w6XLsa2MOU+GBJAqJH3NFWNLoRBxFj4IZ5UCpJ124fv2aWLtqVYX+rI469i0HPPwsEkEnwoRSwNAEXL50UTF26Jftcuzraj66JoJOxEFsYVo5EEQcfLIY4OjJzTf9WR117JvIcyJhYVq5E2XAwVdx/rqNKVRtJM1yQMITDSSRiHFLDw/TyvPxdnRsFzdueGoBYFvXM4noz/W4gaTiJoWeaCCJRCLQOKm1Z3TNnWvtvtnV6sFEA1CEBNOIHcjfLyWQVNyk0IVhbetSvkdvfYtLIIlEQpDAKK0dgmhZMNkIMkbwJWzxlZWVfyhHf8KidJrC2qKeayCJRJjEQeP0rR5x/ijRNAYdGUdMsf9c8wVAwqJ06osVYW1BPil3IIkXSkp1mKRE07bYf3G8e9rbt7UULwB7lE5bavd83P0EDnYWlwxfJUPCzLvHdnwbLICQKJ18sVKsYs4WTuDgEsQFYbOZa6bYf6Ue34ZFItFjFYN5xNnCCRxcosRF2EwnfbbYf6Ue34YldDIxj7CA29QCTvwAJ11M27ot9p/mtx+YfVHROMIyfUwkkEQiJaJwHF0zbeu22H9JNI7fiUQRM7kblYvT5mQolwkUPNnbekQmMJdtfTKOb/liJcbwzk5pbg6fzyY+fyUKywTWSvAvzwTGo4eatnUkmgYkbHLaLPfxrZ6KDk6oXAfhizWREgR+fJ9+ciVA1wZS76Yp45dtW9ecNocmM7ECFulAqj9jCwmnh7pNxEEouxdPGkV+fSYzTHfa5MmnXcUEGdsygwWJnYjB/PgX42JNxFHi5MrhZtjWrVuCU7/m5tWiVE8bE2RswxYg4WnrFiYRwEsVlVY95xiCbf23VEILsAUWhs6Uto5DwZ2dHRk4qSazWYLw7F4mFE43w7iD5kTMNROLWKWapVJdPcekg9ig4CTQY4kSJ626zUEzjrmG6ybmjp65NC6L2AYFJ9lCntV2zRw045hrYcwdeP/guR7FR0gCPU6SxNXCg+wiyuSqti4AU1x+G3MHz3VAwv39fR7P+JVAxs9IbMSNz2/ejH3Cp4vJ4dTG3HGFjE36RZILqGzbel0GZEvuo8+1cMougl81d9DURaeZYfJtzB1XyNjEDP74yuUkF1Cpom/X2KZ5xi7u+GFz0NQlKs6fztxxgYxNKeZgNpJu0RQzenkiOeFaOH6d2KahhSMnrxUKHi900NTz62pOnyk4epaLucP1EDIboV9Qu7qnUiKROkBHFpFBSQun7ZrQNa6Fx82va3L6DGPuuOAGutk4NnZLfCv7mnn4IIGDSxFs12PS3q6srKxAwXatZ/ciLTxufl1X5k4cjx9+zEtmIzGIEQfQdHaRSAzBdo0FgJM8bNfQxFHa2rZlnxW6Fid1rH7MG+fsIpGYEHAprOCordolBqAOByN3n/JEZrgBzw8AUWcXIQziRBykFFawjZFDEK9LDEDd46ers8N7/+D+AtxAzw+gzi7Gw88uEpnErdrGyCGI1yUGoO91fCMAjrzrVxUngXADHiyKJM7ZRSITgIKjtuqoJI2mGIBh27ryOh4dCZBDlO//+Y+iYFGJPCMoOGqr5owcHlOQIF5TDMCwbT3wOs5xEtA+opUhShkPFuWafi4RJw08fKs2QbzYqk1Zvk1ex6jL8QV9W+dex3iu4zmvM414MAnOIMJ3JczgCULBPDiEaas2QbyDg3uEKUmjHgMQ2zmFku/p7krzkz8u5HVse67zYBIUsCphBpcJCuaEDNNWbYJ4UUxZvvW0L9jOKSsZ6gJrkJ+dU2q/EbmktnZlC4JEJMzgCUoYIYM7e5ScEVxu66iPbd0UK6iU5zr0CgoSkTCDy74gzM4eE80Izq9x9k4+O9mYSvHCM5SBFobrwAbo+3RmsI3GnkhMwVbMT/WepbOH++IsZgZDD0lmcUI4QD67RrmcPSZLdGYwziw4kyh3LD0nmVUHsWXo0uP+PA9SShzCRKaQlBKHMJFEEjHI/wOfNIUgGtbuFQAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg==",
            t = me.Renderable.extend({
                init: function(e) {
                    me.Renderable.prototype.init.apply(this, [0, 0, me.video.renderer.getWidth(), 50]), this.isKinematic = !1, this.version = "6.0.0", this.area = {}, this.counters = new r(["shapes", "sprites", "velocity", "bounds", "children"]), this.pos.z = 1 / 0, this.visible = !1, this.frameUpdateTime = 0, this.frameDrawTime = 0, this.GUID = "debug-" + me.utils.createGUID(), this.name = "me.debugPanel", this.isPersistent = !0, this.floating = !0, this.isRenderable = !0, this.alwaysUpdate = !0, this.canvas = me.video.createCanvas(this.width, this.height, !0), this.font_size = 10, this.mod = 2, this.width < 500 && (this.font_size = 7, this.mod = this.mod * (this.font_size / 10));
                    var t = new Image;
                    t.src = o, this.font = new me.BitmapFont(s, t), s = o = null;
                    var i = 10 * this.mod;
                    this.area.renderHitBox = new me.Rect(250, 2, i, i), this.area.renderVelocity = new me.Rect(250, 17, i, i), this.area.renderQuadTree = new me.Rect(410, 2, i, i), me.debug.displayFPS = !0;
                    var n = this;
                    this.debugToggle = e || me.input.KEY.S, this.keyHandler = me.event.subscribe(me.event.KEYDOWN, function(e, t) {
                        t === n.debugToggle && me.plugins.debugPanel.toggle()
                    }), this.help_str = "[" + String.fromCharCode(32 + this.debugToggle) + "]show/hide", this.help_str_len = this.font.measureText(me.video.renderer, this.help_str).width, this.fps_str_len = this.font.measureText(me.video.renderer, "00/00 fps").width, this.memoryPositionX = 325 * this.mod, me.event.subscribe(me.event.VIEWPORT_ONRESIZE, function(e) {
                        n.resize(e, 50)
                    }), this.patchSystemFn(), this.anchorPoint.set(0, 0)
                },
                patchSystemFn: function() {
                    me.debug.renderHitBox = me.debug.renderHitBox || me.game.HASH.hitbox || !1, me.debug.renderVelocity = me.debug.renderVelocity || me.game.HASH.velocity || !1, me.debug.renderQuadTree = me.debug.renderQuadTree || me.game.HASH.quadtree || !1;
                    var o = this,
                        s = new me.Rect(0, 0, 0, 0);
                    me.plugin.patch(me.timer, "update", function(e) {
                        this._patched(e), me.timer.countFPS()
                    }), me.plugin.patch(me.game, "update", function(e) {
                        var t = window.performance.now();
                        this._patched(e), o.frameUpdateTime = window.performance.now() - t
                    }), me.plugin.patch(me.game, "draw", function() {
                        var e = window.performance.now();
                        o.counters.reset(), this._patched(), o.frameDrawTime = window.performance.now() - e
                    }), me.plugin.patch(me.Sprite, "draw", function(e) {
                        if (this._patched(e), o.visible && (o.counters.inc("sprites"), me.debug.renderHitBox)) {
                            var t = this.getBounds(),
                                i = this.anchorPoint.x * t.width,
                                n = this.anchorPoint.y * t.height;
                            if (e.translate(i, n), e.setColor("green"), e.drawShape(t), e.translate(-i, -n), this.body) {
                                e.translate(this.pos.x, this.pos.y), e.setColor("red");
                                for (var r, s = this.body.shapes.length; s--, r = this.body.shapes[s];) e.drawShape(r), o.counters.inc("shapes")
                            }
                        }
                    }), me.plugin.patch(me.Entity, "postDraw", function(e) {
                        if (o.visible) {
                            if (o.counters.inc("bounds"), me.debug.renderHitBox) {
                                e.save(), e.translate(-this.pos.x - this.body.pos.x - this.ancestor._absPos.x, -this.pos.y - this.body.pos.y - this.ancestor._absPos.y), this.renderable instanceof me.Renderable && e.translate(-this.anchorPoint.x * this.body.width, -this.anchorPoint.y * this.body.height), e.setColor("orange"), e.drawShape(this.getBounds()), e.translate(this.pos.x + this.ancestor._absPos.x, this.pos.y + this.ancestor._absPos.y), e.setColor("red");
                                for (var t, i = this.body.shapes.length; i--, t = this.body.shapes[i];) e.drawShape(t), o.counters.inc("shapes");
                                e.restore()
                            }
                            if (me.debug.renderVelocity && (this.body.vel.x || this.body.vel.y)) {
                                s.copy(this.getBounds()), s.pos.sub(this.ancestor._absPos);
                                var n = s.width / 2,
                                    r = s.height / 2;
                                e.save(), e.setLineWidth(1), e.setColor("blue"), e.translate(-n, -r), e.strokeLine(0, 0, ~~(this.body.vel.x * (s.width / 2)), ~~(this.body.vel.y * (s.height / 2))), o.counters.inc("velocity"), e.restore()
                            }
                        }
                        this._patched(e)
                    }), me.plugin.patch(me.Container, "draw", function(e, t) {
                        this._patched(e, t), o.visible && (o.counters.inc("bounds"), o.counters.inc("children"), me.debug.renderHitBox && (e.save(), e.setLineWidth(1), e.setColor("orange"), s.copy(this.getBounds()), this.ancestor && s.pos.sub(this.ancestor._absPos), e.drawShape(s), e.setColor("purple"), s.copy(this.childBounds), this.ancestor && s.pos.sub(this.ancestor._absPos), e.drawShape(s), e.restore()))
                    })
                },
                show: function() {
                    this.visible || (me.game.world.addChild(this, 1 / 0), me.input.registerPointerEvent("pointerdown", this, this.onClick.bind(this)), this.visible = !0, me.game.repaint())
                },
                hide: function() {
                    this.visible && (me.input.releasePointerEvent("pointerdown", this), me.game.world.removeChild(this, !0), this.visible = !1, me.game.repaint())
                },
                update: function() {
                    return this.visible
                },
                onClick: function(e) {
                    this.area.renderHitBox.containsPoint(e.gameX, e.gameY) ? me.debug.renderHitBox = !me.debug.renderHitBox : this.area.renderVelocity.containsPoint(e.gameX, e.gameY) ? me.debug.renderVelocity = !me.debug.renderVelocity : this.area.renderQuadTree.containsPoint(e.gameX, e.gameY) && (me.debug.renderQuadTree = !me.debug.renderQuadTree), me.game.repaint()
                },
                drawQuadTreeNode: function(e, t) {
                    var i = t.bounds;
                    if (0 === t.nodes.length) {
                        var n = .4 * t.objects.length / me.collision.maxChildren;
                        0 < n && (e.save(), e.setColor("rgba(255,0,0," + n + ")"), e.fillRect(i.pos.x, i.pos.y, i.width, i.height), e.restore())
                    } else
                        for (var r = 0; r < t.nodes.length; r++) this.drawQuadTreeNode(e, t.nodes[r])
                },
                drawQuadTree: function(e) {
                    var t = me.game.viewport.pos.x,
                        i = me.game.viewport.pos.y;
                    e.translate(-t, -i), this.drawQuadTreeNode(e, me.collision.quadTree), e.translate(t, i)
                },
                drawMemoryGraph: function(e, t) {
                    if (window.performance && window.performance.memory) {
                        var i = me.Math.round(window.performance.memory.usedJSHeapSize / 1048576, 2),
                            n = me.Math.round(window.performance.memory.totalJSHeapSize / 1048576, 2),
                            r = ~~(t - this.memoryPositionX - 5),
                            s = r * (i / n);
                        e.setColor("#0065AD"), e.fillRect(this.memoryPositionX, 0, r, 20), e.setColor("#3AA4F0"), e.fillRect(this.memoryPositionX + 1, 1, s - 1, 17), this.font.draw(e, "Heap : " + i + "/" + n + " MB", this.memoryPositionX + 5, 2 * this.mod)
                    } else this.font.draw(e, "Heap : ??/?? MB", this.memoryPositionX, 2 * this.mod)
                },
                draw: function(e) {
                    e.save(), !0 === me.debug.renderQuadTree && this.drawQuadTree(e), e.setGlobalAlpha(.5), e.setColor("black"), e.fillRect(this.left, this.top, this.width, this.height), e.setGlobalAlpha(1), e.setColor("white"), this.font.textAlign = "left", this.font.draw(e, "#objects : " + me.game.world.children.length, 5 * this.mod, 2 * this.mod), this.font.draw(e, "#draws   : " + me.game.world.drawCount, 5 * this.mod, 10 * this.mod), this.font.draw(e, "?hitbox   [" + (me.debug.renderHitBox ? "x" : " ") + "]", 75 * this.mod, 2 * this.mod), this.font.draw(e, "?velocity [" + (me.debug.renderVelocity ? "x" : " ") + "]", 75 * this.mod, 10 * this.mod), this.font.draw(e, "?QuadTree [" + (me.debug.renderQuadTree ? "x" : " ") + "]", 150 * this.mod, 2 * this.mod), this.font.draw(e, "Update : " + this.frameUpdateTime.toFixed(2) + " ms", 225 * this.mod, 2 * this.mod), this.font.draw(e, "Draw   : " + this.frameDrawTime.toFixed(2) + " ms", 225 * this.mod, 10 * this.mod), this.font.draw(e, "Shapes   : " + this.counters.get("shapes"), 5 * this.mod, 17 * this.mod), this.font.draw(e, "Sprites   : " + this.counters.get("sprites"), 75 * this.mod, 17 * this.mod), this.font.draw(e, "Velocity  : " + this.counters.get("velocity"), 150 * this.mod, 17 * this.mod), this.font.draw(e, "Bounds : " + this.counters.get("bounds"), 225 * this.mod, 17 * this.mod), this.font.draw(e, "Children : " + this.counters.get("children"), 325 * this.mod, 17 * this.mod);
                    var t = this.width - 5;
                    this.drawMemoryGraph(e, t - this.help_str_len), this.font.textAlign = "right", this.font.draw(e, this.help_str, t, 17 * this.mod);
                    var i = me.timer.fps + "/" + me.sys.fps + " fps";
                    this.font.draw(e, i, t, 2 * this.mod), e.restore()
                },
                onDestroyEvent: function() {
                    this.hide(), me.input.unbindKey(this.toggleKey), me.event.unsubscribe(this.keyHandler)
                }
            });
        me.debug.Panel = me.plugin.Base.extend({
            init: function(e) {
                me.plugin.Base.prototype.init.apply(this), this.panel = new t(e), !0 === me.game.HASH.debug && this.show()
            },
            show: function() {
                this.panel.show()
            },
            hide: function() {
                this.panel.hide()
            },
            toggle: function() {
                this.panel.visible ? this.panel.hide() : this.panel.show()
            }
        }), me.device.onReady(function() {
            me.utils.function.defer(me.plugin.register, this, me.debug.Panel, "debugPanel", me.game.HASH.debugToggleKey ? me.game.HASH.debugToggleKey.charCodeAt(0) - 32 : void 0)
        })
    }();
var game = {
    data: {
        score: 0
    },
    onload: function() {
        me.video.init(800, 600, {
            wrapper: "screen",
            scale: "auto",
            scaleMethod: "fit"
        }) ? (me.audio.init("mp3,ogg"), me.loader.onload = this.loaded.bind(this), me.loader.preload(game.resources), me.state.change(me.state.LOADING)) : alert("Your browser does not support HTML5 canvas.")
    },
    loaded: function() {
        me.state.set(me.state.MENU, new game.TitleScreen), me.state.set(me.state.PLAY, new game.PlayScreen), me.state.set(me.state.GAME_END, new game.WinScreen), me.state.set(me.state.GAME_OVER, new game.LoseScreen), me.pool.register("mainPlayer", game.PlayerEntity), me.pool.register("CoinEntity", game.CoinEntity), me.pool.register("EnemyEntity", game.EnemyEntity), me.pool.register("PrincessEntity", game.PrincessEntity), me.pool.register("DoorEntity", game.PrincessEntity), me.input.bindKey(me.input.KEY.LEFT, "left"), me.input.bindKey(me.input.KEY.RIGHT, "right"), me.input.bindKey(me.input.KEY.X, "jump", !0), me.input.bindKey(me.input.KEY.A, "jump", !0), me.input.bindKey(me.input.KEY.UP, "jump", !0), me.input.bindKey(me.input.KEY.S, "shoot", !0), me.state.change(me.state.MENU)
    },
    resources: [{
        name: "cling",
        type: "audio",
        src: "data/sfx/"
    }, {
        name: "erodate",
        type: "image",
        src: "data/img/erodate.png"
    }, {
        name: "fireads",
        type: "image",
        src: "data/img/fireads.png"
    }, {
        name: "flirt",
        type: "image",
        src: "data/img/flirt.png"
    }, {
        name: "gameover",
        type: "image",
        src: "data/img/gameover.png"
    }, {
        name: "gray_bkg",
        type: "image",
        src: "data/img/gray_bkg.png"
    }, {
        name: "leadnotify",
        type: "image",
        src: "data/img/gui/leadnotify.png"
    }, {
        name: "idylla1",
        type: "image",
        src: "data/img/idylla1.png"
    }, {
        name: "idylla2",
        type: "image",
        src: "data/img/idylla2.png"
    }, {
        name: "idylla3",
        type: "image",
        src: "data/img/idylla3.png"
    }, {
        name: "idylla4",
        type: "image",
        src: "data/img/idylla4.png"
    }, {
        name: "idylla5",
        type: "image",
        src: "data/img/idylla5.png"
    }, {
        name: "idylla6",
        type: "image",
        src: "data/img/idylla6.png"
    }, {
        name: "idylla7",
        type: "image",
        src: "data/img/idylla7.png"
    }, {
        name: "scifi_platformTiles_32x32",
        type: "image",
        src: "data/img/map/scifi_platformTiles_32x32.png"
    }, {
        name: "money",
        type: "image",
        src: "data/img/money.png"
    }, {
        name: "polana1",
        type: "image",
        src: "data/img/polana1.png"
    }, {
        name: "polana2",
        type: "image",
        src: "data/img/polana2.png"
    }, {
        name: "polana3",
        type: "image",
        src: "data/img/polana3.png"
    }, {
        name: "enemy",
        type: "image",
        src: "data/img/sprite/enemy.png"
    }, {
        name: "gripe_run_right",
        type: "image",
        src: "data/img/sprite/gripe_run_right.png"
    }, {
        name: "princess",
        type: "image",
        src: "data/img/sprite/princess.png"
    }, {
        name: "protoman_run_right",
        type: "image",
        src: "data/img/sprite/protoman_run_right.png"
    }, {
        name: "spinning_coin_gold",
        type: "image",
        src: "data/img/sprite/spinning_coin_gold.png"
    }, {
        name: "wheelie_right",
        type: "image",
        src: "data/img/sprite/wheelie_right.png"
    }, {
        name: "area01",
        type: "tmx",
        src: "data/map/area01.tmx"
    }, {
        name: "scifi_platformTiles_32x32",
        type: "tsx",
        src: "data/map/scifi_platformTiles_32x32.tsx"
    }, {
        name: "PressStart2P",
        type: "binary",
        src: "data/fnt/PressStart2P.fnt"
    }, {
        name: "PressStart2P",
        type: "image",
        src: "data/fnt/PressStart2P.png"
    }]
};
game.PlayerEntity = me.Entity.extend({
    init: function(e, t, i) {
        me.Entity.prototype.init.apply(this, [e, t, i]), this.body.setVelocity(3, 15), me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH, .4), this.alwaysUpdate = !0, this.renderable.addAnimation("appear", [0, 1, 2, 3, 4, 5, 6]), this.renderable.addAnimation("walk", [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), this.renderable.addAnimation("jump", [21, 22, 23, 24]), this.renderable.addAnimation("shoot", [25, 26, 27]), this.renderable.addAnimation("stand", [7, 8, 9]), this.renderable.setCurrentAnimation("stand"), this.directionright = !0
    },
    update: function(e) {
        return me.input.isKeyPressed("left") ? (this.renderable.flipX(!0), this.directionright = !1, this.body.vel.x -= this.body.accel.x * me.timer.tick, this.renderable.isCurrentAnimation("walk") || this.renderable.setCurrentAnimation("walk")) : me.input.isKeyPressed("right") ? (this.renderable.flipX(!1), this.directionright = !0, this.body.vel.x += this.body.accel.x * me.timer.tick, this.renderable.isCurrentAnimation("walk") || this.renderable.setCurrentAnimation("walk")) : (this.body.vel.x = 0, this.renderable.isCurrentAnimation("jump") || this.renderable.isCurrentAnimation("stand") || this.renderable.setCurrentAnimation("stand")), me.input.isKeyPressed("jump") && (this.body.jumping || this.body.falling || (this.body.vel.y = -this.body.maxVel.y * me.timer.tick, this.body.jumping = !0, this.renderable.isCurrentAnimation("jump") || this.renderable.setCurrentAnimation("jump", void this.renderable.setCurrentAnimation("stand")))), me.input.isKeyPressed("shoot") && (this.renderable.isCurrentAnimation("shoot") || this.renderable.setCurrentAnimation("shoot"), this.directionright ? me.game.world.addChild(new game.Laser(this.pos.x + 25, this.pos.y + 30, this.directionright)) : me.game.world.addChild(new game.Laser(this.pos.x - 25, this.pos.y + 30, this.directionright))), this.body.update(e), me.collision.check(this), me.Entity.prototype.update.apply(this, [e]) || 0 !== this.body.vel.x || 0 !== this.body.vel.y
    },
    onCollision: function(e, t) {
        switch (e.b.body.collisionType) {
            case me.collision.types.WORLD_SHAPE:
                if ("platform" === t.type) return !!(this.body.falling && !me.input.isKeyPressed("down") && 0 < e.overlapV.y && ~~this.body.vel.y >= ~~e.overlapV.y) && !(e.overlapV.x = 0);
                break;
            case me.collision.types.PROJECTILE_OBJECT:
                return !1;
            case me.collision.types.ENEMY_OBJECT:
                return this.renderable.flicker(750), !1;
            default:
                return !1
        }
        return !0
    }
}), game.CoinEntity = me.CollectableEntity.extend({
    init: function(e, t, i) {
        me.CollectableEntity.prototype.init.apply(this, [e, t, i])
    },
    onCollision: function(e, t) {
        return this.body.setCollisionMask(me.collision.types.NO_OBJECT), me.game.world.removeChild(this), !1
    }
}), game.EnemyEntity = me.Entity.extend({
    init: function(e, t, i) {
        i.image = "enemy";
        var n = i.width;
        i.height;
        i.framewidth = i.width = 50, i.frameheight = i.height = 60, i.shapes[0] = new me.Rect(0, 0, i.framewidth, i.frameheight), me.Entity.prototype.init.apply(this, [e, t, i]), e = this.pos.x, this.startX = e, this.endX = e + n - i.framewidth, this.pos.x = e + n - i.framewidth, this.walkLeft = i.directionright, this.body.setVelocity(.8, 6)
    },
    update: function(e) {
        return this.alive ? (this.renderable.flipX(this.walkLeft), this.body.vel.x += this.walkLeft ? -this.body.accel.x * me.timer.tick : this.body.accel.x * me.timer.tick) : this.body.vel.x = 0, this.body.update(e), me.collision.check(this), me.Entity.prototype.update.apply(this, [e]) || 0 !== this.body.vel.x || 0 !== this.body.vel.y
    },
    onCollision: function(e, t) {
        switch (console.log(e.b.body.collisionType), e.b.body.collisionType) {
            case me.collision.types.ACTION_OBJECT:
                if ("princess" === t.type) setTimeout(me.state.change, 1e3, me.state.GAME_OVER);
                else if ("door" === t.type) {
                    game.data.score += 250, me.game.world.removeChild(this);
                    var i = new me.Sprite(400, 100, {
                        image: "leadnotify",
                        framewidth: 251,
                        frameheight: 102,
                        anchorPoint: new me.Vector2d(.5, .5)
                    });
                    me.game.world.addChild(i, 100), setTimeout(function(e) {
                        me.game.world.removeChild(e)
                    }, 1e3, i)
                }
                return !1;
            case me.collision.types.PROJECTILE_OBJECT:
            case 8:
                return this.walkLeft = !this.walkLeft, !1;
            case me.collision.types.WORLD_SHAPE:
                return "side" === t.type && (this.walkLeft = !this.walkLeft), !0;
            default:
                return this.alive && 0 < e.overlapV.y && e.a.body.falling && this.renderable.flicker(750), !1
        }
    }
}), game.PrincessEntity = me.Entity.extend({
    init: function(e, t, i) {
        me.Entity.prototype.init.apply(this, [e, t, i]), this.body.collisionType = me.collision.types.ACTION_OBJECT, this.erodatesprite = new me.Sprite(51, 432, {
            image: "erodate",
            framewidth: 102,
            frameheight: 32,
            anchorPoint: new me.Vector2d(.5, .5)
        }), this.flirtsprite = new me.Sprite(764, 424, {
            image: "flirt",
            framewidth: 67,
            frameheight: 50,
            anchorPoint: new me.Vector2d(.5, .5)
        }), this.fireadsprite = new me.Sprite(400, 300, {
            image: "fireads",
            framewidth: 213,
            frameheight: 49,
            anchorPoint: new me.Vector2d(.5, .5)
        }), me.game.world.addChild(this.erodatesprite, 100), me.game.world.addChild(this.flirtsprite, 100), me.game.world.addChild(this.fireadsprite, 100)
    },
    update: function(e) {
        return 750 <= game.data.score && setTimeout(me.state.change, 1e3, me.state.GAME_END), !0
    },
    onCollision: function(e, t) {
        return !1
    }
}), game.DoorEntity = me.Entity.extend({
    init: function(e, t, i) {
        me.Entity.prototype.init.apply(this, [e, t, i]), this.body.collisionType = me.collision.types.ACTION_OBJECT
    },
    onCollision: function(e, t) {
        switch (e.b.body.collisionType) {
            case me.collision.types.ENEMY_OBJECT:
            default:
                return !1
        }
    }
}), game.Laser = me.Entity.extend({
    init: function(e, t, i) {
        me.Entity.prototype.init.apply(this, [e, t, {
            width: game.Laser.width,
            height: game.Laser.height
        }]), this.z = 5, this.directionright = i, this.directionright, this.body.setVelocity(1e3, 0), this.body.collisionType = me.collision.types.PROJECTILE_OBJECT, this.renderable = new(me.Renderable.extend({
            init: function() {
                me.Renderable.prototype.init.apply(this, [0, 0, game.Laser.width, game.Laser.height])
            },
            destroy: function() {},
            draw: function(e) {
                var t = e.getColor();
                e.setColor("#5EFF7E"), e.fillRect(0, 0, this.width, this.height), e.setColor(t)
            }
        })), this.alwaysUpdate = !0
    },
    update: function(e) {
        return this.directionright ? this.body.vel.x += this.body.accel.x * e / 1e3 : this.body.vel.x -= this.body.accel.x * e / 1e3, (this.pos.x + this.width <= 0 || this.pos.x - this.width >= me.game.viewport.width) && me.game.world.removeChild(this), this.body.update(), me.collision.check(this), !0
    }
}), game.Laser.width = 28, game.Laser.height = 5, game.HUD = game.HUD || {}, game.HUD.Container = me.Container.extend({
    init: function() {
        me.Container.prototype.init.apply(this), this.isPersistent = !0, this.floating = !0, this.name = "HUD", this.addChild(new game.HUD.ScoreItem(-10, -10))
    }
}), game.HUD.ScoreItem = me.Renderable.extend({
    init: function(e, t) {
        me.Renderable.prototype.init.apply(this, [e, t, 10, 10]), this.font = new me.BitmapFont(me.loader.getBinary("PressStart2P"), me.loader.getImage("PressStart2P")), this.font.textAlign = "right", this.font.textBaseline = "bottom", this.score = -1
    },
    update: function() {
        return this.score !== game.data.score && (this.score = game.data.score, !0)
    },
    draw: function(e) {
        this.font.draw(e, game.data.score, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y)
    }
}), game.resources = [{
        name: "cling",
        type: "audio",
        src: "data/sfx/"
    }, {
        name: "erodate",
        type: "image",
        src: "data/img/erodate.png"
    }, {
        name: "fireads",
        type: "image",
        src: "data/img/fireads.png"
    }, {
        name: "flirt",
        type: "image",
        src: "data/img/flirt.png"
    }, {
        name: "gameover",
        type: "image",
        src: "data/img/gameover.png"
    }, {
        name: "gray_bkg",
        type: "image",
        src: "data/img/gray_bkg.png"
    }, {
        name: "leadnotify",
        type: "image",
        src: "data/img/gui/leadnotify.png"
    }, {
        name: "idylla1",
        type: "image",
        src: "data/img/idylla1.png"
    }, {
        name: "idylla2",
        type: "image",
        src: "data/img/idylla2.png"
    }, {
        name: "idylla3",
        type: "image",
        src: "data/img/idylla3.png"
    }, {
        name: "idylla4",
        type: "image",
        src: "data/img/idylla4.png"
    }, {
        name: "idylla5",
        type: "image",
        src: "data/img/idylla5.png"
    }, {
        name: "idylla6",
        type: "image",
        src: "data/img/idylla6.png"
    }, {
        name: "idylla7",
        type: "image",
        src: "data/img/idylla7.png"
    }, {
        name: "scifi_platformTiles_32x32",
        type: "image",
        src: "data/img/map/scifi_platformTiles_32x32.png"
    }, {
        name: "money",
        type: "image",
        src: "data/img/money.png"
    }, {
        name: "polana1",
        type: "image",
        src: "data/img/polana1.png"
    }, {
        name: "polana2",
        type: "image",
        src: "data/img/polana2.png"
    }, {
        name: "polana3",
        type: "image",
        src: "data/img/polana3.png"
    }, {
        name: "enemy",
        type: "image",
        src: "data/img/sprite/enemy.png"
    }, {
        name: "gripe_run_right",
        type: "image",
        src: "data/img/sprite/gripe_run_right.png"
    }, {
        name: "princess",
        type: "image",
        src: "data/img/sprite/princess.png"
    }, {
        name: "protoman_run_right",
        type: "image",
        src: "data/img/sprite/protoman_run_right.png"
    }, {
        name: "wheelie_right",
        type: "image",
        src: "data/img/sprite/wheelie_right.png"
    }, {
        name: "area01",
        type: "tmx",
        src: "data/map/area01.tmx"
    }, {
        name: "scifi_platformTiles_32x32",
        type: "tsx",
        src: "data/map/scifi_platformTiles_32x32.tsx"
    }, {
        name: "PressStart2P",
        type: "binary",
        src: "data/fnt/PressStart2P.fnt"
    }, {
        name: "PressStart2P",
        type: "image",
        src: "data/fnt/PressStart2P.png"
    }];
var MenuButton = me.GUI_Object.extend({
    onClick: function() {
        return me.state.change(me.state.PLAY), !0
    }
});
game.LoseScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#0f0f0f"), 0);
        var e = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("polana1"),
                z: 0
            }),
            t = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("polana2"),
                z: 0
            }),
            i = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("polana3"),
                z: 0
            }),
            n = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("gameover"),
                z: 0
            });
        setTimeout(function(e, t) {
            t.addChild(e)
        }, 0, e, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 1e3, t, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 2e3, i, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 3e3, n, me.game.world)
    },
    onDestroyEvent: function() {
        me.audio.stopTrack()
    }
}), game.PlayScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        //me.audio.playTrack("dst-inertexponent"), me.levelDirector.loadLevel("area01"), game.data.score = 0, this.HUD = new game.HUD.Container, me.game.world.addChild(this.HUD), me.input.bindKey(me.input.KEY.SPACE, "shoot", !0)
    },
    onDestroyEvent: function() {
        me.game.world.removeChild(this.HUD), me.input.unbindKey(me.input.KEY.SPACE)
    }
}), game.TitleScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#0f0f0f"), 0), me.game.world.addChild(new(me.Renderable.extend({
            init: function() {
                me.Renderable.prototype.init.apply(this, [0, 0, me.game.viewport.width, me.game.viewport.height]), this.font = new me.BitmapFont(me.loader.getBinary("PressStart2P"), me.loader.getImage("PressStart2P")), this.framescount = 0
            },
            update: function(e) {
                return !0
            },
            draw: function(e) {
                this.font.textAlign = "left", this.text = "NADESZLY MROCZNE CZASY...", this.text2 = "W OKOLICY POJAWIA SIE", this.text3 = "CORAZ WIECEJ NAPALENCOW", this.text4 = "KOBIETY NIE MOGA JUZ", this.text5 = "CZUC SIE BEZPIECZNIE...", this.text6 = "NA SZCZESCIE W PORE", this.text7 = "POJAWILO SIE FIREADS", this.text8 = "RAZEM Z NAJLEPSZYMI", this.text9 = "EROTYCZNYMI PROGRAMAMI", this.text10 = "AFILIACYJNYMI", this.framescount += 1;
                for (var t = 0; t < this.text.length; t++) this.framescount >= 10 * t && this.font.draw(e, this.text[t], me.game.viewport.width / 2 + 32 * t, 320);
                for (t = 0; t < this.text2.length; t++) this.framescount >= 100 + 10 * this.text.length + 10 * t && this.font.draw(e, this.text2[t], me.game.viewport.width / 2 + 32 * t, 360);
                for (t = 0; t < this.text3.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length) + 10 * t && this.font.draw(e, this.text3[t], me.game.viewport.width / 2 + 32 * t, 400);
                for (t = 0; t < this.text4.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length) + 10 * t && this.font.draw(e, this.text4[t], me.game.viewport.width / 2 + 32 * t, 440);
                for (t = 0; t < this.text5.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length) + 10 * t && this.font.draw(e, this.text5[t], me.game.viewport.width / 2 + 32 * t, 480);
                for (t = 0; t < this.text6.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length + this.text5.length) + 10 * t && this.font.draw(e, this.text6[t], me.game.viewport.width / 2 + 32 * t, 520);
                for (t = 0; t < this.text7.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length + this.text5.length + this.text6.length) + 10 * t && this.font.draw(e, this.text7[t], me.game.viewport.width / 2 + 32 * t, 560);
                for (t = 0; t < this.text8.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length + this.text5.length + this.text6.length + this.text7.length) + 10 * t && this.font.draw(e, this.text8[t], me.game.viewport.width / 2 + 32 * t, 600);
                for (t = 0; t < this.text9.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length + this.text5.length + this.text6.length + this.text7.length + this.text8.length) + 10 * t && this.font.draw(e, this.text9[t], me.game.viewport.width / 2 + 32 * t, 640);
                for (t = 0; t < this.text10.length; t++) this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length + this.text5.length + this.text6.length + this.text7.length + this.text8.length + this.text9.length) + 10 * t && this.font.draw(e, this.text10[t], me.game.viewport.width / 2 + 32 * t, 680);
                this.framescount >= 100 + 10 * (this.text.length + this.text2.length + this.text3.length + this.text4.length + this.text5.length + this.text6.length + this.text7.length + this.text8.length + this.text9.length) + 10 * t && this.font.draw(e, "NACISNIJ ENTER ABY ROZPACZAC GRE", me.game.viewport.width / 2, 720), this.font.textAlign = "left"
            },
            onDestroyEvent: function() {}
        })), 2), me.input.bindKey(me.input.KEY.ENTER, "enter", !0), me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER), this.handler = me.event.subscribe(me.event.KEYDOWN, function(e, t, i) {
            "enter" === e && (me.audio.play("cling"), me.state.change(me.state.PLAY))
        })
    },
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER), me.input.unbindPointer(me.input.pointer.LEFT), me.event.unsubscribe(this.handler)
    }
}), game.TitleScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#0f0f0f"), 0), me.game.world.addChild(new(me.Renderable.extend({
            init: function() {
                me.Renderable.prototype.init.apply(this, [0, 0, me.game.viewport.width, me.game.viewport.height]), this.font = new me.BitmapFont(me.loader.getBinary("PressStart2P"), me.loader.getImage("PressStart2P")), this.framescount = 0
            },
            update: function(e) {
                return !0
            },
            draw: function(e) {
                this.font.textAlign = "left", this.text = "PRESS ENTER TO PLAY", this.text2 = "second line", this.framescount += 1;
                for (var t = 0; t < this.text.length; t++) this.framescount >= 10 * t && this.font.draw(e, this.text[t], me.game.viewport.width / 2 + 32 * t, 320);
                for (t = 0; t < this.text2.length; t++) this.framescount >= 100 + 10 * this.text.length + 10 * t && this.font.draw(e, this.text2[t], me.game.viewport.width / 2 + 32 * t, 480);
                this.font.textAlign = "left"
            },
            onDestroyEvent: function() {}
        })), 2), me.input.bindKey(me.input.KEY.ENTER, "enter", !0), me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER), this.handler = me.event.subscribe(me.event.KEYDOWN, function(e, t, i) {
            "enter" === e && (me.audio.play("cling"), me.state.change(me.state.PLAY))
        })
    },
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER), me.input.unbindPointer(me.input.pointer.LEFT), me.event.unsubscribe(this.handler)
    }
});
var MenuButton = me.GUI_Object.extend({
    onClick: function() {
        return me.state.change(me.state.PLAY), !0
    }
});
game.WinScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#0f0f0f"), 0);
        var e = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("money"),
                z: 0,
                repeat: "no-repeat"
            }),
            t = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla1"),
                z: 0,
                repeat: "no-repeat"
            }),
            i = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla2"),
                z: 0,
                repeat: "no-repeat"
            }),
            n = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla3"),
                z: 0,
                repeat: "no-repeat"
            }),
            r = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla4"),
                z: 0,
                repeat: "no-repeat"
            }),
            s = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla5"),
                z: 0,
                repeat: "no-repeat"
            }),
            o = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla6"),
                z: 0,
                repeat: "no-repeat"
            }),
            a = new me.ImageLayer(0, 0, {
                image: me.loader.getImage("idylla7"),
                z: 0,
                repeat: "no-repeat"
            });
        setTimeout(function(e, t) {
            t.addChild(e)
        }, 0, e, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 500, t, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 1e3, i, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 1500, n, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 2e3, r, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 2500, s, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 3e3, o, me.game.world), setTimeout(function(e, t) {
            t.addChild(e)
        }, 3500, a, me.game.world)
    },
    onDestroyEvent: function() {
        me.audio.stopTrack()
    }
});