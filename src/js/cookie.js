function addCookie(name, val, day)
{
	var oDate = new Date();

	oDate.setDate(oDate.getDate() + day);

	document.cookie = ""+name+"="+val+";expires=" + oDate;
}


// 页面加载完成之后 读取cookie

// username=老马; password=123456
// alert(  document.cookie );
//  (1) 分号 分割
//        username=老马
//        password=123456
//  (2) 等号分割

// 做一个工具，用于读取当前页面中的cookie值
//  参数：输入：
//       cookie 名字
//  返回值： 对应的cookie 的值

// 函数名： getCookie
// 参数：
//    name 得到的cookie 的名字
// 返回值： 如果等于"",说明没有找到，否则，就是所对应cookie 的值

// 找 cookie 名字为 username 所对应的值
// var username = getCookie("username");

function getCookie(name)
{
	// 得到cookie
	// username=老马; password=123456
	var str = document.cookie;

	// 按照 ; 分割
	var arr = str.split("; ");
	// username=老马
	// password=123456

	for (var i = 0; i < arr.length; i++)
	{
		var arr2 = arr[i].split("=");

		// arr2[0]:  username
		// arr2[1]:  老马

		// 找名字 等于 name 所对应的值
		if (arr2[0] == name)
		{
			// 说明找到 cookie, 
			// 返回当前 cookie 所对应的值
			return arr2[1];
		}
	}

	// 如果一个都找不到，就返回 "";
	return "";
}










onload = function() {





	// 登录按钮
	var btnLogin = document.getElementById("btnLogin");
	
	// 7天免登陆前面的那个 checkbox
	var oCheck = document.getElementById("savePwd");

	var oUsername = document.getElementById("username");
	var oPassword = document.getElementById("password");



	// 页面加载完成之后 读取cookie

	// username=老马; password=123456
	// alert(  document.cookie );
	//  (1) 分号 分割
	//        username=老马
	//        password=123456
	//  (2) 等号分割

	// 做一个工具，用于读取当前页面中的cookie值
	//  参数：输入：
	//       cookie 名字
	//  返回值： 对应的cookie 的值

	/*
	var str = document.cookie;

	var obj = {};
	
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++)
	{
		var arr2 = arr[i].split("=");

		var name = arr2[0];
		var val = arr2[1];

		// 在obj对象中添加了一个属性为 name 变量的值，然后这个属性的值是 val
		obj[name] = val;

		console.log("name:" + name);
		console.log("val:" + val);
		console.log("obj:" + obj.toSource());
	}

	console.log(obj.username);
	console.log(obj.password);
	
	if (obj.username && obj.password)
	{
		oUsername.value = obj.username;
		oPassword.value = obj.password;
		
		alert("登录成功！");
	}
	//*/

	// 调用自己的函数，来获取当前页面中的 cookie
	var username = getCookie("username");
	var password = getCookie("password");

	if (username && password)
	{
		oUsername.value = username;
		oPassword.value = password;
		
		alert("登录成功XXXXX！");
	}

	btnLogin.onclick = function() {


		// oCheck.checked 为 true，那么就勾选了，否则就没勾选
		if (oCheck.checked)
		{

			// 勾选了，才保存 cookie
			// alert(oPassword.value);
			// 取出用户名和密码
			var strUsername = oUsername.value;
			var strPassword = oPassword.value;


			// 调用自己写的函数，实现添加 cookie
			addCookie("username", strUsername, 7);
			addCookie("password", strPassword, 7);


			/*
			// 保存到cookie 中
			var oDate = new Date();

			// 得到7天后的日期对象
			oDate.setDate(oDate.getDate() + 7);

			document.cookie = "username="+strUsername+";expires=" + oDate;

			document.cookie = "password="+strPassword+";expires=" + oDate;
			//*/
		}

		alert("登录成功！");
	}
}


		