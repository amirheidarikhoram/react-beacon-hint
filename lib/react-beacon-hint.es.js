import u, { forwardRef as B, memo as F, useState as I, useLayoutEffect as U, useRef as Ge, useEffect as Je, useMemo as C, Fragment as We, useImperativeHandle as he, cloneElement as Ke, useCallback as oe } from "react";
import { useFloatingNodeId as Qe, arrow as Ve, useFloating as Xe, autoUpdate as Ze, useClick as Ye, useHover as Pe, useFocus as et, useRole as tt, useDismiss as nt, useInteractions as at, FloatingPortal as rt, FloatingNode as it, offset as le, shift as ot, flip as lt, hide as se } from "@floating-ui/react";
import { AnimatePresence as st, motion as ut } from "framer-motion";
import { renderToStaticMarkup as ct } from "react-dom/server";
var ue = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, ce = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300
};
function dt(e) {
  var n, t = [], a = 1, r;
  if (typeof e == "string")
    if (ue[e])
      t = ue[e].slice(), r = "rgb";
    else if (e === "transparent")
      a = 0, r = "rgb", t = [0, 0, 0];
    else if (/^#[A-Fa-f0-9]+$/.test(e)) {
      var i = e.slice(1), o = i.length, l = o <= 4;
      a = 1, l ? (t = [
        parseInt(i[0] + i[0], 16),
        parseInt(i[1] + i[1], 16),
        parseInt(i[2] + i[2], 16)
      ], o === 4 && (a = parseInt(i[3] + i[3], 16) / 255)) : (t = [
        parseInt(i[0] + i[1], 16),
        parseInt(i[2] + i[3], 16),
        parseInt(i[4] + i[5], 16)
      ], o === 8 && (a = parseInt(i[6] + i[7], 16) / 255)), t[0] || (t[0] = 0), t[1] || (t[1] = 0), t[2] || (t[2] = 0), r = "rgb";
    } else if (n = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)) {
      var m = n[1], h = m === "rgb", i = m.replace(/a$/, "");
      r = i;
      var o = i === "cmyk" ? 4 : i === "gray" ? 1 : 3;
      t = n[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(d, v) {
        if (/%$/.test(d))
          return v === o ? parseFloat(d) / 100 : i === "rgb" ? parseFloat(d) * 255 / 100 : parseFloat(d);
        if (i[v] === "h") {
          if (/deg$/.test(d))
            return parseFloat(d);
          if (ce[d] !== void 0)
            return ce[d];
        }
        return parseFloat(d);
      }), m === i && t.push(1), a = h || t[o] === void 0 ? 1 : t[o], t = t.slice(0, o);
    } else
      e.length > 10 && /[0-9](?:\s|\/)/.test(e) && (t = e.match(/([0-9]+)/g).map(function(g) {
        return parseFloat(g);
      }), r = e.match(/([a-z])/ig).join("").toLowerCase());
  else
    isNaN(e) ? Array.isArray(e) || e.length ? (t = [e[0], e[1], e[2]], r = "rgb", a = e.length === 4 ? e[3] : 1) : e instanceof Object && (e.r != null || e.red != null || e.R != null ? (r = "rgb", t = [
      e.r || e.red || e.R || 0,
      e.g || e.green || e.G || 0,
      e.b || e.blue || e.B || 0
    ]) : (r = "hsl", t = [
      e.h || e.hue || e.H || 0,
      e.s || e.saturation || e.S || 0,
      e.l || e.lightness || e.L || e.b || e.brightness
    ]), a = e.a || e.alpha || e.opacity || 1, e.opacity != null && (a /= 100)) : (r = "rgb", t = [e >>> 16, (e & 65280) >>> 8, e & 255]);
  return {
    space: r,
    values: t,
    alpha: a
  };
}
function ve(e, n) {
  var t = dt(e);
  return n == null && (n = t.alpha), t.space[0] === "h" ? t.space + ["a(", t.values[0], ",", t.values[1], "%,", t.values[2], "%,", n, ")"].join("") : t.space + ["a(", t.values, ",", n, ")"].join("");
}
const ft = "_outlineBeacon_6ztd4_22", mt = {
  outlineBeacon: ft,
  "outline-beacon-inner": "_outline-beacon-inner_6ztd4_1",
  "outline-beacon-outer": "_outline-beacon-outer_6ztd4_1"
}, gt = "_defaultBeacon_1a9ju_1", ye = {
  defaultBeacon: gt
}, be = B(
  ({ size: e = 30, color: n = "rgb(255, 0, 68)", className: t = "", style: a = {} }, r) => /* @__PURE__ */ u.createElement(
    "span",
    {
      ref: r,
      style: a,
      className: [ye.defaultBeacon, mt.outlineBeacon, t].join(" "),
      "data-testid": "outline-beacon"
    },
    /* @__PURE__ */ u.createElement("button", { type: "button", style: { width: e, height: e } }, /* @__PURE__ */ u.createElement("span", { className: "inner", style: { backgroundColor: n } }), /* @__PURE__ */ u.createElement("span", { className: "outer", style: { borderColor: n, backgroundColor: ve(n, 0.2) } }))
  )
);
be.displayName = "OutlineBeacon";
const pt = F(be), ht = "_fillBeacon_f0f4x_1", vt = {
  fillBeacon: ht
}, yt = typeof window > "u";
let s;
if (!yt) {
  const e = document.createElement("style");
  e.setAttribute("data-testid", "injectUniqueKeyframe"), document.head.appendChild(e), s = e.sheet;
}
const bt = (e, n) => {
  var l, m, h, g, _, d, v;
  if (s === void 0)
    return { animationName: "", rulesLength: 0 };
  const a = `animation-${n.replace(/[\(|\)|\,|\ |\#|\%]/g, "")}`, r = `
		@keyframes ${a} {
			${e}
		}`;
  s == null || s.insertRule(r, (l = s == null ? void 0 : s.cssRules) == null ? void 0 : l.length);
  const i = [], o = [];
  for (let c = 0; c < ((m = s == null ? void 0 : s.cssRules) == null ? void 0 : m.length); c++)
    typeof ((h = s == null ? void 0 : s.cssRules[c]) == null ? void 0 : h.cssText) == "string" && !i.includes((g = s == null ? void 0 : s.cssRules[c]) == null ? void 0 : g.cssText) && (i.push((_ = s == null ? void 0 : s.cssRules[c]) == null ? void 0 : _.cssText), o.push(c));
  for (let c = 0; c < ((d = s == null ? void 0 : s.cssRules) == null ? void 0 : d.length); c++)
    o.includes(c) || s == null || s.deleteRule(c);
  return { animationName: a, rulesLength: (v = s == null ? void 0 : s.cssRules) == null ? void 0 : v.length };
}, we = B(
  ({ size: e = 18, color: n = "rgb(255, 0, 68)", className: t = "", style: a = {} }, r) => {
    const [i, o] = I("none");
    return U(() => {
      const { animationName: l } = bt(
        `0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 ${ve(n, 0.7)};
		}
		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}
		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}`,
        n
      );
      o(l);
    }, [n]), /* @__PURE__ */ u.createElement(
      "span",
      {
        ref: r,
        style: a,
        className: [ye.defaultBeacon, vt.fillBeacon, t].join(" "),
        "data-testid": "fill-beacon"
      },
      /* @__PURE__ */ u.createElement("button", { type: "button", style: { width: e, height: e } }, /* @__PURE__ */ u.createElement("span", { className: "pulse", style: { backgroundColor: n, animationName: i, borderRadius: e } }))
    );
  }
);
we.displayName = "FillBeacon";
const wt = F(we), kt = "_arrow_79lk7_1", _t = {
  arrow: kt
}, ke = B(({ size: e = 12, className: n = "", style: t = {} }, a) => /* @__PURE__ */ u.createElement(
  "span",
  {
    ref: a,
    style: {
      ...t,
      width: e,
      height: e
    },
    className: [_t.arrow, n].join(" "),
    "data-testid": "arrow"
  }
));
ke.displayName = "Arrow";
const St = F(ke), _e = (e, n) => {
  const t = Ge(!0);
  return Je(() => {
    t.current ? t.current = !1 : e && e();
  }, [...n]), t.current;
}, Et = {
  size: 8
}, Se = B(
  ({
    initialOpen: e = !1,
    onToggle: n,
    disablePortal: t = !1,
    floatingComponent: a,
    open: r = null,
    setOpen: i,
    placement: o = "bottom",
    middleware: l,
    children: m,
    strategy: h = "absolute",
    animatePresenceProps: g,
    animateProps: _ = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    hoverProps: d,
    focusProps: v,
    roleProps: c,
    dismissProps: y,
    clickProps: S,
    root: j = "div",
    arrow: f,
    floatingStyle: R = {}
  }, z) => {
    const [N, $] = I(e), w = r ?? N, L = i ?? $;
    _e(() => {
      n && n(w);
    }, [n, w]);
    const [b, D] = I(), [G, Ne] = I(), [J, Re] = I(), P = Qe(), Oe = C(() => {
      let k = [];
      return Array.isArray(l) && (l != null && l.length) && (k = k.concat(l)), f != null && f.enabled && J && k.push(
        Ve({
          element: J,
          padding: f.padding
        })
      ), k;
    }, [f, J, l]), { x: W, y: Fe, reference: ee, floating: te, context: M, update: ne, middlewareData: E, placement: K } = Xe({
      nodeId: P,
      placement: o,
      middleware: Oe,
      strategy: h,
      whileElementsMounted(...k) {
        return Ze(...k, { animationFrame: !0 });
      },
      open: w,
      onOpenChange: L
    }), $e = C(() => {
      if (E != null && E.hide) {
        const { referenceHidden: k } = E.hide;
        if (k)
          return {
            visibility: "hidden"
          };
      }
      return {
        visibility: W === null ? "hidden" : void 0
      };
    }, [E.hide, W]), Me = C(() => {
      const k = K.split("-")[0], ae = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[k];
      if (E.arrow) {
        const { x: re, y: ie } = E.arrow;
        return {
          left: re != null ? `${re}px` : "",
          top: ie != null ? `${ie}px` : "",
          right: "",
          bottom: "",
          [ae]: `${-((f == null ? void 0 : f.size) || Et.size) / 2}px`
        };
      }
    }, [f, E.arrow, K]), Be = Ye(M, { ...S, enabled: r !== null ? !1 : S == null ? void 0 : S.enabled }), Ae = Pe(M, {
      move: !1,
      ...d,
      enabled: r !== null ? !1 : d == null ? void 0 : d.enabled
    }), je = et(M, { ...v, enabled: r !== null ? !1 : v == null ? void 0 : v.enabled }), ze = tt(M, { ...c, enabled: r !== null ? !1 : c == null ? void 0 : c.enabled }), He = nt(M, {
      ...y,
      enabled: r !== null ? !1 : y == null ? void 0 : y.enabled
    }), { getReferenceProps: Te, getFloatingProps: qe } = at([Be, Ae, je, ze, He]);
    U(() => {
      b && ee(b);
    }, [b, ee]), U(() => {
      G && te(G);
    }, [te, G]);
    const Ue = () => typeof a == "function" ? a({ open: w, placement: K }) : a, Le = C(() => t ? We : rt, [t]);
    he(
      z,
      () => ({
        update: ne,
        open: w
      }),
      [ne, w]
    );
    const De = j;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(De, { style: { display: "flex" }, ref: D, ...Te() }, m), /* @__PURE__ */ u.createElement(it, { id: P }, /* @__PURE__ */ u.createElement(Le, null, /* @__PURE__ */ u.createElement(st, { initial: !1, ...g }, w && /* @__PURE__ */ u.createElement(
      ut.div,
      {
        ..._,
        ref: Ne,
        "data-testid": "floating",
        style: {
          position: h,
          top: Fe ?? 0,
          left: W ?? 0,
          width: "max-content",
          display: "flex",
          boxSizing: "border-box",
          zIndex: 1,
          ...R,
          ...$e
        },
        ...qe()
      },
      (f == null ? void 0 : f.enabled) && /* @__PURE__ */ u.createElement(
        St,
        {
          ref: Re,
          className: f.className,
          size: f.size,
          style: {
            ...f.style,
            ...Me
          }
        }
      ),
      Ue()
    )))));
  }
);
Se.displayName = "Floating";
const de = F(Se), xt = "_popover_1dxwl_1", It = {
  popover: xt
}, Ct = ({ className: e = "", style: n = {}, text: t }) => /* @__PURE__ */ u.createElement("span", { style: n, className: [It.popover, e].join(" "), "data-testid": "popover" }, t), Nt = F(Ct), Rt = (e) => e.split("").reduce((n, t) => Math.imul(31, n) + t.charCodeAt(0) | 0, 0).toString();
var p = {}, V = {}, A = {}, X = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
X.parse = Mt;
X.serialize = Bt;
var Ot = decodeURIComponent, Ft = encodeURIComponent, $t = /; */, H = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Mt(e, n) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var t = {}, a = n || {}, r = e.split($t), i = a.decode || Ot, o = 0; o < r.length; o++) {
    var l = r[o], m = l.indexOf("=");
    if (!(m < 0)) {
      var h = l.substr(0, m).trim(), g = l.substr(++m, l.length).trim();
      g[0] == '"' && (g = g.slice(1, -1)), t[h] == null && (t[h] = At(g, i));
    }
  }
  return t;
}
function Bt(e, n, t) {
  var a = t || {}, r = a.encode || Ft;
  if (typeof r != "function")
    throw new TypeError("option encode is invalid");
  if (!H.test(e))
    throw new TypeError("argument name is invalid");
  var i = r(n);
  if (i && !H.test(i))
    throw new TypeError("argument val is invalid");
  var o = e + "=" + i;
  if (a.maxAge != null) {
    var l = a.maxAge - 0;
    if (isNaN(l))
      throw new Error("maxAge should be a Number");
    o += "; Max-Age=" + Math.floor(l);
  }
  if (a.domain) {
    if (!H.test(a.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + a.domain;
  }
  if (a.path) {
    if (!H.test(a.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + a.path;
  }
  if (a.expires) {
    if (typeof a.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + a.expires.toUTCString();
  }
  if (a.httpOnly && (o += "; HttpOnly"), a.secure && (o += "; Secure"), a.sameSite) {
    var m = typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite;
    switch (m) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}
function At(e, n) {
  try {
    return n(e);
  } catch {
    return e;
  }
}
Object.defineProperty(A, "__esModule", {
  value: !0
});
var jt = function() {
  function e(n, t) {
    for (var a = 0; a < t.length; a++) {
      var r = t[a];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
    }
  }
  return function(n, t, a) {
    return t && e(n.prototype, t), a && e(n, a), n;
  };
}();
A.hasCookies = qt;
var zt = X, T = Ht(zt);
function Ht(e) {
  return e && e.__esModule ? e : { default: e };
}
function Tt(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
var x = "lS_", Ee = function() {
  function e() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tt(this, e), this.cookieOptions = Object.assign({ path: "/" }, n), x = n.prefix === void 0 ? x : n.prefix;
  }
  return jt(e, [{
    key: "getItem",
    value: function(t) {
      var a = T.default.parse(document.cookie);
      return !a || !a.hasOwnProperty(x + t) ? null : a[x + t];
    }
  }, {
    key: "setItem",
    value: function(t, a) {
      return document.cookie = T.default.serialize(x + t, a, this.cookieOptions), a;
    }
  }, {
    key: "removeItem",
    value: function(t) {
      var a = Object.assign({}, this.cookieOptions, { maxAge: -1 });
      return document.cookie = T.default.serialize(x + t, "", a), null;
    }
  }, {
    key: "clear",
    value: function() {
      var t = T.default.parse(document.cookie);
      for (var a in t)
        a.indexOf(x) === 0 && this.removeItem(a.substr(x.length));
      return null;
    }
  }]), e;
}();
A.default = Ee;
function qt() {
  var e = new Ee();
  try {
    var n = "__test";
    e.setItem(n, "1");
    var t = e.getItem(n);
    return e.removeItem(n), t === "1";
  } catch {
    return !1;
  }
}
Object.defineProperty(V, "__esModule", {
  value: !0
});
V.default = Lt;
var Ut = A, fe = "__test";
function me(e) {
  try {
    var n = window[e];
    return n.setItem(fe, "1"), n.removeItem(fe), !0;
  } catch {
    return !1;
  }
}
function Lt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "localStorage", n = String(e).replace(/storage$/i, "").toLowerCase();
  if (n === "local")
    return me("localStorage");
  if (n === "session")
    return me("sessionStorage");
  if (n === "cookie")
    return (0, Ut.hasCookies)();
  if (n === "memory")
    return !0;
  throw new Error("Storage method `" + e + "` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.");
}
var Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
var Dt = function() {
  function e(n, t) {
    for (var a = 0; a < t.length; a++) {
      var r = t[a];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
    }
  }
  return function(n, t, a) {
    return t && e(n.prototype, t), a && e(n, a), n;
  };
}();
function Gt(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
var Jt = function() {
  function e() {
    Gt(this, e), this._data = {};
  }
  return Dt(e, [{
    key: "getItem",
    value: function(t) {
      return this._data.hasOwnProperty(t) ? this._data[t] : null;
    }
  }, {
    key: "setItem",
    value: function(t, a) {
      return this._data[t] = String(a);
    }
  }, {
    key: "removeItem",
    value: function(t) {
      return delete this._data[t];
    }
  }, {
    key: "clear",
    value: function() {
      return this._data = {};
    }
  }]), e;
}();
Z.default = Jt;
Object.defineProperty(p, "__esModule", {
  value: !0
});
p.MemoryStorage = p.CookieStorage = p.isSupported = p.storage = void 0;
var Wt = V, q = Y(Wt), Kt = A, xe = Y(Kt), Qt = Z, Ie = Y(Qt);
function Y(e) {
  return e && e.__esModule ? e : { default: e };
}
var O = null;
(0, q.default)("localStorage") ? p.storage = O = window.localStorage : (0, q.default)("sessionStorage") ? p.storage = O = window.sessionStorage : (0, q.default)("cookieStorage") ? p.storage = O = new xe.default() : p.storage = O = new Ie.default();
var ge = p.default = O;
p.storage = O;
p.isSupported = q.default;
p.CookieStorage = xe.default;
p.MemoryStorage = Ie.default;
const pe = "react-beacon-hint", Q = (e, n = { increase: !1 }) => {
  var r;
  let t = {};
  const a = ge.getItem(pe);
  if (a)
    try {
      t = JSON.parse(a);
    } catch {
    }
  return t[e] = {
    occurred: (((r = t[e]) == null ? void 0 : r.occurred) || 0) + (n.increase ? 1 : 0)
  }, ge.setItem(pe, JSON.stringify(t)), t[e];
}, Vt = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: {
    scale: [0, 1],
    opacity: [0, 1]
  },
  exit: {
    scale: [1, 0],
    opacity: [1, 0]
  },
  transition: {
    duration: 0.25,
    times: [0, 1]
  }
}, Ce = B(
  ({
    autoStart: e = !0,
    popover: n,
    popoverProps: { arrow: t = { enabled: !0 }, hoverProps: a = { enabled: !1 }, onToggle: r, ...i } = {
      arrow: { enabled: !0 },
      hoverProps: { enabled: !1 }
    },
    uniqueKey: o,
    hit: l = "always",
    children: m,
    beaconProps: { autoOffset: h = !0, ...g } = { autoOffset: !0 },
    beacon: _ = "outline"
  }, d) => {
    const [v, c] = I(!1), [y, S] = I(), [j, f] = I({ width: 0, height: 0 }), R = C(() => typeof n == "string" ? /* @__PURE__ */ u.createElement(Nt, { text: n }) : n, [n]), z = C(() => _ === "fill" ? /* @__PURE__ */ u.createElement(wt, { ref: S }) : _ === "outline" ? /* @__PURE__ */ u.createElement(pt, { ref: S }) : Ke(_, {
      ref: S
    }), [_]);
    _e(() => {
      f({
        width: (y == null ? void 0 : y.getBoundingClientRect().width) || 0,
        height: (y == null ? void 0 : y.getBoundingClientRect().height) || 0
      });
    }, [y]);
    const N = C(() => o ? o.toString() : Rt(ct(R) + l), [o, R, l]), $ = oe(() => {
      if (l === "always") {
        c(!0);
        return;
      }
      const { occurred: b } = Q(N);
      b < l && c(!0);
    }, [l, N]);
    he(d, () => ({
      start: $
    })), U(() => {
      e && $();
    }, [e, $]);
    const w = oe(
      (b) => {
        if (r && r(b), b && l !== "always")
          Q(N, { increase: !0 });
        else if (!b && l !== "always") {
          const { occurred: D } = Q(N);
          D >= l && c(!1);
        }
      },
      [l, r, N]
    ), L = C(() => {
      var b;
      return /* @__PURE__ */ u.createElement(
        de,
        {
          ...i,
          arrow: t,
          middleware: (b = i.middleware) != null && b.length ? i.middleware : [le(10), ot(), lt(), se()],
          floatingComponent: R,
          hoverProps: a,
          onToggle: w,
          animateProps: i.animateProps ? i.animateProps : Vt
        },
        z
      );
    }, [t, a, w, z, R, i]);
    return /* @__PURE__ */ u.createElement(
      de,
      {
        ...g,
        middleware: [
          ...g.middleware || [],
          h && le({ mainAxis: -0.5 * j.width, alignmentAxis: -0.5 * j.height }),
          se()
        ],
        animatePresenceProps: { initial: !0, ...g.animatePresenceProps },
        floatingComponent: L,
        setOpen: c,
        open: v
      },
      m
    );
  }
);
Ce.displayName = "Hint";
const en = F(Ce);
export {
  St as Arrow,
  wt as FillBeacon,
  de as Floating,
  en as Hint,
  pt as OutlineBeacon,
  Nt as Popover
};
