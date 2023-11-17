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
        component: DefaultDashboard,
        icon: Dashboard,
        item : 0
    },
    {
        name: 'اطلاعات حساب کاربری',
        component: EditProfile,
        icon: User,
        item : 1

    },
    {
        name: 'سبد خرید',
        component: ShoppingCart,
        icon: Basket,
        item : 2
    },
    {
        name: 'سفارشات من',
        component: '',
        icon: history,
        item : 3
    },
    {
        name: ' کیف پول من ',
        component: '',
        icon: Wallet,
        item : 4
    },
    {
        name: 'علاقه‌مندی‌های من',
        component: '',
        icon: heart,
        item : 5
    },
    // {
    //     name: 'آدرس های من',
    //     component: '',
    //     icon: Route,
    //     item : 6
    // },
    {
        name: 'کامنت های من',
        component: '',
        icon: Comment,
        item : 7
    }]
