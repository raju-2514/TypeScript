class user{
   userName:string;
   age:number;

   constructor(userName:string,age:number){
    this.userName=userName;
    this.age=age;
   }

   display():void{
    console.log("name :",this.userName,"\n age:",this.age);
   }


}

let user1=new user("Raju",25)
user1.display();