$(document).ready(function() {
    //$('#username').focus();
    $("#welcomeText").css('visibility' , 'hidden');

    $('#submit').click(function() {

        event.preventDefault(); 

        var ValidUsername = $('#username').val() === 'Admin'; 
        var ValidPassword = $('#password').val() === 'Admin'; 

        if (ValidUsername === true && ValidPassword === true) {
            $('.LoggedIn').css('display', 'block');
            $('.NotLoggedIn').hide();
            $('#welcomeText').css('visibility', 'visible');
            $("#logout").css('visibility', 'visible');
            $("#submit").css('visibility', 'hidden');
            
        }
        else {
            $('.NotLoggedIn').css('display', 'block'); 
            $('.LoggedIn').hide();
            $('#welcomeText').hide();
            $("#logout").css('visibility' , 'hidden');
            $("#submit").css('visibility' , 'visible');
            
        }
    });


    $('#logout').click(function() {
        window.location.href ="index.html";
    });


});

/* var attempt = 3; 

function validate(){
    var userName = document.getElementsByClassName("userName")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    if ( userName == "admin" && password == "admin" ){
        alert ("Du har loggat in!");
        window.location = "index.html";
        return true;
    }
    else{
    attempt --;
    alert("Du har "+attempt+" försök kvar;");
    } if( attempt == 0){ 

    alert = false, 
    document.getElementsByClassName("userName")[0].value = "";
    document.getElementsByClassName("password")[0].value= "";    
    return;
    }
} */

