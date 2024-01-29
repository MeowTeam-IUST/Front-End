import React , {useState , useEffect} from 'react'
import styles from './EditDiscount.module.css'
import axios from 'axios';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function EditDiscount({id , closePopup , CardDescription}) {
    const [Discountdata, setDiscountData] = useState(null);
    useEffect(() => {
        fetchDiscountData().then((responsedata) => {
            setDiscountData(responsedata);
        })
    }, [id]);
    useEffect(() => {
        console.log(Discountdata)
    }, [Discountdata]);
    const fetchDiscountData = async () => { // map the values
        try {
            const response = await axios.get(`https://45.147.99.177:9001/api/Discount/get_by_id/${id}`, {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            });
            const jsonData = response.data.data;
            return jsonData;
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };

    const [doactionid, setDoActionId] = useState([id]);
    const deleteid = async () => {
        try {
            const response = await axios.post('https://45.147.99.177:9001/api/Discount/delete',
            {
                ids: doactionid
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain',
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),

                },
            });
        } catch (error) {
          console.error(error);
        }
        finally{
        }
    };
    async function UpdateDiscount(){
        deleteid();
        try{
            await axios
                .post(
                "https://45.147.99.177:9001/api/Discount/add",
                {
                    id: null,
                    title: incode==""?Discountdata?.title:incode,
                    startTime: instart==""?Discountdata?.startTime:instart,
                    expirationTime: inend==""?Discountdata?.expirationTime:inend,
                    amountOfPercent: indiscount==""?Discountdata?.amountOfPercent:indiscount,
                    number: inrest==""?Discountdata?.number:inrest,
                },
                {
                    headers: {
                        accept: "text/plain",
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),

                    },
                }
            )
        }
        catch (error)
        {
        }
        finally
        {
        }
        closePopup()
    }


    const [indiscount, setInDiscount] = React.useState("");
    const handleInputDiscount = (event) => {
        setInDiscount(event.target.value);
    };
    const [incode, setInCode] = React.useState("");
    const handleInCode = (event) => {
        setInCode(event.target.value);
    };
    const [inend, setInEnd] = React.useState("");
    const handleInputEnd = (event) => {
        setInEnd(event);
    };
    const [instart, setInStart] = React.useState("");
    const handleInputStart = (event) => {
        setInStart(event);
    };
    const [inrest, setInRest] = React.useState("");
    const handleInputRest = (event) => {
        setInRest(event.target.value);
    };
  return (
    <div className={styles.EditDiscount}>
        <div className={styles.EditDiscountrow}>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:درصد تخفیف</div>
                <input
                    className={styles.biginput}
                    type="text"
                    value={indiscount=="" ? (Discountdata?.amountOfPercent) : indiscount}
                    onChange={handleInputDiscount}
                    dir="rtl"
                />
            </div>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:کد</div>
                <input
                    className={styles.biginput}
                    type="text"
                    value={incode=="" ? (Discountdata?.title) : incode}
                    onChange={handleInCode}
                    dir="rtl"
                />
            </div>
        </div>
        <div className={styles.EditDiscountrow}>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:تاریخ پایان</div>
                {/* <input
                    className={styles.biginput}
                    type="text"
                    value={inend}
                    onChange={handleInputEnd}
                    dir="rtl"
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                    sx={{
                        width: "209.5px",
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '15px',
                            border: '1px solid #A3AED0',
                            height: "50px",
                        }
                    }}
                    onChange={handleInputEnd} value={inend=="" ? dayjs(Discountdata?.expirationTime) : inend} views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}/>
                </LocalizationProvider>
            </div>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:تاریخ شروع</div>
                {/* <input
                    className={styles.biginput}
                    type="text"
                    value={instart}
                    onChange={handleInputStart}
                    dir="rtl"
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                    sx={{
                        width: "209.5px",
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '15px',
                            border: '1px solid #A3AED0',
                            height: "50px",
                        }
                    }}
                    onChange={handleInputStart} value={instart=="" ? dayjs(Discountdata?.startTime) : instart} views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}/>
                </LocalizationProvider>
            </div>
        </div>
        <div className={styles.EditDiscountrow}>
            <div className={styles.EditDiscountbox}>
                <div style={{ height : "100%" }}></div>
                <div className={styles.Editactionbutton} onClick={() => UpdateDiscount()}>
                    <div className={styles.Editactionbuttontext}>اعمال</div>
                </div>
            </div>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:موجودی</div>
                <input
                    className={styles.biginput}
                    type="text"
                    value={inrest=="" ? dayjs(Discountdata?.number) : inrest}
                    onChange={handleInputRest}
                    dir="rtl"
                />
            </div>
        </div>
    </div>
  )
}
