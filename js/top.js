$(function() {

  // フルページスクロール
	$('#top_fullpage').fullpage({
		autoScrolling:true,
		menu: '#top_menu',
		anchors: ['top_fv', 'top_portfolio', 'top_about', 'top_contact'],
    onLeave: function(index, destination, direction){
            if(destination == 4 && direction =='down'){
                //セクション4へ下にスクロールしたとき実行
                $('footer').stop(true).css({
                  bottom: '20px',
                  transition: '.8s'
                });
            }
            else if(index == 4 && direction =='up'){
              //セクション4を上にスクロールしたときに実行
              $('footer').stop(true).css({
                bottom: '-50px',
                transition: '.3s'
              });
            }
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