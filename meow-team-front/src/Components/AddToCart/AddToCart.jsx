import React from 'react'
import styles from './AddToCart.module.scss'
import plus from '../../assets/+.svg'
import negetive from '../../assets/-.svg'
export default function AddToCart() {
    const [quantity, setQuantity] = React.useState(1);
    const [describthion, setDescribthion] = React.useState('');
    const HandleChange = (count) => {
        if (quantity + count > 0) {
            setQuantity(quantity + count);
        }
    }
  return (
    <div className={styles.AddToCart}>
        <div className={styles.question}>لطفا نحوه ورود و یوزرنیم و پسورد اکانت خود را وارد کنید:</div>
        <div className={styles.line}/>
        <textarea className={styles.textarea} rows={4} maxRows={4} placeholder="اطلاعات را اینجا وارد کنید ..." onChange={(e)=> setDescribthion(e.target.value)} />
        <div className={styles.down}>
            <div className={styles.button}>اضافه به سبد خرید</div>
            <div className={styles.count}>
              <img src={plus} alt="" className={styles.icon} onClick={() => HandleChange(1)} />
              <div>{quantity}</div>
              <img src={negetive} alt="" className={styles.icon} onClick={() => HandleChange(-1)} />
            </div>
        </div>
    </div>
  )
}
