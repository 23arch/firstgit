var password = document.getElementById("password");
let passwordLength = 12;
let chars = "0123456789abcdefghijklmnopqrstuvwxyz"
let passowrd = passwordLength + chars;

function genPassword(params) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!€@#*()^%$?ABCDEFGHJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
}

for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    passowrd += chars.susbstring(randomNumber, randomNumber + 1);
}
document.getElementById("password").value = password;


function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execComand("copy");
}