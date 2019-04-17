// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Radio Button Selector * FOR DEVELOPMENT ONLY *
$(document).ready(function () {
    $('input:radio').click(function () {
		$('.speaker-image-block').removeClass().addClass('speaker-image-block').toggleClass(this.value);
    });
});