

function submit() {

   
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var password = document.getElementById('password');

    localStorage.setItem("Name:", name.value);
    localStorage.setItem("Email:", email.value);
    localStorage.setItem("Number:", number.value);
    localStorage.setItem("Password:", password.value);

 

    if (name.value === "" || email.value === "" || number.value === "" || password.value === ""){
        alert("Fill The Boxes With Valid Information")
    }
    else {
        window.location = "login.html"
    }
   
    

}

function login() {
    var email = document.getElementById('userEmail');
    var password = document.getElementById('userPassword');
    var storageEmail = localStorage.getItem('Email:');
    var storagePassword = localStorage.getItem('Password:');
    if ((email.value === storageEmail) && (password.value == storagePassword)) {
        window.location = "user.html"
    } else {
        alert("Please Enter Valid Details.");
    }
}