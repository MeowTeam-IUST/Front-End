
import API from './API';
import { BASE_URL, HEADER } from './consts';
import axios from 'axios';


export default function Requests(body) {
  const AutorizeHeader = {
    ...HEADER,
    Authorization: `${localStorage.getItem('token')}`
  };
  
  return {
   
  };
}
