$(function(){
	var windowHeight=$(window).height();
	$('.side, .page').css({
	  height:windowHeight+'px'
	});

	$(window).resize(function(){
		var windowHeight=$(window).height();
		$('.side, .page').css({
			height:windowHeight+'px'
		});
	});
});