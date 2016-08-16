import { SwitchModel } from './../models/switch.model';
import { Switch } from './../models/switch';

export class SwitchService{
    constructor(private switchModel: SwitchModel) {}
    
    get(id: number): Switch {
        let _switch: Switch = this.switchModel.get(id);
        return _switch;
    }
    
    toggle(id: number): Switch {
        let _switch: Switch = this.get(id);
        if (_switch) {
            _switch.status = _switch.status === "on" ? "off" : "on";
            this.switchModel.save();
        }        
        
        return _switch;
    }
}