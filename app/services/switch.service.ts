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
            this.sendCode(_switch, _switch.status);
        }        
        
        return _switch;
    }
    
    sendCode(_switch: Switch, status: string) {
        var http = require('http');
        http.get({
          hostname: '192.168.0.31', // add ip in switch setting
          path: '/send?bit=' + _switch[status].bit + '&code=' + _switch[status].code,
          agent: false  // create a new agent just for this one request
        }, (response) => {
                // Do stuff with response
              //  var str = '';
              //  response.on('data', function (chunk) {
              //    str += chunk;
              //  });
              //
              //  response.on('end', function () {
              //    console.log(str);
              //  });  
        }).end();        
    }
}