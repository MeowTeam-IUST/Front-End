import React from 'react'
import { useState,useEffect } from 'react';
import styles from './ProductPage.module.scss'
import Productcard from '../../Components/Productcard/Productcard'
import {Comment, UserBox, CommentsSection} from '../../Components/Comments/Comments';
import Rate from '../../Components/Rate/Rate';
import Producttab from '../../Components/Producttab/Producttab'
import {ProfileHeader} from '../../Components/ProfileHeader/ProfileHeader'
import CartHeader from '../../Components/CartHeader/CartHeader'
import {SearchHeader} from '../../Components/SearchHeader/SearchHeader'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.svg'
import CategoryItem from '../../Components/CategoryItem/CategoryItem'
import azhini from "../../assets/azhini.jfif"
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import {Header} from '../../Components/Header/Header'
import Requests from '../../API/Requests';
import PageLayout from "../../Layout/PageLayout";
import { useSearchParams } from "react-router-dom";
import {BASE_URL} from "../../API/consts"

export default function ProductPage(){

    let id = window.location.pathname.split('/Product/')[1]
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const Categorys = ["کالاف دیوتی موبایل" ,"گنشین ایمپکت" , "کلش آف کلنز", "محصولات فیزیکی", "ایپکس لجندز"]
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [categoryDetails, setCategorytDetails] = useState("");
    const [productDescription, setProductDescription] = useState(
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
    );
    useEffect(() => {
        const fetchProductDetails = async () => {
          const productDetails = await Requests().getCategoryDetails(
            id
          ); 
          console.log ("details" , productDetails)
          setCategorytDetails(productDetails);
          // setProductDescription(description);
        };
      
        fetchProductDetails();
      }, []);

        const [products, setProducts] = useState([]);

        useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await Requests().getProducts(id);
            setProducts(productsData);
        };

        fetchProducts();
        }, []);
    
    return (
      <PageLayout>
        <div className={styles.GameAndProductsSection}>
          <div className={styles.GameHeaderSection}>
            <div className={styles.GameDetails}>
              <text className={styles.GameTitle}>{categoryDetails.title}</text>
              <text className={styles.GameRoute}>
                اپکس شاپ - بازی های آنلاین - {categoryDetails.title}
              </text>
              <Producttab safety={"امنیت"} obs={"دقت"} speed={"سرعت"} />
              <div className={styles.AboutGameSection}>
                <div className={styles.AboutGameTitleSection}>
                  <text className={styles.AboutGameTitle}>درباره بازی</text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34874 20.9425 6.80691 19.0678 4.93219C17.1931 3.05746 14.6513 2.00295 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.1539 16.1544 17.6542 17.6542C16.1544 19.1539 14.121 19.9976 12 20ZM12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V15.5C11 15.7652 11.1054 16.0196 11.2929 16.2071C11.4804 16.3946 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.3946 12.7071 16.2071C12.8946 16.0196 13 15.7652 13 15.5V12.5C13 12.2348 12.8946 11.9804 12.7071 11.7929C12.5196 11.6054 12.2652 11.5 12 11.5ZM12 7.5C11.7528 7.5 11.5111 7.57331 11.3055 7.71066C11.1 7.84801 10.9398 8.04324 10.8452 8.27165C10.7505 8.50005 10.7258 8.75139 10.774 8.99386C10.8223 9.23634 10.9413 9.45907 11.1161 9.63388C11.2909 9.8087 11.5137 9.92775 11.7561 9.97598C11.9986 10.0242 12.25 9.99946 12.4784 9.90485C12.7068 9.81024 12.902 9.65002 13.0393 9.44446C13.1767 9.2389 13.25 8.99723 13.25 8.75C13.25 8.41848 13.1183 8.10054 12.8839 7.86612C12.6495 7.6317 12.3315 7.5 12 7.5Z"
                      fill="#E52A49"
                    />
                  </svg>
                </div>
                <text className={styles.AboutGameDetails}>
                  {productDescription}
                </text>
              </div>
            </div>

            <div
              className={styles.GamePicture}
              style={{
                backgroundImage: `url(${
                  BASE_URL + "/" + categoryDetails.bannerURL
                })`,
              }}
            ></div>
          </div>
          <div className={styles.MenuSection}>
            <div className={styles.MenuTitle}>
              <text>محصولات</text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2ZM9 9H4V4H9V9Z"
                  fill="#E52A49"
                />
              </svg>
            </div>
            <div className={styles.MenuProducts}>
              {products.map((product) => (
                <Productcard
                  id={product.id}
                  name={product.title}
                  price={`${product.price} تومان`}
                  image={`${BASE_URL + "/" + product.imageURL}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.CommentsSecion}>
            <div className={styles.CommentsTitleSection}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M15 0.330566H3C2.20435 0.330566 1.44129 0.630833 0.87868 1.16531C0.316071 1.69979 0 2.4247 0 3.18056V13.6306C0 14.3864 0.316071 15.1113 0.87868 15.6458C1.44129 16.1803 2.20435 16.4806 3 16.4806H5.59L8.29 19.055C8.38344 19.1431 8.49426 19.2128 8.61609 19.26C8.73793 19.3073 8.86839 19.3313 9 19.3305C9.23834 19.3306 9.46886 19.2497 9.65 19.1026L12.87 16.4806H15C15.7956 16.4806 16.5587 16.1803 17.1213 15.6458C17.6839 15.1113 18 14.3864 18 13.6306V3.18056C18 2.4247 17.6839 1.69979 17.1213 1.16531C16.5587 0.630833 15.7956 0.330566 15 0.330566ZM16 13.6306C16 13.8825 15.8946 14.1241 15.7071 14.3023C15.5196 14.4805 15.2652 14.5806 15 14.5806H12.5C12.2617 14.5805 12.0311 14.6614 11.85 14.8086L9.05 17.0886L6.71 14.8561C6.61656 14.768 6.50574 14.6983 6.38391 14.6511C6.26207 14.6038 6.13161 14.5798 6 14.5806H3C2.73478 14.5806 2.48043 14.4805 2.29289 14.3023C2.10536 14.1241 2 13.8825 2 13.6306V3.18056C2 2.92861 2.10536 2.68697 2.29289 2.50881C2.48043 2.33065 2.73478 2.23056 3 2.23056H15C15.2652 2.23056 15.5196 2.33065 15.7071 2.50881C15.8946 2.68697 16 2.92861 16 3.18056V13.6306Z"
                  fill="#E52A49"
                />
              </svg>
              <text>کامنت‌ها</text>
            </div>
            <div className={styles.CommentsSectionBody}>
              <Rate rate={"3.75/5"} />
              <CommentsSection
                comments={[
                  { name: "پمر", date: "یک روز قبل", text: "بد نبود" },
                  // Add more initial comments here
                ]}
                userbox={{ usertext: "افزودن نظر" }}
              />
            </div>
          </div>
        </div>
      </PageLayout>
    );
}