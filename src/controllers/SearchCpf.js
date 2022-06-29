function searchCpf() {
  let inputSearch = document.getElementById("searchbar").value;

  let forms = document.getElementsByClassName("search");

  let cpfs = document.getElementsByClassName("cpf");

  for (i = 0; i < forms.length; i++) {
    if (!cpfs[i].value.includes(inputSearch)) {
      forms[i].style.display = "none";
    } else {
      forms[i].style.display = "list-item";
    }
  }
}
