import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Project from "./pages/Project";
import TechStack from "./pages/TechStack";

export default function App() {
    return (
        <body className="bg-black">
            <div className="flex min-h-screen bg-black text-white px-10 py-8 gap-6">

                {/* Sidebar */}
                <aside className="w-min flex-shrink-0 ml-4">
                    <div className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
                        <TechStack />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col gap-8">
                    {/* Home */}
                    <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
                        <Home />
                    </section>

                    <div className="flex flex-row items-center gap-2">
                        {/* Project */}
                        <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800 w-min">
                            <Project />
                        </section>

                        {/* Blog */}
                        <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800 w-min">
                            <Blog />
                        </section>
                    </div>
                </main>

            </div>
        </body>
    );
}




// import Home from "./pages/Home";
// import Project from "./pages/Project";
// import TechStack from "./pages/TechStack";

// export default function App() {
//     return (
//         <body className="bg-black">
//             <div className="flex flex-col lg:flex-row gap-6 text-white">
//                 <div className="hidden lg:block w-full lg:w-1/4">
//                     <div className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
//                         <TechStack />
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-6 w-full lg:w-3/4">
//                     <section className="order-1">
//                         <Home />
//                     </section>

//                     <div className="order-2 lg:hidden">
//                         <TechStack />
//                     </div>

//                     <div className="order-3 flex flex-col lg:flex-row gap-6">
//                         <div className="w-full lg:w-1/2">
//                             <Project />
//                         </div>

//                         <div className="w-full lg:w-1/2">
//                             <div className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800 p-6">
//                                 Blog
//                             </div>
//                         </div>
//                     </div>

//                     {/* <div className="order-4">Blog</div>
//                     <div className="order-5">Connect</div> */}
//                 </div>
//             </div>
//         </body>

//     );
// }
