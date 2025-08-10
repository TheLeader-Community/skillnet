"use client"

import Image from 'next/image'
import React from 'react'
import Logo from '../ui/Logo'
import { Button } from '@/components/ui/button'
import { CheckCircle, ClipboardList, Hammer } from 'lucide-react'

export default function SectionExpertise() {
    return (
        <section className='md:pt-14'>
            <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
                <div className='max-w-2xl mx-auto text-center'>
                    <h3 className='text-3xl font-semibold sm:text-4xl'>
                        La satisfaction de nos apprenants est notre priorité
                    </h3>
                    <p className='mt-3'>
                        Nous nous efforçons de proposer les formations les plus complètes possibles. Voici ce que nous offrons pour garantir une meilleure expérience.
                    </p>
                </div>
                <div className='mt-12'>
                    <ul className='flex flex-col md:flex-row items-center justify-center gap-y-10 lg:divide-x'>
                        {/* Utiliser une boucle map si nécessaire */}
                        <li className='text-center rounded-box bg-blue-500 shadow px-12 md:px-10 flex justify-center flex-col items-center py-10'>
                            <Hammer color="white" className="size-12 md:size-24" />
                            <h4 className='text-xl text-white font-semibold'>Forte pratique</h4>
                            <p className='mt-3 font-medium text-sm text-zinc-300'>Exercices et projets à chaque séance</p>
                        </li>
                        <li className='text-center shadow px-12 md:px-10 flex justify-center flex-col items-center py-10'>
                            <CheckCircle color="blue" className="size-12 md:size-24" />
                            <h4 className='text-xl text-primary font-semibold'>Certifications</h4>
                            <p className='mt-3 font-medium text-sm'>Certification à la fin de chaque module</p>
                        </li>
                        <li className='text-center rounded-box bg-blue-500 shadow px-12 md:px-10 flex justify-center flex-col items-center py-10'>
                            <ClipboardList color="white" className="size-12 md:size-24" />
                            <h4 className='text-xl text-white font-semibold'>Challenges</h4>
                            <p className='mt-3 font-medium text-sm text-zinc-300'>Quiz, tests et défis en continu</p>
                        </li>
                    </ul>
                </div>

                <section>
                    <div className="p-5 flex flex-col md:flex-row justify-between items-center">
                        <div className="md:w-1/2">
                            <Image
                                src={"/illustrations/graduation hats-rafiki.png"}
                                alt="Illustration de remise de diplôme"
                                width={500}
                                height={500}
                                className="min-w-96 md:min-w-80"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <div className="pb-2">
                                <Logo />
                            </div>
                            <h1 className="text-4xl md:text-5xl ps-1 font-bold">Qui sommes-nous&nbsp;?</h1>
                            <p className="m-2 mt-5 text-zinc-700">
                                Skillnet est une plateforme visant à orienter et former aux métiers du numérique.
                                Elle a pour objectif de combler les lacunes dans ce domaine en proposant un large éventail
                                de domaines allant de l&lsquo;informatique de base, au développement web et mobile, à
                                l&lsquo;administration Linux, aux bases de données, jusqu&lsquo;à l&lsquo;exploration de secteurs en plein essor
                                comme l&lsquo;intelligence artificielle et la data science.
                            </p>
                            <Button className="px-10 bg-blue-500 mt-5">En savoir plus</Button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
