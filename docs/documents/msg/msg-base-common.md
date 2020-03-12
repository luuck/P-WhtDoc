# 固有弹窗 - 完整版
分为两种类型，分别是`base`（基础）、`img`（带img图片）的弹窗。
* `base`：基础提示弹窗（包含了带sorry图标弹窗、妖豆弱提示弹窗、同城游弱提示弹窗）
* `img`：带img提示弹窗

## 如何使用？

### 1.引入

```js
<script src="assets/js/lib/wht.min.js"></script>
```

### 2.使用

```js
// 使用方式如下，具体的参数说明在下边的配置项说明
wht.dialog({
	// type有两种类型：
	// base：基础弹窗；img：带img的弹窗。
	type: 'base',
    title: '提示',
	// -----------------------------------
	// 这里样式皮肤设置对应 css/layer-myskin.css 文件，这个样式文件有两个作用：
	// 1.覆盖第三方弹窗插件layer的默认样式；
	// 2.使用官方推荐的方式自定义弹窗的皮肤。
	// 如需配置新的弹窗样式，详情请阅读示例中的 css/layer-myskin.css 这个样式文件。
    // 可选：默认是【layer-ext-baseskin】，
	// -----------------------------------
	skin: 'layer-ext-baseskin',
    close: function(){},
    complete: function(){},
    body: {
        content: '对不起您还没有完成任务',
        simContent: '请继续完成任务！',
        btn: [{
            text: '任务中心',
			// 按钮样式，对应在 css/layer-myskin.css 文件编辑
            css: '', /*skin-btn-1*/
            href: 'http://www.yaodou.com',
            target: '_blank',
            isExeCloseE: true,
            action: function () {
				// 如果按钮中打开另外另外一个弹窗
				// 则需要延迟300s，否则按钮的样式会加载失败
				setTimeout(function(){
					// 打开另外一个弹窗
				},300);
			}
        }, {
            text: '取消'
        }],

        isSorry: false,
        isNotTip: false,
        isWeak: false,
        weakTime: 3000,
        weakType: 1,
        scrollbar: true,
        closeBtn: true,
        shadeClose: false,
        shade: [0.3, '#393D49'],
        isOutAnim: true,
        anim: 0,
        iconCss: false,
        imgCss: ''
    }
});
```

**配置项说明**

|属性|说明| 值 |
|:----    |:-------    |:--- |
|type| 有两种类型：'base'为基础提示弹窗；<br/>'img'为带img提示弹窗。|可选，默认是配置【base】 |
|title| 弹窗头部提示文案 | 可选，默认是【空】 |
|skin|弹窗皮肤|可选，默认是【layer-ext-baseskin】|
|close| 弹窗关闭后的回调事件|可选，默认是【function(){}】|
|complete|弹窗打开后的回调事件|可选，默认是【function(){}】|
|body |具体内容配置项，请继续往下看 | 对象 |


**body配置项说明**

|属性|说明| 值 |
|:----    |:-------    |:--- |
|content| 主要文案说明 | 可选，默认是【空】| |
|simContent| 次要文案说明 | 可选，默认是【空】 | |
|isSorry|“左侧sorry图片提示”是否显示，只有当type为【base】配置后生效| 可选，默认是【false】 ||
|isNotTip|“不再提示选择项”是否显示，只有当type为【base】配置后生效 | 可选，默认是【false】| 很少用到，如果配置了，请使用 #nottip 这个钩子，进行事件处理 |
|isWeak|是否是弱提示，只有当type为【base】配置后生效|可选，默认是【false】||
|weakTime |弹窗多少秒后自动关闭，只有当isWeak为【true】配置后生效 | 可选，默认是【3000s】 | |
|weakType |弱提示类型：1为妖豆弱弹窗提示，2为同城游弱提示。只有当isWeak为【true】配置后生效 | 可选，默认是【1】 | |
|iconCss |同城游弱提示弹窗左侧icon图标是否显示，只有当isWeak为【true】且weakType为【2】配置后生效| 可选，默认是【false】 | 如果需要制定样式图标，赋上样式的类名即可(如:  iconCss:'icon1'）即可 |
|closeBtn |弹窗右上角的关闭按钮是否显示，只有当isWeak为【false】配置后生效| 可选，默认是【true】 | |
|scrollbar |弹窗出现，是否允许滚动条滚动 | 可选，默认是【true】 |推荐使用true，因为如果页面文档过长，纵向存在滚动条，此时如果配置false(不允许浏览器滚动)，会出现抖动的情况，体验不好 |
|shadeClose |弹窗弹出后，点击遮罩是否关闭弹窗| 可选，默认是【false】 | 推荐使用使用false，点击遮罩不关闭|
|shade |遮罩颜色，默认是0.3透明度的黑色颜色；若不想显示遮罩，shadow：0| 可选，默认是【0.3,'#000'】 | |
|isOutAnim |弹窗关闭时的过渡动画是否开启| 可选，默认是【true】 | |
|anim |弹窗弹出的动画：-1无动画效果；0:平滑放大;1:从上掉落;2:从最底部往上滑入；3:从左滑入;4:从左翻滚;5:渐显;6:抖动| 可选，默认是【0】 | |
|imgCss |单一奖励弹窗对应的奖励图片样式类名配置项，只有当type为【img】配置后生效| 可选，默认是【空】 | |
|btn |具体内容配置项，请继续往下看| 数组对象 | 

**btn配置项说明**

|属性|说明| 值 |
|:----    |:-------    |:--- |
|text| 按钮文案 | 可选，默认是【空】| |
|css| 按钮样式| 可选，默认是【空】| |
|href| 按钮点击后的跳转地址| 可选，默认是【空】| |
|target| 只有当href配置后生效，可配置两种情况：为空则在当前页打开新的地址，'_blank'则在新窗口打开新的地址 | 可选，默认是【空】| |
|isExeCloseE| 场景：有的弹窗操作了按钮后不需要关闭当前弹窗 | 可选，默认是【true】| |
|action| 按钮点击后的回调事件| 可选，默认是【function(){}】| | 

**其他方法说明**

关闭所有打开的弹窗：layer.closeAll();


