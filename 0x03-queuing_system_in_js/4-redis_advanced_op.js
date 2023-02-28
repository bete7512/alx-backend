import redis from 'redis';
// import { promisify } from 'util';
// import { createClient } from "redis";

const client = redis.createClient();
client.on("connect", () => {
    console.log("Redis client connected to the server");
  });
  client.on("error", () => {
    console.log("Redis client not connected to the server: ERROR_MESSAGE");
  });
let keyvalue = 'HolbertonSchools';
let value = ['Portland=50', 'Seattle=80', 'New York=20', 'Bogota=20', 'Cali=40', 'Paris=2'];

value.forEach((element,key) => {
    let keys = element.split('=')[0];
    let values = element.split('=')[1];
    client.hset(keyvalue,keys,values,(err,res)=>{
        redis.print(`Replay: ${res}`)
    })});
client.hgetall(keyvalue,(err,res)=>{
    console.log(res)
})