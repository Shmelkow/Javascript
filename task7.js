/*switch (browser) {
  case ‘Edge’:
    alert( “You’ve got the Edge!” );
    break;
  case ‘Chrome’:
  case ‘Firefox’:
  case ‘Safari’:
  case ‘Opera’:
    alert( ‘Okay we support these browsers too’ );
    break;
  default:
    alert( ‘We hope that this page looks ok!’ );
}*/

var browser = prompt("Какой браузер вы используете? Edge, Chrome, Firefox, Safari или Opera?");

if (browser.toLowerCase() == "edge") {
    alert("You’ve got the Edge!");
}else if (browser.toLowerCase() == "chrome" || browser.toLowerCase() == "firefox" 
|| browser.toLowerCase() == "safari" || browser.toLowerCase() == "opera") {
    alert("Okay we support these browsers too");
}else{
    alert("We hope that this page looks ok!");
}