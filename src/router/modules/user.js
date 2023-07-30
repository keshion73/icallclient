import MyInfo from '@/views/user/Myinfo'
import PasswordInfo from '@/views/user/PasswordInfo'
import Join from '@/views/user/join'

export default [{
    path: '/user',
    name: 'user',
    component: () => import('@/views/layout/MainLayout.vue'),
    children: [{
        path: '/user/myinfo',
        name: '내정보',
        component: MyInfo,
        meta: {
          groupName: "내정보",
        },
      },
      {
        path: '/user/passwordinfo',
        name: '비밀번호 변경',
        component: PasswordInfo,
        meta: {
          groupName: "내정보",
        },
      }
    ]
  },
  {
    path: '/user/join',
    name: 'user/join',
    component: () => import('@/views/layout/PageLayout.vue'),
    children: [{
      path: '/user/join',
      name: '회원가입',
      component: Join,
    }]
  },
]