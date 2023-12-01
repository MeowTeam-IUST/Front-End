import React, { useState, useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';
import styles from './Dashboard.module.scss';
import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import DashboardMain from '../../Components/DashboardMain/DashboardMain';
import { items } from './Items';
import { Routes, Route, useNavigate , useParams } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const { itemPath1 } = useParams();

  // Find the index of the selected item based on the URL
  const choosenItemIndex = items.findIndex((item) => item.path === window.location.pathname.split('/dashboard/:')[1]);

  // If the item is found, set it as the chosen item; otherwise, default to the first item
  const [choosenItem, setChoosenItem] = useState(() => {
    return choosenItemIndex !== -1 ? choosenItemIndex : 0;
  });

  // Use useEffect to navigate to the selected item's URL when choosenItem changes
  useEffect(() => {
    const selectedPath = items[choosenItem].path;
    navigate(`/dashboard/:${selectedPath}`);
  }, [choosenItem, navigate]);

  // Check if the selected component is defined
  const SelectedComponent = items[choosenItem].component;

  return (
    <PageLayout>
      <div className={styles.DashboardLayout}>
        <DashboardSidebar setChoosenItem={setChoosenItem} items={items} choosenItem={choosenItem} />
        <DashboardMain>
          <Routes>
            <Route path={`/:${itemPath1}`} element={<SelectedComponent />} />
          </Routes>
        </DashboardMain>
      </div>
    </PageLayout>
  );
}
