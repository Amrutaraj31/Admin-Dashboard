
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
function forgotPassword(){

    let email = prompt("Enter your registered email:");

    if(!email){
        alert("Please enter your email");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Invalid email format");
        return;
    }

    alert("Password reset link sent to " + email);
}
