// define sidebar items
import User from '../../assets/User.svg'
import EditProfile from '../../Components/EditProfile/EditProfile'
import DefaultDashboard from '../../Components/DefaultDashboard/DefaultDashboard'
export const items = [
    {
        name: 'داشبورد',
        component: DefaultDashboard,
        icon: User,
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
        component: '',
        icon: User,
        item : 2
    },
    {
        name: 'سفارشات من',
        component: '',
        icon: User,
        item : 3
    },
    {
        name: ' کیف پول من ',
        component: '',
        icon: User,
        item : 4
    },
    {
        name: 'علاقه‌مندی‌های من',
        component: '',
        icon: User,
        item : 5
    },
    {
        name: 'آدرس های من',
        component: '',
        icon: User,
        item : 6
    },
    {
        name: 'کامنت های من',
        component: '',
        icon: User,
        item : 7
    }]
