var form = document.getElementById("validform");
var itemsList = document.getElementById("items");
var fullNameLabel = document.getElementById("fullnamelabel");
var emailLabel = document.getElementById("maillabel"); 
var passwordLabel = document.getElementById("passwordlabel");
var repeatPasswordLabel = document.getElementById("repeatpasswordlabel")
var submitbutton = document.getElementById("submit");
var resetbutton = document.getElementById("reset");

function fullNameL() {
    if (!fullNameLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Full Name Label not found"));
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

function repeatPasswordL() {
    if (!repeatPasswordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Repeat password Label not found"));
        itemsList.appendChild(li);
    }
};

function totalvalidation() {
    if (fullNameLabel && emailLabel && passwordLabel && repeatPasswordLabel) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All labels are correct"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

fullNameL();
emailL();
passwordL();
repeatPasswordL();
totalvalidation();

submitbutton.onclick = function() {submitb()};

function submitb() {
    if (submitbutton.onclick) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Submit button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};

resetbutton.onclick = function() {resetb()};

function resetb() {
    if (resetbutton.onclick) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("Reset button works"));
        li.style.color = "green";
        itemsList.appendChild(li);
    }
};