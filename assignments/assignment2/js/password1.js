//This javascript is responsible for all of the password interactions of my pages,
//This js also covers the random positioning of the door links in the cave hub page.

//The goal was to have the user search for clues around and within each page to figure out
//the hidden codeword in order to move forwards.

//Basically the page checks if the user has inputted the correct value in the input
//area and if it is correct the link to the next page becomes visable.

//We ready all of our functionality as the page loads
$(document).ready(function() {
  //We target our text input area and check its value after every keyup event.
    $("#pass1").keyup(function() {

  //If the value matches the predetermined codeword then the link to the next page appears.
        if (this.value == "easy") {
            $("#proceed1").css("display", "block");
        }

  //If the value doesn't match then nothing changes and the link remains hidden.
        else {
            $("#proceed1").css("display", "none");
        }
    });


  //The same function as above is repeated for every password page
  //The only changes we make are the names of the ids of the input areas that we target
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

    $("#finaldoor").keyup(function() {
        if (this.value == "DEUS EX MACHINA") {
            $("#proceed1").css("display", "block");
        }
        else {
            $("#proceed1").css("display", "none");
        }
    });

  //This function randomly places our door links in the cave randomly every time
  //the user reloads the page adding a need for exploration as well as some light
  //memorization of the icons to ensure they don't repeat a challenge.
    $(".cavelink").each(function () {
    var posX = randomIntegerInRange(0,$('#cave').width());
    var posY = randomIntegerInRange(0,$('#cave').height());

    $(this).css({
      top: posY + 'px',
      left: posX + 'px',
      });
    });


});


//We're borrowing the pseudo-random number generation code from earlier this semester.
function randomIntegerInRange(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;

}
