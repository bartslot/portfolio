import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';


export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "post"]{
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
        .then((data) => setPost(data))
        .catch(console.error);
    }, [])
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center">Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData &&
                    postData.map((post, index) => (
                        <article key={post.slug.current}>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <img src={post.mainImage.asset.url} alt={post.slug.current} />
                            <span>
                                <h3>{post.title.current}</h3>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
            <h1 className="text-8xl">Post</h1>
        </main>
    )
}
