// function showUser(id) {
//     fetch("http://localhost:3000/api/v1/users/" + id)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }

// showUser('62b9f80a8ff56c5269fa756d');

// create a function that will show all users

// ------------------------------------------------------------------------------
// function showUsers() {
//     fetch("http://localhost:3000/api/v1/users")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
  
  // put each user data inside a <li> element
  // and put all <li> elements inside a <ul> element
  // and put the <ul> element inside the <body> element
  
  // function showUsers() {
  //     fetch("http://localhost:3000/api/v1/users")
  //         .then((response) => response.json())
  //         .then((data) => {
  //         let ul = document.createElement("ul");
  //         data.forEach((user) => {
  //             let li = document.createElement("li");
  //             li.innerHTML = user.name;
  //             ul.appendChild(li);
  //         });
  //         document.body.appendChild(ul);
  //         });
  //     }
  
  //     showUsers();
  
  
  // a function that will put each user data inside a <li> element
  // and put all <li> elements inside a <ul> element
  // and put the <ul> element inside the <body> element
  function showUsers() {
      fetch("http://localhost:3000/api/v1/users")
          .then((response) => response.json())
          .then((data) => {
          let ul = document.createElement("ul");
          data.forEach((user: { name: string; email: string; password: string; cpf: string; updated_at: string; }) => {
              let li = document.createElement("li");
              li.innerHTML = user.name;
              ul.appendChild(li);
              // do the same for the other properties
              li.innerHTML += " " + user.email;
              li.innerHTML += " " + user.password;
              li.innerHTML += " " + user.cpf;
              li.innerHTML += " " + user.updated_at;
  
          });
          document.body.appendChild(ul);
          });
      }
  
      showUsers();

// 