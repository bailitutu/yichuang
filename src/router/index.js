import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main/index'
import home from '@/pages/home/index'
import customMade from '@/pages/customMade/index'
import originality from '@/pages/originality/index'
import mine from '@/pages/mine/index'
import concern from '@/pages/mine/concern'
import addressList from '@/pages/mine/addressList'
import addressEdit from '@/pages/mine/addressEdit'
import changeName from '@/pages/mine/changeName'
import message from '@/pages/mine/message'
import shopIn from '@/pages/mine/shopIn'
import myWallet from '@/pages/mine/myWallet'
import transactionDetails from '@/pages/mine/transactionDetails'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: home
                },
                {
                    path: '/customMade',
                    name: 'customMade',
                    component: customMade
                },
                {
                    path: '/originality',
                    name: 'originality',
                    component: originality
                },
                {
                    path: '/mine',
                    name: '我的',
                    component: mine
                }
            ]
        },
        {
            path: '/concern/:item',
            name: 'concern',
            component: concern
        }, {
            path: '/addressList',
            name: 'addressList',
            component: addressList
        }, {
            path: '/addressEdit',
            name: 'addressEdit',
            component: addressEdit
        }, {
            path: '/changeName',
            name: 'changeName',
            component: changeName
        }, {
            path: '/message',
            name: 'message',
            component: message
        }, {
            path: '/shopIn',
            name: 'shopIn',
            component: shopIn
        }, {
            path: '/myWallet',
            name: 'myWallet',
            component: myWallet
        }, {
            path: '/transDetail',
            name: 'transDetail',
            component: transactionDetails
        }
    ]
})
