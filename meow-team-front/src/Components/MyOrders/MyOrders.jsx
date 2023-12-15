import React,{ useState } from "react"
import repeat from '../../assets/repeat.svg'
import info from '../../assets/info.svg'
import styles from "./MyOrders.module.css";
export function MyOrders(props) {
    const [booleanArray, setBooleanArray] = useState([false, true, true, true]);
    const HandelCheckClick = (index) => {
        if (index === 0) {
            setBooleanArray([
                booleanArray[0]=false,
                booleanArray[1]=true,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
            // if(booleanArray[0] === true){
            //     setDoActionId([...doactionid, data[0].id]);
            // }
        }
        else if (index === 1) {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=false,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
            // if(booleanArray[1] === true){
            //     setDoActionId([...doactionid, data[1].id]);
            // }
        }
        else if (index === 2) {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=true,
                booleanArray[2]=false,
                booleanArray[3]=true,
            ]);
            // if(booleanArray[2] == true){
            //     setDoActionId([...doactionid, data[2].id]);
            // }
        }
        else {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=true,
                booleanArray[2]=true,
                booleanArray[3]=false,
            ]);
            // if(booleanArray[3] == true){
            //     setDoActionId([...doactionid, data[3].id]);
            // }
        }
    }
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.selectitem}>
                        <div className={booleanArray[0] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(0)}>جاری</div>
                        <div className={booleanArray[1] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(1)}>انجام شده</div>
                        <div className={booleanArray[2] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(2)}>مرجوع شده</div>
                        <div className={booleanArray[3] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(3)}>لغو شده</div>
                    </div>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.orders}>
                    <div className={styles.order}>
                        <div className={styles.orderdetail}>
                            <div className={styles.orderdetailtitle}>۸۰ کریستال گنشین ایمپکت</div>
                            <div className={styles.orderdetailvalue}>۴۸۰۰۰ تومان</div>
                        </div>
                        <div className={styles.orderdetail}>
                            <div className={styles.orderdetailtitle}>۸۰ سی پی کالاف دیوتی موبایل</div>
                            <div className={styles.orderdetailvalue}>۱۲۰۰۰۰ تومان</div>
                        </div>
                        <div className={styles.orderseparator}></div>
                        <div className={styles.orderdetail}>
                            <div className={styles.orderdetailtitle}>قیمت نهایی :</div>
                            <div className={styles.orderdetailvalue}>۱۶۸۰۰۰ تومان</div>
                        </div>
                        <div className={styles.orderseparator}></div>
                        <div className={styles.orderdetail}>
                            <div className={styles.orderdetailtitle}>تاریخ تحویل :</div>
                            <div className={styles.orderdetailvalue}>۱۴۰۲/۶/۲۵</div>
                        </div>
                        <div className={styles.buttonbox}>
                            <div className={styles.buttonright} onClick={() => props.onFormSwitch("MyOrdersDetails", 'null')}>
                                <div className={styles.buttonrighttext}>جزئیات سفارش</div>
                                <img className={styles.buttonrighticon} src={info} alt="" />
                            </div>
                            <div className={styles.buttonleft}>
                                <div className={styles.buttonlefttext}>تکرار سفارش</div>
                                <img className={styles.buttonlefticon} src={repeat} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}