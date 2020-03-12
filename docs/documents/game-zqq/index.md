# Zqq 扎气球

## 如何使用？

### 1.引入

```html
<link rel="stylesheet" href="css/wht-zqq.css">
<script src="assets/js/lib/jquery.shake.js"></script>
<script src="js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 引入
var zqqMain = require('../wht-game/wht-game-zqq/zqq-main'); // 万花筒-游戏组件-扎气球
// 初始化
zqqMain.init({
    name: 'zqq1',
    type: 'zqq',
    param: {
        wrapper: 'div.b2', // 包裹气球区域
        aim: 'span.sights', // 瞄准器
        balloon: '.list li', // 气球位置
        time: 600, // 击破气球到复原完整气球时间间隔
        success: function (currentInex) {
            // console.log("击破气球");
            // console.log(currentInex);
            /*
                * 这里可以判断是否登录
                * ···
                */
            if (currentInex !== undefined) {
                // 扎气球游戏组件与其他组件不同略微不同！！！
                // 特别注意这里进行回调处理
                dealing(currentInex);
            }
        },
        error: function (data) {}
    }
});
```

### 3.页面结构

```html
<div class="sec3">
    <div class="sec3-con">
        <div class="content c1">
            <h3 class="title">充值<span class="sp1">500-999</span>元</h3>
            <p><span class="bullet1 J-bullet1">1</span>枚子弹</p>
        </div>
        <div class="content c2">
            <h3 class="title">充值<span class="sp1">1000-1999</span>元</h3>
            <p><span class="bullet2 J-bullet2">2</span>枚子弹</p>
        </div>
        <div class="content c3">
            <h3 class="title">充值<span class="sp1">2000</span>元</h3>
            <p><span class="bullet3 J-bullet3">4</span>枚子弹</p>
        </div>
        <div class="ballon-box b2">
            <span class="sights">瞄准器</span>
            <ul class="list">
                <li data-left="0">
                    <div class="balloon c02 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c03 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c04 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c05 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c01 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c04 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c05 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c02 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c01 ani-act"></div>
                </li>
                <li data-left="0">
                    <div class="balloon c03 ani-act"></div>
                </li>
            </ul>
        </div>
        <div class="bullet-container">
            您还剩余<span class="J_bulletNum">0</span>枚子弹
        </div>
    </div>
</div>
```

### 4.调用

```js
// 1.创建扎气球对象
var zqq = wht.gameZqq('zqq1');

// 2.初始化扎气球配置项
// InitConfig();

// ----------------------
// 使用方法和说明请查看左侧API
// 3.在扎气球配置项中处理成功扎破气球方法，具体事例请看demo
zqq.stop(id,callback);
```

**API方法说明**

|方法 | 说明 |
|:---- | :----|
|stop(id,callback) | 击破气球，触发回callback事件

**示例**

```js
seajs.use('../zqq-main', function(zqqmain){
    var zqqMain = zqqmain; // 万花筒-游戏组件-扎气球
        var isBind = false; // 按钮绑定
        var zqq1 = null;

    function dealing(n) {
        if(isBind){
            return;
        }
        isBind = true;

        // 为了测试用，此时是ajax交互，这里省略了ajax交互
        zqq1.stop(n, function () {
            alert('成功击破位置：'+n+' 的气球');
            isBind = false;
        });
    }

    // 扎气球配置项初始化
    function zqqInitConfig() {
        zqqMain.init({
            // 这里的name命名便于调用的时候方便识别，示例：wht.game('zqq1')
            name: 'zqq1',
            type: 'zqq',
            param: {
                wrapper: 'div.b2', // 包裹气球区域
                aim: 'span.sights', // 瞄准器
                balloon: '.list li', // 气球位置
                time: 600, // 击破气球到复原完整气球时间间隔
                success: function (currentInex) {
                    // console.log("击破气球");
                    // console.log(currentInex);
                    /*
                        * 这里可以判断是否登录
                        * ````
                        */
                    if (currentInex !== undefined) {
                        // 扎气球游戏组件与其他组件不同略微不同！！！
                        // 特别注意这里进行回调处理
                        dealing(currentInex);
                    }
                },
                error: function (data) {}
            }
        });
    }

    // 扎气球对象创建及处理
    function zqqCreate(){
        zqq1 = wht.gameZqq('zqq1');
    }

    // 初始化
    function init() {
        zqqInitConfig();
        zqqCreate();
    }

    init();
});
```