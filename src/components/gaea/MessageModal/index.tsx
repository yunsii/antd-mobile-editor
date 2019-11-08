import React from 'react';
import { PopupModal } from '@/components/antd-mobile/Modal'

export interface MessageModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default (props: MessageModalProps) => {
  const { message, ...rest } = props;

  return (
    <PopupModal
      style={{ width: 'auto' }}
      {...rest}
    >
      <p style={{ whiteSpace: 'nowrap' }}>
        {message}
      </p>
    </PopupModal>
  )
}
