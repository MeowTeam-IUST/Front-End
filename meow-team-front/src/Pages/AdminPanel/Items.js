// define sidebar items
import User from '../../assets/User.svg'
import Basket from '../../assets/Basket.svg'
import Comment from '../../assets/Comment.svg'
import Wallet from '../../assets/Wallet.svg'
import Route from '../../assets/Route.svg'
import history from '../../assets/history.svg'
import heart from '../../assets/heart.svg'
import Dashboard from '../../assets/Dashboard.svg'
import {EditProfile} from '../../Components/EditProfile/EditProfile'
import DefaultDashboard from '../../Components/DefaultDashboard/DefaultDashboard'
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart'
export const items = [
    {
        name: 'داشبورد',
        component: '',
        icon: Dashboard,
        path: 'default',
        item : 0
    },
    {
        name: 'سفارشات',
        component: '',
        icon: Basket,
        path: 'Orders',
        item : 1

    },
    {
        name: 'محصولات',
        component: "",
        icon: Basket,
        path: 'Products',
        item : 2
    },
    {
        name: 'وضعیت فروش',
        component: "",
        icon: history,
        path: 'SalesStatus',
        item : 3
    }
]
