// define sidebar items
import User from '../../assets/User.svg'
import Basket from '../../assets/Basket.svg'
import comment from '../../assets/comment.svg'
import Wallet from '../../assets/Wallet.svg'
import Route from '../../assets/Route.svg'
import history from '../../assets/history.svg'
import heart from '../../assets/heart.svg'
import Dashboard from '../../assets/Dashboard.svg'
import AdminProduct from '../AdminProduct/AdminProduct'
import ProductsCat from '../ProductsCat/ProductsCat'
import {OrderApp} from '../AdminOrder/app'
export const items = [
    {
        name: 'داشبورد',
        component: AdminProduct,
        icon: Dashboard,
        path: 'default',
        item : 0
    },
    {
        name: 'سفارشات',
        component: OrderApp,
        icon: Basket,
        path: 'Orders',
        item : 1

    },
    {
        name: 'محصولات',
        component: ProductsCat,
        icon: Basket,
        path: 'Products/*',
        item : 2
    },
    {
        name: 'کد تخفیف',
        component: AdminProduct,
        icon: history,
        path: 'SalesStatus',
        item : 3
    }
]
