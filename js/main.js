
var scene = document.getElementById('bg');
var parallaxInstance = new Parallax(bg, {
  relativeInput: true
});


$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		menu: '#top_menu',
		anchors: ['top_fv', 'top_portfolio', 'top_about', 'top_contact']
	});
});