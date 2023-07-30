import Affiliate from '@/views/alliance/Affiliate'

export default [{
    path: '/user',
    name: 'user',
    component: () => import('@/views/layout/MainLayout.vue'),
    children: [{
        path: '/alliance/affiliate',
        name: '제휴하기',
        component: Affiliate,
        meta: {
            groupName: "제휴",
        },
    },
    ]
},
]