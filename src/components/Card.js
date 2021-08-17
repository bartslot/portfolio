import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Card() {
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
    
    return (
        <div>
            
        </div>
    )
}
