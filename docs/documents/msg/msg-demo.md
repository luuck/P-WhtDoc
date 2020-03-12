
# 示例

* 下载demo（wht-dialog-src待提供）

* 阅读readme.md

## 介绍

应用于PC平台活动项目中，旨在快速开发活动类的弹窗

## 版本 

V1.0.0

## 功能

基础弹窗

弱提示弹窗

带img图片弹窗

自定义弹窗（可扩展）

## 下载地址

暂无

## 文件结构说明
* assets：资源
* pop-demo.html：弹窗模板demo页面
* test.html：弹窗测试页面

## demo运行
启动

```js
cd wht-dialog-src  
node server.js
```

访问

```js
http://a.yaodou.org:8000/test.html
```

## 使用步骤
### 1. 引入

```js
// 引入公用的基础样式
<link rel="stylesheet" href="//static.tcy365.com/common/style/base.css" type="text/css"/>
// 引入wht-dialog.css
<link rel="stylesheet" href="assets/css/wht-dialog.css"/>
```

```js
// 当是引入的是wht.dialog.js时【单个使用（只想用万花筒-弹窗）】需配置在head结束标签前，
// 否则引入的是wht.min.js时【整体使用（万花筒整体）】请忽略这个配置
var wht = {};

// .......
// 一堆代码
// .......

// 配置在body结束标签前
// 以下的引入顺序不能调整，否则会报错
// 依赖于jquery.js
<script src="//static.tcy365.org:1505/cdn/jquery/1.7.1/jquery.js"></script>
// 依赖于layer.js,一定要单独一行引入,否则会报错
<script src="assets/js/lib/layer/layer.js"></script>
// ---------------------------------------------------
// 单个使用（只想用万花筒-弹窗）：引入wht.dialog.js
<script src="assets/js/lib/wht.dialog.js"></script>
// 整体使用（万花筒整体）：引入wht.min.js
// <!-- <script src="assets/js/lib/wht.min.js"></script> -->
// ---------------------------------------------------
// 引入wht.dailogconfig.js
<script src="assets/js/lib/wht.dialogconfig.js"></script>
```

**wht.dailogconfig.js 文件内容说明**

```js
layer.config({
    // 自定义皮肤的样式文件，路径是相对于layer/theme/目录下的路径
    extend: '../../../../css/layer-myskin.css'
});
```

### 2. 具体调用、配置规则

请参考：[查看](msg-base-common.html)


**参考资料**

弹层组件文档 - [layer.js](http://www.layui.com/doc/modules/layer.html)


