function myFunc(){
    alert("You Clicked me");
 }
 ;

 var isFav = "false";

 function favorite(){
    if (isFav == "false"){
    alert("Anadido a favoritos");
    document.getElementById("heart").src="img/fav.png";
    isFav = "true";
    } else {
        alert("Ya esta en favoritos");
    }

 }


