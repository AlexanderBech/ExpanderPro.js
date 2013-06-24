jquery-expanderpro
==================

jQuery plugin for expanding and collapsing HTML content with many optional settings

Usage
==================
```javascript
$('.list').expanderpro({
	expandItem: "expandee", 	// Item class
	triggerClass: "trigger", 	// Trigger class
	targetClass: "target", 		// Target class
	expandedClass: "expanded", 	// Expanded class
	hideTrigger: false, 		// If true, will hide trigger on select
	animSpeed: 500, 			// Animation speed in miliseconds
	hoverClass: "over", 		// If not null, will add class on hover
	closeOthers: false, 		// If true, will close other elements than selected,
	startExpanded: false, 		// If true, target will start expanded
	preventClosing: false, 		// If true, expanded item will not close on trigger
	openFirst: false 			// If true, first item will open at init
});
```

```html
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
</div>
```
