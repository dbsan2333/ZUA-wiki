import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ZUA Wiki",
    titleTemplate: ':title - 郑航百科',
    lang: "zh-Hans",
    description: "ZUA Wiki是由郑航学子们共同编写的非官方的百科手册，涵盖学生们学习和生活的方方面面。",
    cleanUrls: true,
    srcDir: "./docs",
    head: [
        [
            // 禁止屏幕缩放
            "meta",
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1'
            }
        ],
        [
            // 百度统计
            "script",
            {},
            `var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?3e1a701ccf2fea86745812c8c088f274";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],
    markdown: {
        image: {
            // md图片懒加载
            lazyLoading: true
        }
    },
    // rewrites: {
    //     // 重写路径。至于为什么使用srcDir，因为为了public在源目录
    //     // 此方案还是不可行，废弃
    //     "docs/:p(.*)": ":p"
    // },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/img/zuaPlane.svg",
        siteTitle: 'ZUA Wiki',
        nav: [
            { text: "首页", link: "/" },
            { text: "社区", link: "/community/" },
            { text: "关于", link: "/aboutUs/" }
        ],
        socialLinks: [
            // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        lastUpdated: {
            text: "最后更新",
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'short'
            }
        },
        outline: {
            label: "本页导航"
        },
        sidebarMenuLabel: "百科目录",
        returnToTopLabel: "回到顶部",
        externalLinkIcon: true,
        darkModeSwitchLabel: "外观",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",

        sidebar: [
            {
                text: '关于郑航',
                items: [
                    { text: '学校简介', link: '/aboutZUA/' },
                    { text: '映像郑航', link: '/aboutZUA/videos' },
                    { text: "校园地图", link: "/map/" }
                ]
            },
            {
                text: '招生与入学',
                items: [
                    { text: '招生章程', link: '/enroll/brochure' },
                    { text: '招生计划', link: '/enroll/plan' },
                    { text: '新生入学须知', link: '/enroll/starting' }
                ]

            },
            {
                text: '校园生活',
                items: [
                    { text: '宿舍', link: '/life/hostel' },
                    { text: '日常消费', link: '/life/consumption' },
                    { text: '交通出行', link: '/life/transportation' },
                ]

            },
            {
                text: '人才培养',
                items: [
                    { text: '转专业', link: '/education/ChangingMajors' },
                ]

            },
            {
                items: [,
                    { text: "其他内容正在加急更新中……" },
                    { text: "关于本项目", link: "/aboutUs" }
                ]
            }
        ],

        footer: {
            message: `<a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2021014551号-2</a><br><a href="https://beian.mps.gov.cn/#/query/webSearch?code=42060002000113" rel="noreferrer" target="_blank">鄂公网安备42060002000113</a>`,
            copyright: 'Copyright © 2025 ZUA Wiki | Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a> '
        }
    }
})