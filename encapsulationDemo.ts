 class person {
    name: string;
    PhoneNumber: number;
    age: number;
    ID: number;

    constructor(name: string, phoneNumber: number, age: number, ID: number) {
        this.name = name;
        this.PhoneNumber = phoneNumber;
        this.age = age;
        this.ID = ID;
    }

     display(): void{
        console.log("his")
     };
} 
class student1 extends person {
   private fatherName: string;

    constructor(name: string, phoneNumber: number, age: number, ID: number, fatherName: string) {
        super(name, phoneNumber, age, ID);
        
    }
    display(): void {
        console.log("Name:", this.name, "\n PhoneNumber:", "\n Age :", this.age, "\n ID:", this.ID, "\n Father Name:", this.fatherName)
    }
 
setfatherName(name:string){
    this.fatherName=name;
}
getfatherName():string{
    return this.fatherName;
}
}

let user1 = new student1("raju", 1921216051, 12, 101, "rakib");
user1.setfatherName("raj")
user1.display();