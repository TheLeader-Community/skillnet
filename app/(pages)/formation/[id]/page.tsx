"use client"

import Header from "@/app/components/ui/Header"
import Logo from "@/app/components/ui/Logo"
import { courses } from "@/app/data/courses"
import { Button } from "@/components/ui/button"
import { ArrowDown, BookOpen, ClipboardList, Clock, LayoutDashboard, ListCollapse } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"


export default function Formation() {

    const { id } = useParams()

    const newId = Number(id) - 1
    const course = courses[newId]


    return (
        <div className="">
            <Header />
            <div style={{ backgroundImage: `url(${course.img})` }} className="bg-no-repeat bg-cover bg-center h-screen w-full">
                <div className=" bg-black/60 size-full flex justify-center items-center md:items-end">
                    <div className=" p-2 md:p-10 space-y-5">
                        <h1 className=" text-3xl md:text-7xl font-bold text-white text-center">{course.title}</h1>
                        <p className=" text-white text-center md:text-xl mt-2">
                            {course.description}
                        </p>

                        <div className="md:mx-20  grid grid-cols-3 gap-4 md:grid-cols-3 items-center justify-center  mt-10">
                            <a href="#apropos" className=" active:bg-blue-500 hover:bg-blue-500 transition-all rounded-box border border-blue-500 p-1 md:py-10 text-white flex flex-col justify-center items-center">
                                <BookOpen className="size-10  md:size-20 " />
                                <h3 className=" text-center text-xs md:text-sm">Détails de la formation ?</h3>
                            </a>
                            <a href="#sommaire" className=" active:bg-blue-500 hover:bg-blue-500 transition-all rounded-box border border-blue-500 p-1 md:py-10 text-white flex flex-col justify-center items-center">
                                <ListCollapse className="size-10  md:size-20 " />
                                <h3 className=" text-center text-xs md:text-sm">Sommaire de la formation</h3>
                            </a>
                            <div className=" active:bg-blue-500 hover:bg-blue-500 transition-all rounded-box border border-blue-500 p-1 md:py-10 text-white flex flex-col justify-center items-center">
                                <LayoutDashboard className="size-10  md:size-20 " />
                                <h3 className=" text-center text-xs md:text-sm">projet de cette formation</h3>
                            </div>
                        </div>

                        <div className=" flex justify-center items-center mt-20 md:mt-10">
                            <Button className=" p-5 px-10 bg-blue-500">Découvrire la formation</Button>
                        </div>
                    </div>
                </div>
            </div>

            <section id="apropos" className=" p-2 md:p-10 flex flex-col-reverse md:flex-row">
                <div className=" md:w-1/2 m-2">
                    <div className="pb-2">
                        <Logo />
                    </div>
                    <h1 className="text-4xl md:text-5xl ps-1 font-bold">Ce que vous apprendrez</h1>
                    <p className=" mt-5 text-zinc-700">
                        Skillnet est une plateforme visant à orienter et former aux métiers du numérique.
                        Elle a pour objectif de combler les lacunes dans ce domaine en proposant un large éventail
                        de domaines allant de l&lsquo;informatique de base, au développement web et mobile, à
                    </p>
                    <section className=" mt-3">
                        <div className=" flex flex-wrap gap-2">
                            <h2 className=" text-xs rounded-full p-2 px-5 bg-black w-fit my-3 text-white font-bold flex items-center gap-2"> <Clock /> {course.duree} mois </h2>
                            <h2 className=" text-xs rounded-full p-2 px-5 bg-black w-fit my-3 text-white font-bold flex items-center gap-2"> <Clock /> 5000 FCFA/mo </h2>
                        </div>
                        <h2 className=" text-2xl font-bold flex items-center gap-2 m-2"> <ClipboardList />  Prérequis </h2>
                        <div className=" py-2 flex flex-wrap gap-3">
                            <div className=" p-1 px-5 rounded-full border border-blue-500 w-fit">Logique et algorithmie</div>
                            <div className=" p-1 px-5 rounded-full border border-blue-500 w-fit">web</div>
                            <div className=" p-1 px-5 rounded-full border border-blue-500 w-fit">Programmation</div>
                        </div>
                    </section>

                    <Button className=" bg-blue-500 p-5 mt-5">Consultez le sommaire <ArrowDown /> </Button>
                </div>
                <div className=" md:w-1/2 rounded-box md:p-5">
                    <Image src={course.img} alt="image" width={500} height={500} className="rounded-box h-96 w-full object-cover"></Image>
                </div>
            </section>

            <section id="sommaire" className=" flex flex-col p-3 md:flex-row">
                <div className=" md:w-1/2">
                    <Image src={"/img/etudiant.avif"} alt="sommaire" width={500} height={500} className="w-full"></Image>
                </div>
                <div className=" md:w-1/2">
                    <div className="pb-2">
                        <Logo />
                    </div>
                    <h1 className="text-4xl md:text-5xl ps-1 font-bold">Aux sommaires</h1>
                </div>
            </section>
        </div>
    )
}
