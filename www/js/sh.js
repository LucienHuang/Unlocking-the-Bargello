var audio = new Audio('./david.mp3');
        var playing = false;

var isImage = true;

function change(){
	if(isImage){
		document.getElementById("david-pic").innerHTML = "<p style=\"width:90%; margin-left:5%; font-size: 18px;\">Welcome to the Bargello Scavenger Hunt. You are about to begin an adventure that will take you through some of the most famous sculptures which currently live at the Bargello. It is your task to find sculptures based on the clues provided to you. Be sure to listen closely. Many of the sculptures in the collection have been known to whisper additional hints in order to help visitors along the correct path.</p>"
		isImage = false;
	}
	else{
		document.getElementById("david-pic").innerHTML = "<img src=\"./images/sh.jpg\" />";
		isImage = true;
	}
}