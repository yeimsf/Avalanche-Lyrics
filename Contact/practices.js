function openNav()
{
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() 
{
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}
var user = [] , pass = [];
function Sent()
{
	var nuser = document.getElementById("user").value;
	var nmail = document.getElementById("email").value;
	if(users.Username.indexOf(nuser) !== -1 && users.Email.indexOf(nmail) !== -1 && (users.Username.indexOf(nuser) === users.Email.indexOf(nmail)))
	{
		alert("Message Sent Successfully");
		return true;
	}
	else
	{
		alert("Please Check Your Username Or E-Mail");
		return false;
	}
}
document.getElementById("forms").onsubmit = Sent;

