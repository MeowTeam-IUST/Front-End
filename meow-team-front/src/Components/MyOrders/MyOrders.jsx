import React,{ useState ,useEffect } from "react"
import repeat from '../../assets/repeat.svg'
import info from '../../assets/info.svg'
import styles from "./MyOrders.module.scss";
import axios from 'axios';
import { ShowToast } from "../LoginSignup/Toastify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function MyOrders(props) {
    const [booleanArray, setBooleanArray] = useState([false, true, true, true]);
    const [state, SetState] = useState(1);
    const HandelCheckClick = (localstateindex) => {
        SetState(localstateindex+1);
        if (localstateindex === 0) {
            setBooleanArray([
                booleanArray[0]=false,
                booleanArray[1]=true,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
        }
        else if (localstateindex === 1) {
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=false,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
        }
        else if (localstateindex === 2) {
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
        setdatastate(data ? (data.map((item, index) => ( 
            item.state == localstateindex+1 ?(
            <div className={styles.order} key={index} >
                {item.invoiceItems ? (item.invoiceItems.map((initem, inindex) => (
                <div className={styles.orderdetail} key={inindex}>
                    <div className={styles.orderdetailtitle}>{initem.product.title}</div>
                    <div className={styles.orderdetailvalue}>{initem.product.price} تومان</div>
                </div>
                ))) : (console.log("loading"))}
                <div className={styles.orderseparator}></div>
                <div className={styles.orderdetail}>
                    <div className={styles.orderdetailtitle}>قیمت نهایی :</div>
                    <div className={styles.orderdetailvalue}>{item.totalPeice} تومان</div>
                </div>
                <div className={styles.orderseparator}></div>
                <div className={styles.orderdetail}>
                    <div className={styles.orderdetailtitle}>تاریخ تحویل :</div>
                    <div className={styles.orderdetailvalue}>{item.date.split("T")[0].replace(/-/g, "/")}</div>
                </div>
                <div className={styles.buttonbox}>
                    <div className={styles.buttonright} onClick={() => props.onFormSwitch("MyOrdersDetails", data[index])}>
                        <div className={styles.buttonrighttext}>جزئیات سفارش</div>
                        <img className={styles.buttonrighticon} src={info} alt="" />
                    </div>
                    <div className={styles.buttonleft} onClick={() => OrderRepeat(item.id)}>
                        <div className={styles.buttonlefttext}>تکرار سفارش</div>
                        <img className={styles.buttonlefticon} src={repeat} alt="" />
                    </div>
                </div>
            </div>):(<></>)
        ))) : (console.log("loading")))
    }

    async function OrderRepeat(invoicesid){
        try{
            await axios
            .post(
                "https://45.147.99.177:9001/api/OrderFlow/invocie_repeat",
                {
                    id: invoicesid
                },
                {
                    headers: {
                        accept: "text/plain",
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    },
                }
            )
            .then((response) =>
                console.log(response),
                ShowToast("success", ". به سبد خرید اضافه شد"),
                console.log('mamad')
            );
        }
        catch (error)
        {
            // ShowToast("error", "! مشکلی پیش آمده است");
        }
        finally
        {
        }
        // return false
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData().then((responsedata) => {
            setData(responsedata);
        })
    },[]);
    useEffect(() => {
        console.log(data)
        HandelCheckClick(0)
    }, [data]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://45.147.99.177:9001/api/Account/get_all_user_invoice/`, {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            });
            console.log(response)
            const jsonData = response.data.data;
            const responsedata = jsonData.invoices.map(item => item);
            return responsedata;
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };
    const [datastate, setdatastate] = useState(<div></div>); 
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.selectitem}>
                        <div className={booleanArray[0] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(0)}>پرداخت شده</div>
                        <div className={booleanArray[1] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(1)}>در حال انجام</div>
                        <div className={booleanArray[2] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(2)}>انجام شده</div>
                        {/* <div className={booleanArray[3] ? styles.headerselecttext : styles.headerselected} onClick={() => HandelCheckClick(3)}>لغو شده</div> */}
                    </div>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.orders}>
                    {datastate}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}