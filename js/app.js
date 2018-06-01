(function(){
	var html = document.documentElement;
	var htmlWidth = html.getBoundingClientRect().width;
	html.style.fontSize = htmlWidth/15 +"px";
	
	document.addEventListener('touchstart',function(ev){
		ev.preventDefault();
	});
	
	var txt = document.getElementById('txt');
	txt.addEventListener('touchstart',function(ev){
		ev.stopPropagation();
	});

})()