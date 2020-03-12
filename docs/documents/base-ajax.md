# Ajax 方法
Ajax 方法提供了简易版的ajax请求。

## 如何使用？

### 1.引入

```js
<script src="assets/js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 覆盖默认配置
wht.ajaxInit({
	// 默认为【get】，可选
	type: 'post',
	// 默认为【''】,可选
	url：'',
	// 默认为【''】,可选
	data: '',
	// 默认为【'json'】,可选
	dataType: 'json',
	// 默认type为get时为【''】、post时为【'application/json'】,可选
 	contentType: 'application/json',
	// 默认【false】,可选
	cache: false,
	// 默认【true】,可选
	async: true,
	// 必填
	success: function(){
	
	},
	// 初始化配置的时候必填,使用时可忽略
	error: function(){
	
	},
	// 可选
	complete: function(){
	
	}
 });
```

### 3.直接使用

**简化版**
```js
wht.ajax({
	url: '',
	data: '',
	success: function(result){
		dealfn(result);
	}
});
```

**完整版**
```js
wht.ajax({
	// 默认为【get】，可选
	type: 'post',
	// 默认为【''】,可选
	url：'',
	// 默认为【''】,可选
	data: '',
	// 默认为【'json'】,可选
	dataType: 'json',
	// 默认type为get时为【''】、post时为【'application/json'】,可选
 	contentType: 'application/json',
	// 默认【false】,可选
	cache: false,
	// 默认【true】,可选
	async: true,
	// 必填
	success: function(){
	
	},
	// 初始化配置的时候必填,使用时可忽略
	error: function(){
	
	},
	// 可选
	complete: function(){
	
	}
 });
```