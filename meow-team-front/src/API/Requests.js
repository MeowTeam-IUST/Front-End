
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







  return {
   postComment,
  };
}
