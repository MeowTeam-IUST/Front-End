import React from 'react'
import styles  from '../../Pages/ProductPage/ProductPage.module.scss'
export default function Productcard({name, price, changeButtonColor,showdiv,onDelete}) {
    return(
        <div className={styles.cardofpro}> 
        {showdiv && <div className={styles.delete}>
            <button className={styles.delete1} onClick={onDelete}>
            حذف محصول
            </button>
        </div>}
            <div className={styles.cardofpro1}>
                <div className={styles.t1}>{name}</div>
                <div className={styles.t2}>{price}</div>
                <button className={`${styles.t3} ${changeButtonColor ? styles.buttonColorChange : ''}`}>
                    {changeButtonColor ? 'ویرایش' : 'خرید'}
                </button>
            </div>
        </div>
    )
}