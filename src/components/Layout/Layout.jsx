import React, { useEffect, useState } from 'react'
import styles from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import MyLoader from '../../components/Shared/Loader/Loader'  // استيراد اللودر

export default function Layout() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // مثلاً تحاكي تحميل بيانات أو تأخير صغير
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500) // 1.5 ثانية تأخير تحميل (تقدر تغيره)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className={styles.loaderWrapper} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#000',
            }}>
                <MyLoader />
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
