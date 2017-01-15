var index = webpackJsonp_name_([ 1 ], {
    0: function(e, n, r) {
        r(1), r(76), e.exports = r(84);
    },
    84: function(e, n, r) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.build = void 0;
        var i = r(85), d = (o(i), r(88)), a = (o(d), r(83)), t = o(a);
        (0, t.default)("about.js");
        var c = function(e) {
            var n = document.createElement("h1");
            n.className = "header", n.innerHTML = e, document.body.insertBefore(n, document.body.firstChild);
        };
        n.build = c;
    },
    85: function(e, n, r) {
        var o = r(86);
        "string" == typeof o && (o = [ [ e.id, o, "" ] ]);
        r(81)(o, {});
        o.locals && (e.exports = o.locals);
    },
    86: function(e, n, r) {
        n = e.exports = r(80)(), n.push([ e.id, "body{background-color:red}.main{height:100px;margin:50px;border-radius:5px;background-image:url(" + r(87) + ")}", "", {
            version: 3,
            sources: [ "/./index/index.css" ],
            names: [],
            mappings: "AAAA,KACI,oBAAsB,CACzB,AAED,MACI,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,8CAAkC,CACrC",
            file: "index.css",
            sourcesContent: [ "body {\r\n    background-color: red;\r\n}\r\n\r\n.main {\r\n    height: 100px;\r\n    margin: 50px;\r\n    border-radius: 5px;\r\n    background-image: url('logo.png');\r\n}" ],
            sourceRoot: "webpack://"
        } ]);
    },
    87: function(e, n, r) {
        e.exports = r.p + "index/logo.png?a8ac5073d7e67ec9b87f768c00712b11";
    },
    88: function(e, n, r) {
        e.exports = r.p + "index/index.html";
    }
});
//# sourceMappingURL=index.js.map