/* Setting the current day in UTC */
const date = new Date();
const options = {
  weekday: "long",
  timeZone: "UTC",
};
const day = new Intl.DateTimeFormat("en-US", options).format(date);
document.querySelector(".day").innerHTML = `${day}`;

/* Setting the Time in UTC format */
function UTCtime() {
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} UTC`;

  document.querySelector(".time").innerText = timeString;
}

setInterval(UTCtime, 1000);

updateUTCTime();
