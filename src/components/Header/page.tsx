'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { MdDashboard, MdViewList, MdPayments, MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [on, setOn] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [presence, setPresence] = useState(false)
  const [payment, setPeyment] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.location.pathname == "/") {
      setDashboard(true)
      setPresence(false)
      setPeyment(false)
    }

    if (window.location.pathname == "/Presence") {
      setDashboard(false)
      setPresence(true)
      setPeyment(false)
    }

    if (window.location.pathname == "/Payments") {
      setDashboard(false)
      setPresence(false)
      setPeyment(true)
    }

    setTimeout(() => {
      setOn(!on)
    }, 300)
  }, [on])

  return (
    <div className={open ? styles.containerOpen : styles.containerClose}>
      {open ? (
        <MdClose onClick={() => setOpen(!open)} className={styles.menu} />
      ) : (
        <MdMenu onClick={() => setOpen(!open)} className={styles.menu} />
      )}

      <Image
        src="/logo_vilella.png"
        width={200}
        height={100}
        className={styles.logo}
        alt="logo"
      />

      <Link onClick={() => setOpen(false)} className={dashboard ? styles.linkOn : styles.link} href='/'>
        <MdDashboard className={dashboard ? styles.iconOn : styles.icon} />
        <h2>Dashboard</h2>
      </Link>

      <Link onClick={() => setOpen(false)} className={presence ? styles.linkOn : styles.link} href='/Presence'>
        <MdViewList className={presence ? styles.iconOn : styles.icon} />
        <h2>Presença</h2>
      </Link>

      <Link onClick={() => setOpen(false)} className={payment ? styles.linkOn : styles.link} href='/Payments'>
        <MdPayments className={payment ? styles.iconOn : styles.icon} />
        <h2>Contas a pagar</h2>
      </Link>
    </div>
  );
}
