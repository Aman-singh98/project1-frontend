// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/layouts/Header";
// import Footer from "./components/layouts/Footer";
// import Home from "./routes/Home";
// import Mission from "./routes/Mission";
// import Vision from "./routes/Vision";
// import Courses from "./routes/Courses";
// import Gallery from "./routes/Gallery";
// import FAQ from "./routes/Faq";
// import Blogs from "./routes/Blogs";
// import About from "./routes/About";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
// 	return (
// 		<>
// 			<ToastContainer
// 				position="top-right"
// 				autoClose={3000}
// 				theme="light"
// 			/>
// 			<BrowserRouter>
// 				<Header />
// 				<Routes>
// 					<Route path="/" element={<Home />} />
// 					<Route path="/about" element={<About />} />
// 					<Route path="/mission" element={<Mission />} />
// 					<Route path="/vision" element={<Vision />} />
// 					<Route path="/courses" element={<Courses />} />
// 					<Route path="/gallery" element={<Gallery />} />
// 					<Route path="/faq" element={<FAQ />} />
// 					<Route path="/blogs" element={<Blogs />} />
// 				</Routes>
// 				<Footer />
// 			</BrowserRouter>
// 		</>
// 	);
// }

// export default App;

/**
 * App.jsx
 * -------
 * Root layout component.
 *
 * Responsibilities:
 * - Provide global layout structure
 * - Render header / footer (if needed)
 * - Serve as layout wrapper for routed pages
 *
 * Note:
 * Routing is handled via RouterProvider in main.jsx.
 */
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
	return (
		<>
		<ToastContainer
				position="top-right"
				autoClose={3000}
				theme="light"
			/>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
