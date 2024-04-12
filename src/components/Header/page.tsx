'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { MdDashboard, MdViewList } from "react-icons/md";

export default function Header() {
  const [on, setOn] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [presence, setPresence] = useState(false)

  useEffect(() => {
    if (window.location.pathname == "/") {
      setDashboard(true)
      setPresence(false)
    }

    if (window.location.pathname == "/Presence") {
      setDashboard(false)
      setPresence(true)
    }

    setTimeout(() => {
      setOn(!on)
    }, 300)
  }, [on])

  return (
    <div className={styles.container}>
      <Image
        src="/logo_vilella.png"
        width={200}
        height={100}
        className={styles.logo}
        alt="logo"
      />

      <Link className={dashboard ? styles.linkOn : styles.link} href='/'>
        <MdDashboard className={dashboard ? styles.iconOn : styles.icon} />
        <h2>Dashboard</h2>
      </Link>

      <Link className={presence ? styles.linkOn : styles.link} href='/Presence'>
        <MdViewList className={presence ? styles.iconOn : styles.icon} />
        <h2>Presença</h2>
      </Link>
    </div>
  );
}
