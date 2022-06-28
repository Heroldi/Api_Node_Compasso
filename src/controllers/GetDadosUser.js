const wes = document.querySelector("#btn_user");
wes.addEventListener("click", function(event) {
    event.preventDefault();
});
   
    function GetDadosUser() {
        var name =  document.querySelector('#name');
        var cpf =  document.querySelector('#cpf');
        var birthdate =  document.querySelector('#birthdate');
        var email =  document.querySelector('#email');
        var password =  document.querySelector('#password');
        var adress = document.querySelector('#adress');
        var number =  document.querySelector('#number');
        var complement =  document.querySelector('#complement');
        var city =  document.querySelector('#city');
        var state =  document.querySelector('#state');
        var country =  document.querySelector('#country');
        var zipcode =  document.querySelector('#zipcode');
    
        (async () => {
            const rawResponse = await fetch('http://localhost:3000/api/v1/users', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "name" :  name.value,
                "cpf" : cpf.value,
                "birthDate" : birthdate.value,
                "email" : email.value,
                "password" : password.value,
                "address" : adress.value,
                "number" : number.value,
                "complement" : complement.value,
                "city" : city.value,
                "state" : state.value,
                "country" : country.value,
                "zipcode" : zipcode.value
            })
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })();         
        }
          