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
