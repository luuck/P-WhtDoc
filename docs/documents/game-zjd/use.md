## 砸金蛋使用说明

#### 1.引入

```html
<link rel="stylesheet" href="css/wht-zjd.css">
<script src="js/lib/jQuery1.7.1.js"></script>
<script src="js/lib/jQueryRotate.2.2.js"></script>
<script src="js/lib/jquery.easing.min.js"></script>
<script src="js/lib/wht.min.js"></script>
```

#### 2.初始化配置

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

#### 3.页面结构

```html
<div class="egg">
    <ul class="eggList"></ul>
        <p class="hammer" id="hammer"&锤子</p>
        <div class="resultTip" id="resultTip">
            <span id="result"></span>
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

#### 4.调用

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