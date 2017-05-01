//On the page the user is presented with a link but is asked to wait a minute
//as the next page 'isn't quite ready yet'
//The idea was to have a link that if clicked before a minute had elapsed,
//it would sent the user to an unfinished page,
//however the patient among them would be able to move forward

//Once the window is open the user must wait a full minute (or 60000 milliseconds)
//before the div and link are replaced by a working link.

//This is accomplished in a cheat-y way
//Two identical divs are placed directly on top of each other with different z-index values
//the div with the working link is placed in front of the wrong link but is hidden as a default
//Only after a minute has passed is the working link shown and available to click.

window.setTimeout(function(){
  $('.go').css("visibility", "visible");
}, 60000);
