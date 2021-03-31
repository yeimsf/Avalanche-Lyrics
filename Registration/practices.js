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
function uservalidation()
{
	var nuser = document.getElementById("userreg").value;
	var npsw = document.getElementById("passwreg").value;
	var ask = storeds.Username.indexOf(nuser); 
	var asks = storeds.Password.indexOf(nmail);
	if(storeds.Username.indexOf(nuser) !== -1 && storeds.Password.indexOf(npsw) !== -1 && (storeds.Username.indexOf(nuser) === storeds.Password.indexOf(npsw)))
	{
		document.getElementById("logout").innerHTML = "Log out";
		return true;
	}
	else
	{
		alert("Wrong Username Or Password!");
		return false;
	}
}
window.onload = function()
{
	document.getElementById("forms").onsubmit = uservalidation;	
}