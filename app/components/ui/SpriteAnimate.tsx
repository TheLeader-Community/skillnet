"use client"

import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

export default function SpriteAnimate() {

    const [mousep, setMousep] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setMousep({
                x: e.clientX,
                y: e.clientY
            })
        }

        document.addEventListener("mousemove", move)
        gsap.to(".circle", {
            left: mousep.x - 50,
            right: mousep.x + 50,
            bottom: mousep.y - 50,
            top: mousep.y + 50,

        })
    }, [mousep])

    return (
        <div  className={`circle cursor-grab fixed z-[60] rounded-full flex justify-center items-center hover:bg-white hover:animate-ping animate-bounce bg-blue-500/60 size-10 md:size-14`}>
          
        </div>
    )
}
