//init syntax highlighting
hljs.initHighlightingOnLoad();


//FUNCTION TO CALCULATE FIBONACCI NUMBERS
function fibonacci() {
	var valOne,
		valTwo,
		valvalAdd;
	var fibArr = [];

	//loop 50 fibonacci number iterations
	for(var i = 0; i <50; i++){
		//arbitrarily add first #
		if(i === 0) {
			valOne = 0;
			valTwo = 1;
			//for testing
			console.log(1);
			//add fibonacci number to array x,y coordinate
			fibArr.push([1,1]);
			continue;
		}
		//adjust variables up in sequence
		valAdd = valOne + valTwo;
		valOne = valTwo;
		valTwo = valAdd;
		//for testing
		console.log(valAdd);
		//add fibonacci number to array as x,y coordinate
		fibArr.push([i, valAdd]);
	}
	return fibArr;
}

var fibonacci = fibonacci();
//console.log(fibonacci); //for testing

//plot to chart. very nice hockey stick curve.
$.jqplot('chart-div',  [fibonacci],
	{ title: 'Fibonacci Numbers for 50 Iterations',
	  axes: {
	  			yaxis:{min:0, label:"Fibonacci Number"},
	         	xaxis:{min:0, label:"Iteration"}
	        },
	  series: [{color: 'seagreen'}]
});



//CREATE JAVASCRIPT SELECT LIST WITH JAVASCRIPT ONLY

//get div
var div = document.getElementById("select-div");
//create <select> and append to DOM
div.insertAdjacentHTML('afterend', '<select id="select"></select>')
//get select
var select = document.getElementById('select');
//list items
var selectOptions = ["Goldeneye", "Bomberman", "Super Smash Bros", "Mario Kart", "Star Wars: Shadows of the Empire", "Diddy Kong Racing", "Starfox", "Donkey Kong 64"];
for(var i = 0; i < selectOptions.length; i++) {
	//convert array selection to string
	game = selectOptions[i].toString();
	//create <option> and append to DOM
	select.insertAdjacentHTML('beforeend', '<option value='+game+'>'+game+'</option>')
}


//function call when select is changed
$( "#select" ).change(function() {
	//grab option as text
	var selected = $("#select option:selected").text();
	//print selected value
	$('#select-output').hide().html(selected).fadeIn();
});
