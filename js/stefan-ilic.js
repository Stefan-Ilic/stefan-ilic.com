// Make navbar change color when scrolled
$(window).scroll(function(){
	if ($(document).scrollTop() > 0){
		$('nav').addClass('scrolled');
		$('nav div ul li a').css('color', 'white');
	}
	else{
		$('nav').removeClass('scrolled');
		$('nav div ul li a').css('color', 'white');
	}
});

//smooth scroll function
$(document).ready(function(){
	$("#navigation li a").on('click', function(event) {
	  if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		if (hash == "#home"){
			$('html, body').animate({
				scrollTop: 0
				}, 800);
		}
		else {
			$('html, body').animate({
				scrollTop: $(hash).offset().top-50
				}, 800);
		}
	  }
	});
  });