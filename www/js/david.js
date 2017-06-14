var audio = new Audio('./david.mp3');
        var playing = false;

        function play(){
            var on = playing;
            if(on){
                document.getElementById("play_btn").style.background = "#35ba6f";
                document.getElementById("small-icon").style.background = "url(\"./images/play.png\")";
                audio.pause();
                playing = false;
            }else{
                document.getElementById("play_btn").style.background = "#15a0bf";
                document.getElementById("small-icon").style.background = "url(\"./images/pause.png\")";
                audio.play();
                playing = true;
            }
            document.getElementById("small-icon").style.backgroundSize = "100%";
        }

var isImage = true;

function change(){
	if(isImage){
		document.getElementById("david-pic").innerHTML = "<p style=\"width:90%; margin-left:5%; font-size: 22px;\">This is the first nude statue made since antiquity and is certainly Donatello’s most famous and admired piece representing a civic hero symbolic of the Florentine Republic. It was commissioned by Cosimo the Elder around 1440 and from 1457, it stood in the courtyard of the Palazzo Medici. It’s first known as being there in 1469, on the occasion of the marriage of Lorenzo the Magnificent.<br><br>In this sculpture, Donatello created an unusual image of the young, biblical shepherd and traditional protector of the city. He is an adolescent, whose nudity alludes to the humanity and courage, which defeat arrogance and brute force. The culmination of the biblical, civic theme and ancient mythology is also expressed by the decedent hat that is trimmed with ribbons and crowned with laurel that references Mercury’s winged head piece.</p>"
		isImage = false;
	}
	else{
		document.getElementById("david-pic").innerHTML = "<img src=\"./images/david.jpg\" />";
		isImage = true;
	}
}