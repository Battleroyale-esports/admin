import Navbar from '@/components/home/Navbar'
import React from 'react'
import styles from './page.module.css'
import SideNav from '@/components/home/SideNav'
import Content from '@/components/home/Content'

const page = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div style={{display: "flex"}}>
        <SideNav />
        <Content />
      </div>
    </div>
  )
}

export default page
