# ionic Memory issue with PDF and videos

This project contains an ionic app with two screens: one is empty (Items), the second one (PDF) contains a local PDF rendered with PDF.js and two videos.

Going back and forth between these two views causes a memory leak in iOS, doing this for a couple of minutes crashes the app. I haven't tested it on Android. 

For reproducing the crash I'm using the following script, just copy and paste it in Safari developer console:

```javascript
disp = true;
window.setInterval(function(){
disp = false
window.location="#/recetario/1";
window.setTimeout(function(){
	window.history.back();
	window.setTimeout(function(){
		disp = true;
	}, 5000)
},5000);
}, 10000);
```
