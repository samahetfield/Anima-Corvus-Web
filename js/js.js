$(window).ready(function() {

	$('#loadScreen').delay(100).fadeOut("slow");

	if($('.message')){
		$('.message').delay(1000).fadeOut('slow');
	}
	
	$('.topBar').addClass('show');
	$('.btmBar').addClass('show');
	
	
	var pos, opened = false;
	scrollValue();

	$('.burger-container').click(function(e){
		$('.header').toggleClass('menu-opened');
		if(opened === false){
			opened = true;
		}else{
			opened = false;
		}
		if (pos === true && opened === true){
			$('.bar').css('background', '#fff');
		} else {
			scrollValue();
		}
	});


	$('#menu').find('a').on('click', function(e){

		$('.header').toggleClass('menu-opened');
		opened = false;
		
		if(this.id === ""){
			scrollValue();
			e.preventDefault();
			
			var target = this.hash;
			console.log(target);
			var $target = $(target);

			$('html, body').animate({
				'scrollTop':$target.offset().top
			}, 1500, 'easeInOutQuint');
		}	
	});

	$('#nav__social').find('a').on('click', function(e){
		$('.header').toggleClass('menu-opened');
	});


	$(window).scroll(function(e) {
		scrollValue();
		var scroll = $(window).scrollTop();
		if(scroll >= $('#merch').offset().top){
			$("video[class^='track-']").each(function() {
		    $(this).get(0).pause();
			});
		}else{
			$("video[class^='track-']").each(function() {
		    $(this).get(0).play();
			});
		}
	});

	function scrollValue() {
		var scroll = $(window).scrollTop();

	  if(scroll >= $('#merch').offset().top - 40 && scroll < $('#tour').offset().top - 40){
	  	$('.bar').css('background', '#222');
	  	pos = true;
	  }else if(scroll >= $('#music').offset().top - 40 && scroll < $('#videos').offset().top - 40){
	  	$('.bar').css('background', '#222');
	  	pos = true;
	  }else{
	  	$('.bar').css('background', '#fff');
	  	pos = false;
	  }
	}

	var expanded = false;
	showReadMore();
	$(window).resize(function() {
		showReadMore();
	});

	function showReadMore(){
		if($('.info__text').height() > 130 && $(window).width() <= 1200 && expanded === false){
			$('.readMore').css('display', 'block');
			$('.album__info').css('height', '130px');
		}else{
			$('.readMore').css('display', 'none');
			$('.readMore').html('Read More');
			$('.album__info').css('height', '300px');	
			expanded = false;
		}
	}

	$('.album__years').find('p').on('click', function(e) {
		$(this).addClass('selectedyear');
		$(this).siblings().removeClass('selectedyear');
		var leftStep = this.id;
		$('.album__container__inner').css('left', '-' + leftStep*100 + '%');
		if($(window).width() <= 1200){
			$('.album__info').css('height', '130px');
		}else{
			$('.album__info').css('height', '300px');
		}
		
		$('.readMore').html('Read More');
		expanded = false;
	});

	$('.readMore').on('click', function() {
		if(expanded === false){
			$(this).siblings('.album__info').css('height', 'initial');
			$('.readMore').html('Read Less');
			expanded = true;
		}else{
			$('.album__info').css('height', '130px');
			$('.readMore').html('Read More');
			expanded = false;
		}
	});

	$('.video__thumbs').find('img').on('click', function() {
		$('#video__frame').attr("src", this.id);
		$(this).addClass('selectedvideo');
		$(this).siblings().removeClass('selectedvideo');
		var pos = $(this).index();
		switch (pos) {
			case 0:
	        $('.video__title').text("A Winged Victory");
	        break;
	    case 1:
	        $('.video__title').text("Old Statues");
	        break;
	    case 2:
	        $('.video__title').text("Pacific");
	        break;
	    case 3:
	        $('.video__title').text("Everest");
	        break;
		}
	});

});