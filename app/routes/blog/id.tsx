import Header from "~/components/header";
import PostSidebar from "~/components/postSidebar";
import { Sidebar } from "~/components/sidebar";

export default function Post () {
    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className="pb-20 mt-16 ">
                <h1 className="text-center animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-[60px] font-monoton tracking-widest">What is React fiber?</h1>
                <div className="px-64 mt-10 xl:px-96">
                        <img src="/reactjs.png" alt="" className="rounded-lg" />
                    </div> 
                <div className="grid grid-cols-5">
                    <div className="col-span-4 mt-10 px-36">
                        <p className="text-white mt-10 font-abril xl:text-xl">
                            React Fiber is a new implementation of the React engine that was released in September 2017. It was designed to improve the performance of React applications by breaking the work of rendering a component into smaller chunks that can be spread out over multiple frames.<br/><br/>

                            One of the key features of React Fiber is its ability to pause the rendering process and yield to other tasks. This allows the browser to handle other tasks, such as responding to user input, while the rendering process continues in the background.<br/><br/>

                            Another important aspect of React Fiber is its ability to rearrange the order in which work is performed. This allows the engine to prioritize important tasks, such as responding to user input, over less important ones, such as rendering images.<br/><br/>

                            React Fiber also introduces a new concept called "reconciliation," which is the process of diffing two virtual DOM trees and updating the actual DOM. This process has been optimized in React Fiber to be more efficient and to allow for more fine-grained control over the rendering process.<br/><br/>

                            Overall, React Fiber aims to improve the performance of React applications by making the rendering process more efficient and responsive. It does this by breaking the work of rendering into smaller chunks and allowing the browser to handle other tasks in between.<br/><br/>
                        </p>
                        <h3 className=" animate-text bg-gradient-to-r from-amber-200 via-red-400 to-orange-400 bg-clip-text text-transparent text-2xl xl:text-[30px] font-monoton tracking-widest">Reconciliation in react fiber</h3>
                        <p className="text-white font-abril mt-10 xl:text-xl">
                            One of the key features of the new reconciliation algorithm in React Fiber is its ability to break the work of updating the DOM into smaller chunks, which can be spread out over multiple frames. This allows the browser to handle other tasks, such as responding to user input, while the reconciliation process continues in the background. This can result in a more responsive and smoother user experience.<br/><br/>

                            React Fiber also introduces the concept of "reconciliation priorities," which allow developers to specify the importance of different updates. This can be useful in cases where certain updates are more important to the user's experience than others, and should be prioritized accordingly.<br/><br/>

                            Overall, the reconciliation process in React Fiber is designed to be more efficient and to allow for more fine-grained control over the rendering process, which can improve the performance of React applications.<br/><br/>
                        </p>
                    </div>
                    <div className="mt-20">
                        <PostSidebar/>
                    </div>
                </div>
            </div>
        </div>
    )
}