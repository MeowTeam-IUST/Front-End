import LandingPage from '../Pages/LandingPage/LandingPage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import AdminProduct from '../Pages/AdminProduct/AdminProduct';
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

    }
    ,
    {
      path: '/Adminp',
      component: AdminProduct,
      Private: false
    }
  ];
  
  export default routes;
  