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
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let userNameSlot = document.getElementById("email");
  let promise = document.getElementById("textarea");
  if (promise.value == "" || userNameSlot.value == "") throw new Error("empty");
  //   alert("disabled");
  submit.disabled = true;
  fetch("https://boardofhopes.somee.com/api/PromiseHandler/AddPromise", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{"Name":"${
      userNameSlot.value
    }","DatePromised":"${parseDate()}","Promise":"${promise.value}"}`,
  })
    .then((response) => response.text())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
    .finally(() => {
      location.href = "https://boardofhopes.onrender.com";
    });
});
