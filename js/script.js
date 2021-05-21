$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger-bord, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function () {
	$('.footer__burger').click(function (event) {
		$('.footer__burger-bord, .list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$(document).ready(function () {
	$('.slider-portfolio').slick({
		dots: true,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplaySpeed: 2000,
		rows: 2,
		responsive: [
			{
				breakpoint: 1550,
				settings: {

					arrows: false,
				}
			}]
	});
});

AOS.init({
	// // Global settings:
	
	// disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	 startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	// initClassName: 'aos-init', // class applied after initialization
	// animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
	// disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	// debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	// throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 100, // offset (in px) from the original trigger point
	// delay: 0, // values from 0 to 3000, with step 50ms
	duration: 2000, // values from 0 to 3000, with step 50ms
	// easing: 'ease', // default easing for AOS animations
	// once: false, // whether animation should happen only once - while scrolling down
	// mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
