const wes = document.querySelector("#btn_task");
wes.addEventListener("click", function (event) {
  event.preventDefault();
});

function GetDadosTask() {
  if (validaData() == true) {
    var description = document.querySelector("#description");
    var date = document.querySelector("#date");
    var user = document.querySelector("#user");

    console.log(date.value + description.value + user.value);

    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/v1/tasks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: description.value,
          date: date.value,
          user: user.value,
        }),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
    alert("Task successfully created");
    clearInputs();
  } else {
    alert("Please insert a valid date");
  }
}
// simple validation for date
function validaData() {
  var date = document.querySelector("#date");
  // if date is greather than the current date alert "Data valida"
  if (date.value > new Date().toISOString().split("T")[0]) {
    return true;
  }
}

// function that clear the inputs
function clearInputs() {
  var description = document.querySelector("#description");
  var date = document.querySelector("#date");
  description.value = "";
  date.value = "";
}
