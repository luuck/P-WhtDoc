# 弱提示弹窗

## 如何使用？

### 1.示例
![](https://www.showdoc.cc/server/api/common/visitfile/sign/0c73df352828d51541e76fed00289830?showdoc=.jpg)

### 2.使用
```js
// 使用方式
wht.dialog({
    body: {
        // 可选，默认是【''】
        content: '对不起您还没有完成任务',
        // 可选，默认是【''】
        simContent: '请继续完成任务！',
        isWeak: true,
		weakType: 2
    }
});
```

