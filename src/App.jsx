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
