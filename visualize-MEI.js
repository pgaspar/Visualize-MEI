function createObject(on_click, img_src) {
	anchor = document.createElement('a');
	image = document.createElement('img');
	
	anchor.addEventListener("click", on_click, false);
	anchor.href = "javascript:void(0);";
	
	image.src = img_src;
	image.style.border = '0px';
	
	anchor.appendChild(image);
	
	return anchor;
}

function approve(e) {
	if (!e) var e = window.event;
	e.target.parentNode.parentNode.childNodes[1].style.color = 'green';
}

function reject(e) {
	if (!e) var e = window.event;
	e.target.parentNode.parentNode.childNodes[1].style.color = 'red';
}

function reset(e) {
	if (!e) var e = window.event;
	e.target.parentNode.parentNode.childNodes[1].style.color = 'blue';
}

anchors = document.getElementsByTagName('a');

for (var i = 0; i < anchors.length; i++) {
	
	a = anchors[i];
	
	approveObj = createObject(approve, 'http://dl.dropbox.com/u/562461/web-resources/accept.png');
	rejectObj = createObject(reject, 'http://dl.dropbox.com/u/562461/web-resources/delete.png');
	resetObj = createObject(reset, 'http://dl.dropbox.com/u/562461/web-resources/reset.png');
	
	if (a.href.indexOf('getpresentation.do') != -1) {
		a.parentNode.appendChild(approveObj);
		a.parentNode.appendChild(rejectObj);
		a.parentNode.appendChild(resetObj);
	}
}
