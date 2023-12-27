import React,{ useState ,useEffect } from "react"
import repeat from '../../assets/repeat.svg'
import info from '../../assets/info.svg'
import styles from "./MyOrders.module.css";
import axios from 'axios';

export function MyOrders(props) {
    const [booleanArray, setBooleanArray] = useState([false, true, true, true]);
    const [state, SetState] = useState(1);
    const HandelCheckClick = (index) => {
        SetState(index+1);
        if (index === 0) {
            setBooleanArray([
                booleanArray[0]=false,
                booleanArray[1]=true,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
        }
        else if (index === 1) {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=false,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
        }
        else if (index === 2) {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=true,
                booleanArray[2]=false,
                booleanArray[3]=true,
            ]);
        }
        else {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=true,
                booleanArray[2]=true,
                booleanArray[3]=false,
            ]);
        }
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData().then((responsedata) => {
            setData(responsedata);
        })
    }, [state]);
    useEffect(() => {
        console.log(data)
    }, [data]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://45.147.99.177:9000/api/Acount/get_all_user_invoice/${state}/${0}`, {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            });
            console.log(response)
            const jsonData = response.data.data;
            const responsedata = jsonData.map(item => item);
            return responsedata;
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };
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