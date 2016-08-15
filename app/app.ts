//require('./decorators/restify.decorator.ts');
import restify = require('restify');
import SwitchController from './controllers/switch.controller';

restify.CORS.ALLOW_HEADERS.push('authorization');

var server = restify.createServer();
server.use(restify.CORS());

let switchController = new SwitchController();
//server.get('switch', switchController.get);
console.log(server.name);

server.listen(3030, function() {
  console.log('%s listening at %s', server.name, server.url);
});