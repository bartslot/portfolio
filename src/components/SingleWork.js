import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {PortableText, BlockContent } from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client.js";
import { useSpring, animated } from "react-spring";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleWork() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const [singleWork, setSingleWork] = useState(null);
  const { slug } = useParams();
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      mainImage: props =>(
        <div class="py-10">
          <img class="rounded-sm" src={urlFor.props.node.asset} alt={props.node.alt} />
          <p class="text-xs italic">{props.node.asset.caption}</p>
        </div>
      ),
    },
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `slug.current == "${slug}"]{
            title,
            subtitle,
            slug,
            aboutTitle,
            aboutContent,
            role,
            client,
            date,
            mainImage{
              asset-> {
                  _id,
                  url
              },
              alt
            },
            body[]{
                ..., 
                asset->{
                  ...,
                  "_key": _id,
                }
            },
            foregroundColor,
        }`)
      .then((data) => setSingleWork(data[0]))
      .catch(console.error);
  }, [slug]);
  
  if (!singleWork) return <div class="container">Loading...</div>;
  return (
    <main className="min-h-screen bg-white">
      <div
        className="h-screen w-full flex items-left justify-left p-28 pt-64 bg-cover bg-center shadow-inner-3xl"
        style={{ backgroundImage: `url(${singleWork.mainImage.asset.url})` }}
      >
        <div className="container mx-auto max-w-screen-l px-10 py-4">
          <h1 className="text-white text-5xl">{singleWork.title}</h1>
        </div>
      </div>
      <article className="container mx-auto max-w-screen-l px-10 py-4">
        <header className="relative">
          <div className="h-full w-full flex items-center justify-center p-xl py-20">
            <animated.div style={props} className="bg-white rounded p-xl">
              <section>
                 <span className="uppercase text-green-400 font-semibold"  /* style={{ color: `${singleWork.foregroundColor}`}}> */ >
                    {singleWork.aboutTitle}
                </span>
                <h2 className="text-5xl leading-normal tracking-tight about"><PortableText blocks={singleWork.aboutContent} /></h2>
              </section>
              <section className="py-20 grid grid-cols-5 gap-20">
                <div className="col-span-4">
                    <div>
                        <PortableText blocks={singleWork.aboutContent} />
                    </div>
                </div>
                <div>
                  <p className="">
                    <h3 className="font-semibold uppercase inline-block">
                      Role
                    </h3>< br/>
                    <span>{singleWork.role}</span>
                  </p>
                  <p className="py-2">
                    <h3 className="font-semibold uppercase inline-block">
                      Client
                    </h3>< br/>
                    <span>{singleWork.client}</span>
                  </p>
                  <p className="py-2">
                    <h3 className="font-semibold uppercase inline-block">
                      Date
                    </h3>< br/>
                    <span>{singleWork.date}</span>
                  </p>
                </div>
              </section>
              <section>
                <PortableText blocks={singleWork.body} serializers={serializers} />
                {/* <BlockContent blocks={singleWork.contentImage} serializers={serializers} /> */}
              </section>
            </animated.div>
          </div>
        </header>
      </article>
    </main>
  );
}
