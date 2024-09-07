import React from "react";
import styles from "./styles/navbar.module.css";
import { Hambuger } from "@/svg/Hambuger";
import { UserCircle } from "@/svg/UserCircle";

interface Navbar {
  style?: React.CSSProperties;
}

const Navbar: React.FC<Navbar> = ({ style }) => {
  return (
    <div style={style}>
      <div className={styles.header}>
        <Hambuger cursor="pointer" fill="var(--bg-1)" height={20} />
        <UserCircle cursor="pointer" height={25} />
      </div>
    </div>
  );
};

export default Navbar;
