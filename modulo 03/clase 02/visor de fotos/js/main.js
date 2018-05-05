$(".lista-imagenes li").click(verfoto)

function verfoto(){
	$(".lista-imagenes li").removeClass("activo");
	$(this).addClass("activo");
	var ruta=$(this).attr("data-ruta");
	$("#foto-principal").attr("src",ruta);
}

$(".nav-rigth").click(function(){
	var ele=$(".activo").next();
	var ruta_siguiente=$(".activo").next().attr("data-ruta");
	console.log(ruta_siguiente);
	if(ruta_siguiente==undefined){
		$(".lista-imagenes li").removeClass("activo");
		$("#primerelemento").addClass("activo");
		var ruta_primero=$("#primerelemento").attr("data-ruta");
		$("#foto-principal").attr("src",ruta_primero);
	}
	else{
		$("#foto-principal").attr("src",ruta_siguiente);
		$(".lista-imagenes li").removeClass("activo");
		$(ele).addClass("activo");
	}
	
})