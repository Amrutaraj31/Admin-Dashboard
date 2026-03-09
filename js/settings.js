
document.getElementById("settingsForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.querySelector('input[type="text"]').value;
let email = document.querySelector('input[type="email"]').value;
let password = document.querySelector('input[type="password"]').value;

if(name === "" || email === "" || password === ""){
alert("Please fill all fields");
return;
}

localStorage.setItem("adminName", name);
localStorage.setItem("adminEmail", email);
localStorage.setItem("adminPassword", password);

alert("Settings Saved Successfully");

});
 
