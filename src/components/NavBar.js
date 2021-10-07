import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <div className="container mx-auto max-w-screen-xl px-10 md:py-4">
                <nav className='flex content-center justify-between'>
                    <NavLink to='/'>
                    <div className='logo flex flex-grow-0 flex-row col-span-1 py-6 px-3 mr-4 flex-start text-blue-100 text-4xl tracking-widest'>    
                            <div>
                                <svg>
                                    <g id="bartlogo" fill="#FFFFFF">
                                        <polygon id="Path-2" points="114.050416 152.232756 81.3620149 160.482968 44.4313247 125.582507 39.3659886 95.8792126 32.1205708 79.1903363 23.225559 79.1903363 18.6474586 93.1170821 32.1205708 108.640488 34.1484948 122.518545 23.225559 119.836652 0 71.8393867 3.48191957 49.5185454 23.225559 22.5185454 51.8254426 11.800352 93.0883207 2.92857982 91.8082975 16.6080929 98.5136509 -1.13686838e-13 98.5136509 11.800352 107.711972 -1.13686838e-13 112.302017 2.92857982 117.230388 22.5185454 117.230388 41.6763086 101.558376 36.5781633 81.2063568 36.5781633 54.3899316 39.025787 48.160959 49.5185454 54.3899316 63.8384193 48.160959 71.8393867 69.5801343 66.90234 96.676736 66.90234 101.558376 69.1618849 107.711972 66.90234 117.230388 69.1618849 114.050416 84.6595054 107.711972 86.7695958 103.382697 75.3742922 98.5136509 75.3742922 91.8082975 86.7695958 72.072684 84.6595054 69.5801343 75.3742922 44.4313247 79.1903363 54.3899316 105.9589 79.4543544 119.836652 91.8082975 108.640488 112.302017 108.640488 120.235613 125.582507"></polygon>
                                        <polygon id="Path-3" points="94.1787568 99.527609 94.9556169 103.022207 101.254436 103.611377 112.362619 102.022207 113.689863 97.7809916 112.362619 99.6904168 108.834037 102.196184 102.67261 101.196184 95.8900452 99.8637831 97.3881183 93.9043733"></polygon>
                                    </g>
                                </svg>
                            </div>
                        <div><p className="font-semibold md:text-1xl">Bart Slot</p></div>
                    </div>
                    </NavLink>
                    <div className='col-span-4 py-6 flex-grow-1 w-auto justify-end'> 
                        <NavLink to='/work'
                            activeClassName='active-menu-item'
                            className='inflex-flex self-center items-center py-6 px-3 text-white hover:text-blue-200 md:text-1xl'>
                            Work
                        </NavLink>
                        <NavLink to='/post'
                            activeClassName='active-menu-item'
                            className='inflex-flex  self-center items-center py-6 px-3 text-white hover:text-blue-200 md:text-1xl'>
                            Blog
                        </NavLink>
                        <NavLink to='/about'
                            activeClassName='active-menu-item'
                            className='inflex-flex self-center items-center py-6 px-3 text-white hover:text-blue-200 md:text-1xl'>
                            About                        
                        </NavLink>
                        <NavLink to='/contact'
                            activeClassName='active-menu-item'
                            className='inflex-flex self-center items-center py-2 px-12 md:ml-12 rounded-full border-white border-2 text-white hover:text-blue-200 text-1xl'>
                            Contact                     
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}
