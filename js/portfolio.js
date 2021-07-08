$(function() {


    // パララックス
  // fullpage.jsに干渉してる。これ指定しないページはフルページ動作しない
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