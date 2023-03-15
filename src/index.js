import React from "react";
import { createRoot } from 'react-dom/client';
import Master from "@components/Master.jsx";
import { Provider } from 'react-redux'

import { store } from './redux/store.js'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store} >
		<Master />
	</Provider>
)
