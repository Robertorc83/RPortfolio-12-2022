import { json } from "@remix-run/node";
import { motion } from "framer-motion";
import type { IsPost } from "~/types/types";
import Header from "~/components/header";
import PostCard from "~/components/postCard";
import { Sidebar } from "~/components/sidebar";
import { GraphQLClient } from "graphql-request";
import { useLoaderData } from "@remix-run/react";
import { GetPostsQuery } from "~/graphql/queries";

export let loader = async () => {
    const hygraph = new GraphQLClient(
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clebe8tf62nlq01tb87fqgca5/master"
    );

    const { posts } = await hygraph.request(GetPostsQuery);

    return json({ posts });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
      <motion.h1  
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="mt-20 animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] xl:text-[80px] font-bold font-bal leading-snug text-center"
      >
        Blog
      </motion.h1>
      <p className="text-center text-white font-monoton tracking-widest mt-8 xl:text-2xl px-10">Find articles about tech, startups, innovation and more.</p>
      <div className="pb-36">
        {posts.map((post: IsPost) => (
            <PostCard 
              key={post.title} 
              title={post.title} 
              excerpt={post.excerpt} 
              slug={post.slug}
              categories={post.categories}
              featuredImage={post.featuredImage}
            />
        ))}
      </div>
    </main>
    </div>
  );
}