<!-- ## 大转盘组件
* [使用说明](use.md)
* [API方法](api.md)
* [示例](demo.md) -->

# Dzp 大转盘

## 如何使用？

### 1.引入

```html
<link rel="stylesheet" href="css/wht-dzp.css">
<script src="js/lib/jQuery1.7.1.js"></script>
<script src="js/lib/jQueryRotate.2.2.js"></script>
<script src="js/lib/jquery.easing.min.js"></script>
<script src="js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 引入
var dzpMain = require('../wht-game/wht-game-dzp/dzp-main'); // 万花筒-游戏组件
// 初始化游戏组件
wht.gameInit({
    // 这里的name命名便于调用的时候方便识别，示例：wht.game('dzp1')
    name: 'dzp1',
    type: 'dzp',
    param: {
        //偏移量；转盘第一个奖区应该向右偏移的角度(指针与第一奖区的左边线对齐)
        excursion: 18,
        //转动指针
        pointerName: ".lottery-pointer0",
        //奖区数量
        awardNum: 10,
        //停止转动所需时间（从匀速减速到0）
        duration: 4000,
        //匀速时每秒转动圈数(圈数越多，转盘速度越快)
        circles: 4
    },
    // 指定由哪个游戏组件进行初始化配置项
    specifyConfItem: function (o) {
        return dzpMain.init(o);
    }
});
```

### 3.页面结构

```html
<div class="lottery">
    <div class="lottery-bg">
        <img src="assets/img/wht-dzp/dzp-arrow.png" class="lottery-pointer" id="J-lottery-pointer">
        <span class="lotter-start J-lottery"></span>
    </div>
</div>
```

### 4.调用

```js
// `dzp1`等同于初始化时配置项的name值
// 获取游戏组件这个对象
wht.game('dzp1');
// ---------分割线-------------
// 使用方法和说明请查看左侧API
// 启动
wht.game('dzp1').start();
// 重置
wht.game('dzp1').reset();
// 停止
// id参数说明：
// 如果需要停在指定位置，则为具体数字（场景：大转盘停在指定位置）
// 如果不需要停在指定位置，则id为1（场景：拼图不需要停在指定位置）
// 如果是具体奖励对象，则id为 data对象（场景：砸金蛋需要传递data对象）
wht.game('dzp1').stop(id,callback);
```

**API方法说明**

|方法 | 说明 |
|:---- | :----|
|start() | 启动游戏组件|
|reset() | 重置游戏组件|
|stop(id,callback) | 停留到指定奖区位置，触发回callback事件|

**示例**

```js
seajs.use('../dzp', function (dzp) {
    var dzpMain = dzp; // 万花筒-游戏组件
    var isBind = false; // 按钮绑定
    var dzp1 = null;

    function dealing() {
        if (isBind) {
            return;
        }
        isBind = true;

        // 为了测试用，此时是ajax交互，这里省略了ajax交互
        dzp1.stop(4, function () {
            alert('成功停止在位置4');
            isBind = false;
            // 重置
            dzp1.reset();
        });
    }

    function btnBind() {
        $('.J-lottery0').click(function () {
            console.log('---dzp1---');
            dzp1 = wht.game('dzp1');
            // 启动
            dzp1.start();
            dealing();
        });
    }

    function initconfig() {

        // 初始化游戏组件
        wht.gameInit({
            // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')
            name: 'dzp1',
            type: 'dzp',
            param: {
                //偏移量；转盘第一个奖区应该向右偏移的角度(指针与第一奖区的左边线对齐)
                excursion: 18,
                //转动指针
                pointerName: ".lottery-pointer0",
                //奖区数量
                awardNum: 10,
                //停止转动所需时间（从匀速减速到0）
                duration: 4000,
                //匀速时每秒转动圈数(圈数越多，转盘速度越快)
                circles: 4
            },
            // 指定由哪个游戏组件进行初始化配置项
            specifyConfItem: function (o) {
                return dzpMain.init(o);
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