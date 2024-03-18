import { MenuDataRecordRaw } from './components/pc/@types'

export const getHeaderTitle = () => {
  return {
    title: 'sz_notes',
    ver: 'v0.0.14',
  }
}

export const getHeaderMenuData = (): MenuDataRecordRaw => {
  return [
    {
      id: 100,
      path: '/client',
      icon: 'Lollipop',
      text: '首页',
    },
    {
      id: 200,
      path: '/not-found',
      icon: 'Refresh',
      text: '更新日志',
      children: [
        {
          id: 210,
          path: '',
          href: 'https://github.com/TKXZ/tk_blog_fe/tree/dev',
          icon: 'Watermelon',
          text: '前端',
        },
        {
          id: 220,
          path: '',
          href: 'https://github.com/TKXZ/tk_blog_be/tree/dev',
          icon: 'Cherry',
          text: '后端',
        },
      ],
    },
    {
      id: 300,
      path: '/system',
      icon: 'CoffeeCup',
      text: '后台管理',
    },
  ]
}
