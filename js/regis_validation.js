var error = document.getElementById('lblError');

function validateForm(){
    
    var email = document.getElementById('txtEmail').value;
    var name = document.getElementById('txtName').value;
    var password = document.getElementById('txtPassword').value;
    var male = document.getElementById('rbMale').checked;
    var female = document.getElementById('rbFemale').checked;
    var dob = document.getElementById('dob').value;
    var nation = document.getElementById('nation').value;
    var agree = document.getElementById('agree').checked;
    var date = dob.split("/");

    if(email == ""){
        error.innerHTML = "Kindly insert your e-mail address.";
    }else if(
        email.indexOf('@') == -1 
        || email.indexOf('.com') == -1
        || email.indexOf('@') == 0
        || email.indexOf('.') == 0
    ){
        error.innerHTML = "Wrong e-mail address format [Ex : aaa@gmail.com]."
    }else if(name.length < 5){
        error.innerHTML = "Username must at least contains five characters."
    }else if(password == ""){
        error.innerHTML = "Kindly enter your password."
    }else if(password.length < 8){
        error.innerHTML = "Password must at least contains eight characters."
    }else if(male == false && female == false){
        error.innerHTML = "Kindly choose your gender."
    }else if (date == "") {
        error.innerHTML = "Kindly enter your date of birth."
    }else if(nation == ""){
        error.innerHTML = "Kindly choose your nationality."
    }else if(agree == false){
        error.innerHTML = "Kindly agree to the user's terms and condition."
    }else{
        error.innerHTML = "";
        alert("You've successfully registered.");
        document.getElementById('form1').reset();
    }
}
