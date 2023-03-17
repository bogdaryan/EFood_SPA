import React from "react";
import { createRoot } from 'react-dom/client';
import Master from "@components/Master.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Master />)
