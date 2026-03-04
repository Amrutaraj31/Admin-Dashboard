
// document.getElementById("loginForm").addEventListener("submit",function(a){   
//     a.preventDefault();
//     let email=document.getElementById("email").trim();
//     let password=document.getElementById("password").trim();
//      let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");

//     emailError.textContent = "";
//     passwordError.textContent = "";

//     let valid = true;
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!email.match(emailPattern)) {
//         emailError.textContent = "Enter valid email address";
//         valid = false;
//     }
//     if (password.length < 6) {
//         passwordError.textContent = "Password must be at least 6 characters";
//         valid = false;
//     }

//    if (valid) {
//         localStorage.setItem("isLoggedIn", "true");
//         window.location.href = "dashboard.html";
//     }
// });



// document.getElementById("loginForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Working!");
//     window.location.href = "dashboard.html";
// });



// document.getElementById("loginForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//         alert("Enter valid email");
//         return;
//     }

//     if (password.length < 6) {
//         alert("Password must be at least 6 characters");
//         return;
//     }

//     window.location.href = "dashboard.html";
// });





document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    console.log("Email:", email);
    console.log("Password Length:", password.length);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log("Email Valid:", emailPattern.test(email));

    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Redirecting...");
    window.location.href = "dashboard.html";
});