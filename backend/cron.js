import cron from "cron";
import http from "http";

const URL = "http://localhost:4000/graphql";

const job = new cron.CronJob("14 * * * * *", function () {
  http
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("Get request sent successfully: ", res.statusCode);
      } else {
        console.log("Get request failed: ", res.statusCode);
      }
    })
    .on("error", (err) => {
      console.error("Error while sending request: ", err);
    });
});

export default job;
