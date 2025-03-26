import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_CLIENT_ID } from './constants/common.ts'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <StrictMode>
      <App />
    </StrictMode>,
  </GoogleOAuthProvider>
)
