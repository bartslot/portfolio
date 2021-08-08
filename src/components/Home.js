import React from 'react'
import image from '../assets/hexadome_big.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="Hexadome" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold">Hi. My name is Bart</h1>
            </section>
            <h1>Home</h1>
        </main>
    )
}
