export class User{
    private name:string;
    private age:number;
    constructor(nm: string, ag:number){
        this.name = nm;
        this.age = ag;     
    }
   
    
}

export class CreateUser extends User{
    private etc: string;
    constructor(nm, ag, et){
        super(nm,ag);
        this.etc = et;
    }
    
}