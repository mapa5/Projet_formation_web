/*! WEB-SDK@1.6.3 © GRYPHLINE. GRYPH FRONTIER PTE.LTD. 2022-2025. All Rights Reserved. Published at 2025-01-06 18:02:19 UTC+08:00 */ ! function() { "use strict"; var e, t, n, r, o = {},
        u = {};

    function c(e) { var t = u[e]; if (void 0 !== t) return t.exports; var n = u[e] = { id: e, exports: {} }; return o[e].call(n.exports, n, n.exports, c), n.exports } c.m = o, c.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return c.d(t, { a: t }), t }, t = Object.getPrototypeOf ? function(e) { return Object.getPrototypeOf(e) } : function(e) { return e.__proto__ }, c.t = function(n, r) { if (1 & r && (n = this(n)), 8 & r) return n; if ("object" == typeof n && n) { if (4 & r && n.__esModule) return n; if (16 & r && "function" == typeof n.then) return n } var o = Object.create(null);
            c.r(o); var u = {};
            e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n;
                "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((function(e) { u[e] = function() { return n[e] } })); return u.default = function() { return n }, c.d(o, u), o }, c.d = function(e, t) { for (var n in t) c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, c.f = {}, c.e = function(e) { return Promise.all(Object.keys(c.f).reduce((function(t, n) { return c.f[n](e, t), t }), [])) }, c.u = function(e) { return e + "." + { 0: "05326d7b9e93c89367c1", 114: "10d94e524273fc82f198", 159: "2aac57ca1c2904a2ece9", 204: "570754811d4a4efd267e", 275: "f0c0fc9f0c945c103932", 293: "fbd735edcda566ca09d0", 342: "63af5e72b43799f675de", 483: "944d8bcdfdcd1c6d6920", 675: "7256189b03bff3a67ac8", 753: "828a06443707613574da", 890: "9443af97ac807062d325", 974: "89b99eef7620346058a5" } [e] + ".js" }, c.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), c.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n = {}, r = "@hg/gl-web-sdk:", c.l = function(e, t, o, u) { if (n[e]) n[e].push(t);
            else { var i, f; if (void 0 !== o)
                    for (var a = document.getElementsByTagName("script"), d = 0; d < a.length; d++) { var l = a[d]; if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + o) { i = l; break } } i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", r + o), i.src = e), n[e] = [t]; var b = function(t, r) { i.onerror = i.onload = null, clearTimeout(s); var o = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((function(e) { return e(r) })), t) return t(r) },
                    s = setTimeout(b.bind(null, void 0, { type: "timeout", target: i }), 12e4);
                i.onerror = b.bind(null, i.onerror), i.onload = b.bind(null, i.onload), f && document.head.appendChild(i) } }, c.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, c.p = "https://web-static.hg-cdn.com/gl_web_sdk/",
        function() { var e = { 650: 0 };
            c.f.j = function(t, n) { var r = c.o(e, t) ? e[t] : void 0; if (0 !== r)
                    if (r) n.push(r[2]);
                    else { var o = new Promise((function(n, o) { r = e[t] = [n, o] }));
                        n.push(r[2] = o); var u = c.p + c.u(t),
                            i = new Error;
                        c.l(u, (function(n) { if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) { var o = n && ("load" === n.type ? "missing" : n.type),
                                    u = n && n.target && n.target.src;
                                i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + u + ")", i.name = "ChunkLoadError", i.type = o, i.request = u, r[1](i) } }), "chunk-" + t, t) } }; var t = function(t, n) { var r, o, u = n[0],
                        i = n[1],
                        f = n[2],
                        a = 0; if (u.some((function(t) { return 0 !== e[t] }))) { for (r in i) c.o(i, r) && (c.m[r] = i[r]); if (f) f(c) } for (t && t(n); a < u.length; a++) o = u[a], c.o(e, o) && e[o] && e[o][0](), e[o] = 0 },
                n = self.webpackChunk_hg_gl_web_sdk = self.webpackChunk_hg_gl_web_sdk || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)) }(), c.e(342).then(c.bind(c, 2342)) }();