import kue from "kue";

const queue = kue.createQueue();

const job = {
  phoneNumber: "4153518780",
  message: "This is the code to verify your account",
};
const jobs = queue.create("push_notification_code", job).save((err) => {
  if (!err) console.log(`Notification job created: ${jobs.id}`);
});
jobs.on("complete", () => {
  console.log("Notification job completed");
});
jobs.on("failed", (errorMessage) => {
  console.log(`Notification job failed: ${errorMessage}`);
});
