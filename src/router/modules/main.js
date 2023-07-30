import Main from '@/views/main/Main'

export default [
    {
        path: '',
        name: 'Main',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Main',
                component: Main,
                meta: {
                    groupName: "HOME",
                },
            },
        ]
    },
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Main',
                component: Main,
                meta: {
                    groupName: "HOME",
                },
            },
        ]
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/main',
                name: 'Main',
                component: Main,
                meta: {
                    groupName: "HOME",
                },
            },
        ]
    },
]