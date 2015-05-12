// JavaScript Document

function init() {
	var tl = document.getElementById("tlContent");
	var tr = document.getElementById("trContent");
	var bottomContainer = document.getElementById("myTabContent");
	var bottomContent = document.getElementsByClassName("bottomItem");
	var appIcon = document.getElementsByClassName("appIcon");
	
	TweenLite.to(tl, 0.5, {opacity: 1, display: 'block'});
	TweenLite.to(tr, 0.5, {opacity: 1, display: 'block'});
	TweenLite.to(appIcon, 0.5, {opacity: 1, display: 'inline', delay:0.15});
	
	TweenLite.from(bottomContainer,0.75, {minHeight: 0, height: 0, delay:0.4});
	TweenLite.to(bottomContent, 1, {display: 'block', opacity: 1, delay:1});
}

window.addEventListener("load", init, false);