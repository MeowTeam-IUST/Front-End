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
  const [url, setUrl] = useState(window.location.href);
  console.log(window.location.href)

  const HandelClick = (urlprop) => {
    window.location = `${urlprop}`;
  }

  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.Text}>
          هفت روز هفته 24 ساعت شبانه روز آماده پاسخگویی
        </div>
        <div className={styles.mobile}>
          <div className={styles.Text1}>هفت روز هفته </div>
          <div className={styles.Text1}>24 ساعت شبانه روز </div>
          <div className={styles.Text1}>آماده پاسخگویی </div>
        </div>

        <div className={styles.parent}>
          <img
            className={styles.image1}
            width={230}
            height={100}
            src={footer}
            alt="image1"
          />
          <img className={styles.image2} src={support} alt="image2" />
        </div>
        <div className={styles.Text}>
          ارتباط با ما : ۰۲۱۴۴۳۲۲۵۹۵ OpexShop@gmail.com
        </div>
        <div className={styles.mobile}>
          <div className={styles.Text1}>ارتباط با ما : </div>
          <div className={styles.Text1}>OpexShop@gmail.com</div>
          <div className={styles.Text1}> ۰۲۱۴۴۳۲۲۵۹۵ </div>
        </div>
    </div >
    <div className={styles.FooterMobile}>
      <div className={styles.FooterItems}>
        {url.includes('/Dashboard') ? (
          <div className={styles.CircleSelect}>
            <img className={styles.SelectedSearchIcon} src={search_white}  alt=""/>
            <img className={styles.SearchCircleIcon} src={circle}  alt=""/>
          </div>
        ) : (
          <img className={styles.searchicon} src={search} onClick={() => HandelClick('/Dashboard')} alt=""/>
        )}
      </div>
      <div className={styles.FooterItems}>
        {url.includes('/login') ? (
          <div className={styles.CircleSelect}>
            <img className={styles.SelectedCommentIcon} src={comment_white}  alt=""/>
            <img className={styles.CommentCircleIcon} src={circle} alt=""/>
          </div>
        ) : (
          <img className={styles.commenticon} src={comment} onClick={() => HandelClick('/login')} alt=""/>
        )}
      </div>
      <div className={styles.FooterItems}>
        {url.includes('/') && url.endsWith("/") ? (
          <div className={styles.CircleSelect}>
            <img className={styles.SelectedHomeIcon} src={home_white}  alt=""/>
            <img className={styles.HomeCircleIcon} src={circle}  alt=""/>
          </div>
        ) : (
          <img className={styles.homeicon} src={home} onClick={() => HandelClick('/')} alt=""/>
        )}
      </div>
      <div className={styles.FooterItems}>
        {url.includes('/Product') ? (
          <div className={styles.CircleSelect}>
            <img className={styles.SelectedShopIcon} src={shop_white} alt=""/>
            <img className={styles.ShopCircleIcon} src={circle} alt=""/>
          </div>
        ) : (
          <img className={styles.shopicon} src={shop} onClick={() => HandelClick('/Product')} alt=""/>
        )}
      </div>
      <div className={styles.FooterItems}>
        {url.includes('/Adminp') ? (
          <div className={styles.CircleSelect}>
            <img className={styles.SelectedPersonIcon} src={person_white}  alt=""/>
            <img className={styles.PersonCircleIcon} src={circle}  alt=""/>
          </div>
        ) : (
          <img className={styles.personicon} src={person} onClick={() => HandelClick('/Adminp')} alt=""/>
        )}
      </div>
    </div>
    </>
  );
}
