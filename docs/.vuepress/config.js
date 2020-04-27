module.exports = {
    base: '/docs/',
    title: 'Wisdom UI',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [2]
        }
    },
    themeConfig: {
        logo: '/images/wc.png',
        navbar: true,
        nav: [
            { text: '设计', link: '/design/' },
            { text: '文档', link: '/introduce/' },
            { text: '组件', link: '/components/' }
        ],
        sidebar: {
            '/design/': [
                {
                    title: 'Wisdom UI', // 必要的
                    path: '/design/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1 // 可选的, 默认值是 1
                }
            ],
            '/introduce/': [
                {
                    title: 'Wisdom UI of Vue',
                    path: '/introduce/',
                    collapsable: false,
                    sidebarDepth: 1
                },
                {
                    title: '快速上手',
                    path: '/introduce/getting-started/',
                    collapsable: false,
                    sidebarDepth: 1
                }
            ],
            '/components/': [
                {
                    title: 'components',
                    path: '/components/',
                    collapsable: false,
                    sidebarDepth: 1
                },
                {
                    title: 'hello world',
                    path: '/components/hello-world/',
                    collapsable: false,
                    sidebarDepth: 1
                },
                {
                    title: 'input tag',
                    path: '/components/input-tag/',
                    collapsable: false,
                    sidebarDepth: 1
                },
            ]
        }
    }
};
