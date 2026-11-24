import PromptSync from "prompt-sync";
import { ControllerInterface } from "../interfaces/ControllerInterface";
import Music from "../classes/Music";

export default class MusicController implements ControllerInterface{

    private music : Music = new Music();

    public start() : void{
        this.questions();
    }

    private questions() : void{
                
        const p = PromptSync();

        this.music.setName(p("Digite seu nome: "))
        


        
        
    }

    
}