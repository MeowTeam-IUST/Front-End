
import API from './API';
import { BASE_URL, HEADER } from './consts';
import axios from 'axios';


export default function Requests() {
  const AutorizeHeader = {
    ...HEADER,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // OrderFlow
  // ---------------------------------------------------------------//

  // add invoice item
  const addInvoiceItem = async (body) => {
    try {
      const res = await API().POST(
        "api/OrderFlow/add_invoiceItem",
        body,
        AutorizeHeader
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // delete invoice item
  const deleteInvoiceItem = async (body) => {
    try {
      const res = await API().POST(
        "api/OrderFlow/delete_invoiceItem",
        body,
        AutorizeHeader
      );
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // Get Invoice
  const getInvoice = async () => {
    try {
      const res = await API().GET(
        "api/OrderFlow/get_invoice",
        {},
        AutorizeHeader
      );
      // const res = await axios.get('https://1649-5-112-202-241.ngrok-free.app/api/OrderFlow/GetInvoice', {AutorizeHeader});
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // Check discount
  const checkDiscount = async (body) => {
    try {
      const res = await API().POST(
        "api/OrderFlow/check_discount",
        body,
        AutorizeHeader
      );
      // console.error(res);
      return res;
    } catch (err) {
      // console.log(err);
    }
  };

  // payment
  const payment = async (body) => {
    try {
      const res = await API().POST("api/OrderFlow/buy", body, AutorizeHeader);
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // callbakbuy
  const callbackBuy = async (body) => {
    try {
      const res = await API().POST(
        "api/OrderFlow/buy_callback",
        body,
        AutorizeHeader
      );
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  const callbackWallet = async (body) => {
    try {
      const res = await API().POST(
        "api/Wallet/charge_callback",
        body,
        AutorizeHeader
      );
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  // buy from wallet
  const buyFromWallet = async (body) => {
    try {
      const res = await API().POST(
        "api/OrderFlow/buy_with_wallet",
        body,
        AutorizeHeader
      );
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
      const res = await API().GET(
        "api/Account/get_profile",
        {},
        AutorizeHeader
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // edit profile
  const editProfile = async (body) => {
    try {
      const res = await API().POST(
        "api/Account/edit_profile",
        body,
        AutorizeHeader
      );
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // edit profile image
  const editProfileImage = async (body) => {
    try {
      const res = await API().POST(
        "api/Account/pofile_image_edit",
        body,
        AutorizeHeader
      );
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  //get frequency
  const getFrequency = async () => {
    try {
      const res = await API().GET("api/Account/get_Frequency", {}, AutorizeHeader);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }; 

  // ---------------------------------------------------------------//
  // ---------------------------------------------------------------//
  // Wallet
  // get wallet
  const getWallet = async () => {
    try {
      const res = await API().GET("api/Wallet/get_wallet", {}, AutorizeHeader);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // ---------------------------------------------------------------//

  // post comment
  const postComment = async (comment) => {
    try {
      const response = await API().POST(
        `api/Comment/add`,
        comment,
        AutorizeHeader // This is your authorization header
      );
      console.log('you did it');
      if (response.data && response.data.imageURL) {
        response.data.imageURL = `https://45.147.99.177:9001/${response.data.imageURL}`;
      }
      return response.data;
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };
  
  // getComments
// getComments
// getComments
const getComments = async (categoryId) => {
  try {
    const response = await API().GET(
      `api/Comment/get_all/${categoryId}`, // Use categoryId in your API endpoint
      {}, // Replace this with any necessary parameters
      AutorizeHeader // This is your authorization header
    );
    console.log("All comments : ",response);
    return response.data.data || []; // Return an empty array if data is undefined
  } catch (err) {
    console.error("Error fetching comments:", err);
    return []; // Return an empty array in case of an error
  }
};

  // getCategories
  const getAllCategories = async () => {
    try {
      const response = await API().GET(
        `api/Category/get_all_main_categories`,
        HEADER
      );
      // console.log("All categories : ",response);
      return response.data.data
    } catch (err) {
      console.error("Error fetching product details:", err);
      return { title: "", description: "" };
    }
  };

  // getCategories
  const get4mainCategory = async () => {
    try {
      const response = await API().GET(
        `api/Home/get_home`,
        HEADER
      );
      // console.log("All categories : ",response);
      return response.data.data
    } catch (err) {
      console.error("Error fetching product4 details:", err);
      return { title: "", description: "" };
    }
  };


  // getProduct
  const getCategoryDetails = async (id) => {
    try {
      if(id != undefined)
      {
        const response = await API().GET(
          `api/Category/get_by_Id/${id}`,
          {},
          HEADER
        );
        const productData = response.data.data;
        console.log("jhhgddrr", response);
        return productData; 

      }
    } catch (err) {
      console.error("Error fetching product details:", err);
      return { title: "", description: "" };
    }
  };
  // getProducts
  const getProducts = async (id) => {
    try {
      const response = await API().GET(`api/Product/get_all/${id}`, {}, HEADER);
      const productsData = response.data.data;
      console.log("Products:", productsData);
      return productsData;
    } catch (err) {
      console.error("Error fetching products:", err);
      return [];
    }
  };
  const getProduct = async (id) => {
    try {
      const response = await API().GET(`api/Product/get_by_Id/${id}`, {}, AutorizeHeader);
      const productsData = response.data.data;
      console.log("Products:", productsData);
      return productsData;
    } catch (err) {
      console.error("Error fetching products:", err);
      return [];
    }
  };
  const addCategory = async (data) => {
    try {
      const response = await API().POST(
        "api/Category/add",
        data,
        AutorizeHeader
      );
      console.log("Category added:", response);
      return response;
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };
  const EditCategory = async (data) => {
    try {
      const response = await API().POST(
        "api/Category/edit",
        data,
        AutorizeHeader
      );
      console.log("Category added:", response);
      return response;
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  // payment
  const chargeWallet = async (body) => {
    try {
      const res = await API().POST("api/Wallet/charge", body, AutorizeHeader);
      console.error(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  // callbakbuy
  // const callbackBuy = async (body) => {
  //   try {
  //     const res = await API().POST('api/OrderFlow/CallBackBuy', body, AutorizeHeader);
  //     console.error(res);
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return {
    postComment,
    callbackWallet,
    getCategoryDetails,
    getProducts,
    addCategory,
    postComment,
    getComments,
    addInvoiceItem,
    deleteInvoiceItem,
    getInvoice,
    checkDiscount,
    getProfile,
    payment,
    callbackBuy,
    buyFromWallet,
    getWallet,
    editProfile,
    editProfileImage,
    chargeWallet,
    getAllCategories,
    getFrequency,
    getProduct,
    EditCategory,
    get4mainCategory,
  };
}
