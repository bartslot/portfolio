import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import { useSpring, animated } from 'react-spring';

export default function Work() {
    useEffect(()=> {
        sanityClient.fetch(`*[_type == "work"]{
            title, 
            subtitle, 
            slug,
            "id": _id,
            mainImage{
                asset-> {
                    _id,
                    url
                },
                alt
            },
            date,
            body,
            client,
            categories,
            foregroundColor,
            backgroundColor
        }`)
        .then((data) => setWorkData(data))
        .catch(console.error)
    }, []);
    
    const [projectData, setWorkData] = useState(null);
    const styles = useSpring({
        to: async (next, cancel) => {
        await next({ opacity: 1, y: 0 })
        },
        from: { opacity: 0, y: 900, color: '#fff' },
    });
    
    return (
        <main className="container mx-auto">
            {/* <nav className="mt-8 border-gray-50	">
                <ul id="tabs" class="inline-flex w-full px-1 pt-2 ">
                            <li class="px-4 py-2 -mb-px font-semibold text-white border-b-2 border-white rounded-t opacity-50"><a id="default-tab" href="#Experiences">Experiences</a></li>
                            <li class="px-4 py-2 font-semibold text-white rounded-t opacity-50"><a href="#Events">Events</a></li>
                            <li class="px-4 py-2 font-semibold text-white rounded-t opacity-50"><a href="#Games">Games</a></li>
                            <li class="px-4 py-2 font-semibold text-white rounded-t opacity-50"><a href="#Installations">Installations</a></li>
                </ul>
            </nav> */}
            <section className="min-height-75 py-10">
                <div className="grid grid-cols-4 gap-8 min-h-full">
                    {projectData &&
                    projectData.map((project, index) => (
                        <Link to={"/work/" + project.slug.current} key={project.slug.current}>
                            <div class="place-self-center">
                                <animated.div style={styles} key={project.id}>
                                <div className="transform cursor-pointer bg-cover bg-center rounded-lg card hover:shadow-inner hover:border-2 hover:border-white" 
                                        style={{backgroundImage: `url(${project.mainImage.asset.url})`}} id="block">
                                </div>           
                                <div className="relative content-center">
                                    <div className="transform absolute py-3">
                                            <h3 className="text-2xl flex justify-start" >{project.title}</h3>
                                            <span className="text-1xl flex justify-start text-white">{project.subtitle}</span>
                                    </div>
                                </div>
                                </animated.div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}