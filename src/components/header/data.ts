export const getHeaderTitle = () => {
  return {
    title: 'W_Notes',
    ver: 'v0.0.12',
  }
}

export const getHeaderMenuData = () => {
  return [
    {
      id: 100,
      path: '/',
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
      path: '/not-found',
      icon: 'CoffeeCup',
      text: '后台管理',
    },
  ]
}
