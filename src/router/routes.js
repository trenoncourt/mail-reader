export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      {path: '', name: 'index', component: () => import('pages/index')},
      {path: '/mail', name: 'mail', component: () => import('pages/MailPreview')}
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
