//This js file is meant to create a kind of 'dexterity challenge' for the user
//In order to progess the user must click on the div, however the div is 'flying'
//by the viewport very quickly. We also want to randomize the speed and height at which
//the div will fly by in order to up the difficulty of the challenge.

//We also have programmed a small gag insulting the user based on how long it takes them to catch the div.

//When the page loads it also loads our gag + looping function
$(document).ready(function() {

  //This gag involves the narrator counting the # of seconds the user takes.

  //So first we need a counter variable to count up.
  var counter = 0;

  //We have the page add 1 to the counter variable every second (or 1000 milliseconds)
  setInterval(function () {
    ++counter;
  }, 1000);

  //We then need to feed that number into our html every second

  //So this function updates our html to include the new #
  function myTimer() {

     document.getElementById("changeText").innerHTML = counter;
 }

  //And this activates our html updating function every second
  setInterval(function(){ myTimer() }, 1000);





 //Then we move onto the challenge portion of the page.
    function loop() {
        //Since the function will be looping many times, we begin each loop by resetting
        //the divs starting position by messing with its css properties.
        //It will always begin off the screen and at a random height.
        //In this example the *500 indicates the high-end of the random number being generated
        //The 5 afterwards is the low-end
        $('#catchme').css({right:-500,
          top: Math.floor((Math.random()*500)+5),
        });

        //We then animate it to fly across and past the viewport
        //However we give it a random duration in order to make
        //its speed a little more unpredictable.
        $('#catchme').animate ({
            right: '+=3000',
        }, Math.floor((Math.random()*1000)+200) , 'linear', function() {
            loop();
        });
    }

    //We activate the function again in order to cause it to loop indefinitely.
    loop();


 });
