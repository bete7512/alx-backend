// import redis from "redis";
import queue from "kue";
// const client = redis.createClient();

// client.on("connect", () => {
//   console.log("Redis client connected to the server");
// });

// client.on("error", (error) => {
//   console.log(`Redis client not connected to the server: ${error.message}`);
// });

const jobs = [
  {
    phoneNumber: "4153518780",
    message: "This is the code 1234 to verify your account",
  },
  {
    phoneNumber: "4153518781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4153518743",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4153538781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4153118782",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4153718781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4159518782",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4158718781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4153818782",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4154318781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4151218782",
    message: "This is the code 4321 to verify your account",
  },
];


const que = queue.createQueue();

jobs.forEach((job) => {
    const j = que.create("push_notification_code_2", job).save((err) => {
        if (!err) console.log(`Notification job created: ${j.id}`);
    });
    j.on("complete", () => {
        console.log(`Notification job ${j.id} completed`);
    });
    j.on("failed", (errorMessage) => {
        console.log(`Notification job ${j.id} failed: ${errorMessage}`);
    });
    j.on("progress", (progress) => {
        console.log(`Notification job ${j.id} ${progress}% complete`);
    });
    });


