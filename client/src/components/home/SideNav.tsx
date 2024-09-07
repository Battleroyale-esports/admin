import React from 'react'
import styles from './styles/sidenav.module.css'

interface SideNav{
  style?: React.CSSProperties;
}

const SideNav: React.FC<SideNav> = ({style}) => {
  return (
    <div style={style}>
      <div className={styles.sideNav}></div>
    </div>
  )
}

export default SideNav
