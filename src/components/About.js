import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function About() {
    return (
        <div className="p-10">
            <h1 className="text-8xl">About</h1>
            <p>
                Hi, nice to meet you. My name is Bart Slot.
                When I was a child I was an active kid who needed to let the energy out.
                
            </p>
            <div className="">
                <img src="./pasfoto" alt="" />    
            </div>

            <div className='inline-flex py-3 px-3 my-6'>
                <SocialIcon target="_blank" className="mr-4" style={{height:35, width: 35}} fgColor="#fff" url="https://facebook.com/bart.slot" />
                <SocialIcon target="_blank" className="mr-4" style={{height:35, width: 35}} fgColor="#fff" url="https://www.linkedin.com/in/bslot/" />
                <SocialIcon target="_blank" className="mr-4" style={{height:35, width: 35}} fgColor="#fff" url="https://www.youtube.com/user/B4rthezzz" />
            </div>

        </div>
    )
}