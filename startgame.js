 $('#on-button').click(function(){
      $('#welcome').css("visibility", "visible")     
})

 class Pokemon {
	constructor(pokemon){
	this.hp = pokemon.stats[5].base_stat;
	this.attack = pokemon.stats[4].base_stat;
	this.defense = pokemon.stats[3].base_stat;
	this.abilities = pokemon.abilities[0].ability.name;
	}
}

function abilities(pokemon){

	let arr = [];
	for(let i=0; i<pokemon.abilities.length; i++){
		arr.push(pokemon.abilities[i].ability.name);
	}
	return arr;
}


function abilities(pokemon){

	let arr = [];
	for(let i=0; i<pokemon.abilities.length; i++){
		arr.push(pokemon.abilities[i].ability.name);
	}
	return arr;
}



  $.ajax({

  		type: "GET",

	  	url: "https://pokeapi.co/api/v2/pokemon/kakuna",

		  	success: function(pokemon){
		  		// console.log(new Pokemon(pokemon))

		  			$('#button2').click(function(){

		  			$('#welcome').css("visibility", "hidden")

		  			$('#kakuna-image').css("visibility", "visible")

		  			$('#typhlosion-image').css("visibility", "hidden")
		  			$('#masquerain-image').css("visibility", "hidden") 

		  			$('#name').text(pokemon.name).css("text-align", "center")
		  		    $('#abilities').text(abilities(pokemon)).css("text-align", "center")

					})
		  	},

		  	error: function(error){
		  		console.log("There was an error in your function!")
		  	}


  })//end of ajax request//



  $.ajax({

  		type: "GET",

	  	url: "https://pokeapi.co/api/v2/pokemon/typhlosion",

		  	success: function(pokemon){
		  		// console.log(new Pokemon(pokemon))

		  			$('#button3').click(function(){

		  			$('#welcome').css("visibility", "hidden")  


		  			$('#typhlosion-image').css("visibility", "visible")

		  			$('#kakuna-image').css("visibility", "hidden")
		  			$('#masquerain-image').css("visibility", "hidden") 

		  			$('#name').text(pokemon.name).css("text-align", "center")
		  		    $('#abilities').text(abilities(pokemon)).css("text-align", "center")

					})
		  	},

		  	error: function(error){
		  		console.log("There was an error in your function!")
		  	}


  })//end of ajax request//



  $.ajax({

  		type: "GET",

	  	url: "https://pokeapi.co/api/v2/pokemon/masquerain",

		  	success: function(pokemon){
		  		// console.log(new Pokemon(pokemon))

		  			$('#button4').click(function(){

		  			$('#welcome').css("visibility", "hidden")  


		  			$('#masquerain-image').css("visibility", "visible")

		  			$('#typhlosion-image').css("visibility", "hidden")
		  			$('#kakuna-image').css("visibility", "hidden") 

		  			$('#name').text(pokemon.name).css("text-align", "center")
		  		    $('#abilities').text(abilities(pokemon)).css("text-align", "center")
		  		 
					})
		  	},

		  	error: function(error){
		  		console.log("There was an error in your function!")
		  	}


  })//end of ajax request//