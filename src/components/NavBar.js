import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <div className="container mx-auto py-4">
                <nav className='flex align-middle justify-between'>
                    <div className='logo col-span-2 py-6 px-3 mr-4 flex-start text-blue-100 text-4xl tracking-widest'>
                        <NavLink to='/'>
                            Bart Slot
                        </NavLink>
                    </div>
                    <div className='col-span-4 py-6  w-auto justify-end'> 
                        <NavLink to='/work'
                            activeClassName='active-menu-item'
                            className='inflex-flex self-center items-center py-6 px-3 text-white hover:text-blue-200 text-1xl'>
                            Work
                        </NavLink>
                        <NavLink to='/post'
                            activeClassName='active-menu-item'
                            className='inflex-flex  self-center items-center py-6 px-3 text-white hover:text-blue-200 text-1xl'>
                            Blog
                        </NavLink>
                        <NavLink to='/about'
                            activeClassName='active-menu-item'
                            className='inflex-flex self-center items-center py-6 px-3 text-white hover:text-blue-200 text-1xl'>
                            About                        
                        </NavLink>
                        <NavLink to='/about'
                            activeClassName='active-menu-item'
                            className='inflex-flex self-center items-center py-2 px-12 ml-20 rounded-full border-white border-2 text-white hover:text-blue-200 text-1xl'>
                            Contact                     
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}
