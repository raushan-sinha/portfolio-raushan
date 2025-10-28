import { Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Portfolio from './pages/Portfolio';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projectPage" element={<ProjectPage />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/blogPage" element={<BlogPage />} />
            <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
    );
}