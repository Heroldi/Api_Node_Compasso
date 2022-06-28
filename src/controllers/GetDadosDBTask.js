(async () => {
    var res = await fetch('http://localhost:3000/api/v1/users');

    var data = await res.json();
    
    console.log(data);

    var select = document.getElementById("user");
    data.forEach(element => {
        var option = document.createElement("option");
        select.appendChild(option);
        option.textContent = element.name;
        option.value = element._id;     
    });          
})
();
// GetDBSelect()

