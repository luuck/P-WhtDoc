## 拼图使用说明

#### 1.引入

```html
<link rel="stylesheet" href="css/wht-pt.css">
<script src="js/lib/jQuery1.7.1.js"></script>
<script src="js/lib/wht.min.js"></script>
```

#### 2.初始化配置

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

#### 3.页面结构

```html
<div class="cube"></div>

<div class="btnbox">
    <div id="startBtn" class="btn J-startBtn"&开始</div>
    <div id="resetBtn" class="btn J-resetBtn"&重置</div>
</div>
```

#### 4.调用

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