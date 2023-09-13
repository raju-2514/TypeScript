// let objectDataTYpe:{UserNmae:String,UserID:number}
//  objectDataTYpe={UserNmae:'raju',UserID:102}
// console.log(objectDataTYpe)

// let users:object;
// users={name:"raju",id:102}
// console.log(users)

// let users:object[];
// users=[{name:"raju",id:102},{name:"Biswas",id:103}]
// console.log(users)

let users:object[];
users=[];

let user1:{name:string,id:number};
user1={name:"raju",id:102};
users.push(user1);

let user2:{name:string,id:number};
user2={name:"biswas",id:103};
users.push(user2)

for (const key in users) {
    console.log(users[key]["name"])
}