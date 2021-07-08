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


})