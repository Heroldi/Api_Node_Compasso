// create a variable btn_register_user that refers to button id = "registerUserBtn"
const btn_register_user = document.querySelector("#registerUserBtn");
// create a variable btn_edit_user that refers to button id = "editUserBtn"
const btn_register_task = document.querySelector("#registerTaskBtn");
const btn_list_User = document.querySelector("#listUserBtn");
const btn_list_Task = document.querySelector("#listTaskBtn");

// if btn_register_user is clicked, then alert hello world
btn_register_user.addEventListener("click", function () {
  // redirect to FormCadastroUsers.html
  window.location.href = "FormCadastroUsers.html";
});

// if btn_register_task is clicked, then alert hello world
btn_register_task.addEventListener("click", function () {
  // redirect to FormCadastroTasks.html
  window.location.href = "FormCadastroTasks.html";
});

// if btn_list_User is clicked, then alert hello world
btn_list_User.addEventListener("click", function () {
  // redirect to ListUsers.html
  window.location.href = "ShowUsers.html";
});

// if btn_list_Task is clicked, then alert hello world
btn_list_Task.addEventListener("click", function () {
  // redirect to ListTasks.html
  window.location.href = "ShowTasks.html";
});
