<!-- ## 拼图组件
* [使用说明](use.md)
* [API方法](api.md)
* [示例](demo.md) -->

# Pt 拼图

## 如何使用？

### 1.引入

```html
<link rel="stylesheet" href="css/wht-pt.css">
<script src="js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 引入
var ptMain = require('../wht-game/wht-game-pt/pt'); // 万花筒-游戏组件
// 初始化游戏组件
wht.gameInit({
    name: 'pt1',
    type: 'pt',
    param: {
        // 拼图图片路径
        img: "assets/img/wht-pt/1.jpg",
        // 拼图图片碎片数量
        pieces: [3, 3],
        // 拼图区域；
        area: ".cube",
        pieceClass: ".cube div.imgCell",
        // 拼图切片运动速度，单位毫秒
        movetime: 400
    },
    // 指定由哪个游戏组件进行初始化配置项
    specifyConfItem: function (o) {
        return ptdMain.init(o);
    }
});
```

### 3.页面结构

```html
<div class="cube"></div>

<div class="btnbox">
    <div id="startBtn" class="btn J-startBtn">开始</div>
    <div id="resetBtn" class="btn J-resetBtn">重置</div>
</div>
```

### 4.调用

```js
// `pt1`等同于初始化时配置项的name值
//  获取游戏组件对象
wht.game('pt1');
// ---------分割线-------------
// 使用方法和说明请查看左侧API
// 启动
wht.game('pt1').start();
// 重置
wht.game('pt1').reset();
// 停止
// id参数说明：
// 如果需要停在指定位置，则为具体数字（场景：大转盘停在指定位置）
// 如果不需要停在指定位置，则id为1（场景：拼图不需要停在指定位置）
// 如果是具体奖励对象，则id为 data对象（场景：砸金蛋需要传递data对象）
wht.game('pt1').stop(id,callback);
```

**API方法说明**

|方法 | 说明 |
|:---- | :----|
|start() | 启动游戏组件||
|reset() | 重置游戏组件|
|stop(id,callback) | id为1，触发回callback事件|

**示例**

```js
seajs.use('../pt', function (pt) {
    var ptdMain = pt;
    var isBind = false; // 按钮绑定

    function dealing() {
        if (isBind) {
            return;
        }
        isBind = true;


        // 监听拼图成功的事件、或者倒计时监听拼图失败的事件
        // 拼图倒计时结束后传值,status=2拼图成功,status=3拼图失败

        // 拼图成功
        wht.game('pt1').stop(1, function () {
            alert('拼图成功！！');
            setTimeout(function(){
                wht.game('pt1').reset();
                isBind = false;
            }, 2000);
        });

        // 拼图失败
        // 假设一个定时器
        /*var time = 10;
        var timer = setInterval(function () {
            time -= 1;
            console.log(time);
            if (time <= 0) {
                clearInterval(timer);
                console.log('拼图失败！！');
                wht.game('pt1').reset();
            }
        }, time);*/

    }

    function btnBind() {
        $('.J-startBtn').click(function () {

            if(wht.game('pt1').isStart){
                alert('您还在游戏中');
                return;
            }

            // 启动
            wht.game('pt1').start();

            dealing();
        });

        $('.J-resetBtn').click(function () {
            if(wht.game('pt1') == null){
                return;
            }
            wht.game('pt1').reset();
        });
    }

    function initconfig() {
        wht.gameInit({
            name: 'pt1',
            type: 'pt',
            param: {
                // 拼图图片路径
                img: "assets/img/wht-pt/1.jpg",
                // 拼图图片碎片数量
                pieces: [3, 3],
                // 拼图区域；
                area: ".cube",
                pieceClass: ".cube div.imgCell",
                // 拼图切片运动速度，单位毫秒
                movetime: 400
            },
            // 指定由哪个游戏组件进行初始化配置项
            specifyConfItem: function (o) {
                return ptdMain.init(o);
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