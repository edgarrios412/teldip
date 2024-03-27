import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import CardDemo from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
import { NavigationProvider } from './utils/context/Navigation/NavigationProvider.jsx';
import NavBar from './components/layout/NavBar.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    // <NextUIProvider>
        <BrowserRouter>
            <NavigationProvider>
                <NavBar />
                <CardDemo />
            </NavigationProvider>
        </BrowserRouter>
    // </NextUIProvider>
    ,
)
