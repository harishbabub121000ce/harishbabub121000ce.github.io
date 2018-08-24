/** Changing the active Class **/

function updateActiveClass(obj, event) {
	$(obj).addClass('active');
	$(obj).siblings('li').removeClass('active');
} 