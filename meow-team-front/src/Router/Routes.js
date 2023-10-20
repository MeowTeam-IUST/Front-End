import LandingPage from '../Pages/LandingPage/LandingPage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import LoginSignupPage from '../Pages/LoginSignupPage/LoginSignupPage';
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
  ];
  
  export default routes;
  