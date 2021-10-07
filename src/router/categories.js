const categoriesRoutes = [
  {
    path: '/add/payment/',
    component: () => import('@/components/Schedule'),
    children: [
      {
        path: 'Food?value=:value',
        name: 'food',
        component: () => import('@/components/Schedule'),
        props: true
      },
      {
        path: 'Food', // дубль чтобы можно было переходить на эти роуты напрямую
        name: 'food',
        component: () => import('@/components/Schedule'),
        props: true
      },
      {
        path: 'Transport?value=:value',
        name: 'transport',
        component: () => import('@/components/Schedule'),
        props: true
      },
      {
        path: 'Transport', // дубль чтобы можно было переходить на эти роуты напрямую
        name: 'transport',
        component: () => import('@/components/Schedule'),
        props: true
      },
      {
        path: 'Entertainment?value=:value',
        name: 'entertainment',
        component: () => import('@/components/Schedule'),
        props: true
      },
      {
        path: 'Entertainment', // дубль чтобы можно было переходить на эти роуты напрямую
        name: 'entertainment',
        component: () => import('@/components/Schedule'),
        props: true
      }
    ]
  }
]

export default categoriesRoutes
