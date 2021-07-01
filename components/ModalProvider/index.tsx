import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import EmailModal from './EmailModal';
import EmailDrawingModal from './EmailDrawingModal';
import useScrollLock from '../../lib/hooks';

export interface ModalContextValue {
  modalType: string;
  imageUrl: string;
  openModal: (type: string) => void; // eslint-disable-line no-unused-vars
  closeModal: () => void;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

export const ModalContext: React.Context<ModalContextValue> =
  createContext<ModalContextValue>({
    modalType: '',
    imageUrl: '',
    openModal: () => {},
    closeModal: () => {},
    setImageUrl: () => {},
  });

export const useModal = (): ModalContextValue => useContext(ModalContext);

export const MODAL_TYPES = {
  HIDDEN: 'HIDDEN',
  EMAIL: 'EMAIL',
  EMAIL_DRAWING: 'EMAIL_DRAWING',
};

const ModalProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [modalType, setModalType] = useState<string>(MODAL_TYPES.HIDDEN);
  const [imageUrl, setImageUrl] = useState<string>('');
  const openModal = (type: string) => setModalType(type);
  const closeModal = () => setModalType(MODAL_TYPES.HIDDEN);
  useScrollLock(modalType !== MODAL_TYPES.HIDDEN);

  const value = useMemo(
    () => ({
      imageUrl,
      modalType,
      openModal,
      closeModal,
      setImageUrl,
    }),
    [modalType, imageUrl]
  );

  const renderModal = () => {
    switch (modalType) {
      case MODAL_TYPES.EMAIL:
        return <EmailModal />;
      case MODAL_TYPES.EMAIL_DRAWING:
        return <EmailDrawingModal />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={value}>
      {renderModal()}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
