$(document).ready(function() {
  
 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

 $('form').submit(function(evt){
 	
 	var $search = $('#search');
 	var $submit = $('#submit');
 	var searchString = $search.val();
	//prevent submit
 	evt.preventDefault();

 	//AJAXs
 	$.getJSON(
 		flickerAPI,
 		{
 			tags: searchString,
 			format: "json"
 		},
 		function(data){
 			var photoHTML = '';
 			//if there's stuff
 			if(data.items.length > 0) {
 				//display them
 				$.each(data.items, function(i,photo){
 					//for each photo returned fill div with it
 					photoHTML += "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>";
 					photoHTML += "<img src=" + photo.media.m + " class='img-thumbnail photo'></div>";
 				}); // end each
 					
 				} else {
 					//if none found tell user
 					photoHTML = "<p>No photos found matching" + searchString + "</p>";
 				}
 				// add to DOM
 				$('#photos').html(photoHTML);


 	}); // end getJSON

 }); // end submit

}); // end ready