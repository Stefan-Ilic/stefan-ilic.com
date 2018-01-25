// Make navbar change color when scrolled
$(window).scroll(function(){
	if ($(document).scrollTop() > 0){
		$('nav').addClass('scrolled');
		$('nav div ul li a').css('color', 'black');
	}
	else{
		$('nav').removeClass('scrolled');
		$('nav div ul li a').css('color', 'white');
	}
});
