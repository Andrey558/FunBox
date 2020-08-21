$(function () {
	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn();
	});

	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
	$('.main-form-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});

	$('.menu__box a').click(function () {
		$('.menu__box').slideUp(400);
	})
});