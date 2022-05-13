export class User {
    _id?:number;
    username:string;
    email:string;
    password:string;
    role:string;
    pdp:string
    
    constructor(username:string,email:string,password:string,role:string,pdp:string){
        this.username=username
        this.email=email
        this.password=password
        this.role=role
        this.pdp=pdp
    }
}
