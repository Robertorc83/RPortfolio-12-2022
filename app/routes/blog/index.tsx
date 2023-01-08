import { json } from "@remix-run/node";
import Header from "~/components/header";
import { Sidebar } from "~/components/sidebar";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import PostCard from "~/components/postCard";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
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
        My Blog
      </motion.h1>
      <p className="text-center text-white font-monoton tracking-widest mt-8 xl:text-2xl">Find articles about tech, startups, innovation and more.</p>
      <div className="mt-16 xl:mt-24 pb-36">
        {posts.map((post) => (
            <PostCard key={post.title}/>
        ))}
      </div>
    </main>
    </div>
  );
}