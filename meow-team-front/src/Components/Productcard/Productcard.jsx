import React from 'react'
import styles  from '../../Pages/ProductPage/ProductPage.module.scss'
export default function Productcard({name,price}) {

    return(
                
                         <div className={styles.cardofpro}> 
                            <div className={styles.cardofpro1}>
                                    <div className={styles.t1}>{name}</div>
                                    <div className={styles.t2}>{price}</div>
                                    <button className={styles.t3}>خرید</button>

                            </div>
                         </div>
               

    )
}