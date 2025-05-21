import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(cls.loadingioSpinner, {}, [className])}>
    <div className={cls.ldio}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
