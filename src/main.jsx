import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
import { NavigationProvider } from './utils/context/Navigation/NavigationProvider.jsx';
import NavBar from './components/layout/NavBar.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'https://back-teldip.onrender.com';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <NextUIProvider>
        <BrowserRouter>
            <NavigationProvider>
                <NavBar />
                <App />
            </NavigationProvider>
        </BrowserRouter>
    // </NextUIProvider>
    ,
)
