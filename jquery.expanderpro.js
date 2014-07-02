/* =========================================================
*	ExpanderPro.js 2.0
*	Author: Alexander Bech / www.alexanderbech.com
*	http://github.com/AlexanderBech/ExpanderPro.js
* ========================================================== */
(function ($){
	var _default = {
		expandItem: "expandee",		// Item class
		triggerClass: "trigger",	// Trigger class
		targetClass: "target",		// Target class
		expandedClass: "expanded",	// Expanded class
		hoverClass: "over",			// If not null, will add class on hover
		animSpeed: 500,				// Animation speed in miliseconds
		hideTrigger: false,			// If true, will hide trigger on select
		closeOthers: false,			// If true, will close other elements than selected,
		startExpanded: false,		// If true, target will start expanded
		preventClosing: false,		// If true, expanded item will not close on trigger
		openFirst: false,			// If true, first item will open at init
		callbackOpen: null,			// Callback on open
		callbackClose: null			// Callback on close
	};
	$.fn.expanderPro = function(options){
  		var _opts = $.extend({}, _default, options);
  		return this.each(function(){
  			var $container = $(this);
  			var $items = $('.'+_opts.expandItem, $container);
  			$items.each(function(index){
  				var $item = $(this),
  					$trigger = _getTrigger($item),
	  				$target = _getTarget($item);
  				// Hide target?
	  			if(!_opts.startExpanded){ $target.hide(); } else { $target.show(); $item.addClass(_opts.expandedClass); }
	  			// Open first?
	  			if(_opts.openFirst && index==0){ $target.show(); $item.addClass(_opts.expandedClass); }
	  			// Hover class
	  			if(_opts.hoverClass != null) $item.on({mouseenter:function(){$item.addClass(_opts.hoverClass)},mouseleave:function(){$item.removeClass(_opts.hoverClass)}});
	  			// Trigger
	  			$trigger.on("click", function(e){ e.preventDefault();
	  				// Callback open
	  				if(_opts.callbackOpen != null && $item.hasClass(_opts.expandedClass) == false){
	  					_opts.callbackOpen();
	  				}
	  				// Callback close
	  				if(_opts.callbackClose != null && $item.hasClass(_opts.expandedClass)){
	  					_opts.callbackClose();
	  				}
	  				// Hide trigger?
	  				if(_opts.hideTrigger) $trigger.hide();
	  				// Close others?
	  				if(_opts.closeOthers){ $('.'+_opts.targetClass, $container).stop().slideUp(_opts.animSpeed); $('.'+_opts.expandItem, $container).not($item).removeClass(_opts.expandedClass); }
	  				// Anim target
	  				if(_opts.preventClosing){
	  					$target.stop().slideDown(_opts.animSpeed); $item.addClass(_opts.expandedClass);
	  				} else {
	  					$target.stop().slideToggle(_opts.animSpeed); $item.toggleClass(_opts.expandedClass);
	  				}
	  			});
  			});
  		});
		// Get trigger
		function _getTrigger($item){
			if('.'+_opts.triggerClass != null) return $('.'+_opts.triggerClass, $item);
			else return $item;
		}
		// Get target
		function _getTarget($item){
			if('.'+_opts.targetClass != null) return $('.'+_opts.targetClass, $item);
			else return $item;
		} 
  	};
})(jQuery);