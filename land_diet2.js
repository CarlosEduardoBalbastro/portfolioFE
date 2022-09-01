
var btn = document.getElementById('btn');
var sideNav = document.getElementById('sideNav');

sideNav.style.right ="-250";
btn.onclick = function(){
  if(sideNav.style.right == "-250px"){
    sideNav.style.right ="0";
  }
  else{
    sideNav.style.right = "-250px";
  }
}



	var scroll = new SmoothScroll('a[href*="#"]', {
    speed:2000,
    speedAsDuration:true
  });