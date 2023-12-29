// define sidebar items
import User from '../../assets/User.svg'
import Basket from '../../assets/Basket.svg'
import Comment from '../../assets/comment.svg'
import Wallet1 from '../../assets/Wallet.svg'
import Route from '../../assets/Route.svg'
import history from '../../assets/history.svg'
import heart from '../../assets/heart.svg'
import Dashboard from '../../assets/Dashboard.svg'
import {EditProfile} from '../../Components/EditProfile/EditProfile'
import DefaultDashboard from '../../Components/DefaultDashboard/DefaultDashboard'
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart'
import { Wallet } from "../Wallet/Wallet"
import { MyOrders } from '../../Components/MyOrders/MyOrders'
// import { MyOrders } from '../../Components/MyOrders/MyOrders'
import {MyOrderApp} from '../../Components/MyOrders/App'
export const items = [
    {
        name: 'داشبورد',
        component: DefaultDashboard,
        icon: Dashboard,
        path: 'default',
        item : 0
    },
    {
        name: 'اطلاعات حساب کاربری',
        component: EditProfile,
        icon: User,
        path: 'editprofile',
        item : 1

    },
    {
        name: 'سبد خرید',
        component: ShoppingCart,
        icon: Basket,
        path: 'shoppingcart',
        item : 2
    },
    {
        name: 'سفارشات من',
        component: MyOrderApp,
        icon: history,
        path: 'history',
        item : 3
    },
    {
      name: ' کیف پول من ',
      component: Wallet,
      icon: Wallet1,
      path: 'wallet',
      item : 4
    },
    // {
    //     name: 'علاقه‌مندی‌های من',
    //     component: EditProfile,
    //     icon: heart,
    //     path: 'heart',
    //     item : 5
    // },
    // {
    //     name: 'آدرس های من',
    //     component: '',
    //     icon: Route,
    //     item : 6
    // },
    // {
    //     name: 'کامنت های من',
    //     component: EditProfile,
    //     icon: Comment,
    //     path: 'comment',
    //     item : 7
    // }
]
