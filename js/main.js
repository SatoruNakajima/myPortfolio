$(function() {


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
		anchors: ['top_fv', 'top_portfolio', 'top_about', 'top_contact']
	});

// スライダー
// トップページポートフォリオ
  $('.top_portfolio_slides').slick({
    autoplay: true,
		autoplaySpeed: 3700,
		arrows: true,
    prevArrow: '<button type="button"  aria-lavel="Previous" class="top_portfolio_prev slide_arrow">prev</button>',
    nextArrow: '<button type="button" aria-label="Next" class="top_portfolio_next slide_arrow">next</button>',
  });


});