import React from 'react'
import PageLayout from '../../Layout/PageLayout'
import styles from './Dashboard.module.scss'
import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar'
import DashboardMain from '../../Components/DashboardMain/DashboardMain'
export default function Dashboard() {
  return (
    <PageLayout>
      <div className={styles.DashboardLayout}>
        <DashboardSidebar />
        <DashboardMain />        
      </div>
    </PageLayout>
  )
}
