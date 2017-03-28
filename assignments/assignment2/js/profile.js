//This page is an evolution of my midterm personal page.
//Now not only do we allow users to choose from a random cycling assortment
//of facial features but we allow them to place and resize those features on the face.

//As the page loads we allow our various facial features to be manipulated by the user.
$(document).ready(function() {
  $( function() {
    //We apply jquery UI's resizable functionality to all of the face parts.
    $( ".facepart" ).resizable();
  } );

  $( function() {
    //We also apply jquery UI's draggable functionality to all of the face parts.
      $( ".facepart" ).draggable();
    } );
});
