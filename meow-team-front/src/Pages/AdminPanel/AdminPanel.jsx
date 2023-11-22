import React, { useState, useEffect } from 'react';
import styles from './AdminPanel.module.scss';
import { items } from './Items';
import { Routes, Route, useNavigate , useParams } from 'react-router-dom';
import AdminPanelMain from '../../Components/AdminPanelMain/AdminPanelMain';
import AdminPanelSidebar from '../../Components/AdminPanelSidebar/AdminPanelSidebar';
export default function AdminPanel() {
  const navigate = useNavigate();
  const { itemPath1 } = useParams();
  console.log(window.location.pathname.split('/adminpanel/:')[1])

  const choosenItemIndex = items.findIndex((item) => item.path === window.location.pathname.split('/adminpanel/:')[1]);
  console.log(choosenItemIndex);

  const [choosenItem, setChoosenItem] = useState(() => {
    return choosenItemIndex !== -1 ? choosenItemIndex : 0;
  });


  useEffect(() => {
    const selectedPath = items[choosenItem].path;
    navigate(`/adminpanel/:${selectedPath}`);
  }, [choosenItem, navigate]);

  const SelectedComponent = items[choosenItem].component;

  return (
    <div className={styles.Full} dir="rtl">
      <AdminPanelSidebar items={items}/>
      <AdminPanelMain>

      </AdminPanelMain>
    </div>
  );
}
