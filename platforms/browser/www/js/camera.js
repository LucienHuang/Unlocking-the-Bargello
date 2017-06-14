function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

document.addEventListener("DOMContentLoaded", function (event) {
	var success = getQueryString("success");
	console.log(success);

	if(success==0){
	setInterval(function(e){
    	window.location.href="success.html"; 
	},2000);
	}else{
	setInterval(function(e){
        window.location.href="successturkey.html"; 
	},2000);
	}
});