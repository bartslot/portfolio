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
        <main className="min-h-screen bg-white">
            <div className="min-h-28 w-full flex items-left justify-left container p-28 pt-64 bg-cover bg-center shadow-inner-3xl" style={{backgroundImage: `url(${singleWork.mainImage.asset.url})`}}>
                <h1 className="text-white text-5xl">{singleWork.title}</h1>
            </div>
            <article className="container p-28">
                <header className="relative">
                    <div className="h-full w-full flex items-center justify-center p-xl">
                        <animated.div style={props} className="bg-white bg-opacity-75 rounded p-xl">
                            <span className="text-gray-900 uppercase">About the project</span>
                            <h1>{singleWork.title}</h1>
                            <div className="flex justify-center text-gray-800">
                            <img src={urlFor(singleWork.overviewImage).url()} alt={singleWork.name} 
                            className="max-w-30 rounded-full" /> 
                            </div>
                        </animated.div>
                    </div>
                </header>
                <div><h1>{singleWork.title}</h1></div>
                <div>YOUTUBE CONTENT</div>
            </article>
        </main>
    )
}
