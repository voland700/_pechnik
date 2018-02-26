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

let imgPrew = document.getElementsByClassName('product_photo-prew-img');
    let product_photo = document.getElementById('product_photo');
    let mainImg;
    let modalImg;
    let imgMainPathNew;
    let productModal;   
    let btnModalLeft = document.getElementById('btnModalLeft'); 
    let btnModalRigth = document.getElementById('btnModalRigth');
    let btnModalClosed = document.getElementById('btnModalClosed');
    let ImgMas = [];
    let Count;

    function fileName(fullPath) {
        return ('' + fullPath).replace(/url\(\"/i, '').replace(/\"\)/i, '');
        }
    for(let i=0; i< imgPrew.length; i++ ) {
        imgPrew[i].onclick = function(){            
            imgMainPath= fileName(imgPrew[i].style.backgroundImage);                
            product_photo.src= imgMainPath         
        };
    }
    product_photo.onclick = function(){
        productModal = document.getElementById('productModal'); 
        productModal.style.display = "block";
        mainImg = product_photo.getAttribute('src');
        modalImg = document.getElementById('modalImg');
        modalImg.setAttribute('src', mainImg);
        
        for(let i=0; i< imgPrew.length; i++ ) {
            ImgMas[i]= fileName(imgPrew[i].style.backgroundImage);
        }

        for(let i=0; i<ImgMas.length; i++ ) {           
            if(mainImg==ImgMas[i]){
                Count = i; 
                return false;
            }
        }       
    }
    btnModalClosed.onclick = function(){        
        productModal.style.display = "none";
    }
    btnModalRigth.onclick = function () {
        if(Count < ImgMas.length-1){ 
            Count++;   
            modalImg.setAttribute('src', ImgMas[Count]); 
            return false; 
        }  
        if(Count >= ImgMas.length-1){
            Count=0;            
            modalImg.setAttribute('src', ImgMas[Count]); 
        }
    }
    btnModalLeft.onclick = function () {        
        if(Count <= 0){
            Count= ImgMas.length-1;
            modalImg.setAttribute('src', ImgMas[Count]);
            return false;           
        }
        if(Count <= ImgMas.length-1){
            Count--;            
            modalImg.setAttribute('src', ImgMas[Count]);
        }   
    }







});