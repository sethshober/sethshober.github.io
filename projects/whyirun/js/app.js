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

// $('.heart').click(function() {
// 	$(this).removeClass("heart").addClass("hearted");
// })

// $('.hearted').click(function() {
// 	$(this).removeClass("hearted").addClass("heart");
// })


//share button add post to post listing
function addPost () {
	if($('#share').val().length < 141){
		post = $('#share').val();
		
		//clear post and reset count
		$('#share').val('');
		$('#counter').html('0');

		var moveTo = ($('#posts').offset().top) - 50;
		$('html body').animate({scrollTop: moveTo}, function(callback) {
			$('#posts').prepend("<div id='newPost'>"+post+"</div><span class='heart glyphicon glyphicon-heart' id='newHeart'></span><hr>");
			$('#newPost').hide().toggle('slide');
		});

	} else {
		$('#share').effect('shake', {times: 2, distance: 10});
	}

};
