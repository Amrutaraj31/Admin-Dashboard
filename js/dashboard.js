document.addEventListener("DOMContentLoaded", function(){

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const backBtn = document.getElementById("backBtn");

if(menuToggle){
menuToggle.addEventListener("click",function(){
sidebar.classList.add("active");
});
}

if(backBtn){
backBtn.addEventListener("click",function(){
sidebar.classList.remove("active");
});
}

});
