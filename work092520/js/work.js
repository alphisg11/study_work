//Work 1
function cho() {
	var a = document.getElementById("key"); //获取输入框的值
	var k = ch(a.value);

}

function ch(a) {
	var k = a;
	while(a > 1) { //递减阶乘
		k = k * (a - 1);
		a--;
	}
	document.getElementById("abs").value = k; //结果输出到输出框
}

//Work 2
function tc() {
	var a = document.getElementById("N"); //获取年月日值传递给function time
	var b = document.getElementById("Y");
	var c = document.getElementById("R");
	time(a.value, b.value, c.value);
}

function time(a, b, c) {
	if(a > 0 && a < 2100) { //年份检测在公元1年至公元2099年为合法年份
		if(a % 4 == 0) { //首先检测是否为闰年
			if(b == 2) { //闰年的情况下先检测2月的日期是否合法
				if(c > 0 && c < 29) {
					ontime();
				} else {
					untime();
				}
			}
			if(b == 4 || b == 6 || b == 9 || b == 11) { //如果是4,6,9,11月，检测日期是否合法
				if(c > 0 && c < 31) {
					ontime();
				} else {
					untime();
				}
			}
			if(b == 1 || b == 3 || b == 5 || b == 7 || b == 8 || b == 10 | b == 12) { //如果是1,3,5,7,8,10,12月，检测日期是否合法
				if(c > 0 && c < 32) {
					ontime();
				} else {
					untime();
				}
			}
		} else {
			if(b == 2) { //非闰年的情况下先检测2月的日期是否合法
				if(c > 0 && c < 30) {
					ontime();
				} else {
					untime();
				}
			}
			if(b == 4 || b == 6 || b == 9 || b == 11) { //同上
				if(c > 0 && c < 31) {
					ontime();
				} else {
					untime();
				}
			}
			if(b == 1 || b == 3 || b == 5 || b == 7 || b == 8 || b == 10 | b == 12) { //同上
				if(c > 0 && c < 32) {
					ontime();
				} else {
					untime();
				}
			}
		}
	} else {
		untime();
	}

}

function untime() {
	alert("时间非法");
}

function ontime() {
	alert("时间合法");
}

//work 3
function math() {
	var num1 = document.getElementById("A");
	var mat = document.getElementById("select"); //获得value值传递给math_act
	var num2 = document.getElementById("B");
	math_act(num1.value, mat.value, num2.value);
}

function math_act(a, b, c) {
	document.getElementById("C").value = eval(a + b + c); //使用eval计算字符串
}