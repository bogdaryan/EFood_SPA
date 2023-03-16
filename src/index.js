import React from "react";
import { createRoot } from 'react-dom/client';
import Master from "@components/Master.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Master />,
	},
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store} >
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
)
