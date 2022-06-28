const wes = document.querySelector("#btn_task");
wes.addEventListener("click", function(event) {
    event.preventDefault();
});
   
    function GetDadosTask() {
        var description =  document.querySelector('#description');
        var date =  document.querySelector('#date');
        var user =  document.querySelector('#user');

        console.log(date.value + description.value + user.value);
    
        (async () => {
            const rawResponse = await fetch('http://localhost:3000/api/v1/tasks', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "description" :  description.value,
                "date" : date.value,
                "user" : user.value,
            })
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })();         
        }
          