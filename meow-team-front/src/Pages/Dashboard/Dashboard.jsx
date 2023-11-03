import React, { useEffect } from 'react';
import PageLayout from '../../Layout/PageLayout';
import styles from './Dashboard.module.scss';
import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import DashboardMain from '../../Components/DashboardMain/DashboardMain';
import { items } from './Items';

export default function Dashboard() {
  const [choosenItem, setChoosenItem] = React.useState(2);
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  useEffect(() => {
    setSelectedComponent(items[choosenItem].component);
  }, [choosenItem]);

  return (
    <PageLayout>
      <div className={styles.DashboardLayout}>
        <DashboardSidebar setChoosenItem={setChoosenItem} items={items} choosenItem={choosenItem} />
        <DashboardMain>
          {selectedComponent}
        </DashboardMain>
      </div>
    </PageLayout>
  );
}