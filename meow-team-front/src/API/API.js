import axios from 'axios';
import { BASE_URL } from './consts';

export default function API() {
  const instance = axios.create();

  // GET function
  async function GET(endpoint, params, header) {
    try {
      const res = await instance.get(`${BASE_URL}/${endpoint}`, {
        params: params,
        headers: header
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err; // Re-throw the error to handle it elsewhere if needed
    }
  }

  // POST function
  async function POST(endpoint, body, header) {
    try {
      const res = await instance.post(`${BASE_URL}/${endpoint}`, body, {
        headers: header
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // PUT function
  async function PUT(endpoint, body, header) {
    try {
      const res = await instance.put(`${BASE_URL}/${endpoint}`, body, {
        headers: header
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // DELETE function
  async function DEL(endpoint, params, header) {
    try {
      const res = await instance.delete(`${BASE_URL}/${endpoint}`, {
        data: params,
        headers: header
      });
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return {
    GET,
    POST,
    PUT,
    DEL
  };
}
