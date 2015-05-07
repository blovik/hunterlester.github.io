$(document).ready(function(){
	$('#myModal').foundation('reveal','open')
});
$(document).ready(function(){
	$("#clean").on('click', function(){
		$('footer').hide();
		$('.bs').fadeOut(600, function(){
			$('body').addClass('bcfade');
			$('.one').fadeIn(600);
		});	
	});
	$('.one').on('click', function(){
		$('.one').fadeTo(600, 0);
		$('.two').fadeIn(600);
	});
	$('.two').on('click', function(){
		$('.two').fadeTo(600, 0);
		$('.three').fadeIn(600);
	});
	$('.three').on('click', function(){
		$('.three').fadeTo(600, 0);
		$('.four').fadeIn(600);
	});
	$('#learn').on('click', function(){
		$(".one, .two, .three, .four").fadeOut(600, function(){
			$('body').removeClass('bcfade');
			$('body').addClass('final');
			$(".third").fadeIn(600);
			$('footer').show();
		});
	});
});