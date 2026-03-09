document.addEventListener("DOMContentLoaded",function(){

const form = document.getElementById("userForm");
const tableBody = document.getElementById("usersBody");

let editRow = null;

form.addEventListener("submit",function(e){

e.preventDefault();

const name = document.getElementById("userName").value.trim();
const email = document.getElementById("userEmail").value.trim();
const status = document.getElementById("userStatus").value;

if(!name || !email || !status) return;

if(editRow){

editRow.children[0].textContent = name;
editRow.children[1].textContent = email;
editRow.children[2].textContent = status;

editRow = null;

}else{

const row = createRow(name,email,status);
tableBody.appendChild(row);

}

form.reset();

});


function createRow(name,email,status){

const row = document.createElement("tr");

row.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${status}</td>
<td>
<button class="btn btn-warning btn-sm edit-btn">Edit</button>
<button class="btn btn-danger btn-sm delete-btn">Delete</button>
</td>
`;

row.querySelector(".delete-btn").addEventListener("click",function(){
row.remove();
});

row.querySelector(".edit-btn").addEventListener("click",function(){

document.getElementById("userName").value = row.children[0].textContent;
document.getElementById("userEmail").value = row.children[1].textContent;
document.getElementById("userStatus").value = row.children[2].textContent;

editRow = row;

});

return row;

}

});
