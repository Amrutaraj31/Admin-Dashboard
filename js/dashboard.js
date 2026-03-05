document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const backBtn = document.getElementById("backBtn");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    backBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

});
