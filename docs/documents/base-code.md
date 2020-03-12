# Code 字典
Code 字典提供了全局的code值配置。

## 如何使用？

### 1.引入

```js
<script src="assets/js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 覆盖默认配置
wht.codeInit({
	 SUCCESS: 0,
	 SUCCESS: 0, // 成功
	 NO_LOGIN: 2000, // 未登录
	 NO_START: 3000, // 活动未开始
	 END: 4000, // 活动已结束
	 ERROR_SYSTEM: 5000 // 系统出错
 });
```

### 3.直接使用

```js
wht.code.SUCCESS
```