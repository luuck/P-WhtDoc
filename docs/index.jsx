---
banner:
  name: '一个优化活动开发效率与质量的库'
  desc: '把重复、相似、稳定的内容统一标准化，简化开发流程'
  btns: 
    - { name: '开 始', href: './documents/index.html', primary: true }
    - { name: 'Gitblit >', href: 'http://192.168.1.146:8080/summary/FD_P_ActMode.git' }
  caption: '当前版本: v2.0.0'
features: 
  - { name: '基础组件', desc: '全局code配置、全局ajax请求' }
  - { name: '弹窗组件', desc: '稳定固有的几个弹窗模板、以及扩展自定义弹窗' }
  - { name: '游戏组件', desc: '外部挂载，需要遵循一定规范' }
  - { name: '使用', desc: '结合定制的脚手架工具（ct-ge）实现活动的快速稳定开发' }

footer:
  copyRight:
    name: 'CtTeam'
    href: 'http://192.168.1.26:8080/doku.php?id=start'
  links:
    团队网址:
      - { name: 'CtTeam', href: 'http://doc.uc108.org:8002/index.php?s=/Home/Item/index' }
    Git仓库:
      - { name: 'Gitblit', href: 'http://192.168.1.146:8080/summary/FD_P_ActMode.git' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />