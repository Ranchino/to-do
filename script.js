

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var userName = document.getElementsByClassName("userName").value;
    var password = document.getElementsByClassName("password").value;
    if ( userName == "admin" && password == "admin" ){
        alert ("Du har loggat in!");
        window.location = "index.html"; // Redirecting to other page.
        return true;
    }
    else{
    attempt --;// Decrementing by one.
    alert("Du har "+attempt+" försök kvar;");
    } if( attempt == 0){ // Disabling fields after 3 attempts.

    alert = false, 
    document.getElementsByClassName("userName").value = "";
    document.getElementsByClassName("password").value= "";    
    return;
    }
}

