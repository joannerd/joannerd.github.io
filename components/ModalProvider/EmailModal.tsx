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
  ref?: RefObject<HTMLInputElement>;
}

interface Props {
  title?: string;
  messageTemplate?: string;
  imageAttachment?: string;
}

const EmailModal = ({
  title,
  messageTemplate,
  imageAttachment,
}: Props): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;
  const closeRef = useRef<HTMLButtonElement>() as RefObject<HTMLButtonElement>;
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>(messageTemplate || '');
  const [subject, setSubject] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [shouldSendToSelf, setShouldSendToSelf] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { closeModal } = useModal();

  useEffect(() => {
    if (nameRef && nameRef.current) {
      nameRef.current.focus();
    }
  }, [nameRef]);

  const halfFields: Field[] = [
    {
      type: 'text',
      value: name,
      update: setName,
      placeholder: 'Name',
      label: 'Full Name Required',
      ref: nameRef,
    },
    {
      type: 'email',
      value: email,
      update: setEmail,
      placeholder: 'Email Address',
      label: 'Email Address Required',
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
      image: imageAttachment
        ? `<img src="${imageAttachment}" width="300px" />`
        : '',
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
    <article role="dialog" aria-modal="true" className={styles.success}>
      <i className="fas fa-check-circle" />
      <span>Your message has been sent.</span>
    </article>
  ) : (
    <article role="dialog" aria-modal="true" className={styles.modal}>
      <section className={styles.modalTop}>
        <h1 className={styles.title}>{title}</h1>
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
        <div
          className={imageAttachment ? styles.halfInputs : styles.fullInputs}
        >
          {halfFields.map(
            ({ update, value, label, placeholder, type, ref }) => (
              <input
                tabIndex={2}
                ref={ref}
                required
                aria-required
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
        </div>
        <input
          tabIndex={2}
          type="text"
          value={subject}
          key="Subject"
          aria-label="Subject"
          placeholder="Subject (Optional)"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setError('');
            setSubject(e.target.value);
          }}
        />
        {imageAttachment && (
          <img
            src={imageAttachment}
            className={styles.previewImage}
            alt="Doodle email preview"
          />
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
      className={styles.background}
      onClick={handleBackgroundClick}
      onKeyDown={handleModalKeydown}
    >
      {modalContent}
    </div>
  );
};

EmailModal.defaultProps = {
  title: 'Contact',
  messageTemplate: '',
  imageAttachment: '',
};

export default EmailModal;
