var fname = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var cnfp = document.getElementById('cnfp');
let arr = [];

const signUp = e => {
let formData=JSON.parse(localStorage.getItem('form-data'))||[];
let exist=formData.length &&
    JSON.parse(localStorage.getItem('form-data')).some(data =>
        data.fname.toLowerCase()== fname.toLowerCase()
        );
    if(!exist){
        formData.push({
            fname,email,password,cnfp
        });
        localStorage.setItem('formData',JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using in the link below. ");
        location.href = "/index.html";
    }
    else{
        alert("Oooopppsss.... Duplicate found!!!!\nYou have already signined up")
    }
    e.preventDefault();    
}



function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/dashboard.html";
    }
    e.preventDefault();
}