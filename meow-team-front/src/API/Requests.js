
import API from './API';
import { BASE_URL, HEADER } from './consts';
import axios from 'axios';


export default function Requests() {
  const AutorizeHeader = {
    ...HEADER,
    Authorization: `${localStorage.getItem('token')}`
  };
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
// getProduct
const getCategoryDetails = async (id) => {
    try {
      const response = await API().GET(`api/Category/get_by_Id/${id}`,{},HEADER);
      const productData = response.data.data;
      console.log("jhhgddrr",response)
      return {
        title: productData.title,
        description: productData.description,
      };
    } catch (err) {
      console.error('Error fetching product details:', err);
      return { title: '', description: '' };
    }
  
  };
  // getProducts
const getProducts = async (id) => {
  try {
    const response = await API().GET(`api/Product/get_all_categoryProducts/${id}`, {}, HEADER);
    const productsData = response.data.data;
    console.log("Products:", productsData)
    return productsData;
  } catch (err) {
    console.error('Error fetching products:', err);
    return [];
  }
};
const addCategory = async (category) => {
  try {
    const response = await API().POST('api/Category/add', category, HEADER);
    console.log("Category added:", response)
    return response;
  } catch (err) {
    console.error('Error adding category:', err);
  }
};

return {
 postComment, getCategoryDetails , getProducts,addCategory,
};

}