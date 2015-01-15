  $(document).ready(function() {

  	var color = 'white'
  	var colors = 'white green red blue yellow'

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })



  	$('.box').on('click', function() {
  		$(this).addClass(color);
  	});

  	$('.box').on('dblclick', function() {
  		$(this).removeClass(colors);
  	});

  	$('#reset').on('click', function() {
  		$('.box').removeClass(colors);
  	});

 	  $('#red').on('click', function() {
	    color = 'red';
  	})

 	  $('#blue').on('click', function(){
 	  	color = 'blue';
 	  })

 	  $('#yellow').on('click', function(){
 	  	color = 'yellow';
 	  })

 	  $('#white').on('click', function() {
 	  	color = 'white';
 	  })

 	  $('#green').on('click', function() {
 	  	color = 'green';
 	  })







  });


