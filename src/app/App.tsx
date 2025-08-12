import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import 'app/styles/index.scss';
import { useTheme } from 'app/providers/theme/useTheme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal';
import { StoreProvider } from 'app/providers/StoreProvider';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export function App() {
  const { theme } = useTheme();

  const [open, setIsOpen] = useState(false);
  return (
    <Suspense fallback="">
      <StoreProvider initialState={undefined}>
        <div className={classNames('app', {}, [theme])}>
          <button onClick={() => setIsOpen(true)}>open modal</button>
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      </StoreProvider>
    </Suspense>
  );
}
