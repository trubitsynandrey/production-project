import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from '../pages/AboutPage/AboutPageLazy'
import { MainPageLazy } from '../pages/MainPage/MainPageLazy'
import '../styles/index.scss'
import { useTheme } from '../theme/useTheme'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
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

