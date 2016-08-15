var fs = require('fs');
import { Switch } from './switch';

export class SwitchModel{
    filePath: string = "./data/switch.json";
    
    switches: Switch[];
    
    constructor() {
        this.load();
    }
    
    get(id: number): Switch {
        return this.switches[id] || null;
    }
    
    load() {
        console.log("Load switches.");
        if (fs.existsSync(this.filePath)) {
            this.switches = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        }
        else {
            throw 'Path to memspace folder does not exist: ' + this.filePath;
        }        
    }
    
    save() {
        console.log("Save switches.");
        fs.writeFileSync(this.filePath, JSON.stringify(this.switches), 'utf8');
    }
}