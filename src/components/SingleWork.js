import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client.js";
import { useSpring, animated } from 'react-spring';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SingleWork() {
    
    const styles = useSpring({
        to: async (next, cancel) => {
        await next({ opacity: 1, color: '#ffaaee' })
        await next({ opacity: 0, color: 'rgb(14,26,19)' })
        },
        from: { opacity: 0, color: 'red' },
    })
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const [ singleWork, setSingleWork] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author -> image
        }`).then((data) => setSingleWork(data[0]))
        .catch(console.error)
    }, [slug])

    if (!singleWork) return <div>Loading...</div>
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-blue-200 rounded-lg">
                <header className="relative">
                    <div className="h-full w-full flex items-center justify-center p-8">
                        <animated.div style={props} className="bg-white bg-opacity-75 rounded p-12">
                             <animated.h1 style={styles} className="text-3xl lg:text-6xl mb-4">{singleWork.title}</animated.h1>
                            <div className="flex justify-center text-gray-800">
                            <img src={urlFor(singleWork.authorImage).url()} alt={singleWork.name} 
                            className="max-w-30 rounded-full" /> 
                            </div>
                        </animated.div>
                    </div>
                </header>
                <div> <h1>{singleWork.title}</h1> </div>
                <div>YOUTUBE CONTENT</div>
            </article>
        </main>
    )
}
