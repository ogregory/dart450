//This js file is meant to create a kind of 'dexterity challenge' for the user
//In order to progess the user must click on the div, however the div is 'flying'
//by the viewport very quickly. We also want to randomize the speed and height at which
//the div will fly by in order to up the difficulty of the challenge.

//When the page loads it also loads our looping function
$(document).ready(function() {

    function loop() {
        //Since the function will be looping many times, we begin each loop by resetting
        //the divs starting position by messing with its css properties.
        //It will always begin off the screen and at a random height.
        $('#catchme').css({right:-500,
          top: Math.floor((Math.random()*500)+5),
        });

        //We then animate it to fly across and past the viewport
        //However we give it a random duration in order to make
        //its speed a little more unpredictable.
        $('#catchme').animate ({
            right: '+=3000',
        }, Math.floor((Math.random()*800)+200) , 'linear', function() {
            loop();
        });
    }

    //Finally we activate the function again in order to cause it to loop indefinitely.
    loop();
 });
