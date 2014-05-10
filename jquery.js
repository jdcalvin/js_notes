//descendant selector
// $("#parent .child") Selects all children

//child selector
//$("#parent > .child") Selects only direct child, not childrens children

//psuedo class
//$("#parent .child:first") -or- :last, :odd, :even

//===================================================================
//TRAVERSING THE DOM
//===================================================================
$("#destinations li"); //NO - Works but slow
$("#destinations").find("li"); //YES - Querying DOM is faster

$("li").first(); // works for other n objects

//WALKING THE DOM
$("li").first().next().prev().next();

//WALK UP THE DOM
$("li").first().parent();

//WALK DOWN THE DOM
$("#destinations").children("li") 
//this also works to select direct descents ie #destinations > li

//===================================================================
//WORKING WITH THE DOM
//===================================================================

//Appending to the DOM and REMOVING
$(document).ready(function(){
	var price=$('<p>From 399.99</p>');
	$('.vacation').append(price);
	$('button').remove();
});
//-or- .appendTo, .prepentTo, .insertAfter, .insertBefore

//===================================================================
//ACTING ON INTERACTION
//===================================================================
//event handler

$(document).ready(function(){
	//function runs when DOM is ready
});
$(document).ready(function(){
	$('button').on('click', function(){
		var price = $('<p>From $399.99</p>');
		$('.vaction').append(price);
		$('button').remove();
	})
});

//===================================================================
//REFACTOR USING TRAVERSING
//===================================================================
//INTRO TO $(this)
$(document).ready(function(){
	$('button').on('click', function(){
		var price = $('<p>From $399.99</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove();

	})
});
//===================================================================
//Data attributes to HTML
//===================================================================

//Examle HTML
<li class="vacation" data-price="399.99">

$('vacation').first().data('price'); // .data(<name>,<value>)
$(document).ready(function(){
	$('button').on('click', function(){
		var amount = vacation.data('price');
		var price = $('<p>From $'+amount+'</p>');
		var vacation = $(this).closest('vacation');
		vacation.append(price);
		$(this).remove();

	})
});

//specifying elements EVENT DELEGATION
$('vacation').on('click', 'button', function(){}); 
//$(this) = 'button' inside 'vacation'

//===================================================================
//FILTERING HTML
//===================================================================
$('#filters').on('click', '.onsale-filter',function(){
		$('highlighted').removeClass('highlighted'); 
		//removes class before applying (otherwise effects all elements)
		$('vacation').filter('.onsale').addClass('highlighted');

	});
//===================================================================
//LISTENING
//===================================================================
$(document).ready(function(){
	//ensure event is wrapped in doc ready
	$('.confirmation').on('click', 'button', function() {
		$(this).closest('.confirmation').find('.ticket').slideDown();
	});
});
//===================================================================
//KEYBOARD EVENTS
//keypress, keydown, keyup
//FORM EVENTS
//blur, select, change, focus, submit
//===================================================================
$(documents).ready(function(){
	$('.vacation').on('keyup', '.quantity', function(){
		//var price = $(this).closest('.vacation').data(price);
		//returns a string
		//adding '+' converts to integer
		var price = +$(this).closest('.vacation').data(price);
		var quantity = +$(this).val();
	});
});