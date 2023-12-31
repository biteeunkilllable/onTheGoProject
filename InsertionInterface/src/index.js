function padZero(value) {
  return value < 10 ? "0" + value : value.toString();
}
function padMilliseconds(value) {
  if (value < 10) {
    return "00" + value;
  } else if (value < 100) {
    return "0" + value;
  } else {
    return value.toString();
  }
}
function parseDate() {
  let jsDate = new Date();

  // Extract date components
  let year = jsDate.getFullYear();
  let month = jsDate.getMonth() + 1; // JavaScript months are zero-based
  let day = jsDate.getDate();
  let hour = jsDate.getHours();
  let minute = jsDate.getMinutes();
  let second = jsDate.getSeconds();
  let millisecond = jsDate.getMilliseconds();

  // Construct ISO 8601 string (optional)
  let isoString =
    year +
    "-" +
    padZero(month) +
    "-" +
    padZero(day) +
    "T" +
    padZero(hour) +
    ":" +
    padZero(minute) +
    ":" +
    padZero(second) +
    "." +
    padMilliseconds(millisecond) +
    "Z";
  return isoString;
}
document.getElementById("submit").addEventListener("click", () => {
  if (
    document.getElementById("textarea").value == "" ||
    document.getElementById("email").value == ""
  )
    throw new Error("empty");
  let prom = `${document.getElementById("textarea").value}`;
  let data = {
    DatePromised: parseDate(),
    Promise: prom,
    Name: document.getElementById("email").value,
  };
  submit.disabled = true;
  fetch("https://boardofhopes.somee.com/api/PromiseHandler/AddPromise", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
    .finally(() => {
      location.href = "https://boardofhopes.onrender.com";
    });
});
