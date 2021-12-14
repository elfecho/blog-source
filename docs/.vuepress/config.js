module.exports = (site) => ({
  title: "Elfecho",//待修改
  theme: 'reform',
  ga: 'UA-xxx-1',//待修改
  themeConfig: {
    repo: "https://github.com/xuzhongpeng",//待修改
    logo: '/images/logo.png',//待修改
    editLinkText: "有问题，联系我",//待修改
    tags: "tags",
    gitalk: {//如果不需要gittalk，请删除这个标签
      // gitalk的主要参数
      clientID: `xxx`,
      clientSecret: `xxx`,
      repo: `xuzhongpeng.github.io`,
      owner: "xuzhongpeng",
      admin: ["Elfecho"],
      accessToken: 'xxx',
      labelRule: `(title,path)=> {
        let paths=path.split('/')
        if(paths.length>0){
          let res = paths.pop()
          if(res===''){
            res=paths.pop()
          }
          res = res.slice(-50)
          return res
        }else{
          return title
        }
      }`
    },
    markdown: {
      anchor: { permalink: true },
    },
    nav: [
      { text: "主页", link: "/", icon: 'jia' },
      {
        text: "博文",
        icon: 'zhi',//使用的是iconfont的图标
        items: [
          { text: "前端", link: "/blog/frontend/" },
          { text: "flutter", link: "/blog/flutter/" }
        ]
      },
      {
        text: "文档",
        icon: 'shuben',
        items: [
          {
            text: "vuepress-theme-reform",
            link: "/document/vuepress-theme-reform"
          },
          {
            text: "弹幕插件文档",
            link: "/document/弹幕插件文档"
          }
        ]
      },
      {
        text: "标签云",
        link: '/tags/',
        tags: true
      },
      { text: "关于我", link: "/about/" }
    ],
    sidebarDepth: 5,
    lastUpdated: "Last Updated"
  },
  plugins: [
    ['@vuepress/back-to-top'],
  ]
});
