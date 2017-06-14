var italian = new Audio('./italian.wav');
var spanish = new Audio('./spanish.wav');
var chinese = new Audio('./chinese.wav');
var hindi = new Audio('./hindi.wav');

function talk(language){
	switch(language){
		case 0:
		italian.play();
		break;
		case 1:
		spanish.play();
		break;
		case 2:
		chinese.play();
		break;
		case 3:
		hindi.play();
		break;
		default:
		break;
	}
}