// パララックス
// bg
var bg = document.getElementById('bg');
var parallaxInstance = new Parallax(bg, {
  relativeInput: true
});

// top_fv
var top_fv = document.getElementById('top_fv');
var parallaxInstance = new Parallax(top_fv, {
  relativeInput: true
});
// パララックスここまで

// フルページスクロール
$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		menu: '#top_menu',
		anchors: ['top_fv', 'top_portfolio', 'top_about', 'top_contact']
	});
});

// スライダー
// トップページポートフォリオ
$(document).ready(function(){
  $('.top_portfolio_slides').slick({
    autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
    prevArrow: '<button type="button"  aria-lavel="Previous" class="top_portfolio_prev slide_arrow">prev</button>',
    nextArrow: '<button type="button" aria-label="Next" class="top_portfolio_next slide_arrow">next</button>',
  });
});