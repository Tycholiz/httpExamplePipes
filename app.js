var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
          throw err;
       })
       .on('response', function(response) {
          console.log("Downloading image...");
          console.log("Download complete:");
          console.log('Response status code: ', response.statusCode, '\nResponse status message: ', response.statusMessage, '\nResponse content type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))