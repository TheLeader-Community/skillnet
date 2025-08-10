"use client"

import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, Clock, Lock, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function CardCourse({ course }: { course: Course }) {

    const router = useRouter()

    const goTo = () => {
        router.push(`/formation/${course.id}`)

    }

    const [etat, setEtat] = useState(false)

    return (
        <div onMouseEnter={() => setEtat(true)} onMouseLeave={() => setEtat(false)} className='  shadow-xl border border-zinc-300 rounded-box'>
            <div className=' relative '>
                <div className=' absolute flex items-center gap-1 left-0 text-sm w-fit rounded-full p-1 px-5 m-5 bg-green-500/80 text-white'>
                    avec certification <CheckCircle size="13" />
                </div>
                <Image src={course.img} width={500} height={500} alt='formation' className=' w-full h-80 rounded-t-box object-cover'></Image>
                {!course.nonDisponible && <motion.div initial={{ scale: 0 }} animate={{ scale: etat ? 1 : 0 }} className=' absolute flex justify-center items-center top-0 left-0 size-full bg-black/30 p-5 text-white rounded-box'>
                    <div className=' '>
                        <Button onClick={goTo} className="px-10 bg-blue-500">Voir plus</Button>
                    </div>
                </motion.div>}
                {course.nonDisponible && <div className=' absolute flex justify-center items-center top-0 left-0 size-full bg-black/60 p-5 text-white rounded-box'>
                    <div className=' '>
                        <Button className="px-10 bg-black/80">  <Lock></Lock> bientot disponible</Button>
                    </div>
                </div>}
            </div>
            <div className=' p-5'>
                <div className=' flex justify-between items-center'>
                    <div className=' flex items-center py-2'>
                        <Star fill='orange' color='orange' size={15} />
                        <Star fill='orange' color='orange' size={15} />
                        <Star fill='orange' color='orange' size={15} />
                        <Star fill='orange' color='orange' size={15} />
                        <Star fill='orange' color='orange' size={15} />
                    </div>
                    <div className=' flex bg-black rounded-full gap-2 text-white text-xs items-center p-1 px-5'>
                        <Clock size="20"></Clock>
                        <h1>{course.duree ?? "3"} mois</h1>
                    </div>
                </div>
                <h2 className=" text-sm mt-2">{course.categorie}</h2>
                <h1 className=' text-xl font-semibold text-black'>Formation en  {course.title}</h1>
                <p className=' text-sm mt-2'>
                    {course.description}
                </p>
                <div className=' py-5 flex justify-between items-center'>
                    {course.createdAt && <div className=' text-xs flex justify-start gap-2 items-center'>
                        <Calendar size={20} /> publier {course.createdAt}
                    </div>}
                </div>
                <Button onClick={goTo} className="p-2 w-full md:hidden px-10  bg-blue-500">Voir plus</Button>
            </div>
        </div>
    )
}