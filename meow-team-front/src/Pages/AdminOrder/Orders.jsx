import React, {useState , useEffect} from 'react';
import styles from './Order.module.css'
import expand_more from '../../assets/expand_more.svg'
import arrow_right from '../../assets/keyboard_arrow_right.svg'
import arrow_left from '../../assets/keyboard_arrow_left.svg'
import double_arrow_right from '../../assets/keyboard_double_arrow_right.svg'
import double_arrow_left from '../../assets/keyboard_double_arrow_left.svg'
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { bool } from 'yup';

function AdminOrder() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [checktick, Setchecktick] = useState(false);
    const [booleanArray, setBooleanArray] = useState([false, false, false, false]);
    const [doactionid, setDoActionId] = useState([]);
    const HandelCheckClicktotal = () => {
        if (checktick == false) {
            Setchecktick(true);
            setBooleanArray([
                booleanArray[0]=true,
                booleanArray[1]=true,
                booleanArray[2]=true,
                booleanArray[3]=true,
            ]);
        } 
        else {
            Setchecktick(false);
            setBooleanArray([
                booleanArray[0]=false,
                booleanArray[1]=false,
                booleanArray[2]=false,
                booleanArray[3]=false,
            ]);
        }
    }
    const HandelCheckClick = (index) => {
        if (index === 0) {
            setBooleanArray([
                booleanArray[0]=!booleanArray[0],
                booleanArray[1]=booleanArray[1],
                booleanArray[2]=booleanArray[2],
                booleanArray[3]=booleanArray[3],
            ]);
            if(booleanArray[0] === true){
                setDoActionId([...doactionid, data[0].id]);
            }
        }
        else if (index === 1) {
            setBooleanArray([
                booleanArray[0]=booleanArray[0],
                booleanArray[1]=!booleanArray[1],
                booleanArray[2]=booleanArray[2],
                booleanArray[3]=booleanArray[3],
            ]);
            if(booleanArray[1] === true){
                setDoActionId([...doactionid, data[1].id]);
            }
        }
        else if (index === 2) {
            setBooleanArray([
                booleanArray[0]=booleanArray[0],
                booleanArray[1]=booleanArray[1],
                booleanArray[2]=!booleanArray[2],
                booleanArray[3]=booleanArray[3],
            ]);
            if(booleanArray[2] == true){
                setDoActionId([...doactionid, data[2].id]);
            }
        }
        else {
            setBooleanArray([
                booleanArray[0]=booleanArray[0],
                booleanArray[1]=booleanArray[1],
                booleanArray[2]=booleanArray[2],
                booleanArray[3]=!booleanArray[3],
            ]);
            if(booleanArray[3] == true){
                setDoActionId([...doactionid, data[3].id]);
            }
        }
    }

    const [pagenumber, SetPageNumber] = useState(1);
    const HandelOneArrowClick = (jumpnumber) => {
        SetPageNumber(pagenumber+jumpnumber)
        // SetPageNumber(jumpnumber)
        Setchecktick(false);
        setBooleanArray([
            booleanArray[0]=false,
            booleanArray[1]=false,
            booleanArray[2]=false,
            booleanArray[3]=false,
        ]);
        doactionid.length = 0;
        // fetchData().then((responsedata) => {
        //     setData(responsedata);
        // })
    };
    useEffect(() => {
        fetchData().then((responsedata) => {
            setData(responsedata);
        })
    }, [pagenumber]);

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData().then((responsedata) => {
            setData(responsedata);
        })
    }, []);
    useEffect(() => {
        console.log(data)
    }, [data]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://45.147.99.177:9000/api/Admin/GetInvoice/${pagenumber}`, {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            });
            const jsonData = response.data;
            const responsedata = jsonData.data.map(item => item);
            return responsedata;
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };

    const deleteid = async (doactionid) => {
        try {
            console.log(doactionid)
            const response = await axios.post('http://45.147.99.177:9000/api/Admin/DeleteInvoice',
            {
                invoiceIds: doactionid
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'text/plain',
                    'Connection': 'keep-alive',
                    'ngrok-skip-browser-warning' : '235',
                },
            });
            fetchData().then((responsedata) => {
                setData(responsedata);
            })
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };

    const HandelActionClick = () =>{
        setDoActionId([...new Set(doactionid)]);
        deleteid(doactionid);
    }
  return (
    <div className={styles.layout} dir='ltr'>
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
                        <Checkbox {...label} checked={checktick} size="small" sx={{padding:0}} onClick={() => HandelCheckClicktotal()}/>
                    </div>
                    <div className={styles.separator}>
                    </div>
                </div>
                <div className={styles.cards}>
                    {data ? (data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.carditem}>
                                <div className={styles.carditemtext}>{item.totalPeice} تومان</div>
                            </div>
                            <div className={styles.cardonethirditem}>
                                <div className={styles.carditemtext}>پرداخت شده</div>
                            </div>
                            <div className={styles.carditem}>
                                <div className={styles.carditemtext}>ساعتی قبل</div>
                            </div>
                            <div className={styles.carditem}>
                                <div className={styles.carditemtext}>{item.id}</div>
                            </div>
                            <Checkbox {...label} checked={booleanArray[index]} size="small" sx={{padding:0}} onClick={() => HandelCheckClick(index)}/>
                        </div>
                    ))) : (console.log("loading"))}
                </div>
                <div className={styles.actions}>
                    <div className={styles.actionleft}>
                        <div className={styles.boxaction} >
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={double_arrow_left}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxaction} onClick={pagenumber>1 ? (() => HandelOneArrowClick(-1)) : (<></>)}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={arrow_left}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxnumber}>
                            <div className={styles.iconparent}>
                                <div className={styles.number}>۴</div>
                            </div>
                        </div>
                        <div className={styles.boxaction} onClick={pagenumber<3 ? (() => HandelOneArrowClick(1)) : (<></>)}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={arrow_right}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxaction} >
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={double_arrow_right}  alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actionright}>
                        <div className={styles.doaction} onClick={() => HandelActionClick()}>
                            <div className={styles.doactiontex}>اجرا</div>
                        </div>
                        <div className={styles.selectaction}>
                            <div className={styles.selectactionicon}>
                                <img className={styles.expandmoreicon} src={expand_more}  alt=""/>
                            </div>
                            <div className={styles.selectactiontext}>حذف کردن</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default AdminOrder;