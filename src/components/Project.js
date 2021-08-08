import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function Project() {
    const [projectData, setProject] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "project"]{
            title, 
            slug,
            mainImage{
                asset-> {
                    _id,
                    url
                },
                alt
            },
        }`)
        .then((data) => setProject(data))
        .catch(console.error);
    }, [])
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">Projects Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Portfolio items</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData &&
                    projectData.map((project, index) => (
                        <article>
                        <Link to={"/project/" + project.slug.current} key={project.slug.current}>
                            <img src={project.mainImage.asset.url} alt={project.slug.current} />
                            <span>
                                <h3>{project.title.current}</h3>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
            <h1 className="text-8xl">Project</h1>
        </main>
    )
}