/* input validation*/
var form = document.getElementById("validform");
var itemsList = document.getElementById("items");
var inputMail = document.getElementById("mailinput");
var inputPassword = document.getElementById("passwordinput");

function inputMailValidation () {
    if (inputMail) {
        return true;
    }
    else {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing e-mail input"));
        itemsList.appendChild(li);
    }
};

function inputPasswordValidation () {
    if (inputPassword) {
        return true;
    }
    else {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing password input"));
        itemsList.appendChild(li);
    }
};

function totalInputValidation() {
    if (inputMail && inputPassword) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All inputs are correct"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

/* Required input validation */
function inputMailRequired () {
    if (inputMail.hasAttribute("required")) {
        return true;
    }
    else {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing e-mail required attribute"));
        itemsList.appendChild(li);
    }
};


function inputPasswordRequired () {
    if (inputPassword.hasAttribute("required")) {
        return true;
    }
    else {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Missing password required attribute"));
        itemsList.appendChild(li);
    }
};

function totalInputRequiredValidation () {
    if (inputMail.hasAttribute("required") && inputPassword.hasAttribute("required")) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All inputs have required attribute"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

/* Labels validation */ 
var formFind = document.getElementsByClassName("form");
var emailLabel = document.getElementById("maillabel"); 
var passwordLabel = document.getElementById("passwordlabel");

function findForm() {
    if (!formFind) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Form is not found"));
        itemsList.appendChild(li);
    }
};

function emailL() {
    if (!emailLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("email Label not found"));
        itemsList.appendChild(li);
    }
};

function passwordL() {
    if (!passwordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Password Label not found"));
        itemsList.appendChild(li);
    }
};

function totalLabelValidation() {
    if (emailLabel && passwordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All labels are correct"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

/* Submit, Reset and Login buttons validation + All validations*/
var submitbutton = document.getElementById("submit");
var anchorButton = document.querySelector("a");
var anchorButtonRef = document.querySelector("a").getAttribute("href");

submitbutton.onclick = function(e) {submitB();e.preventDefault();
    anchorB();
    anchorBRef();
    totalInputValidation();
    totalInputRequiredValidation();
    totalLabelValidation();
    inputMailRequired();
    inputPasswordRequired();
    emailL();
    passwordL();
};
    
function submitB() {
    if (submitbutton.onclick) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Submit button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

anchorButton.onclick = function() {anchorB()};

function anchorB() {
    if (anchorButton.hasAttribute("href")) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Login button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

function anchorBRef() {
    if (anchorButtonRef === "./register.html") {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Login button has correct contents"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};