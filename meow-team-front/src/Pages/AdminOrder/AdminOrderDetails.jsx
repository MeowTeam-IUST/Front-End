import React, {useState , useEffect, useRef} from 'react';
import styles from './AdminOrderDetails.module.css'
import expand_more from '../../assets/expand_more.svg'
import Rectangle from '../../assets/Rectangle 40.svg'
import userpic from '../../assets/circle-litle-mamali.svg'
import penpic from '../../assets/pen.svg'
import opensquarepic from '../../assets/open-square.svg'
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import Paper from "@mui/material/Paper";
import axios from 'axios';
import RightVector from '../../assets/RightVector.svg'
import { ShowToast } from '../../Components/LoginSignup/Toastify';

const useStyles = makeStyles({
    option: {
        fontFamily: 'Anjoman',
        fontSize: '13px',
        fontWeight: '600',
        lineHeight: '20px',
        letterSpacing: '-1px',
        direction: 'rtl',
        color: 'rgba(0, 0, 0, 1)',
    },
});

function AdminOrderDetails(props) {    
    const classes = useStyles();
    console.log(props)
    const totaldate = props.data.date;
    const parts = totaldate.split("T");
    const date = parts[0].replace(/-/g, "/");
    const time = parts[1].split(".")[0];
    
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

    const [userdata, setuserData] = useState(null);
    useEffect(() => {
        fetchuserData().then((responsedata) => {
            setuserData(responsedata);
        })
    }, []);
    const fetchuserData = async () => {
        try {
            const response = await axios.get(`http://45.147.99.177:9000/api/Admin/get_profile_by_invoice/${props.data.id}`, {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            });
            console.log(response)
            const jsonData = response.data.data;
            return jsonData;
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };

    const HandelOrderDetailClick = () => {
        SetOrderDetailShow(true);
    }
    const HandelUserDetailClick = () => {
        SetUserDetailShow(true);
    }
    const [inputValue, setInputValue] = React.useState('');

    async function ChangeState(){
        try{
            await axios
              .post(
                "http://45.147.99.177:9000/api/Admin/change_state",
                {
                  id: props.data.id,
                  state: inputValue.label == "پرداخت شده" ? 1 : inputValue.label == "در حال انجام" ? 2 : 3,
                },
                {
                  headers: {
                    accept: "text/plain",
                    "Content-Type": "application/json",
                  },
                }
            )
            // .then((response) =>
            //     console.log(response),
            //     ShowToast("success", ". انجام شد")
            // );
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
    const statetitlestr = props.data.state == 1 ? '{"label":"پرداخت شده"}' : props.data.state == 2 ? '{"label":"در حال انجام"}' : props.data.state == 3 ? '{"label":"انجام شده"}' : '{"label":"نا مشخص"}' ;
    const statetitle = JSON.parse(statetitlestr);
  return (
      <div className={styles.layout} dir='ltr'>
        {booluserdetailshow ? (
            <div className={styles.userdetailpopupback} ref={xRef}>
                <div className={styles.userdetailpopup}>
                    <div className={styles.userdetailpopupcontainer}>
                        <div className={styles.userdetailpopuptitlebox}>
                            <div className={styles.userdetailpopuptitle}>جزئیات کاربر</div>
                        </div>
                        <div className={styles.userdetailpopupcontent}>
                            <div className={styles.userdetailpopuppicturebox}>
                                <img className={styles.userdetailpopuppicture} src={`http://45.147.99.177:9000/${userdata.urlImage}`}  alt=""/>
                            </div>
                            <div className={styles.userdetailpopupdetails}>
                                <div className={styles.userdetailpopupdetailrow}>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>نام خانوادگی</div>
                                            <div className={styles.useritemtext}>{userdata.lastName == null ? 'نامشخص' : userdata.lastName}</div>
                                        </div>
                                    </div>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>نام</div>
                                            <div className={styles.useritemtext}>{userdata.firstName == null ? 'نامشخص' : userdata.firstName}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.userdetailpopupdetailrow}>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>ایمیل</div>
                                            <div className={styles.useritemtext}>{userdata.email == null ? 'نامشخص' : userdata.email}</div>
                                        </div>
                                    </div>
                                    <div className={styles.userdetailpopupdetailrowitem}>
                                        <div className={styles.userdetailpopupdetailrowitemiconbox}>
                                        </div>
                                        <div className={styles.userdetailpopupdetailrowitemtext}>
                                            <div className={styles.useritemtitle}>شماره مبایل</div>
                                            <div className={styles.useritemtext}>{userdata.phoneNumber == null ? 'نامشخص' : userdata.phoneNumber}</div>
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
                    <div className={styles.headerrightset}>
                        <div className={styles.headerright}>
                            <div className={styles.headerrightdoaction} onClick={inputValue ? ChangeState() : (console.log(inputValue))}>
                                <div className={styles.headerrightdoactiontext}>اجرا</div>
                            </div>
                            <Autocomplete
                                sx={{
                                    width: "65%",
                                    '& .MuiAutocomplete-input': {
                                        padding: '0px',
                                        height: '20px',
                                        width: '50px',
                                    },
                                    "& .MuiAutocomplete-inputRoot[class*='MuiInputBase-root']": {
                                        fontSize: '16px',
                                        color: 'rgba(0, 0, 0, 1)',
                                        fontFamily: 'Anjoman',
                                        fontSize: '14px',
                                        fontWeight: 800,
                                        lineHeight: '24px',
                                        letterSpacing: '-0.02em',
                                        textAlign: 'right',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        paddingRight: '0px',
                                        paddingLeft: '0px',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        '& .MuiAutocomplete-input': {
                                            paddingRight: '0px',
                                            paddingLeft: '0px',
                                            paddingTop: '0px',
                                            paddingBottom: '0px',
                                            position: 'absolute',
                                            top: '30%',
                                            left: '23%',
                                            width:'70%',
                                            textAlign: 'right',
                                        },
                                    },
                                    '& .MuiAutocomplete-endAdornment': {
                                        marginRight: '82%',
                                        marginLeft: '0px',
                                        marginTop: '0px',
                                        marginBottom: '0px',
                                        position: 'reletive',
                                        top: '15%',
                                    },
                                    '& .MuiAutocomplete-inputRoot': {
                                        height: '45px',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '15px',
                                        border: '1px solid rgba(163, 174, 208, 1)',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '15px',
                                        border: '1px solid rgba(163, 174, 208, 1)',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '15px',
                                        border: '1px solid rgba(163, 174, 208, 1)',
                                    },
                                }}
                                classes={{
                                    option: classes.option,
                                }}
                                autoHighlight
                                autoSelect
                                disableClearable
                                disablePortal
                                id="country-select-demo"
                                options={parti}
                                getOptionLabel={(option) => option.label}
                                value={inputValue ? inputValue : statetitle}
                                onChange={(event, newValue) => {
                                    setInputValue(newValue);
                                }}
                                PaperComponent={(props) => (
                                    <Paper
                                        sx={{
                                            marginTop: '5px',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(163, 174, 208, 0.8)',
                                        }}
                                        {...props}
                                    />
                                )}
                                popupIcon={<img className={styles.expandmoreicon} style={{ padding: 0, margin: 0 }} src={expand_more}  alt=""/>}
                                renderInput={(params) => 
                                    <TextField
                                        sx={{
                                            minWidth: '100px',
                                        }}
                                        {...params} 
                                    />
                                }
                            />
                            <div className={styles.headerrighttext}>:تغییر وضعیت سفارش</div>
                        </div>
                        <div className={styles.headerbackbox}>
                            <div className={styles.headerbackboxtext}>سفارشات</div>
                            <img className={styles.headerbackboxicon} src={RightVector} onClick={() => props.onFormSwitch("Order", 'null')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.orders}>
                    {props ? (props.data.invoiceItems.map((item, index) => (
                    <div className={styles.order} key={index}>
                        {boolorderdetailshow ? (
                            <div className={styles.orderdetailpopupback} ref={xRef}>
                                <div className={styles.orderdetailpopup}>
                                    <div className={styles.orderdetailpopupcontainer}>
                                        <div className={styles.orderdetailpopuptitlebox}>
                                            <div className={styles.orderdetailpopuptitle}>جزئیات سفارش</div>
                                        </div>
                                        <div className={styles.orderdetailpopupcontent}>
                                            <div className={styles.orderdetailpopupcontenttitle}>: {item.description}</div>
                                            <div className={styles.popupseparator}></div>
                                            <div className={styles.orderdetailpopupdetailbox}>
                                                <div className={styles.orderdetailpopupdetail}>
                                                    <div className={styles.orderdetailpopupdetailtext}>{item.product.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (<></>)}
                        <div className={styles.orderdetails}>
                            <div className={styles.orderdetailsbotton} onClick={() => HandelOrderDetailClick()}>
                                <div className={styles.orderdetailsbottontext}>مشاهده توضیحات سفارش</div>
                            </div>
                            <div className={styles.orderdetailstext}>
                                <div className={styles.orderdetailstextone}>
                                    <div className={styles.orderdetailstextonetext}>{item.product.title}</div>
                                    {/* <div className={styles.orderdetailstextonenumber}>۸۰</div> */}
                                </div>
                                <div className={styles.orderdetailstexttwo}>ریجن :‌اروپا</div>
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
                        <div className={styles.orderpicbox}>
                            <img className={styles.orderpic} src={item.product.imageURL}  alt=""/>
                        </div>
                    </div>
                    ))) : (console.log("loading"))}
                </div>
                <div className={styles.cost}>
                    <div className={styles.costdetails}>
                        <div className={styles.costdetail}>
                            <div className={styles.costdetailtext}>تومان</div>
                            <div className={styles.costdetailnumber}>{props.data.totalPeice}</div>
                        </div>
                        <div className={styles.costdetailtitle}>: قیمت نهایی</div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.costdetails}>
                        <div className={styles.costdetail}>
                            <div className={styles.costdetailtext}>تومان</div>
                            <div className={styles.costdetailnumber}>{props.data.paid == null ? props.data.totalPeice : props.data.paid}</div>
                        </div>
                        <div className={styles.costdetailtitle}>: پرداخت شده</div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.costdetails}>
                        <div className={styles.costdetail}>
                            <div className={styles.costdetailtext}>{props.data.discount.title == '' ? 'بدون تخفیف' : props.data.discount.title}</div>
                        </div>
                        <div className={styles.costdetailtitle}>: کد نخفیف</div>
                    </div>
                </div>
                <div className={styles.paydetail}>
                    <div className={styles.paydetails}>
                        <div className={styles.paydetailstext}>{props.data.isSendToZarinpal == true ? 'درگاه امن زرین پال' : 'کیف پول'}</div>
                        <div className={styles.paydetailstitle}>: روش پرداخت</div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.paydetails}>
                        <div className={styles.paydetailsdate}>
                            <div className={styles.date}>{date}</div>
                            <div className={styles.time}>ساعت {time}</div>
                        </div>
                        <div className={styles.paydetailstitle}>: تاریخ</div>
                    </div>
                </div>
                <div className={styles.usernote}>
                    <div className={styles.usernotetitle}>: توضیحات مشتری</div>
                    <div className={styles.separator}></div>
                    <div className={styles.usernotetextbox}>
                        <div className={styles.usernotetext}>{props.data.description == null ? 'توضیحات وارد نشده است' : props.data.description}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdminOrderDetails;
const parti = [
    { label: 'پرداخت شده'},
    { label: 'در حال انجام'},
    { label: 'انجام شده'},
];