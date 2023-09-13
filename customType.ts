
type user={name:string,id:number};

let users:user[];
users=[];


let user1:user;
user1={name:"raju",id:102};
users.push(user1);

let user2:user;
user2={name:"biswas",id:103};
users.push(user2)

let user5:user;
user5={name:"rana",id:104};
users.push(user5)

for (const key in users) {
    console.log(users[key])
}


type RequestType="GET" | "POST";
let getRequestType:RequestType;

function requestHandler(request:RequestType){
    console.log(request);
}
requestHandler("GET")