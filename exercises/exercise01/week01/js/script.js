$(document).ready(function() {

  $('#click').click(function () {

    $(this).css('color','red');

  });

});

$(document).ready(function() {

  $('#hover').hover(function (){

    $(this).addClass('animate');
  },function (){

  });
});
