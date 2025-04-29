import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import 'app/styles/index.scss'
import { useTheme } from 'app/providers/theme/useTheme'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTranslation } from 'react-i18next'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('Welcome to React')}</h1>
}

export const App = () => {
  const { theme } = useTheme()
  return (
    <Suspense fallback={''}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <MyComponent />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}

