/*

ScrollMagic with TweenMax
Pippin Barr

A basic example of using ScrollMagic with TweenMax.

Uses:

ScrollMagic
http://scrollmagic.io/

TweenMax
https://greensock.com/tweenmax

*/

$(document).ready(function() {

  // Create a ScrollMagic Controller so we can use the library
  var controller = new ScrollMagic.Controller();

  // Create a new scene based on the trigger div
  // Use a duration so that the animations are tied to scroll speed
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 400,
  });

  // Now we can set our tween to animate any CSS properties we want
  // to change while the user scrolls through our trigger.
  // Note that in setTween '#trigger' refers to the element we want
  // to be AFFECTED by the animation - it could be a different element
  scene.setTween("#face", 0.5, {
    "width": "1200px",
    "height": "400px",
    // border: "100px solid",
    // transform: "rotateY(180deg)",
    // opacity: "0.25",
    // "-webkit-text-stroke": "20px"
  });

  scene.triggerHook(0);

  // Add the debugging indicators so we can see what's happening
  // scene.addIndicators();

  // Add our scene to the controller so it actually does something
  scene.addTo(controller);


  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: 400,
  });

  scene2.setTween("#face", 0.5, {
    "width": "800px",
    "height": "800px",
    // border: "100px solid",
    // transform: "rotateY(180deg)",
    // opacity: "0.25",
    // "-webkit-text-stroke": "20px"
  });

  scene2.triggerHook(0);

  // Add the debugging indicators so we can see what's happening
  // scene2.addIndicators();

  // Add our scene to the controller so it actually does something
  scene2.addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    duration: 400,
  });

  scene3.setTween("#face", 0.5, {
    "width": "400px",
    "height": "1200px",
    // border: "100px solid",
    // transform: "rotateY(180deg)",
    // opacity: "0.25",
    // "-webkit-text-stroke": "20px"
  });

  scene3.triggerHook(0);

  // Add the debugging indicators so we can see what's happening
  // scene3.addIndicators();

  // Add our scene to the controller so it actually does something
  scene3.addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    duration: 400,
  });

  scene4.setTween("#face", 0.5, {
    "width": "800px",
    "height": "800px",
    // border: "100px solid",
    // transform: "rotateY(180deg)",
    // opacity: "0.25",
    // "-webkit-text-stroke": "20px"
  });

  scene4.triggerHook(0);

  // Add the debugging indicators so we can see what's happening
  // scene4.addIndicators();

  // Add our scene to the controller so it actually does something
  scene4.addTo(controller);
});
