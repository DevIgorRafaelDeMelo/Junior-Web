(self.webpackChunk = self.webpackChunk || []).push([
  ["22"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new G.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          Y.debug && window && window.console.warn(e);
        }
        var d,
          l,
          c,
          s = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(d, l) {
              function c() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              l === n && ((l = d), (d = Object)), (c.Bare = s);
              var u,
                f = (o[e] = d[e]),
                p = (s[e] = c[e] = new o());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (s[e] = c[e] = r(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(c, p, f, c, d)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return i(p.init) || (p.init = d), c;
                }),
                c.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          y = /[\-\.0-9]/g,
          T = /[A-Z]/,
          E = "number",
          I = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          h = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          R = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((n = A[t] + a) in R.style) return { dom: n, css: S[t] + e };
          },
          N = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (N.transition) {
          var C = N.timing.dom;
          if (((R.style[C] = u["ease-in-back"][0]), !R.style[C]))
            for (var x in f) u[x][0] = f[x];
        }
        var w = (t.frame =
            (d =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && N.bind
              ? d.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (c =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && N.bind
              ? c.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          U = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = j[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  d = this.props[a];
                return (
                  d || (d = this.props[a] = new o.Bare()),
                  d.init(this.$el, n, i, t),
                  d
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      d.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    g = !1,
                    y = {};
                  w(function () {
                    u.call(p, e, function (e) {
                      e.active && ((g = !0), (y[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(y);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function d(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function l() {
              d.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[N.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                d,
                l = t !== f,
                c = {};
              for (i in e)
                (r = e[i]),
                  i in Q
                    ? (c.transform || (c.transform = {}), (c.transform[i] = r))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in j ? (c[i] = r) : (d || (d = {}), (d[i] = r)));
              for (i in c) {
                if (((r = c[i]), !(o = this.props[i]))) {
                  if (!l) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && d && a.call(this, d);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function y(e) {
              this.$el.css(e);
            }
            function E(e, n) {
              t[e] = function () {
                return this.children
                  ? I.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function I(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Y.keepInherited && !Y.fallback)
              ) {
                var n = H(this.el, "transition");
                n && !h.test(n) && (this.upstream = n);
              }
              N.backface &&
                Y.hideBackface &&
                z(this.el, N.backface.css, "hidden");
            }),
              E("add", n),
              E("start", a),
              E("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              E("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              E("next", i),
              E("stop", d),
              E("set", function (e) {
                d.call(this, e), u.call(this, e, p, y);
              }),
              E("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              E("hide", l),
              E("redraw", c),
              E("destroy", function () {
                d.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          G = s(U, function (t) {
            function n(t, n) {
              var a = e.data(t, g) || e.data(t, g, new U.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          P = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, a) {
              (this.$el = e), (this.el = e[0]);
              var i,
                r,
                d,
                l = t[0];
              n[2] && (l = n[2]),
                W[l] && (l = W[l]),
                (this.name = l),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (d = "ease"),
                  void 0 !== r && (d = r),
                  i in u ? i : d)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = a.unit || this.unit || Y.defaultUnit),
                (this.angle = a.angle || this.angle || Y.defaultAngle),
                Y.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                z(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  z(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  d = "string" == typeof e;
                switch (t) {
                  case E:
                    if (o) return e;
                    if (d && "" === e.replace(y, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case I:
                    if (d) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (d && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (d && m.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          F = s(P, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), I));
            };
          }),
          V = s(P, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          D = s(P, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                (i = (o = Q[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Q.perspective &&
                    Y.perspective &&
                    ((this.current.perspective = Y.perspective),
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                z(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          k = s(function (t) {
            function o() {
              var e,
                t,
                n,
                a = l.length;
              if (a)
                for (w(o), t = M(), e = a; e--; ) (n = l[e]) && n.render(t);
            }
            var d = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || d.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = d.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = d.from),
                void 0 === a && (a = d.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  1 === l.push(this) && w(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, l)) >= 0 &&
                    ((t = l.slice(n + 1)),
                    (l.length = n),
                    t.length && (l = l.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + r * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(y, "");
                  a !== e.replace(y, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var l = [],
              c = 1e3;
          }),
          X = s(k, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          B = s(k, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Y = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !N.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!N.transition) return (Y.fallback = !0);
          Y.agentTests.push("(" + e + ")");
          var t = RegExp(Y.agentTests.join("|"), "i");
          Y.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var z = e.style,
          H = e.css,
          W = { transform: N.transform && N.transform.css },
          j = {
            color: [F, I],
            background: [F, I, "background-color"],
            "outline-color": [F, I],
            "border-color": [F, I],
            "border-top-color": [F, I],
            "border-right-color": [F, I],
            "border-bottom-color": [F, I],
            "border-left-color": [F, I],
            "border-width": [P, b],
            "border-top-width": [P, b],
            "border-right-width": [P, b],
            "border-bottom-width": [P, b],
            "border-left-width": [P, b],
            "border-spacing": [P, b],
            "letter-spacing": [P, b],
            margin: [P, b],
            "margin-top": [P, b],
            "margin-right": [P, b],
            "margin-bottom": [P, b],
            "margin-left": [P, b],
            padding: [P, b],
            "padding-top": [P, b],
            "padding-right": [P, b],
            "padding-bottom": [P, b],
            "padding-left": [P, b],
            "outline-width": [P, b],
            opacity: [P, E],
            top: [P, m],
            right: [P, m],
            bottom: [P, m],
            left: [P, m],
            "font-size": [P, m],
            "text-indent": [P, m],
            "word-spacing": [P, m],
            width: [P, m],
            "min-width": [P, m],
            "max-width": [P, m],
            height: [P, m],
            "min-height": [P, m],
            "max-height": [P, m],
            "line-height": [P, v],
            "scroll-top": [V, E, "scrollTop"],
            "scroll-left": [V, E, "scrollLeft"],
          },
          Q = {};
        N.transform &&
          ((j.transform = [D]),
          (Q = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [E],
            scaleX: [E],
            scaleY: [E],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          N.transform &&
            N.backface &&
            ((Q.z = [m, "translateZ"]),
            (Q.rotateZ = [O]),
            (Q.scaleZ = [E]),
            (Q.perspective = [b]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        d,
        l,
        c,
        s,
        u,
        f,
        p,
        g,
        y,
        T,
        E,
        I,
        b,
        m,
        O,
        v,
        h = window.$,
        _ = n(5487) && h.tram;
      ((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (d = Function.prototype),
        o.push,
        (l = o.slice),
        o.concat,
        r.toString,
        (c = r.hasOwnProperty),
        (s = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (p = o.some),
        (g = o.indexOf),
        o.lastIndexOf,
        (y = Object.keys),
        d.bind,
        (T =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var d = a.keys(e), o = 0, r = d.length; o < r; o++)
                  if (t.call(n, e[d[o]], d[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (T(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              E(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (T(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (E =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, n)
                : (T(e, function (e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : E(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(l.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              _.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            d,
            l,
            c = function () {
              var s = a.now() - d;
              s < t
                ? (i = setTimeout(c, t - s))
                : ((i = null), n || ((l = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            (r = this), (o = arguments), (d = a.now());
            var s = n && !i;
            return (
              i || (i = setTimeout(c, t)),
              s && ((l = e.apply(r, o)), (r = o = null)),
              l
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (y) return y(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return c.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (I = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + b[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || I)
                  .source,
                (t.interpolate || I).source,
                (t.evaluate || I).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            d = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (d += e.slice(r, o).replace(m, O)),
              (r = o + t.length),
              n
                ? (d += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (d += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (d += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (d += "';\n");
          var l = t.variable;
          if (l) {
            if (!v.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else (d = "with(obj||{}){\n" + d + "}\n"), (l = "obj");
          d =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            d +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", d);
          } catch (e) {
            throw ((e.source = d), e);
          }
          var c = function (e) {
            return i.call(this, e, a);
          };
          return (c.source = "function(" + l + "){\n" + d + "}"), c;
        }),
        (e.exports = a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            r = e("body"),
            d = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          
          return (
            (n.ready = function () {
              var n,
                a,
                r,
                f = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && d.hostname !== p && (f = !0),
                f &&
                  !l &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (a = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (r = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(a, r),
                    n[0])),
                  u(),
                  setTimeout(u, 500),
                  e(i).off(c, s).on(c, s));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            d = document.location,
            l = "hashchange",
            c =
              n.load ||
              function () {
                var t, n, a;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(l, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (g(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (g(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    g(n, a), t(!1);
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(d.hash) && c();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? c()
              : d.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) ||
                  /\?edit$/.test(d.href)) &&
                c()
              : o.on(l, u).triggerHandler(l),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function d() {
                      t = !1;
                    }
                    function l() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", c),
                        document.removeEventListener("mousedown", c),
                        document.removeEventListener("mouseup", c),
                        document.removeEventListener("pointermove", c),
                        document.removeEventListener("pointerdown", c),
                        document.removeEventListener("pointerup", c),
                        document.removeEventListener("touchmove", c),
                        document.removeEventListener("touchstart", c),
                        document.removeEventListener("touchend", c));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", d, !0),
                      document.addEventListener("pointerdown", d, !0),
                      document.addEventListener("touchstart", d, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), l());
                        },
                        !0
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, d;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (d = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === d && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            (i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var o = window.jQuery,
        r = {},
        d = ".w-ix";
      (r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + d, OUTRO: "w-ix-outro" + d }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = r);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        d = [],
        l = window.Webflow || [],
        c = window.jQuery,
        s = c(window),
        u = c(document),
        f = c.isFunction,
        p = (o._ = n(5756)),
        g = (o.tram = n(5487) && c.tram),
        y = !1,
        T = !1;
      function E(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (y) return e.ready();
              p.contains(d, e.ready) || d.push(e.ready);
            })(e);
      }
      function I(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (d = p.filter(d, function (e) {
              return e !== t.ready;
            })));
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && I(r[e]);
          var a = (r[e] = t(c, p, n) || {});
          return E(a), a;
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (y) {
            f(e) && e();
            return;
          }
          l.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var b = navigator.userAgent.toLowerCase(),
        m = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(b));
      (o.env.safari = /safari/.test(b) && !O && !v),
        m &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = m
          ? function (e) {
              return e === a || c.contains(e, a);
            }
          : function () {
              return !0;
            });
      var h = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + h;
      function R(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function A(e) {
        f(e) && e();
      }
      function S() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new c.Deferred()),
          s.on("load", i.resolve);
      }
      (o.resize = R(s, h)),
        (o.scroll = R(s, _)),
        (o.redraw = R()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (y = !0),
            T ? ((T = !1), p.each(r, E)) : p.each(d, A),
            p.each(l, A),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (T = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (y = e.domready),
            p.each(r, I),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (d = []),
            (l = []),
            "pending" === i.state() && S();
        }),
        c(o.ready),
        S(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            d = e(window),
            l = a.env(),
            c = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function g() {
            var e = d.scrollTop(),
              n = d.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  d = 0.5 * n,
                  l = i.is(":visible") && o + r - d >= e && o + d <= e + n;
                t.active !== l && ((t.active = l), y(a, u, l));
              }
            });
          }
          function y(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  (n = l && a.env("design")),
                    (o = a.env("slug") || c.pathname || ""),
                    a.scroll.off(g),
                    (i = []);
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === c.host + c.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var d = e(s.hash);
                            d.length && i.push({ link: r, sec: d, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            y(
                              r,
                              u,
                              s.href === c.href ||
                                a === o ||
                                (f.test(a) && p.test(o))
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(g), g());
                }),
            r
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            d = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = a.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let y =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function T(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function E(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var c =
                g.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== c) {
                var u,
                  f = e(c);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = c),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(s),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              d = t.outerHeight();
                            d < r && (i -= Math.round((r - d) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              y.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              d.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          c = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              d,
                              s,
                              f = Date.now() - c;
                            window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (d = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = o / d) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= r ? l(u) : "function" == typeof n && n();
                          };
                        l(u);
                      }
                    })(f, function () {
                      T(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        T(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              r.on(n, f, E),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              d = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function c(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a,
                  l,
                  c,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  g = p - i;
                (i = p),
                  Math.abs(g) > d &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (l = t),
                    (c = { direction: g > 0 ? "right" : "left" }),
                    (s = e.Event(a, { originalEvent: l })),
                    e(l.target).trigger(s, c),
                    u());
              }
            }
            function s(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (r = !1);
                return;
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", l, !1),
                  t.removeEventListener("touchmove", c, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", l, !1),
                  t.removeEventListener("mousemove", c, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, a, i, o, r, d, l, c, s, u, f) {
        return function (p) {
          e(p);
          var g = p.form,
            y = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: u("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html()
              ),
              trackingCookies: a(),
            };
          let T = g.attr("data-wf-flow");
          T && (y.wfFlow = T), i(p);
          var E = o(g, y.fields);
          return E
            ? r(E)
            : ((y.fileUploads = d(g)), l(p), c)
            ? void u
                .ajax({
                  url: f,
                  type: "POST",
                  data: y,
                  dataType: "json",
                  crossDomain: !0,
                })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), s(p);
                })
                .fail(function () {
                  s(p);
                })
            : void s(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var a = n(3949);
      let i = (e, t, n, a) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              a();
            },
          });
      };
      a.define(
        "forms",
        (e.exports = function (e, t) {
          let o,
            r = "TURNSTILE_LOADED";
          var d,
            l,
            c,
            s,
            u,
            f = {},
            p = e(document),
            g = window.location,
            y = window.XDomainRequest && !window.atob,
            T = ".w-form",
            E = /e(-)?mail/i,
            I = /^\S+@\S+$/,
            b = window.alert,
            m = a.env();
          let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            h = t.debounce(function () {
              b(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          function _(t, o) {
            var d = e(o),
              c = e.data(o, T);
            c || (c = e.data(o, T, { form: d })), R(c);
            var f = d.closest("div.w-form");
            (c.done = f.find("> .w-form-done")),
              (c.fail = f.find("> .w-form-fail")),
              (c.fileUploads = f.find(".w-file-upload")),
              c.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var a,
                      i = e(n.fileUploads[t]),
                      o = i.find("> .w-file-upload-default"),
                      r = i.find("> .w-file-upload-uploading"),
                      d = i.find("> .w-file-upload-success"),
                      l = i.find("> .w-file-upload-error"),
                      c = o.find(".w-file-upload-input"),
                      s = o.find(".w-file-upload-label"),
                      f = s.children(),
                      p = l.find(".w-file-upload-error-msg"),
                      g = d.find(".w-file-upload-file"),
                      y = d.find(".w-file-remove-link"),
                      T = g.find(".w-file-upload-file-name"),
                      E = p.attr("data-w-size-error"),
                      I = p.attr("data-w-type-error"),
                      b = p.attr("data-w-generic-error");
                    if (
                      (m ||
                        s.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), c.click());
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      y
                        .find(".w-icon-file-upload-remove")
                        .attr("aria-hidden", "true"),
                      m)
                    )
                      c.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      y.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        c.removeAttr("data-value"),
                          c.val(""),
                          T.html(""),
                          o.toggle(!0),
                          d.toggle(!1),
                          s.focus();
                      }),
                        c.on("change", function (i) {
                          var d, c, s;
                          (a =
                            i.target && i.target.files && i.target.files[0]) &&
                            (o.toggle(!1),
                            l.toggle(!1),
                            r.toggle(!0),
                            r.focus(),
                            T.text(a.name),
                            S() || A(n),
                            (n.fileUploads[t].uploading = !0),
                            (d = a),
                            (c = h),
                            (s = new URLSearchParams({
                              name: d.name,
                              size: d.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${u}?${s}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                c(null, e);
                              })
                              .fail(function (e) {
                                c(e);
                              }));
                        });
                      var O = s.outerHeight();
                      c.height(O), c.width(1);
                    }
                  }
                  function v(e) {
                    var a = e.responseJSON && e.responseJSON.msg,
                      i = b;
                    "string" == typeof a &&
                    0 === a.indexOf("InvalidFileTypeError")
                      ? (i = I)
                      : "string" == typeof a &&
                        0 === a.indexOf("MaxFileSizeError") &&
                        (i = E),
                      p.text(i),
                      c.removeAttr("data-value"),
                      c.val(""),
                      r.toggle(!1),
                      o.toggle(!0),
                      l.toggle(!0),
                      l.focus(),
                      (n.fileUploads[t].uploading = !1),
                      S() || R(n);
                  }
                  function h(t, n) {
                    if (t) return v(t);
                    var i = n.fileName,
                      o = n.postData,
                      r = n.fileId,
                      d = n.s3Url;
                    c.attr("data-value", r),
                      (function (t, n, a, i, o) {
                        var r = new FormData();
                        for (var d in n) r.append(d, n[d]);
                        r.append("file", a, i),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: r,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              o(null);
                            })
                            .fail(function (e) {
                              o(e);
                            });
                      })(d, o, a, i, _);
                  }
                  function _(e) {
                    if (e) return v(e);
                    r.toggle(!1),
                      d.css("display", "inline-block"),
                      d.focus(),
                      (n.fileUploads[t].uploading = !1),
                      S() || R(n);
                  }
                  function S() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, c);
              }),
              O &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading");
                })(c),
                S(d, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : r,
                  function () {
                    i(
                      O,
                      o,
                      (e) => {
                        (c.turnstileToken = e), R(c), S(d, !1);
                      },
                      () => {
                        R(c), c.btn && c.btn.prop("disabled", !0), S(d, !1);
                      }
                    );
                  }
                ));
            var y =
              c.form.attr("aria-label") || c.form.attr("data-name") || "Form";
            c.done.attr("aria-label") || c.form.attr("aria-label", y),
              c.done.attr("tabindex", "-1"),
              c.done.attr("role", "region"),
              c.done.attr("aria-label") ||
                c.done.attr("aria-label", y + " success"),
              c.fail.attr("tabindex", "-1"),
              c.fail.attr("role", "region"),
              c.fail.attr("aria-label") ||
                c.fail.attr("aria-label", y + " failure");
            var E = (c.action = d.attr("action"));
            if (
              ((c.handler = null),
              (c.redirect = d.attr("data-redirect")),
              v.test(E))
            ) {
              c.handler = w;
              return;
            }
            if (!E) {
              if (l) {
                c.handler = (0, n(6524).default)(
                  R,
                  g,
                  a,
                  x,
                  U,
                  L,
                  b,
                  N,
                  A,
                  l,
                  M,
                  e,
                  s
                );
                return;
              }
              h();
            }
          }
          function R(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null), (e.success = !1);
            let n = !!(O && !e.turnstileToken);
            t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label);
          }
          function A(e) {
            var t = e.btn,
              n = e.wait;
            t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
          }
          function S(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function L(t, n) {
            var a = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (i, o) {
                  var r,
                    d,
                    l,
                    c,
                    s,
                    u = e(o),
                    f = u.attr("type"),
                    p =
                      u.attr("data-name") ||
                      u.attr("name") ||
                      "Field " + (i + 1);
                  p = encodeURIComponent(p);
                  var g = u.val();
                  if ("checkbox" === f) g = u.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    g =
                      t
                        .find('input[name="' + u.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof g && (g = e.trim(g)),
                    (n[p] = g),
                    (a =
                      a ||
                      ((r = u),
                      (d = f),
                      (l = p),
                      (c = g),
                      (s = null),
                      "password" === d
                        ? (s = "Passwords cannot be submitted.")
                        : r.attr("required")
                        ? c
                          ? E.test(r.attr("type")) &&
                            !I.test(c) &&
                            (s = "Please enter a valid email address for: " + l)
                          : (s = "Please fill out the required field: " + l)
                        : "g-recaptcha-response" !== l ||
                          c ||
                          (s = "Please confirm you're not a robot."),
                      s));
                }),
              a
            );
          }
          function N(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, a) {
                var i = e(a),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  r = i.attr("data-value");
                "string" == typeof r && (r = e.trim(r)), (n[o] = r);
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                O &&
                  (((o = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(o),
                  (o.onload = () => {
                    p.trigger(r);
                  })),
                  (s =
                    "https://webflow.com/api/v1/form/" +
                    (l = e("html").attr("data-wf-site"))),
                  y &&
                    s.indexOf("https://webflow.com") >= 0 &&
                    (s = s.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com"
                    )),
                  (u = `${s}/signFile`),
                  (d = e(T + " form")).length && d.each(_),
                  (!m || a.env("preview")) &&
                    !c &&
                    (function () {
                      (c = !0),
                        p.on("submit", T + " form", function (t) {
                          var n = e.data(this, T);
                          n.handler && ((n.evt = t), n.handler(n));
                        });
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        a = "w--redirected-checked",
                        i = "w--redirected-focus",
                        o = "w--redirected-focus-visible",
                        r = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      p.on(
                        "change",
                        T + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(a);
                        }
                      ),
                        p.on("change", T + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(n).removeClass(a)
                          );
                          let o = e(i.target);
                          o.hasClass("w-radio-input") ||
                            o.siblings(n).addClass(a);
                        }),
                        r.forEach(([t, n]) => {
                          p.on(
                            "focus",
                            T + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              e(t.target).siblings(n).addClass(i),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(n)
                                  .addClass(o);
                            }
                          ),
                            p.on(
                              "blur",
                              T + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${i} ${o}`);
                              }
                            );
                        });
                    })();
              };
          let C = { _mkto_trk: "marketo" };
          function x() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                a = n[0];
              if (a in C) {
                let t = C[a],
                  i = n.slice(1).join("=");
                e[t] = i;
              }
              return e;
            }, {});
          }
          function w(n) {
            R(n);
            var a,
              i = n.form,
              o = {};
            if (/^https/.test(g.href) && !/^https/.test(n.action))
              return void i.attr("method", "post");
            U(n);
            var r = L(i, o);
            if (r) return b(r);
            A(n),
              t.each(o, function (e, t) {
                E.test(t) && (o.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (a = e),
                  /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e);
              }),
              a &&
                !o.FNAME &&
                ((o.FNAME = (a = a.split(" "))[0]),
                (o.LNAME = o.LNAME || a[1]));
            var d = n.action.replace("/post?", "/post-json?") + "&c=?",
              l = d.indexOf("u=") + 2;
            l = d.substring(l, d.indexOf("&", l));
            var c = d.indexOf("id=") + 3;
            (o["b_" + l + "_" + (c = d.substring(c, d.indexOf("&", c)))] = ""),
              e
                .ajax({ url: d, data: o, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    M(n);
                })
                .fail(function () {
                  M(n);
                });
          }
          function M(e) {
            var t = e.form,
              n = e.redirect,
              i = e.success;
            if (i && n) return void a.location(n);
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              R(e);
          }
          function U(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            r,
            d,
            l,
            c = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            g = a.env(),
            y = ".w-nav",
            T = "w--open",
            E = "w--nav-dropdown-open",
            I = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            m = "w--nav-link-open",
            O = i.triggers,
            v = e();
          function h() {
            a.resize.off(_);
          }
          function _() {
            r.each(U);
          }
          function R(n, a) {
            var i,
              r,
              c,
              s,
              p,
              g = e(a),
              T = e.data(a, y);
            T ||
              (T = e.data(a, y, {
                open: !1,
                el: g,
                config: {},
                selectedIdx: -1,
              })),
              (T.menu = g.find(".w-nav-menu")),
              (T.links = T.menu.find(".w-nav-link")),
              (T.dropdowns = T.menu.find(".w-dropdown")),
              (T.dropdownToggle = T.menu.find(".w-dropdown-toggle")),
              (T.dropdownList = T.menu.find(".w-dropdown-list")),
              (T.button = g.find(".w-nav-button")),
              (T.container = g.find(".w-container")),
              (T.overlayContainerId = "w-nav-overlay-" + n),
              (T.outside =
                ((i = T).outside && f.off("click" + y, i.outside),
                function (t) {
                  var n = e(t.target);
                  (l && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    M(i, n);
                }));
            var E = g.find(".w-nav-brand");
            E &&
              "/" === E.attr("href") &&
              null == E.attr("aria-label") &&
              E.attr("aria-label", "home"),
              T.button.attr("style", "-webkit-user-select: text;"),
              null == T.button.attr("aria-label") &&
                T.button.attr("aria-label", "menu"),
              T.button.attr("role", "button"),
              T.button.attr("tabindex", "0"),
              T.button.attr("aria-controls", T.overlayContainerId),
              T.button.attr("aria-haspopup", "menu"),
              T.button.attr("aria-expanded", "false"),
              T.el.off(y),
              T.button.off(y),
              T.menu.off(y),
              L(T),
              d
                ? (S(T),
                  T.el.on(
                    "setting" + y,
                    ((r = T),
                    function (e, n) {
                      n = n || {};
                      var a = u.width();
                      L(r),
                        !0 === n.open && V(r, !0),
                        !1 === n.open && k(r, !0),
                        r.open &&
                          t.defer(function () {
                            a !== u.width() && C(r);
                          });
                    })
                  ))
                : ((c = T).overlay ||
                    ((c.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(c.el)),
                    c.overlay.attr("id", c.overlayContainerId),
                    (c.parent = c.menu.parent()),
                    k(c, !0)),
                  T.button.on("click" + y, x(T)),
                  T.menu.on("click" + y, "a", w(T)),
                  T.button.on(
                    "keydown" + y,
                    ((s = T),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            x(s)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return k(s), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === o.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            N(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  T.el.on(
                    "keydown" + y,
                    ((p = T),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              N(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              k(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              N(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              N(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              U(n, a);
          }
          function A(t, n) {
            var a = e.data(n, y);
            a && (S(a), e.removeData(n, y));
          }
          function S(e) {
            e.overlay && (k(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function L(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function N(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), w(t);
            }
          }
          function C(e) {
            e.open && (k(e, !0), V(e, !0));
          }
          function x(e) {
            return p(function () {
              e.open ? k(e) : V(e);
            });
          }
          function w(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && k(t);
            };
          }
          (c.ready =
            c.design =
            c.preview =
              function () {
                (d = g && a.env("design")),
                  (l = a.env("editor")),
                  (n = e(document.body)),
                  (r = f.find(y)).length && (r.each(R), h(), a.resize.on(_));
              }),
            (c.destroy = function () {
              (v = e()), h(), r && r.length && r.each(A);
            });
          var M = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || k(e);
            }
          });
          function U(t, n) {
            var a = e.data(n, y),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || d || k(a, !0), a.container.length)) {
              var o,
                r =
                  ("none" === (o = a.container.css(G)) && (o = ""),
                  function (t, n) {
                    (n = e(n)).css(G, ""), "none" === n.css(G) && n.css(G, o);
                  });
              a.links.each(r), a.dropdowns.each(r);
            }
            a.open && D(a);
          }
          var G = "max-width";
          function P(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function F(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function V(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(P),
                e.links.addClass(m),
                e.dropdowns.addClass(E),
                e.dropdownToggle.addClass(I),
                e.dropdownList.addClass(b),
                e.button.addClass(T);
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = D(e),
                o = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                l = e.el.height(),
                c = e.el[0];
              if (
                (U(0, c),
                O.intro(0, c),
                a.redraw.up(),
                d || f.on("click" + y, e.outside),
                t)
              )
                return void p();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * r, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(r);
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(l + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function D(e) {
            var t = e.config,
              a = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function k(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(T);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + y, e.outside),
                t)
              ) {
                s(e.menu).stop(), d();
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                r = e.el.height();
              if (n.animOver)
                return void s(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(d);
              s(e.menu)
                .add(a)
                .start({ y: -(r + i) })
                .then(d);
            }
            function d() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(F),
                e.links.removeClass(m),
                e.dropdowns.removeClass(E),
                e.dropdownToggle.removeClass(I),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return c;
        })
      );
    },
    4345: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        r =
          'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      a.define(
        "slider",
        (e.exports = function (e, t) {
          var n,
            d,
            l,
            c = {},
            s = e.tram,
            u = e(document),
            f = a.env(),
            p = ".w-slider",
            g = "w-slider-force-show",
            y = i.triggers,
            T = !1;
          function E() {
            (n = u.find(p)).length &&
              (n.each(m), l || (I(), a.resize.on(b), a.redraw.on(c.redraw)));
          }
          function I() {
            a.resize.off(b), a.redraw.off(c.redraw);
          }
          function b() {
            n.filter(":visible").each(w);
          }
          function m(t, n) {
            var a = e(n),
              i = e.data(n, p);
            i ||
              (i = e.data(n, p, {
                index: 0,
                depth: 1,
                hasFocus: { keyboard: !1, mouse: !1 },
                el: a,
                config: {},
              })),
              (i.mask = a.children(".w-slider-mask")),
              (i.left = a.children(".w-slider-arrow-left")),
              (i.right = a.children(".w-slider-arrow-right")),
              (i.nav = a.children(".w-slider-nav")),
              (i.slides = i.mask.children(".w-slide")),
              i.slides.each(y.reset),
              T && (i.maskWidth = 0),
              void 0 === a.attr("role") && a.attr("role", "region"),
              void 0 === a.attr("aria-label") &&
                a.attr("aria-label", "carousel");
            var o = i.mask.attr("id");
            if (
              (o || ((o = "w-slider-mask-" + t), i.mask.attr("id", o)),
              d ||
                i.ariaLiveLabel ||
                (i.ariaLiveLabel = e(
                  '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                ).appendTo(i.mask)),
              i.left.attr("role", "button"),
              i.left.attr("tabindex", "0"),
              i.left.attr("aria-controls", o),
              void 0 === i.left.attr("aria-label") &&
                i.left.attr("aria-label", "previous slide"),
              i.right.attr("role", "button"),
              i.right.attr("tabindex", "0"),
              i.right.attr("aria-controls", o),
              void 0 === i.right.attr("aria-label") &&
                i.right.attr("aria-label", "next slide"),
              !s.support.transform)
            ) {
              i.left.hide(), i.right.hide(), i.nav.hide(), (l = !0);
              return;
            }
            i.el.off(p),
              i.left.off(p),
              i.right.off(p),
              i.nav.off(p),
              O(i),
              d
                ? (i.el.on("setting" + p, N(i)), L(i), (i.hasTimer = !1))
                : (i.el.on("swipe" + p, N(i)),
                  i.left.on("click" + p, R(i)),
                  i.right.on("click" + p, A(i)),
                  i.left.on("keydown" + p, _(i, R)),
                  i.right.on("keydown" + p, _(i, A)),
                  i.nav.on("keydown" + p, "> div", N(i)),
                  i.config.autoplay &&
                    !i.hasTimer &&
                    ((i.hasTimer = !0), (i.timerCount = 1), S(i)),
                  i.el.on("mouseenter" + p, h(i, !0, "mouse")),
                  i.el.on("focusin" + p, h(i, !0, "keyboard")),
                  i.el.on("mouseleave" + p, h(i, !1, "mouse")),
                  i.el.on("focusout" + p, h(i, !1, "keyboard"))),
              i.nav.on("click" + p, "> div", N(i)),
              f ||
                i.mask
                  .contents()
                  .filter(function () {
                    return 3 === this.nodeType;
                  })
                  .remove();
            var r = a.filter(":hidden");
            r.addClass(g);
            var c = a.parents(":hidden");
            c.addClass(g), T || w(t, n), r.removeClass(g), c.removeClass(g);
          }
          function O(e) {
            var t = {};
            (t.crossOver = 0),
              (t.animation = e.el.attr("data-animation") || "slide"),
              "outin" === t.animation &&
                ((t.animation = "cross"), (t.crossOver = 0.5)),
              (t.easing = e.el.attr("data-easing") || "ease");
            var n = e.el.attr("data-duration");
            if (
              ((t.duration = null != n ? parseInt(n, 10) : 500),
              v(e.el.attr("data-infinite")) && (t.infinite = !0),
              v(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0),
              v(e.el.attr("data-hide-arrows"))
                ? (t.hideArrows = !0)
                : e.config.hideArrows && (e.left.show(), e.right.show()),
              v(e.el.attr("data-autoplay")))
            ) {
              (t.autoplay = !0),
                (t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3),
                (t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10));
              var a = "mousedown" + p + " touchstart" + p;
              d ||
                e.el.off(a).one(a, function () {
                  L(e);
                });
            }
            var i = e.right.width();
            (t.edge = i ? i + 40 : 100), (e.config = t);
          }
          function v(e) {
            return "1" === e || "true" === e;
          }
          function h(t, n, a) {
            return function (i) {
              if (n) t.hasFocus[a] = n;
              else if (
                e.contains(t.el.get(0), i.relatedTarget) ||
                ((t.hasFocus[a] = n),
                (t.hasFocus.mouse && "keyboard" === a) ||
                  (t.hasFocus.keyboard && "mouse" === a))
              )
                return;
              n
                ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                  t.hasTimer && L(t))
                : (t.ariaLiveLabel.attr("aria-live", "off"),
                  t.hasTimer && S(t));
            };
          }
          function _(e, t) {
            return function (n) {
              switch (n.keyCode) {
                case o.SPACE:
                case o.ENTER:
                  return t(e)(), n.preventDefault(), n.stopPropagation();
              }
            };
          }
          function R(e) {
            return function () {
              x(e, { index: e.index - 1, vector: -1 });
            };
          }
          function A(e) {
            return function () {
              x(e, { index: e.index + 1, vector: 1 });
            };
          }
          function S(e) {
            L(e);
            var t = e.config,
              n = t.timerMax;
            (n && e.timerCount++ > n) ||
              (e.timerId = window.setTimeout(function () {
                null == e.timerId || d || (A(e)(), S(e));
              }, t.delay));
          }
          function L(e) {
            window.clearTimeout(e.timerId), (e.timerId = null);
          }
          function N(n) {
            return function (i, r) {
              r = r || {};
              var l,
                c,
                s = n.config;
              if (d && "setting" === i.type) {
                if ("prev" === r.select) return R(n)();
                if ("next" === r.select) return A(n)();
                if ((O(n), M(n), null == r.select)) return;
                return (
                  (l = r.select),
                  (c = null),
                  l === n.slides.length && (E(), M(n)),
                  t.each(n.anchors, function (t, n) {
                    e(t.els).each(function (t, a) {
                      e(a).index() === l && (c = n);
                    });
                  }),
                  void (null != c && x(n, { index: c, immediate: !0 }))
                );
              }
              if ("swipe" === i.type)
                return s.disableSwipe || a.env("editor")
                  ? void 0
                  : "left" === r.direction
                  ? A(n)()
                  : "right" === r.direction
                  ? R(n)()
                  : void 0;
              if (n.nav.has(i.target).length) {
                var u = e(i.target).index();
                if (
                  ("click" === i.type && x(n, { index: u }),
                  "keydown" === i.type)
                )
                  switch (i.keyCode) {
                    case o.ENTER:
                    case o.SPACE:
                      x(n, { index: u }), i.preventDefault();
                      break;
                    case o.ARROW_LEFT:
                    case o.ARROW_UP:
                      C(n.nav, Math.max(u - 1, 0)), i.preventDefault();
                      break;
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                      C(n.nav, Math.min(u + 1, n.pages)), i.preventDefault();
                      break;
                    case o.HOME:
                      C(n.nav, 0), i.preventDefault();
                      break;
                    case o.END:
                      C(n.nav, n.pages), i.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            };
          }
          function C(e, t) {
            var n = e.children().eq(t).focus();
            e.children().not(n);
          }
          function x(t, n) {
            n = n || {};
            var a = t.config,
              i = t.anchors;
            t.previous = t.index;
            var o = n.index,
              l = {};
            o < 0
              ? ((o = i.length - 1),
                a.infinite &&
                  ((l.x = -t.endX), (l.from = 0), (l.to = i[0].width)))
              : o >= i.length &&
                ((o = 0),
                a.infinite &&
                  ((l.x = i[i.length - 1].width),
                  (l.from = -i[i.length - 1].x),
                  (l.to = l.from - l.x))),
              (t.index = o);
            var c = t.nav
              .children()
              .eq(o)
              .addClass("w-active")
              .attr("aria-pressed", "true")
              .attr("tabindex", "0");
            t.nav
              .children()
              .not(c)
              .removeClass("w-active")
              .attr("aria-pressed", "false")
              .attr("tabindex", "-1"),
              a.hideArrows &&
                (t.index === i.length - 1 ? t.right.hide() : t.right.show(),
                0 === t.index ? t.left.hide() : t.left.show());
            var u = t.offsetX || 0,
              f = (t.offsetX = -i[t.index].x),
              p = { x: f, opacity: 1, visibility: "" },
              g = e(i[t.index].els),
              E = e(i[t.previous] && i[t.previous].els),
              I = t.slides.not(g),
              b = a.animation,
              m = a.easing,
              O = Math.round(a.duration),
              v = n.vector || (t.index > t.previous ? 1 : -1),
              h = "opacity " + O + "ms " + m,
              _ = "transform " + O + "ms " + m;
            if (
              (g.find(r).removeAttr("tabindex"),
              g.removeAttr("aria-hidden"),
              g.find("*").removeAttr("aria-hidden"),
              I.find(r).attr("tabindex", "-1"),
              I.attr("aria-hidden", "true"),
              I.find("*").attr("aria-hidden", "true"),
              d || (g.each(y.intro), I.each(y.outro)),
              n.immediate && !T)
            ) {
              s(g).set(p), S();
              return;
            }
            if (t.index !== t.previous) {
              if (
                (d || t.ariaLiveLabel.text(`Slide ${o + 1} of ${i.length}.`),
                "cross" === b)
              ) {
                var R = Math.round(O - O * a.crossOver),
                  A = Math.round(O - R);
                (h = "opacity " + R + "ms " + m),
                  s(E).set({ visibility: "" }).add(h).start({ opacity: 0 }),
                  s(g)
                    .set({
                      visibility: "",
                      x: f,
                      opacity: 0,
                      zIndex: t.depth++,
                    })
                    .add(h)
                    .wait(A)
                    .then({ opacity: 1 })
                    .then(S);
                return;
              }
              if ("fade" === b) {
                s(E).set({ visibility: "" }).stop(),
                  s(g)
                    .set({
                      visibility: "",
                      x: f,
                      opacity: 0,
                      zIndex: t.depth++,
                    })
                    .add(h)
                    .start({ opacity: 1 })
                    .then(S);
                return;
              }
              if ("over" === b) {
                (p = { x: t.endX }),
                  s(E).set({ visibility: "" }).stop(),
                  s(g)
                    .set({
                      visibility: "",
                      zIndex: t.depth++,
                      x: f + i[t.index].width * v,
                    })
                    .add(_)
                    .start({ x: f })
                    .then(S);
                return;
              }
              a.infinite && l.x
                ? (s(t.slides.not(E))
                    .set({ visibility: "", x: l.x })
                    .add(_)
                    .start({ x: f }),
                  s(E)
                    .set({ visibility: "", x: l.from })
                    .add(_)
                    .start({ x: l.to }),
                  (t.shifted = E))
                : (a.infinite &&
                    t.shifted &&
                    (s(t.shifted).set({ visibility: "", x: u }),
                    (t.shifted = null)),
                  s(t.slides).set({ visibility: "" }).add(_).start({ x: f }));
            }
            function S() {
              (g = e(i[t.index].els)),
                (I = t.slides.not(g)),
                "slide" !== b && (p.visibility = "hidden"),
                s(I).set(p);
            }
          }
          function w(t, n) {
            var a,
              i,
              o,
              r,
              l = e.data(n, p);
            if (l) {
              if (
                ((i = (a = l).mask.width()),
                a.maskWidth !== i && ((a.maskWidth = i), 1))
              )
                return M(l);
              d &&
                ((r = 0),
                (o = l).slides.each(function (t, n) {
                  r += e(n).outerWidth(!0);
                }),
                o.slidesWidth !== r && ((o.slidesWidth = r), 1)) &&
                M(l);
            }
          }
          function M(t) {
            var n = 1,
              a = 0,
              i = 0,
              o = 0,
              r = t.maskWidth,
              l = r - t.config.edge;
            l < 0 && (l = 0),
              (t.anchors = [{ els: [], x: 0, width: 0 }]),
              t.slides.each(function (d, c) {
                i - a > l &&
                  (n++,
                  (a += r),
                  (t.anchors[n - 1] = { els: [], x: i, width: 0 })),
                  (o = e(c).outerWidth(!0)),
                  (i += o),
                  (t.anchors[n - 1].width += o),
                  t.anchors[n - 1].els.push(c);
                var s = d + 1 + " of " + t.slides.length;
                e(c).attr("aria-label", s), e(c).attr("role", "group");
              }),
              (t.endX = i),
              d && (t.pages = null),
              t.nav.length &&
                t.pages !== n &&
                ((t.pages = n),
                (function (t) {
                  var n,
                    a = [],
                    i = t.el.attr("data-nav-spacing");
                  i && (i = parseFloat(i) + "px");
                  for (var o = 0, r = t.pages; o < r; o++)
                    (n = e('<div class="w-slider-dot" data-wf-ignore />'))
                      .attr("aria-label", "Show slide " + (o + 1) + " of " + r)
                      .attr("aria-pressed", "false")
                      .attr("role", "button")
                      .attr("tabindex", "-1"),
                      t.nav.hasClass("w-num") && n.text(o + 1),
                      null != i &&
                        n.css({ "margin-left": i, "margin-right": i }),
                      a.push(n);
                  t.nav.empty().append(a);
                })(t));
            var c = t.index;
            c >= n && (c = n - 1), x(t, { immediate: !0, index: c });
          }
          return (
            (c.ready = function () {
              (d = a.env("design")), E();
            }),
            (c.design = function () {
              (d = !0), setTimeout(E, 1e3);
            }),
            (c.preview = function () {
              (d = !1), E();
            }),
            (c.redraw = function () {
              (T = !0), E(), (T = !1);
            }),
            (c.destroy = I),
            c
          );
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return G;
        },
        elementStateChanged: function () {
          return z;
        },
        eventListenerAdded: function () {
          return P;
        },
        eventStateChanged: function () {
          return V;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return Y;
        },
        instanceStarted: function () {
          return B;
        },
        mediaQueriesDefined: function () {
          return j;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return w;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return N;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return x;
        },
        stopRequested: function () {
          return U;
        },
        testFrameRendered: function () {
          return F;
        },
        viewportWidthChanged: function () {
          return W;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: d,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: y,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: E,
          IX2_ANIMATION_FRAME_CHANGED: I,
          IX2_PARAMETER_CHANGED: b,
          IX2_INSTANCE_ADDED: m,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: h,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: A,
        } = o.IX2EngineActionTypes,
        { reifyState: S } = r.IX2VanillaUtils,
        L = (e) => ({ type: d, payload: { ...S(e) } }),
        N = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: c }),
        x = () => ({ type: s }),
        w = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        M = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: d,
          verbose: l,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: d,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: l,
            rawData: c,
          },
        }),
        U = (e) => ({ type: p, payload: { actionListId: e } }),
        G = () => ({ type: g }),
        P = (e, t) => ({ type: y, payload: { target: e, listenerParams: t } }),
        F = (e = 1) => ({ type: T, payload: { step: e } }),
        V = (e, t) => ({ type: E, payload: { stateKey: e, newState: t } }),
        D = (e, t) => ({ type: I, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: b, payload: { key: e, value: t } }),
        X = (e) => ({ type: m, payload: { ...e } }),
        B = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        Y = (e) => ({ type: v, payload: { instanceId: e } }),
        z = (e, t, n, a) => ({
          type: h,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        W = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        j = () => ({ type: A });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return g;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        d = (a = n(7243)) && a.__esModule ? a : { default: a },
        l = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, r.createStore)(d.default);
      function f(e) {
        e() && (0, l.observeRequests)(u);
      }
      function p(e) {
        g(), (0, l.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function g() {
        (0, l.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return b;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return h;
        },
        getProperty: function () {
          return g;
        },
        getQuerySelector: function () {
          return T;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return E;
        },
        isSiblingNode: function () {
          return m;
        },
        matchSelector: function () {
          return y;
        },
        queryDocument: function () {
          return I;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: d } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: s,
          WF_PAGE: u,
        } = r.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function g(e, t) {
        return e[t];
      }
      function y(e) {
        return (t) => t[d](e);
      }
      function T({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function E(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function I(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function b(e, t) {
        return e.contains(t);
      }
      function m(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let h = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[d] && n[d](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eg;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = I(n(9777)),
        r = I(n(4738)),
        d = I(n(4659)),
        l = I(n(3452)),
        c = I(n(6633)),
        s = I(n(3729)),
        u = I(n(2397)),
        f = I(n(5082)),
        p = n(7087),
        g = n(9468),
        y = n(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = b(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        E = I(n(8955));
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (b = function (e) {
          return e ? n : t;
        })(e);
      }
      let m = Object.keys(p.QuickEffectIds),
        O = (e) => m.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: h,
          HTML_ELEMENT: _,
          RENDER_GENERAL: R,
          W_MOD_IX: A,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: L,
          getDestinationValues: N,
          observeStore: C,
          getInstanceId: x,
          renderHTMLElement: w,
          clearAllStyles: M,
          getMaxDurationItemIndex: U,
          getComputedStyle: G,
          getInstanceOrigin: P,
          reduceListToGroup: F,
          shouldNamespaceEventParameter: V,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: X,
          clearObjectCache: B,
          stringifyTarget: Y,
          mediaQueriesEqual: z,
          shallowEqual: H,
        } = g.IX2VanillaUtils,
        {
          isPluginType: W,
          createPluginInstance: j,
          getPluginDuration: Q,
        } = g.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: d,
            testManual: l,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (a && i && s && d) {
          let e = s.actionLists[a];
          e && (s = F({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (ea({ store: t, rawData: s, allowEvents: r, testManual: l }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          ep({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o });
          let e = eg({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: d,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, y.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !d,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), M({ store: t, elementApi: T });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, y.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, y.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(h),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              ed(e),
                (0, u.default)(n, (t, n) => {
                  let a = E.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = T.getQuerySelector(o);
                        t[r] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: c } = l,
                      s = el(n, es);
                    if (!(0, d.default)(s)) return;
                    (0, u.default)(s, (e, a) => {
                      let i = n[a],
                        {
                          action: d,
                          id: s,
                          mediaQueries: u = l.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = d.config;
                      z(u, l.mediaQueryKeys) ||
                        t.dispatch((0, y.mediaQueriesDefined)()),
                        d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              d = (0, o.default)(i, ({ id: e }) => e === a),
                              l = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            d &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: d,
                                  smoothing: l,
                                  restingValue: c,
                                }) {
                                  let { ixData: s, ixSession: u } =
                                      e.getState(),
                                    { events: f } = s,
                                    g = f[a],
                                    { eventTypeId: y } = g,
                                    E = {},
                                    I = {},
                                    b = [],
                                    { continuousActionGroups: m } = d,
                                    { id: O } = d;
                                  V(y, i) && (O = D(t, O));
                                  let _ =
                                    u.hasBoundaryNodes && n
                                      ? T.getClosestElement(n, h)
                                      : null;
                                  m.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? _ : null,
                                        r = Y(i) + v + a;
                                      if (
                                        ((I[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0)
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(I[r], t, e)),
                                        !E[r])
                                      ) {
                                        E[r] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: g,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: T,
                                        }).forEach((e) => {
                                          b.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    b.forEach(({ element: t, key: n }) => {
                                      let i = I[n],
                                        d = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = d,
                                        u = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                d.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : W(s)
                                        )
                                          ? j(s)?.(t, d)
                                          : null,
                                        f = N(
                                          {
                                            element: t,
                                            actionItem: d,
                                            elementApi: T,
                                          },
                                          u
                                        );
                                      ey({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: d,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: l,
                                        restingValue: c,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + v + a,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: d,
                                  smoothing: l,
                                  restingValue: u,
                                });
                              });
                          }),
                        (d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(d.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: s });
                    });
                    let g = (e) => {
                        let { ixSession: a } = t.getState();
                        ec(s, (o, r, d) => {
                          let c = n[r],
                            s = a.eventState[d],
                            { action: u, mediaQueries: f = l.mediaQueryKeys } =
                              c;
                          if (!k(f, a.mediaQueryKey)) return;
                          let g = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: d,
                              },
                              s
                            );
                            H(a, s) ||
                              t.dispatch((0, y.eventStateChanged)(d, a));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(g)
                            : g();
                        });
                      },
                      E = (0, f.default)(g, 12),
                      I = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? E : g;
                            e.addEventListener(n, i),
                              t.dispatch((0, y.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(I)
                      : "string" == typeof a && I(e);
                  })({ logic: a, store: e, events: t });
                });
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ed(e);
                  };
                  er.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, y.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    M({ store: e, elementApi: T }),
                    ea({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, y.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, y.animationFrameChanged)(a, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), B(), e.dispatch((0, y.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function ed(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, y.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, s.default)(e, t), c.default),
        ec = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        es = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: T,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: d } = a,
          l = d[n],
          c = o[t];
        if (c && c.useFirstGroupAsInitialState) {
          let o = (0, r.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, r.default)(l, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : i,
                event: l,
                elementApi: T,
              }),
              d = W(o);
            r.forEach((i) => {
              let r = d ? j(o)?.(i, a) : null;
              ey({
                destination: N({ element: i, actionItem: a, elementApi: T }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            eT(t, e),
              a &&
                e.dispatch(
                  (0, y.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: d } = e.getState(),
          l = d.hasBoundaryNodes && n ? T.getClosestElement(n, h) : null;
        (0, u.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            d = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && d) {
            if (l && o && !T.elementContains(l, n.element)) return;
            eT(n, e),
              n.verbose &&
                e.dispatch(
                  (0, y.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: d,
        verbose: l,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: u } = c,
          f = u[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: y } = (0,
          r.default)(c, `actionLists.${i}`, {});
        if (!g || !g.length) return !1;
        o >= g.length && (0, r.default)(f, "config.loop") && (o = 0),
          0 === o && y && o++;
        let E =
            (0 === o || (1 === o && y)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          I = (0, r.default)(g, [o, "actionItems"], []);
        if (!I.length || !k(p, s.mediaQueryKey)) return !1;
        let b = s.hasBoundaryNodes && n ? T.getClosestElement(n, h) : null,
          m = U(I),
          v = !1;
        return (
          I.forEach((r, c) => {
            let { config: s, actionTypeId: u } = r,
              p = W(u),
              { target: g } = s;
            g &&
              S({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: g.boundaryMode ? b : null,
                elementApi: T,
              }).forEach((s, f) => {
                let g = p ? j(u)?.(s, r) : null,
                  y = p ? Q(u)(s, r) : null;
                v = !0;
                let I = G({ element: s, actionItem: r }),
                  b = N({ element: s, actionItem: r, elementApi: T }, g);
                ey({
                  store: e,
                  element: s,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: m === c && 0 === f,
                  computedStyle: I,
                  destination: b,
                  immediate: d,
                  verbose: l,
                  pluginInstance: g,
                  pluginDuration: y,
                  instanceDelay: E,
                });
              });
          }),
          v
        );
      }
      function ey(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: d,
            pluginInstance: l,
            continuous: c,
            restingValue: s,
            eventId: u,
          } = i,
          f = x(),
          { ixElements: g, ixSession: E, ixData: I } = n.getState(),
          b = L(g, o),
          { refState: m } = g[b] || {},
          O = T.getRefType(o),
          v = E.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
        if (v && c)
          switch (I.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let h = P(o, m, a, r, T, l);
        if (
          (n.dispatch(
            (0, y.instanceAdded)({
              instanceId: f,
              elementId: b,
              origin: h,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eE(document.body, "ix2-animation-started", f),
          d)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, y.instanceStarted)(t, 0)),
              e.dispatch((0, y.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            eI(a[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eI }),
          c || n.dispatch((0, y.instanceStarted)(f, E.tick));
      }
      function eT(e, t) {
        eE(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        r === _ && X(o, a, T), t.dispatch((0, y.instanceRemoved)(e.id));
      }
      function eE(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function eI(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: d,
            renderType: l,
            current: c,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: g,
            isCarrier: E,
            styleProp: I,
            verbose: b,
            pluginInstance: m,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: h } = O,
          { mediaQueries: A = O.mediaQueryKeys } = h && h[u] ? h[u] : {};
        if (k(A, v.mediaQueryKey) && (a || n || i)) {
          if (c || (l === R && i)) {
            t.dispatch((0, y.elementStateChanged)(o, d, c, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              s = i && i[d];
            (a === _ || W(d)) && w(n, i, s, u, r, I, T, l, m);
          }
          if (i) {
            if (E) {
              let e = eg({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: s + 1,
                verbose: b,
              });
              b &&
                !e &&
                t.dispatch(
                  (0, y.actionListPlaybackChanged)({
                    actionListId: g,
                    isPlaying: !1,
                  })
                );
            }
            eT(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = u(n(5801)),
        o = u(n(4738)),
        r = u(n(3789)),
        d = n(7087),
        l = n(1970),
        c = n(3946),
        s = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: g,
          MOUSE_UP: y,
          MOUSE_OVER: T,
          MOUSE_OUT: E,
          DROPDOWN_CLOSE: I,
          DROPDOWN_OPEN: b,
          SLIDER_ACTIVE: m,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: h,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: A,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: N,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: x,
          PAGE_FINISH: w,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: U,
          PAGE_START: G,
          PAGE_SCROLL: P,
        } = d.EventTypeConsts,
        F = "COMPONENT_ACTIVE",
        V = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = d.IX2EngineConstants,
        { getNamespacedParameterId: k } = s.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        B = X(({ element: e, nativeEvent: t }) => e === t.target),
        Y = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        z = (0, i.default)([B, Y]),
        H = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        W = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!H(e, a);
        },
        j = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: d } = t,
            { actionListId: c, autoStopEventId: s } = r.config,
            u = H(e, s);
          return (
            u &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + D + a.split(D)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: d,
              eventTarget: n,
              eventStateKey: a,
              actionListId: c,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: d,
              eventTarget: n,
              eventStateKey: a,
              actionListId: c,
            }),
            i
          );
        },
        Q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        $ = { handler: Q(z, j) },
        q = { ...$, types: [F, V].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: G, PAGE_FINISH: w },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [F, V].indexOf(a) ? a === F : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ed =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: d } = et(),
              {
                event: { config: l, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = l,
              f = r - d,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === u ? s : (d * (s || 0)) / 100) / f,
              y = 0;
            n &&
              ((a = p > n.percentTop),
              (y = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let T = c === S ? p >= y + g : p <= y - g,
              E = {
                ...n,
                percentTop: p,
                inBounds: T,
                anchorTop: y,
                scrollingDown: a,
              };
            return (n && T && (i || E.inBounds !== n.inBounds) && e(t, E)) || E;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ec =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        es = (e = !0) => ({
          ...q,
          handler: Q(
            e ? z : B,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        eu = (e = !0) => ({
          ...q,
          handler: Q(
            e ? z : B,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === L) === n
                ? (j(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [m]: es(),
          [O]: eu(),
          [b]: es(),
          [I]: eu(),
          [R]: es(!1),
          [_]: eu(!1),
          [v]: es(),
          [h]: eu(),
          [U]: { types: "ecommerce-cart-open", handler: Q(z, j) },
          [M]: { types: "ecommerce-cart-close", handler: Q(z, j) },
          [f]: {
            types: "click",
            handler: Q(
              z,
              ec((e, { clickCount: t }) => {
                W(e) ? 1 === t && j(e) : j(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: Q(
              z,
              ec((e, { clickCount: t }) => {
                2 === t && j(e);
              })
            ),
          },
          [g]: { ...$, types: "mousedown" },
          [y]: { ...$, types: "mouseup" },
          [T]: {
            types: Z,
            handler: Q(
              z,
              er((e, t) => {
                t.elementHovered && j(e);
              })
            ),
          },
          [E]: {
            types: Z,
            handler: Q(
              z,
              er((e, t) => {
                t.elementHovered || j(e);
              })
            ),
          },
          [A]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: l,
                  continuousParameterGroupId: s,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: g = o.clientY,
                  pageX: y = o.pageX,
                  pageY: T = o.pageY,
                } = a,
                E = "X_AXIS" === l,
                I = "mouseout" === a.type,
                b = f / 100,
                m = s,
                O = !1;
              switch (r) {
                case d.EventBasedOn.VIEWPORT:
                  b = E
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                case d.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  b = E ? Math.min(e + y, n) / n : Math.min(t + T, a) / a;
                  break;
                }
                case d.EventBasedOn.ELEMENT:
                default: {
                  m = k(i, s);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== z({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: d, height: l } = n;
                  if (!e && !el({ left: p, top: g }, n)) break;
                  (O = !0), (b = E ? (p - o) / d : (g - r) / l);
                }
              }
              return (
                I && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
                (r !== d.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((b = u ? 1 - b : b),
                  e.dispatch((0, c.parameterChanged)(m, b))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: g,
                  pageX: y,
                  pageY: T,
                }
              );
            },
          },
          [P]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                d = i / (o - r);
              (d = a ? 1 - d : d), e.dispatch((0, c.parameterChanged)(n, d));
            },
          },
          [x]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: l,
                  scrollHeight: s,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: y,
                  startsExiting: T,
                  addEndOffset: E,
                  addStartOffset: I,
                  addOffsetValue: b = 0,
                  endOffsetValue: m = 0,
                } = n;
              if (f === d.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / l : r / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(g, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(a, g),
                  o = e.getBoundingClientRect(),
                  r = (I ? b : 0) / 100,
                  d = (E ? m : 0) / 100;
                (r = y ? r : 1 - r), (d = T ? d : 1 - d);
                let l = o.top + Math.min(o.height * r, u),
                  f = Math.min(u + (o.top + o.height * d - l), s),
                  p = Math.min(Math.max(0, u - l), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [L]: ef,
          [N]: ef,
          [S]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown && j(e);
            }),
          },
          [C]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown || j(e);
            }),
          },
          [w]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(B, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && j(e), n;
            }),
          },
          [G]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(B, (e, t) => (t || j(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: d,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: y } = a.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: E,
          getStyleProp: I,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: d,
              parameterId: l,
              actionGroups: c,
              destinationKeys: s,
              smoothing: u,
              restingValue: g,
              actionTypeId: y,
              customEasingFn: E,
              skipMotion: I,
              skipToValue: b,
            } = e,
            { parameters: m } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = m[l];
          null == v && ((O = 1), (v = g));
          let h = f((Math.max(v, 0) || 0) - d),
            _ = I ? b : f(d + h * O),
            R = 100 * _;
          if (_ === d && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: o } = c[e];
            if ((0 === e && (n = o[0]), R >= t)) {
              n = o[0];
              let d = c[e + 1],
                l = d && R !== t;
              (a = l ? d.actionItems[0] : null),
                l && ((i = t / 100), (r = (d.keyframe - t) / 100));
            }
          }
          let A = {};
          if (n && !a)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              A[t] = T(y, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (_ - i) / r,
              t = p(n.config.easing, e, E);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = T(y, i, n.config),
                r = (T(y, i, a.config) - o) * t + o;
              A[i] = r;
            }
          }
          return (0, o.merge)(e, { position: _, current: A });
        },
        m = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: d,
              verbose: l,
              actionItem: c,
              destination: s,
              destinationKeys: u,
              pluginDuration: g,
              instanceDelay: T,
              customEasingFn: E,
              skipMotion: I,
            } = e,
            b = c.config.easing,
            { duration: m, delay: O } = c.config;
          null != g && (m = g),
            (O = null != T ? T : O),
            d === y ? (m = 0) : (r || I) && (m = O = 0);
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (l) {
              let t = m + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / m), 1)),
              r = p(b, n, E),
              d = {},
              c = null;
            return (
              u.length &&
                (c = u.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * r + i), e;
                }, {})),
              (d.current = c),
              (d.position = n),
              1 === n && ((d.active = !1), (d.complete = !0)),
              (0, o.merge)(e, d)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case d:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: d,
                  eventStateKey: l,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: y,
                  verbose: T,
                  continuous: b,
                  parameterId: m,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: h,
                  pluginInstance: _,
                  pluginDuration: R,
                  instanceDelay: A,
                  skipMotion: S,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: N } = i,
                C = E(N),
                x = I(C, N),
                w = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: M } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: w,
                immediate: y,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: N,
                eventId: r,
                eventTarget: d,
                eventStateKey: l,
                actionListId: c,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: x,
                continuous: b,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: h,
                pluginInstance: _,
                pluginDuration: R,
                instanceDelay: A,
                skipMotion: S,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? g(M) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  d = e[i],
                  l = d.continuous ? b : m;
                n = (0, o.set)(n, i, l(d, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        d = n(9468),
        l = n(7718),
        c = n(1540),
        { ixElements: s } = d.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: s,
          ixInstances: l.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: l,
        } = a.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [d]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        u = (e = c, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: d,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = a.IX2EngineActionTypes,
        y = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = y, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case d: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case l:
              return y;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case c: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case g:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        d = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        d = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        c = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = d();
          if (!a) return;
          let r = a.getInstance(e),
            l = a.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), i in s || o in s)) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    a = s[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in s) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case l.Boolean:
                        null != s[e] && (a.value = !!s[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case l.Trigger:
                        s[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
        },
        g = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        d = (e, t) => e.value[t],
        l = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            d = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          i ? d(i.spline) : a.setLoadHandler(e, d);
        },
        g = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        d = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        c = (e) => e.value,
        s = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(u).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = n(7087),
        i = c(n(7377)),
        o = c(n(2866)),
        r = c(n(2570)),
        d = c(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...d }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return m;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return g;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return b;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return T;
        },
        IX2_INSTANCE_REMOVED: function () {
          return I;
        },
        IX2_INSTANCE_STARTED: function () {
          return E;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return y;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return d;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return h;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        d = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        y = "IX2_PARAMETER_CHANGED",
        T = "IX2_INSTANCE_ADDED",
        E = "IX2_INSTANCE_STARTED",
        I = "IX2_INSTANCE_REMOVED",
        b = "IX2_ELEMENT_STATE_CHANGED",
        m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        h = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return z;
        },
        BACKGROUND: function () {
          return V;
        },
        BACKGROUND_COLOR: function () {
          return F;
        },
        BAR_DELIMITER: function () {
          return j;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return Q;
        },
        COLON_DELIMITER: function () {
          return W;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return T;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return g;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return y;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return B;
        },
        FONT_VARIATION_SETTINGS: function () {
          return U;
        },
        HEIGHT: function () {
          return P;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return w;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return A;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return h;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return N;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return x;
        },
        TRANSFORM: function () {
          return E;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return I;
        },
        TRANSLATE_Y: function () {
          return b;
        },
        TRANSLATE_Z: function () {
          return m;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return G;
        },
        WILL_CHANGE: function () {
          return Y;
        },
        W_MOD_IX: function () {
          return d;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        r = "w-mod-js",
        d = "w-mod-ix",
        l = ".w-dyn-item",
        c = "xValue",
        s = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        y = "zUnit",
        T = "unit",
        E = "transform",
        I = "translateX",
        b = "translateY",
        m = "translateZ",
        O = "translate3d",
        v = "scaleX",
        h = "scaleY",
        _ = "scaleZ",
        R = "scale3d",
        A = "rotateX",
        S = "rotateY",
        L = "rotateZ",
        N = "skew",
        C = "skewX",
        x = "skewY",
        w = "opacity",
        M = "filter",
        U = "font-variation-settings",
        G = "width",
        P = "height",
        F = "backgroundColor",
        V = "background",
        D = "borderColor",
        k = "color",
        X = "display",
        B = "flex",
        Y = "willChange",
        z = "AUTO",
        H = ",",
        W = ":",
        j = "|",
        Q = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return d;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = c(n(1833), t),
        r = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let d = u(n(8023)),
        l = u(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: d,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        s = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [d]: !0, [l]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return d;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        d = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          d = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (d.startsWith("#")) {
          let e = d.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (d.startsWith("rgba")) {
          let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (d.startsWith("rgb")) {
          let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (d.startsWith("hsla")) {
          let e,
            n,
            r,
            l = d.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            s = parseFloat(l[1].replace("%", "")) / 100,
            u = parseFloat(l[2].replace("%", "")) / 100;
          o = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            g = u - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = p), (r = 0))
            : c >= 60 && c < 120
            ? ((e = p), (n = f), (r = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (r = p))
            : c >= 180 && c < 240
            ? ((e = 0), (n = p), (r = f))
            : c >= 240 && c < 300
            ? ((e = p), (n = 0), (r = f))
            : ((e = f), (n = 0), (r = p)),
            (t = Math.round((e + g) * 255)),
            (a = Math.round((n + g) * 255)),
            (i = Math.round((r + g) * 255));
        } else if (d.startsWith("hsl")) {
          let e,
            n,
            o,
            r = d.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(r[0]),
            c = parseFloat(r[1].replace("%", "")) / 100,
            s = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * c,
            f = u * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = s - u / 2;
          l >= 0 && l < 60
            ? ((e = u), (n = f), (o = 0))
            : l >= 60 && l < 120
            ? ((e = f), (n = u), (o = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = u), (o = f))
            : l >= 180 && l < 240
            ? ((e = 0), (n = f), (o = u))
            : l >= 240 && l < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return d;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        r = f(n(8686)),
        d = f(n(3767)),
        l = f(n(5861)),
        c = f(n(1799)),
        s = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return d;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        d = "undefined" != typeof window,
        l = (e, t) => (d ? e() : t),
        c = l(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        d = (a = n(1361)) && a.__esModule ? a : { default: a };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, d.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return B;
          },
          bouncePast: function () {
            return Y;
          },
          ease: function () {
            return d;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return M;
          },
          inCirc: function () {
            return N;
          },
          inCubic: function () {
            return g;
          },
          inElastic: function () {
            return P;
          },
          inExpo: function () {
            return A;
          },
          inOutBack: function () {
            return G;
          },
          inOutCirc: function () {
            return x;
          },
          inOutCubic: function () {
            return T;
          },
          inOutElastic: function () {
            return V;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return b;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return E;
          },
          inQuint: function () {
            return m;
          },
          inSine: function () {
            return h;
          },
          outBack: function () {
            return U;
          },
          outBounce: function () {
            return w;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return y;
          },
          outElastic: function () {
            return F;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return I;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        d = (0, r.default)(0.25, 0.1, 0.25, 1),
        l = (0, r.default)(0.42, 0, 1, 1),
        c = (0, r.default)(0, 0, 0.58, 1),
        s = (0, r.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function g(e) {
        return Math.pow(e, 3);
      }
      function y(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function E(e) {
        return Math.pow(e, 4);
      }
      function I(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function m(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function h(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function A(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function N(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function x(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function w(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function M(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function U(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function P(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function F(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function B(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function Y(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return y;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return d;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function d(e) {
        return r.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        c = l("getPluginConfig"),
        s = l("getPluginOrigin"),
        u = l("getPluginDuration"),
        f = l("getPluginDestination"),
        p = l("createPluginInstance"),
        g = l("renderPlugin"),
        y = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return eB;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return em;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eN;
        },
        getElementId: function () {
          return ey;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return eQ;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ex;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eI;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eT;
        },
        renderHTMLElement: function () {
          return ew;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = y(n(4075)),
        r = y(n(1455)),
        d = y(n(5720)),
        l = n(1185),
        c = n(7087),
        s = y(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: T,
          TRANSFORM: E,
          TRANSLATE_3D: I,
          SCALE_3D: b,
          ROTATE_X: m,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: h,
          PRESERVE_3D: _,
          FLEX: R,
          OPACITY: A,
          FILTER: S,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: N,
          HEIGHT: C,
          BACKGROUND_COLOR: x,
          BORDER_COLOR: w,
          COLOR: M,
          CHILDREN: U,
          IMMEDIATE_CHILDREN: G,
          SIBLINGS: P,
          PARENT: F,
          DISPLAY: V,
          WILL_CHANGE: D,
          AUTO: k,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: B,
          BAR_DELIMITER: Y,
          RENDER_TRANSFORM: z,
          RENDER_GENERAL: H,
          RENDER_STYLE: W,
          RENDER_PLUGIN: j,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Q,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = c.ActionTypeConsts,
        ed = (e) => e.trim(),
        el = Object.freeze({ [en]: x, [ea]: w, [ei]: M }),
        ec = Object.freeze({
          [g.TRANSFORM_PREFIXED]: E,
          [x]: T,
          [A]: A,
          [S]: S,
          [N]: N,
          [C]: C,
          [L]: L,
        }),
        es = new Map();
      function eu() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eg = 1;
      function ey(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eg++;
      }
      function eT({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eE = (e, t) => e === t;
      function eI({ store: e, select: t, onChange: n, comparator: a = eE }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, d) || n((d = o), e);
          }),
          d = t(i());
        return r;
      }
      function eb(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function em({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, d;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, o) =>
              e.concat(
                em({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: y,
            matchSelector: T,
            elementContains: E,
            isSiblingNode: I,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: m,
          objectId: O,
          selector: v,
          selectorGuids: h,
          appliesTo: _,
          useEventTarget: R,
        } = eb(b);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (_ === c.EventAppliesTo.PAGE) {
          let e = s(m);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
          S = !!(A.id || A.selector),
          L = t && u(eb(t.target));
        if (
          (S
            ? ((o = A.limitAffectedElements), (r = L), (d = u(A)))
            : (r = d = u({ id: m, selector: v, selectorGuids: h })),
          t && R)
        ) {
          let e = n && (d || !0 === R) ? [n] : f(L);
          if (d) {
            if (R === F) return f(d).filter((t) => e.some((e) => E(t, e)));
            if (R === U) return f(d).filter((t) => e.some((e) => E(e, t)));
            if (R === P) return f(d).filter((t) => e.some((e) => I(e, t)));
          }
          return e;
        }
        return null == r || null == d
          ? []
          : g.IS_BROWSER_ENV && a
          ? f(d).filter((e) => a.contains(e))
          : o === U
          ? f(r, d)
          : o === G
          ? p(f(r)).filter(T(d))
          : o === P
          ? y(f(r)).filter(T(d))
          : f(d);
      }
      function eO({ element: e, actionItem: t }) {
        if (!g.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eh = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eU[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eG[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: d } = a;
        if ((0, p.isPluginType)(d)) return (0, p.getPluginOrigin)(d)(t[d], a);
        switch (a.actionTypeId) {
          case Q:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || eM[a.actionTypeId];
          case J:
            return eh(t[a.actionTypeId], a.config.filters);
          case ee:
            return e_(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(r(e, A)), 1) };
          case et: {
            let t,
              i = r(e, N),
              d = r(e, C);
            return {
              widthValue:
                a.config.widthUnit === k
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === k
                  ? ev.test(d)
                    ? parseFloat(d)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(d), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = el[t],
                r = a(e, i),
                d = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, eV.test(r) ? r : n[i]).split(X);
              return {
                rValue: (0, o.default)(parseInt(d[0], 10), 255),
                gValue: (0, o.default)(parseInt(d[1], 10), 255),
                bValue: (0, o.default)(parseInt(d[2], 10), 255),
                aValue: (0, o.default)(parseFloat(d[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, V), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, d.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, d.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eN({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Q:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: d } = t.config,
              { widthValue: l, heightValue: c } = t.config;
            if (!g.IS_BROWSER_ENV) return { widthValue: l, heightValue: c };
            if (r === k) {
              let t = a(e, N);
              i(e, N, ""), (l = o(e, "offsetWidth")), i(e, N, t);
            }
            if (d === k) {
              let t = a(e, C);
              i(e, C, ""), (c = o(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: l, heightValue: c };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: d,
            } = t.config;
            if (d && d.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, d),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eA, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? z
          : /^STYLE_/.test(e)
          ? W
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? j
          : void 0;
      }
      function ex(e, t) {
        return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function ew(e, t, n, a, i, o, d, l, c) {
        switch (l) {
          case z:
            var s = e,
              u = t,
              f = n,
              y = i,
              T = d;
            let E = eF
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: d = "",
                    } = u[e] || {};
                  switch (e) {
                    case Q:
                      return `${I}(${n}${o}, ${a}${r}, ${i}${d})`;
                    case $:
                      return `${b}(${n}${o}, ${a}${r}, ${i}${d})`;
                    case q:
                      return `${m}(${n}${o}) ${O}(${a}${r}) ${v}(${i}${d})`;
                    case K:
                      return `${h}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: A } = T;
            ek(s, g.TRANSFORM_PREFIXED, T),
              A(s, g.TRANSFORM_PREFIXED, E),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a }
              ) {
                return (
                  (e === Q && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(y, f) && A(s, g.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case W:
            return (function (e, t, n, a, i, o) {
              let { setStyle: d } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: l } = n;
                  void 0 !== r &&
                    (t === k && (t = "px"), ek(e, N, o), d(e, N, r + t)),
                    void 0 !== l &&
                      (i === k && (i = "px"), ek(e, C, o), d(e, C, l + i));
                  break;
                }
                case J:
                  var l = a.config;
                  let c = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eP(n, l)})`,
                      ""
                    ),
                    { setStyle: s } = o;
                  ek(e, S, o), s(e, S, c);
                  break;
                case ee:
                  a.config;
                  let u = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = o;
                  ek(e, L, o), f(e, L, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = el[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    c = n.aValue;
                  ek(e, t, o),
                    d(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${i},${r},${l})`
                        : `rgba(${i},${r},${l},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  ek(e, i, o), d(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, o, d);
          case H:
            var x = e,
              w = i,
              M = d;
            let { setStyle: U } = M;
            if (w.actionTypeId === eo) {
              let { value: e } = w.config;
              U(x, V, e === R && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case j: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, i);
          }
        }
      }
      let eM = {
          [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eU = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eG = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eP = (e, t) => {
          let n = (0, d.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eF = Object.keys(eM),
        eV = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let a = ec[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        if (!r) return void o(e, D, a);
        let d = r.split(X).map(ed);
        -1 === d.indexOf(a) && o(e, D, d.concat(a).join(X));
      }
      function eX(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let a = ec[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            D,
            r
              .split(X)
              .map(ed)
              .filter((e) => e !== a)
              .join(X)
          );
      }
      function eB({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            d = i[r];
          d && eY({ actionList: d, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eY({ actionList: i[e], elementApi: t });
          });
      }
      function eY({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            ez({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                ez({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function ez({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          (a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eW({ effect: ej, actionTypeId: i, elementApi: n })),
            em({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function eH(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          n.widthUnit === k && a(e, N, ""), n.heightUnit === k && a(e, C, "");
        }
        i(e, D) && eW({ effect: eX, actionTypeId: o, elementApi: n })(e);
      }
      let eW =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case Q:
            case $:
            case q:
            case K:
              e(a, g.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, S, n);
              break;
            case ee:
              e(a, L, n);
              break;
            case Z:
              e(a, A, n);
              break;
            case et:
              e(a, N, n), e(a, C, n);
              break;
            case en:
            case ea:
            case ei:
              e(a, el[t], n);
              break;
            case eo:
              e(a, V, n);
          }
        };
      function ej(e, t, n) {
        let { setStyle: a } = n;
        eX(e, t, n),
          a(e, t, ""),
          t === g.TRANSFORM_PREFIXED && a(e, g.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eQ(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          d = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              l = n[eQ(n)],
              { config: c, actionTypeId: s } = l;
            i.id === l.id && (d = r + o);
            let u = eC(s) === H ? 0 : c.duration;
            r += c.delay + u;
          }),
          r > 0 ? (0, u.optimizeFloat)(d / r) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + B + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Y + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + Y + n + Y + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return h;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: d,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: y,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: E,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: I,
          IX2_INSTANCE_ADDED: b,
          IX2_ELEMENT_STATE_CHANGED: m,
        } = r.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case I:
              return O;
            case b: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: d,
                } = t.payload,
                { actionTypeId: l } = r,
                c = e;
              return (
                (0, o.getIn)(c, [n, a]) !== a && (c = h(c, a, d, n, r)),
                _(c, n, l, i, r)
              );
            }
            case m: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return _(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function h(e, t, n, a, i) {
        let r =
          n === l ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function _(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return R.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return null != o && null != r && (e[i] = r), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let R = [
        [s, g],
        [u, y],
        [f, T],
        [p, E],
      ];
    },
    5062: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".fade-in-on-scroll",
              originalId:
                "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".fade-in-on-scroll",
                originalId:
                  "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182445797f9,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826378b63709e94df40fa2d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186230d9731,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826378b63709e94df40fa2d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186230d9732,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".featured-logo-wrapper",
              originalId:
                "6826378b63709e94df40fa2d|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".featured-logo-wrapper",
                originalId:
                  "6826378b63709e94df40fa2d|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1862660cf38,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".title-container",
              originalId:
                "6826378b63709e94df40fa2d|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".title-container",
                originalId:
                  "6826378b63709e94df40fa2d|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1862660f020,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".paragraph-holder",
              originalId:
                "6826378b63709e94df40fa2d|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".paragraph-holder",
                originalId:
                  "6826378b63709e94df40fa2d|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626610755,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".early-access-tag-holder",
              originalId:
                "6826378b63709e94df40fa2d|ede77518-7561-2248-c811-452853b87491",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".early-access-tag-holder",
                originalId:
                  "6826378b63709e94df40fa2d|ede77518-7561-2248-c811-452853b87491",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626618b81,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".early-access-title-holder",
              originalId:
                "6826378b63709e94df40fa2d|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".early-access-title-holder",
                originalId:
                  "6826378b63709e94df40fa2d|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626619f45,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".early-access-paraghaph-holder",
              originalId:
                "6826378b63709e94df40fa2d|4c9c4307-106c-be6d-738d-d09730864a25",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".early-access-paraghaph-holder",
                originalId:
                  "6826378b63709e94df40fa2d|4c9c4307-106c-be6d-738d-d09730864a25",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1862661b887,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".early-access-button-holder",
              originalId:
                "6826378b63709e94df40fa2d|2fd1adc7-a016-60a8-e041-af5290c334ea",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".early-access-button-holder",
                originalId:
                  "6826378b63709e94df40fa2d|2fd1adc7-a016-60a8-e041-af5290c334ea",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1862661cda1,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826378b63709e94df40fa2d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626718ca4,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".power-feature-card-container",
              originalId:
                "6826378b63709e94df40fa2d|6da3ade3-b649-801b-3fbf-daf0c9d43575",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".power-feature-card-container",
                originalId:
                  "6826378b63709e94df40fa2d|6da3ade3-b649-801b-3fbf-daf0c9d43575",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626728bf2,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".power-feature-card-container",
              originalId:
                "6826378b63709e94df40fa2d|6da3ade3-b649-801b-3fbf-daf0c9d43575",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".power-feature-card-container",
                originalId:
                  "6826378b63709e94df40fa2d|6da3ade3-b649-801b-3fbf-daf0c9d43575",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626728bf3,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".power-feature-heading",
              originalId:
                "6826378b63709e94df40fa2d|93d70ad6-7625-200b-5dfd-bd850990f3fd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".power-feature-heading",
                originalId:
                  "6826378b63709e94df40fa2d|93d70ad6-7625-200b-5dfd-bd850990f3fd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626746991,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".power-feature-paragraph",
              originalId:
                "6826378b63709e94df40fa2d|44c6d9db-29c3-2396-72c1-32492179481b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".power-feature-paragraph",
                originalId:
                  "6826378b63709e94df40fa2d|44c6d9db-29c3-2396-72c1-32492179481b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 7,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18626747f00,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-slide",
              originalId: "109ff9da-afa1-b6c1-5fd4-d6148f429cc0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-slide",
                originalId: "109ff9da-afa1-b6c1-5fd4-d6148f429cc0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1862719b683,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-slide",
              originalId: "109ff9da-afa1-b6c1-5fd4-d6148f429cc0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-slide",
                originalId: "109ff9da-afa1-b6c1-5fd4-d6148f429cc0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1862719b683,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".checked-list-holder",
              originalId: "b73c6524-36d9-68f5-9f45-db1f246efb80",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".checked-list-holder",
                originalId: "b73c6524-36d9-68f5-9f45-db1f246efb80",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18627242e64,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricing-footer-holder",
              originalId: "b73c6524-36d9-68f5-9f45-db1f246efb91",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricing-footer-holder",
                originalId: "b73c6524-36d9-68f5-9f45-db1f246efb91",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18627244a46,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricing-list-holder",
              originalId: "b73c6524-36d9-68f5-9f45-db1f246efb70",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricing-list-holder",
                originalId: "b73c6524-36d9-68f5-9f45-db1f246efb70",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186272460f1,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-53",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricing-header",
              originalId: "b73c6524-36d9-68f5-9f45-db1f246efb6d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricing-header",
                originalId: "b73c6524-36d9-68f5-9f45-db1f246efb6d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186272478ca,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".pricing-tag",
              originalId: "b73c6524-36d9-68f5-9f45-db1f246efb6a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".pricing-tag",
                originalId: "b73c6524-36d9-68f5-9f45-db1f246efb6a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18627248aca,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b74bc185-64db-9e3f-fcf6-427f56e3a9a6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b74bc185-64db-9e3f-fcf6-427f56e3a9a6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 24,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186272749b2,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-14",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".feature-item-center",
              originalId:
                "6826378b63709e94df40fa2d|72aaa64b-980b-1884-6ffd-b76efe62d8d5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".feature-item-center",
                originalId:
                  "6826378b63709e94df40fa2d|72aaa64b-980b-1884-6ffd-b76efe62d8d5",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-14-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-14-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x19388a6990f,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-62",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826378b63709e94df40fa2d|e8f928f6-0c7b-80d4-26ce-d243081c0475",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|e8f928f6-0c7b-80d4-26ce-d243081c0475",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d4999c1,
          },
          "e-63": {
            id: "e-63",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".first-feature-image-holder",
              originalId:
                "6826378b63709e94df40fa2d|c31f26a2-52b4-7021-842d-aee5ae957baf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".first-feature-image-holder",
                originalId:
                  "6826378b63709e94df40fa2d|c31f26a2-52b4-7021-842d-aee5ae957baf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1938d4c8aeb,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".first-feature-image-holder",
              originalId:
                "6826378b63709e94df40fa2d|c31f26a2-52b4-7021-842d-aee5ae957baf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".first-feature-image-holder",
                originalId:
                  "6826378b63709e94df40fa2d|c31f26a2-52b4-7021-842d-aee5ae957baf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1938d4c8aec,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826378b63709e94df40fa2d|72aaa64b-980b-1884-6ffd-b76efe62d8d5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|72aaa64b-980b-1884-6ffd-b76efe62d8d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d50d55e,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-68",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826378b63709e94df40fa2d|8d5e1810-e2a2-dd91-cf08-60f57ab82175",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|8d5e1810-e2a2-dd91-cf08-60f57ab82175",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d50f25f,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-70",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826378b63709e94df40fa2d|c7a6e597-0913-8432-f1b7-8dcc4038a5b7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|c7a6e597-0913-8432-f1b7-8dcc4038a5b7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d510ff9,
          },
          "e-71": {
            id: "e-71",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-72",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826378b63709e94df40fa2d|5a2a626a-5fc8-be95-7794-7e0386090593",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|5a2a626a-5fc8-be95-7794-7e0386090593",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d512e16,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-74",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826378b63709e94df40fa2d|9e8aa3e6-5609-2c90-99c5-e10425e17646",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|9e8aa3e6-5609-2c90-99c5-e10425e17646",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d514aa9,
          },
          "e-75": {
            id: "e-75",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-76",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826378b63709e94df40fa2d|3b0b9395-9319-9495-4291-ab3cd3a92b64",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d|3b0b9395-9319-9495-4291-ab3cd3a92b64",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1938d5165a7,
          },
          "e-77": {
            id: "e-77",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-141",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".line-wrapper",
              originalId:
                "6826378b63709e94df40fa2d|f172f8c7-c4bc-7d2d-e719-59aca166d893",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".line-wrapper",
                originalId:
                  "6826378b63709e94df40fa2d|f172f8c7-c4bc-7d2d-e719-59aca166d893",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1938d527303,
          },
          "e-79": {
            id: "e-79",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".early-access-gird",
              originalId:
                "6826378b63709e94df40fa2d|6a0aa955-2c53-fa03-6be9-1fe4a364cd6e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".early-access-gird",
                originalId:
                  "6826378b63709e94df40fa2d|6a0aa955-2c53-fa03-6be9-1fe4a364cd6e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1938d5c6f6a,
          },
          "e-81": {
            id: "e-81",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-82",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "109ff9da-afa1-b6c1-5fd4-d6148f429cbc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "109ff9da-afa1-b6c1-5fd4-d6148f429cbc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1938da9724d,
          },
          "e-83": {
            id: "e-83",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-133",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".feature-item-center",
              originalId:
                "6826378b63709e94df40fa2d|72aaa64b-980b-1884-6ffd-b76efe62d8d5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".feature-item-center",
                originalId:
                  "6826378b63709e94df40fa2d|72aaa64b-980b-1884-6ffd-b76efe62d8d5",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1938e08d481,
          },
          "e-85": {
            id: "e-85",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-86",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d58de95b,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-85",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d58de95b,
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d58de95b,
          },
          "e-89": {
            id: "e-89",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-90",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|e8f928f6-0c7b-80d4-26ce-d243081c0475",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|e8f928f6-0c7b-80d4-26ce-d243081c0475",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196d58de95b,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SHRINK_BIG_EFFECT",
              instant: !1,
              config: { actionListId: "shrinkBigIn", autoStopEventId: "e-94" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 150,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1926be90846,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-102",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-l",
              originalId:
                "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d50",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-l",
                originalId:
                  "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d50",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1926be82aae,
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SHRINK_BIG_EFFECT",
              instant: !1,
              config: { actionListId: "shrinkBigIn", autoStopEventId: "e-99" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d81",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d81",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 150,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1926be8d536,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d62",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d62",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 150,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1926be8b4d7,
          },
          "e-101": {
            id: "e-101",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-97",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d58",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|e8f56432-561f-192f-1425-c415f5ee2d58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 150,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1926be86505,
          },
          "e-103": {
            id: "e-103",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|6763ed37-4c29-6fd9-18bb-65ddd4e47715",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|6763ed37-4c29-6fd9-18bb-65ddd4e47715",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1960cf1e8b2,
          },
          "e-105": {
            id: "e-105",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-106",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|6763ed37-4c29-6fd9-18bb-65ddd4e47716",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|6763ed37-4c29-6fd9-18bb-65ddd4e47716",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196029b5115,
          },
          "e-107": {
            id: "e-107",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-108",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6381e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6381e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd8549f7,
          },
          "e-109": {
            id: "e-109",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-112",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63826",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63826",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd85bb56,
          },
          "e-110": {
            id: "e-110",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-119",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63836",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63836",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd8669ba,
          },
          "e-114": {
            id: "e-114",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-155",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6382e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6382e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 350,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd862771,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-120",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63822",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63822",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 150,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd857da8,
          },
          "e-118": {
            id: "e-118",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-111",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6382a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6382a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd85ee10,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6383a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a6383a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd869687,
          },
          "e-122": {
            id: "e-122",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-156",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63832",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c|4579828f-8eb6-dbdd-0527-e04ca1a63832",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ecd8645d3,
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-21",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6826492dbc4941a07250284c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826492dbc4941a07250284c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-21-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 89,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-21-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 89,
                restingState: 50,
              },
            ],
            createdOn: 0x196d5b76bb7,
          },
          "e-124": {
            id: "e-124",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-125",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682655b59706593f5450ba27",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682655b59706593f5450ba27",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d5bedc81,
          },
          "e-125": {
            id: "e-125",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-124",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682655b59706593f5450ba27",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682655b59706593f5450ba27",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d5bedc81,
          },
          "e-127": {
            id: "e-127",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682655b59706593f5450ba27",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682655b59706593f5450ba27",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d5bedc81,
          },
          "e-128": {
            id: "e-128",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-129",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682655b59706593f5450ba27|e8f928f6-0c7b-80d4-26ce-d243081c0475",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682655b59706593f5450ba27|e8f928f6-0c7b-80d4-26ce-d243081c0475",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196d5bedc81,
          },
          "e-130": {
            id: "e-130",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-131",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".click-instructions-holder",
              originalId:
                "682655b59706593f5450ba27|49d59c9d-4072-f194-5ee0-2e05893390ac",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".click-instructions-holder",
                originalId:
                  "682655b59706593f5450ba27|49d59c9d-4072-f194-5ee0-2e05893390ac",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1926bef7528,
          },
          "e-132": {
            id: "e-132",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-133",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".value-team-images-holder",
              originalId:
                "6702c4bf1361840be79fe10e|c83fcba0-7a18-2d7f-5ca5-4b80daa08944",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".value-team-images-holder",
                originalId:
                  "6702c4bf1361840be79fe10e|c83fcba0-7a18-2d7f-5ca5-4b80daa08944",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875dd2dcb9,
          },
          "e-134": {
            id: "e-134",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-135",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".value-team-images-holder",
              originalId:
                "642f5005dc3c526805f42b99|e2b40ded-bf22-ae07-36b5-fa0501ac00c8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".value-team-images-holder",
                originalId:
                  "642f5005dc3c526805f42b99|e2b40ded-bf22-ae07-36b5-fa0501ac00c8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875c9a0721,
          },
          "e-135": {
            id: "e-135",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-134",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".value-team-images-holder",
              originalId:
                "642f5005dc3c526805f42b99|e2b40ded-bf22-ae07-36b5-fa0501ac00c8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".value-team-images-holder",
                originalId:
                  "642f5005dc3c526805f42b99|e2b40ded-bf22-ae07-36b5-fa0501ac00c8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875c9a0722,
          },
          "e-136": {
            id: "e-136",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-137",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".value-team-images-holder",
              originalId:
                "682655b59706593f5450ba27|49d59c9d-4072-f194-5ee0-2e05893390ba",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".value-team-images-holder",
                originalId:
                  "682655b59706593f5450ba27|49d59c9d-4072-f194-5ee0-2e05893390ba",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1877c7c2889,
          },
          "e-137": {
            id: "e-137",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-136",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".value-team-images-holder",
              originalId:
                "682655b59706593f5450ba27|49d59c9d-4072-f194-5ee0-2e05893390ba",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".value-team-images-holder",
                originalId:
                  "682655b59706593f5450ba27|49d59c9d-4072-f194-5ee0-2e05893390ba",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1877c7c288b,
          },
          "e-138": {
            id: "e-138",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team-gird",
              originalId:
                "6702c4bf1361840be79fe10e|a88caac8-3875-4171-e7fe-e696cb694ea2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team-gird",
                originalId:
                  "6702c4bf1361840be79fe10e|a88caac8-3875-4171-e7fe-e696cb694ea2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875db4abf5,
          },
          "e-140": {
            id: "e-140",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-143",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".team",
              originalId:
                "6702c4bf1361840be79fe10e|0d185d48-28f6-4b92-b56d-0a141975f6d1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team",
                originalId:
                  "6702c4bf1361840be79fe10e|0d185d48-28f6-4b92-b56d-0a141975f6d1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875dae797f,
          },
          "e-141": {
            id: "e-141",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-142",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".team",
              originalId:
                "6702c4bf1361840be79fe10e|0d185d48-28f6-4b92-b56d-0a141975f6d1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team",
                originalId:
                  "6702c4bf1361840be79fe10e|0d185d48-28f6-4b92-b56d-0a141975f6d1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875dae79a6,
          },
          "e-142": {
            id: "e-142",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-143",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".team",
              originalId:
                "682655b59706593f5450ba27|ad1d45d2-1819-a452-231b-5a90d9bd3f83",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team",
                originalId:
                  "682655b59706593f5450ba27|ad1d45d2-1819-a452-231b-5a90d9bd3f83",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875dae797f,
          },
          "e-143": {
            id: "e-143",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-142",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".team",
              originalId:
                "682655b59706593f5450ba27|ad1d45d2-1819-a452-231b-5a90d9bd3f83",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team",
                originalId:
                  "682655b59706593f5450ba27|ad1d45d2-1819-a452-231b-5a90d9bd3f83",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1875dae79a6,
          },
          "e-144": {
            id: "e-144",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-478",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".section-tag",
              originalId:
                "6702c4bf1361840be79fe0e2|71e0e452-5552-f6ab-6689-3c151dcbbbe7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".section-tag",
                originalId:
                  "6702c4bf1361840be79fe0e2|71e0e452-5552-f6ab-6689-3c151dcbbbe7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ce54b0873,
          },
          "e-146": {
            id: "e-146",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-147",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".job-position-list",
              originalId:
                "6702c4bf1361840be79fe0ec|16914e2e-082c-a2e2-dade-35d7c6952057",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".job-position-list",
                originalId:
                  "6702c4bf1361840be79fe0ec|16914e2e-082c-a2e2-dade-35d7c6952057",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18dc732eced,
          },
          "e-148": {
            id: "e-148",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-149",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682661ecb822a484f66fc646",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682661ecb822a484f66fc646",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d5ee9410,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-148",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682661ecb822a484f66fc646",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682661ecb822a484f66fc646",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d5ee9410,
          },
          "e-151": {
            id: "e-151",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-150",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682661ecb822a484f66fc646",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682661ecb822a484f66fc646",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d5ee9410,
          },
          "e-152": {
            id: "e-152",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-153",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682661ecb822a484f66fc646|e8f928f6-0c7b-80d4-26ce-d243081c0475",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682661ecb822a484f66fc646|e8f928f6-0c7b-80d4-26ce-d243081c0475",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196d5ee9410,
          },
          "e-157": {
            id: "e-157",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-158",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68266672372e54f38de02924",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68266672372e54f38de02924",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d6003f2a,
          },
          "e-158": {
            id: "e-158",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-157",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68266672372e54f38de02924",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68266672372e54f38de02924",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d6003f2a,
          },
          "e-160": {
            id: "e-160",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-159",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68266672372e54f38de02924",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68266672372e54f38de02924",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d6003f2a,
          },
          "e-161": {
            id: "e-161",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-162",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68266672372e54f38de02924|e8f928f6-0c7b-80d4-26ce-d243081c0475",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68266672372e54f38de02924|e8f928f6-0c7b-80d4-26ce-d243081c0475",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x196d6003f2a,
          },
          "e-163": {
            id: "e-163",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-295",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".feature-icon-holder",
              originalId:
                "6702c4bf1361840be79fe10c|ae3c943f-7939-626e-63d5-eaa15e784871",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".feature-icon-holder",
                originalId:
                  "6702c4bf1361840be79fe10c|ae3c943f-7939-626e-63d5-eaa15e784871",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ce54b39a2,
          },
          "e-165": {
            id: "e-165",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-166",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-slider",
              originalId:
                "6826378b63709e94df40fa2d|c1392816-8269-8422-bf9b-c2d571cf127b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-slider",
                originalId:
                  "6826378b63709e94df40fa2d|c1392816-8269-8422-bf9b-c2d571cf127b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x196d6153d42,
          },
          "e-167": {
            id: "e-167",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-168",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-slide",
              originalId:
                "6826378b63709e94df40fa2d|cf69a411-c2b3-7a56-2366-d3a306f682d1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-slide",
                originalId:
                  "6826378b63709e94df40fa2d|cf69a411-c2b3-7a56-2366-d3a306f682d1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d6157629,
          },
          "e-168": {
            id: "e-168",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-167",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-slide",
              originalId:
                "6826378b63709e94df40fa2d|cf69a411-c2b3-7a56-2366-d3a306f682d1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-slide",
                originalId:
                  "6826378b63709e94df40fa2d|cf69a411-c2b3-7a56-2366-d3a306f682d1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d615762a,
          },
          "e-169": {
            id: "e-169",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-170",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-item-holder",
              originalId:
                "682661ecb822a484f66fc646|64247007-7a5e-bd87-078e-5dfcedb3acef",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item-holder",
                originalId:
                  "682661ecb822a484f66fc646|64247007-7a5e-bd87-078e-5dfcedb3acef",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196d623b2be,
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-31",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6826378b63709e94df40fa2d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6826378b63709e94df40fa2d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-31-p",
                smoothing: 76,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196d68591d6,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "\uD83D\uDC41 Fade In On Scroll",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1824457a552,
          },
          "a-2": {
            id: "a-2",
            title: "⏰Animate On Load",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-48",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-mark-holder",
                        selectorGuids: ["d82c41da-ab08-1bb6-73c9-11e750a33bfc"],
                      },
                      yValue: 90,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-37",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-paragraph-holder",
                        selectorGuids: ["a75637fd-0f26-e861-6cfc-b245ada557f6"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-36",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-paragraph-holder",
                        selectorGuids: ["a75637fd-0f26-e861-6cfc-b245ada557f6"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-35",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-34",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-mark-container",
                        selectorGuids: ["a2750480-c041-befd-3a45-1c5d4c96110f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-33",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-mark",
                        selectorGuids: ["80fa5cc0-843f-59c8-9ba0-fcf9270e588b"],
                      },
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-11",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-16",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-15",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-19",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-18",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-21",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-24",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-23",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-22",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-25",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-28",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-27",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-26",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-29",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-32",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      xValue: 90,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-31",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      xValue: 15,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-30",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-38",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-button-holder",
                        selectorGuids: ["b821d02a-11b7-8794-9bf2-55860973510a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-39",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-section-button-holder",
                        selectorGuids: ["b821d02a-11b7-8794-9bf2-55860973510a"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-105",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-blue-blur",
                        selectorGuids: ["5e4cae9f-1e7f-061a-3b0f-a308f0e36cc0"],
                      },
                      xValue: 0.4,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-106",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-blue-blur",
                        selectorGuids: ["5e4cae9f-1e7f-061a-3b0f-a308f0e36cc0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-109",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".blur-image",
                        selectorGuids: ["4f75a09a-3a99-f72a-cf58-b3ac177ef2de"],
                      },
                      xValue: 0.4,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-110",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".blur-image",
                        selectorGuids: ["4f75a09a-3a99-f72a-cf58-b3ac177ef2de"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-113",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      xValue: 0.7,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-101",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-100",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-99",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-115",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-stars",
                        selectorGuids: ["444e8b2c-5145-1674-aa25-7596e38ebabf"],
                      },
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-116",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-stars",
                        selectorGuids: ["444e8b2c-5145-1674-aa25-7596e38ebabf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-119",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".fetaure-light-image",
                        selectorGuids: ["65729458-a847-d591-e5a9-d7b3c1bdfce9"],
                      },
                      xValue: 1,
                      yValue: 0.4,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-120",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".fetaure-light-image",
                        selectorGuids: ["65729458-a847-d591-e5a9-d7b3c1bdfce9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-121",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".fetaure-light-image",
                        selectorGuids: ["65729458-a847-d591-e5a9-d7b3c1bdfce9"],
                      },
                      xValue: 150,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-125",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".feature-dashboard",
                        selectorGuids: ["4045a0f6-3a48-46a5-d4e9-4857f56efb7b"],
                      },
                      xValue: 200,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-126",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".feature-dashboard",
                        selectorGuids: ["4045a0f6-3a48-46a5-d4e9-4857f56efb7b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-127",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".feature-dashboard",
                        selectorGuids: ["4045a0f6-3a48-46a5-d4e9-4857f56efb7b"],
                      },
                      xValue: 1,
                      yValue: 0.6,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-49",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 200,
                      easing: "swingTo",
                      duration: 1100,
                      target: {
                        selector: ".hero-section-mark-holder",
                        selectorGuids: ["d82c41da-ab08-1bb6-73c9-11e750a33bfc"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-46",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".hero-section-mark-container",
                        selectorGuids: ["a2750480-c041-befd-3a45-1c5d4c96110f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-47",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".hero-section-mark",
                        selectorGuids: ["80fa5cc0-843f-59c8-9ba0-fcf9270e588b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-7",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-01",
                        selectorGuids: ["bd87c9a6-55ce-ae9e-987a-3e5a5fcf21ef"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-54",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-57",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-56",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-55",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-02",
                        selectorGuids: ["e5a55182-1657-6672-5c71-55a820c124ac"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-50",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-53",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-52",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-51",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-03",
                        selectorGuids: ["7efc30f8-0bef-74d6-ee14-eba33436e28b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-58",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-61",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-60",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-59",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-04",
                        selectorGuids: ["d362340e-0009-10fc-08b6-f16007d1d3aa"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-74",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".hero-section-paragraph-holder",
                        selectorGuids: ["a75637fd-0f26-e861-6cfc-b245ada557f6"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-75",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".hero-section-paragraph-holder",
                        selectorGuids: ["a75637fd-0f26-e861-6cfc-b245ada557f6"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-112",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".blur-image",
                        selectorGuids: ["4f75a09a-3a99-f72a-cf58-b3ac177ef2de"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-111",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 3e3,
                      target: {
                        selector: ".blur-image",
                        selectorGuids: ["4f75a09a-3a99-f72a-cf58-b3ac177ef2de"],
                      },
                      xValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-62",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-65",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-64",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-63",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-05",
                        selectorGuids: ["60f8eb74-f582-c2bf-572e-3ece23d1449a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-122",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        selector: ".fetaure-light-image",
                        selectorGuids: ["65729458-a847-d591-e5a9-d7b3c1bdfce9"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-124",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        selector: ".fetaure-light-image",
                        selectorGuids: ["65729458-a847-d591-e5a9-d7b3c1bdfce9"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-123",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".fetaure-light-image",
                        selectorGuids: ["65729458-a847-d591-e5a9-d7b3c1bdfce9"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-66",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-69",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-68",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-67",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-06",
                        selectorGuids: ["6cc2dd4a-c5e5-a44e-2d0a-c600674c6b74"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-77",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".hero-section-button-holder",
                        selectorGuids: ["b821d02a-11b7-8794-9bf2-55860973510a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-78",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".hero-section-button-holder",
                        selectorGuids: ["b821d02a-11b7-8794-9bf2-55860973510a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-114",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-103",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-104",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-102",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        selector: ".animate-on-load-04",
                        selectorGuids: ["9e567631-4db5-7fd1-a221-fd5599534d04"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-117",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        selector: ".hero-stars",
                        selectorGuids: ["444e8b2c-5145-1674-aa25-7596e38ebabf"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-118",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".hero-stars",
                        selectorGuids: ["444e8b2c-5145-1674-aa25-7596e38ebabf"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-129",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".feature-dashboard",
                        selectorGuids: ["4045a0f6-3a48-46a5-d4e9-4857f56efb7b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-130",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 1500,
                      target: {
                        selector: ".feature-dashboard",
                        selectorGuids: ["4045a0f6-3a48-46a5-d4e9-4857f56efb7b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-128",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 1500,
                      target: {
                        selector: ".feature-dashboard",
                        selectorGuids: ["4045a0f6-3a48-46a5-d4e9-4857f56efb7b"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-70",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      xValue: 0,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-2-n-73",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-2-n-72",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-71",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        selector: ".animate-text-07",
                        selectorGuids: ["2e560a74-2243-da2c-da64-a91d4949297e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-76",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar",
                        selectorGuids: ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-107",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 4e3,
                      target: {
                        selector: ".hero-blue-blur",
                        selectorGuids: ["5e4cae9f-1e7f-061a-3b0f-a308f0e36cc0"],
                      },
                      xValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-108",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".hero-blue-blur",
                        selectorGuids: ["5e4cae9f-1e7f-061a-3b0f-a308f0e36cc0"],
                      },
                      value: 0.4,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186230da21b,
          },
          "a-7": {
            id: "a-7",
            title: "Gradient Rotation - Infinite",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {},
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18626719a97,
          },
          "a-13": {
            id: "a-13",
            title: "CTA Circle Rotate",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".cta-circle._02",
                        selectorGuids: [
                          "c4be0462-37ba-76b5-57ee-446aca400f2b",
                          "c495c044-939b-47d6-85d3-c05c2c08e530",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".cta-circle._01",
                        selectorGuids: [
                          "c4be0462-37ba-76b5-57ee-446aca400f2b",
                          "e8f8e62a-4633-58f2-0610-3bc574d1f753",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 7e3,
                      target: {
                        selector: ".cta-circle._02",
                        selectorGuids: [
                          "c4be0462-37ba-76b5-57ee-446aca400f2b",
                          "c495c044-939b-47d6-85d3-c05c2c08e530",
                        ],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 7e3,
                      target: {
                        selector: ".cta-circle._01",
                        selectorGuids: [
                          "c4be0462-37ba-76b5-57ee-446aca400f2b",
                          "e8f8e62a-4633-58f2-0610-3bc574d1f753",
                        ],
                      },
                      zValue: -360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".cta-circle._02",
                        selectorGuids: [
                          "c4be0462-37ba-76b5-57ee-446aca400f2b",
                          "c495c044-939b-47d6-85d3-c05c2c08e530",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".cta-circle._01",
                        selectorGuids: [
                          "c4be0462-37ba-76b5-57ee-446aca400f2b",
                          "e8f8e62a-4633-58f2-0610-3bc574d1f753",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186275a5e66,
          },
          "a-8": {
            id: "a-8",
            title: "Power Feature -> Hover On",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18626729fd8,
          },
          "a-9": {
            id: "a-9",
            title: "Power Feature -> Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18626729fd8,
          },
          "a-10": {
            id: "a-10",
            title: "Slider In View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-wrapper.testimonial-line",
                        selectorGuids: [
                          "c8833041-7640-a263-6d13-73bab4400311",
                          "45cef1f6-cc1c-ea41-1fd4-00e90dce03b0",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur-image-holder",
                        selectorGuids: ["aa16a9f9-c73c-ff6f-44b6-a28d56fdff91"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-content-holder",
                        selectorGuids: ["8168c32b-385b-0430-4f2c-dafc582420ed"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-wrapper.testimonial-line",
                        selectorGuids: [
                          "c8833041-7640-a263-6d13-73bab4400311",
                          "45cef1f6-cc1c-ea41-1fd4-00e90dce03b0",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-content-holder",
                        selectorGuids: ["8168c32b-385b-0430-4f2c-dafc582420ed"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-10-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur-image-holder",
                        selectorGuids: ["aa16a9f9-c73c-ff6f-44b6-a28d56fdff91"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1862719be0d,
          },
          "a-18": {
            id: "a-18",
            title: "Slider Out Of View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-wrapper.testimonial-line",
                        selectorGuids: [
                          "c8833041-7640-a263-6d13-73bab4400311",
                          "45cef1f6-cc1c-ea41-1fd4-00e90dce03b0",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-content-holder",
                        selectorGuids: ["8168c32b-385b-0430-4f2c-dafc582420ed"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-18-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur-image-holder",
                        selectorGuids: ["aa16a9f9-c73c-ff6f-44b6-a28d56fdff91"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-wrapper.testimonial-line",
                        selectorGuids: [
                          "c8833041-7640-a263-6d13-73bab4400311",
                          "45cef1f6-cc1c-ea41-1fd4-00e90dce03b0",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blur-image-holder",
                        selectorGuids: ["aa16a9f9-c73c-ff6f-44b6-a28d56fdff91"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-18-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".testimonial-content-holder",
                        selectorGuids: ["8168c32b-385b-0430-4f2c-dafc582420ed"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1862719be0d,
          },
          "a-12": {
            id: "a-12",
            title: "CTA Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-logo-holder",
                        selectorGuids: ["f73bd70d-d4cc-0cba-0118-24167187767d"],
                      },
                      yValue: -190,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-cricle-holder._02",
                        selectorGuids: [
                          "3bd0c30d-7d2b-dd56-55c9-9289e291844e",
                          "2919e385-b03c-03f9-933c-37c34c90509e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-heading-holder",
                        selectorGuids: ["0b12636e-556e-e8b7-3672-bd2255de929b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._01",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "6bb35726-78bf-a681-9acd-4496275d5157",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._01",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "6bb35726-78bf-a681-9acd-4496275d5157",
                        ],
                      },
                      xValue: 0.3,
                      yValue: 0.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._02",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "4a50b32c-019f-fd8c-fd24-fb16d2544013",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._02",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "4a50b32c-019f-fd8c-fd24-fb16d2544013",
                        ],
                      },
                      xValue: 0.1,
                      yValue: 0.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form",
                        selectorGuids: ["b1b2d0f2-e640-1a08-ee03-73421c190212"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form",
                        selectorGuids: ["b1b2d0f2-e640-1a08-ee03-73421c190212"],
                      },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "b74bc185-64db-9e3f-fcf6-427f56e3a9bc" },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "b74bc185-64db-9e3f-fcf6-427f56e3a9bc" },
                      yValue: 30,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-cricle-holder._01",
                        selectorGuids: [
                          "3bd0c30d-7d2b-dd56-55c9-9289e291844e",
                          "a854c137-390b-a573-1680-b1a6fe3e1992",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-logo-holder",
                        selectorGuids: ["f73bd70d-d4cc-0cba-0118-24167187767d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-18",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._02",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "4a50b32c-019f-fd8c-fd24-fb16d2544013",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._02",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "4a50b32c-019f-fd8c-fd24-fb16d2544013",
                        ],
                      },
                      value: 0.09,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._01",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "6bb35726-78bf-a681-9acd-4496275d5157",
                        ],
                      },
                      value: 0.35,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-16",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 100,
                      easing: "",
                      duration: 2300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-blured-bg._01",
                        selectorGuids: [
                          "3e50c2be-af26-9e7b-df63-c3049b973d5e",
                          "6bb35726-78bf-a681-9acd-4496275d5157",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-25",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 1300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-cricle-holder._02",
                        selectorGuids: [
                          "3bd0c30d-7d2b-dd56-55c9-9289e291844e",
                          "2919e385-b03c-03f9-933c-37c34c90509e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-26",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 1300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-cricle-holder._01",
                        selectorGuids: [
                          "3bd0c30d-7d2b-dd56-55c9-9289e291844e",
                          "a854c137-390b-a573-1680-b1a6fe3e1992",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cta-heading-holder",
                        selectorGuids: ["0b12636e-556e-e8b7-3672-bd2255de929b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-20",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form",
                        selectorGuids: ["b1b2d0f2-e640-1a08-ee03-73421c190212"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form",
                        selectorGuids: ["b1b2d0f2-e640-1a08-ee03-73421c190212"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-12-n-22",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1300,
                      easing: "ease",
                      duration: 700,
                      target: { id: "b74bc185-64db-9e3f-fcf6-427f56e3a9bc" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-12-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1300,
                      easing: "ease",
                      duration: 700,
                      target: { id: "b74bc185-64db-9e3f-fcf6-427f56e3a9bc" },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x186272753e8,
          },
          "a-14": {
            id: "a-14",
            title: "Features Animation",
            continuousParameterGroups: [
              {
                id: "a-14-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-14-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".feature-blur-image",
                            selectorGuids: [
                              "7de80e07-0c96-a353-9cd4-1bc5430f5015",
                            ],
                          },
                          xValue: -110,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".blue-line",
                            selectorGuids: [
                              "67d60cfd-902b-9b45-468f-54b8c5ac200d",
                            ],
                          },
                          xValue: -50,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-14-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".feature-blur-image",
                            selectorGuids: [
                              "7de80e07-0c96-a353-9cd4-1bc5430f5015",
                            ],
                          },
                          xValue: 110,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".blue-line",
                            selectorGuids: [
                              "67d60cfd-902b-9b45-468f-54b8c5ac200d",
                            ],
                          },
                          xValue: 50,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-14-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-14-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".feature-blur-image._01",
                            selectorGuids: [
                              "7de80e07-0c96-a353-9cd4-1bc5430f5015",
                              "e0e5e2d1-606d-3732-05e6-ea2827a75e3d",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-14-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".blue-line._01",
                            selectorGuids: [
                              "67d60cfd-902b-9b45-468f-54b8c5ac200d",
                              "5f932468-1683-4afe-729d-3b12f98df484",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-14-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".feature-blur-image._02",
                            selectorGuids: [
                              "7de80e07-0c96-a353-9cd4-1bc5430f5015",
                              "39a28371-192f-743e-8f36-8d2ff4296a3f",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-14-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".blue-line._02",
                            selectorGuids: [
                              "67d60cfd-902b-9b45-468f-54b8c5ac200d",
                              "73f71bb1-9909-5d59-46bc-3ba9a43b4613",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-14-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".feature-blur-image._01",
                            selectorGuids: [
                              "7de80e07-0c96-a353-9cd4-1bc5430f5015",
                              "e0e5e2d1-606d-3732-05e6-ea2827a75e3d",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-14-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".blue-line._01",
                            selectorGuids: [
                              "67d60cfd-902b-9b45-468f-54b8c5ac200d",
                              "5f932468-1683-4afe-729d-3b12f98df484",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-14-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".feature-blur-image._02",
                            selectorGuids: [
                              "7de80e07-0c96-a353-9cd4-1bc5430f5015",
                              "39a28371-192f-743e-8f36-8d2ff4296a3f",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-14-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".blue-line._02",
                            selectorGuids: [
                              "67d60cfd-902b-9b45-468f-54b8c5ac200d",
                              "73f71bb1-9909-5d59-46bc-3ba9a43b4613",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19388a6abff,
          },
          "a-15": {
            id: "a-15",
            title: "Video -> On Hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-15-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-15-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-15-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      value: 0.6,
                      unit: "",
                    },
                  },
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-15-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 1.15,
                      yValue: 1.15,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-15-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-15-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      value: 0.92,
                      unit: "",
                    },
                  },
                  {
                    id: "a-15-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-11",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-15-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 2,
                      yValue: 1,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1938d4c9483,
          },
          "a-16": {
            id: "a-16",
            title: "Video -> Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-16-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-16-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-16-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      value: 0.6,
                      unit: "",
                    },
                  },
                  {
                    id: "a-16-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        id: "6826378b63709e94df40fa2d|b51547cd-5068-bd5f-f96a-80fe5b8499d4",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1938d4c9483,
          },
          "a-17": {
            id: "a-17",
            title: "Line Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-static",
                        selectorGuids: ["6f671530-a34d-984f-f71c-2bf54e43198e"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-17-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-static.blur",
                        selectorGuids: [
                          "6f671530-a34d-984f-f71c-2bf54e43198e",
                          "56556fb6-a384-70bb-334b-259c85de27fd",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-17-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-static.blur",
                        selectorGuids: [
                          "6f671530-a34d-984f-f71c-2bf54e43198e",
                          "56556fb6-a384-70bb-334b-259c85de27fd",
                        ],
                      },
                      yValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 1600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-static",
                        selectorGuids: ["6f671530-a34d-984f-f71c-2bf54e43198e"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-17-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 1600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-static.blur",
                        selectorGuids: [
                          "6f671530-a34d-984f-f71c-2bf54e43198e",
                          "56556fb6-a384-70bb-334b-259c85de27fd",
                        ],
                      },
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-17-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 1600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blue-line-static.blur",
                        selectorGuids: [
                          "6f671530-a34d-984f-f71c-2bf54e43198e",
                          "56556fb6-a384-70bb-334b-259c85de27fd",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1938d527a64,
          },
          "a-6": {
            id: "a-6",
            title: "Early Access - On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background-holder",
                        selectorGuids: ["46a300d8-8119-96f4-cb3c-23047d465fd0"],
                      },
                      yValue: 65,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-22",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-card",
                        selectorGuids: ["9539feee-c914-0e88-3db6-d69631a23f81"],
                      },
                      yValue: 50,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-6-n-21",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-card",
                        selectorGuids: ["9539feee-c914-0e88-3db6-d69631a23f81"],
                      },
                      xValue: 0.6,
                      yValue: 0.6,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-19",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-images-holder",
                        selectorGuids: ["9a010e5f-585e-f507-d4c5-cc51a591b7b4"],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0.4,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-images-holder",
                        selectorGuids: ["9a010e5f-585e-f507-d4c5-cc51a591b7b4"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-images-holder",
                        selectorGuids: ["9a010e5f-585e-f507-d4c5-cc51a591b7b4"],
                      },
                      xValue: 0.7,
                      yValue: 0.7,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background.blured",
                        selectorGuids: [
                          "7114def9-5b7d-deb3-ade3-d6a8847a6a74",
                          "61ba16a2-fc12-52a3-a134-5d130ecd8972",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background.blured",
                        selectorGuids: [
                          "7114def9-5b7d-deb3-ade3-d6a8847a6a74",
                          "61ba16a2-fc12-52a3-a134-5d130ecd8972",
                        ],
                      },
                      xValue: 0,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background-holder",
                        selectorGuids: ["46a300d8-8119-96f4-cb3c-23047d465fd0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background-holder",
                        selectorGuids: ["46a300d8-8119-96f4-cb3c-23047d465fd0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background-holder",
                        selectorGuids: ["46a300d8-8119-96f4-cb3c-23047d465fd0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-23",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-card",
                        selectorGuids: ["9539feee-c914-0e88-3db6-d69631a23f81"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-6-n-24",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 1700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-card",
                        selectorGuids: ["9539feee-c914-0e88-3db6-d69631a23f81"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-17",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background.blured",
                        selectorGuids: [
                          "7114def9-5b7d-deb3-ade3-d6a8847a6a74",
                          "61ba16a2-fc12-52a3-a134-5d130ecd8972",
                        ],
                      },
                      xValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-background.blured",
                        selectorGuids: [
                          "7114def9-5b7d-deb3-ade3-d6a8847a6a74",
                          "61ba16a2-fc12-52a3-a134-5d130ecd8972",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-15",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-images-holder",
                        selectorGuids: ["9a010e5f-585e-f507-d4c5-cc51a591b7b4"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-images-holder",
                        selectorGuids: ["9a010e5f-585e-f507-d4c5-cc51a591b7b4"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-20",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".early-access-images-holder",
                        selectorGuids: ["9a010e5f-585e-f507-d4c5-cc51a591b7b4"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-13",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      xValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 1200,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1862665bbd5,
          },
          "a-19": {
            id: "a-19",
            title: "Card -> On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6702c4bf1361840be79fe0e2|59fdb7e2-3495-ddce-cbed-a1d1c3d7a9b8",
                      },
                      yValue: 180,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6702c4bf1361840be79fe0e2|59fdb7e2-3495-ddce-cbed-a1d1c3d7a9b8",
                      },
                      yValue: 140,
                      zValue: null,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-19-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6702c4bf1361840be79fe0e2|59fdb7e2-3495-ddce-cbed-a1d1c3d7a9b8",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "6702c4bf1361840be79fe0e2|59fdb7e2-3495-ddce-cbed-a1d1c3d7a9b8",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-19-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "6702c4bf1361840be79fe0e2|59fdb7e2-3495-ddce-cbed-a1d1c3d7a9b8",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-19-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1600,
                      target: {
                        useEventTarget: !0,
                        id: "6702c4bf1361840be79fe0e2|59fdb7e2-3495-ddce-cbed-a1d1c3d7a9b8",
                      },
                      yValue: 0,
                      zValue: null,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19268b6b4b1,
          },
          "a-20": {
            id: "a-20",
            title: "Circle Animation Infinite Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-holder._01",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d24",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d32",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-person-icon.outter-circle",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d29",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d31",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-holder._02",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d24",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d2f",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-person-icon.inner-circle",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d29",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d30",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 15e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-holder._01",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d24",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d32",
                        ],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 15e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-person-icon.inner-circle",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d29",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d30",
                        ],
                      },
                      zValue: -360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 15e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-holder._02",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d24",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d2f",
                        ],
                      },
                      zValue: -360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 15e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-person-icon.outter-circle",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d29",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d31",
                        ],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-person-icon.outter-circle",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d29",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d31",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-holder._02",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d24",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d2f",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-11",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-person-icon.inner-circle",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d29",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d30",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-12",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-circle-holder._01",
                        selectorGuids: [
                          "24047a43-8f94-8f1b-e885-931e6d5a3d24",
                          "24047a43-8f94-8f1b-e885-931e6d5a3d32",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196029b5f3a,
          },
          "a-21": {
            id: "a-21",
            title: "Integration Animation",
            continuousParameterGroups: [
              {
                id: "a-21-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-21-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._01",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3741",
                            ],
                          },
                          xValue: -10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._02",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3749",
                            ],
                          },
                          xValue: -20,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._03",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3747",
                            ],
                          },
                          xValue: -15,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._04",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374e",
                            ],
                          },
                          xValue: 10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._05",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374f",
                            ],
                          },
                          xValue: 30,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._06",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374c",
                            ],
                          },
                          xValue: 18,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._07",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3742",
                            ],
                          },
                          xValue: 1,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._08",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3748",
                            ],
                          },
                          xValue: -10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-9",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".integration-grid",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3739",
                            ],
                          },
                          yValue: -11,
                          xUnit: "DEG",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-21-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._01",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3741",
                            ],
                          },
                          xValue: 10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._02",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3749",
                            ],
                          },
                          xValue: 10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._03",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3747",
                            ],
                          },
                          xValue: 15,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._04",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374e",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._05",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374f",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._06",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374c",
                            ],
                          },
                          xValue: -10,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._07",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3742",
                            ],
                          },
                          xValue: 20,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-17",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._08",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3748",
                            ],
                          },
                          xValue: 30,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-18",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".integration-grid",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3739",
                            ],
                          },
                          yValue: 11,
                          xUnit: "DEG",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-21-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-21-n-19",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._01",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3741",
                            ],
                          },
                          yValue: -40,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-20",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._02",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3749",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-21",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._03",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3747",
                            ],
                          },
                          yValue: -30,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-22",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._04",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374e",
                            ],
                          },
                          yValue: -40,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-23",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._05",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374f",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-24",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._06",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374c",
                            ],
                          },
                          yValue: 80,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-25",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._07",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3742",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-26",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._08",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3748",
                            ],
                          },
                          yValue: -20,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-27",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".integration-grid",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3739",
                            ],
                          },
                          xValue: -10,
                          xUnit: "deg",
                          yUnit: "DEG",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-21-n-28",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._01",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3741",
                            ],
                          },
                          yValue: -40,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-29",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._02",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3749",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-30",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._03",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3747",
                            ],
                          },
                          yValue: 40,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-31",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._04",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374e",
                            ],
                          },
                          yValue: -70,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-32",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._05",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374f",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-33",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._06",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b374c",
                            ],
                          },
                          yValue: -20,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-34",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._07",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3742",
                            ],
                          },
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-35",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".intergration-holder._08",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b373d",
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3748",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-36",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".integration-grid",
                            selectorGuids: [
                              "f1212a86-e2b2-f66d-5b2e-d135e99b3739",
                            ],
                          },
                          xValue: 10,
                          xUnit: "deg",
                          yUnit: "DEG",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ecd9088a3,
          },
          "a-22": {
            id: "a-22",
            title: "Value Card -> Hover On",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-22-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-behind-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b84b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-22-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-image-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b845"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-22-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-images-container",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b844"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-22-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-images-container",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b844"],
                      },
                      yValue: 180,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-22-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-image-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b845"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-22-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-behind-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b84b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-22-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-22-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18758097e6a,
          },
          "a-23": {
            id: "a-23",
            title: "Value Card -> Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-23-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-23-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-images-container",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b844"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-23-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-behind-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b84b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-23-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".value-team-image-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b845"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-23-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".break-down-animation-holder",
                        selectorGuids: ["aaf89d1f-c08e-aac4-25fe-13ab7ba5b847"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18758097e6a,
          },
          "a-24": {
            id: "a-24",
            title: "Team -> Hover On",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-24-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {},
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-24-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {},
                      widthValue: 150,
                      heightValue: 60,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1875dae8289,
          },
          "a-25": {
            id: "a-25",
            title: "Team -> Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-25-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {},
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1875dae8289,
          },
          "a-26": {
            id: "a-26",
            title: "Team -> Hover On 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-image",
                        selectorGuids: ["55f957a9-ccda-ae39-49a6-656c05485355"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-26-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-info",
                        selectorGuids: ["55f957a9-ccda-ae39-49a6-656c0548535b"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-image",
                        selectorGuids: ["55f957a9-ccda-ae39-49a6-656c05485355"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-26-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-info",
                        selectorGuids: ["55f957a9-ccda-ae39-49a6-656c0548535b"],
                      },
                      widthValue: 150,
                      heightValue: 60,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1875dae8289,
          },
          "a-27": {
            id: "a-27",
            title: "Team -> Hover Out 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-image",
                        selectorGuids: ["55f957a9-ccda-ae39-49a6-656c05485355"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-info",
                        selectorGuids: ["55f957a9-ccda-ae39-49a6-656c0548535b"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1875dae8289,
          },
          "a-29": {
            id: "a-29",
            title: "Hero Slider -> On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-29-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-29-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-blur",
                        selectorGuids: ["647e645b-ffd0-6009-fc5e-5a443d503920"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-29-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-blur",
                        selectorGuids: ["647e645b-ffd0-6009-fc5e-5a443d503920"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-29-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d6157e0a,
          },
          "a-30": {
            id: "a-30",
            title: "Hero Slider -> Out Of View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      xValue: 0.97,
                      yValue: 0.97,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-30-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      value: 0.7,
                      unit: "",
                    },
                  },
                  {
                    id: "a-30-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-blur",
                        selectorGuids: ["647e645b-ffd0-6009-fc5e-5a443d503920"],
                      },
                      value: 0.41,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      xValue: 0.97,
                      yValue: 0.97,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-30-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-blur",
                        selectorGuids: ["647e645b-ffd0-6009-fc5e-5a443d503920"],
                      },
                      value: 0.41,
                      unit: "",
                    },
                  },
                  {
                    id: "a-30-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".first-feature-block-container",
                        selectorGuids: ["e7284e7c-9ad8-8fb7-6662-ce653d239207"],
                      },
                      value: 0.7,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196d6157e0a,
          },
          "a-31": {
            id: "a-31",
            title: "Popup 50%",
            continuousParameterGroups: [
              {
                id: "a-31-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-31-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".popup-holder",
                            selectorGuids: [
                              "627722c1-b925-4172-6560-460b8ff33740",
                            ],
                          },
                          yValue: 100,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 31,
                    actionItems: [
                      {
                        id: "a-31-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".popup-holder",
                            selectorGuids: [
                              "627722c1-b925-4172-6560-460b8ff33740",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196d685b112,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          shrinkBigIn: {
            id: "shrinkBigIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      duration: 0,
                      delay: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 4,
                      yValue: 4,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
