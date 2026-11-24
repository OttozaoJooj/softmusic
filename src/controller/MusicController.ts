import { ControllerInterface } from "../interfaces/ControllerInterface";

export default class MusicController implements ControllerInterface{

    constructor(){
        console.log('const');
    }

    public start() : void{
        console.log('Music Controller')
        
    }

    private questions() : void{

    }

    
}