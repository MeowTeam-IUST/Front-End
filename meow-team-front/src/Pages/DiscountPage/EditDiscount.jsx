import React from 'react'
import styles from './EditDiscount.module.css'


export default function EditDiscount({id , CardDescription}) {
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
        setInEnd(event.target.value);
    };
    const [instart, setInStart] = React.useState("");
    const handleInputStart = (event) => {
        setInStart(event.target.value);
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
                <input
                    className={styles.biginput}
                    type="text"
                    value={inend}
                    onChange={handleInputEnd}
                    dir="rtl"
                />
            </div>
            <div className={styles.EditDiscountbox}>
                <div className={styles.Editboxtitle}>:تاریخ شروع</div>
                <input
                    className={styles.biginput}
                    type="text"
                    value={instart}
                    onChange={handleInputStart}
                    dir="rtl"
                />
            </div>
        </div>
        <div className={styles.EditDiscountrow}>
            <div className={styles.EditDiscountlitlebox}>
                <div style={{ height : "100%" }}></div>
                <div className={styles.Editactionbutton}>
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
