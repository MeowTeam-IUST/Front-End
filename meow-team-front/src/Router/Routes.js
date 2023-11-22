import LandingPage from '../Pages/LandingPage/LandingPage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import LoginSignupPage from '../Pages/LoginSignupPage/LoginSignupPage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AdminProduct from '../Pages/AdminProduct/AdminProduct';
import PaymentPage from '../Pages/PaymentPage/PaymentPage';
import ProductsCat from '../Pages/ProductsCat/ProductsCat';
import AdminOrder from '../Pages/AdminOrder/Orders';
import AdminOrderDetails from '../Pages/AdminOrderDetails/AdminOrderDetails';

const routes = [
    {
      path: '/',
      component: LandingPage,
      Private: false
    }
    ,
    {
      path: '/Product',
      component: ProductPage,
      Private: false
    },
    {
      path: '/login',
      component: LoginSignupPage,
      Private: false
    },
    {
      path : '/dashboard/*',
      component: Dashboard,
      Private: false
    }
    ,
    {
      path: '/Adminp',
      component: AdminProduct,
      Private: false
    },
    {
      path: '/PaymentStatus',
      component: PaymentPage,
      Private: false
    }
    ,
    {
      path: '/ProCat',
      component: ProductsCat,
      Private: false
    }
    ,
    {
      path: '/AdminOrder',
      component: AdminOrder,
      Private: false
    }
    ,
    {
      path: '/AdminOrderDetails',
      component: AdminOrderDetails,
      Private: false
    }
  ];
  
  export default routes;
  