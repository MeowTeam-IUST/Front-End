import React , {useState , useEffect} from 'react'
import styles from './EditDiscount.module.css'
import axios from 'axios';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function EditDiscount({id , CardDescription}) {
    console.log(id)
    // const [Discountdata, setDiscountData] = useState(null);
    // useEffect(() => {
    //     fetchDiscountData().then((responsedata) => {
    //         setDiscountData(responsedata);
    //     })
    // }, [id]);
    // useEffect(() => {
    //     console.log(Discountdata)
    // }, [Discountdata]);
    // const fetchDiscountData = async () => { // map the values
    //     try {
    //         const response = await axios.get(`https://45.147.99.177:9001/api/Discount/get_by_id/${id}`, {
    //             headers: {
    //                 'accept': 'text/plain' ,
    //                 'Content-Type': 'application/json' ,
    //                 'Authorization': 'Bearer ' + localStorage.getItem("token"),
    //             }
    //         });
    //         console.log(response)
    //         const jsonData = response.data.data;
    //         return jsonData;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //     finally{
    //     }
    // };


    const deleteid = async () => {
        try {
            const response = await axios.post(`https://45.147.99.177:9001/api/Discount/delete/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'text/plain',
                    'Connection': 'keep-alive',
                    'ngrok-skip-browser-warning' : '235',
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
                    title: incode,
                    startTime: instart,
                    expirationTime: inend,
                    amountOfPercent: indiscount,
                    number: inrest,
                },
                {
                    headers: {
                        accept: "text/plain",
                        "Content-Type": "application/json",
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
                    value={indiscount}
                    onChange={handleInputDiscount}
                    dir="rtl"
                />
            </div>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:کد</div>
                <input
                    className={styles.biginput}
                    type="text"
                    value={incode}
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
                    onChange={handleInputEnd} value={inend} views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}/>
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
                    onChange={handleInputStart} value={instart} views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}/>
                </LocalizationProvider>
            </div>
        </div>
        <div className={styles.EditDiscountrow}>
            <div className={styles.EditDiscountlitlebox}>
                <div style={{ height : "100%" }}></div>
                <div className={styles.Editactionbutton} onClick={() => UpdateDiscount()}>
                    <div className={styles.Editactionbuttontext}>اعمال</div>
                </div>
            </div>
            <div className={styles.EditDiscountlitlebox}>
                <div className={styles.Editlitletitle}>:تعداد استفاده شده</div>
                <div className={styles.Editlitletitle}>123</div>
            </div>
            <div className={styles.EditDiscountlitlebox}>
                <div className={styles.Editlitletitle}>:موجودی</div>
                <input
                    className={styles.litleinput}
                    type="text"
                    value={inrest}
                    onChange={handleInputRest}
                    dir="rtl"
                />
            </div>
        </div>
    </div>
  )
}
