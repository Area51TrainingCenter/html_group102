$("#usuarios").click(function(){
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
		}
		
		
	})
})