function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

document.addEventListener("DOMContentLoaded", function (event) {
	var step = getQueryString("step");
	console.log(step);
	var baccus = document.getElementById("wine");
	var turkey = document.getElementById("turkey");
	var points = document.getElementById("points");

	if(step==0){
		baccus.src = "./images/object4.png";
		turkey.src = "./images/object6.png";
		points.innerHTML = "0 point";
	}else if(step==1){
		baccus.src = "./images/object4-yes.png";
		turkey.src = "./images/object6.png";
		points.innerHTML = "1 point";
	}else if(step==2){
		baccus.src = "./images/object4-yes.png";
		turkey.src = "./images/object6-yes.png";
		points.innerHTML = "2 points";
	}else{
		baccus.src = "./images/object4.png";
		turkey.src = "./images/object6.png";
		points.innerHTML = "0 point";
	}
});