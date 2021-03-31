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
var Uname = document.getElementById("user").value;
var Pas = document.getElementById("email").value;
stored.Password.push(Pas);
stored.Username.push(Uname);
localStorage.setItem("stored" , JSON.stringify(stored));
var datas = localStorage.getItem("stored");
var storeds = JSON.parse(datas);
