export class Candidat {
    description:string;
    address:string;
    
  
    zipCode:number;
    diploma:string;
    username:string;
    image:string;
    BirthDate:Date 
       
    comment:string;
    constructor( username:string,image:string,description:string,address:string,zipCode:number,diploma:string,BirthDate:Date ,comment:string){
        this.username=username
        this.description=description
        this.address=address
        this.zipCode=zipCode
        this.diploma=diploma
        this.BirthDate=BirthDate
        this.comment=comment
        this.image=image
    }
}
