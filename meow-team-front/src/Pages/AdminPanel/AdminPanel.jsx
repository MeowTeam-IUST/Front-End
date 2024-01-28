import React, { useState, useEffect } from 'react';
import styles from './AdminPanel.module.scss';
import { items } from './Items';
import { Routes, Route, useNavigate , useParams } from 'react-router-dom';
import AdminPanelMain from '../../Components/AdminPanelMain/AdminPanelMain';
import AdminPanelSidebar from '../../Components/AdminPanelSidebar/AdminPanelSidebar';

export default function AdminPanel() {
  const navigate = useNavigate();
  const { itemPath1 } = useParams();
  console.log(itemPath1)
  const [p, setP] = React.useState(false)
  const choosenItemIndex = items.findIndex((item) => item.path === window.location.pathname.split('/adminpanel/:')[1]);
  
  // if (window.location.pathname.includes("/adminpanel/:Products/"))
  // {
  //   setP(true)
  // }
  const [choosenItem, setChoosenItem] = useState(() => {
    return choosenItemIndex == -1 ? window.location.pathname.includes("/adminpanel/:Products")? 2:  0 : choosenItemIndex;
  });


  useEffect(() => {
    const selectedPath = items[choosenItem].path;
    if(window.location.pathname.includes("/adminpanel/:Products/"))
      navigate(window.location.pathname);
    else
      navigate(`/adminpanel/:${selectedPath}`);
  }, [choosenItem, navigate]);

  const SelectedComponent = items[choosenItem].component;

  return (
    <div className={styles.Full} dir="rtl">
      <AdminPanelSidebar setChoosenItem={setChoosenItem} items={items} choosenItem={choosenItem}/>
      <AdminPanelMain>
        <Routes>
            <Route path={`/:${itemPath1}`} element={<SelectedComponent />} />
        </Routes>
      </AdminPanelMain>
    </div>
  );
}
