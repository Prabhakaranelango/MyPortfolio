import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu ,setToggleMenu]= useState(false)
    return <header className="flex justify-between px-4 py-2 bg-primary">
        <a className="font-bold text-white" href="#">Prabhakaran Elango</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white'>
                <li><a href='#Home' className='hover:text-black'>Home</a></li>
                <li><a href='#About' className='hover:text-black'>About</a></li>
                <li><a href='#Skills' className='hover:text-black'>Skills</a></li>
                <li><a href='#Education' className='hover:text-black'>Education</a></li>
                <li><a href='#Contact' className='hover:text-black'>Contact</a></li>
            </ul>
        </nav>

        {toggleMenu && <nav className='block md:hidden mobile-nav'>
            <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col text-white'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Skills'>Skills</a></li>
                <li><a href='#Education'>Education</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </nav>}

        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
}