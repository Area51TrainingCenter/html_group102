$("#usuarios").click(function(){
	$(".contenido ul").html("");
	var url="https://jsonplaceholder.typicode.com/users";
	//$.getJSON("url","funcion al finalizar")
	$.getJSON(url,function(data){
		for (var i = 0; i < 10; i++) {
			var item=data[i];
			/*console.log(item.id)
			console.log(item.name)
			console.log(item.username)
			console.log(item.address.geo.lat)
			console.log(item.address.geo.lng)*/
			$(".contenido ul").append(`<li onclick="cargardata(this)" class="item-usuario" data-lat="`+item.address.geo.lat+`" data-lng="`+item.address.geo.lng+`">
				<h2>`+item.name+`</h2>
				<small>`+item.username+`</small>
			</li>`)

		}
		

		/*$(".item-usuario").click(function(){
			alert("click");
		})*/


		
	}) // termina el metodo getjson

})

function cargardata(valor){

	console.log($(valor).attr("data-lng"))
	console.log($(valor).attr("data-lat"))
}
