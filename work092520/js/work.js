//Work 1
function cho() {
	var x = document.getElementById("key"); //获取输入框的值
	var k = ch(x.value);

}

function ch(x) {
	var k = x;
	while(x > 1) { //递减阶乘
		k = k * (x - 1);
		x--;
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
		if(a % 4 == 0) { //检测平闰年
			if(b == 2) {
				if(c > 0 && c < 29) {
					ontime();
				} else {
					untime();
				}
			}

			monthx(b, c);

		} else {
			if(b == 2) {
				if(c > 0 && c < 30) {
					ontime();
				} else {
					untime();
				}
			}

			monthx(b, c);
		}
	} else {
		untime();
	}

}

function monthx(b, c) {
	if(b < 1 || b > 13) { //检测月份是否合法
		untime();
	}
	if(b == 4 || b == 6 || b == 9 || b == 11) { //检测4,6,9,11月份的日期是否合法
		if(c > 0 && c < 31) {
			ontime();
		} else {
			untime();
		}
	}
	if(b == 1 || b == 3 || b == 5 || b == 7 || b == 8 || b == 10 | b == 12) { //检测1,3,5,7,8,10,12月份的日期是否合法
		if(c > 0 && c < 32) {
			ontime();
		} else {
			untime();
		}
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