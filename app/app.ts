//require('./decorators/restify.decorator.ts');
import restify = require('restify');
import SwitchController from './controllers/switch.controller';

import { SwitchModel } from './models/switch.model';

restify.CORS.ALLOW_HEADERS.push('authorization');

var server = restify.createServer();
server.use(restify.CORS());


let switchModel = new SwitchModel();
let switchController = new SwitchController(switchModel);
server.get('switch', switchController.status.bind(switchController));

server.listen(3030, function() {
  console.log('%s listening at %s', server.name, server.url);
});