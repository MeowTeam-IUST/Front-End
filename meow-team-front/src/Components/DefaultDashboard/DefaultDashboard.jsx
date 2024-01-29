import React, { useEffect , useState } from 'react'
import styles from './DefaultDashboard.module.scss'
import CategoryHeader from '../CategoryHeader/CategoryHeader'
import analytics from '../../assets/analytics.svg'
import plus from '../../assets/+.svg'
import GameList from '../GameList/GameList'
import Requests from '../../API/Requests'
import Productcard from '../Productcard/Productcard'
import { BASE_URL } from '../../API/consts'
export default function DefaultDashboard() {
  const Populares = [
    {
      name: "کالاف دیوتی موبایل",
      image: "https://www.uplooder.net/img/image/67/fe6e711a27d4daacee44991c75f39669/Rectangle-15.png"
      },
    {
      name: "گنشین ایمپکت",
      image: "https://www.uplooder.net/img/image/5/33f3f9c4f29317abe180f280f23bf643/Rectangle-15.png",
    },
    {
      name: "کلش آف کلنز",
      image: "https://www.uplooder.net/img/image/39/2eb40d11bff328e538eb1e44bcff5fc0/Rectangle-15.png",
    },
    {
      name: "ایپکس لجندز",
      image: "https://www.uplooder.net/img/image/25/288e04f40eb951dda7ce9db7979e2373/Rectangle-15.png",
    }
  ]
  const [wallet, setWallet] = useState(0);
  const [Frequency, setFrequency] = useState([]);
  
  const getwallet = async () => {
    try {
      const res = await Requests().getWallet();
      setWallet(res.data.data.amount);

    } catch (error) {
      console.error('Error fetching invoice:', error);
    } finally {
    }
  }
  const getFrequency = async () => {
    try {
      const res = await Requests().getFrequency();
      // console.log(res.data.data)
      setFrequency(res.data.data);
    } catch (error) {
      console.error('Error fetching Frequency:', error);
    } finally {
    }
  }  
  useEffect(() => {
    getwallet();
    getFrequency();
  }, [])

  return (
    <div className={styles.full}>
      <div className={styles.DefaultDashboard}>
        <div className={styles.card}>
          <div className={styles.detail}>
            <div className={styles.Text1}>موجودی کیف پول</div>
            <div className={styles.Text2}>{wallet} تومان</div>
          </div>
          <div
            className={styles.button}
            onClick={() => (window.location.href = "/dashboard/:wallet")}
          >
            افزایش موجودی
            <img src={plus} alt="Shopping Cart" />
          </div>
        </div>
        <div className={`${styles.card} ${styles.LastOrder}`}>
          <div className={styles.detail}>
            <div className={styles.Text1}>وضعیت آخرین سفارش</div>
            <div className={styles.Text2}> در انتظار پرداخت</div>
          </div>
          <div className={styles.button}>پیگیری سفارش</div>
        </div>
      </div>
      <div className={styles.Repeated}>
        <CategoryHeader icon={analytics} title={"خریدهای پرتکرار شما"} />
        <div className={styles.RepeatedItem}>
          {/* {console.log(Frequency)}
          <GameList Products={Frequency} isAdmin={false} /> */}
          {Frequency.map((product) => (
            <Productcard
              id={product.id}
              name={product.title}
              price={`${product.price} تومان`}
              image={`${BASE_URL + "/" + product.imageURL}`}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
