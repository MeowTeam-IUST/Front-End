import React, { useState , useEffect } from "react"
import RightVector from '../../assets/RightVector.svg'
import bigcirclered from '../../assets/bigcirclered.svg'
import checkicon from '../../assets/checkicon.svg'
import emptycirclegray from '../../assets/emptycirclegray.svg'
import smallcirclegray from '../../assets/smallcirclegray.svg'
import emptycirclered from '../../assets/emptycirclered.svg'
import smallcirclered from '../../assets/smallcirclered.svg'
import repeat from '../../assets/repeat.svg'
import bigplus from '../../assets/bigplus.svg'
import redline from '../../assets/redline.svg'
import styles from "./MyOrdersDetails.module.scss";
import Popup from '../Popup/Popup.jsx';
import AddToCart from '../AddToCart/AddToCart'
import axios from 'axios';
import { ShowToast } from "../LoginSignup/Toastify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../API/consts"


export function MyOrdersdetails(props) {
    console.log(props)
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    };
    const closePopup = () => {
        setPopupOpen(false);
    };

    // fetch orders
    const [data, setData] = useState([]);
    const [totalnumber, setTotalNumber] = useState(0);
    useEffect(() => {
        fetchData().then((responsedata) => {
            setData(responsedata);
        })
    }, []);
    useEffect(() => {
        console.log(data)
    }, [data]);
    useEffect(() => {
        console.log(totalnumber)
    }, [totalnumber]);
    const fetchData = async () => {
        try {
            const response = await axios.get('', {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            });
            // setTotalNumber(response.data.data.totalNumber);
            // const jsonData = response.data.data;
            // const responsedata = jsonData.invoices.map(item => item);
            // return responsedata;
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };
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
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headerbox}>
                        <img className={styles.headericon} src={RightVector} onClick={() => props.onFormSwitch("MyOrders", 'null')} alt=""/>
                        <div className={styles.headertext}>جزئیات سفارش</div>
                    </div>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.orders}>
                    {props.data.state == 1 ?(
                        <div className={styles.ordersstatus}>
                            <div className={styles.ordersstatusiconbox}>
                                <div className={styles.iconboxfirst}>
                                    <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                                    <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
                                </div>
                                <img className={styles.iconredlinefirst} src={redline} alt=""/>
                                <div className={styles.iconboxsecond}>
                                    <img className={styles.insideiconsecond} src={smallcirclered} alt=""/>
                                    <img className={styles.outsideiconsecond} src={emptycirclered} alt=""/>
                                </div>
                                <img className={styles.iconredlinesecond} src={redline} alt=""/>
                                <div className={styles.iconboxthird}>
                                    <img className={styles.insideiconthird} src={smallcirclegray} alt=""/>
                                    <img className={styles.outsideiconthird} src={emptycirclegray} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ordersstatustextbox}>
                                <div className={styles.ordersstatustext}>پرداخت شده</div>
                                <div className={styles.ordersstatustext}>در حال انجام</div>
                                <div className={styles.ordersstatustext}>پایان یافته</div>
                            </div>
                        </div>
                    ):props.data.state == 2?(
                        <div className={styles.ordersstatus}>
                            <div className={styles.ordersstatusiconbox}>
                                <div className={styles.iconboxfirst}>
                                    <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                                    <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
                                </div>
                                <img className={styles.iconredlinefirst} src={redline} alt=""/>
                                <div className={styles.iconboxsecond}>
                                    <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                                    <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
                                </div>
                                <img className={styles.iconredlinesecond} src={redline} alt=""/>
                                <div className={styles.iconboxthird}>
                                    <img className={styles.insideiconsecond} src={smallcirclered} alt=""/>
                                    <img className={styles.outsideiconsecond} src={emptycirclered} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ordersstatustextbox}>
                                <div className={styles.ordersstatustext}>پرداخت شده</div>
                                <div className={styles.ordersstatustext}>در حال انجام</div>
                                <div className={styles.ordersstatustext}>پایان یافته</div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.ordersstatus}>
                            <div className={styles.ordersstatusiconbox}>
                                <div className={styles.iconboxfirst}>
                                    <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                                    <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
                                </div>
                                <img className={styles.iconredlinefirst} src={redline} alt=""/>
                                <div className={styles.iconboxsecond}>
                                    <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                                    <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
                                </div>
                                <img className={styles.iconredlinesecond} src={redline} alt=""/>
                                <div className={styles.iconboxthird}>
                                    <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                                    <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
                                </div>
                            </div>
                            <div className={styles.ordersstatustextbox}>
                                <div className={styles.ordersstatustext}>پرداخت شده</div>
                                <div className={styles.ordersstatustext}>در حال انجام</div>
                                <div className={styles.ordersstatustext}>پایان یافته</div>
                            </div>
                        </div>
                    )}
                    <div className={styles.orderdetailbox}>
                        <div className={styles.orderbox}>
                            <div className={styles.orderseparator}></div>
                            {props ? (props.data.invoiceItems.map((item, index) => (
                                <div className={styles.order} key={index}>
                                    <div className={styles.rightorderbox}>
                                        <div className={styles.picbox}>
                                            <img className={styles.pic} src={BASE_URL+ "/"+ item.product.imageURL} alt=""/>
                                        </div>
                                        <div className={styles.ordertextbox}>
                                            <div className={styles.orderdetailstextone}>
                                                <div className={styles.orderdetailstextonetext}>{item.product.title}</div>
                                            </div>
                                            {/* <div className={styles.orderdetailstexttwo}>ریجن : ‌اروپا</div> */}
                                            <div className={styles.orderdetailstexthree}>
                                                <div className={styles.orderdetailstexthreeleft}>
                                                    <div className={styles.orderdetailstexthreelefttext}>تومان</div>
                                                    <div className={styles.orderdetailstexthreeleftnumber}>{item.product.price}</div>
                                                </div>
                                                <div className={styles.orderdetailstexthreeright}>: قیمت</div>
                                            </div>
                                            <div className={styles.orderdetailstexfour}>
                                                <div className={styles.orderdetailstexfournumber}>{item.amount}</div>
                                                <div className={styles.orderdetailstexfourtext}>: تعداد</div>
                                            </div>
                                        </div>
                                    </div>
                                    <Popup
                                        isOpen={isPopupOpen}
                                        onClose={closePopup}
                                        title={"جزئیات سفارش"}
                                        content={<AddToCart id={item.product.id} />}
                                    />
                                    <div className={styles.lefttorderbox} onClick={() => openPopup()}>
                                        <div className={styles.leftordertext}>اضافه کردن به سبد خرید</div>
                                        <img className={styles.bigplus} src={bigplus} alt="" />
                                    </div>
                                </div>
                            ))) : (console.log("loading"))}
                        </div>
                        <div className={styles.lastseparator}></div>
                        <div className={styles.ordertotalprice}>
                            <div className={styles.ordertotalpricetitle}>: قیمت نهایی</div>
                            <div className={styles.ordertotalpriceval}>{props.data.totalPeice} تومان</div>
                        </div>
                        <div className={styles.lastbutton} onClick={() => OrderRepeat(props.data.id)}>
                            <div className={styles.lastbuttontext}>تکرار سفارش</div>
                            <img className={styles.repeat} src={repeat} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}