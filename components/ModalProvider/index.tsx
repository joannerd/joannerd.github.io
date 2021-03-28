import { createContext, useContext, useState, ReactNode } from 'react';
import EmailModal from './EmailModal';
import useScrollLock from '../../lib/hooks';

export interface ModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext: React.Context<ModalContextValue> = createContext<ModalContextValue>(
  {
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
  }
);

export const useModal = (): ModalContextValue => useContext(ModalContext);

const ModalProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useScrollLock(isOpen);

  const value = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      <EmailModal />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
