import React from 'react'
import Styles from './AdminPanelSidebar.module.scss'
import eye from '../../assets/eye.svg'
export default function AdminPanelSidebar({setChoosenItem, items, choosenItem }) {
const handleItemClick = (itemIndex) => {
    setChoosenItem(itemIndex);
    };
  return (
    <div className={Styles.SideBar}>
        <div className={Styles.Header}>ادمین اپکس شاپ</div>
        <div className={Styles.Line}/>
        <div className={Styles.Items}>
        <div className={Styles.Item} onClick={() => window.location.href = "/"}>
            <div className={Styles.inner}>
                <img src={eye} alt="" className={Styles.icon} />
                <div className={Styles.Text}>
                مشاهده سایت
                </div>

            </div>
        </div>
        {
            items.map((item, index) => {
                return (
                    <div key={index} className={Styles.Item} onClick={() => handleItemClick(index)}
                    >
                        <div className={Styles.inner}>
                            <img src={item.icon} alt="" className={Styles.icon} />
                            <div className={Styles.Text}>
                            {item.name}
                            </div>

                        </div>
                    </div>
                )
            })
        }
        </div>

    </div>
  )
}
