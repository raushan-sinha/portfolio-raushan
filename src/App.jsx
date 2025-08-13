import Home from "./pages/Home";
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
                    <section className="bg-[#0f0f0f] rounded-xl shadow-lg border border-gray-800">
                        <Home />
                    </section>
                </main>

            </div>
        </body>

    );
}
