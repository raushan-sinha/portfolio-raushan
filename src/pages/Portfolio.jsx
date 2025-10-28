import TechStack from '../sections/TechStack';
import Profile from '../sections/Profile';
import Project from '../sections/Project';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

export default function Portfolio() {
    return (
        <div className="bg-black text-white">
            <div className="px-10 py-8 gap-5 hidden lg:flex">
                <TechStack />

                <main className="flex flex-col gap-5">
                    <Profile />

                    <div className="flex gap-4">
                        <Project />

                        <Blog />
                    </div>

                    <Contact />
                </main>
            </div>

            <div className="flex p-5 gap-4 flex-col lg:hidden">
                <Profile />

                <TechStack />

                <Project />

                <Blog />

                <Contact />
            </div>
        </div>
    );
}