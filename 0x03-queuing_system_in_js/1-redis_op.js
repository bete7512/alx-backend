import redis from 'redis';
// import { createClient } from "redis";

const client = redis.createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});
client.on("error", () => {
  console.log("Redis client not connected to the server: ERROR_MESSAGE");
});


function setNewSchool(schoolName,value){
    client.set(schoolName,value,(err,res)=>{
        redis.print(`Replay: ${res}`)
    })
}

function displaySchoolValue(schoolName){
    client.get(schoolName,(err,res)=>{
        console.log(res)
    })
}


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');