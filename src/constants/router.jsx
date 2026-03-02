/**
 * Router Configuration (React Router v7)
 * ---------------------------------------
 * - Public website routes wrapped in App layout
 * - Admin routes wrapped in AdminLayout
 */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminGuards from "../components/layouts/AdminGuard";
import AdminLayout from "../components/layouts/AdminLayout";

/* Public Pages */
import Home from "../routes/Home";
import About from "../routes/About";
import Mission from "../routes/Mission";
import Vision from "../routes/Vision";
import Courses from "../routes/Courses";
import Gallery from "../routes/Gallery";
import FAQ from "../routes/Faq";
import Blogs from "../routes/Blogs";
import Ambulance from "../routes/Ambulance";
import Internship from "../routes/Internship";
import FirstAddKit from "../routes/FirstAddKit";
import AdminDashboard from "../routes/AdminDashboard";
import Privacy from "../routes/Privacy";
import RefundsPolicy from "../routes/RefundsPolicy";
import TermsAndConditions from "../routes/TermsAndConditions";

export const ROUTERS = {
    admin:'admin',
    About: 'about',
    Dashboard: 'dashboard',
    Mission: 'mission',
    Vision: 'vision',
    Courses: 'courses',
    Gallery: 'gallery',
    FAQ: 'faq',
    Blogs: 'blogs',
    Ambulance: 'ambulance',
    Internship: 'internship',
    FirstAddKit: 'first-add-kit',
    Privacy:'privacy-policy',
    Terms:'terms-and-conditions',
    Refund:'refund-policy'
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: ROUTERS.About, element: <About /> },
            { path: ROUTERS.Mission, element: <Mission /> },
            { path: ROUTERS.Vision, element: <Vision /> },
            { path: ROUTERS.Courses, element: <Courses /> },
            { path: ROUTERS.Gallery, element: <Gallery /> },
            { path: ROUTERS.FAQ, element: <FAQ /> },
            { path: ROUTERS.Blogs, element: <Blogs /> },
            { path: ROUTERS.Ambulance, element: <Ambulance /> },
            { path: ROUTERS.Internship, element: <Internship /> },
            { path: ROUTERS.FirstAddKit, element: <FirstAddKit /> },
            { path: ROUTERS.Privacy, element: <Privacy /> },
            { path: ROUTERS.Terms, element: <TermsAndConditions /> },
            { path: ROUTERS.Refund, element: <RefundsPolicy /> }
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: ROUTERS.Dashboard,
                element: (
                    <AdminGuards>
                        <AdminDashboard />
                    </AdminGuards>
                ),
            },
        ],
    },
]);
