import './App.css';
import React from 'react'
import {Main} from "./components/MainComponenet";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
            <BrowserRouter>
                <div>
            <Main/>
                </div>
            </BrowserRouter>

    );
}

export default App;
