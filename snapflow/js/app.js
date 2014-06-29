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
			console.log(0); //for testing
			fibArr.push([0,0]);
			continue;
		}
		//arbitrarily add second #
		if(i === 1) {
			valOne = 0;
			valTwo = 1;
			console.log(1); //for testing
			fibArr.push([1,1]);
			continue;
		}
		//
		valAdd = valOne + valTwo;
		valOne = valTwo;
		valTwo = valAdd;
		console.log(valAdd); //for testing
		//add value to array as x,y coordinate
		fibArr.push([i, valAdd]);
	}
	return fibArr;
}

var fibonacci = fibonacci();
console.log(fibonacci); //for testing

//plot to chart.
$.jqplot('chart-div',  [fibonacci],
	{ title: 'Fibonacci Numbers',
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
var selectOptions = ["Bananas", "Oranges", "Apples", "Pears", "Kiwis", "Grapes"];
for(var i = 0; i < selectOptions.length; i++) {
	//convert array selection to string
	fruit = selectOptions[i].toString();
	//for testing
	console.log(fruit);
	//create <option> and append to DOM
	select.insertAdjacentHTML('beforeend', '<option value='+fruit+'>'+fruit+'</option>')
}


//function call when select is changed
$( "#select" ).change(function() {
	var selected = $(this).val();
	//print selected value
	$('#select-output').hide().html(selected).fadeIn();
});
