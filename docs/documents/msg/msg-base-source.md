# 基础弹窗

## 如何使用？

### 1.示例
![](https://www.showdoc.cc/server/api/common/visitfile/sign/200efdcf78eac79f9a2c6f75692d00b4?showdoc=.jpg)

### 2.使用
```js
// 使用方式
wht.dialog({
    body: {
        // 可选，默认是【''】
        content: '对不起您还没有完成任务',
        // 可选，默认是【''】
        simContent: '请继续完成任务！',
        // 可选，默认是【[]】
        btn: [{
            text: '任务中心',
            css: '', /*skin-btn-1*/
            href: 'http://www.yaodou.com',
            target: '_blank',
            action: function () {
            }
        }, {
            text: '取消'
        }]
    }
});
```

