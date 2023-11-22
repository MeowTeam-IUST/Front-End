import React from 'react'
import Styles from './AdminPanelSidebar.module.scss'
export default function AdminPanelSidebar({items}) {
  return (
    <div className={Styles.SideBar}>
        <div className={Styles.Header}>ادمین اپکس شاپ</div>
        <div className={Styles.Line}/>
        <div className={Styles.Items}>
        {
            items.map((item, index) => {
                return (
                    <div key={index} className={Styles.Item} >
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
