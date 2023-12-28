import React from 'react'
import styles from './AddToCart.module.scss'
import plus from '../../assets/+.svg'
import negetive from '../../assets/-.svg'
import Requests from '../../API/Requests'
export default function AddToCart({id , CardDescription}) {
    const [quantity, setQuantity] = React.useState(1);
    const [describthion, setDescribthion] = React.useState('');
    const HandleChange = (count) => {
        if (quantity + count > 0) {
            setQuantity(quantity + count);
        }
    }
    const [RequestMessage, setRequestMessage] = React.useState('');
    const AddToCartReq = async () => {
      /*
      {
        "productId": 0,
        "description": "string"
      }
      */
      let data = {
        productId: id,
        description: describthion
      }
      const res = await Requests().addInvoiceItem(data);
      console.log(res)
      if (res.data.isSuccess) {
        console.log('success');
        setRequestMessage("محصول با موفیت به سبد خرید اضافه شد");
      }
      else {
        console.log(res.data.message);
        setRequestMessage(res.data.message);
      }

    }

  return (
    <div className={styles.AddToCart}>
        <div className={styles.question}>{CardDescription}</div>
        <div className={styles.line}/>
        <textarea className={styles.textarea} rows={4} maxRows={4} placeholder="اطلاعات را اینجا وارد کنید ..." onChange={(e)=> setDescribthion(e.target.value)} />
        {
          RequestMessage !== '' ?
          <div className={styles.RequestMessage}>{RequestMessage}</div> 
          :
          <div className={styles.down}>
              <div className={styles.button} onClick={()=>AddToCartReq()}>اضافه به سبد خرید</div>
              <div className={styles.count}>
                <img src={plus} alt="" className={styles.icon} onClick={() => HandleChange(1)} />
                <div>{quantity}</div>
                <img src={negetive} alt="" className={styles.icon} onClick={() => HandleChange(-1)} />
              </div>
          </div>
        }

    </div>
  )
}
