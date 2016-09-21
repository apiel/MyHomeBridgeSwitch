import * as request from 'request';
import { SwitchModel } from './../models/switch.model';
import { Switch } from './../models/switch';

export class SwitchService{
    constructor(private switchModel: SwitchModel) {}
    
    get(id: number): Switch {
        let _switch: Switch = this.switchModel.get(id);
         if (!_switch) {
            throw "Unknown switch key";
        }
        return _switch;
    }
    
    toggle(_switch: Switch): string {
        for(let urlKey in _switch.urls) {
            if (!_switch.status) {
                _switch.status = urlKey;
                break;
            }
            else if (_switch.status === urlKey) {
                _switch.status = null;
            }
        }
        if (!_switch.status) {
            _switch.status = Object.keys(_switch.urls)[0];
        }
        return _switch.status;
    }    
    
    setStatus(id: number, status: string): Switch {
        let _switch: Switch = this.get(id);

        if (_switch.urls[status]) {
            _switch.status = status;
        }
        else if (status === "toggle") {
            _switch.status = this.toggle(_switch);
        }
        else {
            throw "Status does not exist";
        }
        this.switchModel.save();
        request(_switch.urls[_switch.status]);                  
 
        return _switch;
    }    
}