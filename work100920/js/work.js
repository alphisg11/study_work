function save() {
	var a = document.getElementById('ip1');
	var b = document.getElementsByName('ip2');
	var c = document.getElementsByClassName('ip3');
	var d = document.getElementsByTagName('input')[3];
	var e = document.querySelectorAll("input");
	alert("姓名：" + a.value + "\n性别：" + b[0].value + "\n年龄：" + c[0].value + "\n学历：" + d.value + "\n专业：" + e[4].value);
}

window.onload = function checkcolor() {
	var c = 0;
	var b = '#0000ff';
	var r = '#ff0000';

	var cc = setInterval(function() {
		var a = document.getElementsByClassName("cb");
		a[0].style.background = r;
		a[1].style.background = b;
		a[2].style.background = r;
		a[3].style.background = b;
		a[4].style.background = r;
		a[5].style.background = b;
		c = b;
		b = r;
		r = c;
	}, 1000);
}

function piccover(element) {
	document.getElementById("pictop").src = element.src;
}