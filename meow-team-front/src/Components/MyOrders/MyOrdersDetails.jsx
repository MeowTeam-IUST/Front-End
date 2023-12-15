import React from "react"
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
import styles from "./MyOrdersDetails.module.css";
export function MyOrdersdetails(props) {
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
                    <div className={styles.orderdetailbox}>
                        <div className={styles.orderbox}>
                            <div className={styles.orderseparator}></div>
                            <div className={styles.order}>
                                <div className={styles.rightorderbox}>
                                    <div className={styles.picbox}>
                                        <img className={styles.pic} alt=""/>
                                    </div>
                                    <div className={styles.ordertextbox}>
                                        <div className={styles.orderdetailstextone}>
                                            <div className={styles.orderdetailstextonetext}>کریستال گنشین ایمپکت</div>
                                            <div className={styles.orderdetailstextonenumber}>۸۰</div>
                                        </div>
                                        <div className={styles.orderdetailstexttwo}>ریجن : ‌اروپا</div>
                                        <div className={styles.orderdetailstexthree}>
                                            <div className={styles.orderdetailstexthreeleft}>
                                                <div className={styles.orderdetailstexthreelefttext}>تومان</div>
                                                <div className={styles.orderdetailstexthreeleftnumber}>۲۴۰۰۰</div>
                                            </div>
                                            <div className={styles.orderdetailstexthreeright}>: قیمت</div>
                                        </div>
                                        <div className={styles.orderdetailstexfour}>
                                            <div className={styles.orderdetailstexfournumber}>۲</div>
                                            <div className={styles.orderdetailstexfourtext}>: تعداد</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.lefttorderbox}>
                                    <div className={styles.leftordertext}>اضافه کردن به سبد خرید</div>
                                    <img className={styles.bigplus} src={bigplus} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.lastseparator}></div>
                        <div className={styles.ordertotalprice}>
                            <div className={styles.ordertotalpricetitle}>: قیمت نهایی</div>
                            <div className={styles.ordertotalpriceval}>۱۶۸۰۰۰ تومان</div>
                        </div>
                        <div className={styles.lastbutton}>
                            <div className={styles.lastbuttontext}>تکرار سفارش</div>
                            <img className={styles.repeat} src={repeat} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}