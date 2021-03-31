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
var user = ["yeimsf"];  
var passw = [0123456];
function validation()
{
	var valid = true;
	if(document.form.userreg.value == "")
	{
		alert("Username is Empty");
		valid = false;
	}	
	else if (document.form.emailreg.value == "") 
	{
		alert("E-Mail is Empty");
		valid = false;
	}
	else if(document.form.emailreg.value.indexOf("@") == -1 || document.form.emailreg.value.indexOf(".") == -1)
	{
		alert("Enter A Valid E-Mail");
		valid = false;
	}
	else
	{				
		var x = document.getElementById("user").innerHTML;
		var y = document.getElementById("mail").innerHTML;
		var z = document.getElementById("passw").innerHTML;
		window.location="login.html";
	}	
}
var valids = false;
function uservalidation()
	{
		var user = ["yeimsf"];
		var passw = ["0123456"];
		var nuser = document.getElementById("users").value;
		var npsw = document.getElementById("passw").value;
		if(user.indexOf(document.getElementById("users").value) !== -1 && passw.indexOf(document.getElementById("passw").value !== -1))
		{
			return true;
		}	
		else
		{
			alert("Wrong Username Or Password!");
			return false;
		}
	}
document.getElementById("form").onsubmit = uservalidation;
