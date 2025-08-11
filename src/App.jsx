import Home from "./pages/Home";
import TechStack from "./pages/TechStack";

export default function App() {
    return (
        <body className='bg-black'>
            <div className="flex min-h-screen bg-black text-white p-4">
                {/* Sidebar */}
                <TechStack />

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    <Home />
                </div>
            </div>
        </body>
    );
}
