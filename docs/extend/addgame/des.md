# 制作说明

**制作步骤【两步】** <br/>

<s style="font-size:12px;">（以大转盘为例说明）</s>

### 1.大转盘自身插件改写为seajs模块的方式：

实际例子查看：```wht-game-dzp/dzp.js``` 文件  <br/>

整体结构如下： <br/>

```js
define(function(require, exports, module){
	var successCallback = null; // 回调事件
	
	function Lottery(){
		// ...
		// ...
	}
	
	Lottery.prototype = {
		// ...
		_success: function(){
			// ...
			 this._options.success(data,successCallback);
		}
		// ...
		gotoIndex: function(id, data, fn){
			successCallback = fn;
			// ...
		}
	}
	
	function handle(opt) {
        var o = new Lottery(opt.param);

        /**
         * 给这个游戏组件对象新增stop方法
         * @param prizeid 获奖的id
         * @param fn 获奖后的回调事件
         */
        o.stop = function (prizeid, fn) {
			// 特别说明！！！需根据组件自行确定stop事件
            o.gotoIndex(prizeid, '', fn);
        };

        return o;
    }

    function init(opt) {
        return handle(opt);
    }
	
	module.exports = {
		init: init
	};
});
```

！！！特殊说明：需要在已有的插件上新增一个回调事件,用于成功事件之后执行 

### 2.编写使用文档说明：
文档参考查看： 
* [Dzp 大转盘](../../documents/game-dzp/index.html)






