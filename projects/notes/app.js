var $note = $("#note");
var $title = $("#title");
var $save = $("#save");
var $reset = $("#reset");

// LOAD ANIMATIONS

//hide save and reset buttons
$("#save, #reset").hide();
//slide down note animation
$note.hide().slideDown(800, function(){
    //fade in save and reset buttons
    $("#save, #reset").fadeIn(function(){
        //set cursor focus to note
        $note.focus();
    });
});


//CHANGE COLOR

$(".color").click(function() {
    var $divColor = $(this).css("background");
    $note.css("background", $divColor);
    $note.focus();
});


// SAVING TO LOCALSTORAGE

var note = {};

$save.click(function(){

    note = {
        "titleText": $title.text(),
        "noteText": $note.html(),
        "noteColor": $note.css("background")
    };
    
    //create new key values and store in localStorage. convert object to string.
    localStorage.setItem('note', JSON.stringify(note));

});

//if note exists in localStorage get it and parse from string to object
if(localStorage.getItem('note')) {

    noteString = localStorage.getItem('note');
    note = JSON.parse(noteString);
    $title.text(note.titleText);
    $note.html(note.noteText);
    $note.css("background", note.noteColor);
}


//clear key values in localStorage and reload page
$reset.click(function(){

    localStorage.removeItem('note');
    location.reload();

});