/**
 * main.jsx
 * --------
 * Application entry point.
 *
 * Responsibilities:
 * - Mount React application
 * - Wrap with AuthProvider (global authentication state)
 * - Provide RouterProvider (React Router v7)
 *
 * Architecture:
 * AuthProvider
 *    ↓
 * RouterProvider
 *    ↓
 * Route tree
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { router } from "./constants/router";
import i18n from "./i18n";
// Styling
import "./index.css";
import "./assets/style";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<RouterProvider router={router} />
		</I18nextProvider>
	</React.StrictMode>
);