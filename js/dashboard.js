document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeSidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    const links = sidebar.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });

});
