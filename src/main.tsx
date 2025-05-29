import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import QuestionPage from './pages/question.tsx'
import Header from './component/header.tsx'
import Home from './pages/home.tsx'
import SignUp from './pages/signup.tsx'
import Explore from './pages/explore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <QuestionPage /> */}
    {/* <Home /> */}
    {/* <SignUp /> */}
    <Explore />
  </StrictMode>,
)
