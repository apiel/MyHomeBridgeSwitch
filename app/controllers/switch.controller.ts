import restify = require('restify');
import { SwitchService } from './../services/switch.service';
import { Switch } from './../models/switch';

export default class SwitchController {
    constructor(private switchService: SwitchService) {}
    
    status(req: restify.Request, res: restify.Response, next: restify.Next) {
        let id = req.params['id'];
        try {
            let _switch: Switch = this.switchService.get(id);            
            res.json(200, {status: _switch.status});
        }
        catch(e) {
            res.json(200, {error: e});
        }
        return next();
    } 
    
    setStatus(req: restify.Request, res: restify.Response, next: restify.Next) {
        let id = req.params['id'];
        let status = req.params['status'];
        try {
            let _switch: Switch = this.switchService.setStatus(id, status);            
            res.json(200, {status: _switch.status});
        }
        catch(e) {
            res.json(200, {error: e});
        }
        return next();
    } 
}
