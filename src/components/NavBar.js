import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink to='/' exact 
                            activeClassName='text-white'
                            className='inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-200 text-4xl tracking-widest'>
                        Bart Slot
                    </NavLink>
                    <NavLink to='/post'
                        activeClassName='text-white'
                        className='inflex-flex self-center items-center py-6 px-3 text-blue-300 hover:text-blue-200 text-1xl'>
                        Blog
                    </NavLink>
                    <NavLink to='/project'
                        activeClassName='text-white'
                        className='inflex-flex self-center items-center py-6 px-3 text-blue-300 hover:text-blue-200 text-1xl'>
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                        activeClassName='text-white'
                        className='inflex-flex self-center items-center py-6 px-3 text-blue-300 hover:text-blue-200 text-1xl'>
                        About                        
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
