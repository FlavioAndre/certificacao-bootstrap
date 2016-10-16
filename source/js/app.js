function showOffCanvas($element){
	$element.addClass('open-offcanvas');
}

function hideOffCanvas($element){
	$element.removeClass('open-offcanvas');
}

$('.open-off').on('click',function(){
	showOffCanvas($('html'));
});


$('html,body').on('swiperight',function(){
	showOffCanvas($('html'));
});

$('html,body').on('swipeleft',function(){
	hideOffCanvas($(this));
});

$('html,body').on('click',function(e){
	if(this === e.target)
		hideOffCanvas($(this));
});