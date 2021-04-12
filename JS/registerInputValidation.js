var dataConfirmation = {
    userData:false,
    mailData:false,
    passwordData:false,
    repeatPasswordData:false
};


/* Full Name Input Validation*/
var fullNameValidation = document.getElementById("fullnameinput");
fullNameValidation.addEventListener("blur", fName);
function fName() {
    var fullNameValidationInput = document.getElementById("fullnameinput").value;
    if (fullNameValidationInput == "") {
        document.getElementById("fullnamevalidation").innerHTML = "Full name is missing";
    } else {
        var fullNameIndexof = fullNameValidationInput.indexOf(" ");
        var firstName = fullNameValidationInput.substring(0, fullNameIndexof);
        var lastName = fullNameValidationInput.substring(fullNameIndexof + 1);
        if (firstName.length >= 3 && lastName.length >= 3) {
            document.getElementById("fullnamevalidation").innerHTML = "Ok!";
            return dataConfirmation.userData = true;
        } else {
            document.getElementById("fullnamevalidation").innerHTML = "You must provide first and last name";
        }
    }
};
fullNameValidation.addEventListener("focus", fNameEmpy);
function fNameEmpy() {
    var fullNameValidationInput = document.getElementById("fullnameinput").value;
    if (fullNameValidationInput == true);
    document.getElementById("fullnamevalidation").innerHTML = "";
};

/* e-mail Input Validation*/
var eMailValidation = document.getElementById("mailinput");
eMailValidation.addEventListener("blur", eMail);
function eMail() {
    var eMailValidationInput = document.getElementById("mailinput").value;
    if (eMailValidationInput == "") {
        document.getElementById("emailvalidation").innerHTML = "e-mail is missing";
    } else {
        var eMailIndexOf = eMailValidationInput.indexOf("@");
        var eMailIndexOfTwo = eMailValidationInput.indexOf(".com");
        if (eMailIndexOf != -1 && eMailIndexOfTwo != -1) {
            document.getElementById("emailvalidation").innerHTML = "Ok!";
            return dataConfirmation.mailData = true;
        } else {
            document.getElementById("emailvalidation").innerHTML = "The e-mail is not a valid";
        }
    }
};
eMailValidation.addEventListener("focus", eMailEmpy);
function eMailEmpy() {
    var eMailValidationInput = document.getElementById("mailinput").value;
    if (eMailValidationInput == true);
    document.getElementById("emailvalidation").innerHTML = "";
};

/* Password Input Validation*/
var passwordValidation = document.getElementById("passwordinput");
passwordValidation.addEventListener("blur", password);
function password() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    if (passwordValidationInput == "") {
        document.getElementById("passwordvalidation").innerHTML = "Password is missing";
    } else {
        var conditionOne = /[a-z]/g;
        var passwordIndexOfLettersLowerCase = passwordValidationInput.match(conditionOne);
        var conditionTwo = /[0-9]/g;
        var passwordIndexOfNumbers = passwordValidationInput.match(conditionTwo);
        var conditionThree = /[A-Z]/g;
        var passwordIndexOfLettersUperCase = passwordValidationInput.match(conditionThree);
        if (passwordValidationInput.length >= 8 && passwordIndexOfLettersLowerCase != -1 && passwordIndexOfNumbers != -1 && passwordIndexOfLettersUperCase != -1) {
            document.getElementById("passwordvalidation").innerHTML = "Ok!";
            return dataConfirmation.passwordData = true;
        } else {
            document.getElementById("passwordvalidation").innerHTML = "More than 8 characters are required, include numbers and letters, at least one lowercase and one uppercase";
        }
    }
};
var checkBoxButton = document.getElementById("passwordcheckbox");
checkBoxButton.onclick = function() {myfuntion()};
function myfuntion() {
    var x = document.getElementById("passwordinput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
};
passwordValidation.addEventListener("focus", passwordEmpy);
function passwordEmpy() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    if (passwordValidationInput == true);
    document.getElementById("passwordvalidation").innerHTML = "";
};
/* Repeat Password Input Validation*/
var repeatPasswordValidation = document.getElementById("repeatpasswordinput");
repeatPasswordValidation.addEventListener("blur", repeatPassword);
function repeatPassword() {
    var passwordValidationInput = document.getElementById("passwordinput").value;
    var repeatPasswordValidationInput = document.getElementById("repeatpasswordinput").value;
    if (repeatPasswordValidationInput == "") {
        document.getElementById("repeatpasswordvalidation").innerHTML = "Password is missing";
    } else {
        if (passwordValidationInput == repeatPasswordValidationInput) {
            document.getElementById("repeatpasswordvalidation").innerHTML = "Ok!";
            return dataConfirmation.repeatPasswordData = true;
        } else {
            document.getElementById("repeatpasswordvalidation").innerHTML = "You have to repeat the same password";
        }
    }
};
repeatPasswordValidation.addEventListener("focus", repeatPasswordEmpy);
function repeatPasswordEmpy() {
    var repeatPasswordValidationInput = document.getElementById("repeatpasswordinput").value;
    if (repeatPasswordValidationInput == true);
    document.getElementById("repeatpasswordvalidation").innerHTML = "";
};

/* get data */
var form = document.getElementById("validform");
var dataList = document.getElementById("data");

document.addEventListener("submit", gettingData);


function gettingData() {
    var inputs = document.getElementsByClassName('data').value;
    console.log(inputs);
    inputs.forEach(gettingData);
    var inputsValue = imput.value;
    if (dataConfirmation.userData && dataConfirmation.mailData && dataConfirmation.passwordData && dataConfirmation.repeatPasswordData) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode(inputsValue));
        dataList.appendChild(li);
    }
};
