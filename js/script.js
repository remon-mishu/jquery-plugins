$(document).ready(function () {

	// Slick
	$(document).ready(function(){
		$('.center').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
	});

	// Counter Up
	$(".counter").counterUp({
		delay: 15,
		time: 1000,
	});
	

});


// WoW
wow = new WOW({
	boxClass: "wow",
	animateClass: "animated",
	offset: 0,
	mobile: true,
	live: true,
});
wow.init();