import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ZUA Wiki",
    titleTemplate: ':title - 郑航百科全书 | ZUA Wiki',
    lang: "zh-Hans",
    description: "ZUA Wiki是由郑航学子们共同编写的非官方的百科手册，涵盖学生们学习和生活的方方面面。",
    cleanUrls: true,
    srcDir: "./docs",
    head: [
        [
            // 关键词
            "meta",
            {
                name: "keywords",
                content: "郑航百科全书,zuawiki,郑航百科,郑州航空航天大学,郑州航空工业管理学院,郑航,zua"
            }
        ],
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
        },
        config: (md) => {
            // https://github.com/HanochMa/vitepress-markdown-timeline
            md.use(timeline);
        },
    },

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
            { icon: 'github', link: 'https://github.com/dbsan2333/ZUA-wiki' }
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
                text: '郑航速查',
                items: [
                    { text: '速查索引', link: '/quick/' },
                    { text: '常用网站', link: '/quick/websites' },
                    { text: '常用部门与电话', link: '/quick/phones' },
                    { text: '重要时间表', link: '/quick/calendar' }
                ]
            },
            {
                text: '关于郑航',
                items: [
                    { text: '学校简介', link: '/aboutZUA/' },
                    { text: '校史与校庆', link: '/aboutZUA/history' },
                    { text: '特色项目', link: '/aboutZUA/featured' },
                    { text: '校园地图', link: '/aboutZUA/map' },
                    { text: '校园地标', link: '/aboutZUA/landmarks' },
                    { text: '映像郑航', link: '/aboutZUA/videos' }
                ]
            },
            {
                text: '招生与入学',
                items: [
                    { text: '学院介绍', link: '/enroll/colleges' },
                    { text: '专业详解', link: '/enroll/majors' },
                    { text: '招生章程', link: '/enroll/brochure' },
                    { text: '招生计划', link: '/enroll/plan' },
                    { text: '历年录取分数', link: '/enroll/admission-score' },
                    { text: '特殊类型招生', link: '/enroll/special-types' },
                    { text: '新生入学须知', link: '/enroll/starting' },
                    { text: '开学前必做', link: '/enroll/freshman-before' },
                    { text: '新生入学清单', link: '/enroll/freshman-checklist' },
                    { text: '军训指南', link: '/enroll/military-training' },
                    { text: '新生答疑FAQ', link: '/enroll/freshman-faq' }
                ]
            },
            {
                text: '学业与教务',
                items: [
                    { text: '选课指南', link: '/study/select-course' },
                    { text: '教务系统与校历', link: '/study/jw-system' },
                    { text: '考试与成绩', link: '/study/exam-score' },
                    { text: '图书馆使用', link: '/study/library' },
                    { text: '转专业', link: '/study/changing-majors' },
                    { text: '辅修与交流', link: '/study/minor-exchange' },
                    { text: '大类分流（已取消）', link: '/study/major-selection' }
                ]
            },
            {
                text: '校园生活',
                items: [
                    { text: '宿舍', link: '/life/hostel' },
                    { text: '宿舍生活技巧', link: '/life/hostel-extra' },
                    { text: '日常消费', link: '/life/consumption' },
                    { text: '校园网络', link: '/life/network' },
                    { text: '食堂指南', link: '/life/canteen' },
                    { text: '超市与便利店', link: '/life/supermarket' },
                    { text: '外卖与跑腿', link: '/life/delivery' },
                    { text: '快递驿站', link: '/life/express' },
                    { text: '打印文印', link: '/life/print' },
                    { text: '洗浴与洗衣', link: '/life/bath-laundry' },
                    { text: '交通出行', link: '/life/transportation' },
                    { text: '出行补充', link: '/life/traffic-detail' },
                    { text: '周边美食地图', link: '/life/food-around' }
                ]
            },
            {
                text: '学生事务',
                items: [
                    { text: '证件与学籍办理', link: '/affairs/id-xueji' },
                    { text: '党团组织', link: '/affairs/party-league' },
                    { text: '学生组织与社团', link: '/affairs/club-org' },
                    { text: '第二课堂学分', link: '/affairs/second-classroom' },
                    { text: '奖助与资助', link: '/affairs/scholarship-aid' },
                    { text: '请假与留校', link: '/affairs/leave-stay' }
                ]
            },
            {
                text: '健康与安全',
                items: [
                    { text: '校医院', link: '/health/hospital' },
                    { text: '医保与转诊', link: '/health/insurance' },
                    { text: '附近医院', link: '/health/nearby-hospital' },
                    { text: '心理咨询', link: '/health/psychology' },
                    { text: '心理危机与求助', link: '/health/crisis' },
                    { text: '体育运动与体测', link: '/health/sports-ptest' },
                    { text: '校园安全', link: '/health/safety' },
                    { text: '电信诈骗与防骗', link: '/health/antifraud' }
                ]
            },
            {
                text: '毕业与发展',
                items: [
                    { text: '考证与竞赛', link: '/future/certificates' },
                    { text: '保研与推免', link: '/future/baoyan' },
                    { text: '考研全流程', link: '/future/kaoyan' },
                    { text: '考公考编', link: '/future/civil-service' },
                    { text: '就业与实习', link: '/future/career' },
                    { text: '毕业与学位', link: '/future/graduation' }
                ]
            },
            {
                text: '社区',
                items: [
                    { text: '新生群与官方群识别', link: '/community/freshman-groups' },
                    { text: '社团与部门招新群', link: '/community/clubs-groups' },
                    { text: '课程与竞赛交流群', link: '/community/study-groups' },
                    { text: '老乡群列表', link: '/community/hometown-groups' },
                    { text: '开学防坑', link: '/community/faq-antifraud' },
                    { text: '学长学姐说（2024）', link: '/archive/2024/seniorsSpeak2024' }
                ]
            },
            {
                items: [
                    { text: '关于本项目', link: '/aboutUs' },
                    { text: '历史版本归档', link: '/archive/' }
                ]
            }
        ],

        footer: {
            message: `<a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2021014551号-2</a><br><a href="https://beian.mps.gov.cn/#/query/webSearch?code=42060002000113" rel="noreferrer" target="_blank">鄂公网安备42060002000113</a>`,
            copyright: 'Copyright © 2025 ZUA Wiki | Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a> '
        }
    }
})