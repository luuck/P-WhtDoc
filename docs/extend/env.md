# 开发环境搭建

### 1.创建仓库
* 申请 Gitblit 账号（有账号的请忽略）;
* 钉钉找`【康国伟】`创建Gitblit仓库，命名为`FD_P_XXX`（XXX根据活动的项目命名）:

**特别说明**
* 活动类项目命名规则说明，一般是和后端的项目命名保持一致，如果不能保持一致可按照下边的这种格式命名：<br/>
    - 同城游活动： 【FD_P_TcyAct_XXX】(XXX根据活动项目命名)； <br/>
	- 妖豆活动：【FD_P_YdAct_XXX】(XXX根据活动项目命名，如妖豆竞技场命名`FD_P_YdAct_JJC`) ； <br/>
    如果有复用的活动，命名最后加上日期即可，如妖豆竞技场命名【FD_P_YdAct_JJC20180429】。 <br/>
* 查看扩展阅读，通用项目命名规则说明：[点击查看](http://192.168.1.26:8080/doku.php?id=git)
	
### 2.安装
* 克隆`【活动基础项目】`：`git clone http://qinlu@192.168.1.146:8080/r/FD_P_ActMode.git` 
* 克隆`【FD_P_XXX】`仓库到本地，接着创建分支`【release-v1.0.0】`（开发分支），然后把`【活动基础项目】`拷贝到这个分支下
* 在本地`【FD_P_XXX】`仓库安装脚手架npm依赖包：`npm install`，推荐使用`cnpm install`

### 3.运行
`node server.js`

### 4.访问
`http://a.yaodou.org:1505/src/index.html`

 **访问前注意事项：**
 需要在host文件中新增一行：`127.0.0.1  a.yaodou.org`（中间有空格），以防止运行时登录出现跨域错误，并且host文件调整后需要重启运行。

### 5.目录结构说明
![](https://www.showdoc.cc/server/api/common/visitfile/sign/8956f0fb4348bfd65992b599535ea12e?showdoc=.jpg)

目录结构特别说明：
- 【css】和【img】：都是打包后的资源文件
- 【js/app】：活动入口，处理活动所有逻辑
- 【js/config】：配置文件，例如url的配置
- 【js/lib】：第三方库文件
- 【js/tool】：工具函数，用于放置基础组件、全局公用函数、全局公用方法
![](https://www.showdoc.cc/server/api/common/visitfile/sign/e4c6af98ef45b71243d7617cea6ea103?showdoc=.jpg)
- 【js/tpl】：打包后的模板文件
- 【js/wht-game】：万花筒游戏组件，例如[大转盘](https://www.showdoc.cc/web/#/25702085933117?page_id=152163190164728)使用说明
- 【scss】：样式文件
![](https://www.showdoc.cc/server/api/common/visitfile/sign/b514e6926f0fb8441a6dd8fb188ee4d2?showdoc=.jpg)
- 【sprite】：打包前的图片位置
- 【spritemp】：雪碧图和样式的映射文件（不需要改动）
- 【tplhtml】：模板页面
- 【index.html】：首页
- 【pop-demo.html】：弹窗页面，主要用于快速调整弹窗的样式
- 【gulpConfig.json】：gulp配置文件，主要用于文件打包的配置项，包括雪碧图合并，脚本合并压缩处理等等
- 【serverPackage.json】：接口数据
![](https://www.showdoc.cc/server/api/common/visitfile/sign/cb49c165beddba1fec0171af4f0b1aae?showdoc=.jpg)