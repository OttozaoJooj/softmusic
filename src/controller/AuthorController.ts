import { ControllerInterface } from "../interfaces/ControllerInterface";

export default class AuthorController implements ControllerInterface{

    constructor(){
        console.log('constructor');
    }

    public start() : void{
        console.log('Author Controller')
        
    }

    private questions() : void{

    }

    
}