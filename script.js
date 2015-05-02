
$(document).ready(function() {
	$("#submit").click(function() {
		$.post('http://form-echo.herokuapp.com/form-echo', $('#contact_form').serialize(),function(data) {
			document.getElementById('#contact_form').reset();
		});
	});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);  //scrolling speed
					return false;
				}
			}
		});
	});

	//retract navbar-collapse when list item clicked or touched
	$(".navbar-nav li a").click(function (event) {
		// check if window is small enough so dropdown is created
		var toggle = $(".navbar-toggle").is(":visible");
		if (toggle) {
			$(".navbar-collapse").collapse('hide');
		}
	});
});
