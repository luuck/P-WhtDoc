# Pmd 跑马灯

## 如何使用？

### 1.引入

```html
<link rel="stylesheet" href="css/wht-pmd.css">
<script src="js/lib/wht.min.js"></script>
```

### 2.初始化配置

```js
// 引入
var pmdMain = require('../wht/wht-game/pmd/pmd-main'); // 万花筒-游戏组件-跑马灯
// 初始化
pmdMain.init({
    // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')
    name: 'pmd1',
    type: 'pmd',
    param: {
        //对奖区列表重新排序(顺时针方向)
        awardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        // 跑马灯奖区对应区域
        $item: "#J-pmd1 .prizebox div s",
        // 跑马灯转动的时候的速度，越小速度越快
        speed: 100,
        // 跑马灯减速转动的时候的速度，越小速度越快
        reduceSpeed: 20
    }
});
```

### 3.页面结构

```html
<div class="prizebox-wrap" id="J-pmd1">
    <div class="prizebox">
        <div class="prize-1"><s></s></div>
        <div class="prize-2"><s></s></div>
        <div class="prize-3"><s></s></div>
        <div class="prize-4"><s></s></div>
        <div class="prize-5"><s></s></div>
        <div class="prize-6"><s></s></div>
        <div class="prize-7"><s></s></div>
        <div class="prize-8"><s></s></div>
        <div class="prize-9"><s></s></div>
        <div class="prize-10"><s></s></div>
    </div>
    <div class="prizebox-tip">抽奖次数<span class="prizebox-num J-prizenum">0</span>次</div>
    <div class="prizebox-tip" style="margin-top: 30px;">剩余金币<span class="prizebox-num J-prizemoneny">0</span>元</div>
    <div class="prizebox-btn">
        <a href="javascript:;" class="prizebox-btn1 J-lottery" data-id="1"></a>
        <a href="javascript:;" class="prizebox-btn2 J-lottery" data-id="2"></a>
    </div>
</div>
```

### 4.调用

```js
var pmd = wht.gamePmd('pmd1');
// ----------------------
// 使用方法和说明请查看左侧API
// 启动
pmd.start();
// 重置
pmd.reset();
// 停止
pmd.stop(id,callback);
```

**API方法说明**

|方法 | 说明 |
|:---- | :----|
|start() | 启动游戏组件
|reset() | 重置游戏组件
|stop(id,callback) | 停留到指定奖区位置，触发回callback事件

**示例**

```js
seajs.use('../pmd-main', function(pmdmain){
    var pmdMain = pmdmain; // 万花筒-游戏组件-跑马灯
    var isBind = false; // 按钮绑定
    var pmd1 = null;

    function dealing() {
        if(isBind){
            return;
        }
        isBind = true;
        // 启动跑马灯
        pmd1.start();

        // 为了测试用，此时是ajax交互，这里省略了ajax交互
        pmd1.stop(4, function () {
            alert('成功停止在位置4');
            isBind = false;
            // 重置跑马灯
            pmd1.reset();
        });
    }

    // 跑马灯配置项初始化
    function pmdInitConfig() {
        pmdMain.init({
            // 这里的name命名便于调用的时候方便识别，示例：wht.game('pmd1')
            name: 'pmd1',
            type: 'pmd',
            param: {
                //对奖区列表重新排序(顺时针方向)
                awardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                // 跑马灯奖区对应区域
                $item: "#J-pmd1 .prizebox div s",
                // 跑马灯转动的时候的速度，越小速度越快
                speed: 100,
                // 跑马灯减速转动的时候的速度，越小速度越快
                reduceSpeed: 20
            }
        });
    }

    // 跑马灯按钮绑定
    function pmdBtnBind(){
        $('.J-lottery').click(function(){
            var dataid = $(this).attr('data-id');
            pmd1 = wht.gamePmd('pmd1');
            dealing(dataid);
        });
    }

    // 初始化
    function init() {
        pmdInitConfig();
        pmdBtnBind();
    }

    init();
});
```