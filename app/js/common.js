$(function() {
	// -- Верхнее меню
	let navBtn = document.getElementById('navBtn');
 	navBtn.onclick = function() {
 		let navTopList = document.getElementById('navTopList');
 		let MunuSet = window.getComputedStyle(navTopList).display;
 		if (MunuSet == 'none'){
			navTopList.style.cssText="display: block";
		} else {
			navTopList.style.cssText="display: none";
		}

		let otladka = navBtn.classList.contains('topnav_btn-close');
		if(navBtn.classList.contains('topnav_btn-close')){
			navBtn.classList.remove('topnav_btn-close');
			navBtn.classList.add('topnav_btn-open');
		} else {
			navBtn.classList.remove('topnav_btn-open');
			navBtn.classList.add('topnav_btn-close');
		}
    }

    // Кнопка вверх
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : .3}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });

    $('#upbutton').hover(function() {
    	$('#upbutton').css({opacity : .8});
    }, function() {
    	$('#upbutton').css({opacity : .3});
    });

});