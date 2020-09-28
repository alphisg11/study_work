var aqua = 0;
window.onload = function main() {
	//work 3 
	var w3 = setInterval(function() {
		aqua++;
		document.getElementById("aqua").style.width = aqua * 2 + "px";
		document.getElementById("JD").innerHTML = "进度：" + aqua + "%"
		if(aqua == 100) {
			window.clearInterval(w3);
			document.getElementById("JD").innerHTML = "载入完成！"
		}
	}, 100);

	//work 2
	var t = setInterval(function() {
		var d = new Date();
		var Y = d.getFullYear();
		var M = d.getMonth() + 1;
		var D = d.getDate();
		if(d.getHours() < 10) {
			var h = "0" + d.getHours();
		} else {
			var h = d.getHours();
		}
		if(d.getMinutes() < 10) {
			var m = "0" + d.getMinutes();
		} else {
			var m = d.getMinutes();
		}
		if(d.getSeconds() < 10) {
			var s = "0" + d.getSeconds();
		} else {
			var s = d.getSeconds();
		}
		switch(d.getDay()) {
			case 0:
				var W = "星期一";
				break;
			case 1:
				var W = "星期二";
				break;
			case 2:
				var W = "星期三";
				break;
			case 3:
				var W = "星期四";
				break;
			case 4:
				var W = "星期五";
				break;
			case 5:
				var W = "星期六";
				break;
			case 6:
				var W = "星期七";
				break;
		}
		document.getElementById("time").innerHTML = "现在的时间是：" + Y + "年" + M + "月" + D + "日" + " " + h + ":" + m + ":" + s + " " + W;
	}, 1000);
}

//work 1
var h, m, s, mm, h1, m1, s1, mm1;
h = m = s = mm = h1 = m1 = s1 = mm1 = 0;
var check;

function start() {
	check = setInterval(function() {
		mm = mm + 50;
		if(mm >= 1000) {
			mm = 0;
			s = s + 1;
		}
		if(mm < 10) {
			mm1 = "00" + mm;
		} else {
			if(mm < 100) {
				mm1 = "0" + mm;
			} else {
				mm1 = mm;
			}
		}
		if(s >= 60) {
			s = 0;
			m = m + 1;
		}
		if(s < 10) {
			s1 = "0" + s;
		} else {
			s1 = s;
		}
		if(m >= 60) {
			m = 0;
			h = h + 1;
		}

		if(m < 10) {
			m1 = "0" + m;
		} else {
			m1 = m;
		}
		if(h < 10) {
			h1 = "0" + h;
		} else {
			h1 = h;
		}
		document.getElementById("timer").innerHTML = h1 + '时' + m1 + '分' + s1 + '秒' + mm1 + '毫秒';
	}, 50);
}

function pausetimer() {
	window.clearInterval(check);
}

function timerover() {
	h = m = s = mm = 0;
	h1 = m1 = s1 = "00";
	mm1 = "000";
	window.clearInterval(check);
	document.getElementById("timer").innerHTML = h1 + '时' + m1 + '分' + s1 + '秒' + mm1 + '毫秒';
}

//worl 4
var colorname = ["red", "blue", "yellow", "green", "black", "orange"];
var colornum = 0;
var color;

function covercolor() {
	document.getElementById("colorblock").onclick = function closecover() {
		window.clearInterval(color);
		document.getElementById("colorblock").style.background = "#fff";
	}
	color = setInterval(function() {
		if(colornum >= 5) {
			colornum = 0;
		} else {
			colornum++;
		}
		document.getElementById("colorblock").style.background = colorname[colornum];
	}, 1000);
}