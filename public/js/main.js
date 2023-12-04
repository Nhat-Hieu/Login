function login() {
    console.log("Login function is called"); // Check if the function is called

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Email:", email); // Check if the email is correctly retrieved
    console.log("Password:", password); // Check if the password is correctly retrieved

    // Perform authentication here, for example:
    var success = email === "user@example.com" && password === "password";

    // Display a message based on authentication success
    alert(success ? "Đăng nhập thành công!" : "Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.");
}
