"use client"
import style from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Banner() {

    const covers = ['/img/banner1.jpg', '/img/banner2.png', '/img/banner3.png']
    const[index, setIdex] = useState(0)

    return (

        <div className={style.banner} onClick={() => {setIdex(index+1)}}>
            <Image src={covers[index%3]}
                alt='covers'
                fill={true}
                style={{ objectFit: "cover" }} />
            <div className={style.bannerText}>
                <h1>where every event finds its venue</h1>
            </div>
        </div>
    )
}