function search()
{
	var string = document.getElementById("searchs").value;
	if(!string)
	{
		alert("Please Enter A Song Name");
		return false;
	}
	if(string == "Avril Lavgine" || string == "Avril" || string == "I Fell In Love With The Devil" || string == "avril" || string == "avril lavgine" || string == "Avril lavgine" || string == "i fell in love with the devil")
	{
		window.location ="../Avril Lavgine/Avril Lavgine.html";
	}
	else if(string == "Billie" || string == "Billie Eilish" || string == "Bury A Friend" || string == "billie" || string == "billie eilish" || string == "Billie eilish" || string == "bury a friend")
	{
		window.location = "billie eilish.html";
	}
	else if(string == "Adele" || string == "Adele Hello" || string == "Hello" || string == "adele" || string == "adele hello" || string == "Adele hello" || string == "hello")
	{
		window.location = "../Adele/Adele.html";
	}
	else if(string == "Camila" || string == "Camila Cabello" || string == "Senorita" || string == "camila" || string == "Camila cabello" || string == "camila cabello" || string == "senorita")
	{
		window.location = "../Camila Cabello/Camila Cabello.html";
	}
	else if(string == "Ed Sheeran" || string == "ed sheeran" || string == "Ed sheeran" || string == "Beautiful People" || string == "beautiful people" || string == "Beautiful" || string == "beautiful")
	{
		window.location = "../Ed Sheeran/Ed Sheeran.html";
	}
	else if(string == "Halsey" || string == "halsey" || string == "Without Me" || string == "Without me" || string == "without me" || string == "Halsey Without me" || string == "Halsey Without Me")
	{
		window.location = "../Halsey/Halsey.html";
	}
	else if(string == "Lebowski" || string == "lebowski" || string == "goodbye my joy" || string == "Goodbye My Joy" || string == "Goodbye my joy" || string == "Lebowski Goodbye my joy" || string == "Lebowski Goodbye My Joy")
	{
		window.location = "../Lebowski/Lebowski.html";
	}
	else if(string == "Steven Wilson" || string == "Steven wilson" || string == "steven wilson" || string == "The Raven That Refused To Sing" || string == "the raven that refused to sing" || string == "steven" || string == "Steven")
	{
		window.location = "../Steven Wilson/Steven Wilson.html";
	}
	else if(string == "Macklemore" || string == "MackleMore" || string == "macklemore" || string == "Can't Hold Us" || string == "Can't hold us" || string == "cant hold us" || string == "can't hold us")
	{
		window.location = "../Macklemore/Macklemore.html";
	}
	else if(string == "The Cranberries" || string == "The ranberries" || string == "the cranberries" || string == "Cranberries" || string == "Cranberries" || string == "Zombie" || string == "zombie")
	{
		window.location = "../The Cranberries/The Cranberries.html";
	}
	else
	{
		alert("Coming Soon.. Stay Tuned For Updates! :)");
	}
}