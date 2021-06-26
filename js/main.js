
var scene = document.getElementById('bg');
var parallaxInstance = new Parallax(bg, {
  relativeInput: true
});


$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		anchors: ['fv', 'portfolio', 'about', 'contact'],
		menu: '#top_menu'
	});
});