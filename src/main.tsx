import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import {RootStoreContextProvider} from "./stores/RootStore.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootStoreContextProvider>
        <App />
    </RootStoreContextProvider>
  </StrictMode>,
)
