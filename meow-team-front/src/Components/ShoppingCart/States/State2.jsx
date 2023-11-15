import React from 'react'
import styles from './State2.module.scss'
export default function State2({changeState}) {
  const items = [
    {
      id: 1,
      title: "80 کریستال گنشین ایمپکت",
      price: "49000 تومان",
      img: "image1",
      quantity: 1,
      describthion: "هیچی",
    },
    {
      id: 2,
      title: "80 کریستال گنشین ایمپکت",
      price: "49000 تومان",
      img: "image1",
      quantity: 1,
      describthion: "هیچی",
    }
  ]
  const [describthion, setDescribthion] = React.useState('');

  return (
    <>
        <div className={styles.line}/>
        <div className={styles.main}>
          <div className={styles.box}>
            {items.map((item) => (
              <div className={styles.item}>
                <div className={styles.text1}>
                  <div>x{item.quantity}</div>
                  <div>{item.title}</div>
                </div>
                <div>قیمت : {item.price}</div>
              </div>
            ))
            }
          </div>
          <div className={styles.box}>
          <div className={styles.item}>
                <div>قیمت نهایی:</div>
                <div>168000 تومان</div>
              </div>
          </div>
          <div className={styles.box}>
            <div>توضیحات سفارش</div>
            <div className={styles.line}/>
            <textarea className={styles.textarea} rows={4} maxRows={4} placeholder="اطلاعات را اینجا وارد کنید ..." onChange={(e)=> setDescribthion(e.target.value)} />
          </div>
          <div className={styles.title1} onClick={()=>changeState(3)}>انتخاب روش پرداخت</div>
          <div className={styles.buttons}>
            <div className={styles.button1}>
              <div className={styles.header} onClick={()=>changeState(3)}>پرداخت مستقیم</div>
              <div>خرید از درگاه بانکی</div>
            </div>
            <div className={`${styles.button1} ${styles.button2}`}>
              <div className={styles.header}>برداشت از کیف پول</div>
              <div>موجودی 200 هزار تومان</div>
            </div>
          </div>
        </div>

    </>
  )
}
