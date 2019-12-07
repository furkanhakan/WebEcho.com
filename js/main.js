$(function()
{
    $(window).on("resize",function()
    {
     	var ekranboyutu=$(window).width();
     	if (ekranboyutu>=754) {
     		$('#linkler > li').css('width','auto');
     		document.getElementById("s").setAttribute('class','navbar navbar-light navbar-expand-md bg-danger text-white p-0');
     		document.getElementById("linkler").setAttribute('class', 'navbar-nav');
     		document.getElementById("linkler").setAttribute('style', 'margin-top: 0px; ');
     	}
else{
$('#linkler > li').css('width',ekranboyutu);
document.getElementById("s").setAttribute('class','navbar navbar-light navbar-expand-md bg-white text-white p-0');
document.getElementById("linkler").setAttribute('class', 'navbar-nav bg-danger fixed-top');
document.getElementById("linkler").setAttribute('style', 'margin-top: 122px;');




}
    })
})

window.onload = function () {
var ekranboyutu=$(window).width();
     	if (ekranboyutu>=754) {
     		$('#linkler > li').css('width','auto');
     	}
else{
$('#linkler > li').css('width',ekranboyutu);
document.getElementById("s").setAttribute('class','navbar navbar-light navbar-expand-md bg-white text-white p-0');
document.getElementById("linkler").setAttribute('class', 'navbar-nav bg-danger fixed-top');
document.getElementById("linkler").setAttribute('style', 'margin-top: 122px; ');




}

  };