import React from 'react'
import styles from './EditProfileInput.module.scss'
import edit from '../../assets/Edit.svg'
import confirm from '../../assets/Accept.svg'
import cancel from '../../assets/Cross.svg'
export default function EditProfileInput({title, value, setter}) {
  const [openEdit , setOpenEdit] = React.useState(false);
  return (
    <>
      {openEdit ? (
        <div className={styles.EditProfileInputEdit}>
          <div className={styles.title}>{title}</div>
          <input className={styles.input} type="text" />

          <div>
            <img
              className={styles.button1}
              src={confirm}
              alt="Confirm"
              onClick={() => setOpenEdit(false)}
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
