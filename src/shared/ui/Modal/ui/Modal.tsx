/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTheme } from 'app/providers/theme';
import {
  MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  console.log(theme, 'theme');

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: globalThis.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className])}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={cls.overlay}
          onClick={closeHandler}
          tabIndex={0}
          role="button"
          aria-label="Close modal"
        >
          <div
            className={cls.content}
            onClick={onContentClick}
            tabIndex={0} // Make it focusable
            role="presentation" // Since it's just for stopping propagation
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
