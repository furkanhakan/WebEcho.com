function ac(){
	$('.search').css('display','block');

}function kapat(){
	$('.search').css('display','none');

}
	count=-1;
	window.onload=changeImg;


 function changeImg(){	
 	var i;
 	var slides = document.getElementsByClassName("mySlides");
  	var dots = document.getElementsByClassName("dot");
  	if (count<slides.length-1) {
  		count++;
  	}
  	else {
  		count=0;
  	}
  	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  	}
  	 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  	}
  	slides[count].style.display = "block"; 
  	slides[count].style.opacity = '1';
  	dots[count].className += " active";
  	setTimeout("changeImg()",3000);
 }

 function ayarla(){
	var i;
 	var slides = document.getElementsByClassName("mySlides");
  	var dots = document.getElementsByClassName("dot");
  	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  	}
  	 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  	}
  	slides[count].style.display = "block"; 
  	slides[count].style.opacity = '1';
  	dots[count].className += " active";

 }



 function ilerigeri(n){
 	if (n==-1) {
 		count-=1;
 		if (count<0) {
 			count=2;
 		}
 		ayarla();
 	}
 	else {
 		count+=1;
 		if (count>2) {
 			count=0;
 		}
 		ayarla();
 	}
 }
 function currentSlide(n){
 	count=n-1;
 	ayarla();
 }


window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

