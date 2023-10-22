$(document).ready(function(){
    $(".scroll").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 70}, 500);
	});

    jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > 350) {
			jQuery('.anchor-site').fadeIn(300);
		} else {
			jQuery('.anchor-site').fadeOut(300);
		}
	});

	$('.anchor-site').click(function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

})