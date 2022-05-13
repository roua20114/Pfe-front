export class Company {
    companyName:string;
    companyAddress:string;
    website:string
    description:string
    creationDate:string
    logo:string
    region:string
    sector:string
    tel:number
    type:string
    password:string
    email:string
    username:string
    role:string
    verified:boolean
    pdp:string
    visited:string
    comments:string
    offer:string
    constructor(  companyName:string,
        companyAddress:string,
        website:string,
        description:string,
        creationDate:string,
        logo:string,
        region:string,
        sector:string,
        tel:number,
        type:string,
        password:string,
        email:string,
        username:string,
        role:string,
        verified:boolean,
        pdp:string,
        visited:string,
        comments:string,
        offer:string,){
          this.companyName =companyName
            this.companyAddress=companyAddress
            this.website=website
            this.description=description
            this.creationDate=creationDate
            this.logo=logo
            this.region=region
            this.sector=sector
            this.tel=tel
            this.type=type
            this.password=password
            this.email=email
            this.username=username
            this.role=role
            this.verified=verified
            this.pdp=pdp
            this.visited=visited
            this.comments=comments
            this.offer=offer

    }


}
