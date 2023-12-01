import React from "react"
import styles from "./MyOrders.module.css";
export function MyOrders() {
    return(
        <>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.selectitem}>
                        <div>جاری</div>
                        <div>انجام شده</div>
                        <div>مرجوع شده</div>
                        <div>لغو شده</div>
                    </div>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.orders}>
                    <div className={styles.ordertop}>
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
                            <div className={styles.buttonright}>جزئیات سفارش</div>
                            <div className={styles.buttonleft}>تکرار سفارش</div>
                        </div>
                    </div>
                    <div className={styles.orderbottom}>
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
                            <div className={styles.buttonright}>جزئیات سفارش</div>
                            <div className={styles.buttonleft}>تکرار سفارش</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}