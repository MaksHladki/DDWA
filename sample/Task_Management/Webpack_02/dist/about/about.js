var about = webpackJsonp_name_([ 0 ], {
    0: function(e, n, o) {
        o(1), o(76), e.exports = o(77);
    },
    77: function(e, n, o) {
        "use strict";
        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.build = void 0;
        var r = o(78), a = (t(r), o(82)), u = (t(a), o(83)), s = t(u);
        (0, s.default)("about.js");
        var c = function(e) {
            var n = document.createElement("div");
            n.className = "main";
            var o = document.createElement("h1");
            o.innerHTML = e, n.appendChild(n), document.body.appendChild(n);
        };
        n.build = c;
    },
    78: function(e, n, o) {
        var t = o(79);
        "string" == typeof t && (t = [ [ e.id, t, "" ] ]);
        o(81)(t, {});
        t.locals && (e.exports = t.locals);
    },
    79: function(e, n, o) {
        n = e.exports = o(80)(), n.push([ e.id, "body{background-color:green}.header{margin:50px;font-style:italic}", "", {
            version: 3,
            sources: [ "/./about/about.css" ],
            names: [],
            mappings: "AAAA,KACI,sBAAwB,CAC3B,AAED,QACI,YAAa,AACb,iBAAmB,CACtB",
            file: "about.css",
            sourcesContent: [ "body{\r\n    background-color: green;\r\n}\r\n\r\n.header{\r\n    margin: 50px;\r\n    font-style: italic;\r\n}" ],
            sourceRoot: "webpack://"
        } ]);
    },
    82: function(e, n, o) {
        e.exports = o.p + "about/about.html";
    }
});
//# sourceMappingURL=about.js.map