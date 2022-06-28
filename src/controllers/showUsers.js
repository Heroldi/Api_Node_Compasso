"use strict";
function showUsers() {
  fetch("http://localhost:3000/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      let ul = document.createElement("ul");
      data.forEach((user) => {
        let li = document.createElement("li");
        li.innerHTML = "";
        ul.appendChild(li);

        user.id = user._id;

        // create a input class "form-control" type="text" readonly with the user.name inside the input

        // create a label name
        let label = document.createElement("label");
        label.innerHTML = "Name";
        li.appendChild(label);

        let inputName = document.createElement("input");
        inputName.classList.add("form-control");
        inputName.type = "text";
        inputName.readOnly = true;
        inputName.value = user.name;
        li.appendChild(inputName);

        // create a label cpf
        let labelCpf = document.createElement("label");
        labelCpf.innerHTML = "CPF";
        li.appendChild(labelCpf);

        // create a input class "form-control" type="text" readonly with the user.cpf inside the input
        let inputCpf = document.createElement("input");
        inputCpf.classList.add("form-control");
        inputCpf.type = "text";
        inputCpf.readOnly = true;
        inputCpf.value = user.cpf;
        li.appendChild(inputCpf);

        // create a label birthdate
        let labelBirthdate = document.createElement("label");
        labelBirthdate.innerHTML = "Birthdate";
        li.appendChild(labelBirthdate);

        // create a input class "form-control" type="text" readonly with the user.birthdate inside the input
        let inputBirthdate = document.createElement("input");
        inputBirthdate.classList.add("form-control");
        inputBirthdate.type = "text";
        inputBirthdate.readOnly = true;
        inputBirthdate.value = user.birthDate;
        li.appendChild(inputBirthdate);

        // create a label email
        let labelEmail = document.createElement("label");
        labelEmail.innerHTML = "Email:";
        li.appendChild(labelEmail);

        let inputEmail = document.createElement("input");
        inputEmail.classList.add("form-control");
        inputEmail.type = "text";
        inputEmail.readOnly = true;
        inputEmail.value = user.email;
        li.appendChild(inputEmail);

        // create a input class "form-control" type="text" readonly with the user.password inside the input

        // create a label password
        let labelPassword = document.createElement("label");
        labelPassword.innerHTML = "Password";
        li.appendChild(labelPassword);

        let inputPassword = document.createElement("input");
        inputPassword.classList.add("form-control");
        inputPassword.type = "text";
        inputPassword.readOnly = true;
        inputPassword.value = user.password;
        li.appendChild(inputPassword);

        // create a label adress
        let labelAdress = document.createElement("label");
        labelAdress.innerHTML = "Adress";
        li.appendChild(labelAdress);

        // create a input class "form-control" type="text" readonly with the user.adress inside the input
        let inputAdress = document.createElement("input");
        inputAdress.classList.add("form-control");
        inputAdress.type = "text";
        inputAdress.readOnly = true;
        inputAdress.value = user.address;
        li.appendChild(inputAdress);

        // create a label number
        let labelNumber = document.createElement("label");
        labelNumber.innerHTML = "Number";
        li.appendChild(labelNumber);

        // create a input class "form-control" type="text" readonly with the user.number inside the input
        let inputNumber = document.createElement("input");
        inputNumber.classList.add("form-control");
        inputNumber.type = "text";
        inputNumber.readOnly = true;
        inputNumber.value = user.number;
        li.appendChild(inputNumber);

        // create a label complement
        let labelComplement = document.createElement("label");
        labelComplement.innerHTML = "Complement";
        li.appendChild(labelComplement);

        // create a input class "form-control" type="text" readonly with the user.complement inside the input
        let inputComplement = document.createElement("input");
        inputComplement.classList.add("form-control");
        inputComplement.type = "text";
        inputComplement.readOnly = true;
        inputComplement.value = user.complement;
        li.appendChild(inputComplement);

        // create a label city
        let labelCity = document.createElement("label");
        labelCity.innerHTML = "City";
        li.appendChild(labelCity);

        // create a input class "form-control" type="text" readonly with the user.city inside the input
        let inputCity = document.createElement("input");
        inputCity.classList.add("form-control");
        inputCity.type = "text";
        inputCity.readOnly = true;
        inputCity.value = user.city;
        li.appendChild(inputCity);

        // create a label state
        let labelState = document.createElement("label");
        labelState.innerHTML = "State";
        li.appendChild(labelState);

        // create a input class "form-control" type="text" readonly with the user.state inside the input
        let inputState = document.createElement("input");
        inputState.classList.add("form-control");
        inputState.type = "text";
        inputState.readOnly = true;
        inputState.value = user.state;
        li.appendChild(inputState);

        // create a label country
        let labelCountry = document.createElement("label");
        labelCountry.innerHTML = "Country";
        li.appendChild(labelCountry);

        // create a input class "form-control" type="text" readonly with the user.country inside the input
        let inputCountry = document.createElement("input");
        inputCountry.classList.add("form-control");
        inputCountry.type = "text";
        inputCountry.readOnly = true;
        inputCountry.value = user.country;
        li.appendChild(inputCountry);

        // create a label zipcode
        let labelZipcode = document.createElement("label");
        labelZipcode.innerHTML = "Zipcode";
        li.appendChild(labelZipcode);

        // create a input class "form-control" type="text" readonly with the user.zipcode inside the input
        let inputZipcode = document.createElement("input");
        inputZipcode.classList.add("form-control");
        inputZipcode.type = "text";
        inputZipcode.readOnly = true;
        inputZipcode.value = user.zipcode;
        li.appendChild(inputZipcode);

        // add a button that alert "hello world"
        let button = document.createElement("button");
        button.innerHTML = "Edit User";
        button.classList.add("btn", "btn-primary");
        button.addEventListener("click", function () {
          // make all inputs editable
          inputName.readOnly = false;
          inputCpf.readOnly = false;
          inputBirthdate.readOnly = false;
          inputEmail.readOnly = false;
          inputPassword.readOnly = false;
          inputAdress.readOnly = false;
          inputNumber.readOnly = false;
          inputComplement.readOnly = false;
          inputCity.readOnly = false;
          inputState.readOnly = false;
          inputCountry.readOnly = false;
          inputZipcode.readOnly = false;
          button.innerHTML = "Save";

          // if clicked again, make all inputs readonly
          button.addEventListener("click", function () {
            // alert(user.id);
            let idteste = user.id;
            // alert(idteste);
            this.id = user.id;
            function updateUser() {
              let user = {
                name: inputName.value,
                cpf: inputCpf.value,
                birthdate: inputBirthdate.value,
                email: inputEmail.value,
                password: inputPassword.value,
                address: inputAdress.value,
                number: inputNumber.value,
                complement: inputComplement.value,
                city: inputCity.value,
                state: inputState.value,
                country: inputCountry.value,
                zipcode: inputZipcode.value,
              };

              fetch("http://localhost:3000/api/v1/users/" + idteste, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.log(data);
                });
            }
            updateUser();
            button.innerHTML = "Edit";
            inputName.readOnly = true;
            inputCpf.readOnly = true;
            inputBirthdate.readOnly = true;
            inputEmail.readOnly = true;
            inputPassword.readOnly = true;
            inputAdress.readOnly = true;
            inputNumber.readOnly = true;
            inputComplement.readOnly = true;
            inputCity.readOnly = true;
            inputState.readOnly = true;
            inputCountry.readOnly = true;
            inputZipcode.readOnly = true;

            alert("User updated!");
          });
        });
        // add a button id="delete" class="btn btn-primary" type="button" value="Edit"
        let buttonEdit = document.createElement("button");
        buttonEdit.id = "edit";
        buttonEdit.innerHTML = "Delete User";
        buttonEdit.classList.add("btn", "btn-danger");
        buttonEdit.type = "button";
        buttonEdit.value = "Edit";
        li.appendChild(buttonEdit);
        // add a event listener to the button that alert hello world
        buttonEdit.addEventListener("click", function () {
          // execute a fetch to delete the current user
          fetch("http://localhost:3000/api/v1/users/" + user.id, {
            method: "DELETE",
          });
          alert("User deleted!");
          // remove the current user from the list
          li.remove();
        });
        // make btn-danger 50px margin-right
        buttonEdit.style.marginRight = "50px";
        // make btn-danger 20px margin top
        buttonEdit.style.marginTop = "20px";
        // make btn-primary 20px margin top
        button.style.marginTop = "20px";

        li.appendChild(button);
        // make body margin top 100px
        document.body.style.marginBottom = "80px";
      });
      document.body.appendChild(ul);
    });
}
showUsers();

// if button Class ="btn btn-dark" is clicked, alert the search value
// let button = document.querySelector(".btn-dark");
// let searchUser = document.querySelector("#search-id");
// button.addEventListener("click", function () {
//   alert(searchUser.value);
// });
