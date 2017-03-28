
$(document).ready(function() {
    $("#pass1").keyup(function() {
        if (this.value == "easy") {
            $("#proceed1").css("display", "block");
        }
        else {
            $("#proceed1").css("display", "none");
        }
    });

    $("#pass2").keyup(function() {
        if (this.value == "passwordium1") {
            $("#proceed1").css("display", "block");
        }
        else {
            $("#proceed1").css("display", "none");
        }
    });

    $("#pass3").keyup(function() {
        if (this.value == "NoOneLooksHere") {
            $("#proceed1").css("display", "block");
        }
        else {
            $("#proceed1").css("display", "none");
        }
    });
});
