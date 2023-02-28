import kue from "kue";

const queue = kue.createQueue();



const sendNotification = (phoneNumber, message, job, done) => {
    job.progress(0, 100);
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    job.progress(50, 100);
    done();
    }
queue.process('push_notification_code_2', 2, (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, job, done);
    }
);
