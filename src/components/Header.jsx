import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-white shadow-sm h-[90px] py-2'>
        <div className='container'>
            <div className='flex items-center justify-between h-full'>
                <div className='flex items-center'>
                    <Link href='/' className='flex items-center border-orange-400 border p-3'>
                        <span className='text-5xl font-bold text-orange-400'>VN</span>
                    </Link>
                </div>
                <nav className='flex items-center'>
                    <Link className='py-2 px-5 font-bold text-blue-900' href='/'>
                        <span>Inicio</span>
                    </Link>
                    <Link className='py-2 px-5 bg-orange-400 font-bold text-white rounded-full' href='/contactos'>
                        <span className='text-white'>Contacto</span>
                    </Link>
                </nav>
            </div>
        </div>
    </header>
  )
}
