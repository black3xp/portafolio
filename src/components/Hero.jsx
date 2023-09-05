import Link from 'next/link'
import React from 'react'
import { BsAward, BsHeadset } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

export default function Hero() {
  return (
    <section className='h-[calc(100vh-90px)] bg-gray-300 relative'>
        <div className='container h-full'>
            <div className='flex flex-row items-center justify-start h-full'>
                <div className='w-full md:w-1/2'>
                    <p className='text-gray-700 text-xl'>Hola, Soy</p>
                    <h1 className='text-5xl font-bold text-blue-900 my-2'>Vladimir Núñez</h1>
                    <h2 className='text-3xl text-blue-900'>Desarrollador web</h2>
                    <p className='text-gray-700 my-2'>
                    Expertise en fomentar una
                    cultura colaborativa y automatizada, integrando los equipos de desarrollo
                    y operaciones para acelerar el ciclo de desarrollo y asegurar la calidad del
                    producto final 
                    </p>
                    <a href='/files/cv vladimir nunez.pdf' target='_blank' className='text-white px-4 py-2 my-2 inline-block rounded-full bg-orange-400 font-bold text-sm'>
                        Descargar CV
                    </a>
                    <Link href='/contacto' className='text-blue-900 ml-3 px-4 py-2 my-2 inline-block rounded-full border-2 border-orange-400 font-bold text-sm'>
                        Contactame
                    </Link>
                </div>
                
            </div>
            <div className='block md:absolute bg-white md:shadow-2xl w-full md:w-[800px] md:h-[150px] md:bottom-[-75px] md:right-[calc(50%-400px)] md:rounded-full md:flex md:items-center md:justify-center'>
                <div className="grid grid-cols-3">
                    <div className="col-span-3 md:col-span-1 flex flex-row items-center md:justify-center md:px-2 md:border-r-2 h-[100px]">
                        <div className='bg-orange-400 h-[50px] w-[50px] rounded-full flex justify-center items-center mr-3'>
                            <BsAward className='text-3xl text-white'/>
                        </div>
                        <div>
                            <p className='text-md text-blue-900 font-bold'>5 años</p>
                            <p className='text-sm'>Experiencia</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 flex flex-row items-center md:justify-center md:px-10 md:border-r-2 h-[100px]">
                        <div className='bg-orange-400 h-[50px] w-[50px] rounded-full flex justify-center items-center mr-3'>
                            <FaWpforms className='text-3xl text-white'/>
                        </div>
                        <div>
                            <p className='text-md text-blue-900 font-bold'>30+ Proyectos</p>
                            <p className='text-sm'>Completados</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 flex flex-row items-center md:justify-center md:px-2 h-[100px]">
                        <div className='bg-orange-400 h-[50px] w-[50px] rounded-full flex justify-center items-center mr-3'>
                            <BsHeadset className='text-3xl text-white'/>
                        </div>
                        <div>
                            <p className='text-md text-blue-900 font-bold'>Soporte</p>
                            <p className='text-sm'>En linea 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
