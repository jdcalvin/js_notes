//descendant selector
// $("#parent .child") Selects all children
//child selector
//$("#parent > .child") Selects only direct child, not childrens children
//psuedo class
//$("#parent .child:first") :last, :odd, :even, 

//traversing the DOM
$("#destinations li"); //NO
$("#destinations").find("li"); //YES - its faster

$("li").first(); // works for other n objects

//WALKING THE DOM
$("li").first().next().prev().next();

//WALK UP THE DOM
$("li").first().parent();

//WALK DOWN THE DOM
$("#destinations").children("li") //this also works to select direct descents ie #destinations > li


//WORKING WITH THE DOM

//Appending to the DOM and REMOVING
$(document).ready(function(){
	var price=$('<p>From 399.99</p>');
	$('.vacation').append(price);
	$('button').remove();
});
//.appendTo, .prepentTo, .insertAfter, .insertBefore

//ACTING ON INTERACTION

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

//REFACTOR USING traversing

//INTRO TO $(this)
$(document).ready(function(){
	$('button').on('click', function(){
		var price = $('<p>From $399.99</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove();

	})
});

//Data attributes to HTML

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

//FILTERING HTML - USE FOR CHART

%('#filters').on('click', '.onsale-filter',function(){
		$('highlighted').removeClass('highlighted'); //removes class before applying
		$('vacation').filter('.onsale').addClass('highlighted');

	});

//LISTENING
$(document).ready(function(){

$('.confirmation').on('click', 'button', function() {
	$(this).closest('.confirmation').find('.ticket').slideDown(); // need to wrap inside doc ready

});
});

//Keyboard events
//keypress, keydown, keyup
//Form events
//blur, select, change, focus, submit

$(documents).ready(function(){
	4('.vacation').on('keyup', '.quantity', function(){
		//var price = $(this).closest('.vacation').data(price);
		//returns a string
		//adding plus converts to integer
		var price = +$(this).closest('.vacation').data(price);
		var quantity = +$(this).val();
	});
});