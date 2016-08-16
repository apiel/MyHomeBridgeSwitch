//require('./decorators/restify.decorator.ts');
import restify = require('restify');
import SwitchController from './controllers/switch.controller';

import { SwitchService } from './services/switch.service';
import { SwitchModel } from './models/switch.model';

restify.CORS.ALLOW_HEADERS.push('authorization');

var server = restify.createServer();
server.use(restify.CORS());

let switchModel = new SwitchModel();
let switchService = new SwitchService(switchModel);
let switchController = new SwitchController(switchService);
server.get('/switch/:id/status', switchController.status.bind(switchController));
server.get('/switch/:id/toggle', switchController.toggle.bind(switchController));

server.listen(3030, function() {
  console.log('%s listening at %s', server.name, server.url);
});