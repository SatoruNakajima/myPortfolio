
var scene = document.getElementById('bg');
var parallaxInstance = new Parallax(bg, {
  relativeInput: true,
});


$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});
});