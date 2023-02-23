import Header from "~/components/header";
import { Sidebar } from "~/components/sidebar";
import { GraphQLClient } from "graphql-request";
import { GetPostBySlug } from "~/graphql/queries";
import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@remix-run/node";
import PostSidebar from "~/components/postSidebar";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { CopyBlock, dracula } from "react-code-blocks"
import type { ElementNode } from '@graphcms/rich-text-types';
import React from "react";
import { motion } from "framer-motion";

export let loader = async ({ params }: LoaderArgs) => {
    const { id } = params;

    const hygraph = new GraphQLClient(
      "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clebe8tf62nlq01tb87fqgca5/master"
    );
  
    const { post } = await hygraph.request(GetPostBySlug, {
      slug: id,
    });
  
    return json({ post });
  };

export default function Post () {
    let { post } = useLoaderData();
    return(
        <motion.div exit={{ opacity: 0 }}>
            <Header/>
            <Sidebar/>
            <div className="pb-20 mt-16">
                <h1 className="text-center animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[40px] px-5 lg:text-[60px] font-monoton tracking-widest">{post.title}</h1>
                <div className="lg:px-64 mt-10 xl:px-96">
                        <img src={`${post.featuredImage.url}`} alt="" className="rounded-lg" />
                    </div> 
                <div className="lg:grid lg:grid-cols-5 justify-items-center w-full">
                    <div className="col-span-4 mt-10 mx-10 lg:mx-0 lg:px-20 xl:px-36">
                        <RichText
                            content={post.content.raw}
                            renderers={{
                            h3: ({ children }) => <h3 className="animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 mt-10 bg-clip-text text-transparent text-2xl xl:text-[30px] font-monoton tracking-widest">{children}</h3>,
                            p: ({ children }) => <p className="text-white mt-5 font-abril lg:px-0 xl:text-xl">{children}</p>,
                            code_block: ({ children }) => {
                                return React.isValidElement(children) ? <div className="mt-10 pb-5 font-abril">
                                    <CopyBlock
                                        language="tsx"
                                        text={children?.props.content[0].text}
                                        showLineNumbers={true}
                                        theme={dracula}
                                        wrapLines={true}
                                        codeBlock />
                                </div> : <></>;   
                            }}}
                        />
                    </div>
                    <div className="mt-16 flex justify-center lg:px-0 w-full ">
                        <PostSidebar/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}