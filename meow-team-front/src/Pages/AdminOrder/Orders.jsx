import React, {useState} from 'react';
import styles from './Order.module.css'
import expand_more from '../../assets/expand_more.svg'
import arrow_right from '../../assets/keyboard_arrow_right.svg'
import arrow_left from '../../assets/keyboard_arrow_left.svg'
import double_arrow_right from '../../assets/keyboard_double_arrow_right.svg'
import double_arrow_left from '../../assets/keyboard_double_arrow_left.svg'
import Checkbox from '@mui/material/Checkbox';

function AdminOrder() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [checktick, Setchecktick] = useState(false);
    const [checktickone, Setchecktickone] = useState(false);
    const [checkticktwo, Setcheckticktwo] = useState(false);
    const [checktickthree, Setchecktickthree] = useState(false);
    const [checktickfour, Setchecktickfour] = useState(false);
    const HandelCheckClick = () => {
        if (checktick == false) {
            Setchecktick(true);
            Setchecktick(true);
            Setchecktickone(true);
            Setcheckticktwo(true);
            Setchecktickthree(true);
            Setchecktickfour(true);
        } 
        else {
            Setchecktick(false);
            Setchecktickone(false);
            Setcheckticktwo(false);
            Setchecktickthree(false);
            Setchecktickfour(false);
        }
    }
    const HandelCheckClickone = () => {
        if ((checktickone) == false) {
            Setchecktickone(true);
        } 
        else {
            Setchecktickone(false);
        }
    }
    const HandelCheckClicktwo = () => {
        if ((checkticktwo) == false) {
            Setcheckticktwo(true);
        } 
        else {
            Setcheckticktwo(false);
        }
    }
    const HandelCheckClickthree = () => {
        if ((checktickthree) == false) {
            Setchecktickthree(true);
        } 
        else {
            Setchecktickthree(false);
        }
    }
    const HandelCheckClickfour = () => {
        if ((checktickfour) == false) {
            Setchecktickfour(true);
        } 
        else {
            Setchecktickfour(false);
        }
    }
  return (
    <div className={styles.layout}>
        <div className={styles.container}>
            <div className={styles.subjecttext}>سفارشات</div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headeritems}>
                        <div className={styles.headeritem}>
                            <div className={styles.headerselectactionicon}>
                                <img className={styles.headerexpandmoreicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.headerfourthitemtext}>مجموع قیمت</div>
                        </div>
                        <div className={styles.headeritem}>
                            <div className={styles.headerselectactionicon}>
                                <img className={styles.headerexpandmoreicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.headerthirditemtext}>وضعیت</div>
                        </div>
                        <div className={styles.headeritem}>
                            <div className={styles.headerselectactionicon}>
                                <img className={styles.headerexpandmoreicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.headerseconditemtext}>تاریخ</div>
                        </div>
                        <div className={styles.headeritem}>
                            <div className={styles.headerselectactionicon}>
                                <img className={styles.headerexpandmoreicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.headerfirstitemtext}>شماره سفارش</div>
                        </div>
                        <Checkbox {...label} size="small" sx={{padding:0}} onClick={() => HandelCheckClick()}/>
                    </div>
                    <div className={styles.separator}>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>۲۴۰۰۰ تومان</div>
                        </div>
                        <div className={styles.cardonethirditem}>
                            <div className={styles.carditemtext}>پرداخت شده</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>ساعتی قبل</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>12356</div>
                        </div>
                        <Checkbox {...label} checked={checktickone} size="small" sx={{padding:0}} onClick={() => HandelCheckClickone()}/>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>۲۴۰۰۰ تومان</div>
                        </div>
                        <div className={styles.cardtwothirditem}>
                            <div className={styles.carditemtext}>در حال انجام</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>ساعتی قبل</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>12356</div>
                        </div>
                        <Checkbox {...label} checked={checkticktwo} size="small" sx={{padding:0}} onClick={() => HandelCheckClicktwo()}/>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>۲۴۰۰۰ تومان</div>
                        </div>
                        <div className={styles.cardthreethirditem}>
                            <div className={styles.carditemtext}>انجام شده</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>ساعتی قبل</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>12356</div>
                        </div>
                        <Checkbox {...label} checked={checktickthree} size="small" sx={{padding:0}} onClick={() => HandelCheckClickthree()}/>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>۲۴۰۰۰ تومان</div>
                        </div>
                        <div className={styles.cardfourthirditem}>
                            <div className={styles.carditemtext}>انجام شده</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>ساعتی قبل</div>
                        </div>
                        <div className={styles.carditem}>
                            <div className={styles.carditemtext}>12356</div>
                        </div>
                        <Checkbox {...label} checked={checktickfour} size="small" sx={{padding:0}} onClick={() => HandelCheckClickfour()}/>
                    </div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.actionleft}>
                        <div className={styles.boxaction}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={double_arrow_left}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxaction}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={arrow_left}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxnumber}>
                            <div className={styles.iconparent}>
                                <div className={styles.number}>۴</div>
                            </div>
                        </div>
                        <div className={styles.boxaction}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={arrow_right}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxaction}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={double_arrow_right}  alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actionright}>
                        <div className={styles.doaction}>
                            <div className={styles.doactiontex}>اجرا</div>
                        </div>
                        <div className={styles.selectaction}>
                            <div className={styles.selectactionicon}>
                                <img className={styles.expandmoreicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.selectactiontext}>حذف کردن همه</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default AdminOrder;