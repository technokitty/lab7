'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
$('.likeCtr').click(funky);
}

function funky(event){
	event.preventDefault();
	ga('create', 'UA-114581555-1', 'auto');
	ga('send', 'event', 'like', 'click');
}
