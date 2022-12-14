const richardsontimeZone = document.querySelector(".richardsontimeZone");
const indiaTimeZone = document.querySelector(".indiaTimeZone");
const date = new Date();

const richardsonDate = date.toLocaleString('en-US', {timeZone:'CST'});
const indiaDate = date.toLocaleString('en-US', {timeZone:'IST'});

indiaTimeZone.innerHTML = "India Time : " + indiaDate;
richardsontimeZone.innerHTML = "Richardson Time : " + richardsonDate;
console.log("End");
