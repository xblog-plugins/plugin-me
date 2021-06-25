// 使用博客系统提供的接口
const router =xBlog.router
const database =xBlog.database
const net =xBlog.net
const tools =xBlog.tools
const widget = xBlog.widget

// todo 记得加上图片字段

// 一些字段
const dbNavigation = "navigation"
const keyBackground = "animation_img"

// 注册我的导航接口
widget.addPage({
    background: tools.getSetting(keyBackground),
    file:"index.html",
    headMeta: {
        title: "个人介绍",
    },
    css: ["element"],
    script: ["vue","element","jquery"],
    url: "",
    full: false,
    side: false
},function (){
    // let db = database.newDb(dbDouBan)
    return {
        server: '/plugins/static/me'
    }
})
