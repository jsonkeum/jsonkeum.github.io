module.exports = [
    {
        "id":"front",
        "collectionName": "Front End",
        "collection":[
            {
                "id":"recipebox",
                "name": "Recipe Box App",
                "date": new Date("Jul 20, 2017"),
                "image":"recipebox_main.png",
                "link":"https://qcfb-react.glitch.me/recipebox/",
                "source":"https://github.com/quanchifootball/recipebox",
                "tags":["html","css","react","react-bootstrap","jsx"],
                "description":"This app uses your browser's local storage to store and return new recipes."
            },
            {
                "id":"markdown",
                "name": "Markdown Previewer",
                "date": new Date("Jul 11, 2017"),
                "image":"markdown_main.png",
                "link":"https://qcfb-react.glitch.me/markdown/",
                "source":"https://github.com/quanchifootball/markdown",
                "tags":["html","css","bootstrap","react","marked.js","jquery","jsx"],
                "description":"A live preview app for marking up texts using marked.js."
            },
            {
                "id":"leaderboard",
                "name": "FCC Leaderboard API",
                "date": new Date("Jul 17, 2017"),
                "image":"leaderboard_main.png",
                "link":"https://qcfb-react.glitch.me/leaderboard/",
                "source":"https://github.com/quanchifootball/leaderboard",
                "tags":["html","css","bootstrap","react","jquery","jsx"],
                "description":"A FreeCodeCamp project testing my react skills."
            },
            {
                "id":"barchart",
                "name": "<SVG> Bar Chart",
                "date": new Date("Aug 15, 2017"),
                "image":"barchart_main.png",
                "link":"https://codepen.io/quanchifootball/full/RZZYOw",
                "source":"https://github.com/quanchifootball/barchart",
                "tags":["html","css","d3.js","jquery"],
                "description":"An interactive D3.js bar chart of US GDP per quarter."
            },
            {
                "id":"tictactoe",
                "name": "Tic Tac Toe",
                "date": new Date("Jun 29, 2017"),
                "image":"tictactoe_main.png",
                "link":"https://codepen.io/quanchifootball/full/VWrRGJ",
                "source":"https://github.com/quanchifootball/tictactoe",
                "tags":["html","css","bootstrap","jquery","animate.css"],
                "description":"An unbeatable tic tac toe game. You cannot win."
            },
            {
                "id":"twitch",
                "name": "Twitch.tv API",
                "date": new Date("Jun 30, 2017"),
                "image":"twitch_main.png",
                "link":"https://codepen.io/quanchifootball/full/pwdERx",
                "source":"https://github.com/quanchifootball/twitch",
                "tags":["html","css","bootstrap","jquery"],
                "description":"A playlist of twitch streamers gathered using the twitch.tv json api."
            },
            {
                "id":"simon",
                "name": "Simon Game",
                "date": new Date("Jun 25, 2017"),
                "image":"simon_main.png",
                "link":"https://codepen.io/quanchifootball/full/jwmaYd",
                "source":"https://github.com/quanchifootball/simon",
                "tags":["html","css","jquery"],
                "description":"A Simon light-up game."
            },
            {
                "id":"calculator",
                "name": "Calculator",
                "date": new Date("Jun 15, 2017"),
                "image":"calculator_main.png",
                "link":"https://codepen.io/quanchifootball/full/pwbRpr",
                "source":"https://github.com/quanchifootball/calculator",
                "tags":["html","css","bootstrap","jquery"],
                "description":"A javascript calculator."
            },
            {
                "id":"pomodoro",
                "name": "Pomodoro Clock",
                "date": new Date("Jun 20, 2017"),
                "image":"pomodoro_main.png",
                "link":"https://codepen.io/quanchifootball/full/weJQrY",
                "source":"https://github.com/quanchifootball/pomodoro",
                "tags":["html","css","jquery"],
                "description":"A rotating interval-based timer."
            }
        ]
    },
    {
        "id":"node",
        "collectionName":"Node.js",
        "collection":[
            {
                "id":"datestamp",
                "name": "Datestamp Microservice",
                "date": new Date("Jul 31, 2017"),
                "image":"datestamp_main.png",
                "link":"https://qcfb-datestamp.glitch.me/",
                "source":"https://github.com/quanchifootball/qcfb-datestamp",
                "tags":["node","express"],
                "description":"This API returns a datestamp in both Unix and natural language format."
            },
            {
                "id":"requestheaderparser",
                "name": "Request Header Parser Microservice",
                "date": new Date("Aug 1, 2017"),
                "image":"requestheaderparser_main.png",
                "link":"https://qcfb-requestheaderparser.glitch.me/",
                "source":"https://github.com/quanchifootball/qcfb-requestheaderparser",
                "tags":["node","express"],
                "description":"Returns a json object that contains data from the request header."
            },
            {
                "id":"urlshortener",
                "name": "URL Shortener Microservice",
                "date": new Date("Aug 9, 2017"),
                "image":"urlshortener_main.png",
                "link":"https://qcfb-urlshortener.glitch.me/",
                "source":"https://github.com/quanchifootball/qcfb-urlshortener",
                "tags":["node","express","mongodb"],
                "description":"Returns a json object containing a four digit shortcut code for the url contained in the request. This api uses a database to store all url requests and eliminates double entry."
            },
            {
                "id":"imagesearch",
                "name": "Image Search API",
                "date": new Date("Aug 12, 2017"),
                "image":"imagesearch_main.png",
                "link":"https://qcfb-imagesearch.glitch.me/",
                "source":"https://github.com/quanchifootball/qcfb-imagesearch",
                "tags":["node","express","mongodb"],
                "description":"This API returns a google custom image search result for the request query and also includes an option to retrieve prior search history from a database."
            },
            {
                "id":"filesize",
                "name": "File Size Microservice",
                "date": new Date("Aug 12, 2017"),
                "image":"filesize_main.png",
                "link":"https://qcfb-filesize.glitch.me/",
                "source":"https://github.com/quanchifootball/qcfb-filesize",
                "tags":["node","express"],
                "description":"A simple metadata api that returns the size of the uploaded file."
            }
        ]
    }
]
