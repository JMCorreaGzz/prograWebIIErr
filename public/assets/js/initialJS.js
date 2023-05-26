var user;
var password;
var isLogged = false;
var returnPage = "index.php";



$(document).ready(function() 
{
    
    $('#registerSection').hide();



});



function isLoggedVal()
{



}





function hideLogin(){
    $('#loginSection').hide();
    $('#registerSection').fadeTo(100, 1);
    $("#emailLogin").val( "" );
    $("#passwordLogin").val( "" );

}

function showLogin(){
    $('#loginSection').fadeTo(100, 1);
    $('#registerSection').hide();
    $("#phpUsernameRegister").val("");
    $("#phpEmailRegister").val( "" );
    $("#password").val( "" );
    $("#phpFirstNameRegister").val( "" );
    $("#phpLastNameRegister").val( "" );
    $("#verifyPassword").val( "" );
}