$(function() {

  // ローディングアニメ
  var loader = $('#loader');
    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load',function(){
      loader.fadeOut();
    });
    setTimeout(function(){
      loader.fadeOut();
    },1500);




  // ドロワーメニュー開閉
  var header_nav_btn = $('#header_nav_btn'),
      header_nav = $('.header_nav');
  header_nav_btn.click(function(){
    $(this).toggleClass('header_nav_active');
    header_nav.stop(true).slideToggle(500);
  });


  // パララックス
  // fullpage.jsに干渉してる。これ指定しないページはフルページ動作しない
  // bg
  var bg = document.getElementById('bg');
  var parallaxInstance = new Parallax(bg, {
    relativeInput: true
  });

  // top_fv
  var top_fv = document.getElementById('ttl_parallax');
  var parallaxInstance = new Parallax(top_fv, {
    relativeInput: true
  });
  // パララックスここまで



  // フルページスクロール
	$('#ptf_fullpage').fullpage({
		autoScrolling:true,
		menu: '#ptf_menu',
		anchors: ['ptf_01', 'ptf_02', 'ptf_03', 'ptf_contact'],
    onLeave: function(index, destination, direction){
      var ttl = $('.ptf_fix_ttl'),
          windowWidth = $(window).width(),
          windowHeight = $(window).height();
          

        if(destination == 4 && direction =='down'){
            //セクション4へ下にスクロールしたとき実行
            $('footer').stop(true).css({
              bottom: '20px',
              transition: '.8s'
            });
            if(windowWidth > 1024 || windowWidth > 768 && windowHeight < 768){
              ttl.stop(true).css({
                top: '4vh',
                transition: 'top .65s'
              });
            } else {
              ttl.stop(true).css({
                top: '-3vh',
                transition: 'top .65s'
              });
            }
        } else if(index == 4 && direction =='up'){
          //セクション4を上にスクロールしたときに実行
          $('footer').stop(true).css({
            bottom: '-50px',
            transition: '.3s'
          });
          if(windowWidth > 1024 || windowWidth > 768 && windowHeight < 768){
            ttl.stop(true).css({
              top: '24vh',
              transition: 'top .65s'
            });
          } else {
            ttl.stop(true).css({
              top: '15vh',
              transition: 'top .65s'
            });
          }
        }
    }
	});




})