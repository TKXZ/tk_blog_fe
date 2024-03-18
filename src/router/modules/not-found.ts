const not_found = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    components: {
      'client-main': () => import('@/views/not-found/NotFound.vue'),
      'system-main': () => import('@/views/not-found/NotFound.vue'),
    },
  },
]

export default not_found
