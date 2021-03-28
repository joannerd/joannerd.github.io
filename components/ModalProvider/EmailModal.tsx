import {
  useState,
  FormEvent,
  ChangeEvent,
  MouseEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  RefObject,
  KeyboardEventHandler,
} from 'react';
import emailjs from 'emailjs-com';
import { useModal } from '.';
import styles from './EmailModal.module.css';
import { emailUserId } from '../../lib/config';

interface Field {
  type: string;
  value: string;
  update: Dispatch<SetStateAction<string>>;
  placeholder: string;
  label: string;
  isRequired: boolean;
  ref?: RefObject<HTMLInputElement>;
}

const EmailModal = (): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;
  const closeRef = useRef<HTMLButtonElement>() as RefObject<HTMLButtonElement>;
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [shouldSendToSelf, setShouldSendToSelf] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    if (isOpen && nameRef && nameRef.current) {
      nameRef.current.focus();
    }
  }, [isOpen, nameRef]);

  const fields: Field[] = [
    {
      type: 'text',
      value: name,
      update: setName,
      placeholder: 'Name',
      label: 'Full Name Required',
      isRequired: true,
      ref: nameRef,
    },
    {
      type: 'email',
      value: email,
      update: setEmail,
      placeholder: 'Email Address',
      label: 'Email Address Required',
      isRequired: true,
    },
    {
      type: 'text',
      value: subject,
      update: setSubject,
      placeholder: 'Subject (Optional)',
      label: 'Subject',
      isRequired: false,
    },
  ];

  const handleCheck = (): void => {
    setShouldSendToSelf(!shouldSendToSelf);
  };

  const handleBackgroundClick: MouseEventHandler<HTMLDivElement> = (
    e
  ): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleModalKeydown: KeyboardEventHandler<unknown> = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.code === 'Tab') {
      const { type } = e.target as HTMLButtonElement;
      if (type && type === 'submit' && closeRef && closeRef.current) {
        closeRef.current.focus();
      }
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    setIsSubmitting(true);
    e.preventDefault();

    const templateParams = {
      name,
      email,
      subject,
      message: message.replace(/\r\n|\r|\n/g, '<br>'),
      from_email: shouldSendToSelf ? email : '',
    };

    try {
      const res = await emailjs.send(
        'gmail',
        'default',
        templateParams,
        emailUserId
      );

      if (res.status !== 200) {
        throw new Error('Unable to send email. Please try again.');
      }

      resetForm();
      setIsEmailSent(true);
      setTimeout(() => {
        closeModal();
        setIsEmailSent(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
    }

    setIsSubmitting(false);
  };

  const modalContent = isEmailSent ? (
    <article
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={styles.success}
    >
      <i className="fas fa-check-circle" />
      <span>Your message has been sent.</span>
    </article>
  ) : (
    <article
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={styles.modal}
    >
      <section className={styles.modalTop}>
        <h1 className={styles.title}>Contact</h1>
        <button
          ref={closeRef}
          tabIndex={2}
          type="button"
          onClick={closeModal}
          className={styles.closeContainer}
          aria-label="Close modal"
        >
          <div className={styles.leftRight} />
          <div className={styles.rightLeft} />
        </button>
      </section>
      <form className={styles.form} onSubmit={sendEmail}>
        {fields.map(
          ({ update, value, label, placeholder, type, isRequired, ref }) => (
            <input
              tabIndex={2}
              ref={ref}
              required={isRequired}
              aria-required={isRequired}
              type={type}
              value={value}
              key={placeholder}
              aria-label={label}
              placeholder={placeholder}
              className={styles.input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setError('');
                update(e.target.value);
              }}
            />
          )
        )}
        <textarea
          tabIndex={2}
          required
          aria-required
          value={message}
          aria-label="Message"
          placeholder="Message"
          rows={6}
          className={styles.textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />
        <label className={styles.label}>
          <input
            tabIndex={2}
            type="checkbox"
            checked={shouldSendToSelf}
            onChange={handleCheck}
            className={styles.checkbox}
          />
          <span>Send a copy to my email address</span>
        </label>
        {error && <span className={styles.error}>{error}</span>}
        <button
          tabIndex={2}
          type="submit"
          disabled={isSubmitting}
          className={error ? styles.submitWithError : styles.submit}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </article>
  );

  return (
    <div
      aria-hidden
      className={isOpen ? styles.background : styles.hidden}
      onClick={handleBackgroundClick}
      onKeyDown={handleModalKeydown}
    >
      {modalContent}
    </div>
  );
};

export default EmailModal;
