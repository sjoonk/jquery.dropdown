(function($) {
	$.fn.toggleDrop = function(options) {
		var settings = $.extend({
			align: 'left',
			speed: 'normal',
			toggledClass: 'closed'
		}, options || {});

		return this.each(function() {
			var $trigger = $(this), $target = $trigger.next();
			$target.addClass('toggle-drop').css({display: 'none', position: 'absolute', margin: 0})
			.css(settings.align, 0);
			$trigger
			.wrap('<div class="dropdown-w" style="position: relative; display: inline;">')
			.append($target)
			.click(function() {
				$('.toggle-drop').not($target).hide();
				$target.slideToggle(settings.speed, function() {
					$trigger.toggleClass(settings.toggledClass);
				});
				return false;
			});
		});

	}
})(jQuery);