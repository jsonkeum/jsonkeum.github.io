module.exports = [
    {
        "id":"mern",
        "collectionName":"MERN Web Apps",
        "collection":[
            {
                "id":"youtube_stream",
                "name": "Youtube Stream+Chat App",
                "date": new Date("Mar 12, 2018"),
                "image":"youtube_stream_main.png",
                "link":"https://youtube-streaming-tool.herokuapp.com",
                "source":"https://github.com/quanchifootball/youtube_stream",
                "tags":["mongodb","mongoose","express","react","react-router","react-bootstrap","node","axios","ejs","webpack"],
                "description":"Full stack web application allowing users to login and join a live stream. Supports youtube livechat and google OAuth flow. NoSQL database in the backend saves and returns chat messages."
            }
        ]
    },
    {
        "id":"front",
        "collectionName": "Front End",
        "collection":[
            {
                "id":"recipebox",
                "name": "Recipe Box App",
                "date": new Date("Jul 20, 2017"),
                "image":"recipebox_main.png",
                "link":"https://qcfb-proj.glitch.me/recipebox/",
                "source":"https://github.com/quanchifootball/recipebox",
                "tags":["html","css","react","react-bootstrap","jsx"],
                "description":"This app uses your browser's local storage to store and return new recipes."
            },
            {
                "id":"markdown",
                "name": "Markdown Previewer",
                "date": new Date("Jul 11, 2017"),
                "image":"markdown_main.png",
                "link":"https://qcfb-proj.glitch.me/markdown/",
                "source":"https://github.com/quanchifootball/markdown",
                "tags":["html","css","bootstrap","react","marked.js","jquery","jsx"],
                "description":"A live preview app for marking up texts using marked.js."
            },
            {
                "id":"leaderboard",
                "name": "FCC Leaderboard API",
                "date": new Date("Jul 17, 2017"),
                "image":"leaderboard_main.png",
                "link":"https://qcfb-proj.glitch.me/leaderboard/",
                "source":"https://github.com/quanchifootball/leaderboard",
                "tags":["html","css","bootstrap","react","jquery","jsx"],
                "description":"A FreeCodeCamp project testing my react skills."
            },
            {
                "id":"tictactoe",
                "name": "Tic Tac Toe",
                "date": new Date("Jun 29, 2017"),
                "image":"tictactoe_main.png",
                "link":"https://qcfb-proj.glitch.me/tictactoe",
                "source":"https://github.com/quanchifootball/tictactoe",
                "tags":["html","css","bootstrap","jquery","animate.css"],
                "description":"An unbeatable tic tac toe game. You cannot win."
            },
            {
                "id":"twitch",
                "name": "Twitch.tv API",
                "date": new Date("Jun 30, 2017"),
                "image":"twitch_main.png",
                "link":"https://qcfb-proj.glitch.me/twitch",
                "source":"https://github.com/quanchifootball/twitch",
                "tags":["html","css","bootstrap","jquery"],
                "description":"A playlist of twitch streamers gathered using the twitch.tv json api."
            },
            {
                "id":"simon",
                "name": "Simon Game",
                "date": new Date("Jun 25, 2017"),
                "image":"simon_main.png",
                "link":"https://qcfb-proj.glitch.me/simon",
                "source":"https://github.com/quanchifootball/simon",
                "tags":["html","css","jquery"],
                "description":"A Simon light-up game."
            },
            {
                "id":"calculator",
                "name": "Calculator",
                "date": new Date("Jun 15, 2017"),
                "image":"calculator_main.png",
                "link":"https://qcfb-proj.glitch.me/calculator",
                "source":"https://github.com/quanchifootball/calculator",
                "tags":["html","css","bootstrap","jquery"],
                "description":"A javascript calculator."
            },
            {
                "id":"pomodoro",
                "name": "Pomodoro Clock",
                "date": new Date("Jun 20, 2017"),
                "image":"pomodoro_main.png",
                "link":"https://qcfb-proj.glitch.me/pomodoro",
                "source":"https://github.com/quanchifootball/pomodoro",
                "tags":["html","css","jquery"],
                "description":"A rotating interval-based timer."
            }
        ]
    },
	{
		"id":"d3",
        "collectionName": "D3.js",
        "collection":[
            {
                "id":"barchart",
                "name": "Interactive Bar Chart",
                "date": new Date("Aug 15, 2017"),
                "image":"barchart_main.png",
                "link":"https://qcfb-proj.glitch.me/barchart",
                "source":"https://github.com/quanchifootball/barchart",
                "tags":["html","css","d3.js","jquery"],
                "description":"An interactive D3.js bar chart of US GDP per quarter."
            },
            {
                "id":"scatterplot",
                "name": "Interactive Scatterplot",
                "date": new Date("Sep 7, 2017"),
                "image":"scatterplot_main.png",
                "link":"https://qcfb-proj.glitch.me/scatterplot",
                "source":"https://github.com/quanchifootball/scatterplot",
                "tags":["html","css","d3.js"],
                "description":"An interactive scatterplot charting doping allegations in professional cycling."
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
    },
    {
        "id":"java",
        "collectionName":"Java",
        "collection":[
            {
                "id":"dataminer",
                "name": "Contact Data Mining Helper",
                "date": new Date("Dec 9, 2017"),
                "image":"dataminer_main.png",
                "link":"",
                "source":"https://github.com/quanchifootball/dataminer",
                "tags":["java se","swing"],
                "description":"This program takes in an xlsx file with specified fields and creates an easy to use interface for mining contact data on the internet. Nothing fancy here, just a set of simple features that would otherwise take up time for for the average data entry activity."
            }
        ]
    }
]
