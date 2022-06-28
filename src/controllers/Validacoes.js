function Validacoes() {
  var date = document.querySelector("#date");
  // if date is greather than the current date alert "Data valida"
  if (date.value > new Date().toISOString().split("T")[0]) {
    return true;
  }
}
