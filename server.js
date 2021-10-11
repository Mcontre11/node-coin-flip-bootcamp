// require means that the engine is checking for these packages/modules etc.. depending on language 
// sometimes input and or require can be used 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (page == '/api') {
        // math.random retrieves a number from 0-.99 and the math. 0 <= n < 1 so the reason we add math.floor is to round it up so its either 0 or 1 
        let coin = Math.floor(Math.random() * 2)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
            result: coin
        }
        // thi is sending out a response to the client to render the data as a string 
        res.end(JSON.stringify(objToJson));
    }//else if
    else if (page == '/css/style.css') {
            fs.readFile('style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/main.js') {
        fs.readFile('main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});
server.listen(8000);


