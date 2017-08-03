$(window).scroll(function(){
	if ($(document).scrollTop() > 0){
		$('nav').addClass('scrolled');
		$('.nav-item').css('color', 'black');
	}
	else{
		$('nav').removeClass('scrolled');
		$('.nav-item').css('color', 'white');
	}
});
