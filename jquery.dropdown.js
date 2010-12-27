(function($) {
	$.fn.toggleDrop = function(target) {
		var $trigger = $(this), $target = $(target);
		$target.addClass('toggle-drop').css('display', 'none').css('position', 'absolute');
		// if (settings && settings.align == 'right') $target.css('right', 0);
		$trigger
		.wrap('<div class="wrapper" style="position: relative; display: inline;">')
		.append($target)
		.click(function() {
			$target.slideToggle(function() {
				$trigger.toggleClass('closed');
			});
		});
		return this;
	}
})(jQuery);