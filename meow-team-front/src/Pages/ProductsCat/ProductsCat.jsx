import React from 'react'
import { useState,useEffect } from 'react';
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import GameList from '../../Components/GameList/GameList'
import styles from './ProductCat.module.scss'
import gameControlle from '../../assets/game-controlle.svg'
import Productcard from '../../Components/Productcard/Productcard'
import Add from '../../Components/Add/Add';
import Requests from '../../API/Requests';
export default function ProductsCat({id}){
  console.log(id)
    const [imageUploaded, setImageUploaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const productsData = await Requests().getProducts(id);
        console.log(productsData);
        setCards(productsData);
      };
    
      fetchProducts();
    }, []);


    // useEffect(() => {
    //   const fetchCategoryDetails = async () => {
    //     const categoryDetails = await Requests().getCategoryDetails(112); // Replace '1' with the actual category ID
    //     setTitle(categoryDetails.title);
    //     setDescription(categoryDetails.description);
    //   };

    //   fetchCategoryDetails();
    // }, []);
    
    const handleDelete = (index) => {
      const newCards = [...cards];
      newCards.splice(index, 1);
      setCards(newCards);
    };
    
    const handleSave = (index, newName, newPrice) => {
      const newCards = [...cards];
      newCards[index] = { title: newName, price: newPrice };
      setCards(newCards);
    };

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
      const handleSubmit = async () => {
        const category = {
          id:null,
          title: title,
          imageURL: "string",
          description: description,
          isActive: true,
          parentID: null
        };
        const response = await Requests().addCategory(category);
        const newCategoryId = response.data.result.data.id;
        localStorage.setItem('newCategoryId', newCategoryId);
        console.log('idd',newCategoryId) // Replace 'id' with the actual property name in the response
        // Wait for 1 second before fetching the category details
        setTimeout(async () => {
          console.log('idd2',newCategoryId) 
          const categoryDetails = await Requests().getCategoryDetails(newCategoryId);
          setTitle(categoryDetails.title);
          setDescription(categoryDetails.description);
        }, 1000);
      };
      useEffect(() => {
        const fetchCategoryDetails = async () => {
          // Get the newCategoryId from localStorage
          const newCategoryId = localStorage.getItem('newCategoryId');
          if (newCategoryId) {
            const categoryDetails = await Requests().getCategoryDetails(newCategoryId);
            setTitle(categoryDetails.title);
            setDescription(categoryDetails.description);
          }
        };
      
        fetchCategoryDetails();
      }, []);
      
      
      
    return(
        <div className={styles.whole} dir='ltr'>
            <div className={styles.upcat}>
                <div className={styles.upcatleft}>
                <div className={styles.upcatleft1}>
                <div className={styles.upcatleft2}>:توضیحات دسته</div>
                 <input className={styles.upcatleft3} type="text" name="description" 
                 value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                  
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
                <input className={styles.upcatright11} type="text" value={title}
                 onChange={(e) => setTitle(e.target.value)} />
                 <div className={styles.upcatright12}>نام دسته محصول</div>
                </div>
                {/* <button onClick={handleSubmit} className={styles.cardinpp3} >اضافه کردن</button> */}
                {/* <div className={styles.cardinp}> 
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
                    <input type="file" accept="image/*" id="fileInputProCat" style={{display: 'none'}} onChange={(event) => { handleFileChange(event); setImageUploaded(true); }} />
                    <button className={styles.cardinpp3} onClick={() => document.getElementById('fileInput').click()}>آپلود فایل</button>
                  </div>
                </div> */}
              <div className={styles.popUp_bottom} dir='rtl'>
              <div className={styles.bottom_right}>
                <div className={styles.right_text_section}>
                  <div className={styles.bottom_right_title}>
                    آپلود عکس محصول
                  </div>
                  <div className={styles.bottom_right_subTitle}>
                    از این قسمت می‌توانید برای دسته بندی محصول خود عکس بارگزاری
                    نمایید
                  </div>
                </div>

                {/* <button className={styles.uploadButton}>آپلود عکس</button> */}

                <label className={styles.uploadButton}>
                  آپلود عکس
                  <input
                    type="file"
                    accept="image/*"
                    // onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              <div className={styles.bottom_left}>
                {/* <FileDrop fileInputRef={fileInputRef} /> */}
                {imageUploaded ? (
                  <img
                    src={imageUploaded}
                    alt="Selected"
                    className={styles.selectedImage}
                  />
                ) : (
                  <div className={styles.imagePlaceHolder}>
                    محل قرارگیری تصویر
                  </div>
                )}
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
              name={card.title}
              price={`قیمت ${card.price} تومان`}
              showdiv={true}
              changeButtonColor={true}
              onDelete={() => handleDelete(index)}
              applyLTR={true}
              onSave={(newName, newPrice) => handleSave(index, newName, newPrice)}
            />
          ))}
               
            </div>
              
            </div>
        </div>
    )
} <Add applyLTR={true} card={true}/>