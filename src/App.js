import React, {createContext} from 'react';

import {Header} from "./client/component/Header";
import {TimeDisplay} from "./client/component/TimeDisplay";
import {initialState} from "./store/initialState";

import './App.css';

export const AppContext = createContext(null);

function App() {

    return (
        <AppContext.Provider value={initialState}>
            <div className="App">
                <Header/>
                <TimeDisplay>
                </TimeDisplay>
            </div>
        </AppContext.Provider>
    );
}

export default App;
