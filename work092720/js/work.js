//work 1

function work1() {
	var arrone = [1, 46, 74, 3, 5, 5];
	arrone.unshift(arrone.length - 1);
	arrone.pop();
	document.getElementById("work1").value = arrone;
}
//work 2

function work2() {

	var arrtwo = [1, 46, 74, 3, 5, 5];
	arrtwo.splice(2, 0, document.getElementById("work2_2").value);
	document.getElementById("work2_3").value = arrtwo;
}

//work 3

function work3(){
	var arrthr = [20,23,21,34,54,55,32];
	arrthr.splice(arrthr.length-2,2)
	document.getElementById("work3").value = arrthr;
}

//work 4

function pop(){
	var arrfor = [2,3,4,56,67,98];
	arrfor.push(document.getElementById("work4_1").value); 
	
	for(var a = 0; a < arrfor.length; a++){	//冒泡排序
		for(var b = 0; b < arrfor.length; b++){
			if(arrfor[b] > arrfor[b+1]){
				var c = arrfor[b];
				arrfor[b] = arrfor[b+1];
				arrfor[b+1] = c;
			}
		}
	}
	
	document.getElementById("work4_2").value = arrfor;
}

function code() {
	var n = document.getElementById("password1").value; //取输入值
	document.getElementById("password2").value = ean13(n); //调用ean13函数
}

function ean13(n) {

	var arr = n.split(""); //新建数组，拆分输入值
	checkout(arr);

	var arr2 = arr;
	var code1 = arr[0] + arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; //求奇数位之和
	var code2 = arr[1] + arr[3] + arr[5] + arr[7] + arr[9] + arr[11]; //偶数位之和
	var code3 = 10 - ((code1 + code2 * 3) % 100 % 10); //奇数与偶数的三倍之和模100再模10求个位数，并用10减这个数得到校检码

	if(code3 == 10) { //检测校检码是否为10，true的场合改为0
		code3 = 0;
	}

	arr2.push(code3); //把校检码添加进数组
	var code4 = arr2;
	code4 = parseInt(code4.join("")); //把数组转化为字符串并去除分隔符，然后转化成为数字整形

	return code4;
}

function checkout(arr) { //将所有字符串转化为数字整形
	for(var i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i])
	}
	return arr;
}