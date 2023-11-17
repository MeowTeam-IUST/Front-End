import React, {useState , useEffect, useRef} from 'react';
import styles from './AdminOrderDetails.module.css'
import expand_more from '../../assets/expand_more.svg'
import Rectangle from '../../assets/Rectangle 40.svg'
import userpic from '../../assets/circle-litle-mamali.svg'
import penpic from '../../assets/pen.svg'
import opensquarepic from '../../assets/open-square.svg'

function AdminOrderDetails() {
    const [boolorderdetailshow, SetOrderDetailShow] = useState(false);
    const [booluserdetailshow, SetUserDetailShow] = useState(false);
    const xRef = useRef(null);

    const handleCloseClick = (e) => {
        if (e.target == xRef.current) {
            SetOrderDetailShow(false);
            SetUserDetailShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleCloseClick);
    
        return () => {
          document.removeEventListener("click", handleCloseClick);
        };
    }, []);

    const HandelOrderDetailClick = () => {
        SetOrderDetailShow(true);
    }
    const HandelUserDetailClick = () => {
        SetUserDetailShow(true);
    }
  return (
    <div className={styles.layout}>
        {boolorderdetailshow ? (
            <div className={styles.orderdetailpopupback} ref={xRef}>
                <div className={styles.orderdetailpopup}>
                    <div className={styles.orderdetailpopupcontainer}>
                        <div className={styles.orderdetailpopuptitlebox}>
                            <div className={styles.orderdetailpopuptitle}>جزئیات سفارش</div>
                        </div>
                        <div className={styles.orderdetailpopupcontent}>
                            <div className={styles.orderdetailpopupcontenttitle}>: لطفا نحوه ورود و یوزرنیم و پسورد اکانت خود را وارد کنید</div>
                            <div className={styles.popupseparator}></div>
                            <div className={styles.orderdetailpopupdetailbox}>
                                <div className={styles.orderdetailpopupdetail}>
                                    <div className={styles.orderdetailpopupdetailtextleft}>mafhoot</div>
                                    <div className={styles.orderdetailpopupdetailtextright}>: یوزر نیم</div>
                                </div>
                                <div className={styles.orderdetailpopupdetail}>
                                    <div className={styles.orderdetailpopupdetailtextleft}>123456788</div>
                                    <div className={styles.orderdetailpopupdetailtextright}>: پسورد</div>
                                </div>
                                <div className={styles.orderdetailpopupdetail}>
                                    <div className={styles.orderdetailpopupdetailtextleft}>اکانت اکتیویژن</div>
                                    <div className={styles.orderdetailpopupdetailtextright}>: نحوه ورود</div>
                                </div>
                                <div className={styles.orderdetailpopupdetail}>
                                    <div className={styles.orderdetailpopupdetailtextleft}>اروپا</div>
                                    <div className={styles.orderdetailpopupdetailtextright}>: ریجن بازی</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (<></>)}
        {booluserdetailshow ? (
            <div className={styles.userdetailpopupback} ref={xRef}>
                <div className={styles.userdetailpopup}>
                    <div className={styles.userdetailpopupcontainer}>
                        <div className={styles.userdetailpopuptitlebox}>
                            <div className={styles.userdetailpopuptitle}>جزئیات کاربر</div>
                        </div>
                        <div className={styles.userdetailpopupcontent}>
                            <div className={styles.userdetailpopuppicturebox}>
                                <img className={styles.userdetailpopuppicture} src={userpic}  alt=""/>
                            </div>
                            <div className={styles.userdetailpopupdetails}>
                                <div className={styles.userdetailpopupdetailrow}>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                            <img className={styles.userdetailpopupdetailrowitemiconpen} src={penpic} alt="" />
                                            <img className={styles.userdetailpopupdetailrowitemiconsquare} src={opensquarepic} alt="" />
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>نام خانوادگی</div>
                                            <div className={styles.useritemtext}>آژینی</div>
                                        </div>
                                    </div>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                            <img className={styles.userdetailpopupdetailrowitemiconpen} src={penpic} alt="" />
                                            <img className={styles.userdetailpopupdetailrowitemiconsquare} src={opensquarepic} alt="" />
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>نام</div>
                                            <div className={styles.useritemtext}>محمد علی</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.userdetailpopupdetailrow}>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                            <img className={styles.userdetailpopupdetailrowitemiconpen} src={penpic} alt="" />
                                            <img className={styles.userdetailpopupdetailrowitemiconsquare} src={opensquarepic} alt="" />
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>ایمیل</div>
                                            <div className={styles.useritemtext}>Mafhoot@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                            <img className={styles.userdetailpopupdetailrowitemiconpen} src={penpic} alt="" />
                                            <img className={styles.userdetailpopupdetailrowitemiconsquare} src={opensquarepic} alt="" />
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>شماره مبایل</div>
                                            <div className={styles.useritemtext}>۰۹۳۰۵۱۶۰۲۵۴</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (<></>)}
        <div className={styles.container}>
            <div className={styles.subjecttext}>جزئیات سفارش</div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headerleft} onClick={() => HandelUserDetailClick()}>
                        <div className={styles.headerlefttext}>مشاهده جزئیات کاربر</div>
                    </div>
                    <div className={styles.headerright}>
                        <div className={styles.headerrightdoaction}>
                            <div className={styles.headerrightdoactiontext}>اجرا</div>
                        </div>
                        <div className={styles.headerrightselectaction}>
                            <div className={styles.headerrightselectactioniconbox}>
                                <img className={styles.headerrightselectactionicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.headerrightselectactiontext}>در حال انجام</div>
                        </div>
                        <div className={styles.headerrighttext}>:تغییر وضعیت سفارش</div>
                    </div>
                </div>
                <div className={styles.orders}>
                    <div className={styles.order}>
                        <div className={styles.orderdetails}>
                            <div className={styles.orderdetailsbotton} onClick={() => HandelOrderDetailClick()}>
                                <div className={styles.orderdetailsbottontext}>مشاهده توضیحات سفارش</div>
                            </div>
                            <div className={styles.orderdetailstext}>
                                <div className={styles.orderdetailstextone}>
                                    <div className={styles.orderdetailstextonetext}>کریستال گنشین ایمپکت</div>
                                    <div className={styles.orderdetailstextonenumber}>۸۰</div>
                                </div>
                                <div className={styles.orderdetailstexttwo}>ریجن :‌اروپا</div>
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
                        <div className={styles.orderpicbox}>
                            <img className={styles.orderpic} src={Rectangle}  alt=""/>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <div className={styles.orderdetails}>
                            <div className={styles.orderdetailsbotton} onClick={() => HandelOrderDetailClick()}>
                                <div className={styles.orderdetailsbottontext}>مشاهده توضیحات سفارش</div>
                            </div>
                            <div className={styles.orderdetailstext}>
                                <div className={styles.orderdetailstextone}>
                                    <div className={styles.orderdetailstextonetext}>کریستال گنشین ایمپکت</div>
                                    <div className={styles.orderdetailstextonenumber}>۸۰</div>
                                </div>
                                <div className={styles.orderdetailstexttwo}>ریجن :‌اروپا</div>
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
                        <div className={styles.orderpicbox}>
                            <img className={styles.orderpic} src={Rectangle}  alt=""/>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <div className={styles.orderdetails}>
                            <div className={styles.orderdetailsbotton} onClick={() => HandelOrderDetailClick()}>
                                <div className={styles.orderdetailsbottontext}>مشاهده توضیحات سفارش</div>
                            </div>
                            <div className={styles.orderdetailstext}>
                                <div className={styles.orderdetailstextone}>
                                    <div className={styles.orderdetailstextonetext}>کریستال گنشین ایمپکت</div>
                                    <div className={styles.orderdetailstextonenumber}>۸۰</div>
                                </div>
                                <div className={styles.orderdetailstexttwo}>ریجن :‌اروپا</div>
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
                        <div className={styles.orderpicbox}>
                            <img className={styles.orderpic} src={Rectangle}  alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.cost}>
                    <div className={styles.costdetails}>
                        <div className={styles.costdetail}>
                            <div className={styles.costdetailtext}>تومان</div>
                            <div className={styles.costdetailnumber}>۱۶۸۰۰۰</div>
                        </div>
                        <div className={styles.costdetailtitle}>: قیمت نهایی</div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.costdetails}>
                        <div className={styles.costdetail}>
                            <div className={styles.costdetailtext}>تومان</div>
                            <div className={styles.costdetailnumber}>۱۶۸۰۰۰</div>
                        </div>
                        <div className={styles.costdetailtitle}>: پرداخت شده</div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.costdetails}>
                        <div className={styles.costdetail}>
                            <div className={styles.costdetailtext}>1D75UR</div>
                        </div>
                        <div className={styles.costdetailtitle}>: کد نخفیف</div>
                    </div>
                </div>
                <div className={styles.paydetail}>
                    <div className={styles.paydetails}>
                        <div className={styles.paydetailstext}>درگاه امن زرین پال</div>
                        <div className={styles.paydetailstitle}>: روش پرداخت</div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.paydetails}>
                        <div className={styles.paydetailsdate}>
                            <div className={styles.date}>۱۴۰۲/۷/۱۲</div>
                            <div className={styles.time}>ساعت ۱۷:۳۹</div>
                        </div>
                        <div className={styles.paydetailstitle}>: تاریخ</div>
                    </div>
                </div>
                <div className={styles.usernote}>
                    <div className={styles.usernotetitle}>: توضیحات مشتری</div>
                    <div className={styles.separator}></div>
                    <div className={styles.usernotetextbox}>
                        <div className={styles.usernotetext}>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdminOrderDetails;