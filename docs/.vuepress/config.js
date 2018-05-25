module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    head: [["link", { rel: "icon", href: `/logo.png` }]],
    base: "/",
    dest: "./dist",
    configureWebpack: {
        resolve: {
            alias: {
                '@images': 'public/images'
            }
        },
    },
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: '前端', link: '/fe/'},
            {text: '杂感', link: '/flash/'},
        ],
        sidebarDepth: 2,
        sidebar: [
            '/fe/z-index',
            '/fe/custome-element',
        ]
    },
    evergreen: true, // 只关注较新的浏览器
}