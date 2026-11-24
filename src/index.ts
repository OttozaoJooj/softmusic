class Music{
    private name : string;
    constructor(name : string){
        this.name = name;        
    
    }

    get Name() : string{
        return this.name;
    }

    set Name(name : string){
        this.name = name;
    }
}


const music: Music = new Music("Time");


console.log(music.Name);
