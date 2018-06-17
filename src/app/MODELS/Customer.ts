
export class Customer {
    public id : number;
    public name : string;
    public comments : Array<Comment> = new Array<Comment>()
    
    constructor() {}
}