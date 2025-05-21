import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss';
import { useTheme } from 'app/providers/theme/useTheme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export function App() {
  const { theme } = useTheme();
  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}
