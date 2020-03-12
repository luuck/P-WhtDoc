# 开发流程

#### 1.参加PRD会议
* 了解需求：对功能进行判断，是否具有可行性；
* 确定排期：技术评审时间、前端开发和完成时间、联调时间；
* 梳理组件：prd会议评审结束后，优先梳理此次活动需要的组件，查看[pc开发库](http://192.168.1.26:8080/doku.php?id=pctoollist)中是否存在可复用的组件。

#### 2.技术评审
* 编写接口文档，查看参考文档 [妖豆2018竞技场活动](http://doc.uc108.org:8002/index.php?s=/47&amp;page_id=1146)，查看扩展阅读[通用的接口规范](http://192.168.1.26:8080/doku.php?id=outguide:interface:3.0.0)。
* 确认功能点和交互方式以及接口需要的注意事项，查看参考文档 [妖豆2018竞技场活动](http://naotu.baidu.com/file/5d35a5ba93d55c40f8523fcef408b4ab)，访问密码：`UWEt`。
>
    1. 如活动未开始、已结束、活动期间各个状态的交互；
    2. 妖币数量兼容1-8位数字，用户名兼容（16个w）；
    3. 空数据的展现方式和交互方式；
    4. 溢出隐藏的内容，需要写title属性；
    5. 灰色按钮无特殊要求，做无响应处理;
    6. 确定接口的dataType类型：一般是json，可能会出现jsonp的格式；
    7. 确定接口的contentType类型；
    8. 确定兼容方案，某些酷炫效果只能在高级浏览器呈现，低级浏览器可直接忽略需要确认。

* 文档都写好后，邀请相关人员(运营、后端、测试）参加技术评审会议，讲解功能交互文档和接口文档，共同协商确认后进入开发阶段。

#### 3.开发环境搭建
[查看](env.html)

#### 4.代码编写、自测联调
* 活动代码编写逻辑：(友情提示：右击图片在新标签中打开图片，点击放大可查看清晰的大图。)
![](https://www.showdoc.cc/server/api/common/visitfile/sign/2994ed2fbe7664f63c7e48cbcdcd1c86?showdoc=.jpg)
* 自测联调：测试功能、兼容性测试、对接后端接口，扩展阅读[常见bug](bug.html)

#### 5.提测发布（ftp上传）

* ftp静态资源的测试版服务器IP：`192.168.1.18`；
* ftp上传权限申请：查看[服务器地址申请](http://192.168.1.26:8080/doku.php?id=rule:ftpserverapply)(有的请忽略)，扩展阅读[ftp列表](http://192.168.1.26:8080/doku.php?id=home:chenyy:ftp)；
* ftp静态资源路径：	

<p style="font-size:12px;">根据组内约定来放置资源路径，最后一次更新2018.03.01。</p>

|站点|文件位置|项目名|
|:----    |:-------    |:--- |
|  妖豆活动-开发版  |/www2/CtStatic_dev/yd/action/     |xxx |
|  妖豆活动-提测版  |/www2/CtStatic_test/yd/action/     |xxx |
|  妖豆活动-测试稳定版  |/www2/CtStatic/yd/action/     |xxx |
| 同城游活动-开发版  |/www2/CtStatic_dev/uc/action/     |xxx |
| 同城游活动-提测版  |/www2/CtStatic_test/uc/action/     |xxx |
| 同城游活动-测试稳定版  |/www2/CtStatic/uc/action/     |xxx |

> 无后端参与需要编写提测邮件(提测邮件模板暂时找组长拿)到测试人员那里，抄送组长、测试组长，有后端参与可由后端统一编写提测邮件。

#### 6.进行三轮bug修复
* 测试会把每轮bug提到[禅道](http://192.168.1.15/zentao/user-login-L3plbnRhby9idWctdmlldy0xMzM4MC5odG1s.html)；
* 禅道bug修改规范，[点击查看](http://192.168.1.26:8080/doku.php?id=rule:bug)；
* 每结束一轮测试，才可以上传修复好的bug，如果有紧急bug修复好后可先咨询测试是否可上传，测试同意后，再进行上传发布；
* 确保每轮提测前自测通过；
* 确保最后一轮测试提测无任何bug。

#### 7.发布预发版
把资源打包好后发给组长，由组长进行发布

#### 8.发布正式版
把资源打包好后发给组长，由组长进行发布。

#### 9.活动总结
* 总结整个项目中遇到的问题，并整理可优化的bug到showdoc的[常见的bug](https://www.showdoc.cc/web/#/46738327410578?page_id=363026305995473)这个目录下边；
* wiki上更新git目录和项目地址，备份到[pc项目列表](http://192.168.1.26:8080/doku.php?id=gitlist:pc)

