"use strict";


function showTasks() {
   fetch("http://localhost:3000/api/v1/tasks")
    .then((response) => response.json())
    .then((data) => {
      let ul = document.createElement("ul");
      data.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = "";
        ul.appendChild(li);

        task.id = task._id;

        let label = document.createElement("label");
        label.innerHTML = "Description";
        li.appendChild(label);

        let inputDescription = document.createElement("input");
        inputDescription.classList.add("form-control");
        inputDescription.type = "text";
        inputDescription.readOnly = true;
        inputDescription.value = task.description;
        li.appendChild(inputDescription);


        let labelDate = document.createElement("label");
        labelDate.innerHTML = "Date";
        li.appendChild(labelDate);

        let inputDate = document.createElement("input");
        inputDate.classList.add("form-control");
        inputDate.type = "text";
        inputDate.readOnly = true;
        inputDate.value = task.date;
        li.appendChild(inputDate);


        let labelUser = document.createElement("label");
        labelUser.innerHTML = "User";
        li.appendChild(labelUser);

     
        let selectUser = document.createElement("select");
        selectUser.classList.add("form-control");
        selectUser.setAttribute("id", "user");
        li.appendChild(selectUser);


        // add a button that alert "hello world"
        let button = document.createElement("button");
        button.innerHTML = "Edit";
        button.classList.add("btn", "btn-primary");
        button.addEventListener("click", function () {
          // make all inputs editable
          inputDescription.readOnly = false;
          inputDate.readOnly = false;
          selectUser.readOnly = false;
          button.innerHTML = "Save";

          button.addEventListener("click", function () {
            alert(task.id);
            let idteste = task.id;
            alert(idteste);
            this.id = task.id;
            function updateTask() {
              let task = {
                description: inputDescription.value,
                date: inputDate.value,
                user: selectUser.value,
              };

              fetch("http://localhost:3000/api/v1/tasks/" + idteste, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
              })
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.log(data);
                });
            }
            updateTask();
            button.innerHTML = "Edit";
          });
        });
        li.appendChild(button);
      });
      document.body.appendChild(ul);
    });
}
showTasks();