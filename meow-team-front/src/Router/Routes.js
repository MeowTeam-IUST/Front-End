import LandingPage from '../Pages/LandingPage/LandingPage';
import LoginSignupPage from '../Pages/LoginSignupPage/LoginSignupPage';
const routes = [
    {
      path: '/',
      component: LandingPage,
      Private: false
    },
    {
      path: '/login',
      component: LoginSignupPage,
      Private: false
    },
  ];
  
  export default routes;
  