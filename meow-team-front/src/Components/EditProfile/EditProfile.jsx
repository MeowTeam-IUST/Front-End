import React, { useState } from 'react';
import styles from './EditProfile.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { SetUser } from '../../Slices/UserSlice.js';
import EditProfileInput from '../EditProfileInput/EditProfileInput';
import azhini from '../../assets/azhini.jfif';
import Requests from '../../API/Requests';
import { BASE_URL, HEADER } from '../../API/consts';
import Popup from '../Popup/Popup';

export function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    try {
      const formData = new FormData();
      formData.append('picture', file);

      const res = await Requests().editProfileImage(formData);
      console.log(res.data);

      // You can dispatch an action to update the user's image in the Redux store if needed
      // For example: dispatch(SetUser({ ...state, image: res.data.image }));
    } catch (error) {
      console.error('Error submitting image:', error);
    }
    try {
      const res = await Requests().getProfile();
      console.log(res.data);
      const data = {
        firstName : res.data.data.firstName,
        lastName : res.data.data.lastName,
        email : res.data.data.email,
        birthDate : res.data.data.birthDate,
        Image : BASE_URL + "/" + res.data.data.urlImage ,
        phoneNumber : res.data.data.phoneNumber,
        Token : localStorage.getItem("token")
      }
      dispatch(SetUser(data))
    } catch (error) {
      console.error('Error submitting image:', error);
    }
  };

  return (
    <div className={styles.EditProfile}>
      <div className={styles.up}>
      <img className={styles.image} src={selectedImage ? URL.createObjectURL(selectedImage) : state.image} alt="" />

        <label className={styles.imageLabel}>
        <div className={styles.button} >تغییر پروفایل</div>

          <input type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
        </label>
      </div>
      <div className={styles.line} />
      <div className={styles.down}>
        <div className={styles.inputs}>
          <EditProfileInput title="نام" value={state.firstName} type={"firstName"} />
          <EditProfileInput title="نام خانوادگی" value={state.lastName} type={"lastName"} />
          <EditProfileInput title="ایمیل" value={state.email} type={"email"} />
          <EditProfileInput title="تاریخ تولد" value={state.birthDate} type={"birthDate"} />
        </div>
      </div>
      <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          title={"آپلود پروفایل"}
          content={
          <div>
            {// add component here
            }
          </div>
          }
        />
    </div>
  );
}
