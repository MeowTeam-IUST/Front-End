import React, {useState , useEffect} from 'react';
import styles from './Order.module.css'
import expand_more from '../../assets/expand_more.svg'
import arrow_right from '../../assets/keyboard_arrow_right.svg'
import arrow_left from '../../assets/keyboard_arrow_left.svg'
import double_arrow_right from '../../assets/keyboard_double_arrow_right.svg'
import double_arrow_left from '../../assets/keyboard_double_arrow_left.svg'
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import Paper from "@mui/material/Paper";

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

function AdminOrder(props) {
    const classes = useStyles();
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
        Setchecktick(false);
        setBooleanArray([
            booleanArray[0]=false,
            booleanArray[1]=false,
            booleanArray[2]=false,
            booleanArray[3]=false,
        ]);
        doactionid.length = 0;
    };
    useEffect(() => {
        fetchData().then((responsedata) => {
            setData(responsedata);
        })
    }, [pagenumber]);

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
            const response = await axios.get(`http://45.147.99.177:9000/api/Admin/get_invoice/${pagenumber}`, {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            });
            setTotalNumber(response.data.data.totalNumber);
            const jsonData = response.data.data;
            const responsedata = jsonData.invoices.map(item => item);
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
            const response = await axios.post('http://45.147.99.177:9000/api/Admin/delete_invoice',
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
        Setchecktick(false);
        setBooleanArray([
            booleanArray[0]=false,
            booleanArray[1]=false,
            booleanArray[2]=false,
            booleanArray[3]=false,
        ]);
        doactionid.length = 0;
    }
    const [inputValue, setInputValue] = React.useState('');
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
                            <div className={styles.cardonethirditem} style={{ border: item.state == 1 ? '1px solid rgba(229, 42, 73, 1)' : item.state == 2 ? '1px solid rgba(0, 190, 53, 1)' : item.state == 3 ? '1px solid rgba(67, 24, 255, 1)' : 'black' }}>
                                <div className={styles.carditemtext}>{item.state == 1 ? 'پرداخت شده' : item.state == 2 ? 'در حال انجام' : item.state == 3 ? 'انجام شده' : 'نا مشخص'}</div>
                            </div>
                            <div className={styles.carditem}>
                                <div className={styles.carditemtext}>{item.strDate}</div>
                            </div>
                            <div className={styles.carditem}>
                                <div className={styles.carditemidlinktext} onClick={() => props.onFormSwitch("Details", data[index])}>{item.id}</div>
                            </div>
                            <Checkbox {...label} checked={booleanArray[index]} size="small" sx={{padding:0}} onClick={() => HandelCheckClick(index)}/>
                        </div>
                    ))) : (console.log("loading"))}
                </div>
                <div className={styles.actions}>
                    <div className={styles.actionleft}>
                        <div className={styles.boxaction} onClick={pagenumber-5>=1 ? (() => HandelOneArrowClick(5)) : (console.log(totalnumber))}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={double_arrow_left}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxaction} onClick={pagenumber>1 ? (() => HandelOneArrowClick(-1)) : (console.log(totalnumber))}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={arrow_left}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxnumber}>
                            <div className={styles.iconparent}>
                                <div className={styles.number}>{pagenumber}</div>
                            </div>
                        </div>
                        <div className={styles.boxaction} onClick={pagenumber<totalnumber ? (() => HandelOneArrowClick(1)) : (console.log(totalnumber))}>
                            <div className={styles.iconparent}>
                                <img className={styles.boxicon} src={arrow_right}  alt=""/>
                            </div>
                        </div>
                        <div className={styles.boxaction} onClick={pagenumber+5<=totalnumber ? (() => HandelOneArrowClick(5)) : (console.log(totalnumber))}>
                            <div className={styles.iconparent} >
                                <img className={styles.boxicon} src={double_arrow_right}  alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actionright}>
                        <div className={styles.doaction} onClick={() => HandelActionClick()}>
                            <div className={styles.doactiontex}>اجرا</div>
                        </div>
                        <Autocomplete
                            sx={{
                                width: "70%",
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
                                    marginRight: '80%',
                                    marginLeft: '0px',
                                    marginTop: '0px',
                                    marginBottom: '0px',
                                    position: 'reletive',
                                    top: '17%',
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
                            value={parti[0]}
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
                    </div>
                </div>
            </div>
        </div>
    </div> 
  );
}

export default AdminOrder;
const parti = [
    { label: 'حذف کردن'},
];