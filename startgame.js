 $('#on-button').click(function(){
      $('#welcome').css("visibility", "visible")     
})

//  class Pokemon {

// 	constructor(hp, attack, defense, abilities){
// 	this.hp = hp(pokemon);
// 	this.attack = attack(pokemon);
// 	this.defense = defense(pokemon);
// 	this.abilities = abilities(pokemon);
// 	}
// }

  $('#on-button').click(function(){
      $('#welcome').css("visibility", "visible")     
})

  $.ajax({

	  	type: "GET",

	  	url: "http://pokeapi.co/api/v2/pokemon/kakuna",

		  	success: function(kakuna){
		  		console.log(kakuna)
		  	},

		  	error: function(){

		  	}


  })//end of ajax request//