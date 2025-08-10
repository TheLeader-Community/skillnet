"use client"

import { Input } from "@/components/ui/input";
import { GraduationCap, Search } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import { categories } from "@/app/data/categorie";
import { ChangeEvent, useState } from "react";
import { courses } from "@/app/data/courses";
import { CardCourse } from "../ui/CardCourse";


export default function Sectionformation() {

    const [categorie, setCategorie] = useState("")
    const [search, setSearch] = useState("")

    const filterByCategorieOnly = courses.filter(el => el.categorie?.toLocaleLowerCase() == categorie.toLowerCase())
    const filterByNameOnly = courses.filter(el => el.title.toLowerCase().includes(search.toLowerCase()) || el.categorie?.toLowerCase().includes(search.toLowerCase()) || el.description?.toLowerCase().includes(search.toLowerCase()))

    let filterCourse = categorie !== "" ? filterByCategorieOnly : courses

    if (categorie !== "") {
        if (search !== "") {
            filterCourse = filterByCategorieOnly && filterByNameOnly
        }
        else {
            filterCourse = filterByCategorieOnly
        }
    }
    else if (search !== "") {
        if (categorie !== "") {
            filterCourse = filterByCategorieOnly && filterByNameOnly
        }
        else {
            filterCourse = filterByNameOnly
        }
    }

    const currStyle = "bg-blue-500 text-white hover:bg-blue-400"
    const defaultStyle = " bg-zinc-200 hover:bg-blue-500 "

    const filterBySearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <div className=" flex flex-col items-center justify-center gap-5 md:px-20">
                <h1 className=" w-20   text-3xl font-bold ps-3 flex flex-col justify-center items-center text-center "> <GraduationCap color="blue" size={100} />  Formations</h1>
                <div className=" w-full flex justify-center items-center gap-2 px-5">
                    <Search />
                    <Input onChange={filterBySearch} type="search" className="w-80 md:max-w-96 placeholder:text-zinc-700" placeholder="recherche une formation..." />

                </div>
                <ul className=" flex  md:flex-wrap gap-3 items-center mt-3 no-scrollbar overflow-x-scroll w-[100%]">
                    <li onClick={() => setCategorie("")} className={"text-nowrap cursor-pointer rounded-full p-2 px-10  hover:text-white transition-all " + (categorie == "" ? currStyle : defaultStyle)}>Tous</li>
                    {
                        categories.map((el: string, index: number) => (
                            <li onClick={() => setCategorie(el)} key={index} className={"text-nowrap cursor-pointer rounded-full p-2 px-10  hover:text-white transition-all " + (categorie == el ? currStyle : defaultStyle)}>{el}</li>
                        ))
                    }
                </ul>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Accueil</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/docs/components">Formations</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{categorie}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <section className=' grid md:grid-cols-2 lg:grid-cols-3 p-3 md:p-5 gap-5'>
                {
                    filterCourse.map((el: Course, index) => (
                        <CardCourse key={index} course={el} />
                    ))
                }
                {/*  */}

            </section>
        </div>
    )
}
