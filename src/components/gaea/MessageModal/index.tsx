import React from 'react';
import { PopupModal, CustomModalProps } from '@/components/antd-mobile/Modal'

export interface MessageModalProps extends Omit<CustomModalProps, 'children'> {
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
