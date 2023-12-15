import React from 'react';
import styles from './EditProfileInput.module.scss';
import edit from '../../assets/Edit.svg';
import confirm from '../../assets/Accept.svg';
import cancel from '../../assets/cross.svg';
import { useSelector, useDispatch } from 'react-redux';
import { SetUser } from '../../Slices/UserSlice.js';
import Requests from '../../API/Requests';
import { BASE_URL, HEADER } from '../../API/consts';

export default function EditProfileInput({ title, value , type }) {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value == null || value =="Null" ? " " : value); // Store the input value
  
  if (value === 'Null' || value === null) {
    value = 'نامشخص';
  }
  
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value as the user types
  };
  const [data , setData] = React.useState({
    firstName : null,
    lastName : null,
    phone : state.phoneNumber,
    email : null,
    birthDate : null,
  });
  const handleConfirm = async () => {
    // just change the value of type in data
    data[type] = inputValue;
    try{
      const res = await Requests().editProfile(data);
      setOpenEdit(false); // Close the edit mode
      const data1 = {
        firstName : res.data.data.firstName,
        lastName : res.data.data.lastName,
        email : res.data.data.email,
        birthDate : res.data.data.birthDate,
        Image : state.image ,
        phoneNumber : res.data.data.phoneNumber,
        Token : localStorage.getItem("token")
      }
      console.log(data1)
      dispatch(SetUser(data1))
    }
    catch(err){
      console.log(err);
    }
    
      
  };

  return (
    <>
      {openEdit ? (
        <div className={styles.EditProfileInputEdit}>
          <div className={styles.title}>{title}</div>
          <input
            className={styles.input}
            type="text"
            value={inputValue} // Set the input value
            onChange={handleInputChange} // Handle input changes
          />

          <div className={styles.buttons}>
            <img
              className={styles.button1}
              src={confirm}
              alt="Confirm"
              onClick={handleConfirm} // Call handleConfirm on Confirm button click
            />
            <img
              className={styles.button1}
              src={cancel}
              alt="Cancel"
              onClick={() => setOpenEdit(false)}
            />
          </div>
        </div>
      ) : (
        <div className={styles.EditProfileInput}>
          <div className={styles.detail}>
            <div className={styles.title}>{title}</div>
            <div className={styles.value}>{value}</div>
          </div>
          <img
            className={styles.button}
            src={edit}
            alt="Edit"
            onClick={() => setOpenEdit(true)}
          />
        </div>
      )}
    </>
  );
}