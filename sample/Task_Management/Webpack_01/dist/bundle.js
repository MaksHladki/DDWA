var webpack = function(e) {
    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports;
    }
    var t = {};
    return r.m = e, r.c = t, r.p = "", r(0);
}([ function(e, r, t) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.logger = void 0;
    var o = t(1);
    (0, o.logger)("test message!"), r.logger = o.logger;
}, function(e, r) {
    "use strict";
    function t(e) {}
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.logger = t;
} ]);
//# sourceMappingURL=bundle.js.map