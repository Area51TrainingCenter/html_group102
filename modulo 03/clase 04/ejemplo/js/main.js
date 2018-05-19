$(window).load(function(){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>40){
			console.log("debes fijar el menu");
			//$(".header-site").addClass("fixed-menu");
		$(".header-site").addClass("ocultar-menu");

		$(".header-site2-off").addClass("show");
		}
		else{
			$(".header-site").removeClass("ocultar-menu");
			//$(".header-site").removeClass("fixed-menu");
			$(".header-site2-off").removeClass("show");
		}


		



	})
})