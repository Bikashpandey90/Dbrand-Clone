import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/main.css'
import DBrand from '@/pages/app'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <h1 className='text-red-600'>hello vite and react</h1> */}
    <DBrand />
  </StrictMode>,
)

