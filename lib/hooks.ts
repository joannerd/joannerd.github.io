/* eslint-disable prettier/prettier */
import { useEffect } from 'react';

const useScrollLock = (isActive: boolean): void => {
  useEffect(() => {
    const isWindowsOS = navigator
      && navigator.platform
      && navigator.platform.toLowerCase().includes('win');
    if (isActive && !isWindowsOS) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isActive]);
};

export default useScrollLock;
