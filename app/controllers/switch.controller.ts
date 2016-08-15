import restify = require('restify');
import { RestGET } from './../decorators/restify.decorator';

export default class SwitchController { // extend controller
    @RestGET("yaya")
    get(req: restify.Request, res: restify.Response, next: restify.Next) {
            res.json(200, 'pong');
            return next();
    }
}
