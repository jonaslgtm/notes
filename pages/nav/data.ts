import type { NavData } from '../../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: '经常访问',
    items: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>'
        },
        title: 'GitHub',
        desc: '全球最大的同性交友网站',
        link: 'https://github.com'
      },
      {
        icon: './icons/youtube.svg',
        title: 'YouTube',
        desc: '油管，全球最大的视频分享平台',
        link: 'https://www.youtube.com'
      },
      {
        icon: 'https://www.bilibili.com/favicon.ico',
        title: '哔哩哔哩',
        desc: 'B站，全球最大的弹幕视频网站',
        link: 'https://www.bilibili.com'
      },
      {
        icon: 'https://www.douyin.com/favicon.ico',
        title: '抖音',
        desc: '全球最大的短视频平台',
        link: 'https://www.douyin.com/'
      },
      {
        icon: './icons/instagram.svg',
        title: 'Instagram',
        desc: 'ins，全球最大的图片社交平台',
        link: 'https://www.instagram.com/'
      },
      {
        icon: 'https://www.xiaohongshu.com/favicon.ico',
        title: '小红书',
        desc: '全球最大的生活方式分享平台',
        link: 'https://www.xiaohongshu.com'
      },
      {
        icon: 'https://www.zhihu.com/favicon.ico',
        title: '知乎',
        desc: '全球最大的知识分享平台',
        link: 'https://www.zhihu.com'
      },
      {
        icon: 'https://weibo.com/favicon.ico',
        title: '微博',
        desc: '全球最大的中文社交媒体平台',
        link: 'https://weibo.com/'
      },
      {
        icon: 'https://www.smzdm.com/favicon.ico',
        title: '什么值得买',
        desc: '兴趣消费指南平台',
        link: 'https://www.smzdm.com/'
      },
      {
        icon: 'https://www.apple.com.cn/favicon.ico',
        title: 'Apple',
        desc: '苹果中国官网',
        link: 'https://www.apple.com.cn/'
      },

    ]
  },
  {
    title: '开发参考',
    items: [
      {
        icon: {
          svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><path d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z" fill="#c9d1d9"></path><path d="M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27Zm2.43-8.88c-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23a.748.748 0 0 1-.18 1.47Z" fill="#228e6c"></path><path d="M14.56 13.89c-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z" fill="#228e6c"></path></svg>'
        },
        title: 'Quick Reference',
        desc: '为开发人员分享快速参考备忘清单【速查表】',
        link: 'https://wangchujiang.com/reference',
        badge: '开源'
      },
      {
        icon: 'https://gorse.io/logo.png',
        title: 'Gorse',
        desc: '一个使用Go语言开发的开源推荐系统',
        link: 'https://gorse.io/zh',
        badge: '开源'
      },
      {
        icon: './icons/youtube.svg',
        title: 'AST Explorer',
        desc: '一个在线的AST（抽象语法树）查看器',
        link: 'https://astexplorer.net',
        badge: '开源'
      },
    ]
  },
  {
    title: '在线文档工具',
    items: [
      {
        icon: 'https://shimo.im/favicon.ico',
        title: '石墨文档',
        desc: '在线协同办公系统平台,支持云端多人在线协作文档',
        link: 'https://shimo.im/',
      },
      {
        icon: 'https://docs.idqqimg.com/tim/docs/desktop/favicon.ico',
        title: '腾讯文档',
        desc: '腾讯旗下在线文档编辑与协作平台',
        link: 'https://docs.qq.com/',
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACH1BMVEUAAAA9kP8mpv9Fv/8QT94TXeQAfv8trP0xr/0VUdoAcv8LgPs1sf4AgP4QUuURTuEVl/ksq/wAg/84tf4NUt80sf0bnPsPUuAAYfsAgP4UTtYAY/8GXPQRkv1Jxv8AZP86tv9Bvv9Gv/9Atv8KiPUOVesAZ+wbS8wUl/kjo/sAYv8PVekjovxBu/8AY/8trPxCu/8AW/AAcvAxsP0npvsYTdElo/oQT9o+uP8AYv8KVOIHdugAYfwAfPwbfe49uf4XmfkcdOopo/oAYv86tf4AYf8TT9cZaeYVTdUJVOUcnvsAYv8Agv9Iwv8AYv9Jwf8bSs0gofoAY/8Ag/9Gv/8en/oAYf9Fv/8AWuQZS80AdO5BvP8AYv9DvP8Umfo9uv8LVOUAgf8amfk/uf8AY/8Ag/8Ahf8TUdgVT9UNWOknov8trPwxr/wmpvspqfs1sv0io/s5tf0AgP8bnfoMV+4AYPoAYv8AYf4AYfwAe/sen/oAd/gAXvYAff0LW/MLWfEOUN0PT9oSTtZAu/49uP0qqfweoPoXmvkAdPUAXPIAcfEKUuIWTNIXS88KXPYAWusOVeoPVOkPUuYQUeQQT+IMUeAUTdMZSs09uP4Aa+kAWOgAaeQIVOQIU+QAV+MRTd8STd0RTtgSl/kAW+8NWO8Abu0AbuwBZNsAg/8AYPwAc/MIVecAZuEAVeAAWt8AZN0JgvAIfOsJV+sTVuIAU9qil9AQAAAAa3RSTlMAAwb++A3+bkkkGxL8+Pf36tnTubCYjol4dmVjRjEvLysZFA7+/Pv6+fj39/b19fPw8O/u7Ovq6Ofn5+Xj4uDa2trZ1dPS0s/Ny7+9vLi4trapoqGgoJ2XkI+KgoJycGRhX1BNS0pHQj06IcCB3jkAAAIBSURBVDjLdZCHctpAFEWfCMU1ce8tTu+99957770nJFGwkE1sgyMTAginYbkAIQSD494+0G+ltTAacWZnNLt7dO/Og3Tqzl2og8wsvroAudEI+iy5s+6LzMZ7Bp1r5sFOQegRenAJwoEnoCXr6Mc0ihvSrhuK32vJK21Mva00760OWyz0KZYNbzJQmKXUF1o7rZ24rGngweETIGOwbH2nw/ZDUaM6grJVHzSs3R+NoqDy+lKLuwWX2618r03/QRalhNzbewo+qZyuZX4TVMFQubm3f3xy5VeZg49xsL8IC+mUH+1zeLyJ3pHkRCwWK7hvIGc/CYrwvIhtbXZ4hgYwJLm0LFf56QdhDRAq8wdZMypD3kT/SBJo6nfCMmWTc2WQlUO8GDIn2GSAUnuWGERJpIS4LR4HlWdFNITua9pl5s3h5vJ81tzscAAhuyTc3kZQ51CxqasvMmDGENyZyo1BX2iqLRAI0L7qvU2fv6Ex5mVbgana4XIGfb7QsI0KNcc4O4/Gv67I6Jjn5cmOvy4nGuFwaFipqFjN2YlBQkZn/N0dxAhiSfjUKzqHyxwq/0lIX0T0d6OAGb7dD0Gl/gzH8UqN6JcNp7HcBPN5esTO8U2oSCIpcZVkgwamepedxxpJROP4C9DBdHc9vlWSxG1VDOiTc53jpRW3TJCZ+vMXNeWzDz4DoNZyqecAAAAASUVORK5CYII=',
        title: '金山文档',
        desc: '金山旗下在线文档与协作平台，支持 WPS 云同步',
        link: 'https://www.kdocs.cn/',
      },
      {
        icon: 'https://www.feishu.cn/favicon.ico',
        title: '飞书',
        desc: '字节跳动旗下在线文档与协作平台',
        link: 'https://www.feishu.cn/',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original',
        title: '语雀',
        desc: '阿里巴巴旗下在线文档与知识管理平台',
        link: 'https://www.yuque.com/',
      },
    ]
  },
  {
    title: '资源收藏',
    items: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>'
        },
        title: 'Wechat Versions',
        desc: 'Windows微信历史版本收集仓库',
        link: 'https://github.com/tom-snow/wechat-windows-versions',
      },
      {
        icon: "./icons/jd.svg",
        title: '获取 Z-Library',
        desc: '查找最新的 Z-Library 可用链接',
        link: 'https://getzlib.com/zh',
      }
    ]
  },
  {
    title: 'CPS 联盟',
    items: [
      {
        icon: "./icons/jd.svg",
        title: '京东联盟',
        link: 'https://union.jd.com/',
      },
      {
        icon: 'https://www.taobao.com/favicon.ico',
        title: '淘宝联盟',
        link: 'https://pub.alimama.com/',
      },
      {
        icon: 'https://pinduoduo.com/favicon.png',
        title: '多多进宝',
        link: 'https://jinbao.pinduoduo.com/',
        badge: '拼多多'
      },
    ]
  }
]
