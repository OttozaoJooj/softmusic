export default class Music{
    private name!: string;
    private duration!: number;
    private rating!: number;

   
    public getName() : string{
        return this.name;
    }

    public setName(name: string){
        this.name = name
    }
        
    public getDuration() : number{
        return this.duration;
    }

    public setDuration(duration: number){
        this.duration = duration
    }
       
    public getRating() : number{
        return this.rating;
    }

    public setRating(rating: number){
        this.rating = rating
    }
    
}


