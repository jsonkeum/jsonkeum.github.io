(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = [{
    "id": "front",
    "collectionName": "Front End",
    "collection": [{
        "id": "recipebox",
        "name": "Recipe Box App",
        "date": new Date("Jul 20, 2017"),
        "image": "recipebox_main.png",
        "link": "https://qcfb-react.glitch.me/recipebox/",
        "source": "https://github.com/quanchifootball/recipebox",
        "tags": ["html", "css", "react", "react-bootstrap", "jsx"],
        "description": "This app uses your browser's local storage to store and return new recipes."
    }, {
        "id": "markdown",
        "name": "Markdown Previewer",
        "date": new Date("Jul 11, 2017"),
        "image": "markdown_main.png",
        "link": "https://qcfb-react.glitch.me/markdown/",
        "source": "https://github.com/quanchifootball/markdown",
        "tags": ["html", "css", "bootstrap", "react", "marked.js", "jquery", "jsx"],
        "description": "A live preview app for marking up texts using marked.js."
    }, {
        "id": "leaderboard",
        "name": "FCC Leaderboard API",
        "date": new Date("Jul 17, 2017"),
        "image": "leaderboard_main.png",
        "link": "https://qcfb-react.glitch.me/leaderboard/",
        "source": "https://github.com/quanchifootball/leaderboard",
        "tags": ["html", "css", "bootstrap", "react", "jquery", "jsx"],
        "description": "A FreeCodeCamp project testing my react skills."
    }, {
        "id": "barchart",
        "name": "<SVG> Bar Chart",
        "date": new Date("Aug 15, 2017"),
        "image": "barchart_main.png",
        "link": "https://codepen.io/quanchifootball/full/RZZYOw",
        "source": "https://github.com/quanchifootball/barchart",
        "tags": ["html", "css", "d3.js", "jquery"],
        "description": "An interactive D3.js bar chart of US GDP per quarter."
    }, {
        "id": "tictactoe",
        "name": "Tic Tac Toe",
        "date": new Date("Jun 29, 2017"),
        "image": "tictactoe_main.png",
        "link": "https://codepen.io/quanchifootball/full/VWrRGJ",
        "source": "https://github.com/quanchifootball/tictactoe",
        "tags": ["html", "css", "bootstrap", "jquery", "animate.css"],
        "description": "An unbeatable tic tac toe game. You cannot win."
    }, {
        "id": "twitch",
        "name": "Twitch.tv API",
        "date": new Date("Jun 30, 2017"),
        "image": "twitch_main.png",
        "link": "https://codepen.io/quanchifootball/full/pwdERx",
        "source": "https://github.com/quanchifootball/twitch",
        "tags": ["html", "css", "bootstrap", "jquery"],
        "description": "A playlist of twitch streamers gathered using the twitch.tv json api."
    }, {
        "id": "simon",
        "name": "Simon Game",
        "date": new Date("Jun 25, 2017"),
        "image": "simon_main.png",
        "link": "https://codepen.io/quanchifootball/full/jwmaYd",
        "source": "https://github.com/quanchifootball/simon",
        "tags": ["html", "css", "jquery"],
        "description": "A Simon light-up game."
    }, {
        "id": "calculator",
        "name": "Calculator",
        "date": new Date("Jun 15, 2017"),
        "image": "calculator_main.png",
        "link": "https://codepen.io/quanchifootball/full/pwbRpr",
        "source": "https://github.com/quanchifootball/calculator",
        "tags": ["html", "css", "bootstrap", "jquery"],
        "description": "A javascript calculator."
    }, {
        "id": "pomodoro",
        "name": "Pomodoro Clock",
        "date": new Date("Jun 20, 2017"),
        "image": "pomodoro_main.png",
        "link": "https://codepen.io/quanchifootball/full/weJQrY",
        "source": "https://github.com/quanchifootball/pomodoro",
        "tags": ["html", "css", "jquery"],
        "description": "A rotating interval-based timer."
    }]
}, {
    "id": "node",
    "collectionName": "Node.js",
    "collection": [{
        "id": "datestamp",
        "name": "Datestamp Microservice",
        "date": new Date("Jul 31, 2017"),
        "image": "datestamp_main.png",
        "link": "https://qcfb-datestamp.glitch.me/",
        "source": "https://github.com/quanchifootball/qcfb-datestamp",
        "tags": ["node", "express"],
        "description": "This API returns a datestamp in both Unix and natural language format."
    }, {
        "id": "requestheaderparser",
        "name": "Request Header Parser Microservice",
        "date": new Date("Aug 1, 2017"),
        "image": "requestheaderparser_main.png",
        "link": "https://qcfb-requestheaderparser.glitch.me/",
        "source": "https://github.com/quanchifootball/qcfb-requestheaderparser",
        "tags": ["node", "express"],
        "description": "Returns a json object that contains data from the request header."
    }, {
        "id": "urlshortener",
        "name": "URL Shortener Microservice",
        "date": new Date("Aug 9, 2017"),
        "image": "urlshortener_main.png",
        "link": "https://qcfb-urlshortener.glitch.me/",
        "source": "https://github.com/quanchifootball/qcfb-urlshortener",
        "tags": ["node", "express", "mongodb"],
        "description": "Returns a json object containing a four digit shortcut code for the url contained in the request. This api uses a database to store all url requests and eliminates double entry."
    }, {
        "id": "imagesearch",
        "name": "Image Search API",
        "date": new Date("Aug 12, 2017"),
        "image": "imagesearch_main.png",
        "link": "https://qcfb-imagesearch.glitch.me/",
        "source": "https://github.com/quanchifootball/qcfb-imagesearch",
        "tags": ["node", "express", "mongodb"],
        "description": "This API returns a google custom image search result for the request query and also includes an option to retrieve prior search history from a database."
    }, {
        "id": "filesize",
        "name": "File Size Microservice",
        "date": new Date("Aug 12, 2017"),
        "image": "filesize_main.png",
        "link": "https://qcfb-filesize.glitch.me/",
        "source": "https://github.com/quanchifootball/qcfb-filesize",
        "tags": ["node", "express"],
        "description": "A simple metadata api that returns the size of the uploaded file."
    }]
}];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    { className: "text-center title" },
                    "About"
                ),
                React.createElement(
                    "div",
                    { id: "about-me" },
                    React.createElement(
                        "h3",
                        null,
                        React.createElement(
                            "strong",
                            null,
                            "Hi"
                        ),
                        ","
                    ),
                    React.createElement(
                        "p",
                        null,
                        "I am an aspiring full stack developer currently residing in Vancouver. Just a few years back I was working as a trial lawyer in New York, where I represented clients in labour and employment matters. Practicing law was a rewarding gig, and I got to use cool phrases like ",
                        React.createElement(
                            "em",
                            null,
                            "double jeopardy"
                        ),
                        " and ",
                        React.createElement(
                            "em",
                            null,
                            "beyond a reasonable doubt"
                        ),
                        ". ",
                        React.createElement(
                            "strong",
                            null,
                            "*"
                        ),
                        " "
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "p",
                        null,
                        "My goal is to get involved in developing solutions that combine law and technology. I have the law part down and am now working on the technology side. Although I\u2019ve taken some college courses on algorithms, systems analysis and OOP, most of what I know is self-taught."
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "p",
                        null,
                        "This page was built using Node.js with React components made browser-friendly using Gulp, and features some of the projects I\u2019ve built so far. Enjoy, and shoot me a message on Linkedin if you\u2019d like to chat."
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "p",
                        { className: "text-right signed" },
                        "-Jason"
                    ),
                    React.createElement(
                        "p",
                        { id: "postscript" },
                        React.createElement(
                            "strong",
                            null,
                            "*"
                        ),
                        " I was not a criminal lawyer so I guess I never actually used those phrases, but they\u2019re still fun to think about."
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);

exports.default = About;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bio = function (_React$Component) {
    _inherits(Bio, _React$Component);

    function Bio() {
        _classCallCheck(this, Bio);

        return _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).apply(this, arguments));
    }

    _createClass(Bio, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "bio", className: "col-xs-12 col-sm-2 col-md-2 row" },
                React.createElement(
                    "div",
                    { className: "col-xs-3 col-sm-12 col-md-12" },
                    React.createElement("img", { src: "./src/assets/images/me.jpeg", className: "img-responsive img-rounded img-thumbnail biopic" }),
                    React.createElement("div", { style: { textAlign: "center" } })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-9 col-sm-12 col-md-12 masthead" },
                    React.createElement(
                        "div",
                        { className: "col-xs-8 col-sm-12 col-md-12 signature" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "strong",
                                null,
                                "@quanchifootball"
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "em",
                                null,
                                React.createElement(
                                    "strong",
                                    null,
                                    "Full Stack Portfolio"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "div",
                                null,
                                React.createElement("i", { className: "fa fa-graduation-cap", "aria-hidden": "true" }),
                                React.createElement(
                                    "span",
                                    { style: { color: "#003c79" } },
                                    " BCIT"
                                )
                            ),
                            React.createElement(
                                "div",
                                null,
                                React.createElement("i", { className: "fa fa-graduation-cap", "aria-hidden": "true" }),
                                React.createElement(
                                    "span",
                                    { style: { color: "#740303" } },
                                    " Boston University School of Law"
                                )
                            ),
                            React.createElement(
                                "div",
                                null,
                                React.createElement("i", { className: "fa fa-graduation-cap", "aria-hidden": "true" }),
                                React.createElement(
                                    "span",
                                    { style: { color: "#003c79" } },
                                    " Qu"
                                ),
                                React.createElement(
                                    "span",
                                    { style: { color: "#a3a300" } },
                                    "ee"
                                ),
                                React.createElement(
                                    "span",
                                    { style: { color: "#740303" } },
                                    "n's"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "em",
                                null,
                                "Vancouver, BC"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-4 col-sm-12 col-md-12 icons" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-xs-12 col-sm-6 col-md-6" },
                                React.createElement(
                                    "a",
                                    { href: "https://github.com/quanchifootball", target: "_blank" },
                                    React.createElement("img", { src: "./src/assets/images/github.png", className: "img-responsive" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col-xs-12 col-sm-6 col-md-6" },
                                React.createElement(
                                    "a",
                                    { href: "https://linkedin.com/in/jasonkeum", target: "_blank" },
                                    React.createElement("img", { src: "./src/assets/images/linkedin.png", className: "img-responsive" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Bio;
}(React.Component);

exports.default = Bio;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MainPage = require("./MainPage.js");

var _MainPage2 = _interopRequireDefault(_MainPage);

var _MainMenu = require("./MainMenu.js");

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Bio = require("./Bio.js");

var _Bio2 = _interopRequireDefault(_Bio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var projects = require("../assets/projects.js");

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage(props) {
        _classCallCheck(this, IndexPage);

        var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

        var name = projects.map(function (collection) {
            return {
                _id: collection.id,
                name: collection.collectionName
            };
        });
        _this.state = {
            intro: true,
            about: false,
            collection: {},
            collectionNames: name
        };
        _this.handleAbout = _this.handleAbout.bind(_this);
        _this.handleMenu = _this.handleMenu.bind(_this);
        return _this;
    }

    _createClass(IndexPage, [{
        key: "handleAbout",
        value: function handleAbout() {
            if (!this.state.about) {
                this.setState({
                    intro: false,
                    about: true
                });
            }
        }
    }, {
        key: "handleMenu",
        value: function handleMenu(choice) {
            if (this.state.collection.id != choice) {
                var selection = projects.filter(function (coll) {
                    return coll.id == choice;
                });
                this.setState({
                    intro: false,
                    about: false,
                    collection: selection[0]
                });
            } else {
                this.setState({
                    about: false
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "wrapper", className: "container" },
                React.createElement(
                    "div",
                    { id: "navbar" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h1",
                            { id: "name" },
                            "Jason Keum"
                        ),
                        React.createElement(
                            "nav",
                            null,
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    { onClick: this.handleAbout },
                                    "About"
                                ),
                                React.createElement(_MainMenu2.default, { onMenu: this.handleMenu, names: this.state.collectionNames })
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "page", className: "row" },
                    React.createElement(_Bio2.default, null),
                    React.createElement(
                        "div",
                        { id: "main", className: "col-xs-12 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1" },
                        React.createElement(_MainPage2.default, { about: this.state.about, intro: this.state.intro, coll: this.state.collection })
                    )
                ),
                React.createElement(
                    "footer",
                    null,
                    React.createElement(
                        "p",
                        { className: "text-center" },
                        "\xA9 2017 by Jason Keum; Linkedin/Github icons by Freepik/Dave Gandy"
                    )
                )
            );
        }
    }]);

    return IndexPage;
}(React.Component);

exports.default = IndexPage;

},{"../assets/projects.js":1,"./Bio.js":3,"./MainMenu.js":6,"./MainPage.js":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Intro = function Intro() {
    return React.createElement(
        "div",
        { style: { height: "400px" } },
        React.createElement(
            "h2",
            { id: "welcome", className: "text-center title" },
            "Welcome,"
        )
    );
};

exports.default = Intro;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainMenu = function (_React$Component) {
    _inherits(MainMenu, _React$Component);

    function MainMenu(props) {
        _classCallCheck(this, MainMenu);

        var _this = _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, props));

        _this.menuSelect = _this.menuSelect.bind(_this);
        _this.menuDropdown = _this.menuDropdown.bind(_this);
        _this.menuDisppear = _this.menuDisappear.bind(_this);
        return _this;
    }

    _createClass(MainMenu, [{
        key: "menuSelect",
        value: function menuSelect(e) {
            this.menuDisappear();
            var choice = e.target.id;
            this.props.onMenu(choice);
        }
    }, {
        key: "menuDropdown",
        value: function menuDropdown() {
            document.getElementsByClassName("collections")[0].style.display = "block";
        }
    }, {
        key: "menuDisappear",
        value: function menuDisappear() {
            document.getElementsByClassName("collections")[0].style.display = "none";
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "li",
                { className: "dropdown", onMouseOver: this.menuDropdown, onMouseOut: this.menuDisappear },
                React.createElement(
                    "div",
                    null,
                    "< />"
                ),
                React.createElement(
                    "div",
                    { className: "collections" },
                    this.props.names.map(function (name) {
                        return React.createElement(
                            "p",
                            { key: name._id, id: name._id, onClick: _this2.menuSelect, className: "coll" },
                            name.name
                        );
                    })
                )
            );
        }
    }]);

    return MainMenu;
}(React.Component);

exports.default = MainMenu;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ProjectCard = require("./ProjectCard.js");

var _ProjectCard2 = _interopRequireDefault(_ProjectCard);

var _Intro = require("./Intro.js");

var _Intro2 = _interopRequireDefault(_Intro);

var _About = require("./About.js");

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function (_React$Component) {
    _inherits(MainPage, _React$Component);

    function MainPage() {
        _classCallCheck(this, MainPage);

        return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
    }

    _createClass(MainPage, [{
        key: "render",
        value: function render() {
            if (!this.props.about && this.props.intro) {
                return React.createElement(_Intro2.default, null);
            } else if (this.props.about && !this.props.intro) {
                return React.createElement(_About2.default, null);
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        { className: "text-center title" },
                        this.props.coll.collectionName
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.props.coll.collection.map(function (project) {
                            return React.createElement(_ProjectCard2.default, { key: project.id, project: project });
                        })
                    )
                );
            }
        }
    }]);

    return MainPage;
}(React.Component);

exports.default = MainPage;

},{"./About.js":2,"./Intro.js":5,"./ProjectCard.js":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var Label = ReactBootstrap.Label;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octoboer", "November", "December"];

var ProjectCard = function (_React$Component) {
    _inherits(ProjectCard, _React$Component);

    function ProjectCard(props) {
        _classCallCheck(this, ProjectCard);

        var _this = _possibleConstructorReturn(this, (ProjectCard.__proto__ || Object.getPrototypeOf(ProjectCard)).call(this, props));

        _this.state = {
            showModal: false
        };
        _this.close = _this.close.bind(_this);
        _this.open = _this.open.bind(_this);
        return _this;
    }

    _createClass(ProjectCard, [{
        key: "open",
        value: function open() {
            this.setState({ showModal: true });
        }
    }, {
        key: "close",
        value: function close() {
            this.setState({ showModal: false });
        }
    }, {
        key: "render",
        value: function render() {
            var project = this.props.project;
            return React.createElement(
                "div",
                { className: "col-xs-12 col-sm-6 col-md-4" },
                React.createElement(
                    "div",
                    { onClick: this.open, className: "card", style: { backgroundImage: "url(./src/assets/images/" + project.image + ")" } },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h2",
                            { className: "projTitle" },
                            project.name
                        )
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        Modal,
                        { show: this.state.showModal, onHide: this.close, dialogClassName: "custom-modal" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-xs-12 col-sm-12 col-md-9" },
                                React.createElement("img", { className: "img-responsive coverphoto", src: "./src/assets/images/" + project.image })
                            ),
                            React.createElement(
                                "div",
                                { className: "col-xs-12 col-sm-12 col-md-3" },
                                React.createElement(
                                    "div",
                                    { className: "captionTitle" },
                                    React.createElement(
                                        "h3",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            project.name
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row tags" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-6 col-sm-12 col-md-12" },
                                        project.tags.map(function (tag) {
                                            return React.createElement(
                                                Label,
                                                { key: tag },
                                                tag
                                            );
                                        })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-6 col-sm-12 col-md-12 row" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "p",
                                                { className: "text-right date" },
                                                "- ",
                                                months[project.date.getMonth()] + " " + project.date.getDate() + ", " + project.date.getFullYear()
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "description" },
                                            project.description
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Modal.Footer,
                            null,
                            React.createElement(
                                "div",
                                { className: "btnTray", style: { textAlign: "center" } },
                                React.createElement(
                                    Button,
                                    { bsSize: "large", href: project.link, target: "_blank", bsStyle: "success" },
                                    "Visit"
                                ),
                                React.createElement(
                                    Button,
                                    { bsSize: "large", href: project.source, target: "_blank", bsStyle: "warning" },
                                    "Source"
                                ),
                                React.createElement(
                                    Button,
                                    { bsSize: "large", onClick: this.close },
                                    "Close"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ProjectCard;
}(React.Component);

exports.default = ProjectCard;

},{}],9:[function(require,module,exports){
'use strict';

var _IndexPage = require('./components/IndexPage.js');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_IndexPage2.default, null), document.getElementById('app'));

function fadeIn() {
  document.getElementById("welcome").style.opacity = 1;
  document.getElementById("welcome").style.paddingTop = "120px";
}

window.onload = fadeIn;

},{"./components/IndexPage.js":4}]},{},[9]);
