import React from 'react'
import styles from './DashboardSidebar.module.scss'
import Exit from '../../assets/Exit.svg'
import azhini from '../../assets/azhini.jfif'
import { useSelector, useDispatch } from 'react-redux';
import { SetDashboard } from '../../Slices/StateSlice';

export default function DashboardSidebar({ setChoosenItem, items, choosenItem, isScreenLarge }) {
  const layout = useSelector((state) => state.State); // Access the "User" slice of the state

  const handleItemClick = (itemIndex) => {
    console.log(itemIndex)
    setChoosenItem(itemIndex);
    if (!isScreenLarge) {
      if (choosenItem === -1) {
        dispatch(SetDashboard({ sidebar: false, main: false }));
      }    
    }
  };
  
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const nameToShow = state.firstName != "Null" ? state.lastName != "Null"?  state.firstName + " " +  state.lastName : state.firstName : state.phoneNumber ;
  const dispatch = useDispatch();
    return (
    <div className={styles.DashboardSidebar}>
        <div className={styles.Profile}>
          <img src={state.image} alt="" className={styles.image}/>
          <div className={styles.detail}>
              <div className={styles.name}>{nameToShow}</div>
              <div className={styles.phone}>{state.phoneNumber}</div>
          </div>
        </div>
        <div className={styles.line}/>
        {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`${index === choosenItem ? styles.ActiveItem : styles.Item }`}
            onClick={() => handleItemClick(index)}
          >
            <div key={index} className={styles.Item} >
            <img src={item.icon} alt="" className={styles.icon} />
            <div className={styles.Text}>
            {item.name}
            </div>
            </div>
          </div>
        );
      })}
        <div className={styles.Item} >
          <img src={Exit} alt="" className={styles.icon} />
          <div className={styles.Text}>خروج</div>
        </div>
    </div>
  )
}
