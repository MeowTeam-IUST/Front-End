import React from 'react'
import { useState,useEffect } from 'react';
import styles from './AdminProduct.module.scss'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import GameList from '../../Components/GameList/GameList'
import gameControlle from '../../assets/game-controlle.svg'
import image1 from '../../assets/1.png'
export default function AdminProduct(){
    const [showPopup, setShowPopup] = useState(false);
    const Theothers=[
        {
            name: "اکانت اسپاتیفای",
            image: "https://www.uplooder.net/img/image/89/54ad5876dae49ac4bec1f0d9f463f7aa/Rectangle-15.png",
          },
          {
            name: "اکانت یوتوب",
            image: "https://www.uplooder.net/img/image/83/de88e9e0156eb4316ed2a09adce3b881/Rectangle-15.png",
          },
          {
            name: "چت جی پی تی",
            image: "https://www.uplooder.net/img/image/76/146490c14cd541b0624f60c4d0e7241a/Rectangle-15.png",
          },
          {
            name: "اکانت نتفلیکس",
            image: "https://www.uplooder.net/img/image/32/b840311b7a81338bbdec340278ed76fb/Rectangle-15.png",
          },

    ]
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
    return(
        <div  className={styles.whole}>
     <div className={styles.allgames}>
          <CategoryHeader icon={gameControlle} title={"همه بازی‌ها"}/>
          <GameList Products={Populares} isAdmin={true}/>
      </div>
      <div className={styles.allgames}>
          <CategoryHeader icon={gameControlle} title={"دیگر محصولات"}/>
          <GameList Products={Theothers} isAdmin={true}/>
      </div>
      <div className={styles.addcat} >
        <div className={styles.addcat1}>
            اضافه کردن دسته اصلی
        </div>
        <div className={styles.addcatp} onClick={() => setShowPopup(true)}>
            +
        </div>
        </div>

        {showPopup && 
        <div className={styles.Backdrop} onClick={() => setShowPopup(false)}>
            <div className={styles.Popup} onClick={(event) => event.stopPropagation()}>
            <div className={styles.pcp}>
                    <div className={styles.pcp1}>
                    <div className={styles.pcp11}>اطلاعات دسته</div>
                    <div className={styles.pcp12}>
                    <div className={styles.pcp121}>نام دسته</div>
                    <div className={styles.pcp122}></div>
                    </div>
                    </div>
                    
                    <div className={styles.pcp2}>
                    <button className={styles.btpu}>انصراف</button>
                  <button className={styles.btpu1}>ذخیره</button>
                    </div>
            </div>
            <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
        </div>
        }
                </div>
        
    )
}