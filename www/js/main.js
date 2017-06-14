var time = 0;
var hour = 0;
var minute = 0;
var statusArr = [true, false, false, false, false];
var times = [40,25,10,20,15];
var overLap = 0;

document.addEventListener("DOMContentLoaded", function (event) {
	window.scrollTo(0, 0);

    //Checking if the js file is linked to html
    console.log("hello world");
    	document.getElementsByClassName("topics")[0].addEventListener("click",function(){
    		change(0);
    	});
    	document.getElementsByClassName("topics")[1].addEventListener("click",function(){
    		change(1);
    	});
    	document.getElementsByClassName("topics")[2].addEventListener("click",function(){
    		change(2);
    	});
    	document.getElementsByClassName("topics")[3].addEventListener("click",function(){
    		change(3);
    	});
    	document.getElementsByClassName("topics")[4].addEventListener("click",function(){
    		change(4);
    	});

    	showTime(40);
});

function change(i){
	statusArr[i] = !statusArr[i];
		var num = i+1;
		var div = document.getElementById("topic-"+num);
		if(statusArr[i]==true){
			div.style.background = "url(\"./images/topic"+num+"_on.png\")";
		}else{
			div.style.background = "url(\"./images/topic"+num+"_off.png\")";
		}
		div.style.backgroundSize = "100%";
		time = 0;
		overLap = 0;
		for(var i = 0; i<5; i++){
			if(statusArr[i] == true){
				time+=times[i];
				overLap++;
			}
		}
		if(overLap==0){
			showTime(0);
		}else{
			showTime(time-(overLap-1)*5);
		}
}

function showTime(time){
	if(time==0){
		document.getElementById("time").innerHTML = "0 h 00 m";
	}else{
		hour = 0;
		minute = 0;
		while(time>=60){
			time-=60;
			hour++;
		}
		minute = time;
		if(minute<10){
		document.getElementById("time").innerHTML = " START TOUR ("+hour+" h 0"+minute+" m)";
		}else{
		document.getElementById("time").innerHTML =  "START TOUR ("+hour+" h "+minute+" m)";
		}
	}
}