import axios from 'axios'
import React, { useEffect } from 'react'

export default function RecentProducts() {




    async function bebo(params) {
        let btee5 = await axios.get("http://127.0.0.1:8000/api/index/room")
        console.log(btee5)
    }

    useEffect(() => {
        bebo()
    }, [])
    return (
        <div>
            recent
        </div>
    )
}
