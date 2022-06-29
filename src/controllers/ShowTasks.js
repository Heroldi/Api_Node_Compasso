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
        selectUser.classList.add("user");
        selectUser.disabled = true;
        li.appendChild(selectUser);       
        var select = selectUser;
        GetDBSelect(task, select);


        // add a button that alert "hello world"
        let button = document.createElement("button");
        button.innerHTML = "Edit";
        button.classList.add("btn", "btn-primary");
        button.addEventListener("click", function () {
          // make all inputs editable
          selectUser.disabled = false;
          inputDescription.readOnly = false;
          inputDate.readOnly = false;
          button.innerHTML = "Save";

          button.addEventListener("click", function () {
            // alert(task.id);
            let idteste = task.id;
            // alert(idteste);
            this.id = task.id;
            function updateTask() {
              selectUser.disabled = true;
              inputDescription.readOnly = true;
              inputDate.readOnly = true;
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

async function GetDBSelect(task, select) {
  var res = await fetch('http://localhost:3000/api/v1/users');
  const data = await res.json();

  // let option = document.createElement("option");
//   Object.keys(task.user).map((user, index) => {   
//     option.textContent = task.user.name;
//     option.value = task.user._id;     
//     select.appendChild(option);
//  });
console.log(task)
 data.forEach((element) => {
    console.log(element)   
      let option = document.createElement("option");
      if(element._id === task.user._id){
        option.setAttribute("selected", "selected");
        option.textContent = element.name;
        option.value = element._id;     
      select.appendChild(option);
      }
      option.textContent = element.name;
      option.value = element._id;     
      select.appendChild(option);
      
        
      

  }); 
     
};