/*====================================
=            ON DOM READY            =
====================================*/


$(document).ready(function(){
	$('#share').focus();

	$('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
        $('#bar').addClass('bar');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
        $('#bar').removeClass('bar');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

//escape key closes Nav
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($('#site-wrapper').hasClass('show-nav')) {
            // Assuming you used the function I made from the demo
            toggleNav();
        }
    } 
});

// show Nav button
// $(window).scroll(function() {
// 	var distanceFromTop = $(this).scrollTop();
// 	if(distanceFromTop > 25) {
// 		$('#menu-button').removeClass('hidden');
// 	} else {
// 		$('#menu-button').addClass('hidden');
// 	}
// });



	$('#share').on('focus', function(){
		$('#panel-share').addClass('highlight');
	}).on('focusout', function(){
		$('#panel-share').removeClass('highlight');
	})

	$('#share').keyup(function() {
		//count share characters and bind to counter display
			var count = $(this).val().length;
			$('#counter').html(count);

			//change counter color
			if(count > 140 ) {
			$('#counter').css("color", "red");
		} else {
			$('#counter').css("color", "green");
		}
	});

	//switch out heading (this is the vision)
	// var headingWords = [" I Backpack", " I Love My Dog", " I Bake", " I Play the Ukele", " I'm a Cheese Taster", " I'm a Mohawk Enthusiast"];
	// setInterval(function(){
	// 	if(true){
	// 		var changeWord = headingWords[Math.floor(Math.random()*headingWords.length)];	
	// 		$("#changeWord").html(changeWord).hide().fadeIn();
	// 	}
	// }, 5000);


	// $('.heart').on("click", function() {
	// $(this).removeClass("heart").addClass("hearted");
	// })

	// $('.hearted').on("click", function() {
	// 	$(this).removeClass("hearted").addClass("heart");
	// })


	
	//share button add post to post listing
	function addPost () {
		postlen = $('#share').val().length;
		if(postlen > 0 && postlen < 141){
			var post = $('#share').val();
			
			//clear post and reset count
			$('#share').val('');
			$('#counter').html('0');

			$('.post-list').prepend("<div class='post' id='newPost'><p class='text-center post-content'>" + post + "</p><span class='hearted glyphicon glyphicon-heart'></span></div>");
			//$('#newPost').hide().fadeIn();

			var moveTo = ($('.post-list').offset().top) - 50;
			$('html body').animate({scrollTop: moveTo});

		} else {
			$('#share').effect('shake', {times: 2, distance: 10});
		}

	};

	//show like button on desktop and large desktop
	if($(window).width() > 992){
		$(".post").hover(  
		        function(){
		        	$('.hearted').stop(true,true).animate({top: 25}, 100);
		        },  
		        function(){
		        	$('.hearted').stop(true,true).animate({top: -20}, 100);
			});
		}






