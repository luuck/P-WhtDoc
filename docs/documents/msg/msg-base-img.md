# 带奖励的img弹窗

## 如何使用？

### 1.示例
![](https://www.showdoc.cc/server/api/common/visitfile/sign/2663a4cca65f18f11f9a377dde9136dd?showdoc=.jpg)

### 2.使用
```js
// 使用方式
 wht.dialog({
    type: 'img',
    body: {
        content: '<span style="color: red;margin-bottom: 10px;"&恭喜您，获得'+result[0].PrizeName+'</span&',
        simContent: '直接到<a href="www.baidu.com" target="_blank"&我的奖励</a&中查看',
        imgCss: 'msg-img-1',
        btn: [{
            text: '任务中心',
            css: '', /*skin-btn-1*/
            href: 'http://www.yaodou.com',
            target: '_blank',
            // 默认为false,执行关闭事件
            isExeCloseE: true,
            action: function () {
            }
        }, {
            text: '取消'
        }]
    }
});
```

