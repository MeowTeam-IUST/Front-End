import React, { useState, useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';
import styles from './Dashboard.module.scss';
import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import DashboardMain from '../../Components/DashboardMain/DashboardMain';
import { items } from './Items';
import { Routes, Route, useNavigate , useParams } from 'react-router-dom';
import DefaultDashboard from '../../Components/DefaultDashboard/DefaultDashboard'
import { useSelector, useDispatch } from "react-redux";
import { SetDashboard } from '../../Slices/StateSlice';

export default function Dashboard() {
  const navigate = useNavigate();
  const { itemPath1 } = useParams();
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.State); // Access the "User" slice of the state
  // Find the index of the selected item based on the URL
  const choosenItemIndex = items.findIndex((item) => item.path === window.location.pathname.split('/dashboard/:')[1]);
  const [isScreenLarge, setIsScreenLarge] = useState(true);

  // If the item is found, set it as the chosen item; otherwise, default to the first item
  const [choosenItem, setChoosenItem] = useState(choosenItemIndex);
  const [shouldRenderChildren, setShouldRenderChildren] = useState(true);

  // Use useEffect to navigate to the selected item's URL when choosenItem changes
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShouldRenderChildren(screenWidth >= 480);
      setIsScreenLarge(screenWidth >= 480);
      if (screenWidth > 480 && choosenItem == -1) {
        setChoosenItem(0);
        dispatch(SetDashboard({sidebar: true , main: false}))
      }
      if (screenWidth < 480 && choosenItem == -1) {
        setChoosenItem(-1);
        dispatch(SetDashboard({sidebar: true , main: false}))
      }
      if (screenWidth < 480 && choosenItem != -1) {
        dispatch(SetDashboard({sidebar: false , main: true}))
      }
      if (screenWidth > 480 && choosenItem != -1)
      {
        dispatch(SetDashboard({sidebar: true , main: true}))
      }
      const selectedPath = choosenItem !== -1 ? items[choosenItem].path : 'default1';
      navigate(`/dashboard/:${selectedPath}`);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [choosenItem, navigate]);

  // Check if the selected component is defined
  const SelectedComponent  = choosenItem !== -1 ? items[choosenItem].component : DefaultDashboard;
  return (
    <PageLayout>
      <div className={styles.DashboardLayout}>
        {layout.dashboardSidebar && (
          <DashboardSidebar
            setChoosenItem={setChoosenItem}
            items={items}
            choosenItem={choosenItem}
            isScreenLarge={isScreenLarge}
          />
        )}
        {layout.dashboardMain && (
          <DashboardMain setChoosenItem={setChoosenItem}>
            <Routes>
              <Route path={`/:${itemPath1}`} element={<SelectedComponent />} />
            </Routes>
          </DashboardMain>
        )}
      </div>
    </PageLayout>
  );
}
