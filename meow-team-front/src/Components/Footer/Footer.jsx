import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss'
import footer from '../../assets/footer.png'
import support from  '../../assets/support.svg'
import circle from '../../assets/circle.svg'
import person_white from '../../assets/person-white.svg'
import person from '../../assets/person.svg'
import comment_white from '../../assets/comment-white.svg'
import comment from '../../assets/comment.svg'
import home_white from '../../assets/home-white.svg'
import home from '../../assets/home.svg'
import search_white from '../../assets/search-white.svg'
import search from '../../assets/search-black.svg'
import shop_white from '../../assets/shop-white.svg'
import shop from '../../assets/shop.svg'

export default function Footer() {
  // // Get the current URL of the page
  // const currentUrl = window.location.href;
  // // Write a condition for rendering dependent on the URL
  // if (currentUrl.includes('example.com/page1')) {
  //   // Render component A
  // } else if (currentUrl.includes('example.com/page2')) {
  //   // Render component B
  // } else {
  //   // Render component C
  // }
  const [url, setUrl] = useState(window.location.href);

  // useEffect(() => {
  //   const handleUrlChange = () => {
  //     setUrl(window.location.href);
  //   };

  //   window.addEventListener('popstate', handleUrlChange);

  //   return () => {
  //     window.removeEventListener('popstate', handleUrlChange);
  //   };
  // }, []);

  // return (
  //   <div>
  //     Current URL: {url}
  //   </div>
  // );
  return (
    <>
    <div className={styles.Footer}>
        <div className={styles.Text}>هفت روز هفته 24 ساعت شبانه روز آماده پاسخگویی</div>
        <div className={styles.mobile}>
          <div className={styles.Text1}>هفت روز هفته </div>
          <div className={styles.Text1}>24 ساعت شبانه روز </div>
          <div className={styles.Text1}>آماده پاسخگویی   </div>
        </div>

        <div className={styles.parent}>
        <img className={styles.image1} width={230} height={100} src={footer} alt="" />
        <img className={styles.image2} src={support} alt="" />
        </div>
        <div className={styles.Text}>ارتباط با ما : ۰۲۱۴۴۳۲۲۵۹۵       OpexShop@gmail.com</div>
        <div className={styles.mobile}>
        <div className={styles.Text1}>ارتباط با ما : </div>
          <div className={styles.Text1}>OpexShop@gmail.com</div>
          <div className={styles.Text1}> ۰۲۱۴۴۳۲۲۵۹۵ </div>
        </div>
    </div >
    <div className={styles.FooterMobile}>
      {url.includes('/search') ? (
        <div className={styles.circlepersonselect}>
          <img className={styles.celectedpersonicon} src={search_white}  alt=""/>
          <img className={styles.circleicon} src={circle}  alt=""/>
        </div>
      ) : (
        <img className={styles.searchicon} src={search}  alt=""/>
      )}
      {url.includes('/comment') ? (
        <div className={styles.circlepersonselect}>
          <img className={styles.celectedpersonicon} src={comment_white}  alt=""/>
          <img className={styles.circleicon} src={circle}  alt=""/>
        </div>
      ) : (
        <img className={styles.commenticon} src={comment}  alt=""/>
      )}
      {url.includes('/') ? (
        <div className={styles.circlepersonselect}>
          <img className={styles.celectedpersonicon} src={home_white}  alt=""/>
          <img className={styles.circleicon} src={circle}  alt=""/>
        </div>
      ) : (
        <img className={styles.homeicon} src={home}  alt=""/>
      )}
      {url.includes('/shop') ? (
        <div className={styles.circlepersonselect}>
          <img className={styles.celectedpersonicon} src={shop_white}  alt=""/>
          <img className={styles.circleicon} src={circle}  alt=""/>
        </div>
      ) : (
        <img className={styles.shopicon} src={shop}  alt=""/>
      )}
      {url.includes('/Dashboard') ? (
        <div className={styles.circlepersonselect}>
          <img className={styles.celectedpersonicon} src={person_white}  alt=""/>
          <img className={styles.circleicon} src={circle}  alt=""/>
        </div>
      ) : (
        <img className={styles.personicon} src={person}  alt=""/>
      )}
    </div>
    </>
  )
}
