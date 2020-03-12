<!-- ## 砸金蛋组件
* [使用说明](use.md)
* [API方法](api.md)
* [示例](demo.md) -->

# Zjd 砸金蛋

## 如何使用？

### 1.引入

```html
<link rel="stylesheet" href="css/wht-zjd.css">
<script src="js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 引入
var zjdMain = require('../wht-game/wht-game-zjd/zjd'); // 万花筒-游戏组件
// 初始化游戏组件
wht.gameInit({
    name: 'zjd1',
    type: 'zjd',
    param: {
            eggs: ".eggList li",
        hummer: "#hammer",
        eggsNum: 3,
        // 动画随机交换的次数；
        anniNumMax: 6,
        speed: 300
    },
    // 指定由哪个游戏组件进行初始化配置项
    specifyConfItem: function (o) {
        return zjdMain.init(o);
    }
});
```

### 3.页面结构

```html
<div class="egg">
    <ul class="eggList">
        <p class="hammer" id="hammer">锤子</p>
        <div class="resultTip" id="resultTip">
            <b id="result">

            </b>
        </div>
        <li id="egg0">
            <div>中奖内容区域，自行配置html和css样式；</div>
        </li>
        <li id="egg1">
            <div><p>sswss</p></div>
        </li>
        <li id="egg2">
            <div>中奖图文内容</div>
        </li>
    </ul>
</div>

<div class="btnbox">
    <div id="startBtn" class="btn J-startBtn">开始</div>
    <div id="resetBtn" class="btn J-resetBtn">重置</div>
</div>
```

### 4.调用

```js
// `zjd1`等同于初始化时配置项的name值
//  获取游戏组件对象
wht.game('zjd1');
// ---------分割线-------------
// 使用方法和说明请查看左侧API
// 启动
wht.game('zjd1').start();
// 重置
wht.game('zjd1').reset();
// 停止
// id参数说明：
// 如果是具体奖励对象，则id为 data对象（场景：砸金蛋需要传递data对象）
wht.game('zjd1').stop(id,callback);
// 判断初始化动画是否结束
wht.game('zjd1').isRun
```

**API方法说明**

|方法 | 说明 |
|:---- | :----|
|start() | 启动游戏组件|
|reset() | 重置游戏组件|
|stop(id,callback) | 停留到指定奖区位置，触发回callback事件|
|isRun | 初始化的动画是否结束|

**示例**

```js
seajs.use('../zjd', function (zjd) {
    var zjdMain = zjd; // 万花筒-游戏组件
    var isBind = false; // 按钮绑定
    var zjd1 = null;

    function dealing() {
        if (isBind) {
            return;
        }
        isBind = true;

        var d = {
            award: ["<h2>一等奖</h2>", "<h2>没有中奖1</h2>", "<h2>没有中奖2</h2>"],
            awardImgs: []
        };
        zjd1.stop(d, function () {
            setTimeout(function () {
                console.log('处理奖励,手动重置');
                zjd1.reset();
                isBind = false;
            }, 3000);
        });
    }

    function btnBind() {
        $('.J-startBtn').click(function () {
            zjd1 = wht.game('zjd1');
            if (zjd1 != null && zjd1.isRun) {
                return;
            }
            zjd1.start();
            dealing();
        });

        $('.J-resetBtn').click(function () {
            if (zjd1 == null) {
                return;
            }
            zjd1.reset();
        });
    }

    function initconfig() {
        wht.gameInit({
            name: 'zjd1',
            type: 'zjd',
            param: {
                eggs: ".eggList li",
                hummer: "#hammer",
                eggsNum: 3,
                // 动画随机交换的次数；
                anniNumMax: 6,
                speed: 300
            },
            // 指定由哪个游戏组件进行初始化配置项
            specifyConfItem: function (o) {
                return zjdMain.init(o);
            }
        });
    }

    function init() {
        initconfig();
        btnBind();
    }

    init();
});
```