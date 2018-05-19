$("#usuarios").click(function(){
	$(".contenido").html("");
	var url="https://jsonplaceholder.typicode.com/users";
	//$.getJSON("url","funcion al finalizar")
	$.getJSON(url,function(data){
		for (var i = 0; i < 10; i++) {
			var item=data[i];
			console.log(item.id)
			console.log(item.name)
			console.log(item.username)
			console.log(item.address.geo.lat)
			console.log(item.address.geo.lng)
			$(".contenido").append(`<article> <h2>`+item.name+`</h2> <small>`+item.username+`</small></article>`)
			
		}
		
		
	})
})