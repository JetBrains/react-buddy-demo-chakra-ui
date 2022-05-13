import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews} from "./dev";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}>
                <App/>
            </DevSupport>
        </ChakraProvider>
    </React.StrictMode>
)
