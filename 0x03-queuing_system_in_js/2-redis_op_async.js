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

async function displaySchoolValue(schoolName){
   await client.get(schoolName,(err,res)=>{
        console.log(res)
    })
}

(async () => {
    await displaySchoolValue('Holberton');
    await setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
})();


// Path: 0x03-queuing_system_in_js/3-redis_op_promisify.js
// import redis from 'redis';
