//hide save and reset buttons
$("#save, #reset").hide();
//slide down note animation
$("#note").hide().slideDown(800, function(){
    //fade in save and reset buttons
    $("#save, #reset").fadeIn(function(){
        //set cursor focus to note
        $("#note").focus();
    });
});

//CHANGE COLOR

$(".color").click(function() {
    var $divColor = $(this).css("background");
    $(".note").css("background", $divColor);
});

// SAVING TO LOCALSTORAGE

var $note = $("#note");
var $title = $("#title");

$("#save").click(function(){
    //put editor, display, and title content in variables
    var noteContent = $note.html();
    var titleContent = $title.text();

    //create new key values and store in localStorage
    localStorage.noteContent = noteContent;
    localStorage.titleContent = titleContent;
});

//if display content exists in localStorage, load it
if(localStorage.getItem("noteContent")) {
    $note.html(localStorage.getItem("noteContent"))
}

//if title content exists in localStorage, load it
if(localStorage.getItem("titleContent")) {
    $title.text(localStorage.getItem("titleContent"))
}

//clear key values in localStorage individually and reload page
$("#reset").click(function(){
    localStorage.removeItem("noteContent");
    localStorage.removeItem("titleContent");
    location.reload();
});