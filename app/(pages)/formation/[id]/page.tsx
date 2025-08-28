"use client"

import Footer from "@/app/components/ui/Footer"
import Header from "@/app/components/ui/Header"
import Logo from "@/app/components/ui/Logo"
import { courses } from "@/app/data/courses"
import { Button } from "@/components/ui/button"
import { ArrowDown, BookOpen, Clock, LayoutDashboard, ListCollapse, Users, FolderOpen } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function Formation() {
  const { id } = useParams()
  const newId = Number(id) - 1
  const course = courses[newId]

  // cours similaires
  const relatedCourses = courses.filter(
    (c) => c.categorie === course.categorie && c.id !== course.id
  ).slice(0, 3)

  return (
    <div className="">
      <Header />
      <div
        style={{ backgroundImage: `url(${course.img})` }}
        className=" bg-no-repeat bg-cover bg-center h-screen "
      >
        <div className=" bg-black/70 text-white size-full flex justify-center items-center md:items-end">
          <div className=" p-2 md:p-20 space-y-5 max-w-4xl">
            <h1 className=" text-3xl md:text-6xl font-bold  text-center">
              {course.title}
            </h1>
            <p className="  text-center md:text-xl mt-2">
              {course.description}
            </p>

            {/* Infos rapides */}
            <div className="flex-wrap hidden md:flex justify-center items-center  gap-5  mt-5 text-center">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" /> {course.duree} mois
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" /> {course.publicCible}
              </span>
              <span className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-blue-400" />{" "}
                {course.categorie}
              </span>
            </div>

            {/* navigation icônes */}
            <div className=" flex gap-10 items-center justify-center mt-10">
              <div className=" flex flex-col justify-center items-center">
                <a
                  href="#apropos"
                  className="active:bg-blue-500 rounded-full hover:bg-blue-500 transition-all border border-blue-500 p-1 size-20 md:size-24 flex justify-center items-center"
                >
                  <BookOpen className="size-10 " />
                </a>
                <h3 className=" text-center text-xs md:text-sm ">
                  À propos
                </h3>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <a
                  href="#sommaire"
                  className="active:bg-blue-500 rounded-full hover:bg-blue-500 transition-all border border-blue-500 p-1 size-20 md:size-24  flex justify-center items-center"
                >
                  <ListCollapse className="size-10   " />
                </a>
                <h3 className=" text-center text-xs md:text-sm ">
                  Sommaire
                </h3>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <a
                  href="#projets"
                  className="active:bg-blue-500 rounded-full hover:bg-blue-500 transition-all border border-blue-500 p-1 size-20 md:size-24  flex justify-center items-center"
                >
                  <LayoutDashboard className="size-10  " />
                </a>
                <h3 className=" text-center text-xs md:text-sm">
                  Projet final
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- A PROPOS --- */}
      <section id="apropos" className="  p-2 md:p-20 flex flex-col-reverse md:flex-row">
        <div className=" md:w-1/2 m-2 space-y-5">
          <div className="pb-2">
            <div>
              <Logo />
            </div>
            <h1 className="text-4xl ps-1 font-bold">Ce que vous apprendrez</h1>
          </div>
          <div className=" mt-5 text-zinc-700">
            {course.ceQueVousApprendrez?.map((item, index) => (
              <p key={index} className=" mb-2">
                {" "}
                {item}{" "}
              </p>
            ))}
          </div>

          {/* prerequis */}
          {/* <section className=" mt-5">
            <h2 className=" text-2xl font-bold flex items-center gap-2 m-2">
              {" "}
              <ClipboardList /> Prérequis{" "}
            </h2>
            <div className=" p-2 flex flex-wrap gap-3">
              {course.prerequis?.map((item, index) => (
                <div
                  key={index}
                  className=" p-1 px-5 text-sm rounded-full border border-blue-500 w-fit"
                >
                  {item}
                </div>
              ))}
            </div>
          </section> */}

          <Button className=" bg-blue-500 p-5 mt-5">
            Consultez le sommaire <ArrowDown />{" "}
          </Button>
        </div>
        <div className=" md:w-1/2 rounded-box md:p-5">
          <Image
            src={course.img}
            alt="image"
            width={500}
            height={500}
            className="rounded-box h-96 w-full object-cover"
          ></Image>
        </div>
      </section>

      {/* --- SOMMAIRE --- */}
      <section id="sommaire" className=" flex flex-col items-center justify-center p-3 md:flex-row bg-zinc-50">

        <div className=" md:w-1/2 p-5 md:px-20">
          <div className="pb-2">
            <Logo />
          </div>
          <h1 className="text-4xl  ps-1 font-bold">Programme du cours</h1>
          <section>
            <div className=" mt-5">
              {course.sommaire?.map((item, index) => (
                <div
                  key={index}
                  className=" mb-3 p-3 border border-zinc-200 rounded-box transition-all hover:shadow-md"
                >
                  <h2 className=" font-bold text-lg"> {item} </h2>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className=" md:w-1/2">
          <Image
            src={"/img/man_sommaire.png"}
            alt="sommaire"
            width={500}
            height={500}
            className="w-full"
          ></Image>
        </div>
      </section>

      {/* --- PROJETS --- */}
      <section id="projets" className="p-10 bg-white">
        <h1 className="text-4xl font-bold text-center mb-5">
          Projet final de la formation
        </h1>
        <p className="text-center max-w-3xl mx-auto text-zinc-700">
          Chaque apprenant réalisera un projet pratique en fin de parcours
          permettant de mettre en application toutes les compétences acquises.
          Ce projet pourra être intégré à votre portfolio professionnel.
        </p>
        <div className="flex justify-center mt-8">
          <Button className="bg-green-500 px-10 py-5">
            Voir un exemple de projet
          </Button>
        </div>
      </section>

      {/* --- COURS LIÉS --- */}
      <section className="p-10 bg-zinc-50">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Formations similaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((rc) => (
            <div
              key={rc.id}
              className="p-5 bg-white shadow rounded-box hover:shadow-lg transition-all"
            >
              <Image
                src={rc.img}
                alt={rc.title}
                width={500}
                height={300}
                className="rounded-box h-40 w-full object-cover"
              />
              <h3 className="mt-3 font-bold text-lg">{rc.title}</h3>
              <p className="text-sm text-zinc-600 line-clamp-3">
                {rc.description}
              </p>
              <Button className="mt-3 bg-blue-500 w-full">Voir plus</Button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer></Footer>
    </div>
  )
}
