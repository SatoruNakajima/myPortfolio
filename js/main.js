$(function() {

  // ローディングアニメ
  var loader = $('#loader');
  $(window).on('load',function(){
    //ページの読み込みが完了したらアニメーションを非表示
    loader.fadeOut();
    
    // var loadVh = $(window).height();
    //   // スマホのアドレスバー対策 bgサイズ固定
    //   if (window.matchMedia('(max-width: 500px)').matches) {
    //     $('.theme_bg').css({
    //       height: loadVh + 'px'
    //     });
    //   };　できない！！！！！！！！！！
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


  // クリックで少しスクロールして消えるスクロールボタン
  $('#scroll_down').each(function () {
    var win = $(window),
        btn = $(this);

    win.on('scroll', function () {
      if(win.scrollTop() > 0){
        btn.css({
          opacity: 0,
          transition: '.3s'
        });
      } else {
        btn.css({
          opacity: 1,
          transition: '.3s'
        });
      }
    });

    var el = scrollableElement('html', 'body');
    btn.on('click', function (event) {
      event.preventDefault();
      $(el).animate({
        scrollTop: 300
      },400);
    });
  });
  // スクロールボタンここまで


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

    // スムーズスクロール
    var el = scrollableElement('html', 'body');

    btn.on('click', function (event) {
      event.preventDefault();
      $(el).animate({
        scrollTop: 0
      }, 500);
    });
  });
  // トップへ戻るボタンここまで


  // scrollTopが利用できる要素を検出する関数
  function scrollableElement () {
    var i, len, el, $el, scrollable;
    for (i = 0, len = arguments.length; i < len; i++) {
      el =arguments[i],
      $el = $(el);
      if ($el.scrollTop() > 0) {
        return el;
      } else {
        $el.scrollTop(1);
        scrollable = $el.scrollTop() > 0;
        $el.scrollTop(0);
        if (scrollable) {
          return el;
        }
      }
    }
    return [];
  }

})