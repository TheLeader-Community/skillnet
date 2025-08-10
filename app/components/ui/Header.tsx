"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"


export default function Header() {

    const [scroll, setScroll] = useState(0)
    const path = usePathname()
    const box = useRef(null)

    const excluedPath = ["/", "/formation"]


    useEffect(() => {
        if (typeof document !== "undefined") {
            window.addEventListener("scroll", function () {
                setScroll(scrollY)
            })

            if (scroll == 0) {
                gsap.to(box.current, { backgroundColor: "transparent", color:"text-white" })
            } else {
                gsap.to(box.current, { backgroundColor: "white" })

            }
        }
    }, [scroll])


    return (
        <Card ref={box} className={" border-none fixed w-full rounded-none top-0 backdrop-blur-lg gap-0   left-0 p-0 z-50 "}>
            <div className='navbar  rounded-box p-2 md:px-10 items-center'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke={(scroll == 0 && !excluedPath.includes(path) ? 'white' : "black")}>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h8m-8 6h16' />
                            </svg>
                        </div>
                        <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-background rounded-box w-52'>
                            <NavListe />
                        </ul>
                    </div>
                    <Link href={"/"} className={(scroll == 0 && !excluedPath.includes(path) ? 'text-white' : "text-black")} >
                        <Logo />
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex items-center'>
                    <ul className={'menu flex gap-2 menu-horizontal px-1 '+ (scroll == 0 && !excluedPath.includes(path) ? 'text-white' : "text-black")}>
                        <NavListe />
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className=" flex gap-3">
                        <a href="tel:+242064716383"  >
                            <Button className="bg-blue-500 text-white hover:bg-blue-500/60 transition-all">Contactez nous</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className=" scrollBarNav w-10 h-0.5 bg-blue-500"></div> */}
        </Card>
    )
}



function NavListe() {
    return (
        <>
            <NavLink name="Accueil" href="/" />
            <NavLink name="Services" href="/services" />
            <NavLink name="Formation" href="/formation" />
            <NavLink name="Contacte" href="/contacte" />
            <NavLink name="A propos" href="/blog" />
        </>
    )
}


function NavLink({ name = "accueil", href }: { name: string, href: string }) {
    const pathname = usePathname()
    return (
        <li>
            <Link className={pathname === `/${(name.toLocaleLowerCase() !== "accueil" ? name.toLocaleLowerCase() : "")}` ? "text-blue-500 font-bold" : ""} href={href}>{name}</Link>
            {/* <motion.span initial={{ width: 0 }} animate={{ width: etat || pathname === `/${(name.toLocaleLowerCase() !== "accueil" ? name.toLocaleLowerCase() : "")}` ? "100%" : 0 }} className={"bg-blue-500 hidden md:flex px-0"}></motion.span> */}
        </li>
    )
}