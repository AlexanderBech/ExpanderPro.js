ExpanderPro.js
==================

jQuery plugin for expanding and collapsing HTML content with many optional settings

Example: http://alexanderbech.com/work/jquery-expanderpro/

Usage
==================
Include jQuery 1.7+ and jquery.expanderpro.js in your layout and target your list container with expanderPro().
```javascript
$('.list').expanderPro({
	expandItem: "expandee", 	// Item class
	triggerClass: "trigger", 	// Trigger class
	targetClass: "target", 		// Target class
	expandedClass: "expanded", 	// Expanded class
	hoverClass: "over", 		// If not null, will add class on hover
	animSpeed: 500, 			// Animation speed in milliseconds
	hideTrigger: false, 		// If true, will hide trigger on select
	closeOthers: false, 		// If true, will close other elements than selected,
	startExpanded: false, 		// If true, target will start expanded
	preventClosing: false, 		// If true, expanded item will not close on trigger
	openFirst: false, 			// If true, first item will open at init
  callbackOpen: null,     // Callback on open
  callbackClose: null     // Callback on close
});
```

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="jquery.expanderpro.min.js"></script>

<section class="list">
  <div class="expandee">
    <div class="trigger">Trigger</div>
    <div class="target">Target</div>
  </div>
  <div class="expandee">
    <div class="trigger">Trigger</div>
    <div class="target">Target</div>
  </div>
  <div class="expandee">
    <div class="trigger">Trigger</div>
    <div class="target">Target</div>
  </div>
</section>
```
