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
                    <div className=" p-2 md:p-20 space-y-5">
                        <h1 className=" text-3xl md:text-6xl font-bold text-white text-center">{course.title}</h1>
                        <p className=" text-white text-center md:text-xl mt-2">
                            {course.description}
                        </p>

                        <div className="md:mx-20  grid grid-cols-3 gap-4 md:grid-cols-3 items-center justify-center  mt-10">
                            <div className=" flex flex-col justify-center items-center">
                                <a href="#apropos" className=" active:bg-blue-500 rounded-full hover:bg-blue-500 transition-all  border border-blue-500 p-1 size-20 md:size-32 text-white flex justify-center items-center">
                                    <BookOpen className="size-10 " />
                                </a>
                                <h3 className=" text-center text-xs md:text-sm text-white">Détails de la formation ?</h3>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <a href="#sommaire" className=" active:bg-blue-500 rounded-full hover:bg-blue-500 transition-all  border border-blue-500 p-1 size-20 md:size-32 text-white flex justify-center items-center">
                                    <ListCollapse className="size-10   " />
                                </a>
                                <h3 className=" text-center text-xs md:text-sm text-white">Sommaire de la formation</h3>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <a className=" active:bg-blue-500 rounded-full hover:bg-blue-500 transition-all  border border-blue-500 p-1 size-20 md:size-32 text-white flex justify-center items-center">
                                    <LayoutDashboard className="size-10  " />
                                </a>
                                <h3 className=" text-center text-xs md:text-sm text-white">projet de cette formation</h3>
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
                    <div className=" mt-5 text-zinc-700">
                        {
                            course.ceQueVousApprendrez?.map((item, index) => (
                                <li key={index} className=" mb-2"> {item} </li>
                            ))
                        }
                    </div>
                    <section className=" mt-5">
                        <h2 className=" text-2xl font-bold flex items-center gap-2 m-2"> <ClipboardList />  Prérequis </h2>
                        <div className=" py-2 flex flex-wrap gap-3">
                            {
                                course.prerequis?.map((item, index) => (
                                    <div key={index} className=" p-1 px-5 rounded-full border border-blue-500 w-fit">{item}</div>
                                ))
                            }
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
                    <section>
                        <div className=" mt-5">
                            {
                                course.sommaire?.map((item, index) => (
                                    <div key={index} className=" mb-3 p-3 border border-zinc-200 rounded-box hover:shadow-lg transition-all">
                                        <h2 className=" font-bold text-lg"> {item} </h2>
                                        {/* <p className=" text-zinc-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> */}
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
