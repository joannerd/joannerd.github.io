import EmailModal from './EmailModal';
import { useModal } from '.';

const EmailDrawingModal = (): JSX.Element => {
  const { imageUrl } = useModal();
  const messageTemplate = `Hi Joanna,\n\nCheck out this cute doodle I made on your site!`;
  return (
    <EmailModal
      title="Send Doodle"
      imageAttachment={imageUrl}
      messageTemplate={messageTemplate}
    />
  )
};

export default EmailDrawingModal;
