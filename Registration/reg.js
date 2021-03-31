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

var users =
{
	"Username" : ["yeimsf" , "yeimsf1" , "aeimsf"], 
	"Password" : ["0192646968" , "0192646968" , "056585452"],
	"Email" : ["Yeimsf@gmail.com" , "Aeimsf@gmail.com" , "Yeimsf@hotmail.com"]
};
localStorage.setItem("users" , JSON.stringify(users));
var data = localStorage.getItem("users");
var stored = JSON.parse(data);
function validation()
{
	
	var	minlen = 9;
	var count = Object.keys(stored).length;
	for(var i = 0;i < count;i++)
	{
		if(document.getElementById("userreg").value == stored.Username[i])
		{
			alert("Username Already Taken!");
			return false;
		}
	}
	var pass = document.getElementById("passwreg").value;
	if(pass.length < minlen)
	{
		alert("Invalid Password! Password Must Be of More Than 8 Characters");
		return false;
	}
	if(document.getElementById("passwreg").value !== document.getElementById("cpasswreg").value)
	{
		alert("Passwords Don't Match Please Enter The Correct Password");
		return false;
	}
	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.emailreg.value))
	{
		alert("Invalid E-Mail! Correct Syntax: xxxxx@xxxxx.com");
		return false;
	}
	else
	{				
		
		return true;
	}
}
var Uname = document.getElementById("userreg").value;
var Pas = document.getElementById("passwreg").value;
stored.Password.push(Pas);
stored.Username.push(Uname);
localStorage.setItem("stored" , JSON.stringify(stored));
var datas = localStorage.getItem("stored");
var storeds = JSON.parse(datas);
window.onload = function()
{
	document.getElementById("form").onsubmit = validation;	
}