# 自定义弹窗 - 完整版
`自定义弹窗`完整版，可灵活配置。调用的方式同`固有弹窗`几乎完全一致，唯一不同的就是配置项`body.content`属性对应的模板不一致，具体详情结合示例查看。

## 如何使用？

### 1.引入

```js
<script src="assets/js/lib/wht.min.js"></script>
```

### 2.使用

```js
// 使用方式如下，具体的参数说明在下边的配置项说明
wht.dialog({
    // 必填，自定义弹窗，type设置为'personal'
    type: 'personal',
	// -----------------------------------
    // 这里样式皮肤设置对应 css/layer-myskin.css 文件，这个文件有两个作用：
    // 1.覆盖第三方弹窗插件layer的默认样式；
    // 2.使用官方推荐的方式自定义弹窗的皮肤。
    // 如需配置新的弹窗样式，详情请阅读 css/layer-myskin.css 这个样式文件。
    // 可选，默认为【'layer-ext-baseskin'】假设此时配置 'layer-ext-personal'
	// -----------------------------------
    skin: 'layer-ext-personal',
	// -----------------------------------
	// 特别说明！！！！必填！
	// a.纯自定义结构的弹窗生效前提：需要和skin皮肤设置的宽高数据保持一致，否则生效失败；
	// 如：样式中设置 body .layer-ext-personal{width: 580px;height: 180px;}，那么这里area:[580, 180]
	// b.原有结构的弹窗：可忽略此配置项；
	// 特别说明：在百度浏览器、360浏览器会出现弹窗有滚动条，所以，在样式中，弹窗的宽度需要额外增加20px像素左右。
	// -----------------------------------
	area: [580, 180],
	
    close: function(){},
    complete: function(){},
    body: {
        // 必填，是一段html模板，根据示例文件查看
        content: '',
		// -----------------------------------
		// 特别说明！！！！
		// 纯自定义弹窗结构：可忽略此配置，
		// 使用原有结构的弹窗的模板：按钮区域需遵守一定规则，详情请看示例文件
		// 可选，默认是【[]】
		// -----------------------------------
        btn: [{
            text: '任务中心',
            css: '', /*skin-btn-1*/
            href: 'http://www.yaodou.com',
            target: '_blank',
            isExeCloseE: true,
            action: function () {}
        }, {
            text: '取消'
        }],
        scrollbar: true,
        shadeClose: false,
        shade: [0.3, '#393D49'],
        isOutAnim: true,
        anim: 0
    }
});
```

**配置项说明**

|属性|说明| 值 |
|:----    |:-------    |:--- |
|type| 自定义弹窗类型的type值设置为'personal'| 必填，配置【personal】 | |
|skin|弹窗皮肤|可选，默认是【layer-ext-personal】|  |
|area|弹窗宽高|必填，参考配置【580, 180】| 需要和skin皮肤设置的宽高数据保持一致<br/&`特别说明：在百度浏览器、360浏览器会出现弹窗有滚动条，`<br/&`所以在样式中，弹窗的宽度需要额外增加20px像素左右。` |
|close| 弹窗关闭后的回调事件|可选，默认是【function(){}】| |
|complete|弹窗打开后的回调事件|可选，默认是【function(){}】| |
|body |具体内容配置项，请继续往下看 | 对象 | | 


**body配置项说明**

|属性|说明| 值 |
|:----    |:-------    |:--- |
|content| 弹窗的模板配置项 | 必填 | |
|scrollbar |弹窗出现，是否允许滚动条滚动 | 可选，默认是【true】 |推荐使用true，因为如果页面文档过长，纵向存在滚动条，此时如果配置false(不允许浏览器滚动)，会出现抖动的情况，体验不好 |
|shadeClose |弹窗弹出后，点击遮罩是否关闭弹窗| 可选，默认是【false】 | 推荐使用false，点击遮罩不关闭|
|shade |遮罩颜色，默认是0.3透明度的黑色颜色；若不想显示遮罩，shadow：0| 可选，默认是【0.3,'#000'】 | |
|isOutAnim |弹窗关闭时的过渡动画是否开启| 可选，默认是【true】 | |
|anim |弹窗弹出的动画：-1无动画效果；0:平滑放大;1:从上掉落;2:从最底部往上滑入；3:从左滑入;4:从左翻滚;5:渐显;6:抖动| 可选，默认是【0】 | |
|btn |具体内容配置项，请继续往下看| 数组对象 | | 


**btn配置项说明**

|属性|说明| 值 |
|:----    |:-------    |:--- |
|text| 按钮文案 | 可选，默认是【空】| |
|css| 按钮样式| 可选，默认是【空】| |
|href| 按钮点击后的跳转地址| 可选，默认是【空】| |
|target| 只有当href配置后生效，可配置两种情况：为空则在当前页打开新的地址，'_blank'则在新窗口打开新的地址 | 可选，默认是【空】| |
|isExeCloseE| 场景：有的弹窗操作了按钮后不需要关闭当前弹窗 | 可选，默认是【true】| |
|action| 按钮点击后的回调事件| 可选，默认是【function(){}】| | 

**其他说明**

btn配置项说明：<br/>
* 纯自定义弹窗结构可忽略此配置
* 使用原有结构的弹窗的模板，按钮区域需遵守一定规则，详情请看示例文件
