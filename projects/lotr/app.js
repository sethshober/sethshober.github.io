$(document).ready(function () {
  var $submit = $("#submit");
  var $form = $('form');
  var $alert = $("#alert");
  var $name = $("#name");
  var $email = $("#email");
  var $message = $("#message");
  
    //add disabled class to button
    $submit.addClass("disabled");
  
    //does name have a value
    function isNameValid() {
      return $name.val().length > 0;
    }
    
    //does email have a value in email format
    function isEmailValid() {
        var email = $email.val();
        var format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return format.test(email) && email.length > 0;
    }
  
    //does message have a value
    function isMessageValid() {
      return $message.val().length > 0;
    }
  
    //do all fields have a valid value
    function canRemoveDisabled() {
      return isNameValid() && isEmailValid() && isMessageValid(); 
    }

    //remove disabled class
    function removeDisabled() {
        $submit.removeClass("disabled");
    }
  
    //bind keyup to form and if all fields pass remove disabled class from submit button, else add disabled  
    $("#lotrForm").on("keyup", function() {
      if(canRemoveDisabled()) {
        removeDisabled();
      } else {
        $submit.addClass("disabled");
        }
    });
  
  
  //jQuery validation plugin
  $('#lotrForm').validate({ //initialize
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required:true
            }
        },
    
        submitHandler: function (form) {
            //fade out form and fade in thank you message
            $form.fadeOut("fast", function() {
               $alert.fadeIn("fast");
            });
        }
    });
  
    //edit error message
    jQuery.extend(jQuery.validator.messages, {
      email: "Please enter a valid realm."
    });
  
  
        setInterval(function() {
            var val = 1;
            if (Math.random() > 0.5) {
                val = Math.floor((Math.random()*2)+1);
            }
                
            $(".flickr").css("text-shadow", "white 0 0 " + val + "px");
     }, 2000);
});
