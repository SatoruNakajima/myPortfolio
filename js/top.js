$(function() {



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