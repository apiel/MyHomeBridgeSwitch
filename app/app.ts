import restify = require('restify');

restify.CORS.ALLOW_HEADERS.push('authorization');

var server = restify.createServer();
server.use(restify.CORS());

server.listen(3030, function() {
  console.log('%s listening at %s', server.name, server.url);
});