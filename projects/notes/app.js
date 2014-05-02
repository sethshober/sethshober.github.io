$("#save, #reset").hide();
$("#note").hide().slideDown(800, function(){
    $("#save, #reset").fadeIn(function(){
        $("#note").focus();
    });
});

$("#pink").on("click", function() {
    $(".note").css("background","pink");
});

$("#green").on("click", function() {
    $(".note").css("background","seagreen");
});

 $("#gray").on("click", function() {
    $(".note").css("background","#eee");
});

$("#blue").on("click", function() {
    $(".note").css("background","lightblue");
});

$("#orange").on("click", function() {
    $(".note").css("background","orange");
});

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