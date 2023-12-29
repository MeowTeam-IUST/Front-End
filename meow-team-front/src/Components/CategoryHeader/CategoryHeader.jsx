import React, {useState} from 'react'
import styles from './CategoryHeader.module.scss'
import edit from '../../assets/Edit.svg'
import { EditSectionPopUp } from '../AddSectionPopUp/EditSectionPopUp';
export default function CategoryHeader({icon, title , admin, id, refresh , setRefresh }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
   const closePopup = () => {
     setPopupOpen(false);
   };
  return (
    <div>
        <div className={styles.CategoryHeader}>
          <img className={styles.icon} src={icon} alt="" />
          <div className={styles.CategoryTitle}>{title}</div>
          {
            admin== true &&
            <img src={edit} alt="" onClick={()=>openPopup()} />
          }
        </div>
        <EditSectionPopUp isOpen={isPopupOpen} onClose={closePopup} refresh={refresh} setRefresh={setRefresh} id={id}  />

    </div>
  )
}
