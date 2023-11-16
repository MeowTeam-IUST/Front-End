
import API from './API';
import { BASE_URL, HEADER } from './consts';
import axios from 'axios';


export default function Requests() {
  const AutorizeHeader = {
    ...HEADER,
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  // OrderFlow
  // ---------------------------------------------------------------//

  // add invoice item
  const addInvoiceItem = async (body) => {
    try {
      const res = await API().POST('api/OrderFlow/AddInvoiceItem', body, AutorizeHeader);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // delete invoice item
  const deleteInvoiceItem = async (body) => {
    try {
      const res = await API().POST('api/OrderFlow/DeleteInvoiceItem', body, AutorizeHeader);
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // Get Invoice 
  const getInvoice = async () => {
    try{
      const res = await API().GET('api/OrderFlow/GetInvoice',{}, AutorizeHeader);
      // const res = await axios.get('https://1649-5-112-202-241.ngrok-free.app/api/OrderFlow/GetInvoice', {AutorizeHeader});
      console.log(res);
      return res;
    }
    catch(err){
      console.log(err);
    }
  };

  // Check discount
  const checkDiscount = async (body) => {
    await API()
      .GET('api/OrderFlow/CheckDiscount', {body}, AutorizeHeader)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // payment
  const payment = async (body) => {
    try {
      const res = await API().POST('api/OrderFlow/buy', body, AutorizeHeader);
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // callbakbuy
  const callbackBuy = async (body) => {
    try {
      const res = await API().POST('api/OrderFlow/CallBackBuy', body, AutorizeHeader);
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };


  // ---------------------------------------------------------------//
  // ---------------------------------------------------------------//
  // get profile
  const getProfile = async () => {
    try {
      const res = await API().GET('api/Account/GetProfile', {}, AutorizeHeader);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };


  // ---------------------------------------------------------------//

  // post comment
  const postComment = async (body) => {
    try {
      const res = await API().POST(`'/api/comment/add'`, body, AutorizeHeader);
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };







  return {
    postComment,
    addInvoiceItem,
    deleteInvoiceItem,
    getInvoice,
    checkDiscount,
    getProfile,
    payment,
    callbackBuy
  };
}
