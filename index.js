var http = require('http');
var server = http.createServer(); 
var fs = require('fs');
var StatMode = require('stat-mode');

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/url') {
        fs.readFile('./index.html', function(err, data) {
			response.setHeader("Content-Type", "text/html; charset=utf-8");
			response.statusCode = 200;
			response.write(data);
			response.end();
		});
    } 
	else {
		fs.readFile('./errorCat.jpg', function(err, data) {
			response.setHeader("Content-Type", "image/jpeg");
			response.statusCode = 404;
			response.write(data);
			response.end();
		});
    }
});

server.listen(8080);