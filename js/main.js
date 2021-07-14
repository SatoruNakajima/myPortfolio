$(function() {

  // ローディングアニメ
  var loader = $('#loader');
    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load',function(){
      loader.fadeOut();
    });
    setTimeout(function(){
      loader.fadeOut();
    },800);




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
  // パララックスここまで


  // ページ途中で画面固定されるトップへ戻るボタン
  $('#back_to_top').each(function () {
    var win = $(window),
        btn = $(this),
        btnPosi = btn.offset().top;

    win.on('scroll', function () {
      if (win.scrollTop() + win.height() > btnPosi) {
        btn.addClass('btn_fix');
      } else {
        btn.removeClass('btn_fix');
      }
    });

    var scrollEle = scrollableElement('html', 'body');

    btn.on('click', function (event) {
      event.preventDefault();
      scrollEle.animate({
        scrollTop: 0
      }, 300);
    });
  });

})