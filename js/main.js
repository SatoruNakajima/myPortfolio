$(function() {


// ドロワーメニュー開閉
  var header_nav_btn = $('#header_nav_btn'),
      header_nav = $('.header_nav');
  header_nav_btn.click(function(){
    $(this).toggleClass('header_nav_active');
    header_nav.stop(true).slideToggle(500);
  });


// パララックス
  // bg
  var bg = document.getElementById('bg');
  var parallaxInstance = new Parallax(bg, {
    relativeInput: true
  });

  // top_fv
  var top_fv = document.getElementById('top_fv_parallax');
  var parallaxInstance = new Parallax(top_fv, {
    relativeInput: true
  });
// パララックスここまで


// フルページスクロール
	$('#fullpage').fullpage({
		autoScrolling:true,
		menu: '#top_menu',
		anchors: ['top_fv', 'top_portfolio', 'top_about', 'top_contact'],
    onLeave: function(index, nextIndex, direction){
            if(index == 3 && direction =='down'){
            //セクション3を下にスクロールしたとき実行されます
            $('footer').stop(true).animate({
              visibility: 'visible'
            }, 500);
            }
            else if(index == 4 && direction =='up')
            //セクション4を上にスクロールしたときに実行されます
            $('footer').stop(true).animate({
              visibility: 'hidden'
            });
        }
      
	});


// スライダー
// トップページポートフォリオ
  $('.top_portfolio_slides').slick({
    autoplay: false,
		// autoplaySpeed: 3700,
		arrows: true,
    prevArrow: '<button type="button"  aria-lavel="Previous" class="top_portfolio_prev slide_arrow">prev</button>',
    nextArrow: '<button type="button" aria-label="Next" class="top_portfolio_next slide_arrow">next</button>',
  });



});