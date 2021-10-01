import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import { useSpring, animated } from 'react-spring';
import HoverVideoPlayer from 'react-hover-video-player';

export default function Work() {
    useEffect(()=> {
        sanityClient.fetch(`*[_type == "work"]{
            title, 
            subtitle, 
            slug,
            "id": _id,
            portraitImage{
                asset-> {
                    _id,
                    url
                },
                alt
            },
            date,
            body,
            "videoURL": video.asset->url,
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
        <main className="container max-w-screen-xl px-10 mx-auto">
            <nav className="mt-8 border-gray-50 border-opacity-20 border-b">
                <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
                            <li className="px-4 py-2 -mb-px font-semibold text-white border-b-2 border-white rounded-t opacity-100"><a id="default-tab" href="#Experiences">Experiences</a></li>
                            <li className="px-4 py-2 font-semibold text-white rounded-t opacity-50"><a href="#Events">Events</a></li>
                            <li className="px-4 py-2 font-semibold text-white rounded-t opacity-50"><a href="#Games">Games</a></li>
                            <li className="px-4 py-2 font-semibold text-white rounded-t opacity-50"><a href="#Installations">Installations</a></li>
                </ul>
            </nav>
            <section className="h-24 min-h-full py-20">
                <div className="grid grid-cols-4 gap-8 min-h-full">
                    {projectData &&
                    projectData.map((project, index) => (
                        <Link to={"/work/" + project.slug.current}  className="card min-h-full">
                            <div className="place-self-center">
                                <animated.div style={styles} key={project.id}>
                                <div className="overflow-hidden card-image rounded-lg">
                                <HoverVideoPlayer
                                    videoSrc={`${project.videoURL}`}
                                    pausedOverlay={
                                        <img
                                        src={`${project.portraitImage.asset.url}`}
                                        alt=""
                                        style={{
                                            // Make the image expand to cover the video's dimensions
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        />
                                    }
                                    loadingOverlay={
                                        <div className="loading-spinner-overlay" />
                                    }
                                    />
                                    {/* <div className="transform cursor-pointer bg-cover bg-center rounded-lg card hover:scale-105 transition duration-500 out-expo hover:shadow-inner hover:border-2 hover:border-white" 
                                        style={{backgroundImage: `url(${project.portraitImage.asset.url})`}} id="block">
                                    </div>     */}
                                </div>   
                                <div className="relative content-center">
                                    <div className="transform absolute py-8 hover:py-2">
                                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                                            <span className="text-1xl text-white">{project.subtitle}</span>
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