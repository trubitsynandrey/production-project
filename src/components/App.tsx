import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from '../pages/AboutPage/AboutPageLazy'
import { MainPageLazy } from '../pages/MainPage/MainPageLazy'
import './index.scss'


export const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>
        Главная
      </Link>
      <Link to={'/about'}>
        О сайте
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

