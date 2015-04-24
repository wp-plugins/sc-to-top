$(document).ready(function(){
	// scroll to top	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.sc-to-top').fadeIn();
		} else {
			$('.sc-to-top').fadeOut();
		}
	});
	$('.sc-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
	});
});