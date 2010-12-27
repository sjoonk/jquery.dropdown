(function($) {
	$.fn.toggleDrop = function(options) {
		var settings = $.extend({
			align: 'left',
			speed: 'normal',
			toggledClass: 'closed',
			zIndex: 10
		}, options || {});

		return this.each(function() {
			var $trigger = $(this), $target = $trigger.next();
			$target.addClass('toggle-drop').css({display: 'none', position: 'absolute', margin: 0})
			.css(settings.align, 0).css('z-index', settings.zIndex);
			$trigger
			.wrap('<div class="dropdown-w" style="position: relative; display: inline;">')
			.after($target)
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