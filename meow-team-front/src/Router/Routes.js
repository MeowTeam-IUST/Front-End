import LandingPage from '../Pages/LandingPage/LandingPage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import AdminProduct from '../Pages/AdminProduct/AdminProduct';
import ProductsCat from '../Pages/ProductsCat/ProductsCat';
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
    ,
    {
      path: '/ProCat',
      component: ProductsCat,
      Private: false
    }
  ];
  
  export default routes;
  