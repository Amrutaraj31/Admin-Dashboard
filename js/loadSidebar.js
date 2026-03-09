document.addEventListener("DOMContentLoaded", function () {

fetch("sidebar.html")
.then(response => response.text())
.then(data => {

document.getElementById("sidebar-container").innerHTML = data;

const sidebar = document.getElementById("sidebar");

if(sidebar){
new bootstrap.Offcanvas(sidebar);
}

})
.catch(error => {
console.error("Sidebar failed to load:", error);
});

});
