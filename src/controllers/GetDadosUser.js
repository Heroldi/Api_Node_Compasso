const wes = document.querySelector("#btn_user");
wes.addEventListener("click", function (event) {
  event.preventDefault();
});

function validarCampos() {
  if (
    cpf.value == "" ||
    birthdate.value == "" ||
    email.value == "" ||
    password.value == "" ||
    adress.value == "" ||
    number.value == "" ||
    complement.value == "" ||
    city.value == "" ||
    state.value == "" ||
    country.value == "" ||
    zipcode.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}
var fullName = document.querySelector("#name");
function checkEmptyName() {
  if (fullName.value == "") {
    fullName.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    fullName.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyCpf() {
  if (cpf.value == "") {
    cpf.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    cpf.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyBirthdate() {
  if (birthdate.value == "") {
    birthdate.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    birthdate.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyEmail() {
  if (email.value == "") {
    email.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    email.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyPassword() {
  if (password.value == "") {
    password.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    password.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyAdress() {
  if (adress.value == "") {
    adress.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    adress.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyNumber() {
  if (number.value == "") {
    number.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    number.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyComplement() {
  if (complement.value == "") {
    complement.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    complement.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyCity() {
  if (city.value == "") {
    city.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    city.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyState() {
  if (state.value == "") {
    state.style.backgroundColor = "#ffcccc";
    return false;
  } else if (state.value.length < 2) {
    state.style.backgroundColor = "white";
    return false;
  } else {
    state.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyCountry() {
  if (country.value == "") {
    country.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    country.style.backgroundColor = "white";
    return true;
  }
}

function checkEmptyZipcode() {
  if (zipcode.value == "") {
    zipcode.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    zipcode.style.backgroundColor = "white";
    return true;
  }
}

// chechar se campos estao vazios depois de digitar 1 caracter
function onKeyCheckCpf() {
  if (state.value.length > 1) {
    state.style.backgroundColor = "white";
  }
}
// if birthdate is different from the current date, the background color will be red
function onKeyCheckBirthdate() {
  if (birthdate.value != "") {
    birthdate.style.backgroundColor = "white";
  }
}

function onKeyCheckEmail() {
  if (email.value.length > 1) {
    email.style.backgroundColor = "white";
  }
}

function onKeyCheckPassword() {
  if (password.value.length > 1) {
    password.style.backgroundColor = "white";
  }
}

function onKeyCheckAdress() {
  if (adress.value.length > 1) {
    adress.style.backgroundColor = "white";
  }
}

function onKeyCheckNumber() {
  if (number.value.length > 1) {
    number.style.backgroundColor = "white";
  }
}

function onKeyCheckComplement() {
  if (complement.value.length > 1) {
    complement.style.backgroundColor = "white";
  }
}

function onKeyCheckCity() {
  if (city.value.length > 1) {
    city.style.backgroundColor = "white";
  }
}

function onKeyCheckState() {
  if (state.value.length > 1) {
    state.style.backgroundColor = "white";
  }
}

function onKeyCheckCountry() {
  if (country.value.length > 1) {
    country.style.backgroundColor = "white";
  }
}

function onKeyCheckZipcode() {
  if (zipcode.value.length > 1) {
    zipcode.style.backgroundColor = "white";
  }
}

function teste() {
  var name = document.querySelector("#name");
  var cpf = document.querySelector("#cpf");
  var birthdate = document.querySelector("#birthdate");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");
  var adress = document.querySelector("#adress");
  var number = document.querySelector("#number");
  var complement = document.querySelector("#complement");
  var city = document.querySelector("#city");
  var state = document.querySelector("#state");
  var country = document.querySelector("#country");
  var zipcode = document.querySelector("#zipcode");

  if (validarCampos() == false) {
    validarCampos();
    checkEmptyName();
    checkEmptyCpf();
    checkEmptyBirthdate();
    checkEmptyEmail();
    checkEmptyPassword();
    checkEmptyAdress();
    checkEmptyNumber();
    checkEmptyComplement();
    checkEmptyCity();
    checkEmptyState();
    checkEmptyCountry();
    checkEmptyZipcode();
    alert("Please fill all fields");
  } else {
    checkEmptyName();
    checkEmptyCpf();
    checkEmptyBirthdate();
    checkEmptyEmail();
    checkEmptyPassword();
    checkEmptyAdress();
    checkEmptyNumber();
    checkEmptyComplement();
    checkEmptyCity();
    checkEmptyState();
    checkEmptyCountry();
    checkEmptyZipcode();

    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          cpf: cpf.value,
          birthDate: birthdate.value,
          email: email.value,
          password: password.value,
          address: adress.value,
          number: number.value,
          complement: complement.value,
          city: city.value,
          state: state.value,
          country: country.value,
          zipcode: zipcode.value,
        }),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();

    alert("User registerd successfully");
    clearFields();
  }
}

// criando validações
function validarEmail() {
  var email = document.querySelector("#email");
  var emailFilter = /^.+@.+\..{2,}$/;
  if (!emailFilter.test(email.value)) {
    console.log("Invalid data entered");
    //make the background color of the email input red
    email.style.backgroundColor = "#ffcccc";
    return false;
  } else {
    email.style.backgroundColor = "white";
    return true;
  }
}

// formatar cpf inserido no campo de texto
function formatarCPF() {
  var cpf = document.querySelector("#cpf");
  var cpfFormatado = cpf.value.replace(/\D/g, "");
  cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, "$1.$2");
  cpfFormatado = cpfFormatado.replace(/(\d{3})(\d)/, "$1.$2");
  cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  cpf.value = cpfFormatado;
  //quantidade maxima de caracteres = 14
  if (cpfFormatado.length > 14) {
    cpf.value = cpfFormatado.substring(0, 14);
  }
}

function formatarZipcode() {
  var zipcode = document.querySelector("#zipcode");
  var zipcodeFormatado = zipcode.value.replace(/\D/g, "");
  zipcodeFormatado = zipcodeFormatado.replace(/(\d{5})(\d)/, "$1-$2");
  zipcode.value = zipcodeFormatado;
  //quantidade maxima de caracteres = 9
  if (zipcodeFormatado.length > 9) {
    zipcode.value = zipcodeFormatado.substring(0, 9);
  }
}

// if there are 11 numbers inside #cpf, then it's valid
function validarCPF() {
  var cpf = document.querySelector("#cpf");
  var cpfFormatado = cpf.value.replace(/\D/g, "");
  if (cpfFormatado.length == 11) {
    console.log("CPF valido");
    cpf.style.backgroundColor = "white";
    return true;
  } else {
    console.log("CPF invalido");
    cpf.style.backgroundColor = "#ffcccc";
    return false;
  }
}

// clear all fields
function clearFields() {
  fullName.value = "";
  cpf.value = "";
  birthdate.value = "";
  email.value = "";
  password.value = "";
  adress.value = "";
  number.value = "";
  complement.value = "";
  city.value = "";
  state.value = "";
  country.value = "";
  zipcode.value = "";
}

// validando data maxima de nascimento
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;
// document.getElementById("date").setAttribute("max", today);
