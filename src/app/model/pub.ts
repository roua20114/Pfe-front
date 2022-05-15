import { Field } from "./field";

export class Pub {
    _id?:string;
    title:string;
    description:string;
    qualifications:string;
    jobType:string;
    region: string;
    technologiesReq:string;
    diplomaReq:string;
    placesAvai:string;
    logo?:string;
    created_at:string;
    expirationDate:Date;
    username?:string
    // comment:string
    
    image?:string

    fields:string;
  
  
    constructor(image:string,title:string,username:string,description:string,qualifications:string,jobType:string,region:string,technologiesReq:string,
        diplomaReq:string,placesAvai:string,logo:string,fields:string,created_at:string, expirationDate:Date, ){
            this.title=title;
            this.image=image
           
            this.description=description;
            this.qualifications=qualifications;
            this.jobType=jobType;
            this.region=region;
            this.technologiesReq=technologiesReq;
            this.diplomaReq=diplomaReq;
            this.placesAvai=placesAvai;
            this.username=username
            this.logo=logo
            
            this.created_at=created_at
            this.expirationDate=expirationDate
            this.fields=fields
            // this.comment=comment
        }
       

}
