$(function() {

// ローディングアニメ
  var loader = $('#loader');
    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load',function(){
      loader.fadeOut();
    });




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
    onLeave: function(index, destination, direction){
            if(destination == 4 && direction =='down'){
                //セクション4へ下にスクロールしたとき実行
                $('footer').stop(true).css({
                  bottom: '20px',
                  transition: '.8s'
                });
            }
            else if(index == 4 && direction =='up')
            //セクション4を上にスクロールしたときに実行
            $('footer').stop(true).css({
              bottom: '-50px',
              transition: '.3s'
            });
        }
	});


	$('#ptf_fullpage').fullpage({
		autoScrolling:true,
		menu: '#ptf_menu',
		anchors: ['top_01', 'top_02', 'top_03', 'top_footer'],
    onLeave: function(index, destination, direction){
            if(destination == 4 && direction =='down'){
                //セクション4へ下にスクロールしたとき実行
                $('footer').stop(true).css({
                  bottom: '20px',
                  transition: '.8s'
                });
            }
            else if(index == 4 && direction =='up')
            //セクション4を上にスクロールしたときに実行
            $('footer').stop(true).css({
              bottom: '-50px',
              transition: '.3s'
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