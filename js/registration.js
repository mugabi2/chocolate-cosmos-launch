$('#onebtn').click(function(e){
	e.preventDefault()
	$('body').addClass('step1');
	$('#first').removeClass('opacitee');
	$('#first').addClass('firstIn');
	$('#zero').addClass('opacitee0');
	$('#formone').addClass('formone');
	// $('#imgone').addClass('hlogone');
	// $('#hone').addClass('hlogone');
	// $('#hone4').addClass('hlogone');
	navNext();
});

$('#twobtn').click(function(e){
	e.preventDefault()
	$('body').addClass('step2');
	$('#second').removeClass('opacitee');
	$('#second').addClass('firstIn');
	$('#first').addClass('opacitee0');
	$('#formtwo').addClass('formone');
	// $('#imgone').addClass('hlogone');
	// $('#hone').addClass('hlogone');
	// $('#hone4').addClass('hlogone');
	navNext();
});

function navNext() {
   $('#navig')
		 .removeClass('active')
		 .next()
		 .addClass('active');
	 	$('#navig').removeClass('opacitee');
	 	$('#navig').addClass('formone ');
}
			 function timeFunction() {
					setTimeout(function(){
						// alert("After 5 seconds!");
						$('#formone').removeClass('opacitee');
						$('#formone').addClass('opacityfull');
					}, 2000);
			}
