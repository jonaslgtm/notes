import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '导航',
        link: '/nav',
    },
    {
        text: "博客",
        link: '/blog',
        activeMatch: '^/blog',
    },
    {
        text: "学习笔记",
        activeMatch: '^/review',
        items: [
            { text: "Golang篇", link: "/review/golang/map" },
            { text: "Python篇", link: "/review/python/pyside6" },
            { text: "Redis篇", link: "/review/redis/interview-1" },
        ]
    },
    {
        text: 'Workflow',
        items: [
            {
                items: [
                    { text: '编程规范', link: '/workflow/style-guide' },
                ]
            },
            {
                items: [
                    { text: '常用正则整理', link: '/workflow/utils/regexp' },
                    { text: '常用代码片段', link: '/workflow/utils/snippets' }
                ]
            },
            {
                items: [
                    { text: 'Git 命令清单', link: '/workflow/git/command' },
                    { text: 'Git 常用命令', link: '/workflow/git/common-command' },
                    { text: 'Git 多账户配置', link: '/workflow/git/multi-account' }
                ]
            },
        ],
        activeMatch: '^/workflow'
    },
    {
        text: '提效工具',
        items: [
            {
                text: '软件推荐与配置',
                items: [
                    { text: 'iOS', link: '/efficiency/software/ios' },
                    { text: 'MacOS', link: '/efficiency/software/mac' },
                    { text: 'Windows', link: '/efficiency/software/windows' },
                    { text: '跨平台软件', link: '/efficiency/software/cross-platform' },
                    { text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' },
                ]
            },
        ],
        activeMatch: '^/efficiency'
    },
    {
        text: "知乎专栏",
        link: '/zhihu',
        activeMatch: '^/zhihu',
    },
    {
        text: 'About',
        link: '/about'
    }
]
