import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
import { NavigationProvider } from './utils/context/Navigation/NavigationProvider.jsx';
import NavBar from './components/layout/NavBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NavigationProvider>
            <NextUIProvider>
                <main className="light text-foreground bg-background">
                    <NavBar/>
                    <App />
                </main>
            </NextUIProvider>
        </NavigationProvider>
    </BrowserRouter>,
)
