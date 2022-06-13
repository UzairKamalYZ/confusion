import './App.css';
import React from 'react'
import {Main} from "./components/MainComponenet";
import {BrowserRouter} from "react-router-dom";
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from "react-redux";

function App() {

    return (
        <Provider store={ConfigureStore}>
        <BrowserRouter>
            <div>
                <Main/>
            </div>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
