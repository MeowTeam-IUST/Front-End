import React from 'react'
import { useState,useEffect } from 'react';
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import GameList from '../../Components/GameList/GameList'
import styles from './ProductCat.module.scss'
import gameControlle from '../../assets/game-controlle.svg'
import Productcard from '../../Components/Productcard/Productcard'
import Add from '../../Components/Add/Add';
export default function ProductsCat(){
    const [imageUploaded, setImageUploaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [cards, setCards] = useState([
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      {name: '۸۰کریستال گنشین', price: 'قیمت ۲۴۰۰۰ تومان'},
      // ...other cards
    ]);
    const handleDelete = (index) => {
      const newCards = [...cards];
      newCards.splice(index, 1);
      setCards(newCards);
    };
    const handleSave = (index, newName, newPrice) => {
      const newCards = [...cards];
      newCards[index] = { name: newName, price: newPrice };
      setCards(newCards);
    };
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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        }
      
        if (file) {
          reader.readAsDataURL(file);
        } else {
          setSelectedImage(null);
        }
      }
    return(
        <div className={styles.whole}>
            <div className={styles.cat}> دسته های محصولات</div>
            <div className={styles.upcat}>
                <div className={styles.upcatleft}>
                <div className={styles.upcatleft1}>
                <div className={styles.upcatleft2}>توضیحات دسته :</div>
                 <input  className={styles.upcatleft3} type="text" name="description"  /></div>
                  
                    <div className={styles.upcatleftt1}>
                    <div className={styles.upcatleftt11}>
                    <div className={styles.upcatleftt12}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="18" viewBox="0 0 36 18" fill="none">
                    <rect width="36" height="18" rx="9" fill="#4318FF"/>
                    <circle cx="27" cy="9.00014" r="7.07143" fill="white"/>
                    </svg>
                    <div className={styles.upcatleftt121}>فعال</div>
                        
                        </div>
                    <div className={styles.upcatleftt13}>هشدار هنگام خرید</div>
                    </div>
                    <div className={styles.upcatleftt14}></div>
                    </div>
                </div>
                <div className={styles.upcatright}>
                <div className={styles.upcatright1}>
                <input className={styles.upcatright11}  type="text"></input>
                 <div className={styles.upcatright12}>نام دسته محصول</div>
                </div>
                <div className={styles.cardinp}> 
                  <div className={styles.cardinp1}>
                  {!imageUploaded ? 
                    <div className={styles.cardinp2}>UploadFiles</div> :
                    <img src={selectedImage} alt="Selected" className={styles.cardinp1} />
                    }
                    <div className={styles.cardinp3}>PNG, JPG and GIF files are allowed</div>
                  </div>
                  <div className={styles.cardinpp1}> 
                    <div className={styles.cardinpp2}> 
                      <div className={styles.cardinpp21}>آپلود عکس کارت</div>
                      <div className={styles.cardinpp22}>از این قسمت می‌توانید برای کارت محصول خود عکس بارگزاری نمایید</div>
                    </div>
                    <input type="file" accept="image/*" id="fileInput" style={{display: 'none'}} onChange={(event) => { handleFileChange(event); setImageUploaded(true); }} />
                    <button className={styles.cardinpp3} onClick={() => document.getElementById('fileInput').click()}>آپلود فایل</button>
                  </div>
                </div>
                        
                    </div>
            </div>
            <div className={styles.cardp}>
            <div className={styles.cardp1}>
            <div className={styles.cardp11}>محصولات</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2ZM9 9H4V4H9V9Z" fill="#4318FF"/>
            </svg>
              </div>
            
            <div className={styles.cardsofpro1}>
            {cards.map((card, index) => (
              <Productcard
                key={index}
                name={card.name}
                price={card.price}
                showdiv={true}
                changeButtonColor={true}
                onDelete={() => handleDelete(index)}
                applyLTR={true}
                onSave={(newName, newPrice) => handleSave(index, newName, newPrice)}
              />
            ))}
                <Add applyLTR={true} card={true}/>
            </div>
              
            </div>
        </div>
    )
}