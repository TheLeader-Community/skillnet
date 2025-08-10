"use client"

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { Code2, Gamepad2, Laptop2, Server, Smartphone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";


export default function Hero() {

    const introtextRef = useRef(null)
    const slogantextRef = useRef(null)


    const introText = "le numérique par  la pratique et des projets"


    const started = async () => {
        const Splitting = (await import("splitting")).default

        if (typeof document !== "undefined") {
            const selection = Splitting()

            gsap.to(selection[0].chars, { opacity: 0, stagger: 0.1 })

            gsap.registerPlugin(TextPlugin)

            const tl = gsap.timeline()
            tl.to(slogantextRef.current, { y: 0, opacity: 1 })
                .to(selection[0].chars, { opacity: 1, stagger: 0.1, rotate: 0 })
        }
    }


    useEffect(() => {
        started()
    }, [])


    return (
        <section className=" bg-white p-2">
            <div className='max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 mt-8'>
                <div className='space-y-5 max-w-4xl mx-auto text-center'>
                    <h1 ref={slogantextRef} className='text-sm translate-y-10 opacity-0 text-primary font-medium'>
                        mettez à jours vos compétences
                    </h1>
                    <h2 className='text-4xl font-extrabold mx-auto md:text-7xl'>
                        <span data-splitting ref={introtextRef} className='text-transparent bg-clip-text bg-gradient-to-r from-black via-[#4F46E5] to-[#E114E5]'> {introText}</span>
                        {/* <span><Pencil></Pencil></span> */}
                    </h2>
                    <p className='max-w-2xl mx-auto'>
                        Le numérique est devenu incontournable dans notre quotidien. Faites partie de ceux qui le maîtrisent et en tirent le meilleur.
                    </p>
                    <div className=" hidden md:flex justify-center  items-center gap-3 my-5">
                        <div className="hover:bg-blue-500 hover:-rotate-12 hover:-translate-y-2 hover:-translate-x-2 hover:text-white transition-all size-20 flex justify-center items-center bg-zinc-200 shadow rounded-full">
                            <Code2 />
                        </div>
                        <div className="hover:bg-blue-500 hover:-rotate-12 hover:-translate-y-2 hover:-translate-x-2 hover:text-white transition-all size-20 flex justify-center items-center bg-zinc-200 shadow rounded-full">
                            <Laptop2 />
                        </div>
                        <div className="hover:bg-blue-500 hover:-rotate-12 hover:-translate-y-2 hover:-translate-x-2 hover:text-white transition-all size-20 flex justify-center items-center bg-zinc-200 shadow rounded-full">
                            <Server />
                        </div>
                        <div className="hover:bg-blue-500 hover:-rotate-12 hover:-translate-y-2 hover:-translate-x-2 hover:text-white transition-all size-20 flex justify-center items-center bg-zinc-200 shadow rounded-full">
                            <Smartphone />
                        </div>
                        <div className="hover:bg-blue-500 hover:-rotate-12 hover:-translate-y-2 hover:-translate-x-2 hover:text-white transition-all size-20 flex justify-center items-center bg-zinc-200 shadow rounded-full">
                            <Gamepad2 />
                        </div>
                    </div>
                    <div className='items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0'>
                        <Button className=" py-6 px-10 mt-5"><Image alt="logo" src="/img/Digital_Glyph_Green.png" width={500} height={500} className="size-6" />  Rejoindre notre groupe whatsapp</Button>
                        {/* <Button>Découvrire nos services</Button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}


