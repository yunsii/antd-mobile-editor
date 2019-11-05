import React from 'react';
import { Flex } from 'antd-mobile';
import classNames from 'classnames';
import styles from './index.less';

export interface DescriptionProps {
  label: string;
  key?: React.Key;
  align?: [React.CSSProperties['textAlign'], React.CSSProperties['textAlign']];
  style?: React.CSSProperties;
  labelClassName?: string;
  className?: string;
  flex?: number | [number, number];
}

export default (props: React.PropsWithChildren<DescriptionProps>) => {
  const {
    label,
    children,
    className,
    flex,
    align = ['end', 'unset'],
    labelClassName,
    ...rest
  } = props;
  let layout: [number, number] = [1, 4];
  if (Array.isArray(flex)) {
    layout = flex;
  } else if (flex) {
    layout = [flex, flex];
  }

  return (
    <Flex className={classNames(styles.description, className)} {...rest}>
      <Flex.Item
        style={{ flex: layout[0], textAlign: align[0] }}
        className={classNames(styles.label, labelClassName)}
      >
        {label}
      </Flex.Item>
      <Flex.Item
        style={{ flex: layout[1], textAlign: align[1] }}
        className={styles.children}
      >
        {children || '-'}
      </Flex.Item>
    </Flex>
  )
}