var clue1 = new Audio('./ba_clue1.mp3');
var clue2 = new Audio('./ba_clue2.mp3');
var clue3 = new Audio('./ba_clue3.mp3');
var start = true;

document.addEventListener("DOMContentLoaded", function (event) {

	var clueCount = 0;
	var clueBtn = document.getElementById("clue-btn");
	var clueTitle = document.getElementById("clue-title");
	var clueContent = document.getElementById("clue-content");
	if(start==true){
		setTimeout(function(e){
			clue1.play();
			start = false;
		}, 1000);
	}

	clueBtn.addEventListener("click", function(e){
		clueCount++;
		if(clueCount>2) clueCount = 0;
		if(clueCount==0){
			clueTitle.innerHTML = "Clue 1";
			clueContent.innerHTML = "To find me, you will need to be on the ground floor. "
			clue1.play();
			clue2.currentTime = 0;
			clue2.pause();
			clue3.currentTime = 0;
			clue3.pause();
		}else if(clueCount==1){
			clueTitle.innerHTML = "Clue 2";
			clueContent.innerHTML = "Make sure you look for grapes – I’m with a little friend and I’m having a good time."
			clue2.play();
			clue1.currentTime = 0;
			clue1.pause();
			clue3.currentTime = 0;
			clue3.pause();
		}else{
			clueTitle.innerHTML = "Clue 3";
			clueContent.innerHTML = "Have you found me yet? I’ll raise my cup if you get here… and I’ll raise my cup if you don’t!"
			clue3.play();
			clue2.currentTime = 0;
			clue2.pause();
			clue1.currentTime = 0;
			clue1.pause();
		}
	});

});

