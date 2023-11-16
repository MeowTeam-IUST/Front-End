import React, { useEffect } from 'react'
import Requests from '../../API/Requests';

export default function PaymentPage() {
    let query = new URLSearchParams(window.location.search);
    console.log(query.get("Authority"));
    console.log(query.get("Status"));
    const payment = async () => {
      console.log({authority: query.get("Authority"), status: query.get("Status")})
        const res = await Requests().callbackBuy({"Authority": query.get("Authority"), "Status": query.get("Status")});
        console.log(res.data);
    }
    useEffect(() => {
        payment();
    }
    , [])


  return (
    <div>PaymentPage</div>
  )
}
