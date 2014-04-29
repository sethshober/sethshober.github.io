    var editor = $("#editor");
    var display = $("#display");
    var title = $("#title");

    $("#save").click(function(){
        //put editor, display, and title content in variables
        var editorContent = editor.html();
        var displayContent = display.html();
        var titleContent = title.text();

        //create new key values and store in localStorage
        localStorage.editorContent = editorContent;
        localStorage.displayContent = displayContent;
        localStorage.titleContent = titleContent;
    });

    //if editor content exists in localStorage, load it
    if(localStorage.getItem("editorContent")) {
        editor.html(localStorage.getItem("editorContent"));
    }

    //if display content exists in localStorage, load it
    if(localStorage.getItem("displayContent")) {
        display.html(localStorage.getItem("displayContent"))
    }

    //if title content exists in localStorage, load it
    if(localStorage.getItem("titleContent")) {
        title.text(localStorage.getItem("titleContent"))
    }

    //clear key values in localStorage individually and reload page
    $("#reset").click(function(){
        localStorage.removeItem("editorContent");
        localStorage.removeItem("displayContent");
        localStorage.removeItem("titleContent");
        location.reload();
    });