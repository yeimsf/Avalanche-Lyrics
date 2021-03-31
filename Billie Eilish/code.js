function displaylyrics() 
{
  var lyrics = document.getElementById("content");
  var btnName = document.getElementById("btn");
  var text = document.getElementById("textt");

  if (lyrics.style.display === "none")
  {
      lyrics.style.display = "block";

      if(btnName.value=="Show Lyrics")
      {
        btnName.value="Hide Lyrics";
      }
  }

  else
  {
      lyrics.style.display = "none";

        if(btnName.value=="Hide Lyrics")
      {
        btnName.value="Show Lyrics";
      }

  }

}

