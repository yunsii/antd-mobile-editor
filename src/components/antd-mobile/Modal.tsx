import React from 'react';
import { Modal } from 'antd-mobile';
import { ModalProps } from 'antd-mobile/lib/modal/Modal';

export interface CustomModalProps extends ModalProps {
  children: React.ReactNode;
}

export function SlideUpModal(props: CustomModalProps) {
  const { children, ...rest } = props;
  return (
    <Modal
      popup
      animationType='slide-up'
      {...rest}
    >
      {children}
    </Modal>
  );
}

export function PopupModal(props: CustomModalProps) {
  const { children, ...rest } = props;
  return (
    <Modal
      transparent
      closable
      {...rest}
    >
      {children}
    </Modal>
  );
}
