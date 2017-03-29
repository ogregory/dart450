/*

Hide and Seek
Pippin Barr

A page with a hidden circle that you have to find through sound cues
based on mouse movement.

Inspired by:
http://flockingjs.org/demos/interactive/html/playground.html#freq_mod

Uses:

Flocking.js
http://flockingjs.org/

*/


// The synthesiser that will play our sound cues
var synth;


$(document).ready(function() {

$(".image").mouseover(function() {

  // To use flocking we have to initialise the (sound) environment
  var environment = flock.init();

  // ... and start it.
  environment.start();

  // Now we create our synth that will play back a simple sine wave
  // which we will modulate the frequency of based on mouse position
  synth = flock.synth({
    synthDef: {
      id: "carrier", // A unique id
      ugen: "flock.ugen.sin", // The kind of synth
      freq: 440 // The frequency of the tone
    },
  });

});
});
